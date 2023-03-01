/*! For license information please see index.production.js.LICENSE */
!(function webpackUniversalModuleDefinition(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('CognusChatbot', [], e)
    : 'object' == typeof exports
    ? (exports.CognusChatbot = e())
    : (t.CognusChatbot = e());
})(window, function () {
  return (function (n) {
    var r = {};
    function __webpack_require__(t) {
      if (r[t]) return r[t].exports;
      var e = (r[t] = { i: t, l: !1, exports: {} });
      return (
        n[t].call(e.exports, e, e.exports, __webpack_require__),
        (e.l = !0),
        e.exports
      );
    }
    return (
      (__webpack_require__.m = n),
      (__webpack_require__.c = r),
      (__webpack_require__.d = function (t, e, n) {
        __webpack_require__.o(t, e) ||
          Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (__webpack_require__.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (__webpack_require__.t = function (e, t) {
        if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (__webpack_require__.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            __webpack_require__.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (__webpack_require__.n = function (t) {
        var e =
          t && t.__esModule
            ? function getDefault() {
                return t.default;
              }
            : function getModuleExports() {
                return t;
              };
        return __webpack_require__.d(e, 'a', e), e;
      }),
      (__webpack_require__.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (__webpack_require__.p = ''),
      __webpack_require__((__webpack_require__.s = './src/index.js'))
    );
  })({
    './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js':
      function (t, e) {
        !(function () {
          'use strict';
          var e,
            n = !1,
            r = [],
            o = !1;
          function fireEvent() {
            (window.WebComponents.ready = !0),
              document.dispatchEvent(
                new CustomEvent('WebComponentsReady', { bubbles: !0 })
              );
          }
          function batchCustomElements() {
            window.customElements &&
              customElements.polyfillWrapFlushCallback &&
              customElements.polyfillWrapFlushCallback(function (t) {
                (e = t), o && e();
              });
          }
          function ready() {
            window.HTMLTemplateElement &&
              HTMLTemplateElement.bootstrap &&
              HTMLTemplateElement.bootstrap(window.document),
              (n = !0),
              runWhenLoadedFns().then(fireEvent);
          }
          function runWhenLoadedFns() {
            o = !1;
            var t = r.map(function (t) {
              return t instanceof Function ? t() : t;
            });
            return (
              (r = []),
              Promise.all(t)
                .then(function () {
                  (o = !0), e && e();
                })
                .catch(function (t) {
                  console.error(t);
                })
            );
          }
          (window.WebComponents = window.WebComponents || {}),
            (window.WebComponents.ready = window.WebComponents.ready || !1),
            (window.WebComponents.waitFor =
              window.WebComponents.waitFor ||
              function (t) {
                t && (r.push(t), n && runWhenLoadedFns());
              }),
            (window.WebComponents._batchCustomElements = batchCustomElements);
          var t,
            a = 'webcomponents-loader.js',
            s = [],
            i =
              (('attachShadow' in Element.prototype &&
                'getRootNode' in Element.prototype &&
                (!window.ShadyDOM || !window.ShadyDOM.force)) ||
                s.push('sd'),
              (window.customElements && !window.customElements.forcePolyfill) ||
                s.push('ce'),
              (function () {
                var t = document.createElement('template');
                if (!('content' in t)) return !0;
                if (!(t.content.cloneNode() instanceof DocumentFragment))
                  return !0;
                var e = document.createElement('template'),
                  e =
                    (e.content.appendChild(document.createElement('div')),
                    t.content.appendChild(e),
                    t.cloneNode(!0));
                return (
                  0 === e.content.childNodes.length ||
                  0 === e.content.firstChild.content.childNodes.length
                );
              })());
          (s =
            window.Promise && Array.from && window.URL && window.Symbol && !i
              ? s
              : ['sd-ce-pf']).length
            ? ((i = 'bundles/webcomponents-' + s.join('-') + '.js'),
              (t = window.WebComponents.root
                ? window.WebComponents.root + i
                : document
                    .querySelector('script[src*="' + a + '"]')
                    .src.replace(a, i)),
              ((s = document.createElement('script')).src = t),
              'loading' === document.readyState
                ? (s.setAttribute(
                    'onload',
                    'window.WebComponents._batchCustomElements()'
                  ),
                  document.write(s.outerHTML),
                  document.addEventListener('DOMContentLoaded', ready))
                : (s.addEventListener('load', function () {
                    !(function asyncReady() {
                      batchCustomElements(), ready();
                    })();
                  }),
                  s.addEventListener('error', function () {
                    throw new Error('Could not load polyfill bundle' + t);
                  }),
                  document.head.appendChild(s)))
            : 'complete' === document.readyState
            ? ((n = !0), fireEvent())
            : (window.addEventListener('load', ready),
              window.addEventListener('DOMContentLoaded', function () {
                window.removeEventListener('load', ready), ready();
              }));
        })();
      },
    './node_modules/BlueDarwinJS/src/app-constants.js': function (t, e, n) {
      'use strict';
      n.r(e);
      e.default = {
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
          URL_IFRAME:
            'https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/',
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
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/auth/api-login.js': function (
      t,
      e,
      u
    ) {
      'use strict';
      u.r(e);
      var l = u('./node_modules/BlueDarwinJS/src/app-constants.js'),
        f = u(
          './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js'
        ),
        p = u(
          './node_modules/BlueDarwinJS/src/helpers/auth/set-logged-in-state.js'
        ),
        h = u('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        _ = u('./node_modules/BlueDarwinJS/src/services/http.js'),
        y = u('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        m = u('./node_modules/BlueDarwinJS/src/services/response.js'),
        v = u('./node_modules/BlueDarwinJS/src/services/state.js'),
        u = u('./node_modules/BlueDarwinJS/src/services/storage.js');
      e.default = async function (
        e,
        n = new _.default(),
        r = new y.default(),
        o = new h.default(),
        a = new m.default(),
        s = new u.default(),
        i = new v.default()
      ) {
        try {
          let t;
          var c = e[0],
            d = e[1];
          return (
            (t =
              (t = await n.post(
                'letmein',
                { email: c, password: r.encryptString(d) },
                { skipEncryption: !0, loginDecryption: d, getFullResponse: !0 }
              )).data || t),
            await Object(f.default)(t, n, r, i, s, a),
            Object(p.default)(i),
            o.emit(l.default.EVENTS.LOGGED_IN),
            a.ok({ data: { id: t.user.id, key: t.key, token: t.token } })
          );
        } catch (t) {
          throw (
            (o.emit(l.default.EVENTS.LOGIN_FAIL),
            a.error({ data: t, message: 'ERROR.LOGIN_FAIL' }))
          );
        }
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/auth/check-login-type.js':
      function (t, e, r) {
        'use strict';
        r.r(e);
        var o = r('./node_modules/BlueDarwinJS/src/app-constants.js'),
          a = r('./node_modules/BlueDarwinJS/src/helpers/regex/is-email.js'),
          r = r('./node_modules/BlueDarwinJS/src/services/state.js');
        e.default = function (t, e = new r.default()) {
          let n = o.default.LOGIN_TYPES[1];
          return (
            ('cognus' !== t && !Object(a.default)(t)) ||
              (n = o.default.LOGIN_TYPES[0]),
            e.set(o.default.STATES.LOGIN_METHOD, n),
            n
          );
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/auth/login-chatbot.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      var l = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
        f = n(
          './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js'
        ),
        p = n(
          './node_modules/BlueDarwinJS/src/helpers/auth/set-logged-in-state.js'
        ),
        h = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        _ = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        y = n('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        m = n('./node_modules/BlueDarwinJS/src/services/response.js'),
        v = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        x = n('./node_modules/BlueDarwinJS/src/services/storage.js'),
        b = n('./node_modules/BlueDarwinJS/src/helpers/device-info-uuid.js');
      e.default = async function (
        e,
        n = new v.default(),
        r = new _.default(),
        o = new y.default(),
        a = new h.default(),
        s = new m.default(),
        i = new x.default()
      ) {
        try {
          let t;
          var c = e[0],
            d = e[1],
            u = b.default.machine();
          return (
            (t =
              (t = await r.post(
                'let-the-chatbot-in-v2',
                { channelToken: c, apiKey: d, machineUuid: u },
                {
                  skipEncryption: !0,
                  loginDecryption: e[1],
                  getFullResponse: !0,
                }
              )).data || t),
            await Object(f.default)(t, r, o, n, i, s),
            Object(p.default)(n),
            a.emit(l.default.EVENTS.LOGGED_IN),
            s.ok({ data: { module: t.module, key: t.key, token: t.token } })
          );
        } catch (t) {
          throw (
            (a.emit(l.default.EVENTS.LOGIN_FAIL),
            s.error({ data: t, message: 'ERROR.LOGIN_FAIL' }))
          );
        }
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/auth/login.js': function (
      t,
      e,
      c
    ) {
      'use strict';
      c.r(e);
      var d = c('./node_modules/BlueDarwinJS/src/app-constants.js'),
        u = c('./node_modules/BlueDarwinJS/src/helpers/auth/api-login.js'),
        l = c(
          './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js'
        ),
        f = c(
          './node_modules/BlueDarwinJS/src/helpers/auth/check-login-type.js'
        ),
        p = c('./node_modules/BlueDarwinJS/src/services/state.js'),
        h = c('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        _ = c('./node_modules/BlueDarwinJS/src/services/http.js'),
        y = c('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        m = c('./node_modules/BlueDarwinJS/src/services/response.js'),
        c = c('./node_modules/BlueDarwinJS/src/services/storage.js');
      e.default = function (
        t,
        e = new p.default(),
        n = new _.default(),
        r = new y.default(),
        o = new h.default(),
        a = new m.default(),
        s = new c.default()
      ) {
        var i = Object(f.default)(t[0], e);
        return (
          e.set(d.default.STATES.LOGIN_METHOD, i),
          i === d.default.LOGIN_TYPES[0]
            ? Object(u.default)(t, n, r, o, a, s, e)
            : Object(l.default)(t, n, r, e, s, a)
        );
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/auth/logout.js': function (
      t,
      e,
      r
    ) {
      'use strict';
      r.r(e);
      var o = r('./node_modules/BlueDarwinJS/src/app-constants.js'),
        a = r('./node_modules/BlueDarwinJS/src/services/state.js'),
        s = r('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        r = r('./node_modules/BlueDarwinJS/src/services/storage.js');
      e.default = function (
        t = new a.default(),
        e = new s.default(),
        n = new r.default()
      ) {
        return (
          t.delete(o.default.STATES.IS_LOGGED_IN),
          t.delete(o.default.STATES.LOGIN_METHOD),
          t.delete(o.default.STATES.HAS_USER),
          t.delete(o.default.STATES.HAS_TOKEN),
          t.delete(o.default.STATES.HAS_KEY),
          t.delete(o.default.STATES.MODEL_INTENT),
          t.delete(o.default.STATES.MODEL_MODULE),
          t.delete(o.default.STATES.MODEL_CHANNELS),
          t.delete(o.default.STATES.MODEL_SESSION),
          n.delete(o.default.STORAGE.TOKEN),
          n.delete(o.default.STORAGE.KEY),
          n.delete(o.default.STORAGE.OLD_KEY),
          n.delete(o.default.STORAGE.USER),
          e.emit(o.default.EVENTS.LOGGED_OUT),
          Promise.resolve()
        );
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var c = n('./node_modules/BlueDarwinJS/src/services/encryption.js'),
          d = n('./node_modules/BlueDarwinJS/src/services/http.js'),
          u = n('./node_modules/BlueDarwinJS/src/services/state.js'),
          l = n('./node_modules/BlueDarwinJS/src/services/storage.js'),
          f = n('./node_modules/BlueDarwinJS/src/services/response.js'),
          p = n('./node_modules/BlueDarwinJS/src/app-constants.js');
        e.default = function (
          t,
          e = new d.default(),
          n = new c.default(),
          r = new u.default(),
          o = new l.default(),
          a = new f.default()
        ) {
          var s = (t = t.data || t).token,
            i = t.key,
            t = t.user || {};
          return (
            n.updateKey(i),
            e.updateToken(s),
            r.set(p.default.STATES.HAS_USER, t),
            r.set(p.default.STATES.HAS_TOKEN, s),
            r.set(p.default.STATES.HAS_KEY, i),
            o.set(p.default.STORAGE.USER, t),
            Promise.resolve(a.ok({ token: s, key: i, user: t }))
          );
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/auth/set-logged-in-state.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
          n = n('./node_modules/BlueDarwinJS/src/services/state.js');
        e.default = function (t = new n.default()) {
          t.set(r.default.STATES.IS_LOGGED_IN, !0);
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/config-objects/config.js':
      function (t, e, n) {
        'use strict';
        n.r(e),
          (e.default = {
            original: { environment: 'production', language: 'en_EN' },
            possible: {
              environment: ['development', 'staging', 'production', 'local'],
              language: ['en_EN'],
            },
          });
      },
    './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request-body.js':
      function (t, e, n) {
        'use strict';
        n.r(e), (e.default = { skipEncryption: !1 });
      },
    './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request.js':
      function (t, e, n) {
        'use strict';
        n.r(e),
          (e.default = {
            skipEncryption: !1,
            loginDecryption: !1,
            getFullResponse: !1,
          });
      },
    './node_modules/BlueDarwinJS/src/helpers/config-objects/response.js':
      function (t, e, n) {
        'use strict';
        n.r(e), (e.default = { data: !1, message: !1 });
      },
    './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        e.default = function (t, r) {
          t.forEach((e) => {
            let n;
            try {
              n = new e();
            } catch (t) {
              n = e;
            }
            let t = n.constructor.name;
            'Object' === n.constructor.name &&
              ((r.Configuration = n), (t = 'Configuration')),
              (r[t] = n);
          });
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/device-info-uuid.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      function Hb(t) {
        var e,
          n = {
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
        for (e in (t = t || {}))
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
              var e,
                n,
                r = 0;
              if (0 === t.length) return r;
              for (e = 0, n = t.length; e < n; e++)
                (r = (r << 5) - r + t.charCodeAt(e)), (r |= 0);
              return r;
            },
            hashMD5: function (t) {
              function rotateLeft(t, e) {
                return (t << e) | (t >>> (32 - e));
              }
              function addUnsigned(t, e) {
                var n = 2147483648 & t,
                  r = 2147483648 & e,
                  o = 1073741824 & t,
                  a = 1073741824 & e,
                  t = (1073741823 & t) + (1073741823 & e);
                return o & a
                  ? 2147483648 ^ t ^ n ^ r
                  : o | a
                  ? 1073741824 & t
                    ? 3221225472 ^ t ^ n ^ r
                    : 1073741824 ^ t ^ n ^ r
                  : t ^ n ^ r;
              }
              function gFF(t, e, n, r, o, a, s) {
                return (
                  (t = addUnsigned(
                    t,
                    addUnsigned(
                      addUnsigned(
                        (function gF(t, e, n) {
                          return (t & e) | (~t & n);
                        })(e, n, r),
                        o
                      ),
                      s
                    )
                  )),
                  addUnsigned(rotateLeft(t, a), e)
                );
              }
              function gGG(t, e, n, r, o, a, s) {
                return (
                  (t = addUnsigned(
                    t,
                    addUnsigned(
                      addUnsigned(
                        (function gG(t, e, n) {
                          return (t & n) | (e & ~n);
                        })(e, n, r),
                        o
                      ),
                      s
                    )
                  )),
                  addUnsigned(rotateLeft(t, a), e)
                );
              }
              function gHH(t, e, n, r, o, a, s) {
                return (
                  (t = addUnsigned(
                    t,
                    addUnsigned(
                      addUnsigned(
                        (function gH(t, e, n) {
                          return t ^ e ^ n;
                        })(e, n, r),
                        o
                      ),
                      s
                    )
                  )),
                  addUnsigned(rotateLeft(t, a), e)
                );
              }
              function gII(t, e, n, r, o, a, s) {
                return (
                  (t = addUnsigned(
                    t,
                    addUnsigned(
                      addUnsigned(
                        (function gI(t, e, n) {
                          return e ^ (t | ~n);
                        })(e, n, r),
                        o
                      ),
                      s
                    )
                  )),
                  addUnsigned(rotateLeft(t, a), e)
                );
              }
              function wordToHex(t) {
                for (var e = '', n = '', r = 0; r <= 3; r++)
                  e += (n = '0' + ((t >>> (8 * r)) & 255).toString(16)).substr(
                    n.length - 2,
                    2
                  );
                return e;
              }
              for (
                var e,
                  n,
                  r,
                  o,
                  a = (function convertToWordArray(t) {
                    for (
                      var e,
                        n = t.length,
                        r = 16 * (1 + ((r = n + 8) - (r % 64)) / 64),
                        o = new Array(r - 1),
                        a = 0,
                        s = 0;
                      s < n;

                    )
                      (a = (s % 4) * 8),
                        (o[(e = (s - (s % 4)) / 4)] =
                          o[e] | (t.charCodeAt(s) << a)),
                        s++;
                    return (
                      (o[(e = (s - (s % 4)) / 4)] =
                        o[e] | (128 << (a = (s % 4) * 8))),
                      (o[r - 2] = n << 3),
                      (o[r - 1] = n >>> 29),
                      o
                    );
                  })(
                    (t = (function utf8Encode(t) {
                      t = t.replace(/\r\n/g, '\n');
                      for (var e = '', n = 0; n < t.length; n++) {
                        var r = t.charCodeAt(n);
                        r < 128
                          ? (e += String.fromCharCode(r))
                          : (e =
                              127 < r && r < 2048
                                ? (e += String.fromCharCode((r >> 6) | 192)) +
                                  String.fromCharCode((63 & r) | 128)
                                : (e =
                                    (e += String.fromCharCode(
                                      (r >> 12) | 224
                                    )) +
                                    String.fromCharCode(
                                      ((r >> 6) & 63) | 128
                                    )) + String.fromCharCode((63 & r) | 128));
                      }
                      return e;
                    })(t))
                  ),
                  s = 1732584193,
                  i = 4023233417,
                  c = 2562383102,
                  d = 271733878,
                  u = 0;
                u < a.length;
                u += 16
              )
                (s = gFF(
                  (e = s),
                  (n = i),
                  (r = c),
                  (o = d),
                  a[u + 0],
                  7,
                  3614090360
                )),
                  (d = gFF(d, s, i, c, a[u + 1], 12, 3905402710)),
                  (c = gFF(c, d, s, i, a[u + 2], 17, 606105819)),
                  (i = gFF(i, c, d, s, a[u + 3], 22, 3250441966)),
                  (s = gFF(s, i, c, d, a[u + 4], 7, 4118548399)),
                  (d = gFF(d, s, i, c, a[u + 5], 12, 1200080426)),
                  (c = gFF(c, d, s, i, a[u + 6], 17, 2821735955)),
                  (i = gFF(i, c, d, s, a[u + 7], 22, 4249261313)),
                  (s = gFF(s, i, c, d, a[u + 8], 7, 1770035416)),
                  (d = gFF(d, s, i, c, a[u + 9], 12, 2336552879)),
                  (c = gFF(c, d, s, i, a[u + 10], 17, 4294925233)),
                  (i = gFF(i, c, d, s, a[u + 11], 22, 2304563134)),
                  (s = gFF(s, i, c, d, a[u + 12], 7, 1804603682)),
                  (d = gFF(d, s, i, c, a[u + 13], 12, 4254626195)),
                  (c = gFF(c, d, s, i, a[u + 14], 17, 2792965006)),
                  (s = gGG(
                    s,
                    (i = gFF(i, c, d, s, a[u + 15], 22, 1236535329)),
                    c,
                    d,
                    a[u + 1],
                    5,
                    4129170786
                  )),
                  (d = gGG(d, s, i, c, a[u + 6], 9, 3225465664)),
                  (c = gGG(c, d, s, i, a[u + 11], 14, 643717713)),
                  (i = gGG(i, c, d, s, a[u + 0], 20, 3921069994)),
                  (s = gGG(s, i, c, d, a[u + 5], 5, 3593408605)),
                  (d = gGG(d, s, i, c, a[u + 10], 9, 38016083)),
                  (c = gGG(c, d, s, i, a[u + 15], 14, 3634488961)),
                  (i = gGG(i, c, d, s, a[u + 4], 20, 3889429448)),
                  (s = gGG(s, i, c, d, a[u + 9], 5, 568446438)),
                  (d = gGG(d, s, i, c, a[u + 14], 9, 3275163606)),
                  (c = gGG(c, d, s, i, a[u + 3], 14, 4107603335)),
                  (i = gGG(i, c, d, s, a[u + 8], 20, 1163531501)),
                  (s = gGG(s, i, c, d, a[u + 13], 5, 2850285829)),
                  (d = gGG(d, s, i, c, a[u + 2], 9, 4243563512)),
                  (c = gGG(c, d, s, i, a[u + 7], 14, 1735328473)),
                  (s = gHH(
                    s,
                    (i = gGG(i, c, d, s, a[u + 12], 20, 2368359562)),
                    c,
                    d,
                    a[u + 5],
                    4,
                    4294588738
                  )),
                  (d = gHH(d, s, i, c, a[u + 8], 11, 2272392833)),
                  (c = gHH(c, d, s, i, a[u + 11], 16, 1839030562)),
                  (i = gHH(i, c, d, s, a[u + 14], 23, 4259657740)),
                  (s = gHH(s, i, c, d, a[u + 1], 4, 2763975236)),
                  (d = gHH(d, s, i, c, a[u + 4], 11, 1272893353)),
                  (c = gHH(c, d, s, i, a[u + 7], 16, 4139469664)),
                  (i = gHH(i, c, d, s, a[u + 10], 23, 3200236656)),
                  (s = gHH(s, i, c, d, a[u + 13], 4, 681279174)),
                  (d = gHH(d, s, i, c, a[u + 0], 11, 3936430074)),
                  (c = gHH(c, d, s, i, a[u + 3], 16, 3572445317)),
                  (i = gHH(i, c, d, s, a[u + 6], 23, 76029189)),
                  (s = gHH(s, i, c, d, a[u + 9], 4, 3654602809)),
                  (d = gHH(d, s, i, c, a[u + 12], 11, 3873151461)),
                  (c = gHH(c, d, s, i, a[u + 15], 16, 530742520)),
                  (s = gII(
                    s,
                    (i = gHH(i, c, d, s, a[u + 2], 23, 3299628645)),
                    c,
                    d,
                    a[u + 0],
                    6,
                    4096336452
                  )),
                  (d = gII(d, s, i, c, a[u + 7], 10, 1126891415)),
                  (c = gII(c, d, s, i, a[u + 14], 15, 2878612391)),
                  (i = gII(i, c, d, s, a[u + 5], 21, 4237533241)),
                  (s = gII(s, i, c, d, a[u + 12], 6, 1700485571)),
                  (d = gII(d, s, i, c, a[u + 3], 10, 2399980690)),
                  (c = gII(c, d, s, i, a[u + 10], 15, 4293915773)),
                  (i = gII(i, c, d, s, a[u + 1], 21, 2240044497)),
                  (s = gII(s, i, c, d, a[u + 8], 6, 1873313359)),
                  (d = gII(d, s, i, c, a[u + 15], 10, 4264355552)),
                  (c = gII(c, d, s, i, a[u + 6], 15, 2734768916)),
                  (i = gII(i, c, d, s, a[u + 13], 21, 1309151649)),
                  (s = gII(s, i, c, d, a[u + 4], 6, 4149444226)),
                  (d = gII(d, s, i, c, a[u + 11], 10, 3174756917)),
                  (c = gII(c, d, s, i, a[u + 2], 15, 718787259)),
                  (i = gII(i, c, d, s, a[u + 9], 21, 3951481745)),
                  (s = addUnsigned(s, e)),
                  (i = addUnsigned(i, n)),
                  (c = addUnsigned(c, r)),
                  (d = addUnsigned(d, o));
              return (
                wordToHex(s) +
                wordToHex(i) +
                wordToHex(c) +
                wordToHex(d)
              ).toLowerCase();
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
                if (this._Versions.Opera.test(t)) return RegExp.$1 || RegExp.$2;
                break;
              case 'Firefox':
                if (this._Versions.Firefox.test(t)) return RegExp.$1;
                break;
              case 'WinJs':
                if (this._Versions.WinJs.test(t)) return RegExp.$1;
                break;
              case 'IE':
                if (this._Versions.IE.test(t)) return RegExp.$2 || RegExp.$1;
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
            var t,
              e,
              n = this;
            this.Agent.isIE &&
              /Trident\/(\d)\.0/i.test(n.Agent.source) &&
              ((t = parseInt(RegExp.$1, 10)),
              7 === (e = parseInt(n.Agent.version, 10)) &&
                7 === t &&
                ((n.Agent.isIECompatibilityMode = !0), (n.Agent.version = 11)),
              7 === e &&
                6 === t &&
                ((n.Agent.isIECompatibilityMode = !0), (n.Agent.version = 10)),
              7 === e &&
                5 === t &&
                ((n.Agent.isIECompatibilityMode = !0), (n.Agent.version = 9)),
              7 === e &&
                4 === t &&
                ((n.Agent.isIECompatibilityMode = !0), (n.Agent.version = 8)));
          }),
          (this.testSilk = function () {
            return (
              !0 === new RegExp('silk', 'gi').test(this.Agent.source) &&
                (this.Agent.isSilk = !0),
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
                return (this.Agent.isKindleFire = !0), 'Kindle Fire HD 8.9 4G';
              case /KFSOWI/gi.test(t.Agent.source):
                return (this.Agent.isKindleFire = !0), 'Kindle Fire HD 7';
              case /KFTHWI/gi.test(t.Agent.source):
                return (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 7';
              case /KFTHWA/gi.test(t.Agent.source):
                return (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 7 4G';
              case /KFAPWI/gi.test(t.Agent.source):
                return (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 8.9';
              case /KFAPWA/gi.test(t.Agent.source):
                return (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 8.9 4G';
              default:
                return !1;
            }
          }),
          (this.testCaptiveNetwork = function () {
            return (
              !0 === /CaptiveNetwork/gi.test(this.Agent.source) &&
              ((this.Agent.isCaptive = !0),
              (this.Agent.isMac = !0),
              (this.Agent.platform = 'Apple Mac'),
              'CaptiveNetwork')
            );
          }),
          (this.testMobile = function testMobile() {
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
          (this.testTablet = function testTablet() {
            var t = this;
            switch (!0) {
              case t.Agent.isiPad:
              case t.Agent.isAndroidTablet:
              case t.Agent.isKindleFire:
                t.Agent.isTablet = !0;
            }
            /tablet/i.test(t.Agent.source) && (t.Agent.isTablet = !0);
          }),
          (this.testNginxGeoIP = function testNginxGeoIP(e) {
            var n = this;
            Object.keys(e).forEach(function (t) {
              /^GEOIP/i.test(t) && (n.Agent.geoIp[t] = e[t]);
            });
          }),
          (this.testBot = function testBot() {
            var t = this,
              e = r.exec(t.Agent.source.toLowerCase());
            e
              ? (t.Agent.isBot = e[1])
              : t.Agent.isAuthoritative ||
                (t.Agent.isBot = /bot/i.test(t.Agent.source));
          }),
          (this.testSmartTV = function testBot() {
            var t = new RegExp(
              'smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv',
              'gi'
            ).exec(this.Agent.source.toLowerCase());
            t && (this.Agent.isSmartTV = t[1]);
          }),
          (this.testAndroidTablet = function testAndroidTablet() {
            this.Agent.isAndroid &&
              !/mobile/i.test(this.Agent.source) &&
              (this.Agent.isAndroidTablet = !0);
          }),
          (this.testTouchSupport = function () {
            this.Agent.isTouchScreen =
              'ontouchstart' in window ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints;
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
          (this.reset = function reset() {
            var t,
              e = this;
            for (t in e.DefaultAgent)
              e.DefaultAgent.hasOwnProperty(t) &&
                (e.Agent[t] = e.DefaultAgent[t]);
            return e;
          }),
          (this.parse = function get(t) {
            t = t || navigator.userAgent;
            var e = new Hb();
            return (
              (e.Agent.source = t.replace(/^\s*/, '').replace(/\s*$/, '')),
              (e.Agent.os = e.getOS(e.Agent.source)),
              (e.Agent.platform = e.getPlatform(e.Agent.source)),
              (e.Agent.browser = e.getBrowser(e.Agent.source)),
              (e.Agent.version = e.getBrowserVersion(e.Agent.source)),
              e.testBot(),
              e.testSmartTV(),
              e.testMobile(),
              e.testAndroidTablet(),
              e.testTablet(),
              e.testCompatibilityMode(),
              e.testSilk(),
              e.testKindleFire(),
              e.testCaptiveNetwork(),
              e.testTouchSupport(),
              e.getLaguage(),
              e.getColorDepth(),
              e.getPixelDepth(),
              e.getScreenResolution(),
              e.getCPU(),
              e.Agent
            );
          }),
          (this.get = function (t) {
            var e,
              n = this.parse(),
              r = [];
            for (e in this.options)
              this.options.hasOwnProperty(e) &&
                !0 === this.options[e] &&
                r.push(n[e]);
            t && r.push(t),
              !this.options.resolution && n.isMobile && r.push(n.resolution);
            t = n.hashMD5(r.join(':'));
            return [
              t.slice(0, 8),
              t.slice(8, 12),
              '4' + t.slice(12, 15),
              'b' + t.slice(15, 18),
              t.slice(20),
            ].join('-');
          }),
          (this.Agent = this.DefaultAgent),
          this
        );
      }
      var r = new RegExp(
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
        o = 'bluedarwin-chatbot__machine_uuid';
      e.default = {
        info() {
          return new Hb().parse();
        },
        machine() {
          var t = localStorage.getItem(o);
          return (
            t ||
            ((t =
              new Hb().get() +
              '_' +
              new Date().getTime() +
              '_' +
              'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                function (t) {
                  var e = (16 * Math.random()) | 0;
                  return ('x' == t ? e : (3 & e) | 8).toString(16);
                }
              )),
            localStorage.setItem(o, t),
            t)
          );
        },
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/encryption/decrypt-payload.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/lodash.isobject/index.js'),
          a = n.n(r),
          r = n('./node_modules/base-encryption/index.js'),
          o = n.n(r),
          s = n(
            './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js'
          );
        function decrypt(t, e) {
          t = o.a.twoWayDecrypt(t.cognus || t.data || t.error || t, e);
          return JSON.parse(t);
        }
        e.default = function (e, t = '', n = '', r, o) {
          if (!Object(s.default)(r)) return e;
          if (!a()(e) || (!e.cognus && !e.error && !e.data))
            throw { message: 'ERROR.INVALID_COGNUS_RESPONSE_OBJECT' };
          if (e.error) return e;
          try {
            return decrypt(e, o || t);
          } catch (t) {
            try {
              return decrypt(e, o || n);
            } catch (t) {
              throw { data: t, message: 'ERROR.FAILED_TO_DECRYPT' };
            }
          }
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-payload.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/base-encryption/index.js'),
          o = n.n(r),
          a = n(
            './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js'
          );
        e.default = function (t, e, n) {
          return Object(a.default)(n) ? { cognus: o.a.twoWayEncrypt(t, e) } : t;
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-string.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/base-encryption/index.js'),
          o = n.n(r),
          a = n(
            './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js'
          );
        e.default = function (t, e) {
          return Object(a.default)(e) ? o.a.oneWayEncrypt(t) : t;
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        e.default = function (t = !1) {
          return t;
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/encryption/update-key.js':
      function (t, e, r) {
        'use strict';
        r.r(e);
        var o = r('./node_modules/BlueDarwinJS/src/app-constants.js'),
          r = r('./node_modules/BlueDarwinJS/src/services/storage.js');
        e.default = function (
          t,
          e = { key: '', oldKey: '' },
          n = new r.default()
        ) {
          (e.oldKey = e.key),
            (e.key = t),
            n.set(o.default.STORAGE.OLD_KEY, e.oldKey),
            n.set(o.default.STORAGE.KEY, e.key);
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/extend-and-keep-structure.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        e.default = function (e, n) {
          const r = {};
          return (
            Object.keys(e).forEach((t) => {
              r[t] = n[t] || e[t];
            }),
            r
          );
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/get-chatbot-user-id.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        a = n('./node_modules/BlueDarwinJS/src/helpers/uuid.js');
      e.default = function (t = new o.default()) {
        var e = t.get(r.default.STATES.HAS_USER).id;
        let n = t.get(r.default.STATES.HAS_CLIENT_USER_ID);
        if (e)
          return (
            n ||
              ((n = Object(a.default)()),
              t.set(r.default.STATES.HAS_CLIENT_USER_ID, n)),
            `cb_${e}-` + n
          );
        throw 'To get a chatbot user, you need a valid user with id';
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/build-url.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      n = n('./node_modules/BlueDarwinJS/src/services/configuration.js');
      e.default = function (t, e = new n.default()) {
        return (
          e.url.api +
          '/' +
          t
            .split('/')
            .filter((t) => '' !== t)
            .join('/')
        );
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/check-response-for-key-and-token.js':
      function (t, e, s) {
        'use strict';
        s.r(e);
        var i = s(
            './node_modules/BlueDarwinJS/src/helpers/http/update-token.js'
          ),
          c = s('./node_modules/BlueDarwinJS/src/services/validator.js'),
          d = s('./node_modules/BlueDarwinJS/src/services/encryption.js'),
          s = s('./node_modules/BlueDarwinJS/src/services/storage.js');
        e.default = function (
          t,
          e = { token: '' },
          n = new c.default(),
          r = new d.default(),
          o = new s.default()
        ) {
          var a = t.token,
            t = t.key;
          a && n.isFunction(i.default) && Object(i.default)(a, e, o),
            t && r.updateKey(t);
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/http/event-token-negotiation-required.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
          n = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js');
        e.default = function (t = new n.default()) {
          t.emit(r.default.EVENTS.TOKEN_NEGOTIATION_REQUIRED);
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/http/get-headers.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      e.default = function (t = { token: '' }) {
        return {
          'Content-Type': 'application/json',
          'x-access-token': t.token,
        };
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/handle-fail.js': function (
      t,
      e,
      o
    ) {
      'use strict';
      o.r(e);
      var a = o('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        o = o('./node_modules/BlueDarwinJS/src/services/response.js');
      e.default = function (t, e = new o.default(), n = new a.default()) {
        try {
          var r = n.decryptPayload(t);
          return e.error({ data: r, message: 'ERROR.HTTP_REQUEST_FAIL' });
        } catch (t) {
          return e.error({ data: t, message: 'ERROR.FAILED_TO_DECRYPT' });
        }
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/handle-request.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      let r;
      if (!r)
        try {
          r = fetch;
        } catch (t) {
          try {
            r = n('./node_modules/node-fetch/browser.js');
          } catch (t) {}
        }
      e.default = async function (t, e) {
        let n = await r(t, e);
        t = await n.json();
        return { response: n, data: t };
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/handle-response.js':
      function (t, e, c) {
        'use strict';
        c.r(e);
        var d = c('./node_modules/BlueDarwinJS/src/services/encryption.js'),
          u = c(
            './node_modules/BlueDarwinJS/src/helpers/http/check-response-for-key-and-token.js'
          ),
          l = c(
            './node_modules/BlueDarwinJS/src/helpers/http/event-token-negotiation-required.js'
          ),
          f =
            (c(
              './node_modules/BlueDarwinJS/src/helpers/http/handle-request.js'
            ),
            c('./node_modules/BlueDarwinJS/src/services/validator.js')),
          p = c('./node_modules/BlueDarwinJS/src/services/storage.js'),
          c = c('./node_modules/BlueDarwinJS/src/services/pub-sub.js');
        const h = { loginDecryption: !1, getFullResponse: !1 };
        e.default = async function (
          t,
          e,
          n = h,
          r = { token: '' },
          o = new d.default(),
          a = new f.default(),
          s = new p.default(),
          i = new c.default()
        ) {
          try {
            if (
              ((e = n.loginDecryption
                ? o.decryptPayload(e, n.loginDecryption)
                : o.decryptPayload(e)),
              Object(u.default)(e, r, a, o, s),
              (e = (!n.getFullResponse && (e.data || e.error)) || e),
              200 === t.status)
            )
              return e;
            throw (
              ((401 !== t.status && 403 !== t.status) || Object(l.default)(i),
              t.status,
              e.cognus ? o.decryptPayload(e) : e)
            );
          } catch (t) {
            throw t;
          }
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/http/parse-body.js': function (
      t,
      e,
      r
    ) {
      'use strict';
      r.r(e);
      var o = r('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        r = r(
          './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request-body.js'
        );
      e.default = function (t = {}, e = r, n = new o.default()) {
        return e.skipEncryption || (t = n.encryptPayload(t)), JSON.stringify(t);
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/request-get.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      var p = n('./node_modules/BlueDarwinJS/src/helpers/http/build-url.js'),
        h = n(
          './node_modules/BlueDarwinJS/src/helpers/http/handle-response.js'
        ),
        _ = n('./node_modules/BlueDarwinJS/src/helpers/http/handle-fail.js'),
        y = n('./node_modules/BlueDarwinJS/src/helpers/http/get-headers.js'),
        m = n('./node_modules/BlueDarwinJS/src/services/configuration.js'),
        v = n('./node_modules/BlueDarwinJS/src/services/validator.js'),
        x = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        b = n('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        g = n('./node_modules/BlueDarwinJS/src/services/response.js'),
        S = n('./node_modules/BlueDarwinJS/src/services/storage.js'),
        w = n('./node_modules/BlueDarwinJS/src/helpers/http/handle-request.js');
      e.default = async function (
        t,
        e,
        n = { token: '' },
        r = new m.default(),
        o = new b.default(),
        a = new g.default(),
        s = new v.default(),
        i = new S.default(),
        c = new x.default()
      ) {
        try {
          var d = Object(p.default)(t, r),
            u = { method: 'GET', headers: Object(y.default)(n) },
            { response: l, data: f } = await Object(w.default)(d, u);
          return Object(h.default)(l, f, e, n, o, s, i, c);
        } catch (t) {
          throw Object(_.default)(t, a, o);
        }
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/request-post.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      var h = n('./node_modules/BlueDarwinJS/src/helpers/http/build-url.js'),
        _ = n(
          './node_modules/BlueDarwinJS/src/helpers/http/handle-response.js'
        ),
        y = n('./node_modules/BlueDarwinJS/src/helpers/http/handle-fail.js'),
        m = n('./node_modules/BlueDarwinJS/src/helpers/http/parse-body.js'),
        v = n('./node_modules/BlueDarwinJS/src/helpers/http/get-headers.js'),
        x = n('./node_modules/BlueDarwinJS/src/services/configuration.js'),
        b = n('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        g = n('./node_modules/BlueDarwinJS/src/services/response.js'),
        S = n(
          './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request.js'
        ),
        w = n('./node_modules/BlueDarwinJS/src/services/validator.js'),
        C = n('./node_modules/BlueDarwinJS/src/services/storage.js'),
        k = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        j = n('./node_modules/BlueDarwinJS/src/helpers/http/handle-request.js');
      e.default = async function (
        t,
        e,
        n = S,
        r,
        o = new x.default(),
        a = new b.default(),
        s = new g.default(),
        i = new w.default(),
        c = new C.default(),
        d = new k.default()
      ) {
        try {
          var u = Object(h.default)(t, o),
            l = {
              method: 'POST',
              headers: Object(v.default)(r),
              body: Object(m.default)(e, n, a),
            },
            { response: f, data: p } = await Object(j.default)(u, l);
          return Object(_.default)(f, p, n, r, a, i, c, d);
        } catch (t) {
          throw Object(y.default)(t, s, a);
        }
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/http/update-token.js': function (
      t,
      e,
      r
    ) {
      'use strict';
      r.r(e);
      var o = r('./node_modules/BlueDarwinJS/src/app-constants.js'),
        r = r('./node_modules/BlueDarwinJS/src/services/storage.js');
      e.default = function (t, e = { token: '' }, n = new r.default()) {
        (e.token = t), n.set(o.default.STORAGE.TOKEN, t);
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/post-message.js': function (
      t,
      e,
      a
    ) {
      'use strict';
      a.r(e);
      var s = a('./node_modules/BlueDarwinJS/src/app-constants.js'),
        i = a('./node_modules/BlueDarwinJS/src/services/state.js'),
        a = a('./node_modules/BlueDarwinJS/src/services/response.js');
      e.default = {
        send: function (
          t = '',
          e = {},
          n = new i.default(),
          r = new a.default()
        ) {
          const o = n.get(s.default.STATES.ELEMENT_IFRAME);
          if (!o)
            return console.warn(
              r.ok({
                message: "Can't send postback events if no element is found",
              })
            );
          o.contentWindow.postMessage(
            JSON.parse(JSON.stringify({ cognusEvent: { event: t, data: e } })),
            '*'
          );
        },
        recieve: function () {},
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-debug-mode.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
          o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
          a = n('./node_modules/BlueDarwinJS/src/helpers/post-message.js');
        e.default = function (t = new o.default()) {
          a.default.send(
            'setDebugMode',
            t.get(r.default.STATES.IS_IFRAME_IN_DEBUG_MODE)
          );
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-module-by-id.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
          o = n('./node_modules/BlueDarwinJS/src/helpers/post-message.js'),
          a = n('./node_modules/BlueDarwinJS/src/app-constants.js');
        e.default = function (t = new r.default()) {
          o.default.send('setModuleById', t.get(a.default.STATES.HAS_MODULE));
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-client.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
          o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
          a = n('./node_modules/BlueDarwinJS/src/helpers/post-message.js'),
          s = n(
            './node_modules/BlueDarwinJS/src/helpers/extend-and-keep-structure.js'
          );
        const i = {
          token: 'login.token',
          userId: 'login.user.id',
          key: 'login.key',
          user: 'JSON.stringify(login.user)',
        };
        e.default = function (t = new o.default()) {
          t = {
            token: t.get(r.default.STATES.HAS_TOKEN),
            userId: t.get(r.default.STATES.HAS_USER).id,
            key: t.get(r.default.STATES.HAS_KEY),
            user: JSON.stringify(t.get(r.default.STATES.HAS_USER) || {}),
          };
          a.default.send('setupClient', Object(s.default)(i, t));
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-user.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
          o = n('./node_modules/BlueDarwinJS/src/helpers/post-message.js'),
          a = n('./node_modules/BlueDarwinJS/src/app-constants.js');
        e.default = function (t = new r.default()) {
          t = t.get(a.default.STATES.HAS_CLIENT_USER_ID);
          o.default.send('setupUser', { id: t });
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/regex/is-email.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      e.default = function (t) {
        return r.test(t);
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/search-object-path.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      const s = { returnType: 'PATH' };
      e.default = function (t = {}, e = '', n = s) {
        var r = e.split('.');
        let o = t;
        for (let t = 0; t < r.length; t++) {
          var a = r[t],
            a = o[a];
          if (!a) return 'PATH' === s.returnType ? e : void 0;
          o = a;
        }
        return o;
      };
    },
    './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
          a = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
          s = n(
            './node_modules/BlueDarwinJS/src/helpers/get-chatbot-user-id.js'
          ),
          r = n('./node_modules/lodash.isobject/index.js'),
          i = n.n(r);
        function k5(t, e = {}, n = new o.default()) {
          const r = {
            auth: {
              channel_token: n.get(a.default.STATES.CHANNEL_TOKEN),
              client_user_id: Object(s.default)(n),
              stage:
                a.default.ENVIRONMENT_IDS[n.get(a.default.STATES.ENVIRONMENT)],
            },
            context_variables: {
              extracted_entities: [],
              actions: { close_session: { enabled: !1 } },
            },
            input: t,
          };
          return (
            e.logout &&
              (r.context_variables.actions.close_session.enabled = !0),
            r
          );
        }
        e.default = {
          v3: {
            text: function (t, e = new o.default()) {
              return k5({ text: t }, {}, e);
            },
            voice: function (t, e = new o.default()) {
              return k5({ voice: t }, {}, e);
            },
            postBack: function (t, e = new o.default()) {
              return (
                ((t = i()(t)
                  ? t
                  : {
                      name: null,
                      label: null,
                      type: null,
                      value: null,
                      argType: null,
                    }).type = t.argType),
                delete t.argType,
                k5({ postback: t }, {}, e)
              );
            },
            logout: function (t = new o.default()) {
              return k5({}, { logout: !0 }, t);
            },
          },
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/uuid.js': function (t, e, n) {
      'use strict';
      n.r(e);
      n = n('./node_modules/uuid/v4.js');
      e.default = n;
    },
    './node_modules/BlueDarwinJS/src/helpers/validators/array-contains-function.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n(
          './node_modules/BlueDarwinJS/src/helpers/validators/is-equal-function.js'
        );
        e.default = function (e, n) {
          if (!Array.isArray(e)) return !1;
          for (let t = 0; t < e.length; t++)
            if (Object(r.default)(e[t], n)) return !0;
          return !1;
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/validators/get-function-content.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        e.default = function (t) {
          return t.split(')').splice(1).join(')');
        };
      },
    './node_modules/BlueDarwinJS/src/helpers/validators/is-equal-function.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n('./node_modules/lodash.isfunction/index.js'),
          o = n.n(r),
          a = n(
            './node_modules/BlueDarwinJS/src/helpers/validators/get-function-content.js'
          );
        e.default = function (t, e) {
          return (
            !(!o()(t) || !o()(e)) &&
            Object(a.default)(t.toString()) === Object(a.default)(e.toString())
          );
        };
      },
    './node_modules/BlueDarwinJS/src/prototypes/extend-configuration.js':
      function (t, e, n) {
        'use strict';
        n.r(e);
        e.default = function (e, n) {
          return (
            Object.keys(n).forEach((t) => {
              e[t] || (e[t] = n[t]);
            }),
            e
          );
        };
      },
    './node_modules/BlueDarwinJS/src/services/auth.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Auth;
        });
      var r = n('./node_modules/BlueDarwinJS/src/helpers/auth/login.js'),
        o = n('./node_modules/BlueDarwinJS/src/helpers/auth/login-chatbot.js'),
        a = n('./node_modules/BlueDarwinJS/src/helpers/auth/logout.js'),
        e = n('./node_modules/BlueDarwinJS/src/services/index.js'),
        s = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        i = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        c = n('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        d = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        u = n('./node_modules/BlueDarwinJS/src/services/response.js'),
        l = n('./node_modules/BlueDarwinJS/src/services/storage.js');
      class Auth extends e.default {
        constructor() {
          super(
            s.default,
            d.default,
            c.default,
            d.default,
            i.default,
            u.default,
            l.default
          );
        }
        login(t = []) {
          return Object(r.default)(
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
          return Object(o.default)(
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
          return Object(a.default)(this.State, this.PubSub, this.Storage);
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/configuration.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Configuration;
        });
      var o = n(
          './node_modules/BlueDarwinJS/src/helpers/config-objects/config.js'
        ),
        e = n('./node_modules/BlueDarwinJS/src/services/index.js');
      const a = {
        environment: o.default.original.environment,
        url: { api: '', iframe: '' },
        encryption: !0,
        language: o.default.original.language,
      };
      let s;
      class Configuration extends e.default {
        constructor(r = {}) {
          if ((super(...arguments), !s)) {
            switch (
              (Object.keys(r).forEach((t) => {
                var e = o.default.original[t];
                const n = o.default.possible[t];
                e && -1 < n.indexOf(r[t]) && (a[t] = r[t]);
              }),
              a.environment)
            ) {
              case 'development':
                (a.encryption = !1),
                  (a.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_dev/default/api'),
                  (a.url.iframe =
                    'https://bluedarwin-chatbot-iframedev.eu-de.mybluemix.net/');
                break;
              case 'local':
                (a.encryption = !1),
                  (a.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_dev/default/api'),
                  (a.url.iframe = 'http://localhost:4201');
                break;
              case 'staging':
                (a.encryption = !0),
                  (a.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_staging/default/api'),
                  (a.url.iframe =
                    'https://bluedarwin-chatbot-iframestaging.eu-de.mybluemix.net/');
                break;
              case 'production':
                (a.encryption = !0),
                  (a.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_prod/default/api'),
                  (a.url.iframe =
                    'https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/');
            }
            (s = a), Object.freeze(a), Object.freeze(s);
          }
          return s;
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/encryption.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Encryption;
        });
      var r = n(
          './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-string.js'
        ),
        o = n(
          './node_modules/BlueDarwinJS/src/helpers/encryption/update-key.js'
        ),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-payload.js'
        ),
        s = n(
          './node_modules/BlueDarwinJS/src/helpers/encryption/decrypt-payload.js'
        ),
        e = n('./node_modules/BlueDarwinJS/src/services/index.js'),
        i = n('./node_modules/BlueDarwinJS/src/services/configuration.js'),
        c = n('./node_modules/BlueDarwinJS/src/services/storage.js');
      let d = { key: '', oldKey: '' };
      class Encryption extends e.default {
        constructor() {
          super(i.default, c.default);
        }
        encryptString(t) {
          return Object(r.default)(t, this.Configuration.encryption);
        }
        encryptPayload(t) {
          return Object(a.default)(t, d.key, this.Configuration.encryption);
        }
        decryptPayload(t, e) {
          return Object(s.default)(
            t,
            d.key,
            d.oldKey,
            this.Configuration.encryption,
            e
          );
        }
        updateKey(t) {
          Object(o.default)(t, (d = d), this.Storage);
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/http.js': function (t, r, e) {
      'use strict';
      e.r(r),
        e.d(r, 'default', function () {
          return Http;
        });
      var n = e('./node_modules/BlueDarwinJS/src/helpers/http/request-get.js'),
        o = e('./node_modules/BlueDarwinJS/src/helpers/http/request-post.js'),
        a = e('./node_modules/BlueDarwinJS/src/helpers/http/update-token.js'),
        r = e(
          './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request.js'
        ),
        s = e('./node_modules/BlueDarwinJS/src/services/index.js'),
        i = e('./node_modules/BlueDarwinJS/src/services/configuration.js'),
        c = e('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        d = e('./node_modules/BlueDarwinJS/src/services/response.js'),
        u = e('./node_modules/BlueDarwinJS/src/services/validator.js'),
        l = e('./node_modules/BlueDarwinJS/src/services/storage.js'),
        f = e('./node_modules/BlueDarwinJS/src/services/pub-sub.js');
      const p = { token: '' };
      class Http extends s.default {
        constructor() {
          super(i.default, c.default),
            d.default,
            l.default,
            f.default,
            u.default;
        }
        get(t = '', e = r) {
          return Object(n.default)(
            t,
            e,
            p,
            this.Configuration,
            this.Encryption,
            this.Response,
            this.Validator,
            this.Storage,
            this.PubSub
          );
        }
        post(t = '', e = {}, n = r) {
          return Object(o.default)(
            t,
            e,
            n,
            p,
            this.Configuration,
            this.Encryption,
            this.Response,
            this.Validator,
            this.Storage,
            this.PubSub
          );
        }
        updateToken(t = '') {
          return Object(a.default)(t, p, this.Storage);
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/index.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Service;
        });
      var r = n(
        './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
      );
      const o = {};
      class Service {
        constructor() {
          var t = this.constructor.name;
          return (
            o[t] ||
              ((o[t] = this),
              Object(r.default)([...arguments], o[t]),
              o.Configuration &&
                !o.Configuration.environment &&
                o[t].Configuration &&
                (o.Configuration = o[t].Configuration)),
            o[t]
          );
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/pub-sub.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return PubSub;
        });
      var e = n('./node_modules/BlueDarwinJS/src/services/index.js'),
        r = n('./node_modules/BlueDarwinJS/src/services/validator.js');
      const o = {};
      class PubSub extends e.default {
        constructor() {
          super(r.default);
        }
        on(t = '*', e) {
          !this.Validator.isFunction(e) ||
            (o[t] && this.Validator.containsFunction(o[t], e)) ||
            ((o[t] = o[t] || this.reset(t)), o[t].push(e));
        }
        off(e = '*', n) {
          if (o[e] && Array.isArray(o[e]))
            for (let t = 0; t < o[e].length; t++)
              if (o[e][t] === n) {
                o[e].splice(t, 1);
                break;
              }
        }
        emit(t = '*', e) {
          o[t] &&
            o[t].forEach((t) => {
              t(e);
            });
        }
        reset(t = '*') {
          var e = [];
          return (o[t] = e);
        }
        getEvents() {
          return o;
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/response.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Response;
        });
      var e = n(
          './node_modules/BlueDarwinJS/src/helpers/config-objects/response.js'
        ),
        r = n('./node_modules/BlueDarwinJS/src/services/index.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/translate.js');
      function P6(t, e, n) {
        return { status: a[t], data: e.data, message: n.instant(e.message) };
      }
      const a = ['OK', 'WARN', 'FAIL'];
      class Response extends r.default {
        constructor() {
          super(o.default);
        }
        ok(t = e) {
          return P6(0, t, this.Translate);
        }
        warn(t = e) {
          return P6(1, t, this.Translate);
        }
        error(t = e) {
          return P6(2, t, this.Translate);
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/state.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return State;
        });
      e = n('./node_modules/BlueDarwinJS/src/services/index.js');
      let r = {};
      class State extends e.default {
        constructor() {
          super();
        }
        set(t, e) {
          return (r[t] = e);
        }
        get(t) {
          return r[t];
        }
        list() {
          return r;
        }
        delete(t) {
          r[t] = void 0;
        }
        clear() {
          r = {};
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/storage.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Storage;
        });
      var e = n('./node_modules/localforage/dist/localforage.js'),
        r = n.n(e);
      class Storage extends n(
        './node_modules/BlueDarwinJS/src/services/index.js'
      ).default {
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
          'localstorage' === t.driver && (t.driver = r.a.LOCALSTORAGE),
            r.a.config(t),
            r.a.ready().catch((t) => {}),
            super();
        }
        get(t) {
          return r.a.getItem(t).catch((t) => {});
        }
        set(t, e) {
          r.a.setItem(t, e).catch((t) => {});
        }
        delete(t) {
          r.a.removeItem(t).catch((t) => {});
        }
        clear() {
          r.a.clear().catch((t) => {});
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/translate.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Translate;
        });
      var r = n(
          './node_modules/BlueDarwinJS/src/helpers/search-object-path.js'
        ),
        e = n('./node_modules/BlueDarwinJS/src/services/index.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/configuration.js');
      let a;
      class Translate extends e.default {
        constructor(t = {}) {
          super(o.default), this.setLanguage(t || this.Configuration.language);
        }
        setLanguage(t = {}) {
          a = t;
        }
        instant(t = '') {
          return 'string' == typeof t && 0 < t.trim().length
            ? Object(r.default)(a, t)
            : t;
        }
      }
    },
    './node_modules/BlueDarwinJS/src/services/validator.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return Validator;
        });
      var e = n('./node_modules/lodash.isempty/index.js'),
        r = n.n(e),
        e = n('./node_modules/lodash.isfunction/index.js'),
        o = n.n(e),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/validators/get-function-content.js'
        ),
        s = n(
          './node_modules/BlueDarwinJS/src/helpers/validators/is-equal-function.js'
        ),
        i = n(
          './node_modules/BlueDarwinJS/src/helpers/validators/array-contains-function.js'
        );
      class Validator extends n(
        './node_modules/BlueDarwinJS/src/services/index.js'
      ).default {
        constructor() {
          super();
        }
        getFunctionContent(t) {
          return Object(a.default)(t);
        }
        isEmpty(t) {
          return r()(t);
        }
        isFunction(t) {
          return o()(t);
        }
        isEqualFunction(t, e) {
          return Object(s.default)(t, e);
        }
        containsFunction(t, e) {
          return Object(i.default)(t, e);
        }
      }
    },
    './node_modules/base-encryption/index.js': function (
      module,
      exports,
      __webpack_require__
    ) {
      !(function webpackUniversalModuleDefinition(t, e) {
        module.exports = e();
      })('undefined' == typeof window && global, function () {
        return (function (n) {
          var r = {};
          function __webpack_require__(t) {
            if (r[t]) return r[t].exports;
            var e = (r[t] = { i: t, l: !1, exports: {} });
            return (
              n[t].call(e.exports, e, e.exports, __webpack_require__),
              (e.l = !0),
              e.exports
            );
          }
          return (
            (__webpack_require__.m = n),
            (__webpack_require__.c = r),
            (__webpack_require__.d = function (t, e, n) {
              __webpack_require__.o(t, e) ||
                Object.defineProperty(t, e, {
                  configurable: !1,
                  enumerable: !0,
                  get: n,
                });
            }),
            (__webpack_require__.r = function (t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (__webpack_require__.n = function (t) {
              var e =
                t && t.__esModule
                  ? function getDefault() {
                      return t.default;
                    }
                  : function getModuleExports() {
                      return t;
                    };
              return __webpack_require__.d(e, 'a', e), e;
            }),
            (__webpack_require__.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (__webpack_require__.p = ''),
            __webpack_require__((__webpack_require__.s = './src/index.js'))
          );
        })({
          './node_modules/crypto-js/aes.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar BlockCipher = C_lib.BlockCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Lookup tables\n\t\tvar SBOX = [];\n\t\tvar INV_SBOX = [];\n\t\tvar SUB_MIX_0 = [];\n\t\tvar SUB_MIX_1 = [];\n\t\tvar SUB_MIX_2 = [];\n\t\tvar SUB_MIX_3 = [];\n\t\tvar INV_SUB_MIX_0 = [];\n\t\tvar INV_SUB_MIX_1 = [];\n\t\tvar INV_SUB_MIX_2 = [];\n\t\tvar INV_SUB_MIX_3 = [];\n\n\t\t// Compute lookup tables\n\t\t(function () {\n\t\t\t// Compute double table\n\t\t\tvar d = [];\n\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\tif (i < 128) {\n\t\t\t\t\td[i] = i << 1;\n\t\t\t\t} else {\n\t\t\t\t\td[i] = i << 1 ^ 0x11b;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Walk GF(2^8)\n\t\t\tvar x = 0;\n\t\t\tvar xi = 0;\n\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\t// Compute sbox\n\t\t\t\tvar sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;\n\t\t\t\tsx = sx >>> 8 ^ sx & 0xff ^ 0x63;\n\t\t\t\tSBOX[x] = sx;\n\t\t\t\tINV_SBOX[sx] = x;\n\n\t\t\t\t// Compute multiplication\n\t\t\t\tvar x2 = d[x];\n\t\t\t\tvar x4 = d[x2];\n\t\t\t\tvar x8 = d[x4];\n\n\t\t\t\t// Compute sub bytes, mix columns tables\n\t\t\t\tvar t = d[sx] * 0x101 ^ sx * 0x1010100;\n\t\t\t\tSUB_MIX_0[x] = t << 24 | t >>> 8;\n\t\t\t\tSUB_MIX_1[x] = t << 16 | t >>> 16;\n\t\t\t\tSUB_MIX_2[x] = t << 8 | t >>> 24;\n\t\t\t\tSUB_MIX_3[x] = t;\n\n\t\t\t\t// Compute inv sub bytes, inv mix columns tables\n\t\t\t\tvar t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;\n\t\t\t\tINV_SUB_MIX_0[sx] = t << 24 | t >>> 8;\n\t\t\t\tINV_SUB_MIX_1[sx] = t << 16 | t >>> 16;\n\t\t\t\tINV_SUB_MIX_2[sx] = t << 8 | t >>> 24;\n\t\t\t\tINV_SUB_MIX_3[sx] = t;\n\n\t\t\t\t// Compute next counter\n\t\t\t\tif (!x) {\n\t\t\t\t\tx = xi = 1;\n\t\t\t\t} else {\n\t\t\t\t\tx = x2 ^ d[d[d[x8 ^ x2]]];\n\t\t\t\t\txi ^= d[d[xi]];\n\t\t\t\t}\n\t\t\t}\n\t\t})();\n\n\t\t// Precomputed Rcon lookup\n\t\tvar RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];\n\n\t\t/**\n   * AES block cipher algorithm.\n   */\n\t\tvar AES = C_algo.AES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Skip reset of nRounds has been set before and key did not change\n\t\t\t\tif (this._nRounds && this._keyPriorReset === this._key) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._keyPriorReset = this._key;\n\t\t\t\tvar keyWords = key.words;\n\t\t\t\tvar keySize = key.sigBytes / 4;\n\n\t\t\t\t// Compute number of rounds\n\t\t\t\tvar nRounds = this._nRounds = keySize + 6;\n\n\t\t\t\t// Compute number of key schedule rows\n\t\t\t\tvar ksRows = (nRounds + 1) * 4;\n\n\t\t\t\t// Compute key schedule\n\t\t\t\tvar keySchedule = this._keySchedule = [];\n\t\t\t\tfor (var ksRow = 0; ksRow < ksRows; ksRow++) {\n\t\t\t\t\tif (ksRow < keySize) {\n\t\t\t\t\t\tkeySchedule[ksRow] = keyWords[ksRow];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar t = keySchedule[ksRow - 1];\n\n\t\t\t\t\t\tif (!(ksRow % keySize)) {\n\t\t\t\t\t\t\t// Rot word\n\t\t\t\t\t\t\tt = t << 8 | t >>> 24;\n\n\t\t\t\t\t\t\t// Sub word\n\t\t\t\t\t\t\tt = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];\n\n\t\t\t\t\t\t\t// Mix Rcon\n\t\t\t\t\t\t\tt ^= RCON[ksRow / keySize | 0] << 24;\n\t\t\t\t\t\t} else if (keySize > 6 && ksRow % keySize == 4) {\n\t\t\t\t\t\t\t// Sub word\n\t\t\t\t\t\t\tt = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tkeySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Compute inv key schedule\n\t\t\t\tvar invKeySchedule = this._invKeySchedule = [];\n\t\t\t\tfor (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {\n\t\t\t\t\tvar ksRow = ksRows - invKsRow;\n\n\t\t\t\t\tif (invKsRow % 4) {\n\t\t\t\t\t\tvar t = keySchedule[ksRow];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar t = keySchedule[ksRow - 4];\n\t\t\t\t\t}\n\n\t\t\t\t\tif (invKsRow < 4 || ksRow <= 4) {\n\t\t\t\t\t\tinvKeySchedule[invKsRow] = t;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tinvKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\t// Swap 2nd and 4th rows\n\t\t\t\tvar t = M[offset + 1];\n\t\t\t\tM[offset + 1] = M[offset + 3];\n\t\t\t\tM[offset + 3] = t;\n\n\t\t\t\tthis._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);\n\n\t\t\t\t// Inv swap 2nd and 4th rows\n\t\t\t\tvar t = M[offset + 1];\n\t\t\t\tM[offset + 1] = M[offset + 3];\n\t\t\t\tM[offset + 3] = t;\n\t\t\t},\n\n\t\t\t_doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar nRounds = this._nRounds;\n\n\t\t\t\t// Get input, add round key\n\t\t\t\tvar s0 = M[offset] ^ keySchedule[0];\n\t\t\t\tvar s1 = M[offset + 1] ^ keySchedule[1];\n\t\t\t\tvar s2 = M[offset + 2] ^ keySchedule[2];\n\t\t\t\tvar s3 = M[offset + 3] ^ keySchedule[3];\n\n\t\t\t\t// Key schedule row counter\n\t\t\t\tvar ksRow = 4;\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 1; round < nRounds; round++) {\n\t\t\t\t\t// Shift rows, sub bytes, mix columns, add round key\n\t\t\t\t\tvar t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];\n\n\t\t\t\t\t// Update state\n\t\t\t\t\ts0 = t0;\n\t\t\t\t\ts1 = t1;\n\t\t\t\t\ts2 = t2;\n\t\t\t\t\ts3 = t3;\n\t\t\t\t}\n\n\t\t\t\t// Shift rows, sub bytes, add round key\n\t\t\t\tvar t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];\n\n\t\t\t\t// Set output\n\t\t\t\tM[offset] = t0;\n\t\t\t\tM[offset + 1] = t1;\n\t\t\t\tM[offset + 2] = t2;\n\t\t\t\tM[offset + 3] = t3;\n\t\t\t},\n\n\t\t\tkeySize: 256 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.AES = BlockCipher._createHelper(AES);\n\t})();\n\n\treturn CryptoJS.AES;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/aes.js?'
            );
          },
          './node_modules/crypto-js/cipher-core.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"), __webpack_require__(/*! ./evpkdf */ \"./node_modules/crypto-js/evpkdf.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Cipher core components.\n  */\n\tCryptoJS.lib.Cipher || function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;\n\t\tvar C_enc = C.enc;\n\t\tvar Utf8 = C_enc.Utf8;\n\t\tvar Base64 = C_enc.Base64;\n\t\tvar C_algo = C.algo;\n\t\tvar EvpKDF = C_algo.EvpKDF;\n\n\t\t/**\n   * Abstract base cipher template.\n   *\n   * @property {number} keySize This cipher's key size. Default: 4 (128 bits)\n   * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)\n   * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.\n   * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.\n   */\n\t\tvar Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {WordArray} iv The IV to use for this operation.\n    */\n\t\t\tcfg: Base.extend(),\n\n\t\t\t/**\n    * Creates this cipher in encryption mode.\n    *\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {Cipher} A cipher instance.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tcreateEncryptor: function (key, cfg) {\n\t\t\t\treturn this.create(this._ENC_XFORM_MODE, key, cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Creates this cipher in decryption mode.\n    *\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {Cipher} A cipher instance.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tcreateDecryptor: function (key, cfg) {\n\t\t\t\treturn this.create(this._DEC_XFORM_MODE, key, cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Initializes a newly created cipher.\n    *\n    * @param {number} xformMode Either the encryption or decryption transormation mode constant.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tinit: function (xformMode, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Store transform mode and key\n\t\t\t\tthis._xformMode = xformMode;\n\t\t\t\tthis._key = key;\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this cipher to its initial state.\n    *\n    * @example\n    *\n    *     cipher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Reset data buffer\n\t\t\t\tBufferedBlockAlgorithm.reset.call(this);\n\n\t\t\t\t// Perform concrete-cipher logic\n\t\t\t\tthis._doReset();\n\t\t\t},\n\n\t\t\t/**\n    * Adds data to be encrypted or decrypted.\n    *\n    * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.\n    *\n    * @return {WordArray} The data after processing.\n    *\n    * @example\n    *\n    *     var encrypted = cipher.process('data');\n    *     var encrypted = cipher.process(wordArray);\n    */\n\t\t\tprocess: function (dataUpdate) {\n\t\t\t\t// Append\n\t\t\t\tthis._append(dataUpdate);\n\n\t\t\t\t// Process available blocks\n\t\t\t\treturn this._process();\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the encryption or decryption process.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.\n    *\n    * @return {WordArray} The data after final processing.\n    *\n    * @example\n    *\n    *     var encrypted = cipher.finalize();\n    *     var encrypted = cipher.finalize('data');\n    *     var encrypted = cipher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (dataUpdate) {\n\t\t\t\t// Final data update\n\t\t\t\tif (dataUpdate) {\n\t\t\t\t\tthis._append(dataUpdate);\n\t\t\t\t}\n\n\t\t\t\t// Perform concrete-cipher logic\n\t\t\t\tvar finalProcessedData = this._doFinalize();\n\n\t\t\t\treturn finalProcessedData;\n\t\t\t},\n\n\t\t\tkeySize: 128 / 32,\n\n\t\t\tivSize: 128 / 32,\n\n\t\t\t_ENC_XFORM_MODE: 1,\n\n\t\t\t_DEC_XFORM_MODE: 2,\n\n\t\t\t/**\n    * Creates shortcut functions to a cipher's object interface.\n    *\n    * @param {Cipher} cipher The cipher to create a helper for.\n    *\n    * @return {Object} An object with encrypt and decrypt shortcut functions.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);\n    */\n\t\t\t_createHelper: function () {\n\t\t\t\tfunction selectCipherStrategy(key) {\n\t\t\t\t\tif (typeof key == 'string') {\n\t\t\t\t\t\treturn PasswordBasedCipher;\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn SerializableCipher;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn function (cipher) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tencrypt: function (message, key, cfg) {\n\t\t\t\t\t\t\treturn selectCipherStrategy(key).encrypt(cipher, message, key, cfg);\n\t\t\t\t\t\t},\n\n\t\t\t\t\t\tdecrypt: function (ciphertext, key, cfg) {\n\t\t\t\t\t\t\treturn selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t};\n\t\t\t}()\n\t\t});\n\n\t\t/**\n   * Abstract base stream cipher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)\n   */\n\t\tvar StreamCipher = C_lib.StreamCipher = Cipher.extend({\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Process partial blocks\n\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\n\t\t\t\treturn finalProcessedBlocks;\n\t\t\t},\n\n\t\t\tblockSize: 1\n\t\t});\n\n\t\t/**\n   * Mode namespace.\n   */\n\t\tvar C_mode = C.mode = {};\n\n\t\t/**\n   * Abstract base block cipher mode template.\n   */\n\t\tvar BlockCipherMode = C_lib.BlockCipherMode = Base.extend({\n\t\t\t/**\n    * Creates this mode for encryption.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);\n    */\n\t\t\tcreateEncryptor: function (cipher, iv) {\n\t\t\t\treturn this.Encryptor.create(cipher, iv);\n\t\t\t},\n\n\t\t\t/**\n    * Creates this mode for decryption.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);\n    */\n\t\t\tcreateDecryptor: function (cipher, iv) {\n\t\t\t\treturn this.Decryptor.create(cipher, iv);\n\t\t\t},\n\n\t\t\t/**\n    * Initializes a newly created mode.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);\n    */\n\t\t\tinit: function (cipher, iv) {\n\t\t\t\tthis._cipher = cipher;\n\t\t\t\tthis._iv = iv;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Cipher Block Chaining mode.\n   */\n\t\tvar CBC = C_mode.CBC = function () {\n\t\t\t/**\n    * Abstract base CBC mode.\n    */\n\t\t\tvar CBC = BlockCipherMode.extend();\n\n\t\t\t/**\n    * CBC encryptor.\n    */\n\t\t\tCBC.Encryptor = CBC.extend({\n\t\t\t\t/**\n     * Processes the data block at offset.\n     *\n     * @param {Array} words The data words to operate on.\n     * @param {number} offset The offset where the block starts.\n     *\n     * @example\n     *\n     *     mode.processBlock(data.words, offset);\n     */\n\t\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar cipher = this._cipher;\n\t\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t\t// XOR and encrypt\n\t\t\t\t\txorBlock.call(this, words, offset, blockSize);\n\t\t\t\t\tcipher.encryptBlock(words, offset);\n\n\t\t\t\t\t// Remember this block to use with next block\n\t\t\t\t\tthis._prevBlock = words.slice(offset, offset + blockSize);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t/**\n    * CBC decryptor.\n    */\n\t\t\tCBC.Decryptor = CBC.extend({\n\t\t\t\t/**\n     * Processes the data block at offset.\n     *\n     * @param {Array} words The data words to operate on.\n     * @param {number} offset The offset where the block starts.\n     *\n     * @example\n     *\n     *     mode.processBlock(data.words, offset);\n     */\n\t\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar cipher = this._cipher;\n\t\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t\t// Remember this block to use with next block\n\t\t\t\t\tvar thisBlock = words.slice(offset, offset + blockSize);\n\n\t\t\t\t\t// Decrypt and XOR\n\t\t\t\t\tcipher.decryptBlock(words, offset);\n\t\t\t\t\txorBlock.call(this, words, offset, blockSize);\n\n\t\t\t\t\t// This block becomes the previous block\n\t\t\t\t\tthis._prevBlock = thisBlock;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tfunction xorBlock(words, offset, blockSize) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar iv = this._iv;\n\n\t\t\t\t// Choose mixing block\n\t\t\t\tif (iv) {\n\t\t\t\t\tvar block = iv;\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t} else {\n\t\t\t\t\tvar block = this._prevBlock;\n\t\t\t\t}\n\n\t\t\t\t// XOR blocks\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= block[i];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn CBC;\n\t\t}();\n\n\t\t/**\n   * Padding namespace.\n   */\n\t\tvar C_pad = C.pad = {};\n\n\t\t/**\n   * PKCS #5/7 padding strategy.\n   */\n\t\tvar Pkcs7 = C_pad.Pkcs7 = {\n\t\t\t/**\n    * Pads data using the algorithm defined in PKCS #5/7.\n    *\n    * @param {WordArray} data The data to pad.\n    * @param {number} blockSize The multiple that the data should be padded to.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);\n    */\n\t\t\tpad: function (data, blockSize) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t\t// Count padding bytes\n\t\t\t\tvar nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;\n\n\t\t\t\t// Create padding word\n\t\t\t\tvar paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;\n\n\t\t\t\t// Create padding\n\t\t\t\tvar paddingWords = [];\n\t\t\t\tfor (var i = 0; i < nPaddingBytes; i += 4) {\n\t\t\t\t\tpaddingWords.push(paddingWord);\n\t\t\t\t}\n\t\t\t\tvar padding = WordArray.create(paddingWords, nPaddingBytes);\n\n\t\t\t\t// Add padding\n\t\t\t\tdata.concat(padding);\n\t\t\t},\n\n\t\t\t/**\n    * Unpads data that had been padded using the algorithm defined in PKCS #5/7.\n    *\n    * @param {WordArray} data The data to unpad.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     CryptoJS.pad.Pkcs7.unpad(wordArray);\n    */\n\t\t\tunpad: function (data) {\n\t\t\t\t// Get number of padding bytes from last byte\n\t\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t\t// Remove padding\n\t\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Abstract base block cipher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)\n   */\n\t\tvar BlockCipher = C_lib.BlockCipher = Cipher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {Mode} mode The block mode to use. Default: CBC\n    * @property {Padding} padding The padding strategy to use. Default: Pkcs7\n    */\n\t\t\tcfg: Cipher.cfg.extend({\n\t\t\t\tmode: CBC,\n\t\t\t\tpadding: Pkcs7\n\t\t\t}),\n\n\t\t\treset: function () {\n\t\t\t\t// Reset cipher\n\t\t\t\tCipher.reset.call(this);\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cfg = this.cfg;\n\t\t\t\tvar iv = cfg.iv;\n\t\t\t\tvar mode = cfg.mode;\n\n\t\t\t\t// Reset block mode\n\t\t\t\tif (this._xformMode == this._ENC_XFORM_MODE) {\n\t\t\t\t\tvar modeCreator = mode.createEncryptor;\n\t\t\t\t} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{\n\t\t\t\t\t\tvar modeCreator = mode.createDecryptor;\n\t\t\t\t\t\t// Keep at least one block in the buffer for unpadding\n\t\t\t\t\t\tthis._minBufferSize = 1;\n\t\t\t\t\t}\n\n\t\t\t\tif (this._mode && this._mode.__creator == modeCreator) {\n\t\t\t\t\tthis._mode.init(this, iv && iv.words);\n\t\t\t\t} else {\n\t\t\t\t\tthis._mode = modeCreator.call(mode, this, iv && iv.words);\n\t\t\t\t\tthis._mode.__creator = modeCreator;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (words, offset) {\n\t\t\t\tthis._mode.processBlock(words, offset);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcut\n\t\t\t\tvar padding = this.cfg.padding;\n\n\t\t\t\t// Finalize\n\t\t\t\tif (this._xformMode == this._ENC_XFORM_MODE) {\n\t\t\t\t\t// Pad data\n\t\t\t\t\tpadding.pad(this._data, this.blockSize);\n\n\t\t\t\t\t// Process final blocks\n\t\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\t\t\t\t} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{\n\t\t\t\t\t\t// Process final blocks\n\t\t\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\n\t\t\t\t\t\t// Unpad data\n\t\t\t\t\t\tpadding.unpad(finalProcessedBlocks);\n\t\t\t\t\t}\n\n\t\t\t\treturn finalProcessedBlocks;\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32\n\t\t});\n\n\t\t/**\n   * A collection of cipher parameters.\n   *\n   * @property {WordArray} ciphertext The raw ciphertext.\n   * @property {WordArray} key The key to this ciphertext.\n   * @property {WordArray} iv The IV used in the ciphering operation.\n   * @property {WordArray} salt The salt used with a key derivation function.\n   * @property {Cipher} algorithm The cipher algorithm.\n   * @property {Mode} mode The block mode used in the ciphering operation.\n   * @property {Padding} padding The padding scheme used in the ciphering operation.\n   * @property {number} blockSize The block size of the cipher.\n   * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.\n   */\n\t\tvar CipherParams = C_lib.CipherParams = Base.extend({\n\t\t\t/**\n    * Initializes a newly created cipher params object.\n    *\n    * @param {Object} cipherParams An object with any of the possible cipher parameters.\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.lib.CipherParams.create({\n    *         ciphertext: ciphertextWordArray,\n    *         key: keyWordArray,\n    *         iv: ivWordArray,\n    *         salt: saltWordArray,\n    *         algorithm: CryptoJS.algo.AES,\n    *         mode: CryptoJS.mode.CBC,\n    *         padding: CryptoJS.pad.PKCS7,\n    *         blockSize: 4,\n    *         formatter: CryptoJS.format.OpenSSL\n    *     });\n    */\n\t\t\tinit: function (cipherParams) {\n\t\t\t\tthis.mixIn(cipherParams);\n\t\t\t},\n\n\t\t\t/**\n    * Converts this cipher params object to a string.\n    *\n    * @param {Format} formatter (Optional) The formatting strategy to use.\n    *\n    * @return {string} The stringified cipher params.\n    *\n    * @throws Error If neither the formatter nor the default formatter is set.\n    *\n    * @example\n    *\n    *     var string = cipherParams + '';\n    *     var string = cipherParams.toString();\n    *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);\n    */\n\t\t\ttoString: function (formatter) {\n\t\t\t\treturn (formatter || this.formatter).stringify(this);\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Format namespace.\n   */\n\t\tvar C_format = C.format = {};\n\n\t\t/**\n   * OpenSSL formatting strategy.\n   */\n\t\tvar OpenSSLFormatter = C_format.OpenSSL = {\n\t\t\t/**\n    * Converts a cipher params object to an OpenSSL-compatible string.\n    *\n    * @param {CipherParams} cipherParams The cipher params object.\n    *\n    * @return {string} The OpenSSL-compatible string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);\n    */\n\t\t\tstringify: function (cipherParams) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar ciphertext = cipherParams.ciphertext;\n\t\t\t\tvar salt = cipherParams.salt;\n\n\t\t\t\t// Format\n\t\t\t\tif (salt) {\n\t\t\t\t\tvar wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);\n\t\t\t\t} else {\n\t\t\t\t\tvar wordArray = ciphertext;\n\t\t\t\t}\n\n\t\t\t\treturn wordArray.toString(Base64);\n\t\t\t},\n\n\t\t\t/**\n    * Converts an OpenSSL-compatible string to a cipher params object.\n    *\n    * @param {string} openSSLStr The OpenSSL-compatible string.\n    *\n    * @return {CipherParams} The cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);\n    */\n\t\t\tparse: function (openSSLStr) {\n\t\t\t\t// Parse base64\n\t\t\t\tvar ciphertext = Base64.parse(openSSLStr);\n\n\t\t\t\t// Shortcut\n\t\t\t\tvar ciphertextWords = ciphertext.words;\n\n\t\t\t\t// Test for salt\n\t\t\t\tif (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {\n\t\t\t\t\t// Extract salt\n\t\t\t\t\tvar salt = WordArray.create(ciphertextWords.slice(2, 4));\n\n\t\t\t\t\t// Remove salt from ciphertext\n\t\t\t\t\tciphertextWords.splice(0, 4);\n\t\t\t\t\tciphertext.sigBytes -= 16;\n\t\t\t\t}\n\n\t\t\t\treturn CipherParams.create({ ciphertext: ciphertext, salt: salt });\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * A cipher wrapper that returns ciphertext as a serializable cipher params object.\n   */\n\t\tvar SerializableCipher = C_lib.SerializableCipher = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tformat: OpenSSLFormatter\n\t\t\t}),\n\n\t\t\t/**\n    * Encrypts a message.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {WordArray|string} message The message to encrypt.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {CipherParams} A cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tencrypt: function (cipher, message, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Encrypt\n\t\t\t\tvar encryptor = cipher.createEncryptor(key, cfg);\n\t\t\t\tvar ciphertext = encryptor.finalize(message);\n\n\t\t\t\t// Shortcut\n\t\t\t\tvar cipherCfg = encryptor.cfg;\n\n\t\t\t\t// Create and return serializable cipher params\n\t\t\t\treturn CipherParams.create({\n\t\t\t\t\tciphertext: ciphertext,\n\t\t\t\t\tkey: key,\n\t\t\t\t\tiv: cipherCfg.iv,\n\t\t\t\t\talgorithm: cipher,\n\t\t\t\t\tmode: cipherCfg.mode,\n\t\t\t\t\tpadding: cipherCfg.padding,\n\t\t\t\t\tblockSize: cipher.blockSize,\n\t\t\t\t\tformatter: cfg.format\n\t\t\t\t});\n\t\t\t},\n\n\t\t\t/**\n    * Decrypts serialized ciphertext.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {CipherParams|string} ciphertext The ciphertext to decrypt.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {WordArray} The plaintext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tdecrypt: function (cipher, ciphertext, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Convert string to CipherParams\n\t\t\t\tciphertext = this._parse(ciphertext, cfg.format);\n\n\t\t\t\t// Decrypt\n\t\t\t\tvar plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);\n\n\t\t\t\treturn plaintext;\n\t\t\t},\n\n\t\t\t/**\n    * Converts serialized ciphertext to CipherParams,\n    * else assumed CipherParams already and returns ciphertext unchanged.\n    *\n    * @param {CipherParams|string} ciphertext The ciphertext.\n    * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.\n    *\n    * @return {CipherParams} The unserialized ciphertext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);\n    */\n\t\t\t_parse: function (ciphertext, format) {\n\t\t\t\tif (typeof ciphertext == 'string') {\n\t\t\t\t\treturn format.parse(ciphertext, this);\n\t\t\t\t} else {\n\t\t\t\t\treturn ciphertext;\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Key derivation function namespace.\n   */\n\t\tvar C_kdf = C.kdf = {};\n\n\t\t/**\n   * OpenSSL key derivation function.\n   */\n\t\tvar OpenSSLKdf = C_kdf.OpenSSL = {\n\t\t\t/**\n    * Derives a key and IV from a password.\n    *\n    * @param {string} password The password to derive from.\n    * @param {number} keySize The size in words of the key to generate.\n    * @param {number} ivSize The size in words of the IV to generate.\n    * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.\n    *\n    * @return {CipherParams} A cipher params object with the key, IV, and salt.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);\n    *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');\n    */\n\t\t\texecute: function (password, keySize, ivSize, salt) {\n\t\t\t\t// Generate random salt\n\t\t\t\tif (!salt) {\n\t\t\t\t\tsalt = WordArray.random(64 / 8);\n\t\t\t\t}\n\n\t\t\t\t// Derive key and IV\n\t\t\t\tvar key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);\n\n\t\t\t\t// Separate key and IV\n\t\t\t\tvar iv = WordArray.create(key.words.slice(keySize), ivSize * 4);\n\t\t\t\tkey.sigBytes = keySize * 4;\n\n\t\t\t\t// Return params\n\t\t\t\treturn CipherParams.create({ key: key, iv: iv, salt: salt });\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * A serializable cipher wrapper that derives the key from a password,\n   * and returns ciphertext as a serializable cipher params object.\n   */\n\t\tvar PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL\n    */\n\t\t\tcfg: SerializableCipher.cfg.extend({\n\t\t\t\tkdf: OpenSSLKdf\n\t\t\t}),\n\n\t\t\t/**\n    * Encrypts a message using a password.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {WordArray|string} message The message to encrypt.\n    * @param {string} password The password.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {CipherParams} A cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');\n    *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tencrypt: function (cipher, message, password, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Derive key and other params\n\t\t\t\tvar derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);\n\n\t\t\t\t// Add IV to config\n\t\t\t\tcfg.iv = derivedParams.iv;\n\n\t\t\t\t// Encrypt\n\t\t\t\tvar ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);\n\n\t\t\t\t// Mix in derived params\n\t\t\t\tciphertext.mixIn(derivedParams);\n\n\t\t\t\treturn ciphertext;\n\t\t\t},\n\n\t\t\t/**\n    * Decrypts serialized ciphertext using a password.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {CipherParams|string} ciphertext The ciphertext to decrypt.\n    * @param {string} password The password.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {WordArray} The plaintext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });\n    *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tdecrypt: function (cipher, ciphertext, password, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Convert string to CipherParams\n\t\t\t\tciphertext = this._parse(ciphertext, cfg.format);\n\n\t\t\t\t// Derive key and other params\n\t\t\t\tvar derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);\n\n\t\t\t\t// Add IV to config\n\t\t\t\tcfg.iv = derivedParams.iv;\n\n\t\t\t\t// Decrypt\n\t\t\t\tvar plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);\n\n\t\t\t\treturn plaintext;\n\t\t\t}\n\t\t});\n\t}();\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/cipher-core.js?"
            );
          },
          './node_modules/crypto-js/core.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory();\n\t} else {}\n})(this, function () {\n\n\t/**\n  * CryptoJS core components.\n  */\n\tvar CryptoJS = CryptoJS || function (Math, undefined) {\n\t\t/*\n   * Local polyfil of Object.create\n   */\n\t\tvar create = Object.create || function () {\n\t\t\tfunction F() {};\n\n\t\t\treturn function (obj) {\n\t\t\t\tvar subtype;\n\n\t\t\t\tF.prototype = obj;\n\n\t\t\t\tsubtype = new F();\n\n\t\t\t\tF.prototype = null;\n\n\t\t\t\treturn subtype;\n\t\t\t};\n\t\t}();\n\n\t\t/**\n   * CryptoJS namespace.\n   */\n\t\tvar C = {};\n\n\t\t/**\n   * Library namespace.\n   */\n\t\tvar C_lib = C.lib = {};\n\n\t\t/**\n   * Base object for prototypal inheritance.\n   */\n\t\tvar Base = C_lib.Base = function () {\n\n\t\t\treturn {\n\t\t\t\t/**\n     * Creates a new object that inherits from this object.\n     *\n     * @param {Object} overrides Properties to copy into the new object.\n     *\n     * @return {Object} The new object.\n     *\n     * @static\n     *\n     * @example\n     *\n     *     var MyType = CryptoJS.lib.Base.extend({\n     *         field: 'value',\n     *\n     *         method: function () {\n     *         }\n     *     });\n     */\n\t\t\t\textend: function (overrides) {\n\t\t\t\t\t// Spawn\n\t\t\t\t\tvar subtype = create(this);\n\n\t\t\t\t\t// Augment\n\t\t\t\t\tif (overrides) {\n\t\t\t\t\t\tsubtype.mixIn(overrides);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Create default initializer\n\t\t\t\t\tif (!subtype.hasOwnProperty('init') || this.init === subtype.init) {\n\t\t\t\t\t\tsubtype.init = function () {\n\t\t\t\t\t\t\tsubtype.$super.init.apply(this, arguments);\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\t// Initializer's prototype is the subtype object\n\t\t\t\t\tsubtype.init.prototype = subtype;\n\n\t\t\t\t\t// Reference supertype\n\t\t\t\t\tsubtype.$super = this;\n\n\t\t\t\t\treturn subtype;\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Extends this object and runs the init method.\n     * Arguments to create() will be passed to init().\n     *\n     * @return {Object} The new object.\n     *\n     * @static\n     *\n     * @example\n     *\n     *     var instance = MyType.create();\n     */\n\t\t\t\tcreate: function () {\n\t\t\t\t\tvar instance = this.extend();\n\t\t\t\t\tinstance.init.apply(instance, arguments);\n\n\t\t\t\t\treturn instance;\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Initializes a newly created object.\n     * Override this method to add some logic when your objects are created.\n     *\n     * @example\n     *\n     *     var MyType = CryptoJS.lib.Base.extend({\n     *         init: function () {\n     *             // ...\n     *         }\n     *     });\n     */\n\t\t\t\tinit: function () {},\n\n\t\t\t\t/**\n     * Copies properties into this object.\n     *\n     * @param {Object} properties The properties to mix in.\n     *\n     * @example\n     *\n     *     MyType.mixIn({\n     *         field: 'value'\n     *     });\n     */\n\t\t\t\tmixIn: function (properties) {\n\t\t\t\t\tfor (var propertyName in properties) {\n\t\t\t\t\t\tif (properties.hasOwnProperty(propertyName)) {\n\t\t\t\t\t\t\tthis[propertyName] = properties[propertyName];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// IE won't copy toString using the loop above\n\t\t\t\t\tif (properties.hasOwnProperty('toString')) {\n\t\t\t\t\t\tthis.toString = properties.toString;\n\t\t\t\t\t}\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Creates a copy of this object.\n     *\n     * @return {Object} The clone.\n     *\n     * @example\n     *\n     *     var clone = instance.clone();\n     */\n\t\t\t\tclone: function () {\n\t\t\t\t\treturn this.init.prototype.extend(this);\n\t\t\t\t}\n\t\t\t};\n\t\t}();\n\n\t\t/**\n   * An array of 32-bit words.\n   *\n   * @property {Array} words The array of 32-bit words.\n   * @property {number} sigBytes The number of significant bytes in this word array.\n   */\n\t\tvar WordArray = C_lib.WordArray = Base.extend({\n\t\t\t/**\n    * Initializes a newly created word array.\n    *\n    * @param {Array} words (Optional) An array of 32-bit words.\n    * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.lib.WordArray.create();\n    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);\n    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);\n    */\n\t\t\tinit: function (words, sigBytes) {\n\t\t\t\twords = this.words = words || [];\n\n\t\t\t\tif (sigBytes != undefined) {\n\t\t\t\t\tthis.sigBytes = sigBytes;\n\t\t\t\t} else {\n\t\t\t\t\tthis.sigBytes = words.length * 4;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts this word array to a string.\n    *\n    * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex\n    *\n    * @return {string} The stringified word array.\n    *\n    * @example\n    *\n    *     var string = wordArray + '';\n    *     var string = wordArray.toString();\n    *     var string = wordArray.toString(CryptoJS.enc.Utf8);\n    */\n\t\t\ttoString: function (encoder) {\n\t\t\t\treturn (encoder || Hex).stringify(this);\n\t\t\t},\n\n\t\t\t/**\n    * Concatenates a word array to this word array.\n    *\n    * @param {WordArray} wordArray The word array to append.\n    *\n    * @return {WordArray} This word array.\n    *\n    * @example\n    *\n    *     wordArray1.concat(wordArray2);\n    */\n\t\t\tconcat: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar thisWords = this.words;\n\t\t\t\tvar thatWords = wordArray.words;\n\t\t\t\tvar thisSigBytes = this.sigBytes;\n\t\t\t\tvar thatSigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\tthis.clamp();\n\n\t\t\t\t// Concat\n\t\t\t\tif (thisSigBytes % 4) {\n\t\t\t\t\t// Copy one byte at a time\n\t\t\t\t\tfor (var i = 0; i < thatSigBytes; i++) {\n\t\t\t\t\t\tvar thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\t\tthisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\t// Copy one word at a time\n\t\t\t\t\tfor (var i = 0; i < thatSigBytes; i += 4) {\n\t\t\t\t\t\tthisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tthis.sigBytes += thatSigBytes;\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Removes insignificant bits.\n    *\n    * @example\n    *\n    *     wordArray.clamp();\n    */\n\t\t\tclamp: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = this.words;\n\t\t\t\tvar sigBytes = this.sigBytes;\n\n\t\t\t\t// Clamp\n\t\t\t\twords[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;\n\t\t\t\twords.length = Math.ceil(sigBytes / 4);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this word array.\n    *\n    * @return {WordArray} The clone.\n    *\n    * @example\n    *\n    *     var clone = wordArray.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\t\t\t\tclone.words = this.words.slice(0);\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\t/**\n    * Creates a word array filled with random bytes.\n    *\n    * @param {number} nBytes The number of random bytes to generate.\n    *\n    * @return {WordArray} The random word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.lib.WordArray.random(16);\n    */\n\t\t\trandom: function (nBytes) {\n\t\t\t\tvar words = [];\n\n\t\t\t\tvar r = function (m_w) {\n\t\t\t\t\tvar m_w = m_w;\n\t\t\t\t\tvar m_z = 0x3ade68b1;\n\t\t\t\t\tvar mask = 0xffffffff;\n\n\t\t\t\t\treturn function () {\n\t\t\t\t\t\tm_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;\n\t\t\t\t\t\tm_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;\n\t\t\t\t\t\tvar result = (m_z << 0x10) + m_w & mask;\n\t\t\t\t\t\tresult /= 0x100000000;\n\t\t\t\t\t\tresult += 0.5;\n\t\t\t\t\t\treturn result * (Math.random() > .5 ? 1 : -1);\n\t\t\t\t\t};\n\t\t\t\t};\n\n\t\t\t\tfor (var i = 0, rcache; i < nBytes; i += 4) {\n\t\t\t\t\tvar _r = r((rcache || Math.random()) * 0x100000000);\n\n\t\t\t\t\trcache = _r() * 0x3ade67b7;\n\t\t\t\t\twords.push(_r() * 0x100000000 | 0);\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, nBytes);\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Encoder namespace.\n   */\n\t\tvar C_enc = C.enc = {};\n\n\t\t/**\n   * Hex encoding strategy.\n   */\n\t\tvar Hex = C_enc.Hex = {\n\t\t\t/**\n    * Converts a word array to a hex string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The hex string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar hexChars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i++) {\n\t\t\t\t\tvar bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\thexChars.push((bite >>> 4).toString(16));\n\t\t\t\t\thexChars.push((bite & 0x0f).toString(16));\n\t\t\t\t}\n\n\t\t\t\treturn hexChars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a hex string to a word array.\n    *\n    * @param {string} hexStr The hex string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Hex.parse(hexString);\n    */\n\t\t\tparse: function (hexStr) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hexStrLength = hexStr.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < hexStrLength; i += 2) {\n\t\t\t\t\twords[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, hexStrLength / 2);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Latin1 encoding strategy.\n   */\n\t\tvar Latin1 = C_enc.Latin1 = {\n\t\t\t/**\n    * Converts a word array to a Latin1 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The Latin1 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar latin1Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i++) {\n\t\t\t\t\tvar bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\tlatin1Chars.push(String.fromCharCode(bite));\n\t\t\t\t}\n\n\t\t\t\treturn latin1Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a Latin1 string to a word array.\n    *\n    * @param {string} latin1Str The Latin1 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);\n    */\n\t\t\tparse: function (latin1Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar latin1StrLength = latin1Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < latin1StrLength; i++) {\n\t\t\t\t\twords[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, latin1StrLength);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * UTF-8 encoding strategy.\n   */\n\t\tvar Utf8 = C_enc.Utf8 = {\n\t\t\t/**\n    * Converts a word array to a UTF-8 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-8 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\ttry {\n\t\t\t\t\treturn decodeURIComponent(escape(Latin1.stringify(wordArray)));\n\t\t\t\t} catch (e) {\n\t\t\t\t\tthrow new Error('Malformed UTF-8 data');\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-8 string to a word array.\n    *\n    * @param {string} utf8Str The UTF-8 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);\n    */\n\t\t\tparse: function (utf8Str) {\n\t\t\t\treturn Latin1.parse(unescape(encodeURIComponent(utf8Str)));\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Abstract buffered block algorithm template.\n   *\n   * The property blockSize must be implemented in a concrete subtype.\n   *\n   * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0\n   */\n\t\tvar BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({\n\t\t\t/**\n    * Resets this block algorithm's data buffer to its initial state.\n    *\n    * @example\n    *\n    *     bufferedBlockAlgorithm.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Initial values\n\t\t\t\tthis._data = new WordArray.init();\n\t\t\t\tthis._nDataBytes = 0;\n\t\t\t},\n\n\t\t\t/**\n    * Adds new data to this block algorithm's buffer.\n    *\n    * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.\n    *\n    * @example\n    *\n    *     bufferedBlockAlgorithm._append('data');\n    *     bufferedBlockAlgorithm._append(wordArray);\n    */\n\t\t\t_append: function (data) {\n\t\t\t\t// Convert string to WordArray, else assume WordArray already\n\t\t\t\tif (typeof data == 'string') {\n\t\t\t\t\tdata = Utf8.parse(data);\n\t\t\t\t}\n\n\t\t\t\t// Append\n\t\t\t\tthis._data.concat(data);\n\t\t\t\tthis._nDataBytes += data.sigBytes;\n\t\t\t},\n\n\t\t\t/**\n    * Processes available data blocks.\n    *\n    * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.\n    *\n    * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.\n    *\n    * @return {WordArray} The processed data.\n    *\n    * @example\n    *\n    *     var processedData = bufferedBlockAlgorithm._process();\n    *     var processedData = bufferedBlockAlgorithm._process(!!'flush');\n    */\n\t\t\t_process: function (doFlush) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\t\t\t\tvar dataSigBytes = data.sigBytes;\n\t\t\t\tvar blockSize = this.blockSize;\n\t\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t\t// Count blocks ready\n\t\t\t\tvar nBlocksReady = dataSigBytes / blockSizeBytes;\n\t\t\t\tif (doFlush) {\n\t\t\t\t\t// Round up to include partial blocks\n\t\t\t\t\tnBlocksReady = Math.ceil(nBlocksReady);\n\t\t\t\t} else {\n\t\t\t\t\t// Round down to include only full blocks,\n\t\t\t\t\t// less the number of blocks that must remain in the buffer\n\t\t\t\t\tnBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);\n\t\t\t\t}\n\n\t\t\t\t// Count words ready\n\t\t\t\tvar nWordsReady = nBlocksReady * blockSize;\n\n\t\t\t\t// Count bytes ready\n\t\t\t\tvar nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);\n\n\t\t\t\t// Process blocks\n\t\t\t\tif (nWordsReady) {\n\t\t\t\t\tfor (var offset = 0; offset < nWordsReady; offset += blockSize) {\n\t\t\t\t\t\t// Perform concrete-algorithm logic\n\t\t\t\t\t\tthis._doProcessBlock(dataWords, offset);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Remove processed words\n\t\t\t\t\tvar processedWords = dataWords.splice(0, nWordsReady);\n\t\t\t\t\tdata.sigBytes -= nBytesReady;\n\t\t\t\t}\n\n\t\t\t\t// Return processed words\n\t\t\t\treturn new WordArray.init(processedWords, nBytesReady);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this object.\n    *\n    * @return {Object} The clone.\n    *\n    * @example\n    *\n    *     var clone = bufferedBlockAlgorithm.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\t\t\t\tclone._data = this._data.clone();\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\t_minBufferSize: 0\n\t\t});\n\n\t\t/**\n   * Abstract hasher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)\n   */\n\t\tvar Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({\n\t\t\t/**\n    * Configuration options.\n    */\n\t\t\tcfg: Base.extend(),\n\n\t\t\t/**\n    * Initializes a newly created hasher.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for this hash computation.\n    *\n    * @example\n    *\n    *     var hasher = CryptoJS.algo.SHA256.create();\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this hasher to its initial state.\n    *\n    * @example\n    *\n    *     hasher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Reset data buffer\n\t\t\t\tBufferedBlockAlgorithm.reset.call(this);\n\n\t\t\t\t// Perform concrete-hasher logic\n\t\t\t\tthis._doReset();\n\t\t\t},\n\n\t\t\t/**\n    * Updates this hasher with a message.\n    *\n    * @param {WordArray|string} messageUpdate The message to append.\n    *\n    * @return {Hasher} This hasher.\n    *\n    * @example\n    *\n    *     hasher.update('message');\n    *     hasher.update(wordArray);\n    */\n\t\t\tupdate: function (messageUpdate) {\n\t\t\t\t// Append\n\t\t\t\tthis._append(messageUpdate);\n\n\t\t\t\t// Update the hash\n\t\t\t\tthis._process();\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the hash computation.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} messageUpdate (Optional) A final message update.\n    *\n    * @return {WordArray} The hash.\n    *\n    * @example\n    *\n    *     var hash = hasher.finalize();\n    *     var hash = hasher.finalize('message');\n    *     var hash = hasher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (messageUpdate) {\n\t\t\t\t// Final message update\n\t\t\t\tif (messageUpdate) {\n\t\t\t\t\tthis._append(messageUpdate);\n\t\t\t\t}\n\n\t\t\t\t// Perform concrete-hasher logic\n\t\t\t\tvar hash = this._doFinalize();\n\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tblockSize: 512 / 32,\n\n\t\t\t/**\n    * Creates a shortcut function to a hasher's object interface.\n    *\n    * @param {Hasher} hasher The hasher to create a helper for.\n    *\n    * @return {Function} The shortcut function.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);\n    */\n\t\t\t_createHelper: function (hasher) {\n\t\t\t\treturn function (message, cfg) {\n\t\t\t\t\treturn new hasher.init(cfg).finalize(message);\n\t\t\t\t};\n\t\t\t},\n\n\t\t\t/**\n    * Creates a shortcut function to the HMAC's object interface.\n    *\n    * @param {Hasher} hasher The hasher to use in this HMAC helper.\n    *\n    * @return {Function} The shortcut function.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);\n    */\n\t\t\t_createHmacHelper: function (hasher) {\n\t\t\t\treturn function (message, key) {\n\t\t\t\t\treturn new C_algo.HMAC.init(hasher, key).finalize(message);\n\t\t\t\t};\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Algorithm namespace.\n   */\n\t\tvar C_algo = C.algo = {};\n\n\t\treturn C;\n\t}(Math);\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/core.js?"
            );
          },
          './node_modules/crypto-js/enc-base64.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_enc = C.enc;\n\n\t\t/**\n   * Base64 encoding strategy.\n   */\n\t\tvar Base64 = C_enc.Base64 = {\n\t\t\t/**\n    * Converts a word array to a Base64 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The Base64 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\t\t\t\tvar map = this._map;\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\twordArray.clamp();\n\n\t\t\t\t// Convert\n\t\t\t\tvar base64Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 3) {\n\t\t\t\t\tvar byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\tvar byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;\n\t\t\t\t\tvar byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;\n\n\t\t\t\t\tvar triplet = byte1 << 16 | byte2 << 8 | byte3;\n\n\t\t\t\t\tfor (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {\n\t\t\t\t\t\tbase64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Add padding\n\t\t\t\tvar paddingChar = map.charAt(64);\n\t\t\t\tif (paddingChar) {\n\t\t\t\t\twhile (base64Chars.length % 4) {\n\t\t\t\t\t\tbase64Chars.push(paddingChar);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn base64Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a Base64 string to a word array.\n    *\n    * @param {string} base64Str The Base64 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Base64.parse(base64String);\n    */\n\t\t\tparse: function (base64Str) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar base64StrLength = base64Str.length;\n\t\t\t\tvar map = this._map;\n\t\t\t\tvar reverseMap = this._reverseMap;\n\n\t\t\t\tif (!reverseMap) {\n\t\t\t\t\treverseMap = this._reverseMap = [];\n\t\t\t\t\tfor (var j = 0; j < map.length; j++) {\n\t\t\t\t\t\treverseMap[map.charCodeAt(j)] = j;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Ignore padding\n\t\t\t\tvar paddingChar = map.charAt(64);\n\t\t\t\tif (paddingChar) {\n\t\t\t\t\tvar paddingIndex = base64Str.indexOf(paddingChar);\n\t\t\t\t\tif (paddingIndex !== -1) {\n\t\t\t\t\t\tbase64StrLength = paddingIndex;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Convert\n\t\t\t\treturn parseLoop(base64Str, base64StrLength, reverseMap);\n\t\t\t},\n\n\t\t\t_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='\n\t\t};\n\n\t\tfunction parseLoop(base64Str, base64StrLength, reverseMap) {\n\t\t\tvar words = [];\n\t\t\tvar nBytes = 0;\n\t\t\tfor (var i = 0; i < base64StrLength; i++) {\n\t\t\t\tif (i % 4) {\n\t\t\t\t\tvar bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;\n\t\t\t\t\tvar bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;\n\t\t\t\t\twords[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;\n\t\t\t\t\tnBytes++;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn WordArray.create(words, nBytes);\n\t\t}\n\t})();\n\n\treturn CryptoJS.enc.Base64;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/enc-base64.js?"
            );
          },
          './node_modules/crypto-js/enc-utf16.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_enc = C.enc;\n\n\t\t/**\n   * UTF-16 BE encoding strategy.\n   */\n\t\tvar Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {\n\t\t\t/**\n    * Converts a word array to a UTF-16 BE string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-16 BE string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar utf16Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 2) {\n\t\t\t\t\tvar codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;\n\t\t\t\t\tutf16Chars.push(String.fromCharCode(codePoint));\n\t\t\t\t}\n\n\t\t\t\treturn utf16Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-16 BE string to a word array.\n    *\n    * @param {string} utf16Str The UTF-16 BE string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);\n    */\n\t\t\tparse: function (utf16Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar utf16StrLength = utf16Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < utf16StrLength; i++) {\n\t\t\t\t\twords[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;\n\t\t\t\t}\n\n\t\t\t\treturn WordArray.create(words, utf16StrLength * 2);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * UTF-16 LE encoding strategy.\n   */\n\t\tC_enc.Utf16LE = {\n\t\t\t/**\n    * Converts a word array to a UTF-16 LE string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-16 LE string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar utf16Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 2) {\n\t\t\t\t\tvar codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);\n\t\t\t\t\tutf16Chars.push(String.fromCharCode(codePoint));\n\t\t\t\t}\n\n\t\t\t\treturn utf16Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-16 LE string to a word array.\n    *\n    * @param {string} utf16Str The UTF-16 LE string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);\n    */\n\t\t\tparse: function (utf16Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar utf16StrLength = utf16Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < utf16StrLength; i++) {\n\t\t\t\t\twords[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);\n\t\t\t\t}\n\n\t\t\t\treturn WordArray.create(words, utf16StrLength * 2);\n\t\t\t}\n\t\t};\n\n\t\tfunction swapEndian(word) {\n\t\t\treturn word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;\n\t\t}\n\t})();\n\n\treturn CryptoJS.enc.Utf16;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/enc-utf16.js?"
            );
          },
          './node_modules/crypto-js/evpkdf.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar MD5 = C_algo.MD5;\n\n\t\t/**\n   * This key derivation function is meant to conform with EVP_BytesToKey.\n   * www.openssl.org/docs/crypto/EVP_BytesToKey.html\n   */\n\t\tvar EvpKDF = C_algo.EvpKDF = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)\n    * @property {Hasher} hasher The hash algorithm to use. Default: MD5\n    * @property {number} iterations The number of iterations to perform. Default: 1\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tkeySize: 128 / 32,\n\t\t\t\thasher: MD5,\n\t\t\t\titerations: 1\n\t\t\t}),\n\n\t\t\t/**\n    * Initializes a newly created key derivation function.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for the derivation.\n    *\n    * @example\n    *\n    *     var kdf = CryptoJS.algo.EvpKDF.create();\n    *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });\n    *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Derives a key from a password.\n    *\n    * @param {WordArray|string} password The password.\n    * @param {WordArray|string} salt A salt.\n    *\n    * @return {WordArray} The derived key.\n    *\n    * @example\n    *\n    *     var key = kdf.compute(password, salt);\n    */\n\t\t\tcompute: function (password, salt) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar cfg = this.cfg;\n\n\t\t\t\t// Init hasher\n\t\t\t\tvar hasher = cfg.hasher.create();\n\n\t\t\t\t// Initial values\n\t\t\t\tvar derivedKey = WordArray.create();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar derivedKeyWords = derivedKey.words;\n\t\t\t\tvar keySize = cfg.keySize;\n\t\t\t\tvar iterations = cfg.iterations;\n\n\t\t\t\t// Generate key\n\t\t\t\twhile (derivedKeyWords.length < keySize) {\n\t\t\t\t\tif (block) {\n\t\t\t\t\t\thasher.update(block);\n\t\t\t\t\t}\n\t\t\t\t\tvar block = hasher.update(password).finalize(salt);\n\t\t\t\t\thasher.reset();\n\n\t\t\t\t\t// Iterations\n\t\t\t\t\tfor (var i = 1; i < iterations; i++) {\n\t\t\t\t\t\tblock = hasher.finalize(block);\n\t\t\t\t\t\thasher.reset();\n\t\t\t\t\t}\n\n\t\t\t\t\tderivedKey.concat(block);\n\t\t\t\t}\n\t\t\t\tderivedKey.sigBytes = keySize * 4;\n\n\t\t\t\treturn derivedKey;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Derives a key from a password.\n   *\n   * @param {WordArray|string} password The password.\n   * @param {WordArray|string} salt A salt.\n   * @param {Object} cfg (Optional) The configuration options to use for this computation.\n   *\n   * @return {WordArray} The derived key.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var key = CryptoJS.EvpKDF(password, salt);\n   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });\n   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });\n   */\n\t\tC.EvpKDF = function (password, salt, cfg) {\n\t\t\treturn EvpKDF.create(cfg).compute(password, salt);\n\t\t};\n\t})();\n\n\treturn CryptoJS.EvpKDF;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/evpkdf.js?'
            );
          },
          './node_modules/crypto-js/format-hex.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar CipherParams = C_lib.CipherParams;\n\t\tvar C_enc = C.enc;\n\t\tvar Hex = C_enc.Hex;\n\t\tvar C_format = C.format;\n\n\t\tvar HexFormatter = C_format.Hex = {\n\t\t\t/**\n    * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.\n    *\n    * @param {CipherParams} cipherParams The cipher params object.\n    *\n    * @return {string} The hexadecimally encoded string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);\n    */\n\t\t\tstringify: function (cipherParams) {\n\t\t\t\treturn cipherParams.ciphertext.toString(Hex);\n\t\t\t},\n\n\t\t\t/**\n    * Converts a hexadecimally encoded ciphertext string to a cipher params object.\n    *\n    * @param {string} input The hexadecimally encoded string.\n    *\n    * @return {CipherParams} The cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.format.Hex.parse(hexString);\n    */\n\t\t\tparse: function (input) {\n\t\t\t\tvar ciphertext = Hex.parse(input);\n\t\t\t\treturn CipherParams.create({ ciphertext: ciphertext });\n\t\t\t}\n\t\t};\n\t})();\n\n\treturn CryptoJS.format.Hex;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/format-hex.js?'
            );
          },
          './node_modules/crypto-js/hmac.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar C_enc = C.enc;\n\t\tvar Utf8 = C_enc.Utf8;\n\t\tvar C_algo = C.algo;\n\n\t\t/**\n   * HMAC algorithm.\n   */\n\t\tvar HMAC = C_algo.HMAC = Base.extend({\n\t\t\t/**\n    * Initializes a newly created HMAC.\n    *\n    * @param {Hasher} hasher The hash algorithm to use.\n    * @param {WordArray|string} key The secret key.\n    *\n    * @example\n    *\n    *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);\n    */\n\t\t\tinit: function (hasher, key) {\n\t\t\t\t// Init hasher\n\t\t\t\thasher = this._hasher = new hasher.init();\n\n\t\t\t\t// Convert string to WordArray, else assume WordArray already\n\t\t\t\tif (typeof key == 'string') {\n\t\t\t\t\tkey = Utf8.parse(key);\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hasherBlockSize = hasher.blockSize;\n\t\t\t\tvar hasherBlockSizeBytes = hasherBlockSize * 4;\n\n\t\t\t\t// Allow arbitrary length keys\n\t\t\t\tif (key.sigBytes > hasherBlockSizeBytes) {\n\t\t\t\t\tkey = hasher.finalize(key);\n\t\t\t\t}\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\tkey.clamp();\n\n\t\t\t\t// Clone key for inner and outer pads\n\t\t\t\tvar oKey = this._oKey = key.clone();\n\t\t\t\tvar iKey = this._iKey = key.clone();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar oKeyWords = oKey.words;\n\t\t\t\tvar iKeyWords = iKey.words;\n\n\t\t\t\t// XOR keys with pad constants\n\t\t\t\tfor (var i = 0; i < hasherBlockSize; i++) {\n\t\t\t\t\toKeyWords[i] ^= 0x5c5c5c5c;\n\t\t\t\t\tiKeyWords[i] ^= 0x36363636;\n\t\t\t\t}\n\t\t\t\toKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this HMAC to its initial state.\n    *\n    * @example\n    *\n    *     hmacHasher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hasher = this._hasher;\n\n\t\t\t\t// Reset\n\t\t\t\thasher.reset();\n\t\t\t\thasher.update(this._iKey);\n\t\t\t},\n\n\t\t\t/**\n    * Updates this HMAC with a message.\n    *\n    * @param {WordArray|string} messageUpdate The message to append.\n    *\n    * @return {HMAC} This HMAC instance.\n    *\n    * @example\n    *\n    *     hmacHasher.update('message');\n    *     hmacHasher.update(wordArray);\n    */\n\t\t\tupdate: function (messageUpdate) {\n\t\t\t\tthis._hasher.update(messageUpdate);\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the HMAC computation.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} messageUpdate (Optional) A final message update.\n    *\n    * @return {WordArray} The HMAC.\n    *\n    * @example\n    *\n    *     var hmac = hmacHasher.finalize();\n    *     var hmac = hmacHasher.finalize('message');\n    *     var hmac = hmacHasher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (messageUpdate) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hasher = this._hasher;\n\n\t\t\t\t// Compute HMAC\n\t\t\t\tvar innerHash = hasher.finalize(messageUpdate);\n\t\t\t\thasher.reset();\n\t\t\t\tvar hmac = hasher.finalize(this._oKey.clone().concat(innerHash));\n\n\t\t\t\treturn hmac;\n\t\t\t}\n\t\t});\n\t})();\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/hmac.js?"
            );
          },
          './node_modules/crypto-js/index.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./lib-typedarrays */ "./node_modules/crypto-js/lib-typedarrays.js"), __webpack_require__(/*! ./enc-utf16 */ "./node_modules/crypto-js/enc-utf16.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"), __webpack_require__(/*! ./sha224 */ "./node_modules/crypto-js/sha224.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"), __webpack_require__(/*! ./sha384 */ "./node_modules/crypto-js/sha384.js"), __webpack_require__(/*! ./sha3 */ "./node_modules/crypto-js/sha3.js"), __webpack_require__(/*! ./ripemd160 */ "./node_modules/crypto-js/ripemd160.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"), __webpack_require__(/*! ./pbkdf2 */ "./node_modules/crypto-js/pbkdf2.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"), __webpack_require__(/*! ./mode-cfb */ "./node_modules/crypto-js/mode-cfb.js"), __webpack_require__(/*! ./mode-ctr */ "./node_modules/crypto-js/mode-ctr.js"), __webpack_require__(/*! ./mode-ctr-gladman */ "./node_modules/crypto-js/mode-ctr-gladman.js"), __webpack_require__(/*! ./mode-ofb */ "./node_modules/crypto-js/mode-ofb.js"), __webpack_require__(/*! ./mode-ecb */ "./node_modules/crypto-js/mode-ecb.js"), __webpack_require__(/*! ./pad-ansix923 */ "./node_modules/crypto-js/pad-ansix923.js"), __webpack_require__(/*! ./pad-iso10126 */ "./node_modules/crypto-js/pad-iso10126.js"), __webpack_require__(/*! ./pad-iso97971 */ "./node_modules/crypto-js/pad-iso97971.js"), __webpack_require__(/*! ./pad-zeropadding */ "./node_modules/crypto-js/pad-zeropadding.js"), __webpack_require__(/*! ./pad-nopadding */ "./node_modules/crypto-js/pad-nopadding.js"), __webpack_require__(/*! ./format-hex */ "./node_modules/crypto-js/format-hex.js"), __webpack_require__(/*! ./aes */ "./node_modules/crypto-js/aes.js"), __webpack_require__(/*! ./tripledes */ "./node_modules/crypto-js/tripledes.js"), __webpack_require__(/*! ./rc4 */ "./node_modules/crypto-js/rc4.js"), __webpack_require__(/*! ./rabbit */ "./node_modules/crypto-js/rabbit.js"), __webpack_require__(/*! ./rabbit-legacy */ "./node_modules/crypto-js/rabbit-legacy.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/index.js?'
            );
          },
          './node_modules/crypto-js/lib-typedarrays.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Check if typed arrays are supported\n\t\tif (typeof ArrayBuffer != \'function\') {\n\t\t\treturn;\n\t\t}\n\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\n\t\t// Reference original init\n\t\tvar superInit = WordArray.init;\n\n\t\t// Augment WordArray.init to handle typed arrays\n\t\tvar subInit = WordArray.init = function (typedArray) {\n\t\t\t// Convert buffers to uint8\n\t\t\tif (typedArray instanceof ArrayBuffer) {\n\t\t\t\ttypedArray = new Uint8Array(typedArray);\n\t\t\t}\n\n\t\t\t// Convert other array views to uint8\n\t\t\tif (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {\n\t\t\t\ttypedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);\n\t\t\t}\n\n\t\t\t// Handle Uint8Array\n\t\t\tif (typedArray instanceof Uint8Array) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar typedArrayByteLength = typedArray.byteLength;\n\n\t\t\t\t// Extract bytes\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < typedArrayByteLength; i++) {\n\t\t\t\t\twords[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;\n\t\t\t\t}\n\n\t\t\t\t// Initialize this word array\n\t\t\t\tsuperInit.call(this, words, typedArrayByteLength);\n\t\t\t} else {\n\t\t\t\t// Else call normal init\n\t\t\t\tsuperInit.apply(this, arguments);\n\t\t\t}\n\t\t};\n\n\t\tsubInit.prototype = WordArray;\n\t})();\n\n\treturn CryptoJS.lib.WordArray;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/lib-typedarrays.js?'
            );
          },
          './node_modules/crypto-js/md5.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants table\n\t\tvar T = [];\n\n\t\t// Compute constants\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 64; i++) {\n\t\t\t\tT[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * MD5 hash algorithm.\n   */\n\t\tvar MD5 = C_algo.MD5 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar offset_i = offset + i;\n\t\t\t\t\tvar M_offset_i = M[offset_i];\n\n\t\t\t\t\tM[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\tvar M_offset_0 = M[offset + 0];\n\t\t\t\tvar M_offset_1 = M[offset + 1];\n\t\t\t\tvar M_offset_2 = M[offset + 2];\n\t\t\t\tvar M_offset_3 = M[offset + 3];\n\t\t\t\tvar M_offset_4 = M[offset + 4];\n\t\t\t\tvar M_offset_5 = M[offset + 5];\n\t\t\t\tvar M_offset_6 = M[offset + 6];\n\t\t\t\tvar M_offset_7 = M[offset + 7];\n\t\t\t\tvar M_offset_8 = M[offset + 8];\n\t\t\t\tvar M_offset_9 = M[offset + 9];\n\t\t\t\tvar M_offset_10 = M[offset + 10];\n\t\t\t\tvar M_offset_11 = M[offset + 11];\n\t\t\t\tvar M_offset_12 = M[offset + 12];\n\t\t\t\tvar M_offset_13 = M[offset + 13];\n\t\t\t\tvar M_offset_14 = M[offset + 14];\n\t\t\t\tvar M_offset_15 = M[offset + 15];\n\n\t\t\t\t// Working varialbes\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\n\t\t\t\t// Computation\n\t\t\t\ta = FF(a, b, c, d, M_offset_0, 7, T[0]);\n\t\t\t\td = FF(d, a, b, c, M_offset_1, 12, T[1]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_2, 17, T[2]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_3, 22, T[3]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_4, 7, T[4]);\n\t\t\t\td = FF(d, a, b, c, M_offset_5, 12, T[5]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_6, 17, T[6]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_7, 22, T[7]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_8, 7, T[8]);\n\t\t\t\td = FF(d, a, b, c, M_offset_9, 12, T[9]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_10, 17, T[10]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_11, 22, T[11]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_12, 7, T[12]);\n\t\t\t\td = FF(d, a, b, c, M_offset_13, 12, T[13]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_14, 17, T[14]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_15, 22, T[15]);\n\n\t\t\t\ta = GG(a, b, c, d, M_offset_1, 5, T[16]);\n\t\t\t\td = GG(d, a, b, c, M_offset_6, 9, T[17]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_11, 14, T[18]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_0, 20, T[19]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_5, 5, T[20]);\n\t\t\t\td = GG(d, a, b, c, M_offset_10, 9, T[21]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_15, 14, T[22]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_4, 20, T[23]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_9, 5, T[24]);\n\t\t\t\td = GG(d, a, b, c, M_offset_14, 9, T[25]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_3, 14, T[26]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_8, 20, T[27]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_13, 5, T[28]);\n\t\t\t\td = GG(d, a, b, c, M_offset_2, 9, T[29]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_7, 14, T[30]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_12, 20, T[31]);\n\n\t\t\t\ta = HH(a, b, c, d, M_offset_5, 4, T[32]);\n\t\t\t\td = HH(d, a, b, c, M_offset_8, 11, T[33]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_11, 16, T[34]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_14, 23, T[35]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_1, 4, T[36]);\n\t\t\t\td = HH(d, a, b, c, M_offset_4, 11, T[37]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_7, 16, T[38]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_10, 23, T[39]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_13, 4, T[40]);\n\t\t\t\td = HH(d, a, b, c, M_offset_0, 11, T[41]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_3, 16, T[42]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_6, 23, T[43]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_9, 4, T[44]);\n\t\t\t\td = HH(d, a, b, c, M_offset_12, 11, T[45]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_15, 16, T[46]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_2, 23, T[47]);\n\n\t\t\t\ta = II(a, b, c, d, M_offset_0, 6, T[48]);\n\t\t\t\td = II(d, a, b, c, M_offset_7, 10, T[49]);\n\t\t\t\tc = II(c, d, a, b, M_offset_14, 15, T[50]);\n\t\t\t\tb = II(b, c, d, a, M_offset_5, 21, T[51]);\n\t\t\t\ta = II(a, b, c, d, M_offset_12, 6, T[52]);\n\t\t\t\td = II(d, a, b, c, M_offset_3, 10, T[53]);\n\t\t\t\tc = II(c, d, a, b, M_offset_10, 15, T[54]);\n\t\t\t\tb = II(b, c, d, a, M_offset_1, 21, T[55]);\n\t\t\t\ta = II(a, b, c, d, M_offset_8, 6, T[56]);\n\t\t\t\td = II(d, a, b, c, M_offset_15, 10, T[57]);\n\t\t\t\tc = II(c, d, a, b, M_offset_6, 15, T[58]);\n\t\t\t\tb = II(b, c, d, a, M_offset_13, 21, T[59]);\n\t\t\t\ta = II(a, b, c, d, M_offset_4, 6, T[60]);\n\t\t\t\td = II(d, a, b, c, M_offset_11, 10, T[61]);\n\t\t\t\tc = II(c, d, a, b, M_offset_2, 15, T[62]);\n\t\t\t\tb = II(b, c, d, a, M_offset_9, 21, T[63]);\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\n\t\t\t\tvar nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tvar nBitsTotalL = nBitsTotal;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;\n\n\t\t\t\tdata.sigBytes = (dataWords.length + 1) * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hash = this._hash;\n\t\t\t\tvar H = hash.words;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar H_i = H[i];\n\n\t\t\t\t\tH[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\tfunction FF(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b & c | ~b & d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction GG(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b & d | c & ~d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction HH(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b ^ c ^ d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction II(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (c ^ (b | ~d)) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.MD5('message');\n   *     var hash = CryptoJS.MD5(wordArray);\n   */\n\t\tC.MD5 = Hasher._createHelper(MD5);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacMD5(message, key);\n   */\n\t\tC.HmacMD5 = Hasher._createHmacHelper(MD5);\n\t})(Math);\n\n\treturn CryptoJS.MD5;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/md5.js?"
            );
          },
          './node_modules/crypto-js/mode-cfb.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Cipher Feedback block mode.\n  */\n\tCryptoJS.mode.CFB = function () {\n\t\tvar CFB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tCFB.Encryptor = CFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\tgenerateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);\n\n\t\t\t\t// Remember this block to use with next block\n\t\t\t\tthis._prevBlock = words.slice(offset, offset + blockSize);\n\t\t\t}\n\t\t});\n\n\t\tCFB.Decryptor = CFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t// Remember this block to use with next block\n\t\t\t\tvar thisBlock = words.slice(offset, offset + blockSize);\n\n\t\t\t\tgenerateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);\n\n\t\t\t\t// This block becomes the previous block\n\t\t\t\tthis._prevBlock = thisBlock;\n\t\t\t}\n\t\t});\n\n\t\tfunction generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {\n\t\t\t// Shortcut\n\t\t\tvar iv = this._iv;\n\n\t\t\t// Generate keystream\n\t\t\tif (iv) {\n\t\t\t\tvar keystream = iv.slice(0);\n\n\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\tthis._iv = undefined;\n\t\t\t} else {\n\t\t\t\tvar keystream = this._prevBlock;\n\t\t\t}\n\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t// Encrypt\n\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t}\n\t\t}\n\n\t\treturn CFB;\n\t}();\n\n\treturn CryptoJS.mode.CFB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-cfb.js?'
            );
          },
          './node_modules/crypto-js/mode-ctr-gladman.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/** @preserve\n  * Counter block mode compatible with  Dr Brian Gladman fileenc.c\n  * derived from CryptoJS.mode.CTR\n  * Jan Hruby jhruby.web@gmail.com\n  */\n\tCryptoJS.mode.CTRGladman = function () {\n\t\tvar CTRGladman = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tfunction incWord(word) {\n\t\t\tif ((word >> 24 & 0xff) === 0xff) {\n\t\t\t\t//overflow\n\t\t\t\tvar b1 = word >> 16 & 0xff;\n\t\t\t\tvar b2 = word >> 8 & 0xff;\n\t\t\t\tvar b3 = word & 0xff;\n\n\t\t\t\tif (b1 === 0xff) // overflow b1\n\t\t\t\t\t{\n\t\t\t\t\t\tb1 = 0;\n\t\t\t\t\t\tif (b2 === 0xff) {\n\t\t\t\t\t\t\tb2 = 0;\n\t\t\t\t\t\t\tif (b3 === 0xff) {\n\t\t\t\t\t\t\t\tb3 = 0;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t++b3;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t++b2;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t++b1;\n\t\t\t\t}\n\n\t\t\t\tword = 0;\n\t\t\t\tword += b1 << 16;\n\t\t\t\tword += b2 << 8;\n\t\t\t\tword += b3;\n\t\t\t} else {\n\t\t\t\tword += 0x01 << 24;\n\t\t\t}\n\t\t\treturn word;\n\t\t}\n\n\t\tfunction incCounter(counter) {\n\t\t\tif ((counter[0] = incWord(counter[0])) === 0) {\n\t\t\t\t// encr_data in fileenc.c from  Dr Brian Gladman\'s counts only with DWORD j < 8\n\t\t\t\tcounter[1] = incWord(counter[1]);\n\t\t\t}\n\t\t\treturn counter;\n\t\t}\n\n\t\tvar Encryptor = CTRGladman.Encryptor = CTRGladman.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar counter = this._counter;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tcounter = this._counter = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\n\t\t\t\tincCounter(counter);\n\n\t\t\t\tvar keystream = counter.slice(0);\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tCTRGladman.Decryptor = Encryptor;\n\n\t\treturn CTRGladman;\n\t}();\n\n\treturn CryptoJS.mode.CTRGladman;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ctr-gladman.js?'
            );
          },
          './node_modules/crypto-js/mode-ctr.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Counter block mode.\n  */\n\tCryptoJS.mode.CTR = function () {\n\t\tvar CTR = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tvar Encryptor = CTR.Encryptor = CTR.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar counter = this._counter;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tcounter = this._counter = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\t\t\t\tvar keystream = counter.slice(0);\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Increment counter\n\t\t\t\tcounter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tCTR.Decryptor = Encryptor;\n\n\t\treturn CTR;\n\t}();\n\n\treturn CryptoJS.mode.CTR;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ctr.js?'
            );
          },
          './node_modules/crypto-js/mode-ecb.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Electronic Codebook block mode.\n  */\n\tCryptoJS.mode.ECB = function () {\n\t\tvar ECB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tECB.Encryptor = ECB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\tthis._cipher.encryptBlock(words, offset);\n\t\t\t}\n\t\t});\n\n\t\tECB.Decryptor = ECB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\tthis._cipher.decryptBlock(words, offset);\n\t\t\t}\n\t\t});\n\n\t\treturn ECB;\n\t}();\n\n\treturn CryptoJS.mode.ECB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ecb.js?'
            );
          },
          './node_modules/crypto-js/mode-ofb.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Output Feedback block mode.\n  */\n\tCryptoJS.mode.OFB = function () {\n\t\tvar OFB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tvar Encryptor = OFB.Encryptor = OFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar keystream = this._keystream;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tkeystream = this._keystream = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tOFB.Decryptor = Encryptor;\n\n\t\treturn OFB;\n\t}();\n\n\treturn CryptoJS.mode.OFB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ofb.js?'
            );
          },
          './node_modules/crypto-js/pad-ansix923.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ANSI X.923 padding strategy.\n  */\n\tCryptoJS.pad.AnsiX923 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcuts\n\t\t\tvar dataSigBytes = data.sigBytes;\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Count padding bytes\n\t\t\tvar nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;\n\n\t\t\t// Compute last byte position\n\t\t\tvar lastBytePos = dataSigBytes + nPaddingBytes - 1;\n\n\t\t\t// Pad\n\t\t\tdata.clamp();\n\t\t\tdata.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;\n\t\t\tdata.sigBytes += nPaddingBytes;\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Get number of padding bytes from last byte\n\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t// Remove padding\n\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Ansix923;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-ansix923.js?'
            );
          },
          './node_modules/crypto-js/pad-iso10126.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ISO 10126 padding strategy.\n  */\n\tCryptoJS.pad.Iso10126 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcut\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Count padding bytes\n\t\t\tvar nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;\n\n\t\t\t// Pad\n\t\t\tdata.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Get number of padding bytes from last byte\n\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t// Remove padding\n\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Iso10126;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-iso10126.js?'
            );
          },
          './node_modules/crypto-js/pad-iso97971.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ISO/IEC 9797-1 Padding Method 2.\n  */\n\tCryptoJS.pad.Iso97971 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Add 0x80 byte\n\t\t\tdata.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));\n\n\t\t\t// Zero pad the rest\n\t\t\tCryptoJS.pad.ZeroPadding.pad(data, blockSize);\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Remove zero padding\n\t\t\tCryptoJS.pad.ZeroPadding.unpad(data);\n\n\t\t\t// Remove one more byte -- the 0x80 byte\n\t\t\tdata.sigBytes--;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Iso97971;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-iso97971.js?'
            );
          },
          './node_modules/crypto-js/pad-nopadding.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * A noop padding strategy.\n  */\n\tCryptoJS.pad.NoPadding = {\n\t\tpad: function () {},\n\n\t\tunpad: function () {}\n\t};\n\n\treturn CryptoJS.pad.NoPadding;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-nopadding.js?'
            );
          },
          './node_modules/crypto-js/pad-zeropadding.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Zero padding strategy.\n  */\n\tCryptoJS.pad.ZeroPadding = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcut\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Pad\n\t\t\tdata.clamp();\n\t\t\tdata.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Shortcut\n\t\t\tvar dataWords = data.words;\n\n\t\t\t// Unpad\n\t\t\tvar i = data.sigBytes - 1;\n\t\t\twhile (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff)) {\n\t\t\t\ti--;\n\t\t\t}\n\t\t\tdata.sigBytes = i + 1;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.ZeroPadding;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-zeropadding.js?'
            );
          },
          './node_modules/crypto-js/pbkdf2.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA1 = C_algo.SHA1;\n\t\tvar HMAC = C_algo.HMAC;\n\n\t\t/**\n   * Password-Based Key Derivation Function 2 algorithm.\n   */\n\t\tvar PBKDF2 = C_algo.PBKDF2 = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)\n    * @property {Hasher} hasher The hasher to use. Default: SHA1\n    * @property {number} iterations The number of iterations to perform. Default: 1\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tkeySize: 128 / 32,\n\t\t\t\thasher: SHA1,\n\t\t\t\titerations: 1\n\t\t\t}),\n\n\t\t\t/**\n    * Initializes a newly created key derivation function.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for the derivation.\n    *\n    * @example\n    *\n    *     var kdf = CryptoJS.algo.PBKDF2.create();\n    *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });\n    *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Computes the Password-Based Key Derivation Function 2.\n    *\n    * @param {WordArray|string} password The password.\n    * @param {WordArray|string} salt A salt.\n    *\n    * @return {WordArray} The derived key.\n    *\n    * @example\n    *\n    *     var key = kdf.compute(password, salt);\n    */\n\t\t\tcompute: function (password, salt) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar cfg = this.cfg;\n\n\t\t\t\t// Init HMAC\n\t\t\t\tvar hmac = HMAC.create(cfg.hasher, password);\n\n\t\t\t\t// Initial values\n\t\t\t\tvar derivedKey = WordArray.create();\n\t\t\t\tvar blockIndex = WordArray.create([0x00000001]);\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar derivedKeyWords = derivedKey.words;\n\t\t\t\tvar blockIndexWords = blockIndex.words;\n\t\t\t\tvar keySize = cfg.keySize;\n\t\t\t\tvar iterations = cfg.iterations;\n\n\t\t\t\t// Generate key\n\t\t\t\twhile (derivedKeyWords.length < keySize) {\n\t\t\t\t\tvar block = hmac.update(salt).finalize(blockIndex);\n\t\t\t\t\thmac.reset();\n\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar blockWords = block.words;\n\t\t\t\t\tvar blockWordsLength = blockWords.length;\n\n\t\t\t\t\t// Iterations\n\t\t\t\t\tvar intermediate = block;\n\t\t\t\t\tfor (var i = 1; i < iterations; i++) {\n\t\t\t\t\t\tintermediate = hmac.finalize(intermediate);\n\t\t\t\t\t\thmac.reset();\n\n\t\t\t\t\t\t// Shortcut\n\t\t\t\t\t\tvar intermediateWords = intermediate.words;\n\n\t\t\t\t\t\t// XOR intermediate with block\n\t\t\t\t\t\tfor (var j = 0; j < blockWordsLength; j++) {\n\t\t\t\t\t\t\tblockWords[j] ^= intermediateWords[j];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tderivedKey.concat(block);\n\t\t\t\t\tblockIndexWords[0]++;\n\t\t\t\t}\n\t\t\t\tderivedKey.sigBytes = keySize * 4;\n\n\t\t\t\treturn derivedKey;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Computes the Password-Based Key Derivation Function 2.\n   *\n   * @param {WordArray|string} password The password.\n   * @param {WordArray|string} salt A salt.\n   * @param {Object} cfg (Optional) The configuration options to use for this computation.\n   *\n   * @return {WordArray} The derived key.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var key = CryptoJS.PBKDF2(password, salt);\n   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });\n   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });\n   */\n\t\tC.PBKDF2 = function (password, salt, cfg) {\n\t\t\treturn PBKDF2.create(cfg).compute(password, salt);\n\t\t};\n\t})();\n\n\treturn CryptoJS.PBKDF2;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pbkdf2.js?'
            );
          },
          './node_modules/crypto-js/rabbit-legacy.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable objects\n\t\tvar S = [];\n\t\tvar C_ = [];\n\t\tvar G = [];\n\n\t\t/**\n   * Rabbit stream cipher algorithm.\n   *\n   * This is a legacy version that neglected to convert the key to little-endian.\n   * This error doesn\'t affect the cipher\'s security,\n   * but it does affect its compatibility with other implementations.\n   */\n\t\tvar RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar K = this._key.words;\n\t\t\t\tvar iv = this.cfg.iv;\n\n\t\t\t\t// Generate initial state values\n\t\t\t\tvar X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];\n\n\t\t\t\t// Generate initial counter values\n\t\t\t\tvar C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];\n\n\t\t\t\t// Carry bit\n\t\t\t\tthis._b = 0;\n\n\t\t\t\t// Iterate the system four times\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tnextState.call(this);\n\t\t\t\t}\n\n\t\t\t\t// Modify the counters\n\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\tC[i] ^= X[i + 4 & 7];\n\t\t\t\t}\n\n\t\t\t\t// IV setup\n\t\t\t\tif (iv) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar IV = iv.words;\n\t\t\t\t\tvar IV_0 = IV[0];\n\t\t\t\t\tvar IV_1 = IV[1];\n\n\t\t\t\t\t// Generate four subvectors\n\t\t\t\t\tvar i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i1 = i0 >>> 16 | i2 & 0xffff0000;\n\t\t\t\t\tvar i3 = i2 << 16 | i0 & 0x0000ffff;\n\n\t\t\t\t\t// Modify counter values\n\t\t\t\t\tC[0] ^= i0;\n\t\t\t\t\tC[1] ^= i1;\n\t\t\t\t\tC[2] ^= i2;\n\t\t\t\t\tC[3] ^= i3;\n\t\t\t\t\tC[4] ^= i0;\n\t\t\t\t\tC[5] ^= i1;\n\t\t\t\t\tC[6] ^= i2;\n\t\t\t\t\tC[7] ^= i3;\n\n\t\t\t\t\t// Iterate the system four times\n\t\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t\tnextState.call(this);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar X = this._X;\n\n\t\t\t\t// Iterate the system\n\t\t\t\tnextState.call(this);\n\n\t\t\t\t// Generate four keystream words\n\t\t\t\tS[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;\n\t\t\t\tS[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;\n\t\t\t\tS[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;\n\t\t\t\tS[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;\n\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tS[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Encrypt\n\t\t\t\t\tM[offset + i] ^= S[i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32,\n\n\t\t\tivSize: 64 / 32\n\t\t});\n\n\t\tfunction nextState() {\n\t\t\t// Shortcuts\n\t\t\tvar X = this._X;\n\t\t\tvar C = this._C;\n\n\t\t\t// Save old counter values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tC_[i] = C[i];\n\t\t\t}\n\n\t\t\t// Calculate new counter values\n\t\t\tC[0] = C[0] + 0x4d34d34d + this._b | 0;\n\t\t\tC[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;\n\t\t\tthis._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;\n\n\t\t\t// Calculate the g-values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tvar gx = X[i] + C[i];\n\n\t\t\t\t// Construct high and low argument for squaring\n\t\t\t\tvar ga = gx & 0xffff;\n\t\t\t\tvar gb = gx >>> 16;\n\n\t\t\t\t// Calculate high and low result of squaring\n\t\t\t\tvar gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;\n\t\t\t\tvar gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);\n\n\t\t\t\t// High XOR low\n\t\t\t\tG[i] = gh ^ gl;\n\t\t\t}\n\n\t\t\t// Calculate new state values\n\t\t\tX[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;\n\t\t\tX[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;\n\t\t\tX[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;\n\t\t\tX[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;\n\t\t\tX[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;\n\t\t\tX[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;\n\t\t\tX[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;\n\t\t\tX[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);\n\t})();\n\n\treturn CryptoJS.RabbitLegacy;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rabbit-legacy.js?'
            );
          },
          './node_modules/crypto-js/rabbit.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable objects\n\t\tvar S = [];\n\t\tvar C_ = [];\n\t\tvar G = [];\n\n\t\t/**\n   * Rabbit stream cipher algorithm\n   */\n\t\tvar Rabbit = C_algo.Rabbit = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar K = this._key.words;\n\t\t\t\tvar iv = this.cfg.iv;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tK[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Generate initial state values\n\t\t\t\tvar X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];\n\n\t\t\t\t// Generate initial counter values\n\t\t\t\tvar C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];\n\n\t\t\t\t// Carry bit\n\t\t\t\tthis._b = 0;\n\n\t\t\t\t// Iterate the system four times\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tnextState.call(this);\n\t\t\t\t}\n\n\t\t\t\t// Modify the counters\n\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\tC[i] ^= X[i + 4 & 7];\n\t\t\t\t}\n\n\t\t\t\t// IV setup\n\t\t\t\tif (iv) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar IV = iv.words;\n\t\t\t\t\tvar IV_0 = IV[0];\n\t\t\t\t\tvar IV_1 = IV[1];\n\n\t\t\t\t\t// Generate four subvectors\n\t\t\t\t\tvar i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i1 = i0 >>> 16 | i2 & 0xffff0000;\n\t\t\t\t\tvar i3 = i2 << 16 | i0 & 0x0000ffff;\n\n\t\t\t\t\t// Modify counter values\n\t\t\t\t\tC[0] ^= i0;\n\t\t\t\t\tC[1] ^= i1;\n\t\t\t\t\tC[2] ^= i2;\n\t\t\t\t\tC[3] ^= i3;\n\t\t\t\t\tC[4] ^= i0;\n\t\t\t\t\tC[5] ^= i1;\n\t\t\t\t\tC[6] ^= i2;\n\t\t\t\t\tC[7] ^= i3;\n\n\t\t\t\t\t// Iterate the system four times\n\t\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t\tnextState.call(this);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar X = this._X;\n\n\t\t\t\t// Iterate the system\n\t\t\t\tnextState.call(this);\n\n\t\t\t\t// Generate four keystream words\n\t\t\t\tS[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;\n\t\t\t\tS[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;\n\t\t\t\tS[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;\n\t\t\t\tS[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;\n\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tS[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Encrypt\n\t\t\t\t\tM[offset + i] ^= S[i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32,\n\n\t\t\tivSize: 64 / 32\n\t\t});\n\n\t\tfunction nextState() {\n\t\t\t// Shortcuts\n\t\t\tvar X = this._X;\n\t\t\tvar C = this._C;\n\n\t\t\t// Save old counter values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tC_[i] = C[i];\n\t\t\t}\n\n\t\t\t// Calculate new counter values\n\t\t\tC[0] = C[0] + 0x4d34d34d + this._b | 0;\n\t\t\tC[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;\n\t\t\tthis._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;\n\n\t\t\t// Calculate the g-values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tvar gx = X[i] + C[i];\n\n\t\t\t\t// Construct high and low argument for squaring\n\t\t\t\tvar ga = gx & 0xffff;\n\t\t\t\tvar gb = gx >>> 16;\n\n\t\t\t\t// Calculate high and low result of squaring\n\t\t\t\tvar gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;\n\t\t\t\tvar gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);\n\n\t\t\t\t// High XOR low\n\t\t\t\tG[i] = gh ^ gl;\n\t\t\t}\n\n\t\t\t// Calculate new state values\n\t\t\tX[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;\n\t\t\tX[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;\n\t\t\tX[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;\n\t\t\tX[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;\n\t\t\tX[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;\n\t\t\tX[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;\n\t\t\tX[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;\n\t\t\tX[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.Rabbit = StreamCipher._createHelper(Rabbit);\n\t})();\n\n\treturn CryptoJS.Rabbit;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rabbit.js?'
            );
          },
          './node_modules/crypto-js/rc4.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t/**\n   * RC4 stream cipher algorithm.\n   */\n\t\tvar RC4 = C_algo.RC4 = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\t\t\t\tvar keySigBytes = key.sigBytes;\n\n\t\t\t\t// Init sbox\n\t\t\t\tvar S = this._S = [];\n\t\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\t\tS[i] = i;\n\t\t\t\t}\n\n\t\t\t\t// Key setup\n\t\t\t\tfor (var i = 0, j = 0; i < 256; i++) {\n\t\t\t\t\tvar keyByteIndex = i % keySigBytes;\n\t\t\t\t\tvar keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;\n\n\t\t\t\t\tj = (j + S[i] + keyByte) % 256;\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tvar t = S[i];\n\t\t\t\t\tS[i] = S[j];\n\t\t\t\t\tS[j] = t;\n\t\t\t\t}\n\n\t\t\t\t// Counters\n\t\t\t\tthis._i = this._j = 0;\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\tM[offset] ^= generateKeystreamWord.call(this);\n\t\t\t},\n\n\t\t\tkeySize: 256 / 32,\n\n\t\t\tivSize: 0\n\t\t});\n\n\t\tfunction generateKeystreamWord() {\n\t\t\t// Shortcuts\n\t\t\tvar S = this._S;\n\t\t\tvar i = this._i;\n\t\t\tvar j = this._j;\n\n\t\t\t// Generate keystream word\n\t\t\tvar keystreamWord = 0;\n\t\t\tfor (var n = 0; n < 4; n++) {\n\t\t\t\ti = (i + 1) % 256;\n\t\t\t\tj = (j + S[i]) % 256;\n\n\t\t\t\t// Swap\n\t\t\t\tvar t = S[i];\n\t\t\t\tS[i] = S[j];\n\t\t\t\tS[j] = t;\n\n\t\t\t\tkeystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;\n\t\t\t}\n\n\t\t\t// Update counters\n\t\t\tthis._i = i;\n\t\t\tthis._j = j;\n\n\t\t\treturn keystreamWord;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RC4 = StreamCipher._createHelper(RC4);\n\n\t\t/**\n   * Modified RC4 stream cipher algorithm.\n   */\n\t\tvar RC4Drop = C_algo.RC4Drop = RC4.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} drop The number of keystream words to drop. Default 192\n    */\n\t\t\tcfg: RC4.cfg.extend({\n\t\t\t\tdrop: 192\n\t\t\t}),\n\n\t\t\t_doReset: function () {\n\t\t\t\tRC4._doReset.call(this);\n\n\t\t\t\t// Drop\n\t\t\t\tfor (var i = this.cfg.drop; i > 0; i--) {\n\t\t\t\t\tgenerateKeystreamWord.call(this);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RC4Drop = StreamCipher._createHelper(RC4Drop);\n\t})();\n\n\treturn CryptoJS.RC4;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rc4.js?'
            );
          },
          './node_modules/crypto-js/ripemd160.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/** @preserve\n (c) 2012 by Cédric Mesnil. All rights reserved.\n \tRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n \t    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n     - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n \tTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants table\n\t\tvar _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);\n\t\tvar _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);\n\t\tvar _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);\n\t\tvar _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);\n\n\t\tvar _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);\n\t\tvar _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);\n\n\t\t/**\n   * RIPEMD160 hash algorithm.\n   */\n\t\tvar RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar offset_i = offset + i;\n\t\t\t\t\tvar M_offset_i = M[offset_i];\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tM[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\t\t\t\tvar hl = _hl.words;\n\t\t\t\tvar hr = _hr.words;\n\t\t\t\tvar zl = _zl.words;\n\t\t\t\tvar zr = _zr.words;\n\t\t\t\tvar sl = _sl.words;\n\t\t\t\tvar sr = _sr.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar al, bl, cl, dl, el;\n\t\t\t\tvar ar, br, cr, dr, er;\n\n\t\t\t\tar = al = H[0];\n\t\t\t\tbr = bl = H[1];\n\t\t\t\tcr = cl = H[2];\n\t\t\t\tdr = dl = H[3];\n\t\t\t\ter = el = H[4];\n\t\t\t\t// Computation\n\t\t\t\tvar t;\n\t\t\t\tfor (var i = 0; i < 80; i += 1) {\n\t\t\t\t\tt = al + M[offset + zl[i]] | 0;\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tt += f1(bl, cl, dl) + hl[0];\n\t\t\t\t\t} else if (i < 32) {\n\t\t\t\t\t\tt += f2(bl, cl, dl) + hl[1];\n\t\t\t\t\t} else if (i < 48) {\n\t\t\t\t\t\tt += f3(bl, cl, dl) + hl[2];\n\t\t\t\t\t} else if (i < 64) {\n\t\t\t\t\t\tt += f4(bl, cl, dl) + hl[3];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// if (i<80) {\n\t\t\t\t\t\tt += f5(bl, cl, dl) + hl[4];\n\t\t\t\t\t}\n\t\t\t\t\tt = t | 0;\n\t\t\t\t\tt = rotl(t, sl[i]);\n\t\t\t\t\tt = t + el | 0;\n\t\t\t\t\tal = el;\n\t\t\t\t\tel = dl;\n\t\t\t\t\tdl = rotl(cl, 10);\n\t\t\t\t\tcl = bl;\n\t\t\t\t\tbl = t;\n\n\t\t\t\t\tt = ar + M[offset + zr[i]] | 0;\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tt += f5(br, cr, dr) + hr[0];\n\t\t\t\t\t} else if (i < 32) {\n\t\t\t\t\t\tt += f4(br, cr, dr) + hr[1];\n\t\t\t\t\t} else if (i < 48) {\n\t\t\t\t\t\tt += f3(br, cr, dr) + hr[2];\n\t\t\t\t\t} else if (i < 64) {\n\t\t\t\t\t\tt += f2(br, cr, dr) + hr[3];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// if (i<80) {\n\t\t\t\t\t\tt += f1(br, cr, dr) + hr[4];\n\t\t\t\t\t}\n\t\t\t\t\tt = t | 0;\n\t\t\t\t\tt = rotl(t, sr[i]);\n\t\t\t\t\tt = t + er | 0;\n\t\t\t\t\tar = er;\n\t\t\t\t\ter = dr;\n\t\t\t\t\tdr = rotl(cr, 10);\n\t\t\t\t\tcr = br;\n\t\t\t\t\tbr = t;\n\t\t\t\t}\n\t\t\t\t// Intermediate hash value\n\t\t\t\tt = H[1] + cl + dr | 0;\n\t\t\t\tH[1] = H[2] + dl + er | 0;\n\t\t\t\tH[2] = H[3] + el + ar | 0;\n\t\t\t\tH[3] = H[4] + al + br | 0;\n\t\t\t\tH[4] = H[0] + bl + cr | 0;\n\t\t\t\tH[0] = t;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;\n\t\t\t\tdata.sigBytes = (dataWords.length + 1) * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hash = this._hash;\n\t\t\t\tvar H = hash.words;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 5; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar H_i = H[i];\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tH[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\tfunction f1(x, y, z) {\n\t\t\treturn x ^ y ^ z;\n\t\t}\n\n\t\tfunction f2(x, y, z) {\n\t\t\treturn x & y | ~x & z;\n\t\t}\n\n\t\tfunction f3(x, y, z) {\n\t\t\treturn (x | ~y) ^ z;\n\t\t}\n\n\t\tfunction f4(x, y, z) {\n\t\t\treturn x & z | y & ~z;\n\t\t}\n\n\t\tfunction f5(x, y, z) {\n\t\t\treturn x ^ (y | ~z);\n\t\t}\n\n\t\tfunction rotl(x, n) {\n\t\t\treturn x << n | x >>> 32 - n;\n\t\t}\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.RIPEMD160(\'message\');\n   *     var hash = CryptoJS.RIPEMD160(wordArray);\n   */\n\t\tC.RIPEMD160 = Hasher._createHelper(RIPEMD160);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacRIPEMD160(message, key);\n   */\n\t\tC.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);\n\t})(Math);\n\n\treturn CryptoJS.RIPEMD160;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/ripemd160.js?'
            );
          },
          './node_modules/crypto-js/sha1.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable object\n\t\tvar W = [];\n\n\t\t/**\n   * SHA-1 hash algorithm.\n   */\n\t\tvar SHA1 = C_algo.SHA1 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\t\t\t\tvar e = H[4];\n\n\t\t\t\t// Computation\n\t\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tW[i] = M[offset + i] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];\n\t\t\t\t\t\tW[i] = n << 1 | n >>> 31;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar t = (a << 5 | a >>> 27) + e + W[i];\n\t\t\t\t\tif (i < 20) {\n\t\t\t\t\t\tt += (b & c | ~b & d) + 0x5a827999;\n\t\t\t\t\t} else if (i < 40) {\n\t\t\t\t\t\tt += (b ^ c ^ d) + 0x6ed9eba1;\n\t\t\t\t\t} else if (i < 60) {\n\t\t\t\t\t\tt += (b & c | b & d | c & d) - 0x70e44324;\n\t\t\t\t\t} else /* if (i < 80) */{\n\t\t\t\t\t\t\tt += (b ^ c ^ d) - 0x359d3e2a;\n\t\t\t\t\t\t}\n\n\t\t\t\t\te = d;\n\t\t\t\t\td = c;\n\t\t\t\t\tc = b << 30 | b >>> 2;\n\t\t\t\t\tb = a;\n\t\t\t\t\ta = t;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t\tH[4] = H[4] + e | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn this._hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA1('message');\n   *     var hash = CryptoJS.SHA1(wordArray);\n   */\n\t\tC.SHA1 = Hasher._createHelper(SHA1);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA1(message, key);\n   */\n\t\tC.HmacSHA1 = Hasher._createHmacHelper(SHA1);\n\t})();\n\n\treturn CryptoJS.SHA1;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha1.js?"
            );
          },
          './node_modules/crypto-js/sha224.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA256 = C_algo.SHA256;\n\n\t\t/**\n   * SHA-224 hash algorithm.\n   */\n\t\tvar SHA224 = C_algo.SHA224 = SHA256.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\tvar hash = SHA256._doFinalize.call(this);\n\n\t\t\t\thash.sigBytes -= 4;\n\n\t\t\t\treturn hash;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA224(\'message\');\n   *     var hash = CryptoJS.SHA224(wordArray);\n   */\n\t\tC.SHA224 = SHA256._createHelper(SHA224);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA224(message, key);\n   */\n\t\tC.HmacSHA224 = SHA256._createHmacHelper(SHA224);\n\t})();\n\n\treturn CryptoJS.SHA224;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha224.js?'
            );
          },
          './node_modules/crypto-js/sha256.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Initialization and round constants tables\n\t\tvar H = [];\n\t\tvar K = [];\n\n\t\t// Compute constants\n\t\t(function () {\n\t\t\tfunction isPrime(n) {\n\t\t\t\tvar sqrtN = Math.sqrt(n);\n\t\t\t\tfor (var factor = 2; factor <= sqrtN; factor++) {\n\t\t\t\t\tif (!(n % factor)) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tfunction getFractionalBits(n) {\n\t\t\t\treturn (n - (n | 0)) * 0x100000000 | 0;\n\t\t\t}\n\n\t\t\tvar n = 2;\n\t\t\tvar nPrime = 0;\n\t\t\twhile (nPrime < 64) {\n\t\t\t\tif (isPrime(n)) {\n\t\t\t\t\tif (nPrime < 8) {\n\t\t\t\t\t\tH[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));\n\t\t\t\t\t}\n\t\t\t\t\tK[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));\n\n\t\t\t\t\tnPrime++;\n\t\t\t\t}\n\n\t\t\t\tn++;\n\t\t\t}\n\t\t})();\n\n\t\t// Reusable object\n\t\tvar W = [];\n\n\t\t/**\n   * SHA-256 hash algorithm.\n   */\n\t\tvar SHA256 = C_algo.SHA256 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init(H.slice(0));\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\t\t\t\tvar e = H[4];\n\t\t\t\tvar f = H[5];\n\t\t\t\tvar g = H[6];\n\t\t\t\tvar h = H[7];\n\n\t\t\t\t// Computation\n\t\t\t\tfor (var i = 0; i < 64; i++) {\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tW[i] = M[offset + i] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar gamma0x = W[i - 15];\n\t\t\t\t\t\tvar gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;\n\n\t\t\t\t\t\tvar gamma1x = W[i - 2];\n\t\t\t\t\t\tvar gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;\n\n\t\t\t\t\t\tW[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];\n\t\t\t\t\t}\n\n\t\t\t\t\tvar ch = e & f ^ ~e & g;\n\t\t\t\t\tvar maj = a & b ^ a & c ^ b & c;\n\n\t\t\t\t\tvar sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);\n\t\t\t\t\tvar sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);\n\n\t\t\t\t\tvar t1 = h + sigma1 + ch + K[i] + W[i];\n\t\t\t\t\tvar t2 = sigma0 + maj;\n\n\t\t\t\t\th = g;\n\t\t\t\t\tg = f;\n\t\t\t\t\tf = e;\n\t\t\t\t\te = d + t1 | 0;\n\t\t\t\t\td = c;\n\t\t\t\t\tc = b;\n\t\t\t\t\tb = a;\n\t\t\t\t\ta = t1 + t2 | 0;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t\tH[4] = H[4] + e | 0;\n\t\t\t\tH[5] = H[5] + f | 0;\n\t\t\t\tH[6] = H[6] + g | 0;\n\t\t\t\tH[7] = H[7] + h | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn this._hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA256('message');\n   *     var hash = CryptoJS.SHA256(wordArray);\n   */\n\t\tC.SHA256 = Hasher._createHelper(SHA256);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA256(message, key);\n   */\n\t\tC.HmacSHA256 = Hasher._createHmacHelper(SHA256);\n\t})(Math);\n\n\treturn CryptoJS.SHA256;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha256.js?"
            );
          },
          './node_modules/crypto-js/sha3.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants tables\n\t\tvar RHO_OFFSETS = [];\n\t\tvar PI_INDEXES = [];\n\t\tvar ROUND_CONSTANTS = [];\n\n\t\t// Compute Constants\n\t\t(function () {\n\t\t\t// Compute rho offset constants\n\t\t\tvar x = 1,\n\t\t\t    y = 0;\n\t\t\tfor (var t = 0; t < 24; t++) {\n\t\t\t\tRHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;\n\n\t\t\t\tvar newX = y % 5;\n\t\t\t\tvar newY = (2 * x + 3 * y) % 5;\n\t\t\t\tx = newX;\n\t\t\t\ty = newY;\n\t\t\t}\n\n\t\t\t// Compute pi index constants\n\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\tPI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Compute round constants\n\t\t\tvar LFSR = 0x01;\n\t\t\tfor (var i = 0; i < 24; i++) {\n\t\t\t\tvar roundConstantMsw = 0;\n\t\t\t\tvar roundConstantLsw = 0;\n\n\t\t\t\tfor (var j = 0; j < 7; j++) {\n\t\t\t\t\tif (LFSR & 0x01) {\n\t\t\t\t\t\tvar bitPosition = (1 << j) - 1;\n\t\t\t\t\t\tif (bitPosition < 32) {\n\t\t\t\t\t\t\troundConstantLsw ^= 1 << bitPosition;\n\t\t\t\t\t\t} else /* if (bitPosition >= 32) */{\n\t\t\t\t\t\t\t\troundConstantMsw ^= 1 << bitPosition - 32;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Compute next LFSR\n\t\t\t\t\tif (LFSR & 0x80) {\n\t\t\t\t\t\t// Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1\n\t\t\t\t\t\tLFSR = LFSR << 1 ^ 0x71;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tLFSR <<= 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);\n\t\t\t}\n\t\t})();\n\n\t\t// Reusable objects for temporary values\n\t\tvar T = [];\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\tT[i] = X64Word.create();\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * SHA-3 hash algorithm.\n   */\n\t\tvar SHA3 = C_algo.SHA3 = Hasher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} outputLength\n    *   The desired number of bits in the output hash.\n    *   Only values permitted are: 224, 256, 384, 512.\n    *   Default: 512\n    */\n\t\t\tcfg: Hasher.cfg.extend({\n\t\t\t\toutputLength: 512\n\t\t\t}),\n\n\t\t\t_doReset: function () {\n\t\t\t\tvar state = this._state = [];\n\t\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\t\tstate[i] = new X64Word.init();\n\t\t\t\t}\n\n\t\t\t\tthis.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar state = this._state;\n\t\t\t\tvar nBlockSizeLanes = this.blockSize / 2;\n\n\t\t\t\t// Absorb\n\t\t\t\tfor (var i = 0; i < nBlockSizeLanes; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar M2i = M[offset + 2 * i];\n\t\t\t\t\tvar M2i1 = M[offset + 2 * i + 1];\n\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tM2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;\n\t\t\t\t\tM2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Absorb message into state\n\t\t\t\t\tvar lane = state[i];\n\t\t\t\t\tlane.high ^= M2i1;\n\t\t\t\t\tlane.low ^= M2i;\n\t\t\t\t}\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 0; round < 24; round++) {\n\t\t\t\t\t// Theta\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\t// Mix column lanes\n\t\t\t\t\t\tvar tMsw = 0,\n\t\t\t\t\t\t    tLsw = 0;\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\tvar lane = state[x + 5 * y];\n\t\t\t\t\t\t\ttMsw ^= lane.high;\n\t\t\t\t\t\t\ttLsw ^= lane.low;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Temporary values\n\t\t\t\t\t\tvar Tx = T[x];\n\t\t\t\t\t\tTx.high = tMsw;\n\t\t\t\t\t\tTx.low = tLsw;\n\t\t\t\t\t}\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\tvar Tx4 = T[(x + 4) % 5];\n\t\t\t\t\t\tvar Tx1 = T[(x + 1) % 5];\n\t\t\t\t\t\tvar Tx1Msw = Tx1.high;\n\t\t\t\t\t\tvar Tx1Lsw = Tx1.low;\n\n\t\t\t\t\t\t// Mix surrounding columns\n\t\t\t\t\t\tvar tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);\n\t\t\t\t\t\tvar tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\tvar lane = state[x + 5 * y];\n\t\t\t\t\t\t\tlane.high ^= tMsw;\n\t\t\t\t\t\t\tlane.low ^= tLsw;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Rho Pi\n\t\t\t\t\tfor (var laneIndex = 1; laneIndex < 25; laneIndex++) {\n\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\tvar lane = state[laneIndex];\n\t\t\t\t\t\tvar laneMsw = lane.high;\n\t\t\t\t\t\tvar laneLsw = lane.low;\n\t\t\t\t\t\tvar rhoOffset = RHO_OFFSETS[laneIndex];\n\n\t\t\t\t\t\t// Rotate lanes\n\t\t\t\t\t\tif (rhoOffset < 32) {\n\t\t\t\t\t\t\tvar tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;\n\t\t\t\t\t\t\tvar tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;\n\t\t\t\t\t\t} else /* if (rhoOffset >= 32) */{\n\t\t\t\t\t\t\t\tvar tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;\n\t\t\t\t\t\t\t\tvar tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Transpose lanes\n\t\t\t\t\t\tvar TPiLane = T[PI_INDEXES[laneIndex]];\n\t\t\t\t\t\tTPiLane.high = tMsw;\n\t\t\t\t\t\tTPiLane.low = tLsw;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Rho pi at x = y = 0\n\t\t\t\t\tvar T0 = T[0];\n\t\t\t\t\tvar state0 = state[0];\n\t\t\t\t\tT0.high = state0.high;\n\t\t\t\t\tT0.low = state0.low;\n\n\t\t\t\t\t// Chi\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\t\tvar laneIndex = x + 5 * y;\n\t\t\t\t\t\t\tvar lane = state[laneIndex];\n\t\t\t\t\t\t\tvar TLane = T[laneIndex];\n\t\t\t\t\t\t\tvar Tx1Lane = T[(x + 1) % 5 + 5 * y];\n\t\t\t\t\t\t\tvar Tx2Lane = T[(x + 2) % 5 + 5 * y];\n\n\t\t\t\t\t\t\t// Mix rows\n\t\t\t\t\t\t\tlane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;\n\t\t\t\t\t\t\tlane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Iota\n\t\t\t\t\tvar lane = state[0];\n\t\t\t\t\tvar roundConstant = ROUND_CONSTANTS[round];\n\t\t\t\t\tlane.high ^= roundConstant.high;\n\t\t\t\t\tlane.low ^= roundConstant.low;;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\t\t\t\tvar blockSizeBits = this.blockSize * 32;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar state = this._state;\n\t\t\t\tvar outputLengthBytes = this.cfg.outputLength / 8;\n\t\t\t\tvar outputLengthLanes = outputLengthBytes / 8;\n\n\t\t\t\t// Squeeze\n\t\t\t\tvar hashWords = [];\n\t\t\t\tfor (var i = 0; i < outputLengthLanes; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar lane = state[i];\n\t\t\t\t\tvar laneMsw = lane.high;\n\t\t\t\t\tvar laneLsw = lane.low;\n\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tlaneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;\n\t\t\t\t\tlaneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Squeeze state to retrieve hash\n\t\t\t\t\thashWords.push(laneLsw);\n\t\t\t\t\thashWords.push(laneMsw);\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn new WordArray.init(hashWords, outputLengthBytes);\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\n\t\t\t\tvar state = clone._state = this._state.slice(0);\n\t\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\t\tstate[i] = state[i].clone();\n\t\t\t\t}\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA3(\'message\');\n   *     var hash = CryptoJS.SHA3(wordArray);\n   */\n\t\tC.SHA3 = Hasher._createHelper(SHA3);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA3(message, key);\n   */\n\t\tC.HmacSHA3 = Hasher._createHmacHelper(SHA3);\n\t})(Math);\n\n\treturn CryptoJS.SHA3;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha3.js?'
            );
          },
          './node_modules/crypto-js/sha384.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar X64WordArray = C_x64.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA512 = C_algo.SHA512;\n\n\t\t/**\n   * SHA-384 hash algorithm.\n   */\n\t\tvar SHA384 = C_algo.SHA384 = SHA512.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\tvar hash = SHA512._doFinalize.call(this);\n\n\t\t\t\thash.sigBytes -= 16;\n\n\t\t\t\treturn hash;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA384(\'message\');\n   *     var hash = CryptoJS.SHA384(wordArray);\n   */\n\t\tC.SHA384 = SHA512._createHelper(SHA384);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA384(message, key);\n   */\n\t\tC.HmacSHA384 = SHA512._createHmacHelper(SHA384);\n\t})();\n\n\treturn CryptoJS.SHA384;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha384.js?'
            );
          },
          './node_modules/crypto-js/sha512.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar X64WordArray = C_x64.WordArray;\n\t\tvar C_algo = C.algo;\n\n\t\tfunction X64Word_create() {\n\t\t\treturn X64Word.create.apply(X64Word, arguments);\n\t\t}\n\n\t\t// Constants\n\t\tvar K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];\n\n\t\t// Reusable objects\n\t\tvar W = [];\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\tW[i] = X64Word_create();\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * SHA-512 hash algorithm.\n   */\n\t\tvar SHA512 = C_algo.SHA512 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\tvar H0 = H[0];\n\t\t\t\tvar H1 = H[1];\n\t\t\t\tvar H2 = H[2];\n\t\t\t\tvar H3 = H[3];\n\t\t\t\tvar H4 = H[4];\n\t\t\t\tvar H5 = H[5];\n\t\t\t\tvar H6 = H[6];\n\t\t\t\tvar H7 = H[7];\n\n\t\t\t\tvar H0h = H0.high;\n\t\t\t\tvar H0l = H0.low;\n\t\t\t\tvar H1h = H1.high;\n\t\t\t\tvar H1l = H1.low;\n\t\t\t\tvar H2h = H2.high;\n\t\t\t\tvar H2l = H2.low;\n\t\t\t\tvar H3h = H3.high;\n\t\t\t\tvar H3l = H3.low;\n\t\t\t\tvar H4h = H4.high;\n\t\t\t\tvar H4l = H4.low;\n\t\t\t\tvar H5h = H5.high;\n\t\t\t\tvar H5l = H5.low;\n\t\t\t\tvar H6h = H6.high;\n\t\t\t\tvar H6l = H6.low;\n\t\t\t\tvar H7h = H7.high;\n\t\t\t\tvar H7l = H7.low;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar ah = H0h;\n\t\t\t\tvar al = H0l;\n\t\t\t\tvar bh = H1h;\n\t\t\t\tvar bl = H1l;\n\t\t\t\tvar ch = H2h;\n\t\t\t\tvar cl = H2l;\n\t\t\t\tvar dh = H3h;\n\t\t\t\tvar dl = H3l;\n\t\t\t\tvar eh = H4h;\n\t\t\t\tvar el = H4l;\n\t\t\t\tvar fh = H5h;\n\t\t\t\tvar fl = H5l;\n\t\t\t\tvar gh = H6h;\n\t\t\t\tvar gl = H6l;\n\t\t\t\tvar hh = H7h;\n\t\t\t\tvar hl = H7l;\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar Wi = W[i];\n\n\t\t\t\t\t// Extend message\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tvar Wih = Wi.high = M[offset + i * 2] | 0;\n\t\t\t\t\t\tvar Wil = Wi.low = M[offset + i * 2 + 1] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Gamma0\n\t\t\t\t\t\tvar gamma0x = W[i - 15];\n\t\t\t\t\t\tvar gamma0xh = gamma0x.high;\n\t\t\t\t\t\tvar gamma0xl = gamma0x.low;\n\t\t\t\t\t\tvar gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;\n\t\t\t\t\t\tvar gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);\n\n\t\t\t\t\t\t// Gamma1\n\t\t\t\t\t\tvar gamma1x = W[i - 2];\n\t\t\t\t\t\tvar gamma1xh = gamma1x.high;\n\t\t\t\t\t\tvar gamma1xl = gamma1x.low;\n\t\t\t\t\t\tvar gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;\n\t\t\t\t\t\tvar gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);\n\n\t\t\t\t\t\t// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]\n\t\t\t\t\t\tvar Wi7 = W[i - 7];\n\t\t\t\t\t\tvar Wi7h = Wi7.high;\n\t\t\t\t\t\tvar Wi7l = Wi7.low;\n\n\t\t\t\t\t\tvar Wi16 = W[i - 16];\n\t\t\t\t\t\tvar Wi16h = Wi16.high;\n\t\t\t\t\t\tvar Wi16l = Wi16.low;\n\n\t\t\t\t\t\tvar Wil = gamma0l + Wi7l;\n\t\t\t\t\t\tvar Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);\n\t\t\t\t\t\tvar Wil = Wil + gamma1l;\n\t\t\t\t\t\tvar Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);\n\t\t\t\t\t\tvar Wil = Wil + Wi16l;\n\t\t\t\t\t\tvar Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);\n\n\t\t\t\t\t\tWi.high = Wih;\n\t\t\t\t\t\tWi.low = Wil;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar chh = eh & fh ^ ~eh & gh;\n\t\t\t\t\tvar chl = el & fl ^ ~el & gl;\n\t\t\t\t\tvar majh = ah & bh ^ ah & ch ^ bh & ch;\n\t\t\t\t\tvar majl = al & bl ^ al & cl ^ bl & cl;\n\n\t\t\t\t\tvar sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);\n\t\t\t\t\tvar sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);\n\t\t\t\t\tvar sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);\n\t\t\t\t\tvar sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);\n\n\t\t\t\t\t// t1 = h + sigma1 + ch + K[i] + W[i]\n\t\t\t\t\tvar Ki = K[i];\n\t\t\t\t\tvar Kih = Ki.high;\n\t\t\t\t\tvar Kil = Ki.low;\n\n\t\t\t\t\tvar t1l = hl + sigma1l;\n\t\t\t\t\tvar t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + chl;\n\t\t\t\t\tvar t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + Kil;\n\t\t\t\t\tvar t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + Wil;\n\t\t\t\t\tvar t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);\n\n\t\t\t\t\t// t2 = sigma0 + maj\n\t\t\t\t\tvar t2l = sigma0l + majl;\n\t\t\t\t\tvar t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);\n\n\t\t\t\t\t// Update working variables\n\t\t\t\t\thh = gh;\n\t\t\t\t\thl = gl;\n\t\t\t\t\tgh = fh;\n\t\t\t\t\tgl = fl;\n\t\t\t\t\tfh = eh;\n\t\t\t\t\tfl = el;\n\t\t\t\t\tel = dl + t1l | 0;\n\t\t\t\t\teh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;\n\t\t\t\t\tdh = ch;\n\t\t\t\t\tdl = cl;\n\t\t\t\t\tch = bh;\n\t\t\t\t\tcl = bl;\n\t\t\t\t\tbh = ah;\n\t\t\t\t\tbl = al;\n\t\t\t\t\tal = t1l + t2l | 0;\n\t\t\t\t\tah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH0l = H0.low = H0l + al;\n\t\t\t\tH0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);\n\t\t\t\tH1l = H1.low = H1l + bl;\n\t\t\t\tH1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);\n\t\t\t\tH2l = H2.low = H2l + cl;\n\t\t\t\tH2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);\n\t\t\t\tH3l = H3.low = H3l + dl;\n\t\t\t\tH3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);\n\t\t\t\tH4l = H4.low = H4l + el;\n\t\t\t\tH4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);\n\t\t\t\tH5l = H5.low = H5l + fl;\n\t\t\t\tH5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);\n\t\t\t\tH6l = H6.low = H6l + gl;\n\t\t\t\tH6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);\n\t\t\t\tH7l = H7.low = H7l + hl;\n\t\t\t\tH7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Convert hash to 32-bit word array before returning\n\t\t\t\tvar hash = this._hash.toX32();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\tblockSize: 1024 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA512(\'message\');\n   *     var hash = CryptoJS.SHA512(wordArray);\n   */\n\t\tC.SHA512 = Hasher._createHelper(SHA512);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA512(message, key);\n   */\n\t\tC.HmacSHA512 = Hasher._createHmacHelper(SHA512);\n\t})();\n\n\treturn CryptoJS.SHA512;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha512.js?'
            );
          },
          './node_modules/crypto-js/tripledes.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar BlockCipher = C_lib.BlockCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Permuted Choice 1 constants\n\t\tvar PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];\n\n\t\t// Permuted Choice 2 constants\n\t\tvar PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];\n\n\t\t// Cumulative bit shift constants\n\t\tvar BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];\n\n\t\t// SBOXes and round permutation constants\n\t\tvar SBOX_P = [{\n\t\t\t0x0: 0x808200,\n\t\t\t0x10000000: 0x8000,\n\t\t\t0x20000000: 0x808002,\n\t\t\t0x30000000: 0x2,\n\t\t\t0x40000000: 0x200,\n\t\t\t0x50000000: 0x808202,\n\t\t\t0x60000000: 0x800202,\n\t\t\t0x70000000: 0x800000,\n\t\t\t0x80000000: 0x202,\n\t\t\t0x90000000: 0x800200,\n\t\t\t0xa0000000: 0x8200,\n\t\t\t0xb0000000: 0x808000,\n\t\t\t0xc0000000: 0x8002,\n\t\t\t0xd0000000: 0x800002,\n\t\t\t0xe0000000: 0x0,\n\t\t\t0xf0000000: 0x8202,\n\t\t\t0x8000000: 0x0,\n\t\t\t0x18000000: 0x808202,\n\t\t\t0x28000000: 0x8202,\n\t\t\t0x38000000: 0x8000,\n\t\t\t0x48000000: 0x808200,\n\t\t\t0x58000000: 0x200,\n\t\t\t0x68000000: 0x808002,\n\t\t\t0x78000000: 0x2,\n\t\t\t0x88000000: 0x800200,\n\t\t\t0x98000000: 0x8200,\n\t\t\t0xa8000000: 0x808000,\n\t\t\t0xb8000000: 0x800202,\n\t\t\t0xc8000000: 0x800002,\n\t\t\t0xd8000000: 0x8002,\n\t\t\t0xe8000000: 0x202,\n\t\t\t0xf8000000: 0x800000,\n\t\t\t0x1: 0x8000,\n\t\t\t0x10000001: 0x2,\n\t\t\t0x20000001: 0x808200,\n\t\t\t0x30000001: 0x800000,\n\t\t\t0x40000001: 0x808002,\n\t\t\t0x50000001: 0x8200,\n\t\t\t0x60000001: 0x200,\n\t\t\t0x70000001: 0x800202,\n\t\t\t0x80000001: 0x808202,\n\t\t\t0x90000001: 0x808000,\n\t\t\t0xa0000001: 0x800002,\n\t\t\t0xb0000001: 0x8202,\n\t\t\t0xc0000001: 0x202,\n\t\t\t0xd0000001: 0x800200,\n\t\t\t0xe0000001: 0x8002,\n\t\t\t0xf0000001: 0x0,\n\t\t\t0x8000001: 0x808202,\n\t\t\t0x18000001: 0x808000,\n\t\t\t0x28000001: 0x800000,\n\t\t\t0x38000001: 0x200,\n\t\t\t0x48000001: 0x8000,\n\t\t\t0x58000001: 0x800002,\n\t\t\t0x68000001: 0x2,\n\t\t\t0x78000001: 0x8202,\n\t\t\t0x88000001: 0x8002,\n\t\t\t0x98000001: 0x800202,\n\t\t\t0xa8000001: 0x202,\n\t\t\t0xb8000001: 0x808200,\n\t\t\t0xc8000001: 0x800200,\n\t\t\t0xd8000001: 0x0,\n\t\t\t0xe8000001: 0x8200,\n\t\t\t0xf8000001: 0x808002\n\t\t}, {\n\t\t\t0x0: 0x40084010,\n\t\t\t0x1000000: 0x4000,\n\t\t\t0x2000000: 0x80000,\n\t\t\t0x3000000: 0x40080010,\n\t\t\t0x4000000: 0x40000010,\n\t\t\t0x5000000: 0x40084000,\n\t\t\t0x6000000: 0x40004000,\n\t\t\t0x7000000: 0x10,\n\t\t\t0x8000000: 0x84000,\n\t\t\t0x9000000: 0x40004010,\n\t\t\t0xa000000: 0x40000000,\n\t\t\t0xb000000: 0x84010,\n\t\t\t0xc000000: 0x80010,\n\t\t\t0xd000000: 0x0,\n\t\t\t0xe000000: 0x4010,\n\t\t\t0xf000000: 0x40080000,\n\t\t\t0x800000: 0x40004000,\n\t\t\t0x1800000: 0x84010,\n\t\t\t0x2800000: 0x10,\n\t\t\t0x3800000: 0x40004010,\n\t\t\t0x4800000: 0x40084010,\n\t\t\t0x5800000: 0x40000000,\n\t\t\t0x6800000: 0x80000,\n\t\t\t0x7800000: 0x40080010,\n\t\t\t0x8800000: 0x80010,\n\t\t\t0x9800000: 0x0,\n\t\t\t0xa800000: 0x4000,\n\t\t\t0xb800000: 0x40080000,\n\t\t\t0xc800000: 0x40000010,\n\t\t\t0xd800000: 0x84000,\n\t\t\t0xe800000: 0x40084000,\n\t\t\t0xf800000: 0x4010,\n\t\t\t0x10000000: 0x0,\n\t\t\t0x11000000: 0x40080010,\n\t\t\t0x12000000: 0x40004010,\n\t\t\t0x13000000: 0x40084000,\n\t\t\t0x14000000: 0x40080000,\n\t\t\t0x15000000: 0x10,\n\t\t\t0x16000000: 0x84010,\n\t\t\t0x17000000: 0x4000,\n\t\t\t0x18000000: 0x4010,\n\t\t\t0x19000000: 0x80000,\n\t\t\t0x1a000000: 0x80010,\n\t\t\t0x1b000000: 0x40000010,\n\t\t\t0x1c000000: 0x84000,\n\t\t\t0x1d000000: 0x40004000,\n\t\t\t0x1e000000: 0x40000000,\n\t\t\t0x1f000000: 0x40084010,\n\t\t\t0x10800000: 0x84010,\n\t\t\t0x11800000: 0x80000,\n\t\t\t0x12800000: 0x40080000,\n\t\t\t0x13800000: 0x4000,\n\t\t\t0x14800000: 0x40004000,\n\t\t\t0x15800000: 0x40084010,\n\t\t\t0x16800000: 0x10,\n\t\t\t0x17800000: 0x40000000,\n\t\t\t0x18800000: 0x40084000,\n\t\t\t0x19800000: 0x40000010,\n\t\t\t0x1a800000: 0x40004010,\n\t\t\t0x1b800000: 0x80010,\n\t\t\t0x1c800000: 0x0,\n\t\t\t0x1d800000: 0x4010,\n\t\t\t0x1e800000: 0x40080010,\n\t\t\t0x1f800000: 0x84000\n\t\t}, {\n\t\t\t0x0: 0x104,\n\t\t\t0x100000: 0x0,\n\t\t\t0x200000: 0x4000100,\n\t\t\t0x300000: 0x10104,\n\t\t\t0x400000: 0x10004,\n\t\t\t0x500000: 0x4000004,\n\t\t\t0x600000: 0x4010104,\n\t\t\t0x700000: 0x4010000,\n\t\t\t0x800000: 0x4000000,\n\t\t\t0x900000: 0x4010100,\n\t\t\t0xa00000: 0x10100,\n\t\t\t0xb00000: 0x4010004,\n\t\t\t0xc00000: 0x4000104,\n\t\t\t0xd00000: 0x10000,\n\t\t\t0xe00000: 0x4,\n\t\t\t0xf00000: 0x100,\n\t\t\t0x80000: 0x4010100,\n\t\t\t0x180000: 0x4010004,\n\t\t\t0x280000: 0x0,\n\t\t\t0x380000: 0x4000100,\n\t\t\t0x480000: 0x4000004,\n\t\t\t0x580000: 0x10000,\n\t\t\t0x680000: 0x10004,\n\t\t\t0x780000: 0x104,\n\t\t\t0x880000: 0x4,\n\t\t\t0x980000: 0x100,\n\t\t\t0xa80000: 0x4010000,\n\t\t\t0xb80000: 0x10104,\n\t\t\t0xc80000: 0x10100,\n\t\t\t0xd80000: 0x4000104,\n\t\t\t0xe80000: 0x4010104,\n\t\t\t0xf80000: 0x4000000,\n\t\t\t0x1000000: 0x4010100,\n\t\t\t0x1100000: 0x10004,\n\t\t\t0x1200000: 0x10000,\n\t\t\t0x1300000: 0x4000100,\n\t\t\t0x1400000: 0x100,\n\t\t\t0x1500000: 0x4010104,\n\t\t\t0x1600000: 0x4000004,\n\t\t\t0x1700000: 0x0,\n\t\t\t0x1800000: 0x4000104,\n\t\t\t0x1900000: 0x4000000,\n\t\t\t0x1a00000: 0x4,\n\t\t\t0x1b00000: 0x10100,\n\t\t\t0x1c00000: 0x4010000,\n\t\t\t0x1d00000: 0x104,\n\t\t\t0x1e00000: 0x10104,\n\t\t\t0x1f00000: 0x4010004,\n\t\t\t0x1080000: 0x4000000,\n\t\t\t0x1180000: 0x104,\n\t\t\t0x1280000: 0x4010100,\n\t\t\t0x1380000: 0x0,\n\t\t\t0x1480000: 0x10004,\n\t\t\t0x1580000: 0x4000100,\n\t\t\t0x1680000: 0x100,\n\t\t\t0x1780000: 0x4010004,\n\t\t\t0x1880000: 0x10000,\n\t\t\t0x1980000: 0x4010104,\n\t\t\t0x1a80000: 0x10104,\n\t\t\t0x1b80000: 0x4000004,\n\t\t\t0x1c80000: 0x4000104,\n\t\t\t0x1d80000: 0x4010000,\n\t\t\t0x1e80000: 0x4,\n\t\t\t0x1f80000: 0x10100\n\t\t}, {\n\t\t\t0x0: 0x80401000,\n\t\t\t0x10000: 0x80001040,\n\t\t\t0x20000: 0x401040,\n\t\t\t0x30000: 0x80400000,\n\t\t\t0x40000: 0x0,\n\t\t\t0x50000: 0x401000,\n\t\t\t0x60000: 0x80000040,\n\t\t\t0x70000: 0x400040,\n\t\t\t0x80000: 0x80000000,\n\t\t\t0x90000: 0x400000,\n\t\t\t0xa0000: 0x40,\n\t\t\t0xb0000: 0x80001000,\n\t\t\t0xc0000: 0x80400040,\n\t\t\t0xd0000: 0x1040,\n\t\t\t0xe0000: 0x1000,\n\t\t\t0xf0000: 0x80401040,\n\t\t\t0x8000: 0x80001040,\n\t\t\t0x18000: 0x40,\n\t\t\t0x28000: 0x80400040,\n\t\t\t0x38000: 0x80001000,\n\t\t\t0x48000: 0x401000,\n\t\t\t0x58000: 0x80401040,\n\t\t\t0x68000: 0x0,\n\t\t\t0x78000: 0x80400000,\n\t\t\t0x88000: 0x1000,\n\t\t\t0x98000: 0x80401000,\n\t\t\t0xa8000: 0x400000,\n\t\t\t0xb8000: 0x1040,\n\t\t\t0xc8000: 0x80000000,\n\t\t\t0xd8000: 0x400040,\n\t\t\t0xe8000: 0x401040,\n\t\t\t0xf8000: 0x80000040,\n\t\t\t0x100000: 0x400040,\n\t\t\t0x110000: 0x401000,\n\t\t\t0x120000: 0x80000040,\n\t\t\t0x130000: 0x0,\n\t\t\t0x140000: 0x1040,\n\t\t\t0x150000: 0x80400040,\n\t\t\t0x160000: 0x80401000,\n\t\t\t0x170000: 0x80001040,\n\t\t\t0x180000: 0x80401040,\n\t\t\t0x190000: 0x80000000,\n\t\t\t0x1a0000: 0x80400000,\n\t\t\t0x1b0000: 0x401040,\n\t\t\t0x1c0000: 0x80001000,\n\t\t\t0x1d0000: 0x400000,\n\t\t\t0x1e0000: 0x40,\n\t\t\t0x1f0000: 0x1000,\n\t\t\t0x108000: 0x80400000,\n\t\t\t0x118000: 0x80401040,\n\t\t\t0x128000: 0x0,\n\t\t\t0x138000: 0x401000,\n\t\t\t0x148000: 0x400040,\n\t\t\t0x158000: 0x80000000,\n\t\t\t0x168000: 0x80001040,\n\t\t\t0x178000: 0x40,\n\t\t\t0x188000: 0x80000040,\n\t\t\t0x198000: 0x1000,\n\t\t\t0x1a8000: 0x80001000,\n\t\t\t0x1b8000: 0x80400040,\n\t\t\t0x1c8000: 0x1040,\n\t\t\t0x1d8000: 0x80401000,\n\t\t\t0x1e8000: 0x400000,\n\t\t\t0x1f8000: 0x401040\n\t\t}, {\n\t\t\t0x0: 0x80,\n\t\t\t0x1000: 0x1040000,\n\t\t\t0x2000: 0x40000,\n\t\t\t0x3000: 0x20000000,\n\t\t\t0x4000: 0x20040080,\n\t\t\t0x5000: 0x1000080,\n\t\t\t0x6000: 0x21000080,\n\t\t\t0x7000: 0x40080,\n\t\t\t0x8000: 0x1000000,\n\t\t\t0x9000: 0x20040000,\n\t\t\t0xa000: 0x20000080,\n\t\t\t0xb000: 0x21040080,\n\t\t\t0xc000: 0x21040000,\n\t\t\t0xd000: 0x0,\n\t\t\t0xe000: 0x1040080,\n\t\t\t0xf000: 0x21000000,\n\t\t\t0x800: 0x1040080,\n\t\t\t0x1800: 0x21000080,\n\t\t\t0x2800: 0x80,\n\t\t\t0x3800: 0x1040000,\n\t\t\t0x4800: 0x40000,\n\t\t\t0x5800: 0x20040080,\n\t\t\t0x6800: 0x21040000,\n\t\t\t0x7800: 0x20000000,\n\t\t\t0x8800: 0x20040000,\n\t\t\t0x9800: 0x0,\n\t\t\t0xa800: 0x21040080,\n\t\t\t0xb800: 0x1000080,\n\t\t\t0xc800: 0x20000080,\n\t\t\t0xd800: 0x21000000,\n\t\t\t0xe800: 0x1000000,\n\t\t\t0xf800: 0x40080,\n\t\t\t0x10000: 0x40000,\n\t\t\t0x11000: 0x80,\n\t\t\t0x12000: 0x20000000,\n\t\t\t0x13000: 0x21000080,\n\t\t\t0x14000: 0x1000080,\n\t\t\t0x15000: 0x21040000,\n\t\t\t0x16000: 0x20040080,\n\t\t\t0x17000: 0x1000000,\n\t\t\t0x18000: 0x21040080,\n\t\t\t0x19000: 0x21000000,\n\t\t\t0x1a000: 0x1040000,\n\t\t\t0x1b000: 0x20040000,\n\t\t\t0x1c000: 0x40080,\n\t\t\t0x1d000: 0x20000080,\n\t\t\t0x1e000: 0x0,\n\t\t\t0x1f000: 0x1040080,\n\t\t\t0x10800: 0x21000080,\n\t\t\t0x11800: 0x1000000,\n\t\t\t0x12800: 0x1040000,\n\t\t\t0x13800: 0x20040080,\n\t\t\t0x14800: 0x20000000,\n\t\t\t0x15800: 0x1040080,\n\t\t\t0x16800: 0x80,\n\t\t\t0x17800: 0x21040000,\n\t\t\t0x18800: 0x40080,\n\t\t\t0x19800: 0x21040080,\n\t\t\t0x1a800: 0x0,\n\t\t\t0x1b800: 0x21000000,\n\t\t\t0x1c800: 0x1000080,\n\t\t\t0x1d800: 0x40000,\n\t\t\t0x1e800: 0x20040000,\n\t\t\t0x1f800: 0x20000080\n\t\t}, {\n\t\t\t0x0: 0x10000008,\n\t\t\t0x100: 0x2000,\n\t\t\t0x200: 0x10200000,\n\t\t\t0x300: 0x10202008,\n\t\t\t0x400: 0x10002000,\n\t\t\t0x500: 0x200000,\n\t\t\t0x600: 0x200008,\n\t\t\t0x700: 0x10000000,\n\t\t\t0x800: 0x0,\n\t\t\t0x900: 0x10002008,\n\t\t\t0xa00: 0x202000,\n\t\t\t0xb00: 0x8,\n\t\t\t0xc00: 0x10200008,\n\t\t\t0xd00: 0x202008,\n\t\t\t0xe00: 0x2008,\n\t\t\t0xf00: 0x10202000,\n\t\t\t0x80: 0x10200000,\n\t\t\t0x180: 0x10202008,\n\t\t\t0x280: 0x8,\n\t\t\t0x380: 0x200000,\n\t\t\t0x480: 0x202008,\n\t\t\t0x580: 0x10000008,\n\t\t\t0x680: 0x10002000,\n\t\t\t0x780: 0x2008,\n\t\t\t0x880: 0x200008,\n\t\t\t0x980: 0x2000,\n\t\t\t0xa80: 0x10002008,\n\t\t\t0xb80: 0x10200008,\n\t\t\t0xc80: 0x0,\n\t\t\t0xd80: 0x10202000,\n\t\t\t0xe80: 0x202000,\n\t\t\t0xf80: 0x10000000,\n\t\t\t0x1000: 0x10002000,\n\t\t\t0x1100: 0x10200008,\n\t\t\t0x1200: 0x10202008,\n\t\t\t0x1300: 0x2008,\n\t\t\t0x1400: 0x200000,\n\t\t\t0x1500: 0x10000000,\n\t\t\t0x1600: 0x10000008,\n\t\t\t0x1700: 0x202000,\n\t\t\t0x1800: 0x202008,\n\t\t\t0x1900: 0x0,\n\t\t\t0x1a00: 0x8,\n\t\t\t0x1b00: 0x10200000,\n\t\t\t0x1c00: 0x2000,\n\t\t\t0x1d00: 0x10002008,\n\t\t\t0x1e00: 0x10202000,\n\t\t\t0x1f00: 0x200008,\n\t\t\t0x1080: 0x8,\n\t\t\t0x1180: 0x202000,\n\t\t\t0x1280: 0x200000,\n\t\t\t0x1380: 0x10000008,\n\t\t\t0x1480: 0x10002000,\n\t\t\t0x1580: 0x2008,\n\t\t\t0x1680: 0x10202008,\n\t\t\t0x1780: 0x10200000,\n\t\t\t0x1880: 0x10202000,\n\t\t\t0x1980: 0x10200008,\n\t\t\t0x1a80: 0x2000,\n\t\t\t0x1b80: 0x202008,\n\t\t\t0x1c80: 0x200008,\n\t\t\t0x1d80: 0x0,\n\t\t\t0x1e80: 0x10000000,\n\t\t\t0x1f80: 0x10002008\n\t\t}, {\n\t\t\t0x0: 0x100000,\n\t\t\t0x10: 0x2000401,\n\t\t\t0x20: 0x400,\n\t\t\t0x30: 0x100401,\n\t\t\t0x40: 0x2100401,\n\t\t\t0x50: 0x0,\n\t\t\t0x60: 0x1,\n\t\t\t0x70: 0x2100001,\n\t\t\t0x80: 0x2000400,\n\t\t\t0x90: 0x100001,\n\t\t\t0xa0: 0x2000001,\n\t\t\t0xb0: 0x2100400,\n\t\t\t0xc0: 0x2100000,\n\t\t\t0xd0: 0x401,\n\t\t\t0xe0: 0x100400,\n\t\t\t0xf0: 0x2000000,\n\t\t\t0x8: 0x2100001,\n\t\t\t0x18: 0x0,\n\t\t\t0x28: 0x2000401,\n\t\t\t0x38: 0x2100400,\n\t\t\t0x48: 0x100000,\n\t\t\t0x58: 0x2000001,\n\t\t\t0x68: 0x2000000,\n\t\t\t0x78: 0x401,\n\t\t\t0x88: 0x100401,\n\t\t\t0x98: 0x2000400,\n\t\t\t0xa8: 0x2100000,\n\t\t\t0xb8: 0x100001,\n\t\t\t0xc8: 0x400,\n\t\t\t0xd8: 0x2100401,\n\t\t\t0xe8: 0x1,\n\t\t\t0xf8: 0x100400,\n\t\t\t0x100: 0x2000000,\n\t\t\t0x110: 0x100000,\n\t\t\t0x120: 0x2000401,\n\t\t\t0x130: 0x2100001,\n\t\t\t0x140: 0x100001,\n\t\t\t0x150: 0x2000400,\n\t\t\t0x160: 0x2100400,\n\t\t\t0x170: 0x100401,\n\t\t\t0x180: 0x401,\n\t\t\t0x190: 0x2100401,\n\t\t\t0x1a0: 0x100400,\n\t\t\t0x1b0: 0x1,\n\t\t\t0x1c0: 0x0,\n\t\t\t0x1d0: 0x2100000,\n\t\t\t0x1e0: 0x2000001,\n\t\t\t0x1f0: 0x400,\n\t\t\t0x108: 0x100400,\n\t\t\t0x118: 0x2000401,\n\t\t\t0x128: 0x2100001,\n\t\t\t0x138: 0x1,\n\t\t\t0x148: 0x2000000,\n\t\t\t0x158: 0x100000,\n\t\t\t0x168: 0x401,\n\t\t\t0x178: 0x2100400,\n\t\t\t0x188: 0x2000001,\n\t\t\t0x198: 0x2100000,\n\t\t\t0x1a8: 0x0,\n\t\t\t0x1b8: 0x2100401,\n\t\t\t0x1c8: 0x100401,\n\t\t\t0x1d8: 0x400,\n\t\t\t0x1e8: 0x2000400,\n\t\t\t0x1f8: 0x100001\n\t\t}, {\n\t\t\t0x0: 0x8000820,\n\t\t\t0x1: 0x20000,\n\t\t\t0x2: 0x8000000,\n\t\t\t0x3: 0x20,\n\t\t\t0x4: 0x20020,\n\t\t\t0x5: 0x8020820,\n\t\t\t0x6: 0x8020800,\n\t\t\t0x7: 0x800,\n\t\t\t0x8: 0x8020000,\n\t\t\t0x9: 0x8000800,\n\t\t\t0xa: 0x20800,\n\t\t\t0xb: 0x8020020,\n\t\t\t0xc: 0x820,\n\t\t\t0xd: 0x0,\n\t\t\t0xe: 0x8000020,\n\t\t\t0xf: 0x20820,\n\t\t\t0x80000000: 0x800,\n\t\t\t0x80000001: 0x8020820,\n\t\t\t0x80000002: 0x8000820,\n\t\t\t0x80000003: 0x8000000,\n\t\t\t0x80000004: 0x8020000,\n\t\t\t0x80000005: 0x20800,\n\t\t\t0x80000006: 0x20820,\n\t\t\t0x80000007: 0x20,\n\t\t\t0x80000008: 0x8000020,\n\t\t\t0x80000009: 0x820,\n\t\t\t0x8000000a: 0x20020,\n\t\t\t0x8000000b: 0x8020800,\n\t\t\t0x8000000c: 0x0,\n\t\t\t0x8000000d: 0x8020020,\n\t\t\t0x8000000e: 0x8000800,\n\t\t\t0x8000000f: 0x20000,\n\t\t\t0x10: 0x20820,\n\t\t\t0x11: 0x8020800,\n\t\t\t0x12: 0x20,\n\t\t\t0x13: 0x800,\n\t\t\t0x14: 0x8000800,\n\t\t\t0x15: 0x8000020,\n\t\t\t0x16: 0x8020020,\n\t\t\t0x17: 0x20000,\n\t\t\t0x18: 0x0,\n\t\t\t0x19: 0x20020,\n\t\t\t0x1a: 0x8020000,\n\t\t\t0x1b: 0x8000820,\n\t\t\t0x1c: 0x8020820,\n\t\t\t0x1d: 0x20800,\n\t\t\t0x1e: 0x820,\n\t\t\t0x1f: 0x8000000,\n\t\t\t0x80000010: 0x20000,\n\t\t\t0x80000011: 0x800,\n\t\t\t0x80000012: 0x8020020,\n\t\t\t0x80000013: 0x20820,\n\t\t\t0x80000014: 0x20,\n\t\t\t0x80000015: 0x8020000,\n\t\t\t0x80000016: 0x8000000,\n\t\t\t0x80000017: 0x8000820,\n\t\t\t0x80000018: 0x8020820,\n\t\t\t0x80000019: 0x8000020,\n\t\t\t0x8000001a: 0x8000800,\n\t\t\t0x8000001b: 0x0,\n\t\t\t0x8000001c: 0x20800,\n\t\t\t0x8000001d: 0x820,\n\t\t\t0x8000001e: 0x20020,\n\t\t\t0x8000001f: 0x8020800\n\t\t}];\n\n\t\t// Masks that select the SBOX input\n\t\tvar SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];\n\n\t\t/**\n   * DES block cipher algorithm.\n   */\n\t\tvar DES = C_algo.DES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\n\t\t\t\t// Select 56 bits according to PC1\n\t\t\t\tvar keyBits = [];\n\t\t\t\tfor (var i = 0; i < 56; i++) {\n\t\t\t\t\tvar keyBitPos = PC1[i] - 1;\n\t\t\t\t\tkeyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;\n\t\t\t\t}\n\n\t\t\t\t// Assemble 16 subkeys\n\t\t\t\tvar subKeys = this._subKeys = [];\n\t\t\t\tfor (var nSubKey = 0; nSubKey < 16; nSubKey++) {\n\t\t\t\t\t// Create subkey\n\t\t\t\t\tvar subKey = subKeys[nSubKey] = [];\n\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar bitShift = BIT_SHIFTS[nSubKey];\n\n\t\t\t\t\t// Select 48 bits according to PC2\n\t\t\t\t\tfor (var i = 0; i < 24; i++) {\n\t\t\t\t\t\t// Select from the left 28 key bits\n\t\t\t\t\t\tsubKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;\n\n\t\t\t\t\t\t// Select from the right 28 key bits\n\t\t\t\t\t\tsubKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Since each subkey is applied to an expanded 32-bit input,\n\t\t\t\t\t// the subkey can be broken into 8 values scaled to 32-bits,\n\t\t\t\t\t// which allows the key to be used without expansion\n\t\t\t\t\tsubKey[0] = subKey[0] << 1 | subKey[0] >>> 31;\n\t\t\t\t\tfor (var i = 1; i < 7; i++) {\n\t\t\t\t\t\tsubKey[i] = subKey[i] >>> (i - 1) * 4 + 3;\n\t\t\t\t\t}\n\t\t\t\t\tsubKey[7] = subKey[7] << 5 | subKey[7] >>> 27;\n\t\t\t\t}\n\n\t\t\t\t// Compute inverse subkeys\n\t\t\t\tvar invSubKeys = this._invSubKeys = [];\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\tinvSubKeys[i] = subKeys[15 - i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._subKeys);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._invSubKeys);\n\t\t\t},\n\n\t\t\t_doCryptBlock: function (M, offset, subKeys) {\n\t\t\t\t// Get input\n\t\t\t\tthis._lBlock = M[offset];\n\t\t\t\tthis._rBlock = M[offset + 1];\n\n\t\t\t\t// Initial permutation\n\t\t\t\texchangeLR.call(this, 4, 0x0f0f0f0f);\n\t\t\t\texchangeLR.call(this, 16, 0x0000ffff);\n\t\t\t\texchangeRL.call(this, 2, 0x33333333);\n\t\t\t\texchangeRL.call(this, 8, 0x00ff00ff);\n\t\t\t\texchangeLR.call(this, 1, 0x55555555);\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 0; round < 16; round++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar subKey = subKeys[round];\n\t\t\t\t\tvar lBlock = this._lBlock;\n\t\t\t\t\tvar rBlock = this._rBlock;\n\n\t\t\t\t\t// Feistel function\n\t\t\t\t\tvar f = 0;\n\t\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\t\tf |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];\n\t\t\t\t\t}\n\t\t\t\t\tthis._lBlock = rBlock;\n\t\t\t\t\tthis._rBlock = lBlock ^ f;\n\t\t\t\t}\n\n\t\t\t\t// Undo swap from last round\n\t\t\t\tvar t = this._lBlock;\n\t\t\t\tthis._lBlock = this._rBlock;\n\t\t\t\tthis._rBlock = t;\n\n\t\t\t\t// Final permutation\n\t\t\t\texchangeLR.call(this, 1, 0x55555555);\n\t\t\t\texchangeRL.call(this, 8, 0x00ff00ff);\n\t\t\t\texchangeRL.call(this, 2, 0x33333333);\n\t\t\t\texchangeLR.call(this, 16, 0x0000ffff);\n\t\t\t\texchangeLR.call(this, 4, 0x0f0f0f0f);\n\n\t\t\t\t// Set output\n\t\t\t\tM[offset] = this._lBlock;\n\t\t\t\tM[offset + 1] = this._rBlock;\n\t\t\t},\n\n\t\t\tkeySize: 64 / 32,\n\n\t\t\tivSize: 64 / 32,\n\n\t\t\tblockSize: 64 / 32\n\t\t});\n\n\t\t// Swap bits across the left and right words\n\t\tfunction exchangeLR(offset, mask) {\n\t\t\tvar t = (this._lBlock >>> offset ^ this._rBlock) & mask;\n\t\t\tthis._rBlock ^= t;\n\t\t\tthis._lBlock ^= t << offset;\n\t\t}\n\n\t\tfunction exchangeRL(offset, mask) {\n\t\t\tvar t = (this._rBlock >>> offset ^ this._lBlock) & mask;\n\t\t\tthis._lBlock ^= t;\n\t\t\tthis._rBlock ^= t << offset;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.DES = BlockCipher._createHelper(DES);\n\n\t\t/**\n   * Triple-DES block cipher algorithm.\n   */\n\t\tvar TripleDES = C_algo.TripleDES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\n\t\t\t\t// Create DES instances\n\t\t\t\tthis._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));\n\t\t\t\tthis._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));\n\t\t\t\tthis._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._des1.encryptBlock(M, offset);\n\t\t\t\tthis._des2.decryptBlock(M, offset);\n\t\t\t\tthis._des3.encryptBlock(M, offset);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\tthis._des3.decryptBlock(M, offset);\n\t\t\t\tthis._des2.encryptBlock(M, offset);\n\t\t\t\tthis._des1.decryptBlock(M, offset);\n\t\t\t},\n\n\t\t\tkeySize: 192 / 32,\n\n\t\t\tivSize: 64 / 32,\n\n\t\t\tblockSize: 64 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.TripleDES = BlockCipher._createHelper(TripleDES);\n\t})();\n\n\treturn CryptoJS.TripleDES;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/tripledes.js?'
            );
          },
          './node_modules/crypto-js/x64-core.js': function (
            module,
            exports,
            __webpack_require__
          ) {
            eval(
              ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar X32WordArray = C_lib.WordArray;\n\n\t\t/**\n   * x64 namespace.\n   */\n\t\tvar C_x64 = C.x64 = {};\n\n\t\t/**\n   * A 64-bit word.\n   */\n\t\tvar X64Word = C_x64.Word = Base.extend({\n\t\t\t/**\n    * Initializes a newly created 64-bit word.\n    *\n    * @param {number} high The high 32 bits.\n    * @param {number} low The low 32 bits.\n    *\n    * @example\n    *\n    *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);\n    */\n\t\t\tinit: function (high, low) {\n\t\t\t\tthis.high = high;\n\t\t\t\tthis.low = low;\n\t\t\t}\n\n\t\t\t/**\n    * Bitwise NOTs this word.\n    *\n    * @return {X64Word} A new x64-Word object after negating.\n    *\n    * @example\n    *\n    *     var negated = x64Word.not();\n    */\n\t\t\t// not: function () {\n\t\t\t// var high = ~this.high;\n\t\t\t// var low = ~this.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise ANDs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to AND with this word.\n    *\n    * @return {X64Word} A new x64-Word object after ANDing.\n    *\n    * @example\n    *\n    *     var anded = x64Word.and(anotherX64Word);\n    */\n\t\t\t// and: function (word) {\n\t\t\t// var high = this.high & word.high;\n\t\t\t// var low = this.low & word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise ORs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to OR with this word.\n    *\n    * @return {X64Word} A new x64-Word object after ORing.\n    *\n    * @example\n    *\n    *     var ored = x64Word.or(anotherX64Word);\n    */\n\t\t\t// or: function (word) {\n\t\t\t// var high = this.high | word.high;\n\t\t\t// var low = this.low | word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise XORs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to XOR with this word.\n    *\n    * @return {X64Word} A new x64-Word object after XORing.\n    *\n    * @example\n    *\n    *     var xored = x64Word.xor(anotherX64Word);\n    */\n\t\t\t// xor: function (word) {\n\t\t\t// var high = this.high ^ word.high;\n\t\t\t// var low = this.low ^ word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Shifts this word n bits to the left.\n    *\n    * @param {number} n The number of bits to shift.\n    *\n    * @return {X64Word} A new x64-Word object after shifting.\n    *\n    * @example\n    *\n    *     var shifted = x64Word.shiftL(25);\n    */\n\t\t\t// shiftL: function (n) {\n\t\t\t// if (n < 32) {\n\t\t\t// var high = (this.high << n) | (this.low >>> (32 - n));\n\t\t\t// var low = this.low << n;\n\t\t\t// } else {\n\t\t\t// var high = this.low << (n - 32);\n\t\t\t// var low = 0;\n\t\t\t// }\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Shifts this word n bits to the right.\n    *\n    * @param {number} n The number of bits to shift.\n    *\n    * @return {X64Word} A new x64-Word object after shifting.\n    *\n    * @example\n    *\n    *     var shifted = x64Word.shiftR(7);\n    */\n\t\t\t// shiftR: function (n) {\n\t\t\t// if (n < 32) {\n\t\t\t// var low = (this.low >>> n) | (this.high << (32 - n));\n\t\t\t// var high = this.high >>> n;\n\t\t\t// } else {\n\t\t\t// var low = this.high >>> (n - 32);\n\t\t\t// var high = 0;\n\t\t\t// }\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Rotates this word n bits to the left.\n    *\n    * @param {number} n The number of bits to rotate.\n    *\n    * @return {X64Word} A new x64-Word object after rotating.\n    *\n    * @example\n    *\n    *     var rotated = x64Word.rotL(25);\n    */\n\t\t\t// rotL: function (n) {\n\t\t\t// return this.shiftL(n).or(this.shiftR(64 - n));\n\t\t\t// },\n\n\t\t\t/**\n    * Rotates this word n bits to the right.\n    *\n    * @param {number} n The number of bits to rotate.\n    *\n    * @return {X64Word} A new x64-Word object after rotating.\n    *\n    * @example\n    *\n    *     var rotated = x64Word.rotR(7);\n    */\n\t\t\t// rotR: function (n) {\n\t\t\t// return this.shiftR(n).or(this.shiftL(64 - n));\n\t\t\t// },\n\n\t\t\t/**\n    * Adds this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to add with this word.\n    *\n    * @return {X64Word} A new x64-Word object after adding.\n    *\n    * @example\n    *\n    *     var added = x64Word.add(anotherX64Word);\n    */\n\t\t\t// add: function (word) {\n\t\t\t// var low = (this.low + word.low) | 0;\n\t\t\t// var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;\n\t\t\t// var high = (this.high + word.high + carry) | 0;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// }\n\t\t});\n\n\t\t/**\n   * An array of 64-bit words.\n   *\n   * @property {Array} words The array of CryptoJS.x64.Word objects.\n   * @property {number} sigBytes The number of significant bytes in this word array.\n   */\n\t\tvar X64WordArray = C_x64.WordArray = Base.extend({\n\t\t\t/**\n    * Initializes a newly created word array.\n    *\n    * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.\n    * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create();\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create([\n    *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),\n    *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)\n    *     ]);\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create([\n    *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),\n    *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)\n    *     ], 10);\n    */\n\t\t\tinit: function (words, sigBytes) {\n\t\t\t\twords = this.words = words || [];\n\n\t\t\t\tif (sigBytes != undefined) {\n\t\t\t\t\tthis.sigBytes = sigBytes;\n\t\t\t\t} else {\n\t\t\t\t\tthis.sigBytes = words.length * 8;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts this 64-bit word array to a 32-bit word array.\n    *\n    * @return {CryptoJS.lib.WordArray} This word array\'s data as a 32-bit word array.\n    *\n    * @example\n    *\n    *     var x32WordArray = x64WordArray.toX32();\n    */\n\t\t\ttoX32: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar x64Words = this.words;\n\t\t\t\tvar x64WordsLength = x64Words.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar x32Words = [];\n\t\t\t\tfor (var i = 0; i < x64WordsLength; i++) {\n\t\t\t\t\tvar x64Word = x64Words[i];\n\t\t\t\t\tx32Words.push(x64Word.high);\n\t\t\t\t\tx32Words.push(x64Word.low);\n\t\t\t\t}\n\n\t\t\t\treturn X32WordArray.create(x32Words, this.sigBytes);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this word array.\n    *\n    * @return {X64WordArray} The clone.\n    *\n    * @example\n    *\n    *     var clone = x64WordArray.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\n\t\t\t\t// Clone "words" array\n\t\t\t\tvar words = clone.words = this.words.slice(0);\n\n\t\t\t\t// Clone each X64Word object\n\t\t\t\tvar wordsLength = words.length;\n\t\t\t\tfor (var i = 0; i < wordsLength; i++) {\n\t\t\t\t\twords[i] = words[i].clone();\n\t\t\t\t}\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\t})();\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/x64-core.js?'
            );
          },
          './src/index.js': function (module, exports, __webpack_require__) {
            'use strict';
            eval(
              "\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\nconst AES = __webpack_require__(/*! crypto-js/aes */ \"./node_modules/crypto-js/aes.js\");\n\nconst keySize = 256;\nconst ivSize = 128;\nconst iterations = 100;\nconst length = 32;\nconst ivSizeDivider = 8;\n\n// HELPERS\nfunction isObject(obj) {\n  return obj === Object(obj);\n}\n\nfunction objToString(obj) {\n  if (isObject(obj)) {\n    obj = JSON.stringify(obj);\n  }\n  return obj;\n}\n\nconst oneWayEncryption = function (data) {\n  if (data) return CryptoJS.MD5(data).toString();\n  return data;\n};\n\nconst oneWayComparation = function (cypher, compare) {\n  if (cypher && compare) {\n    return cypher === CryptoJS.MD5(compare).toString();\n  }\n  return cypher;\n};\n\nconst twoWayEncryption = function (data, passphrase) {\n  if (!data) return data;\n  if (!passphrase) return passphrase;\n\n  if (isObject(data)) {\n    data = objToString(data);\n  }\n  const salt = CryptoJS.lib.WordArray.random(ivSize / ivSizeDivider);\n  const key = CryptoJS.PBKDF2(passphrase, salt, {\n    keySize: keySize / length,\n    iterations: iterations\n  });\n  const iv = CryptoJS.lib.WordArray.random(ivSize / ivSizeDivider);\n  const encrypted = CryptoJS.AES.encrypt(objToString(data), key, {\n    iv: iv,\n    padding: CryptoJS.pad.Pkcs7,\n    mode: CryptoJS.mode.CBC\n  });\n  // salt, initialization vector will be hex 32 in length\n  const cypher = salt.toString() + iv.toString() + encrypted.toString();\n  return cypher;\n};\n\nconst twoWayDecryption = function (cypher, passphrase) {\n\n  // console.log({\n  //   twd: 1,\n  //   cypher: cypher,\n  //   passphrase: passphrase\n  // });\n\n  if (!cypher) return cypher;\n\n  if (!passphrase) return passphrase;\n\n  const salt = CryptoJS.enc.Hex.parse(cypher.substr(0, length));\n  const iv = CryptoJS.enc.Hex.parse(cypher.substr(length, length));\n  const encrypted = cypher.substring(length * 2);\n  const key = CryptoJS.PBKDF2(passphrase, salt, {\n    keySize: keySize / length,\n    iterations: iterations\n  });\n  // console.log({\n  //   twd: 2,\n  //   salt: salt,\n  //   iv: iv,\n  //   encrypted: encrypted,\n  //   key: key\n  // });\n  let decrypted = CryptoJS.AES.decrypt(encrypted, key, {\n    iv: iv,\n    padding: CryptoJS.pad.Pkcs7,\n    mode: CryptoJS.mode.CBC\n  }).toString(CryptoJS.enc.Utf8);\n\n  // console.log({\n  //   twd: 3,\n  //   decrypted:decrypted\n  // })\n  // console.log('twDec4');\n  // console.log('DECRYPED',decrypted);\n  if (decrypted.charAt(0) === '\"' && decrypted.charAt(decrypted.length - 1) === '\"') {\n    decrypted = decrypted.substr(1, decrypted.length - 2);\n  }\n\n  // console.log('twDec5');\n  // console.log('DECRYPED',decrypted);\n  return decrypted;\n};\n\nconst BaseEncryption = {\n  oneWayEncrypt: oneWayEncryption,\n  oneWayCompare: oneWayComparation,\n  twoWayEncrypt: twoWayEncryption,\n  twoWayDecrypt: twoWayDecryption\n};\n\nmodule.exports = BaseEncryption;\n\n//# sourceURL=webpack://BaseEncryption/./src/index.js?"
            );
          },
        });
      });
    },
    './node_modules/localforage/dist/localforage.js': function (t, e, n) {
      t.exports = (function e(o, a, i) {
        function s(n, t) {
          if (!a[n]) {
            if (!o[n]) {
              if (c) return c(n, !0);
              var r = new Error("Cannot find module '" + n + "'");
              throw ((r.code = 'MODULE_NOT_FOUND'), r);
            }
            r = a[n] = { exports: {} };
            o[n][0].call(
              r.exports,
              function (t) {
                var e = o[n][1][t];
                return s(e || t);
              },
              r,
              r.exports,
              e,
              o,
              a,
              i
            );
          }
          return a[n].exports;
        }
        for (var c = !1, t = 0; t < i.length; t++) s(i[t]);
        return s;
      })(
        {
          1: [
            function (t, c, e) {
              !function (e) {
                'use strict';
                var t,
                  n,
                  r,
                  o,
                  a = e.MutationObserver || e.WebKitMutationObserver,
                  s = a
                    ? ((t = 0),
                      (a = new a(nextTick)),
                      (n = e.document.createTextNode('')),
                      a.observe(n, { characterData: !0 }),
                      function () {
                        n.data = t = ++t % 2;
                      })
                    : e.setImmediate || void 0 === e.MessageChannel
                    ? 'document' in e &&
                      'onreadystatechange' in e.document.createElement('script')
                      ? function () {
                          var t = e.document.createElement('script');
                          (t.onreadystatechange = function () {
                            nextTick(),
                              (t.onreadystatechange = null),
                              t.parentNode.removeChild(t),
                              (t = null);
                          }),
                            e.document.documentElement.appendChild(t);
                        }
                      : function () {
                          setTimeout(nextTick, 0);
                        }
                    : (((r = new e.MessageChannel()).port1.onmessage =
                        nextTick),
                      function () {
                        r.port2.postMessage(0);
                      }),
                  i = [];
                function nextTick() {
                  o = !0;
                  for (var t, e, n = i.length; n; ) {
                    for (e = i, i = [], t = -1; ++t < n; ) e[t]();
                    n = i.length;
                  }
                  o = !1;
                }
                c.exports = function immediate(t) {
                  1 !== i.push(t) || o || s();
                };
              }.call(
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
            function (t, e, n) {
              'use strict';
              var o = t(1);
              function INTERNAL() {}
              var c = {},
                a = ['REJECTED'],
                s = ['FULFILLED'],
                r = ['PENDING'];
              function Promise(t) {
                if ('function' != typeof t)
                  throw new TypeError('resolver must be a function');
                (this.state = r),
                  (this.queue = []),
                  (this.outcome = void 0),
                  t !== INTERNAL && safelyResolveThenable(this, t);
              }
              function QueueItem(t, e, n) {
                (this.promise = t),
                  'function' == typeof e &&
                    ((this.onFulfilled = e),
                    (this.callFulfilled = this.otherCallFulfilled)),
                  'function' == typeof n &&
                    ((this.onRejected = n),
                    (this.callRejected = this.otherCallRejected));
              }
              function unwrap(e, n, r) {
                o(function () {
                  var t;
                  try {
                    t = n(r);
                  } catch (t) {
                    return c.reject(e, t);
                  }
                  t === e
                    ? c.reject(
                        e,
                        new TypeError('Cannot resolve promise with itself')
                      )
                    : c.resolve(e, t);
                });
              }
              function getThen(t) {
                var e = t && t.then;
                if (
                  t &&
                  ('object' == typeof t || 'function' == typeof t) &&
                  'function' == typeof e
                )
                  return function appyThen() {
                    e.apply(t, arguments);
                  };
              }
              function safelyResolveThenable(e, t) {
                var n = !1;
                function onError(t) {
                  n || ((n = !0), c.reject(e, t));
                }
                function onSuccess(t) {
                  n || ((n = !0), c.resolve(e, t));
                }
                var r = tryCatch(function tryToUnwrap() {
                  t(onSuccess, onError);
                });
                'error' === r.status && onError(r.value);
              }
              function tryCatch(t, e) {
                var n = {};
                try {
                  (n.value = t(e)), (n.status = 'success');
                } catch (t) {
                  (n.status = 'error'), (n.value = t);
                }
                return n;
              }
              ((e.exports = Promise).prototype.catch = function (t) {
                return this.then(null, t);
              }),
                (Promise.prototype.then = function (t, e) {
                  if (
                    ('function' != typeof t && this.state === s) ||
                    ('function' != typeof e && this.state === a)
                  )
                    return this;
                  var n = new this.constructor(INTERNAL);
                  return (
                    this.state !== r
                      ? unwrap(n, this.state === s ? t : e, this.outcome)
                      : this.queue.push(new QueueItem(n, t, e)),
                    n
                  );
                }),
                (QueueItem.prototype.callFulfilled = function (t) {
                  c.resolve(this.promise, t);
                }),
                (QueueItem.prototype.otherCallFulfilled = function (t) {
                  unwrap(this.promise, this.onFulfilled, t);
                }),
                (QueueItem.prototype.callRejected = function (t) {
                  c.reject(this.promise, t);
                }),
                (QueueItem.prototype.otherCallRejected = function (t) {
                  unwrap(this.promise, this.onRejected, t);
                }),
                (c.resolve = function (t, e) {
                  var n = tryCatch(getThen, e);
                  if ('error' === n.status) return c.reject(t, n.value);
                  n = n.value;
                  if (n) safelyResolveThenable(t, n);
                  else {
                    (t.state = s), (t.outcome = e);
                    for (var r = -1, o = t.queue.length; ++r < o; )
                      t.queue[r].callFulfilled(e);
                  }
                  return t;
                }),
                (c.reject = function (t, e) {
                  (t.state = a), (t.outcome = e);
                  for (var n = -1, r = t.queue.length; ++n < r; )
                    t.queue[n].callRejected(e);
                  return t;
                }),
                (Promise.resolve = function resolve(t) {
                  if (t instanceof this) return t;
                  return c.resolve(new this(INTERNAL), t);
                }),
                (Promise.reject = function reject(t) {
                  var e = new this(INTERNAL);
                  return c.reject(e, t);
                }),
                (Promise.all = function all(t) {
                  var n = this;
                  if ('[object Array]' !== Object.prototype.toString.call(t))
                    return this.reject(new TypeError('must be an array'));
                  var r = t.length,
                    o = !1;
                  if (!r) return this.resolve([]);
                  var a = new Array(r),
                    s = 0,
                    e = -1,
                    i = new this(INTERNAL);
                  for (; ++e < r; )
                    !(function allResolver(t, e) {
                      n.resolve(t).then(
                        function resolveFromAll(t) {
                          (a[e] = t),
                            ++s !== r || o || ((o = !0), c.resolve(i, a));
                        },
                        function (t) {
                          o || ((o = !0), c.reject(i, t));
                        }
                      );
                    })(t[e], e);
                  return i;
                }),
                (Promise.race = function race(t) {
                  var e = this;
                  if ('[object Array]' !== Object.prototype.toString.call(t))
                    return this.reject(new TypeError('must be an array'));
                  var n = t.length,
                    r = !1;
                  if (!n) return this.resolve([]);
                  var o = -1,
                    a = new this(INTERNAL);
                  for (; ++o < n; )
                    !(function resolver(t) {
                      e.resolve(t).then(
                        function (t) {
                          r || ((r = !0), c.resolve(a, t));
                        },
                        function (t) {
                          r || ((r = !0), c.reject(a, t));
                        }
                      );
                    })(t[o]);
                  return a;
                });
            },
            { 1: 1 },
          ],
          3: [
            function (e, t, n) {
              !function (t) {
                'use strict';
                'function' != typeof t.Promise && (t.Promise = e(2));
              }.call(
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
            function (t, x, b) {
              'use strict';
              var g =
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
                    };
              var i = (function getIDB() {
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
              function createBlob(e, n) {
                (e = e || []), (n = n || {});
                try {
                  return new Blob(e, n);
                } catch (t) {
                  if ('TypeError' !== t.name) throw t;
                  for (
                    var r = new (
                        'undefined' != typeof BlobBuilder
                          ? BlobBuilder
                          : 'undefined' != typeof MSBlobBuilder
                          ? MSBlobBuilder
                          : 'undefined' != typeof MozBlobBuilder
                          ? MozBlobBuilder
                          : WebKitBlobBuilder
                      )(),
                      o = 0;
                    o < e.length;
                    o += 1
                  )
                    r.append(e[o]);
                  return r.getBlob(n.type);
                }
              }
              'undefined' == typeof Promise && t(3);
              var u = Promise;
              function executeCallback(t, e) {
                e &&
                  t.then(
                    function (t) {
                      e(null, t);
                    },
                    function (t) {
                      e(t);
                    }
                  );
              }
              function executeTwoCallbacks(t, e, n) {
                'function' == typeof e && t.then(e),
                  'function' == typeof n && t.catch(n);
              }
              function normalizeKey(t) {
                return (
                  'string' != typeof t &&
                    (console.warn(
                      t + ' used as a key, but it is not a string.'
                    ),
                    (t = String(t))),
                  t
                );
              }
              function getCallback() {
                if (
                  arguments.length &&
                  'function' == typeof arguments[arguments.length - 1]
                )
                  return arguments[arguments.length - 1];
              }
              var s = 'local-forage-detect-blob-support',
                e = void 0,
                d = {},
                S = Object.prototype.toString,
                n = 'readonly',
                l = 'readwrite';
              function _checkBlobSupport(t) {
                return 'boolean' == typeof e
                  ? u.resolve(e)
                  : (function _checkBlobSupportWithoutCaching(r) {
                      return new u(function (n) {
                        var t = r.transaction(s, l),
                          e = createBlob(['']);
                        t.objectStore(s).put(e, 'key'),
                          (t.onabort = function (t) {
                            t.preventDefault(), t.stopPropagation(), n(!1);
                          }),
                          (t.oncomplete = function () {
                            var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                              e = navigator.userAgent.match(/Edge\//);
                            n(e || !t || 43 <= parseInt(t[1], 10));
                          });
                      }).catch(function () {
                        return !1;
                      });
                    })(t).then(function (t) {
                      return (e = t);
                    });
              }
              function _deferReadiness(t) {
                var t = d[t.name],
                  n = {};
                (n.promise = new u(function (t, e) {
                  (n.resolve = t), (n.reject = e);
                })),
                  t.deferredOperations.push(n),
                  t.dbReady
                    ? (t.dbReady = t.dbReady.then(function () {
                        return n.promise;
                      }))
                    : (t.dbReady = n.promise);
              }
              function _advanceReadiness(t) {
                t = d[t.name].deferredOperations.pop();
                t && (t.resolve(), t.promise);
              }
              function _rejectReadiness(t, e) {
                t = d[t.name].deferredOperations.pop();
                if (t) return t.reject(e), t.promise;
              }
              function _getConnection(o, a) {
                return new u(function (e, n) {
                  if (((d[o.name] = d[o.name] || createDbContext()), o.db)) {
                    if (!a) return e(o.db);
                    _deferReadiness(o), o.db.close();
                  }
                  var t = [o.name],
                    r = (a && t.push(o.version), i.open.apply(i, t));
                  a &&
                    (r.onupgradeneeded = function (e) {
                      var t = r.result;
                      try {
                        t.createObjectStore(o.storeName),
                          e.oldVersion <= 1 && t.createObjectStore(s);
                      } catch (t) {
                        if ('ConstraintError' !== t.name) throw t;
                        console.warn(
                          'The database "' +
                            o.name +
                            '" has been upgraded from version ' +
                            e.oldVersion +
                            ' to version ' +
                            e.newVersion +
                            ', but the storage "' +
                            o.storeName +
                            '" already exists.'
                        );
                      }
                    }),
                    (r.onerror = function (t) {
                      t.preventDefault(), n(r.error);
                    }),
                    (r.onsuccess = function () {
                      var t = r.result;
                      (t.onversionchange = function (t) {
                        t.target.close();
                      }),
                        e(t),
                        _advanceReadiness(o);
                    });
                });
              }
              function _getOriginalConnection(t) {
                return _getConnection(t, !1);
              }
              function _getUpgradedConnection(t) {
                return _getConnection(t, !0);
              }
              function _isUpgradeNeeded(t, e) {
                if (!t.db) return 1;
                var n = !t.db.objectStoreNames.contains(t.storeName),
                  r = t.version < t.db.version,
                  o = t.version > t.db.version;
                return (
                  r &&
                    (t.version !== e &&
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
                  (o || n) &&
                    (n && (r = t.db.version + 1) > t.version && (t.version = r),
                    1)
                );
              }
              function _decodeBlob(t) {
                return createBlob(
                  [
                    (function _binStringToArrayBuffer(t) {
                      for (
                        var e = t.length,
                          n = new ArrayBuffer(e),
                          r = new Uint8Array(n),
                          o = 0;
                        o < e;
                        o++
                      )
                        r[o] = t.charCodeAt(o);
                      return n;
                    })(atob(t.data)),
                  ],
                  { type: t.type }
                );
              }
              function _isEncodedBlob(t) {
                return t && t.__local_forage_encoded_blob;
              }
              function _fullyReady(t) {
                var e = this,
                  n = e._initReady().then(function () {
                    var t = d[e._dbInfo.name];
                    if (t && t.dbReady) return t.dbReady;
                  });
                return executeTwoCallbacks(n, t, t), n;
              }
              function createTransaction(e, n, r, o) {
                void 0 === o && (o = 1);
                try {
                  var t = e.db.transaction(e.storeName, n);
                  r(null, t);
                } catch (t) {
                  if (
                    0 < o &&
                    (!e.db ||
                      'InvalidStateError' === t.name ||
                      'NotFoundError' === t.name)
                  )
                    return u
                      .resolve()
                      .then(function () {
                        if (
                          !e.db ||
                          ('NotFoundError' === t.name &&
                            !e.db.objectStoreNames.contains(e.storeName) &&
                            e.version <= e.db.version)
                        )
                          return (
                            e.db && (e.version = e.db.version + 1),
                            _getUpgradedConnection(e)
                          );
                      })
                      .then(function () {
                        return (function _tryReconnect(n) {
                          _deferReadiness(n);
                          for (
                            var r = d[n.name], o = r.forages, t = 0;
                            t < o.length;
                            t++
                          ) {
                            var e = o[t];
                            e._dbInfo.db &&
                              (e._dbInfo.db.close(), (e._dbInfo.db = null));
                          }
                          return (
                            (n.db = null),
                            _getOriginalConnection(n)
                              .then(function (t) {
                                return (
                                  (n.db = t),
                                  _isUpgradeNeeded(n)
                                    ? _getUpgradedConnection(n)
                                    : t
                                );
                              })
                              .then(function (t) {
                                n.db = r.db = t;
                                for (var e = 0; e < o.length; e++)
                                  o[e]._dbInfo.db = t;
                              })
                              .catch(function (t) {
                                throw (_rejectReadiness(n, t), t);
                              })
                          );
                        })(e).then(function () {
                          createTransaction(e, n, r, o - 1);
                        });
                      })
                      .catch(r);
                  r(t);
                }
              }
              function createDbContext() {
                return {
                  forages: [],
                  db: null,
                  dbReady: null,
                  deferredOperations: [],
                };
              }
              t = {
                _driver: 'asyncStorage',
                _initStorage: function _initStorage(t) {
                  var r = this,
                    o = { db: null };
                  if (t) for (var e in t) o[e] = t[e];
                  var a = d[o.name],
                    n =
                      (a || ((a = createDbContext()), (d[o.name] = a)),
                      a.forages.push(r),
                      r._initReady ||
                        ((r._initReady = r.ready), (r.ready = _fullyReady)),
                      []);
                  function ignoreErrors() {
                    return u.resolve();
                  }
                  for (var s = 0; s < a.forages.length; s++) {
                    var i = a.forages[s];
                    i !== r && n.push(i._initReady().catch(ignoreErrors));
                  }
                  var c = a.forages.slice(0);
                  return u
                    .all(n)
                    .then(function () {
                      return (o.db = a.db), _getOriginalConnection(o);
                    })
                    .then(function (t) {
                      return (
                        (o.db = t),
                        _isUpgradeNeeded(o, r._defaultConfig.version)
                          ? _getUpgradedConnection(o)
                          : t
                      );
                    })
                    .then(function (t) {
                      (o.db = a.db = t), (r._dbInfo = o);
                      for (var e = 0; e < c.length; e++) {
                        var n = c[e];
                        n !== r &&
                          ((n._dbInfo.db = o.db),
                          (n._dbInfo.version = o.version));
                      }
                    });
                },
                _support: (function isIndexedDBValid() {
                  try {
                    if (!i || !i.open) return !1;
                    var t =
                        'undefined' != typeof openDatabase &&
                        /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                        !/Chrome/.test(navigator.userAgent) &&
                        !/BlackBerry/.test(navigator.platform),
                      e =
                        'function' == typeof fetch &&
                        -1 !== fetch.toString().indexOf('[native code');
                    return (
                      (!t || e) &&
                      'undefined' != typeof indexedDB &&
                      'undefined' != typeof IDBKeyRange
                    );
                  } catch (t) {
                    return !1;
                  }
                })(),
                iterate: function iterate(s, t) {
                  var i = this,
                    e = new u(function (o, a) {
                      i.ready()
                        .then(function () {
                          createTransaction(i._dbInfo, n, function (t, e) {
                            if (t) return a(t);
                            try {
                              var n = e
                                  .objectStore(i._dbInfo.storeName)
                                  .openCursor(),
                                r = 1;
                              (n.onsuccess = function () {
                                var t,
                                  e = n.result;
                                e
                                  ? (_isEncodedBlob((t = e.value)) &&
                                      (t = _decodeBlob(t)),
                                    void 0 !== (t = s(t, e.key, r++))
                                      ? o(t)
                                      : e.continue())
                                  : o();
                              }),
                                (n.onerror = function () {
                                  a(n.error);
                                });
                            } catch (t) {
                              a(t);
                            }
                          });
                        })
                        .catch(a);
                    });
                  return executeCallback(e, t), e;
                },
                getItem: function getItem(a, t) {
                  var s = this,
                    e =
                      ((a = normalizeKey(a)),
                      new u(function (r, o) {
                        s.ready()
                          .then(function () {
                            createTransaction(s._dbInfo, n, function (t, e) {
                              if (t) return o(t);
                              try {
                                var n = e
                                  .objectStore(s._dbInfo.storeName)
                                  .get(a);
                                (n.onsuccess = function () {
                                  var t = n.result;
                                  _isEncodedBlob(
                                    (t = void 0 === t ? null : t)
                                  ) && (t = _decodeBlob(t)),
                                    r(t);
                                }),
                                  (n.onerror = function () {
                                    o(n.error);
                                  });
                              } catch (t) {
                                o(t);
                              }
                            });
                          })
                          .catch(o);
                      }));
                  return executeCallback(e, t), e;
                },
                setItem: function setItem(i, e, t) {
                  var c = this,
                    n =
                      ((i = normalizeKey(i)),
                      new u(function (a, s) {
                        var t;
                        c.ready()
                          .then(function () {
                            return (
                              (t = c._dbInfo),
                              '[object Blob]' === S.call(e)
                                ? _checkBlobSupport(t.db).then(function (t) {
                                    return t
                                      ? e
                                      : (function _encodeBlob(r) {
                                          return new u(function (e, t) {
                                            var n = new FileReader();
                                            (n.onerror = t),
                                              (n.onloadend = function (t) {
                                                t = btoa(t.target.result || '');
                                                e({
                                                  __local_forage_encoded_blob:
                                                    !0,
                                                  data: t,
                                                  type: r.type,
                                                });
                                              }),
                                              n.readAsBinaryString(r);
                                          });
                                        })(e);
                                  })
                                : e
                            );
                          })
                          .then(function (o) {
                            createTransaction(c._dbInfo, l, function (t, e) {
                              if (t) return s(t);
                              try {
                                var n = e.objectStore(c._dbInfo.storeName),
                                  r = (null === o && (o = void 0), n.put(o, i));
                                (e.oncomplete = function () {
                                  a((o = void 0 === o ? null : o));
                                }),
                                  (e.onabort = e.onerror =
                                    function () {
                                      var t = r.error || r.transaction.error;
                                      s(t);
                                    });
                              } catch (t) {
                                s(t);
                              }
                            });
                          })
                          .catch(s);
                      }));
                  return executeCallback(n, t), n;
                },
                removeItem: function removeItem(a, t) {
                  var s = this,
                    e =
                      ((a = normalizeKey(a)),
                      new u(function (r, o) {
                        s.ready()
                          .then(function () {
                            createTransaction(s._dbInfo, l, function (t, e) {
                              if (t) return o(t);
                              try {
                                var n = e
                                  .objectStore(s._dbInfo.storeName)
                                  .delete(a);
                                (e.oncomplete = function () {
                                  r();
                                }),
                                  (e.onerror = function () {
                                    o(n.error);
                                  }),
                                  (e.onabort = function () {
                                    var t = n.error || n.transaction.error;
                                    o(t);
                                  });
                              } catch (t) {
                                o(t);
                              }
                            });
                          })
                          .catch(o);
                      }));
                  return executeCallback(e, t), e;
                },
                clear: function clear(t) {
                  var a = this,
                    e = new u(function (r, o) {
                      a.ready()
                        .then(function () {
                          createTransaction(a._dbInfo, l, function (t, e) {
                            if (t) return o(t);
                            try {
                              var n = e
                                .objectStore(a._dbInfo.storeName)
                                .clear();
                              (e.oncomplete = function () {
                                r();
                              }),
                                (e.onabort = e.onerror =
                                  function () {
                                    var t = n.error || n.transaction.error;
                                    o(t);
                                  });
                            } catch (t) {
                              o(t);
                            }
                          });
                        })
                        .catch(o);
                    });
                  return executeCallback(e, t), e;
                },
                length: function length(t) {
                  var a = this,
                    e = new u(function (r, o) {
                      a.ready()
                        .then(function () {
                          createTransaction(a._dbInfo, n, function (t, e) {
                            if (t) return o(t);
                            try {
                              var n = e
                                .objectStore(a._dbInfo.storeName)
                                .count();
                              (n.onsuccess = function () {
                                r(n.result);
                              }),
                                (n.onerror = function () {
                                  o(n.error);
                                });
                            } catch (t) {
                              o(t);
                            }
                          });
                        })
                        .catch(o);
                    });
                  return executeCallback(e, t), e;
                },
                key: function key(i, t) {
                  var c = this,
                    e = new u(function (a, s) {
                      i < 0
                        ? a(null)
                        : c
                            .ready()
                            .then(function () {
                              createTransaction(c._dbInfo, n, function (t, e) {
                                if (t) return s(t);
                                try {
                                  var n = e.objectStore(c._dbInfo.storeName),
                                    r = !1,
                                    o = n.openKeyCursor();
                                  (o.onsuccess = function () {
                                    var t = o.result;
                                    t
                                      ? 0 === i || r
                                        ? a(t.key)
                                        : ((r = !0), t.advance(i))
                                      : a(null);
                                  }),
                                    (o.onerror = function () {
                                      s(o.error);
                                    });
                                } catch (t) {
                                  s(t);
                                }
                              });
                            })
                            .catch(s);
                    });
                  return executeCallback(e, t), e;
                },
                keys: function keys(t) {
                  var s = this,
                    e = new u(function (o, a) {
                      s.ready()
                        .then(function () {
                          createTransaction(s._dbInfo, n, function (t, e) {
                            if (t) return a(t);
                            try {
                              var n = e
                                  .objectStore(s._dbInfo.storeName)
                                  .openKeyCursor(),
                                r = [];
                              (n.onsuccess = function () {
                                var t = n.result;
                                t ? (r.push(t.key), t.continue()) : o(r);
                              }),
                                (n.onerror = function () {
                                  a(n.error);
                                });
                            } catch (t) {
                              a(t);
                            }
                          });
                        })
                        .catch(a);
                    });
                  return executeCallback(e, t), e;
                },
                dropInstance: function dropInstance(s, t) {
                  t = getCallback.apply(this, arguments);
                  var e = this.config();
                  return (
                    (s = ('function' != typeof s && s) || {}).name ||
                      ((s.name = s.name || e.name),
                      (s.storeName = s.storeName || e.storeName)),
                    executeCallback(
                      (e = s.name
                        ? ((e =
                            s.name === e.name && this._dbInfo.db
                              ? u.resolve(this._dbInfo.db)
                              : _getOriginalConnection(s).then(function (t) {
                                  var e = d[s.name],
                                    n = e.forages;
                                  e.db = t;
                                  for (var r = 0; r < n.length; r++)
                                    n[r]._dbInfo.db = t;
                                  return t;
                                })),
                          s.storeName
                            ? e.then(function (t) {
                                if (t.objectStoreNames.contains(s.storeName)) {
                                  var o = t.version + 1,
                                    r = (_deferReadiness(s), d[s.name]),
                                    a = r.forages;
                                  t.close();
                                  for (var e = 0; e < a.length; e++) {
                                    var n = a[e];
                                    (n._dbInfo.db = null),
                                      (n._dbInfo.version = o);
                                  }
                                  return new u(function (e, n) {
                                    var r = i.open(s.name, o);
                                    (r.onerror = function (t) {
                                      r.result.close(), n(t);
                                    }),
                                      (r.onupgradeneeded = function () {
                                        r.result.deleteObjectStore(s.storeName);
                                      }),
                                      (r.onsuccess = function () {
                                        var t = r.result;
                                        t.close(), e(t);
                                      });
                                  })
                                    .then(function (t) {
                                      r.db = t;
                                      for (var e = 0; e < a.length; e++) {
                                        var n = a[e];
                                        (n._dbInfo.db = t),
                                          _advanceReadiness(n._dbInfo);
                                      }
                                    })
                                    .catch(function (t) {
                                      throw (
                                        ((
                                          _rejectReadiness(s, t) || u.resolve()
                                        ).catch(function () {}),
                                        t)
                                      );
                                    });
                                }
                              })
                            : e.then(function (t) {
                                _deferReadiness(s);
                                var n = d[s.name],
                                  r = n.forages;
                                t.close();
                                for (var e = 0; e < r.length; e++)
                                  r[e]._dbInfo.db = null;
                                return new u(function (e, n) {
                                  var r = i.deleteDatabase(s.name);
                                  (r.onerror = function () {
                                    var t = r.result;
                                    t && t.close(), n(r.error);
                                  }),
                                    (r.onblocked = function () {
                                      console.warn(
                                        'dropInstance blocked for database "' +
                                          s.name +
                                          '" until all open connections are closed'
                                      );
                                    }),
                                    (r.onsuccess = function () {
                                      var t = r.result;
                                      t && t.close(), e(t);
                                    });
                                })
                                  .then(function (t) {
                                    n.db = t;
                                    for (var e = 0; e < r.length; e++)
                                      _advanceReadiness(r[e]._dbInfo);
                                  })
                                  .catch(function (t) {
                                    throw (
                                      ((
                                        _rejectReadiness(s, t) || u.resolve()
                                      ).catch(function () {}),
                                      t)
                                    );
                                  });
                              }))
                        : u.reject('Invalid arguments')),
                      t
                    ),
                    e
                  );
                },
              };
              var f =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                w = /^~~local_forage_type~([^~]+)~/,
                a = '__lfsc__:',
                c = a.length,
                p = 'arbf',
                h = 'blob',
                C = c + p.length,
                k = Object.prototype.toString;
              function stringToBuffer(t) {
                for (
                  var e,
                    n,
                    r,
                    o,
                    a = 0.75 * t.length,
                    s = t.length,
                    i = 0,
                    a =
                      ('=' === t[t.length - 1] &&
                        (a--, '=' === t[t.length - 2] && a--),
                      new ArrayBuffer(a)),
                    c = new Uint8Array(a),
                    d = 0;
                  d < s;
                  d += 4
                )
                  (e = f.indexOf(t[d])),
                    (n = f.indexOf(t[d + 1])),
                    (r = f.indexOf(t[d + 2])),
                    (o = f.indexOf(t[d + 3])),
                    (c[i++] = (e << 2) | (n >> 4)),
                    (c[i++] = ((15 & n) << 4) | (r >> 2)),
                    (c[i++] = ((3 & r) << 6) | (63 & o));
                return a;
              }
              function bufferToString(t) {
                for (
                  var e = new Uint8Array(t), n = '', r = 0;
                  r < e.length;
                  r += 3
                )
                  n =
                    (n =
                      (n =
                        (n += f[e[r] >> 2]) +
                        f[((3 & e[r]) << 4) | (e[r + 1] >> 4)]) +
                      f[((15 & e[r + 1]) << 2) | (e[r + 2] >> 6)]) +
                    f[63 & e[r + 2]];
                return (
                  e.length % 3 == 2
                    ? (n = n.substring(0, n.length - 1) + '=')
                    : e.length % 3 == 1 &&
                      (n = n.substring(0, n.length - 2) + '=='),
                  n
                );
              }
              var _ = {
                serialize: function serialize(e, n) {
                  var t = '';
                  if (
                    (e && (t = k.call(e)),
                    e &&
                      ('[object ArrayBuffer]' === t ||
                        (e.buffer &&
                          '[object ArrayBuffer]' === k.call(e.buffer))))
                  ) {
                    var r,
                      o = a;
                    e instanceof ArrayBuffer
                      ? ((r = e), (o += p))
                      : ((r = e.buffer),
                        '[object Int8Array]' === t
                          ? (o += 'si08')
                          : '[object Uint8Array]' === t
                          ? (o += 'ui08')
                          : '[object Uint8ClampedArray]' === t
                          ? (o += 'uic8')
                          : '[object Int16Array]' === t
                          ? (o += 'si16')
                          : '[object Uint16Array]' === t
                          ? (o += 'ur16')
                          : '[object Int32Array]' === t
                          ? (o += 'si32')
                          : '[object Uint32Array]' === t
                          ? (o += 'ui32')
                          : '[object Float32Array]' === t
                          ? (o += 'fl32')
                          : '[object Float64Array]' === t
                          ? (o += 'fl64')
                          : n(new Error('Failed to get type for BinaryArray'))),
                      n(o + bufferToString(r));
                  } else if ('[object Blob]' === t) {
                    o = new FileReader();
                    (o.onload = function () {
                      var t =
                        '~~local_forage_type~' +
                        e.type +
                        '~' +
                        bufferToString(this.result);
                      n(a + h + t);
                    }),
                      o.readAsArrayBuffer(e);
                  } else
                    try {
                      n(JSON.stringify(e));
                    } catch (t) {
                      console.error(
                        "Couldn't convert value into a JSON string: ",
                        e
                      ),
                        n(null, t);
                    }
                },
                deserialize: function deserialize(t) {
                  if (t.substring(0, c) !== a) return JSON.parse(t);
                  var e,
                    n = t.substring(C),
                    r = t.substring(c, C),
                    o =
                      (r === h &&
                        w.test(n) &&
                        ((e = (t = n.match(w))[1]),
                        (n = n.substring(t[0].length))),
                      stringToBuffer(n));
                  switch (r) {
                    case p:
                      return o;
                    case h:
                      return createBlob([o], { type: e });
                    case 'si08':
                      return new Int8Array(o);
                    case 'ui08':
                      return new Uint8Array(o);
                    case 'uic8':
                      return new Uint8ClampedArray(o);
                    case 'si16':
                      return new Int16Array(o);
                    case 'ur16':
                      return new Uint16Array(o);
                    case 'si32':
                      return new Int32Array(o);
                    case 'ui32':
                      return new Uint32Array(o);
                    case 'fl32':
                      return new Float32Array(o);
                    case 'fl64':
                      return new Float64Array(o);
                    default:
                      throw new Error('Unkown type: ' + r);
                  }
                },
                stringToBuffer: stringToBuffer,
                bufferToString: bufferToString,
              };
              function createDbTable(t, e, n, r) {
                t.executeSql(
                  'CREATE TABLE IF NOT EXISTS ' +
                    e.storeName +
                    ' (id INTEGER PRIMARY KEY, key unique, value)',
                  [],
                  n,
                  r
                );
              }
              function tryExecuteSql(t, r, o, a, s, i) {
                t.executeSql(
                  o,
                  a,
                  s,
                  function (t, n) {
                    n.code === n.SYNTAX_ERR
                      ? t.executeSql(
                          "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                          [r.storeName],
                          function (t, e) {
                            e.rows.length
                              ? i(t, n)
                              : createDbTable(
                                  t,
                                  r,
                                  function () {
                                    t.executeSql(o, a, s, i);
                                  },
                                  i
                                );
                          },
                          i
                        )
                      : i(t, n);
                  },
                  i
                );
              }
              function _setItem(s, t, i, c) {
                var d = this,
                  e =
                    ((s = normalizeKey(s)),
                    new u(function (o, a) {
                      d.ready()
                        .then(function () {
                          var n = (t = void 0 === t ? null : t),
                            r = d._dbInfo;
                          r.serializer.serialize(t, function (e, t) {
                            t
                              ? a(t)
                              : r.db.transaction(
                                  function (t) {
                                    tryExecuteSql(
                                      t,
                                      r,
                                      'INSERT OR REPLACE INTO ' +
                                        r.storeName +
                                        ' (key, value) VALUES (?, ?)',
                                      [s, e],
                                      function () {
                                        o(n);
                                      },
                                      function (t, e) {
                                        a(e);
                                      }
                                    );
                                  },
                                  function (t) {
                                    t.code === t.QUOTA_ERR &&
                                      (0 < c
                                        ? o(_setItem.apply(d, [s, n, i, c - 1]))
                                        : a(t));
                                  }
                                );
                          });
                        })
                        .catch(a);
                    }));
                return executeCallback(e, i), e;
              }
              var r = {
                _driver: 'webSQLStorage',
                _initStorage: function _initStorage$1(t) {
                  var r = this,
                    o = { db: null };
                  if (t)
                    for (var e in t)
                      o[e] = 'string' != typeof t[e] ? t[e].toString() : t[e];
                  var n = new u(function (e, n) {
                    try {
                      o.db = openDatabase(
                        o.name,
                        String(o.version),
                        o.description,
                        o.size
                      );
                    } catch (t) {
                      return n(t);
                    }
                    o.db.transaction(function (t) {
                      createDbTable(
                        t,
                        o,
                        function () {
                          (r._dbInfo = o), e();
                        },
                        function (t, e) {
                          n(e);
                        }
                      );
                    }, n);
                  });
                  return (o.serializer = _), n;
                },
                _support: (function isWebSQLValid() {
                  return 'function' == typeof openDatabase;
                })(),
                iterate: function iterate$1(d, t) {
                  var e = this,
                    n = new u(function (c, n) {
                      e.ready()
                        .then(function () {
                          var i = e._dbInfo;
                          i.db.transaction(function (t) {
                            tryExecuteSql(
                              t,
                              i,
                              'SELECT * FROM ' + i.storeName,
                              [],
                              function (t, e) {
                                for (
                                  var n = e.rows, r = n.length, o = 0;
                                  o < r;
                                  o++
                                ) {
                                  var a = n.item(o),
                                    s =
                                      (s = a.value) &&
                                      i.serializer.deserialize(s);
                                  if (void 0 !== (s = d(s, a.key, o + 1)))
                                    return void c(s);
                                }
                                c();
                              },
                              function (t, e) {
                                n(e);
                              }
                            );
                          });
                        })
                        .catch(n);
                    });
                  return executeCallback(n, t), n;
                },
                getItem: function getItem$1(e, t) {
                  var a = this,
                    n =
                      ((e = normalizeKey(e)),
                      new u(function (r, o) {
                        a.ready()
                          .then(function () {
                            var n = a._dbInfo;
                            n.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                n,
                                'SELECT * FROM ' +
                                  n.storeName +
                                  ' WHERE key = ? LIMIT 1',
                                [e],
                                function (t, e) {
                                  e =
                                    (e = e.rows.length
                                      ? e.rows.item(0).value
                                      : null) && n.serializer.deserialize(e);
                                  r(e);
                                },
                                function (t, e) {
                                  o(e);
                                }
                              );
                            });
                          })
                          .catch(o);
                      }));
                  return executeCallback(n, t), n;
                },
                setItem: function setItem$1(t, e, n) {
                  return _setItem.apply(this, [t, e, n, 1]);
                },
                removeItem: function removeItem$1(o, t) {
                  var a = this,
                    e =
                      ((o = normalizeKey(o)),
                      new u(function (n, r) {
                        a.ready()
                          .then(function () {
                            var e = a._dbInfo;
                            e.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                e,
                                'DELETE FROM ' + e.storeName + ' WHERE key = ?',
                                [o],
                                function () {
                                  n();
                                },
                                function (t, e) {
                                  r(e);
                                }
                              );
                            });
                          })
                          .catch(r);
                      }));
                  return executeCallback(e, t), e;
                },
                clear: function clear$1(t) {
                  var o = this,
                    e = new u(function (n, r) {
                      o.ready()
                        .then(function () {
                          var e = o._dbInfo;
                          e.db.transaction(function (t) {
                            tryExecuteSql(
                              t,
                              e,
                              'DELETE FROM ' + e.storeName,
                              [],
                              function () {
                                n();
                              },
                              function (t, e) {
                                r(e);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return executeCallback(e, t), e;
                },
                length: function length$1(t) {
                  var o = this,
                    e = new u(function (n, r) {
                      o.ready()
                        .then(function () {
                          var e = o._dbInfo;
                          e.db.transaction(function (t) {
                            tryExecuteSql(
                              t,
                              e,
                              'SELECT COUNT(key) as c FROM ' + e.storeName,
                              [],
                              function (t, e) {
                                e = e.rows.item(0).c;
                                n(e);
                              },
                              function (t, e) {
                                r(e);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return executeCallback(e, t), e;
                },
                key: function key$1(o, t) {
                  var a = this,
                    e = new u(function (n, r) {
                      a.ready()
                        .then(function () {
                          var e = a._dbInfo;
                          e.db.transaction(function (t) {
                            tryExecuteSql(
                              t,
                              e,
                              'SELECT key FROM ' +
                                e.storeName +
                                ' WHERE id = ? LIMIT 1',
                              [o + 1],
                              function (t, e) {
                                e = e.rows.length ? e.rows.item(0).key : null;
                                n(e);
                              },
                              function (t, e) {
                                r(e);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return executeCallback(e, t), e;
                },
                keys: function keys$1(t) {
                  var r = this,
                    e = new u(function (o, n) {
                      r.ready()
                        .then(function () {
                          var e = r._dbInfo;
                          e.db.transaction(function (t) {
                            tryExecuteSql(
                              t,
                              e,
                              'SELECT key FROM ' + e.storeName,
                              [],
                              function (t, e) {
                                for (var n = [], r = 0; r < e.rows.length; r++)
                                  n.push(e.rows.item(r).key);
                                o(n);
                              },
                              function (t, e) {
                                n(e);
                              }
                            );
                          });
                        })
                        .catch(n);
                    });
                  return executeCallback(e, t), e;
                },
                dropInstance: function dropInstance$1(n, t) {
                  t = getCallback.apply(this, arguments);
                  var r = this.config(),
                    o =
                      ((n = ('function' != typeof n && n) || {}).name ||
                        ((n.name = n.name || r.name),
                        (n.storeName = n.storeName || r.storeName)),
                      this),
                    e = n.name
                      ? new u(function (t) {
                          var e =
                            n.name === r.name
                              ? o._dbInfo.db
                              : openDatabase(n.name, '', '', 0);
                          n.storeName
                            ? t({ db: e, storeNames: [n.storeName] })
                            : t(
                                (function getAllStoreNames(a) {
                                  return new u(function (o, n) {
                                    a.transaction(
                                      function (t) {
                                        t.executeSql(
                                          "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                          [],
                                          function (t, e) {
                                            for (
                                              var n = [], r = 0;
                                              r < e.rows.length;
                                              r++
                                            )
                                              n.push(e.rows.item(r).name);
                                            o({ db: a, storeNames: n });
                                          },
                                          function (t, e) {
                                            n(e);
                                          }
                                        );
                                      },
                                      function (t) {
                                        n(t);
                                      }
                                    );
                                  });
                                })(e)
                              );
                        }).then(function (s) {
                          return new u(function (o, a) {
                            s.db.transaction(
                              function (r) {
                                for (
                                  var t = [], e = 0, n = s.storeNames.length;
                                  e < n;
                                  e++
                                )
                                  t.push(
                                    (function dropTable(e) {
                                      return new u(function (t, n) {
                                        r.executeSql(
                                          'DROP TABLE IF EXISTS ' + e,
                                          [],
                                          function () {
                                            t();
                                          },
                                          function (t, e) {
                                            n(e);
                                          }
                                        );
                                      });
                                    })(s.storeNames[e])
                                  );
                                u.all(t)
                                  .then(function () {
                                    o();
                                  })
                                  .catch(function (t) {
                                    a(t);
                                  });
                              },
                              function (t) {
                                a(t);
                              }
                            );
                          });
                        })
                      : u.reject('Invalid arguments');
                  return executeCallback(e, t), e;
                },
              };
              function _getKeyPrefix(t, e) {
                var n = t.name + '/';
                return (
                  t.storeName !== e.storeName && (n += t.storeName + '/'), n
                );
              }
              function _isLocalStorageUsable() {
                return (
                  !(function checkIfLocalStorageThrows() {
                    var t = '_localforage_support_test';
                    try {
                      return (
                        localStorage.setItem(t, !0),
                        localStorage.removeItem(t),
                        0
                      );
                    } catch (t) {
                      return 1;
                    }
                  })() || 0 < localStorage.length
                );
              }
              function Y8(t, e) {
                return (
                  t === e ||
                  ('number' == typeof t &&
                    'number' == typeof e &&
                    isNaN(t) &&
                    isNaN(e))
                );
              }
              function Z8(t, e) {
                for (var n = t.length, r = 0; r < n; ) {
                  if (Y8(t[r], e)) return !0;
                  r++;
                }
                return !1;
              }
              var j = {
                  _driver: 'localStorageWrapper',
                  _initStorage: function _initStorage$2(t) {
                    var e = {};
                    if (t) for (var n in t) e[n] = t[n];
                    return (
                      (e.keyPrefix = _getKeyPrefix(t, this._defaultConfig)),
                      _isLocalStorageUsable()
                        ? (((this._dbInfo = e).serializer = _), u.resolve())
                        : u.reject()
                    );
                  },
                  _support: (function isLocalStorageValid() {
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
                  iterate: function iterate$2(c, t) {
                    var d = this,
                      e = d.ready().then(function () {
                        for (
                          var t = d._dbInfo,
                            e = t.keyPrefix,
                            n = e.length,
                            r = localStorage.length,
                            o = 1,
                            a = 0;
                          a < r;
                          a++
                        ) {
                          var s = localStorage.key(a);
                          if (0 === s.indexOf(e)) {
                            var i =
                              (i = localStorage.getItem(s)) &&
                              t.serializer.deserialize(i);
                            if (void 0 !== (i = c(i, s.substring(n), o++)))
                              return i;
                          }
                        }
                      });
                    return executeCallback(e, t), e;
                  },
                  getItem: function getItem$2(n, t) {
                    var r = this,
                      e =
                        ((n = normalizeKey(n)),
                        r.ready().then(function () {
                          var t = r._dbInfo,
                            e = localStorage.getItem(t.keyPrefix + n);
                          return (e = e && t.serializer.deserialize(e));
                        }));
                    return executeCallback(e, t), e;
                  },
                  setItem: function setItem$2(s, t, e) {
                    var i = this,
                      n =
                        ((s = normalizeKey(s)),
                        i.ready().then(function () {
                          var a = (t = void 0 === t ? null : t);
                          return new u(function (n, r) {
                            var o = i._dbInfo;
                            o.serializer.serialize(t, function (t, e) {
                              if (e) r(e);
                              else
                                try {
                                  localStorage.setItem(o.keyPrefix + s, t),
                                    n(a);
                                } catch (t) {
                                  ('QuotaExceededError' !== t.name &&
                                    'NS_ERROR_DOM_QUOTA_REACHED' !== t.name) ||
                                    r(t),
                                    r(t);
                                }
                            });
                          });
                        }));
                    return executeCallback(n, e), n;
                  },
                  removeItem: function removeItem$2(e, t) {
                    var n = this,
                      r =
                        ((e = normalizeKey(e)),
                        n.ready().then(function () {
                          var t = n._dbInfo;
                          localStorage.removeItem(t.keyPrefix + e);
                        }));
                    return executeCallback(r, t), r;
                  },
                  clear: function clear$2(t) {
                    var r = this,
                      e = r.ready().then(function () {
                        for (
                          var t = r._dbInfo.keyPrefix,
                            e = localStorage.length - 1;
                          0 <= e;
                          e--
                        ) {
                          var n = localStorage.key(e);
                          0 === n.indexOf(t) && localStorage.removeItem(n);
                        }
                      });
                    return executeCallback(e, t), e;
                  },
                  length: function length$2(t) {
                    var e = this.keys().then(function (t) {
                      return t.length;
                    });
                    return executeCallback(e, t), e;
                  },
                  key: function key$2(n, t) {
                    var r = this,
                      e = r.ready().then(function () {
                        var e,
                          t = r._dbInfo;
                        try {
                          e = localStorage.key(n);
                        } catch (t) {
                          e = null;
                        }
                        return (e = e && e.substring(t.keyPrefix.length));
                      });
                    return executeCallback(e, t), e;
                  },
                  keys: function keys$2(t) {
                    var a = this,
                      e = a.ready().then(function () {
                        for (
                          var t = a._dbInfo,
                            e = localStorage.length,
                            n = [],
                            r = 0;
                          r < e;
                          r++
                        ) {
                          var o = localStorage.key(r);
                          0 === o.indexOf(t.keyPrefix) &&
                            n.push(o.substring(t.keyPrefix.length));
                        }
                        return n;
                      });
                    return executeCallback(e, t), e;
                  },
                  dropInstance: function dropInstance$2(e, t) {
                    (t = getCallback.apply(this, arguments)),
                      (e = ('function' != typeof e && e) || {}).name ||
                        ((r = this.config()),
                        (e.name = e.name || r.name),
                        (e.storeName = e.storeName || r.storeName));
                    var n = this,
                      r = e.name
                        ? new u(function (t) {
                            e.storeName
                              ? t(_getKeyPrefix(e, n._defaultConfig))
                              : t(e.name + '/');
                          }).then(function (t) {
                            for (var e = localStorage.length - 1; 0 <= e; e--) {
                              var n = localStorage.key(e);
                              0 === n.indexOf(t) && localStorage.removeItem(n);
                            }
                          })
                        : u.reject('Invalid arguments');
                    return executeCallback(r, t), r;
                  },
                },
                A =
                  Array.isArray ||
                  function (t) {
                    return (
                      '[object Array]' === Object.prototype.toString.call(t)
                    );
                  },
                y = {},
                B = {},
                o = { INDEXEDDB: t, WEBSQL: r, LOCALSTORAGE: j },
                t = [
                  o.INDEXEDDB._driver,
                  o.WEBSQL._driver,
                  o.LOCALSTORAGE._driver,
                ],
                m = ['dropInstance'],
                v = [
                  'clear',
                  'getItem',
                  'iterate',
                  'key',
                  'keys',
                  'length',
                  'removeItem',
                  'setItem',
                ].concat(m),
                E = {
                  description: '',
                  driver: t.slice(),
                  name: 'localforage',
                  size: 4980736,
                  storeName: 'keyvaluepairs',
                  version: 1,
                };
              function extend(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  if (n)
                    for (var r in n)
                      n.hasOwnProperty(r) &&
                        (A(n[r]) ? (t[r] = n[r].slice()) : (t[r] = n[r]));
                }
                return t;
              }
              function LocalForage(t) {
                for (var e in (!(function _classCallCheck(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError('Cannot call a class as a function');
                })(this, LocalForage),
                o)) {
                  var n, r;
                  o.hasOwnProperty(e) &&
                    ((r = (n = o[e])._driver),
                    (this[e] = r),
                    y[r] || this.defineDriver(n));
                }
                (this._defaultConfig = extend({}, E)),
                  (this._config = extend({}, this._defaultConfig, t)),
                  (this._driverSet = null),
                  (this._initDriver = null),
                  (this._ready = !1),
                  (this._dbInfo = null),
                  this._wrapLibraryMethodsWithReady(),
                  this.setDriver(this._config.driver).catch(function () {});
              }
              (LocalForage.prototype.config = function config(t) {
                if ('object' !== (void 0 === t ? 'undefined' : g(t)))
                  return 'string' == typeof t ? this._config[t] : this._config;
                if (this._ready)
                  return new Error(
                    "Can't call config() after localforage has been used."
                  );
                for (var e in t) {
                  if (
                    ('storeName' === e && (t[e] = t[e].replace(/\W/g, '_')),
                    'version' === e && 'number' != typeof t[e])
                  )
                    return new Error('Database version must be a number.');
                  this._config[e] = t[e];
                }
                return (
                  !('driver' in t && t.driver) ||
                  this.setDriver(this._config.driver)
                );
              }),
                (LocalForage.prototype.defineDriver = function defineDriver(
                  d,
                  t,
                  e
                ) {
                  var n = new u(function (e, n) {
                    try {
                      var r = d._driver,
                        t = new Error(
                          'Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'
                        );
                      if (!d._driver) return void n(t);
                      for (
                        var o = v.concat('_initStorage'), a = 0, s = o.length;
                        a < s;
                        a++
                      ) {
                        var i = o[a];
                        if ((!Z8(m, i) || d[i]) && 'function' != typeof d[i])
                          return void n(t);
                      }
                      (function configureMissingMethods() {
                        for (
                          var t = function methodNotImplementedFactory(e) {
                              return function () {
                                var t = new Error(
                                    'Method ' +
                                      e +
                                      ' is not implemented by the current driver'
                                  ),
                                  t = u.reject(t);
                                return (
                                  executeCallback(
                                    t,
                                    arguments[arguments.length - 1]
                                  ),
                                  t
                                );
                              };
                            },
                            e = 0,
                            n = m.length;
                          e < n;
                          e++
                        ) {
                          var r = m[e];
                          d[r] || (d[r] = t(r));
                        }
                      })();
                      var c = function setDriverSupport(t) {
                        y[r] &&
                          console.info('Redefining LocalForage driver: ' + r),
                          (y[r] = d),
                          (B[r] = t),
                          e();
                      };
                      '_support' in d
                        ? d._support && 'function' == typeof d._support
                          ? d._support().then(c, n)
                          : c(!!d._support)
                        : c(!0);
                    } catch (t) {
                      n(t);
                    }
                  });
                  return executeTwoCallbacks(n, t, e), n;
                }),
                (LocalForage.prototype.driver = function driver() {
                  return this._driver || null;
                }),
                (LocalForage.prototype.getDriver = function getDriver(t, e, n) {
                  t = y[t]
                    ? u.resolve(y[t])
                    : u.reject(new Error('Driver not found.'));
                  return executeTwoCallbacks(t, e, n), t;
                }),
                (LocalForage.prototype.getSerializer = function getSerializer(
                  t
                ) {
                  var e = u.resolve(_);
                  return executeTwoCallbacks(e, t), e;
                }),
                (LocalForage.prototype.ready = function ready(t) {
                  var e = this,
                    n = e._driverSet.then(function () {
                      return (
                        null === e._ready && (e._ready = e._initDriver()),
                        e._ready
                      );
                    });
                  return executeTwoCallbacks(n, t, t), n;
                }),
                (LocalForage.prototype.setDriver = function setDriver(t, e, n) {
                  var o = this,
                    r = (A(t) || (t = [t]), this._getSupportedDrivers(t));
                  function setDriverToConfig() {
                    o._config.driver = o.driver();
                  }
                  function extendSelfWithDriver(t) {
                    return (
                      o._extend(t),
                      setDriverToConfig(),
                      (o._ready = o._initStorage(o._config)),
                      o._ready
                    );
                  }
                  function initDriver(r) {
                    return function () {
                      var n = 0;
                      return (function driverPromiseLoop() {
                        for (; n < r.length; ) {
                          var t = r[n];
                          return (
                            n++,
                            (o._dbInfo = null),
                            (o._ready = null),
                            o
                              .getDriver(t)
                              .then(extendSelfWithDriver)
                              .catch(driverPromiseLoop)
                          );
                        }
                        setDriverToConfig();
                        var e = new Error('No available storage method found.');
                        return (o._driverSet = u.reject(e)), o._driverSet;
                      })();
                    };
                  }
                  t =
                    null !== this._driverSet
                      ? this._driverSet.catch(function () {
                          return u.resolve();
                        })
                      : u.resolve();
                  return (
                    (this._driverSet = t
                      .then(function () {
                        var t = r[0];
                        return (
                          (o._dbInfo = null),
                          (o._ready = null),
                          o.getDriver(t).then(function (t) {
                            (o._driver = t._driver),
                              setDriverToConfig(),
                              o._wrapLibraryMethodsWithReady(),
                              (o._initDriver = initDriver(r));
                          })
                        );
                      })
                      .catch(function () {
                        setDriverToConfig();
                        var t = new Error('No available storage method found.');
                        return (o._driverSet = u.reject(t)), o._driverSet;
                      })),
                    executeTwoCallbacks(this._driverSet, e, n),
                    this._driverSet
                  );
                }),
                (LocalForage.prototype.supports = function supports(t) {
                  return !!B[t];
                }),
                (LocalForage.prototype._extend = function _extend(t) {
                  extend(this, t);
                }),
                (LocalForage.prototype._getSupportedDrivers =
                  function _getSupportedDrivers(t) {
                    for (var e = [], n = 0, r = t.length; n < r; n++) {
                      var o = t[n];
                      this.supports(o) && e.push(o);
                    }
                    return e;
                  }),
                (LocalForage.prototype._wrapLibraryMethodsWithReady =
                  function _wrapLibraryMethodsWithReady() {
                    for (var t = 0, e = v.length; t < e; t++)
                      !(function callWhenReady(e, n) {
                        e[n] = function () {
                          var t = arguments;
                          return e.ready().then(function () {
                            return e[n].apply(e, t);
                          });
                        };
                      })(this, v[t]);
                  }),
                (LocalForage.prototype.createInstance = function createInstance(
                  t
                ) {
                  return new LocalForage(t);
                });
              r = new LocalForage();
              x.exports = r;
            },
            { 3: 3 },
          ],
        },
        {},
        [4]
      )(4);
    },
    './node_modules/lodash.isempty/index.js': function (t, D, e) {
      !function (t) {
        var e = 9007199254740991,
          n = '[object Arguments]',
          r = '[object Function]',
          o = '[object GeneratorFunction]',
          a = '[object Map]',
          s = '[object Promise]',
          i = '[object Set]',
          c = '[object WeakMap]',
          d = '[object DataView]',
          u = /^\[object .+?Constructor\]$/,
          l =
            'object' == typeof global &&
            global &&
            global.Object === Object &&
            global,
          f = 'object' == typeof self && self && self.Object === Object && self,
          l = l || f || Function('return this')(),
          f = D && !D.nodeType && D,
          p = f && 'object' == typeof t && t && !t.nodeType && t,
          p = p && p.exports === f;
        var f = Function.prototype,
          h = Object.prototype,
          _ = l['__core-js_shared__'],
          y = (_ = /[^.]+$/.exec((_ && _.keys && _.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + _
            : '',
          m = f.toString,
          v = h.hasOwnProperty,
          x = h.toString,
          b = RegExp(
            '^' +
              m
                .call(v)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          _ = p ? l.Buffer : void 0,
          g = h.propertyIsEnumerable,
          f = _ ? _.isBuffer : void 0,
          S = (function overArg(e, n) {
            return function (t) {
              return e(n(t));
            };
          })(Object.keys, Object),
          p = getNative(l, 'DataView'),
          _ = getNative(l, 'Map'),
          w = getNative(l, 'Promise'),
          C = getNative(l, 'Set'),
          l = getNative(l, 'WeakMap'),
          k = !g.call({ valueOf: 1 }, 'valueOf'),
          j = toSource(p),
          A = toSource(_),
          B = toSource(w),
          E = toSource(C),
          O = toSource(l);
        function baseIsNative(t) {
          if (
            isObject(t) &&
            !(function isMasked(t) {
              return y && y in t;
            })(t)
          )
            return (
              isFunction(t) ||
              (function isHostObject(t) {
                var e = !1;
                if (null != t && 'function' != typeof t.toString)
                  try {
                    e = !!(t + '');
                  } catch (t) {}
                return e;
              })(t)
                ? b
                : u
            ).test(toSource(t));
        }
        function getNative(t, e) {
          t = (function getValue(t, e) {
            return null == t ? void 0 : t[e];
          })(t, e);
          return baseIsNative(t) ? t : void 0;
        }
        var T = function baseGetTag(t) {
          return x.call(t);
        };
        function toSource(t) {
          if (null != t) {
            try {
              return m.call(t);
            } catch (t) {}
            try {
              return t + '';
            } catch (t) {}
          }
          return '';
        }
        function isArguments(t) {
          return (
            (function isArrayLikeObject(t) {
              return (
                (function isObjectLike(t) {
                  return t && 'object' == typeof t;
                })(t) && isArrayLike(t)
              );
            })(t) &&
            v.call(t, 'callee') &&
            (!g.call(t, 'callee') || x.call(t) == n)
          );
        }
        ((p && T(new p(new ArrayBuffer(1))) != d) ||
          (_ && T(new _()) != a) ||
          (w && T(w.resolve()) != s) ||
          (C && T(new C()) != i) ||
          (l && T(new l()) != c)) &&
          (T = function (t) {
            var e = x.call(t),
              t = '[object Object]' == e ? t.constructor : void 0,
              t = t ? toSource(t) : void 0;
            if (t)
              switch (t) {
                case j:
                  return d;
                case A:
                  return a;
                case B:
                  return s;
                case E:
                  return i;
                case O:
                  return c;
              }
            return e;
          });
        var I = Array.isArray;
        function isArrayLike(t) {
          return (
            null != t &&
            (function isLength(t) {
              return 'number' == typeof t && -1 < t && t % 1 == 0 && t <= e;
            })(t.length) &&
            !isFunction(t)
          );
        }
        var P =
          f ||
          function stubFalse() {
            return !1;
          };
        function isFunction(t) {
          t = isObject(t) ? x.call(t) : '';
          return t == r || t == o;
        }
        function isObject(t) {
          var e = typeof t;
          return t && ('object' == e || 'function' == e);
        }
        t.exports = function isEmpty(t) {
          if (
            isArrayLike(t) &&
            (I(t) ||
              'string' == typeof t ||
              'function' == typeof t.splice ||
              P(t) ||
              isArguments(t))
          )
            return !t.length;
          var e,
            n = T(t);
          if (n == a || n == i) return !t.size;
          if (
            k ||
            (function isPrototype(t) {
              var e = t && t.constructor;
              return t === (('function' == typeof e && e.prototype) || h);
            })(t)
          )
            return !S(t).length;
          for (e in t) if (v.call(t, e)) return !1;
          return !0;
        };
      }.call(this, e('./node_modules/webpack/buildin/module.js')(t));
    },
    './node_modules/lodash.isfunction/index.js': function (t, e) {
      var n = '[object Null]',
        r = '[object Undefined]',
        o =
          'object' == typeof global &&
          global &&
          global.Object === Object &&
          global,
        a = 'object' == typeof self && self && self.Object === Object && self,
        o = o || a || Function('return this')(),
        a = Object.prototype,
        s = a.hasOwnProperty,
        i = a.toString,
        a = o.Symbol,
        c = a ? a.toStringTag : void 0;
      function baseGetTag(t) {
        return null == t
          ? void 0 === t
            ? r
            : n
          : (c && c in Object(t)
              ? function getRawTag(t) {
                  var e = s.call(t, c),
                    n = t[c];
                  try {
                    var r = !(t[c] = void 0);
                  } catch (t) {}
                  var o = i.call(t);
                  r && (e ? (t[c] = n) : delete t[c]);
                  return o;
                }
              : function objectToString(t) {
                  return i.call(t);
                })(t);
      }
      t.exports = function isFunction(t) {
        return (
          !!(function isObject(t) {
            var e = typeof t;
            return null != t && ('object' == e || 'function' == e);
          })(t) &&
          ('[object Function]' == (t = baseGetTag(t)) ||
            '[object GeneratorFunction]' == t ||
            '[object AsyncFunction]' == t ||
            '[object Proxy]' == t)
        );
      };
    },
    './node_modules/lodash.isobject/index.js': function (t, e) {
      t.exports = function isObject(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e);
      };
    },
    './node_modules/node-fetch/browser.js': function (t, e, n) {
      'use strict';
      var r = (function () {
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        if (void 0 !== r) return r;
        throw new Error('unable to locate global object');
      })();
      (t.exports = e = r.fetch),
        r.fetch && (e.default = r.fetch.bind(r)),
        (e.Headers = r.Headers),
        (e.Request = r.Request),
        (e.Response = r.Response);
    },
    './node_modules/uuid/lib/bytesToUuid.js': function (t, e) {
      for (var r = [], n = 0; n < 256; ++n)
        r[n] = (n + 256).toString(16).substr(1);
      t.exports = function bytesToUuid(t, e) {
        var e = e || 0,
          n = r;
        return [
          n[t[e++]],
          n[t[e++]],
          n[t[e++]],
          n[t[e++]],
          '-',
          n[t[e++]],
          n[t[e++]],
          '-',
          n[t[e++]],
          n[t[e++]],
          '-',
          n[t[e++]],
          n[t[e++]],
          '-',
          n[t[e++]],
          n[t[e++]],
          n[t[e++]],
          n[t[e++]],
          n[t[e++]],
          n[t[+e]],
        ].join('');
      };
    },
    './node_modules/uuid/lib/rng-browser.js': function (t, e) {
      var n,
        r,
        o =
          ('undefined' != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ('undefined' != typeof msCrypto &&
            'function' == typeof window.msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto));
      o
        ? ((n = new Uint8Array(16)),
          (t.exports = function whatwgRNG() {
            return o(n), n;
          }))
        : ((r = new Array(16)),
          (t.exports = function mathRNG() {
            for (var t, e = 0; e < 16; e++)
              0 == (3 & e) && (t = 4294967296 * Math.random()),
                (r[e] = (t >>> ((3 & e) << 3)) & 255);
            return r;
          }));
    },
    './node_modules/uuid/v4.js': function (t, e, n) {
      var s = n('./node_modules/uuid/lib/rng-browser.js'),
        i = n('./node_modules/uuid/lib/bytesToUuid.js');
      t.exports = function v4(t, e, n) {
        var r = (e && n) || 0,
          o =
            ('string' == typeof t &&
              ((e = 'binary' === t ? new Array(16) : null), (t = null)),
            (t = t || {}).random || (t.rng || s)());
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e))
          for (var a = 0; a < 16; ++a) e[r + a] = o[a];
        return e || i(o);
      };
    },
    './node_modules/webpack/buildin/module.js': function (t, e) {
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
    './src/chatbot.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n('./src/constants.js'),
        r = n('./src/helpers/rest-api/get-modules.js'),
        a = n('./src/helpers/rest-api/get-module.js'),
        s = n('./src/helpers/rest-api/get-chatbot-user.js'),
        i = n('./src/helpers/rest-api/send-logout.js'),
        c = n('./src/helpers/is-hex.js'),
        d = n('./src/helpers/signature.js'),
        u = n('./src/i18n/en_EN.js'),
        l = n(
          './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
        ),
        f = n('./node_modules/BlueDarwinJS/src/services/configuration.js'),
        p = n('./node_modules/BlueDarwinJS/src/services/translate.js'),
        h = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        _ = n('./node_modules/BlueDarwinJS/src/services/encryption.js'),
        y = n('./node_modules/BlueDarwinJS/src/services/auth.js'),
        m = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        v = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        x = n('./node_modules/BlueDarwinJS/src/services/response.js');
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var b = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + b++ + '_' + t;
      }
      var g = _classPrivateFieldLooseKey('config'),
        S = _classPrivateFieldLooseKey('tmpLoginParams'),
        w = _classPrivateFieldLooseKey('parseDisplayColors'),
        C = _classPrivateFieldLooseKey('parseDisplay'),
        k = _classPrivateFieldLooseKey('parseTheme'),
        n = (function () {
          function Chatbot() {
            !(function _classCallCheck(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, Chatbot),
              Object.defineProperty(this, k, { value: _parseTheme2 }),
              Object.defineProperty(this, C, { value: _parseDisplay2 }),
              Object.defineProperty(this, w, { value: _parseDisplayColors2 }),
              Object.defineProperty(this, g, { writable: !0, value: null }),
              Object.defineProperty(this, S, { writable: !0, value: [] }),
              (this.module = void 0),
              (this.chatbotUser = void 0),
              (this.display = void 0),
              Object(d.default)('BlueDarwin Chatbot JS', o.default.INFO);
            var t = Array.prototype.slice.call(arguments),
              e = t[2] || {},
              t = t.slice(0, 2),
              n = e.display || {},
              r = e.theme;
            (this.config = new f.default(e)),
              Object(l.default)(
                [
                  _.default,
                  h.default,
                  y.default,
                  p.default,
                  m.default,
                  v.default,
                  x.default,
                ],
                this
              ),
              this.Translate.setLanguage(u.default),
              (_classPrivateFieldLooseBase(this, S)[S] = t),
              (this.chatbotUser = e.chatbotUser),
              this.State.set(
                o.default.STATES.HAS_CLIENT_USER_ID,
                this.chatbotUser
              ),
              this.State.set(
                o.default.STATES.ENVIRONMENT,
                this.config.environment
              ),
              _classPrivateFieldLooseBase(this, k)[k](r, n);
          }
          var t;
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(Chatbot, [
              {
                key: 'config',
                get: function get() {
                  return _classPrivateFieldLooseBase(this, g)[g];
                },
                set: function set(t) {
                  null === _classPrivateFieldLooseBase(this, g)[g] &&
                    (_classPrivateFieldLooseBase(this, g)[g] = t);
                },
              },
              {
                key: 'getModules',
                value: function getModules() {
                  return Object(r.default)(this.Http);
                },
              },
              {
                key: 'getModule',
                value: function getModule(t) {
                  return Object(a.default)(t, this.Http);
                },
              },
              {
                key: 'getChatbotUser',
                value: function getChatbotUser(t) {
                  return Object(s.default)(t, this.Http);
                },
              },
              {
                key: 'createChatbotUser',
                value: function createChatbotUser(t) {},
              },
              {
                key: 'setup',
                value: function setup() {
                  return this.login();
                },
              },
              {
                key: 'login',
                value: function login(t, e) {
                  var r = this;
                  return (
                    t &&
                      e &&
                      (_classPrivateFieldLooseBase(this, S)[S] = [t, e]),
                    new Promise(function (e, n) {
                      r.Auth.loginChatbot(
                        _classPrivateFieldLooseBase(r, S)[S],
                        r.State,
                        r.Http,
                        r.Encryption,
                        r.PubSub,
                        r.Response,
                        r.Storage
                      )
                        .then(function (t) {
                          r.State.set(
                            o.default.STATES.HAS_MODULE,
                            t.data.module
                          );
                          try {
                            r.State.set(
                              o.default.STATES.HAS_CLIENT_USER_ID,
                              t.data.user.id
                            );
                          } catch (t) {
                            console.warn(t),
                              r.State.set(
                                o.default.STATES.HAS_CLIENT_USER_ID,
                                void 0
                              );
                          }
                          (_classPrivateFieldLooseBase(r, S)[S] = {}), e(t);
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
                  ((t = (function _asyncToGenerator(a) {
                    return function () {
                      var t = this,
                        o = arguments;
                      return new Promise(function (e, n) {
                        var r = a.apply(t, o);
                        function _next(t) {
                          asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
                        }
                        function _throw(t) {
                          asyncGeneratorStep(
                            r,
                            e,
                            n,
                            _next,
                            _throw,
                            'throw',
                            t
                          );
                        }
                        _next(void 0);
                      });
                    };
                  })(
                    regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(
                        function _callee$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), Object(i.default)();
                              case 2:
                                this.PubSub.emit('LOGOUT');
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee,
                        this
                      );
                    })
                  )),
                  function closeSession() {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            Chatbot
          );
        })();
      function _parseDisplayColors2() {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          n = o.default.DISPLAY;
        return (
          Object.keys(e).forEach(function (t) {
            'headerLetters' === t &&
              -1 < o.default.DISPLAY_HEADER_LETTERS.indexOf(e[t]) &&
              (n[t] = e[t]),
              Object(c.default)(e[t]) && (n[t] = e[t]);
          }),
          n
        );
      }
      function _parseDisplay2() {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          (t.colors = _classPrivateFieldLooseBase(this, w)[w](t.colors)), t
        );
      }
      function _parseTheme2(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = {},
          n =
            -1 < Object.keys(o.default.THEME).indexOf(t)
              ? o.default.THEME[t]
              : _classPrivateFieldLooseBase(this, C)[C](e);
        this.State.set(o.default.STATES.APPLICATION_DISPLAY, n),
          this.State.set(o.default.STATES.APPLICATION_THEME, t);
      }
      e.default = n;
    },
    './src/components/cb-module.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./src/components/cb-user.js'),
        o =
          (n('./src/components/session.js'),
          n('./src/helpers/rest-api/get-session.js')),
        a = n('./src/helpers/rest-api/create-session.js'),
        s = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        i = n(
          './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
        );
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var c = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + c++ + '_' + t;
      }
      var d = _classPrivateFieldLooseKey('meta'),
        u = _classPrivateFieldLooseKey('channelTokens'),
        n = (function () {
          function CbModule(t) {
            !(function _classCallCheck(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, CbModule),
              Object.defineProperty(this, d, {
                writable: !0,
                value: { label: !1, id: !1, channels: [], user: {}, bot: {} },
              }),
              Object.defineProperty(this, u, { writable: !0, value: [] }),
              (t = t.attributes || t),
              (_classPrivateFieldLooseBase(this, d)[d] = t),
              (_classPrivateFieldLooseBase(this, d)[d].label = t.label),
              (_classPrivateFieldLooseBase(this, d)[d].id = t.id),
              (_classPrivateFieldLooseBase(this, u)[u] = t.am_channel_tokens),
              (this.intents = []),
              Object(i.default)([s.default], this);
          }
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(CbModule, [
              {
                key: 'getIntents',
                value: function getIntents() {
                  return this.intents;
                },
              },
              {
                key: 'getSession',
                value: function getSession(t) {
                  return Object(o.default)(t, this.Http);
                },
              },
              {
                key: 'getChannels',
                value: function getChannels() {
                  return _classPrivateFieldLooseBase(this, d)[d].channels;
                },
              },
              {
                key: 'getLabel',
                value: function getLabel() {
                  return _classPrivateFieldLooseBase(this, d)[d].label;
                },
              },
              {
                key: 'getId',
                value: function getId() {
                  return _classPrivateFieldLooseBase(this, d)[d].id;
                },
              },
              {
                key: 'getMeta',
                value: function getMeta() {
                  return _classPrivateFieldLooseBase(this, d)[d];
                },
              },
              {
                key: 'createSession',
                value: function createSession(t) {
                  return Object(a.default)(t);
                },
              },
              { key: 'setMetaChannels', value: function setMetaChannels() {} },
              {
                key: 'setMetaUser',
                value: function setMetaUser(t) {
                  _classPrivateFieldLooseBase(this, d)[d].user = new r.default(
                    t
                  );
                },
              },
            ]),
            CbModule
          );
        })();
      e.default = n;
    },
    './src/components/cb-user.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./src/models/chatbot-user.js'),
        o = n('./src/helpers/rest-api/set-chatbot-user-name.js'),
        a = n('./src/helpers/rest-api/set-chatbot-user-avatar.js'),
        s = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        i = n(
          './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
        );
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _asyncToGenerator(a) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (e, n) {
            var r = a.apply(t, o);
            function _next(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
            }
            function _throw(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'throw', t);
            }
            _next(void 0);
          });
        };
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var c = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + c++ + '_' + t;
      }
      var d = Object(r.default)(),
        u = ((d.id = !1), _classPrivateFieldLooseKey('meta')),
        n = (function () {
          function CbUser(t) {
            !(function _classCallCheck(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, CbUser),
              Object.defineProperty(this, u, { writable: !0, value: d }),
              (_classPrivateFieldLooseBase(this, u)[u] = t),
              Object(i.default)([s.default], this);
          }
          var e, n;
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(CbUser, [
              {
                key: 'id',
                get: function get() {
                  return _classPrivateFieldLooseBase(this, u)[u].id;
                },
              },
              {
                key: 'name',
                get: function get() {
                  return _classPrivateFieldLooseBase(this, u)[u].user_settings
                    .username;
                },
              },
              {
                key: 'avatar',
                get: function get() {
                  return _classPrivateFieldLooseBase(this, u)[u].user_settings
                    .avatar;
                },
              },
              {
                key: 'setName',
                value:
                  ((n = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee(e) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function _callee$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = _classPrivateFieldLooseBase(this, u)[u]
                                    .user_settings.username),
                                  (t.prev = 1),
                                  (_classPrivateFieldLooseBase(this, u)[
                                    u
                                  ].user_settings.username = e),
                                  (t.next = 5),
                                  Object(o.default)(
                                    _classPrivateFieldLooseBase(this, u)[u].id,
                                    e,
                                    this.Http
                                  )
                                );
                              case 5:
                                return t.abrupt('return', Promise.resolve(e));
                              case 8:
                                return (
                                  (t.prev = 8),
                                  (t.t0 = t.catch(1)),
                                  (_classPrivateFieldLooseBase(this, u)[
                                    u
                                  ].user_settings.username = n),
                                  t.abrupt('return', Promise.reject(n))
                                );
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee,
                        this,
                        [[1, 8]]
                      );
                    })
                  )),
                  function setName(t) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'setAvatar',
                value:
                  ((e = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee2(e) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function _callee2$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = _classPrivateFieldLooseBase(this, u)[u]
                                    .user_settings.avatar),
                                  (t.prev = 1),
                                  (_classPrivateFieldLooseBase(this, u)[
                                    u
                                  ].user_settings.avatar = e),
                                  (t.next = 5),
                                  Object(a.default)(
                                    _classPrivateFieldLooseBase(this, u)[u].id,
                                    e,
                                    this.Http
                                  )
                                );
                              case 5:
                                return t.abrupt('return', Promise.resolve(e));
                              case 8:
                                return (
                                  (t.prev = 8),
                                  (t.t0 = t.catch(1)),
                                  (_classPrivateFieldLooseBase(this, u)[
                                    u
                                  ].user_settings.avatar = n),
                                  t.abrupt('return', Promise.reject(n))
                                );
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee2,
                        this,
                        [[1, 8]]
                      );
                    })
                  )),
                  function setAvatar(t) {
                    return e.apply(this, arguments);
                  }),
              },
            ]),
            CbUser
          );
        })();
      e.default = n;
    },
    './src/components/session.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var a = n('./src/constants.js'),
        r = n('./src/helpers/rest-api/get-or-create-chatbot-session.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        s = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        i = n('./node_modules/BlueDarwinJS/src/services/response.js'),
        c = n('./src/utils/communication.js'),
        d = n(
          './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
        );
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _asyncToGenerator(a) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (e, n) {
            var r = a.apply(t, o);
            function _next(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
            }
            function _throw(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'throw', t);
            }
            _next(void 0);
          });
        };
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var u = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + u++ + '_' + t;
      }
      var l = _classPrivateFieldLooseKey('meta'),
        f = _classPrivateFieldLooseKey('session'),
        p = _classPrivateFieldLooseKey('conversation'),
        h = _classPrivateFieldLooseKey('updateConversation'),
        _ = _classPrivateFieldLooseKey('buildConversationFromSession'),
        n = (function () {
          function Session(t, e) {
            if (
              (!(function _classCallCheck(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, Session),
              Object.defineProperty(this, _, {
                value: _buildConversationFromSession2,
              }),
              Object.defineProperty(this, h, { value: _updateConversation2 }),
              Object.defineProperty(this, l, {
                writable: !0,
                value: {
                  user: !1,
                  id: !1,
                  module: !1,
                  projectId: !1,
                  isOpen: !1,
                },
              }),
              Object.defineProperty(this, f, { writable: !0, value: {} }),
              Object.defineProperty(this, p, { writable: !0, value: [] }),
              (this.parameters = {}),
              !t || !e)
            )
              throw 'ERROR.SESSION_CREATE_WITHOUT_LOGIN_OR_INIT';
            (_classPrivateFieldLooseBase(this, l)[l].module = t),
              (_classPrivateFieldLooseBase(this, l)[l].user = e),
              Object(d.default)(
                [i.default, o.default, s.default, c.default],
                this
              );
          }
          var t, e, n;
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(Session, [
              {
                key: 'getId',
                value: function getId() {
                  return _classPrivateFieldLooseBase(this, l)[l].id;
                },
              },
              {
                key: 'getUser',
                value: function getUser() {
                  return _classPrivateFieldLooseBase(this, l)[l].user;
                },
              },
              {
                key: 'getModule',
                value: function getModule() {
                  return _classPrivateFieldLooseBase(this, l)[l].module;
                },
              },
              {
                key: 'isOpen',
                value: function isOpen() {
                  return _classPrivateFieldLooseBase(this, l)[l].isOpen;
                },
              },
              {
                key: 'sendText',
                value: function sendText(t) {
                  return this.Communication.sendText(t);
                },
              },
              {
                key: 'sendVoice',
                value: function sendVoice(t) {
                  return this.Communication.sendVoice(t);
                },
              },
              {
                key: 'sendPostBack',
                value: function sendPostBack(t) {
                  return this.Communication.sendPostBack(t);
                },
              },
              {
                key: 'sendStartConversation',
                value: function sendStartConversation() {
                  return this.Communication.sendStartConversation();
                },
              },
              {
                key: 'sendLogout',
                value: function sendLogout() {
                  return this.Communication.sendLogout({});
                },
              },
              {
                key: 'getSession',
                value:
                  ((n = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee() {
                      var e;
                      return regeneratorRuntime.wrap(
                        function _callee$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  Object(r.default)()
                                );
                              case 3:
                                if ((e = t.sent))
                                  return (
                                    (_classPrivateFieldLooseBase(this, l)[
                                      l
                                    ].isOpen = 'open' === e.attributes.status),
                                    (_classPrivateFieldLooseBase(this, l)[
                                      l
                                    ].projectId =
                                      e.relationships.project.data.id),
                                    (_classPrivateFieldLooseBase(this, l)[
                                      l
                                    ].id = e.id),
                                    (_classPrivateFieldLooseBase(this, f)[f] =
                                      e),
                                    t.abrupt(
                                      'return',
                                      Promise.resolve(
                                        _classPrivateFieldLooseBase(this, _)[_](
                                          e
                                        )
                                      )
                                    )
                                  );
                                t.next = 10;
                                break;
                              case 10:
                                return t.abrupt(
                                  'return',
                                  Promise.resolve(
                                    _classPrivateFieldLooseBase(this, p)[p]
                                  )
                                );
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt(
                                    'return',
                                    Promise.reject(
                                      i.default.error({
                                        message: t.t0,
                                        data: t.t0,
                                      })
                                    )
                                  )
                                );
                              case 16:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee,
                        this,
                        [[0, 13]]
                      );
                    })
                  )),
                  function getSession() {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'getConversation',
                value:
                  ((e = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee2() {
                      var e;
                      return regeneratorRuntime.wrap(
                        function _callee2$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  (t.prev = 0) <
                                  (e = _classPrivateFieldLooseBase(this, p)[p])
                                    .length
                                )
                                  return t.abrupt('return', Promise.resolve(e));
                                t.next = 4;
                                break;
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
                                    Promise.resolve(
                                      _classPrivateFieldLooseBase(this, p)[p]
                                    )
                                  )
                                );
                              case 14:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee2,
                        this,
                        [[0, 10]]
                      );
                    })
                  )),
                  function getConversation() {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: 'reset',
                value:
                  ((t = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee3() {
                      var e;
                      return regeneratorRuntime.wrap(
                        function _callee3$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), this.Communication.sendReset()
                                );
                              case 2:
                                return (
                                  (e = t.sent),
                                  (_classPrivateFieldLooseBase(this, p)[p] =
                                    {}),
                                  t.abrupt('return', e)
                                );
                              case 5:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    })
                  )),
                  function reset() {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            Session
          );
        })();
      function _updateConversation2(t, e) {
        t &&
          e &&
          ((t = { type: t, data: e }),
          _classPrivateFieldLooseBase(this, p)[p].push(t));
      }
      function _buildConversationFromSession2(t) {
        if (!t || !t.attributes || !t.attributes.context)
          return _classPrivateFieldLooseBase(this, p)[p];
        for (var e = t.attributes.context, n = 1; n <= e.n_interactions; n++) {
          var r = 'interaction_' + n,
            o =
              e.inputs[r] && Array.isArray(e.inputs[r])
                ? e.inputs[r][0]
                : void 0,
            r =
              e.outputs[r] && Array.isArray(e.outputs[r])
                ? e.outputs[r][0]
                : void 0;
          _classPrivateFieldLooseBase(this, h)[h]('input', o),
            _classPrivateFieldLooseBase(this, h)[h]('output', r);
        }
        return (
          this.State.set(
            a.default.STATES.CONVERSATION,
            _classPrivateFieldLooseBase(this, p)[p]
          ),
          _classPrivateFieldLooseBase(this, p)[p]
        );
      }
      e.default = n;
    },
    './src/constants.js': function (t, e, n) {
      'use strict';
      n.r(e);
      e.default = {
        BUTTON_KEY: 'cognus-chatbot-button',
        DEFAULTS: {
          ENCRYPTION: !0,
          ENVIRONMENT: 'production',
          IFRAME_CSS: {
            border: 'none',
            bottom: '16px',
            height: '55px',
            position: 'fixed',
            right: '16px',
            width: '55px',
          },
          LANGUAGE: 'en_EN',
        },
        DISPLAY: {
          headerGradientEnd: '#004ab5',
          headerGradientStart: '#166be9',
          headerLetters: 'light',
          sendMessageButton: '#FFFFFF',
        },
        DISPLAY_HEADER_LETTERS: ['dark', 'light'],
        DISPLAY_HEADER_LETTERS_STYLES: {
          dark: { color: '#000', 'fill-opacity': '0.6' },
          light: { color: '#FFF', 'fill-opacity': '1' },
        },
        ENCRYPTED_ENVIRONMENTS: ['production', 'staging'],
        ENVIRONMENT_IDS: { development: 3, production: 5, staging: 4 },
        ENVIRONMENT_SHORT_NAMES: {
          development: 'dev',
          local: 'dev',
          production: 'prod',
          staging: 'staging',
        },
        ENVIRONMENTS: ['development', 'local', 'production', 'staging'],
        EVENTS: {
          API_FAIL: 'api:fail',
          API_READY: 'api:ready',
          CONVERSATION_REPLY_FAIL: 'conversation-reply:fail',
          CONVERSATION_UPDATE: 'conversation:updated',
          IFRAME_LOADED: 'iframe:loaded',
          LOGGED_IN: 'login:success',
          LOGGED_OUT: 'logout:success',
          LOGIN_FAIL: 'login:fail',
          TOKEN_NEGOTIATION_REQUIRED: 'x-access-token:negotiation-required',
        },
        INFO: {
          VERSION: '2.0.6',
          NAME: 'BlueDarwin Chatbot Integration',
          DESCRIPTION: 'Effortless JS integration of our chatbot',
        },
        LANGUAGES: ['en_EN'],
        LOGIN_TYPES: ['API', 'KEY_TOKEN'],
        STATES: {
          API_READY: 'api-ready',
          APPLICATION_DISPLAY: 'application-display',
          APPLICATION_THEME: 'application-theme',
          CHANNEL_TOKEN: 'channel-token',
          CONVERSATION: 'conversation',
          ELEMENT_IFRAME: 'element-iframe',
          ENVIRONMENT: 'environment',
          HAS_CHATBOT_USER: 'has-chatbot-user',
          HAS_CLIENT_USER_ID: 'has-client-user-id',
          HAS_KEY: 'has-key',
          HAS_MODULE: 'has-module',
          HAS_PROJECT: 'has-project',
          HAS_TOKEN: 'has-token',
          HAS_USER: 'has-user',
          IFRAME_READY: 'iframe-ready',
          IS_ENCRYPTED: 'is-encrypted',
          IS_IFRAME_IN_DEBUG_MODE: 'is-iframe-in-debug-mode',
          IS_INITIALIZED: 'is-initialized',
          IS_LOGGED_IN: 'is-logged-in',
          LOGIN_METHOD: 'login-method',
          MODEL_CHANNELS: 'modal-am-module-channels',
          MODEL_INTENT: 'modal-am-module-intent',
          MODEL_MODULE: 'model-am-module',
          MODEL_SESSION: 'modal-session',
          URL_API: 'url-api',
          URL_IFRAME: 'url-iframe',
        },
        STORAGE: {
          KEY: 'key',
          OLD_KEY: 'old-key',
          OLD_TOKEN: 'old-token',
          TOKEN: 'token',
          USER: 'user',
        },
        THEME: {
          BLUE: {
            headerGradientEnd: '#004ab5',
            headerGradientStart: '#166be9',
            headerLetters: 'light',
            sendMessageButton: '#FFFFFF',
          },
          RED: {
            headerGradientEnd: '#fff',
            headerGradientStart: '#f5f5f5',
            headerLetters: 'dark',
            sendMessageButton: '#551A8B',
          },
          WHITE: {
            headerGradientEnd: '#fff',
            headerGradientStart: '#f5f5f5',
            headerLetters: 'dark',
            sendMessageButton: '#551A8B',
          },
        },
        URLS: {
          API: [
            '/default/api',
            'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_',
          ],
          IFRAME: ['.eu-de.mybluemix.net/', 'https://cognus-chatbot'],
        },
      };
    },
    './src/dom/animations/fade-in.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return fadeIn;
        });
      var o = n(
          './node_modules/BlueDarwinJS/src/prototypes/extend-configuration.js'
        ),
        a = { display: 'block', time: '0.4s', delay: 0 };
      function fadeIn(n) {
        var r =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          r = Object(o.default)(r, a);
        return new Promise(function (t, e) {
          try {
            setTimeout(function () {
              (n.style.opacity = 0),
                (n.style.display = r.display),
                (n.style.WebkitTransition = 'opacity '.concat(r.time)),
                (n.style.MozTransition = 'opacity '.concat(r.time)),
                requestAnimationFrame(function () {
                  return (n.style.opacity = 1);
                }),
                t();
            }, r.delay);
          } catch (t) {
            e(t);
          }
        });
      }
    },
    './src/dom/animations/fade-out.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return fadeOut;
        });
      var o = n(
          './node_modules/BlueDarwinJS/src/prototypes/extend-configuration.js'
        ),
        a = { time: '0.4s', delay: 0 };
      function fadeOut(n) {
        var r =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          r = Object(o.default)(r, a);
        return new Promise(function (t, e) {
          setTimeout(function () {
            try {
              (n.style.opacity = 1),
                (n.style.WebkitTransition = 'opacity '.concat(r.time)),
                (n.style.MozTransition = 'opacity '.concat(r.time)),
                requestAnimationFrame(function () {
                  return (n.style.opacity = 0);
                }),
                t();
            } catch (t) {
              e(t);
            }
          }, r.delay);
        });
      }
    },
    './src/dom/custom-elements/cognus-chatbot-button.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./src/constants.js'),
        o = n('./src/dom/custom-elements/templates/cognus-chatbot-button.js'),
        a = n('./src/dom/animations/fade-in.js'),
        s = n('./src/dom/animations/fade-out.js'),
        i = n('./src/helpers/handle-template-display.js'),
        c = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        d = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        u = n('./node_modules/BlueDarwinJS/src/helpers/post-message.js');
      function _typeof(t) {
        return (_typeof =
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
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _createSuper(n) {
        var r = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var t,
            e = _getPrototypeOf(n);
          return (function _possibleConstructorReturn(t, e) {
            {
              if (e && ('object' === _typeof(e) || 'function' == typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
            }
            return _assertThisInitialized(t);
          })(
            this,
            r
              ? ((t = _getPrototypeOf(this).constructor),
                Reflect.construct(e, arguments, t))
              : e.apply(this, arguments)
          );
        };
      }
      function _assertThisInitialized(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function _wrapNativeSuper(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (function _wrapNativeSuper(t) {
          if (
            null === t ||
            !(function _isNativeFunction(t) {
              return -1 !== Function.toString.call(t).indexOf('[native code]');
            })(t)
          )
            return t;
          if ('function' != typeof t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, Wrapper);
          }
          function Wrapper() {
            return _construct(t, arguments, _getPrototypeOf(this).constructor);
          }
          return (
            (Wrapper.prototype = Object.create(t.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            _setPrototypeOf(Wrapper, t)
          );
        })(t);
      }
      function _construct(t, e, n) {
        return (_construct = _isNativeReflectConstruct()
          ? Reflect.construct
          : function _construct(t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              e = new (Function.bind.apply(t, r))();
              return n && _setPrototypeOf(e, n.prototype), e;
            }).apply(null, arguments);
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function _setPrototypeOf(t, e) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function _getPrototypeOf(t) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var l = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + l++ + '_' + t;
      }
      var f,
        p = [
          { id: '$button', action: 'startButtonPress', type: 'mousedown' },
          { id: '$button', action: 'endButtonPress', type: 'mouseup' },
          { id: '$iframe', action: 'broadcastIframeLoaded', type: 'load' },
        ],
        h = 0,
        _ = 0,
        y = 0,
        m = 0,
        v = _classPrivateFieldLooseKey('boot'),
        x = _classPrivateFieldLooseKey('sendIframeEvents'),
        n = (function () {
          !(function _inherits(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && _setPrototypeOf(t, e);
          })(CognusChatbotButton, _wrapNativeSuper(HTMLElement));
          var t,
            e = _createSuper(CognusChatbotButton);
          function CognusChatbotButton() {
            var t;
            return (
              (function _classCallCheck(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, CognusChatbotButton),
              (t = e.call(this)),
              Object.defineProperty(_assertThisInitialized(t), x, {
                value: _sendIframeEvents2,
              }),
              Object.defineProperty(_assertThisInitialized(t), v, {
                value: _boot2,
              }),
              (t.isLocked = !1),
              (t.isChatbotWindowOpen = !1),
              (t.delay = 0),
              (t.isButtonPressed = !1),
              (t.firstClickTriggered = !1),
              (f = new c.default()),
              (t.State = new d.default()),
              _classPrivateFieldLooseBase(_assertThisInitialized(t), v)[v](),
              t
            );
          }
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(
              CognusChatbotButton,
              [
                {
                  key: 'handleClick',
                  value:
                    ((t = (function _asyncToGenerator(a) {
                      return function () {
                        var t = this,
                          o = arguments;
                        return new Promise(function (e, n) {
                          var r = a.apply(t, o);
                          function _next(t) {
                            asyncGeneratorStep(
                              r,
                              e,
                              n,
                              _next,
                              _throw,
                              'next',
                              t
                            );
                          }
                          function _throw(t) {
                            asyncGeneratorStep(
                              r,
                              e,
                              n,
                              _next,
                              _throw,
                              'throw',
                              t
                            );
                          }
                          _next(void 0);
                        });
                      };
                    })(
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (((t.prev = 0), this.isLocked))
                                    return t.abrupt('return');
                                  t.next = 3;
                                  break;
                                case 3:
                                  if (
                                    ((this.isLocked = !0),
                                    this.isChatbotWindowOpen)
                                  )
                                    return (
                                      (t.next = 7), this.closeChatbotWindow()
                                    );
                                  t.next = 9;
                                  break;
                                case 7:
                                  t.next = 11;
                                  break;
                                case 9:
                                  return (
                                    (t.next = 11), this.openChatbotWindow()
                                  );
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
                          _callee,
                          this,
                          [[0, 14]]
                        );
                      })
                    )),
                    function handleClick() {
                      return t.apply(this, arguments);
                    }),
                },
                {
                  key: 'closeChatbotWindow',
                  value: function closeChatbotWindow() {
                    var n = this;
                    return new Promise(function (t, e) {
                      u.default.send('closeChatbotWindow'),
                        setTimeout(function () {
                          (n.isChatbotWindowOpen = !1), t();
                        }, y),
                        setTimeout(function () {
                          n.$iframe.style.display = 'none';
                        }, _),
                        Object(a.default)(n.$iconOpen, { delay: m }),
                        Object(s.default)(n.$iconClose);
                    });
                  },
                },
                {
                  key: 'openChatbotWindow',
                  value: function openChatbotWindow() {
                    var n = this;
                    return new Promise(function (t, e) {
                      (n.$iframe.style.display = 'block'),
                        n.firstClickTriggered ||
                          ((n.firstClickTriggered = !0),
                          _classPrivateFieldLooseBase(n, x)[x]()),
                        u.default.send('openChatbotWindow'),
                        setTimeout(function () {
                          (n.isChatbotWindowOpen = !0), t();
                        }, y),
                        setTimeout(function () {
                          (n.isChatbotWindowOpen = !0), t();
                        }, h),
                        Object(a.default)(n.$iconClose, { delay: m }),
                        Object(s.default)(n.$iconOpen);
                    });
                  },
                },
                {
                  key: 'broadcastIframeLoaded',
                  value: function broadcastIframeLoaded() {
                    f.emit(r.default.EVENTS.IFRAME_LOADED);
                  },
                },
                {
                  key: 'attributeChangedCallback',
                  value: function attributeChangedCallback(t, e, n) {
                    'src' === t && (this.$iframe.src = n);
                  },
                },
                {
                  key: 'startButtonPress',
                  value: function startButtonPress() {
                    this.handleClick();
                  },
                },
                {
                  key: 'endButtonPress',
                  value: function endButtonPress(t) {
                    this.isButtonPressed = !1;
                  },
                },
                {
                  key: 'src',
                  get: function get() {
                    return this.getAttribute('src');
                  },
                  set: function set(t) {
                    this.setAttribute('src', t);
                  },
                },
                {
                  key: 'addEventListeners',
                  value: function addEventListeners() {
                    var e = this;
                    p.forEach(function (t) {
                      e[t.id].addEventListener(t.type, e[t.action]);
                    });
                  },
                },
              ],
              [
                {
                  key: 'observedAttributes',
                  get: function get() {
                    return ['src'];
                  },
                },
              ]
            ),
            CognusChatbotButton
          );
        })();
      function _boot2() {
        var t = this;
        (o.default.innerHTML = Object(i.default)(
          o.default.innerHTML,
          this.State
        )),
          (this._shadowRoot = this.attachShadow({ mode: 'open' })),
          this._shadowRoot.appendChild(o.default.content.cloneNode(!0)),
          (this.handleClick = this.handleClick.bind(this)),
          (this.startButtonPress = this.startButtonPress.bind(this)),
          (this.endButtonPress = this.endButtonPress.bind(this)),
          (this.$container = this._shadowRoot.getElementById(
            'cognus-chatbot__container'
          )),
          (this.$button = this._shadowRoot.getElementById(
            'cognus-chatbot__button'
          )),
          (this.$iframe = this._shadowRoot.getElementById(
            'cognus-chatbot__iframe'
          )),
          (this.$iconClose = this._shadowRoot.getElementById(
            'cognus-chatbot__icon-close'
          )),
          (this.$iconOpen = this._shadowRoot.getElementById(
            'cognus-chatbot__icon-open'
          )),
          (this.$iframe.onload = function () {
            t.State.set(r.default.IFRAME_READY, !0);
          }),
          this.addEventListeners();
      }
      function _sendIframeEvents2() {
        var e = this,
          n = setInterval(function () {
            var t;
            e.State.get(r.default.IFRAME_READY) &&
              ((t = {
                key: e.State.get(r.default.STATES.HAS_KEY),
                module: e.State.get(r.default.STATES.HAS_MODULE),
                project: e.State.get(r.default.STATES.HAS_PROJECT),
                token: e.State.get(r.default.STATES.HAS_TOKEN),
                user: e.State.get(r.default.STATES.HAS_USER),
              }),
              u.default.send('setupClient', t),
              u.default.send('setupUser', t.user),
              u.default.send('setModuleById', t.module),
              clearInterval(n));
          }, 100);
      }
      e.default = n;
    },
    './src/dom/custom-elements/templates/cognus-chatbot-button.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      n = document.createElement('template');
      (n.innerHTML =
        '\n<style>\n/*! CSS Used from: https://fonts.googleapis.com/icon?family=Material+Icons */.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}/*! CSS Used from: https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/chatbot-ui.css */#open-chat-button{background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),__headerGradientStart__;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-moz-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-webkit-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),linear-gradient(135deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);margin-top:8px}.mdl-button--fab.mdl-button--colored{background:linear-gradient(135deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);color:#fff;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),__headerGradientStart__;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-moz-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-webkit-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),linear-gradient(135deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%)}.snippet-open-chat-button{float:right;margin-right:10px;margin-top:10px}button{text-transform:initial!important}/*! CSS Used from: https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/material.min.css */::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}@media print{*,:after,:before,:first-letter{background:0 0!important;color:#000!important;box-shadow:none!important}}.mdl-button{-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:rgba(255,255,255,0)}.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;word-wrap:normal;-moz-font-feature-settings:\'liga\';font-feature-settings:\'liga\';-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:0;overflow:hidden;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:rgba(158,158,158,.2)}.mdl-button:active{background-color:rgba(158,158,158,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:rgba(158,158,158,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:rgba(158,158,158,.4)}.mdl-button .material-icons{vertical-align:middle}/*! CSS Used from: https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/fonts.css */.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}\n\niframe{display:none; border: none;width: 350px;height: 650px; position:absolute; right:0; bottom: 0;}\n.mdl-button.mdl-js-button.mdl-button--fab.mdl-button--colored.snippet-open-chat-button{box-shadow: 0 3px 10px rgba(0,0,0,0.15)}\n#cognus-chatbot__container{\n    position: relative;\n    height: 0;\n    width: 0;\n    float: right;\n}\n\ncognus-chatbot-button{\n  width: 0px;\n  height: 0px;\n}\n\n</style>\n<div id="cognus-chatbot__container">\n<iframe class="closed" id="cognus-chatbot__iframe" allow="microphone"></iframe>\n<button id="cognus-chatbot__button"  class="mdl-button mdl-js-button\n              mdl-button--fab\n              mdl-button--colored\n              snippet-open-chat-button"  data-upgraded=",MaterialButton">\n\n<i id="cognus-chatbot__icon-close" class="material-icons" style="opacity:0">\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path fill="none" d="M0 0h24v24H0V0z"/>\n    <path fill="__headerLettersColor__" fill-opacity="__headerLettersOpacity__"  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>\n</i>\n<i id="cognus-chatbot__icon-open" class="material-icons">\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path fill="none" d="M0 0h24v24H0V0z"/>\n    <path fill="__headerLettersColor__" fill-opacity="__headerLettersOpacity__" d="M22 2H2v20l4-4h16V2z"/></svg>\n</i>\n</button>\n</div>\n'),
        (e.default = n);
    },
    './src/helpers/handle-template-display.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return handleTemplateDisplay;
        });
      var a = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        s = n('./src/constants.js');
      function handleTemplateDisplay() {
        var r =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : '',
          o =
            (1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new a.default()
            ).get(s.default.STATES.APPLICATION_DISPLAY).colors ||
            s.default.DISPLAY;
        return (
          Object.keys(o).forEach(function (t) {
            var e, n;
            r =
              'headerLetters' === t
                ? ((e = '__'.concat(t, 'Color__')),
                  (n = new RegExp(e, 'g')),
                  (r = r.replace(
                    n,
                    s.default.DISPLAY_HEADER_LETTERS_STYLES[o[t]].color
                  )),
                  (e = '__'.concat(t, 'Opacity__')),
                  (n = new RegExp(e, 'g')),
                  r.replace(
                    n,
                    s.default.DISPLAY_HEADER_LETTERS_STYLES[o[t]][
                      'fill-opacity'
                    ]
                  ))
                : ((e = '__'.concat(t, '__')),
                  (n = new RegExp(e, 'g')),
                  r.replace(n, o[t]));
          }),
          r
        );
      }
    },
    './src/helpers/is-hex.js': function (t, e, n) {
      'use strict';
      function isHex() {
        return !0;
      }
      n.r(e),
        n.d(e, 'default', function () {
          return isHex;
        });
    },
    './src/helpers/rest-api/create-session.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        o = n('./src/models/session.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/extend-and-keep-structure.js'
        );
      e.default = function createSession() {
        var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : o.default;
        (1 < arguments.length && void 0 !== arguments[1]) || new r.default();
        return r.default.post('url', Object(a.default)(o.default, t));
      };
    },
    './src/helpers/rest-api/get-channel-token.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js');
      e.default = function getChannel(t) {
        return (
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : new r.default()
        ).get('am_channel_tokens/'.concat(t));
      };
    },
    './src/helpers/rest-api/get-channel.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js');
      e.default = function getChannel(t) {
        return (
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : new r.default()
        ).get('am_channels/'.concat(t));
      };
    },
    './src/helpers/rest-api/get-chatbot-user.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        a = n('./node_modules/BlueDarwinJS/src/helpers/get-chatbot-user-id.js');
      e.default = function getChatbotUser(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new r.default(),
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : new o.default();
        return e.get(
          'am_client_users?client_user_id='.concat(Object(a.default)(n))
        );
      };
    },
    './src/helpers/rest-api/get-intent.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js');
      e.default = function getIntent(t) {
        return (
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : new r.default()
        ).get('am_intents/'.concat(t));
      };
    },
    './src/helpers/rest-api/get-module.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/app-constants.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        a = n('./node_modules/BlueDarwinJS/src/services/state.js');
      e.default = function getModule(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new o.default(),
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : new a.default();
        return e.get(
          'am_modules/'.concat(t || n.get(r.default.STATES.HAS_MODULE))
        );
      };
    },
    './src/helpers/rest-api/get-modules.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js');
      e.default = function getModules() {
        return (
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : new r.default()
        ).get('am_modules');
      };
    },
    './src/helpers/rest-api/get-or-create-chatbot-session.js': function (
      t,
      e,
      n
    ) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/response.js'),
        o = n('./src/helpers/rest-api/get-session.js');
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function vE() {
        return a.apply(this, arguments);
      }
      var a;
      a = (function _asyncToGenerator(a) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (e, n) {
            var r = a.apply(t, o);
            function _next(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
            }
            function _throw(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'throw', t);
            }
            _next(void 0);
          });
        };
      })(
        regeneratorRuntime.mark(function _callee() {
          var e,
            n = arguments;
          return regeneratorRuntime.wrap(
            function _callee$(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (0 < n.length && void 0 !== n[0]) || new r.default(),
                      (t.prev = 1),
                      (t.next = 4),
                      Object(o.default)()
                    );
                  case 4:
                    return (
                      ((e = t.sent) && 0 !== e.length) || (e = !1),
                      t.abrupt('return', e[0])
                    );
                  case 9:
                    throw (
                      ((t.prev = 9),
                      (t.t0 = t.catch(1)),
                      r.default.error({
                        message: 'ERROR.GET_OR_CREATE_SESSION',
                        data: t.t0,
                      }))
                    );
                  case 12:
                  case 'end':
                    return t.stop();
                }
            },
            _callee,
            null,
            [[1, 9]]
          );
        })
      );
      e.default = vE;
    },
    './src/helpers/rest-api/get-session.js': function (t, e, n) {
      'use strict';
      n.r(e);
      function ZE() {
        var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : new o.default(),
          e = '',
          n = {
            am_user: 12323,
            stage:
              r.default.ENVIRONMENT_IDS[t.get(r.default.STATES.ENVIRONMENT)],
            project: t.get(r.default.STATES.HAS_PROJECT),
            status: 'open',
          };
        return (
          Object.keys(n).forEach(function (t) {
            n[t] && (e += '&'.concat(t, '=').concat(n[t]));
          }),
          (e = 0 < (e = e.substr(1)).length ? '?'.concat(e) : e)
        );
      }
      var r = n('./src/constants.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        a = n('./node_modules/BlueDarwinJS/src/services/http.js');
      e.default = function getSession() {
        return (
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : new a.default()
        ).get('am_sessions'.concat(ZE()));
      };
    },
    './src/helpers/rest-api/send-logout.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
        );
      e.default = function sendLogout(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new o.default(),
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : new r.default();
        return e.post('orchestrator_v3', a.default.v3.logout(n));
      };
    },
    './src/helpers/rest-api/send-post-back.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
        );
      e.default = function sendPostBack(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new o.default(),
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : new r.default();
        return e.post('orchestrator_v3', a.default.v3.postBack(t, n));
      };
    },
    './src/helpers/rest-api/send-reset.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
        );
      e.default = function sendStartConversation() {
        var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : new o.default(),
          e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new r.default(),
          e = a.default.v3.text('olá', e);
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
      };
    },
    './src/helpers/rest-api/send-start-conversation.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
        );
      e.default = function sendStartConversation() {
        var t =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : new o.default(),
          e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new r.default(),
          e = a.default.v3.text('start', e);
        return (e.input = null), t.post('orchestrator_v3', e);
      };
    },
    './src/helpers/rest-api/send-text.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
        );
      e.default = function sendText(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new o.default(),
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : new r.default();
        return e.post('orchestrator_v3', a.default.v3.text(t, n));
      };
    },
    './src/helpers/rest-api/send-voice.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        o = n('./node_modules/BlueDarwinJS/src/services/http.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
        );
      e.default = function sendVoice(t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : new o.default(),
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : new r.default();
        return e.post('orchestrator_v3', a.default.v3.voice(t, n));
      };
    },
    './src/helpers/rest-api/set-chatbot-user-avatar.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js');
      e.default = function setChatbotUserAvatar(t, e) {
        return (
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : new r.default()
        ).post('am_client_users/'.concat(t), {
          user_settings: { avatar: avatar },
        });
      };
    },
    './src/helpers/rest-api/set-chatbot-user-name.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/BlueDarwinJS/src/services/http.js');
      e.default = function setChatbotUserName(t, e) {
        return (
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : new r.default()
        ).post('am_client_users/'.concat(t), {
          user_settings: { username: e },
        });
      };
    },
    './src/helpers/signature.js': function (t, e, n) {
      'use strict';
      function createString(t, e, n) {
        var t = 0 < arguments.length && void 0 !== t ? t : '',
          e = 1 < arguments.length && void 0 !== e ? e : 0,
          n = 2 < arguments.length && void 0 !== n ? n : '',
          r = t.length,
          n = new Array(e - r).fill(n).join('');
        return ''.concat(t, ' ').concat(n);
      }
      function logLine(t, e, n) {
        (t = 0 < arguments.length && void 0 !== t ? t : ''),
          (e = 1 < arguments.length && void 0 !== e ? e : ' '),
          (n = 2 < arguments.length && void 0 !== n ? n : '  ');
        console.log('|'.concat(e).concat(t).concat(n, '|'));
      }
      function signature(t) {
        var e,
          n =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          r = [0, 0],
          o = [],
          a = [];
        Object.keys(n).forEach(function (t) {
          var e = (function capitalizeFirstLetter(t) {
              return (
                (t = 0 < arguments.length && void 0 !== t ? t : '')
                  .charAt(0)
                  .toUpperCase() + t.slice(1)
              );
            })(t.toLowerCase().replace(/[_-]/g, ' ').trim()),
            t = n[t];
          o.push(e),
            a.push(t),
            e.length > r[0] && (r[0] = e.length),
            t.length > r[1] && (r[1] = t.length);
        }),
          (r[0] = r[0] + 4),
          (r[1] = r[1] + 3),
          (e = r.reduce(function (t, e) {
            return t + e;
          }, 0)),
          console.log(' '),
          logLine(createString(t, e, '-'), ' ', '   ');
        for (var s = 0; s < o.length; s++)
          logLine(
            createString(o[s] + ':', r[0], ' ') + createString(a[s], r[1], ' ')
          );
        logLine(createString('', e, '-'), ' ', '   '), console.log(' ');
      }
      n.r(e),
        n.d(e, 'default', function () {
          return signature;
        });
    },
    './src/i18n/en_EN.js': function (t, e, n) {
      'use strict';
      n.r(e);
      e.default = {
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
    },
    './src/index.js': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'Iframe', function () {
          return r;
        }),
        n.d(e, 'Api', function () {
          return o;
        });
      n(
        './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'
      );
      var e = n('./src/libs/iframe.js'),
        n = n('./src/libs/api.js'),
        r = e.default,
        o = n.default;
    },
    './src/libs/api.js': function (C, t, e) {
      'use strict';
      e.r(t);
      var a = e('./src/constants.js'),
        n = e('./src/components/cb-module.js'),
        r = e('./src/helpers/rest-api/get-module.js'),
        s = e('./src/helpers/rest-api/get-channel.js'),
        i = e('./src/helpers/rest-api/get-channel-token.js'),
        o = e('./src/helpers/rest-api/get-intent.js'),
        c = e('./src/helpers/rest-api/get-chatbot-user.js'),
        d = e('./src/models/chatbot-user.js'),
        u = e('./src/components/session.js'),
        l = e('./src/chatbot.js');
      function _typeof(t) {
        return (_typeof =
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
      function zH() {
        return f.apply(this, arguments);
      }
      function AH(t) {
        return p.apply(this, arguments);
      }
      function BH(t) {
        return h.apply(this, arguments);
      }
      function CH() {
        return _.apply(this, arguments);
      }
      var f, p, h, _;
      (f = _asyncToGenerator(
        regeneratorRuntime.mark(function _callee2() {
          var e;
          return regeneratorRuntime.wrap(
            function _callee2$(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      Object(r.default)(this.module, this.Http, this.State)
                    );
                  case 3:
                    if ((e = t.sent) && 'item not found' !== e) {
                      t.next = 6;
                      break;
                    }
                    throw 'ERROR.MODULE_NOT_FOUND';
                  case 6:
                    return (
                      this.State.set(a.default.STATES.MODEL_MODULE, e),
                      this.State.set(
                        a.default.STATES.HAS_PROJECT,
                        e.relationships.project &&
                          e.relationships.project.data &&
                          e.relationships.project.data.id
                          ? e.relationships.project.data.id
                          : void 0
                      ),
                      (_classPrivateFieldLooseBase(this, x)[x] = new n.default(
                        e
                      )),
                      t.abrupt('return', e)
                    );
                  case 12:
                    throw ((t.prev = 12), (t.t0 = t.catch(0)), t.t0);
                  case 15:
                  case 'end':
                    return t.stop();
                }
            },
            _callee2,
            this,
            [[0, 12]]
          );
        })
      )),
        (p = _asyncToGenerator(
          regeneratorRuntime.mark(function _callee3(e) {
            var n, r, o;
            return regeneratorRuntime.wrap(
              function _callee3$(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (t.prev = 0), (n = 0);
                    case 2:
                      if (n < e.relationships.am_channel_tokens.data.length)
                        return (
                          (o = e.relationships.am_channel_tokens.data[n].id),
                          (t.next = 6),
                          Object(i.default)(o, this.Http)
                        );
                      t.next = 14;
                      break;
                    case 6:
                      return (
                        (r = t.sent),
                        (t.next = 9),
                        Object(s.default)(r.relationships.am_channel.data.id)
                      );
                    case 9:
                      'BlueDarwin' === (o = t.sent).attributes.label &&
                        (_classPrivateFieldLooseBase(this, y)[y].push(
                          o.attributes
                        ),
                        this.State.set(
                          a.default.STATES.CHANNEL_TOKEN,
                          r.attributes.token
                        ));
                    case 11:
                      n++, (t.next = 2);
                      break;
                    case 14:
                      this.State.set(
                        a.default.STATES.MODEL_CHANNELS,
                        _classPrivateFieldLooseBase(this, y)[y]
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
              _callee3,
              this,
              [[0, 17]]
            );
          })
        )),
        (h = _asyncToGenerator(
          regeneratorRuntime.mark(function _callee4(e) {
            var n;
            return regeneratorRuntime.wrap(
              function _callee4$(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        Object(o.default)(
                          e.relationships.am_intents.data.id,
                          this.Http
                        )
                      );
                    case 3:
                      return (
                        (n = t.sent),
                        this.State.set(a.default.STATES.MODEL_INTENT, n),
                        (_classPrivateFieldLooseBase(this, m)[m] = n),
                        t.abrupt('return', n)
                      );
                    case 9:
                      throw ((t.prev = 9), (t.t0 = t.catch(0)), t.t0);
                    case 12:
                    case 'end':
                      return t.stop();
                  }
              },
              _callee4,
              this,
              [[0, 9]]
            );
          })
        )),
        (_ = _asyncToGenerator(
          regeneratorRuntime.mark(function _callee5() {
            var e;
            return regeneratorRuntime.wrap(
              function _callee5$(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), Object(c.default)();
                    case 3:
                      e = t.sent;
                      try {
                        this.State.set(
                          a.default.STATES.HAS_CHATBOT_USER,
                          e[0].relationships.am_users.data.id
                        ),
                          _classPrivateFieldLooseBase(this, x)[x].setMetaUser(
                            e[0].attributes
                          );
                      } catch (t) {
                        _classPrivateFieldLooseBase(this, x)[x].setMetaUser(
                          Object(d.default)()
                        );
                      }
                      return t.abrupt('return', e);
                    case 8:
                      throw ((t.prev = 8), (t.t0 = t.catch(0)), t.t0);
                    case 11:
                    case 'end':
                      return t.stop();
                  }
              },
              _callee5,
              this,
              [[0, 8]]
            );
          })
        ));
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _asyncToGenerator(a) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (e, n) {
            var r = a.apply(t, o);
            function _next(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
            }
            function _throw(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'throw', t);
            }
            _next(void 0);
          });
        };
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _setPrototypeOf(t, e) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function _createSuper(n) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var t,
            e = _getPrototypeOf(n);
          return (function _possibleConstructorReturn(t, e) {
            {
              if (e && ('object' === _typeof(e) || 'function' == typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
            }
            return _assertThisInitialized(t);
          })(
            this,
            r
              ? ((t = _getPrototypeOf(this).constructor),
                Reflect.construct(e, arguments, t))
              : e.apply(this, arguments)
          );
        };
      }
      function _assertThisInitialized(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function _getPrototypeOf(t) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var k = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + k++ + '_' + t;
      }
      var y = _classPrivateFieldLooseKey('channels'),
        m = _classPrivateFieldLooseKey('intent'),
        v = _classPrivateFieldLooseKey('session'),
        x = _classPrivateFieldLooseKey('chatbotModule'),
        b = _classPrivateFieldLooseKey('initGetModule'),
        g = _classPrivateFieldLooseKey('initGetChannels'),
        S = _classPrivateFieldLooseKey('initGetIntent'),
        w = _classPrivateFieldLooseKey('initGetChatbotUser'),
        e = (function () {
          !(function _inherits(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && _setPrototypeOf(t, e);
          })(Api, l['default']);
          var e,
            n = _createSuper(Api);
          function Api() {
            var t;
            !(function _classCallCheck(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, Api),
              (t = n.apply(this, arguments)),
              Object.defineProperty(_assertThisInitialized(t), w, {
                value: CH,
              }),
              Object.defineProperty(_assertThisInitialized(t), S, {
                value: BH,
              }),
              Object.defineProperty(_assertThisInitialized(t), g, {
                value: AH,
              }),
              Object.defineProperty(_assertThisInitialized(t), b, {
                value: zH,
              }),
              Object.defineProperty(_assertThisInitialized(t), y, {
                writable: !0,
                value: [],
              }),
              Object.defineProperty(_assertThisInitialized(t), m, {
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(_assertThisInitialized(t), v, {
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(_assertThisInitialized(t), x, {
                writable: !0,
                value: void 0,
              });
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
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(Api, [
              {
                key: 'boot',
                value:
                  ((e = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee(e) {
                      var n, r;
                      return regeneratorRuntime.wrap(
                        function _callee$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), this.setup();
                              case 3:
                                if (
                                  ((this.chatbotUser = e || this.chatbotUser),
                                  this.State.set(
                                    a.default.STATES.IS_INITIALIZED,
                                    !0
                                  ),
                                  this.State.set(
                                    a.default.STATES.HAS_MODULE,
                                    this.module
                                  ),
                                  this.State.set(
                                    a.default.STATES.HAS_CLIENT_USER_ID,
                                    this.chatbotUser
                                  ),
                                  this.State.get(a.default.STATES.IS_LOGGED_IN))
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return (
                                  (r = this.Response.ok({
                                    message:
                                      'Chatbot iframe init: Waiting for login',
                                  })),
                                  t.abrupt('return', Promise.reject(r))
                                );
                              case 10:
                                return (
                                  (t.next = 12),
                                  _classPrivateFieldLooseBase(this, b)[b]()
                                );
                              case 12:
                                return (
                                  (n = t.sent),
                                  (t.next = 15),
                                  _classPrivateFieldLooseBase(this, g)[g](n)
                                );
                              case 15:
                                return (
                                  (t.next = 17),
                                  _classPrivateFieldLooseBase(this, S)[S](n)
                                );
                              case 17:
                                return (
                                  (t.next = 19),
                                  _classPrivateFieldLooseBase(this, w)[w]()
                                );
                              case 19:
                                return (
                                  (_classPrivateFieldLooseBase(this, v)[v] =
                                    new u.default(
                                      n,
                                      a.default.STATES.HAS_USER
                                    )),
                                  (t.next = 22),
                                  _classPrivateFieldLooseBase(this, v)[
                                    v
                                  ].getConversation()
                                );
                              case 22:
                                return (
                                  (r = t.sent),
                                  this.State.set(
                                    a.default.STATES.API_READY,
                                    !0
                                  ),
                                  this.PubSub.emit(a.default.EVENTS.API_READY),
                                  t.abrupt('return', Promise.resolve(r))
                                );
                              case 28:
                                return (
                                  (t.prev = 28),
                                  (t.t0 = t.catch(0)),
                                  this.PubSub.emit(a.default.EVENTS.API_FAIL),
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
                        _callee,
                        this,
                        [[0, 28]]
                      );
                    })
                  )),
                  function boot(t) {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: 'getMeta',
                value: function getMeta() {
                  return _classPrivateFieldLooseBase(this, x)[x].getMeta();
                },
              },
              {
                key: 'getConversation',
                value: function getConversation(t) {
                  return this.State.get(a.default.STATES.CONVERSATION);
                },
              },
              {
                key: 'sendText',
                value: function sendText(t) {
                  return _classPrivateFieldLooseBase(this, v)[v].sendText(t);
                },
              },
              {
                key: 'sendVoice',
                value: function sendVoice(t) {
                  return _classPrivateFieldLooseBase(this, v)[v].sendVoice(t);
                },
              },
              {
                key: 'sendPostBack',
                value: function sendPostBack(t) {
                  return _classPrivateFieldLooseBase(this, v)[v].sendPostBack(
                    t
                  );
                },
              },
              {
                key: 'startConversation',
                value: function startConversation() {
                  return _classPrivateFieldLooseBase(this, v)[
                    v
                  ].sendStartConversation();
                },
              },
              {
                key: 'resetConversation',
                value: function resetConversation() {
                  return _classPrivateFieldLooseBase(this, v)[v].reset();
                },
              },
            ]),
            Api
          );
        })();
      t.default = e;
    },
    './src/libs/iframe.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var a = n('./src/constants.js'),
        r = n('./src/chatbot.js'),
        s = n('./src/utils/iframe.js'),
        i = n('./node_modules/BlueDarwinJS/src/helpers/post-message.js');
      n('./src/dom/custom-elements/cognus-chatbot-button.js');
      function _typeof(t) {
        return (_typeof =
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
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _setPrototypeOf(t, e) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function _createSuper(n) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var t,
            e = _getPrototypeOf(n);
          return (function _possibleConstructorReturn(t, e) {
            {
              if (e && ('object' === _typeof(e) || 'function' == typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
            }
            return _assertThisInitialized(t);
          })(
            this,
            r
              ? ((t = _getPrototypeOf(this).constructor),
                Reflect.construct(e, arguments, t))
              : e.apply(this, arguments)
          );
        };
      }
      function _assertThisInitialized(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function _getPrototypeOf(t) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var o = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + o++ + '_' + t;
      }
      var c = _classPrivateFieldLooseKey('options'),
        n = (function () {
          !(function _inherits(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && _setPrototypeOf(t, e);
          })(iFrame, r['default']);
          var t,
            o = _createSuper(iFrame);
          function iFrame(t, e, n) {
            var r;
            return (
              (function _classCallCheck(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, iFrame),
              (r = o.apply(this, arguments)),
              Object.defineProperty(_assertThisInitialized(r), c, {
                writable: !0,
                value: {},
              }),
              (r.events = { on: i.default.recieve, emit: i.default.send }),
              r
            );
          }
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(iFrame, [
              {
                key: 'render',
                value:
                  ((t = (function _asyncToGenerator(a) {
                    return function () {
                      var t = this,
                        o = arguments;
                      return new Promise(function (e, n) {
                        var r = a.apply(t, o);
                        function _next(t) {
                          asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
                        }
                        function _throw(t) {
                          asyncGeneratorStep(
                            r,
                            e,
                            n,
                            _next,
                            _throw,
                            'throw',
                            t
                          );
                        }
                        _next(void 0);
                      });
                    };
                  })(
                    regeneratorRuntime.mark(function _callee() {
                      var e,
                        n,
                        r = arguments;
                      return regeneratorRuntime.wrap(
                        function _callee$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e =
                                    0 < r.length && void 0 !== r[0]
                                      ? r[0]
                                      : {}),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this.setup()
                                );
                              case 4:
                                if (
                                  ((_classPrivateFieldLooseBase(this, c)[c] =
                                    _classPrivateFieldLooseBase(this, c)[c] ||
                                    e),
                                  this.State.set(
                                    a.default.STATES.IS_INITIALIZED,
                                    !0
                                  ),
                                  this.State.get(a.default.STATES.IS_LOGGED_IN))
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return (
                                  (n = this.Response.ok({
                                    message:
                                      'Chatbot iframe init: Waiting for login',
                                  })),
                                  t.abrupt('return', Promise.reject(n))
                                );
                              case 9:
                                return (
                                  new s.default(this.config).render(e),
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
                        _callee,
                        this,
                        [[1, 13]]
                      );
                    })
                  )),
                  function render() {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: 'listDefaultStyles',
                value: function listDefaultStyles() {
                  return a.default.DEFAULTS.IFRAME_CSS;
                },
              },
              {
                key: 'getIframeElement',
                value: function getIframeElement() {
                  return this.State.get(a.default.STATES.ELEMENT_IFRAME);
                },
              },
            ]),
            iFrame
          );
        })();
      e.default = n;
    },
    './src/models/chatbot-user.js': function (t, e, n) {
      'use strict';
      n.r(e),
        (e.default = function ChatbotUserModel() {
          return Object.assign({}, { avatar: void 0, name: void 0 });
        });
    },
    './src/models/session.js': function (t, e, n) {
      'use strict';
      n.r(e),
        (e.default = function SessionModel() {
          return Object.assign({}, {});
        });
    },
    './src/utils/communication.js': function (t, e, n) {
      'use strict';
      n.r(e);
      function fL(t, e) {
        return r.apply(this, arguments);
      }
      var r,
        s = n('./src/constants.js'),
        i = n('./src/helpers/rest-api/send-text.js'),
        c = n('./src/helpers/rest-api/send-voice.js'),
        d = n('./src/helpers/rest-api/send-post-back.js'),
        u = n('./src/helpers/rest-api/send-reset.js'),
        l = n('./src/helpers/rest-api/send-start-conversation.js'),
        a = n(
          './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
        ),
        f = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        p = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        h = n('./node_modules/BlueDarwinJS/src/services/http.js');
      r = _asyncToGenerator(
        regeneratorRuntime.mark(function _callee6(e, n) {
          var r, o, a;
          return regeneratorRuntime.wrap(
            function _callee6$(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (_classPrivateFieldLooseBase(this, b)[b]()) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt(
                      'return',
                      Promise.reject(Response(1, { message: 'API_NOT_READY' }))
                    );
                  case 2:
                    if (
                      ((r = _classPrivateFieldLooseBase(this, g)[g](
                        _classPrivateFieldLooseBase(this, x)[x](e, n)
                      )),
                      (t.prev = 3),
                      'sendText' === e)
                    )
                      return (t.next = 7), Object(i.default)(n);
                    t.next = 8;
                    break;
                  case 7:
                    o = t.sent;
                  case 8:
                    if ('sendVoice' === e)
                      return (t.next = 11), Object(c.default)(n);
                    t.next = 12;
                    break;
                  case 11:
                    o = t.sent;
                  case 12:
                    if ('sendPostBack' === e)
                      return (t.next = 15), Object(d.default)(n);
                    t.next = 16;
                    break;
                  case 15:
                    o = t.sent;
                  case 16:
                    if ('sendReset' === e)
                      return (t.next = 19), Object(u.default)();
                    t.next = 20;
                    break;
                  case 19:
                    o = t.sent;
                  case 20:
                    if ('sendStartConversation' === e)
                      return (t.next = 23), Object(l.default)(n);
                    t.next = 24;
                    break;
                  case 23:
                    o = t.sent;
                  case 24:
                    return (
                      (o = _classPrivateFieldLooseBase(this, m)[m](o)),
                      (a = this.State.get(y)).push(o),
                      this.State.set(y, a),
                      _classPrivateFieldLooseBase(this, v)[v](o),
                      t.abrupt('return', Promise.resolve(o))
                    );
                  case 32:
                    return (
                      (t.prev = 32),
                      (t.t0 = t.catch(3)),
                      ((a = this.State.get(y))[r.index].failed = !0),
                      this.State.set(y, a),
                      this.PubSub.emit(
                        s.default.EVENTS.CONVERSATION_REPLY_FAIL,
                        { index: r.index, reply: a[r.index] }
                      ),
                      t.abrupt('return', Promise.reject(t.t0))
                    );
                  case 39:
                  case 'end':
                    return t.stop();
                }
            },
            _callee6,
            this,
            [[3, 32]]
          );
        })
      );
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _asyncToGenerator(a) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (e, n) {
            var r = a.apply(t, o);
            function _next(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
            }
            function _throw(t) {
              asyncGeneratorStep(r, e, n, _next, _throw, 'throw', t);
            }
            _next(void 0);
          });
        };
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var o = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + o++ + '_' + t;
      }
      var _,
        y = s.default.STATES.CONVERSATION,
        m = _classPrivateFieldLooseKey('extractConversationFromResponse'),
        v = _classPrivateFieldLooseKey('updateConversationEvent'),
        x = _classPrivateFieldLooseKey('parseDataForConversation'),
        b = _classPrivateFieldLooseKey('middlewareIsApiInitiated'),
        g = _classPrivateFieldLooseKey('middlewareBefore'),
        S = _classPrivateFieldLooseKey('middleware'),
        n = (function () {
          function Communication() {
            return (
              (function _classCallCheck(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, Communication),
              Object.defineProperty(this, S, { value: fL }),
              Object.defineProperty(this, g, { value: _middlewareBefore2 }),
              Object.defineProperty(this, b, {
                value: _middlewareIsApiInitiated2,
              }),
              Object.defineProperty(this, x, {
                value: _parseDataForConversation2,
              }),
              Object.defineProperty(this, v, {
                value: _updateConversationEvent2,
              }),
              Object.defineProperty(this, m, {
                value: _extractConversationFromResponse2,
              }),
              _ ||
                (Object(a.default)([f.default, p.default, h.default], this),
                (_ = this)),
              _
            );
          }
          var t, e, n, r, o;
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(Communication, [
              {
                key: 'sendText',
                value:
                  ((o = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee(e) {
                      return regeneratorRuntime.wrap(
                        function _callee$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  _classPrivateFieldLooseBase(this, S)[S](
                                    'sendText',
                                    e
                                  )
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee,
                        this
                      );
                    })
                  )),
                  function sendText(t) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'sendVoice',
                value:
                  ((r = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee2(e) {
                      return regeneratorRuntime.wrap(
                        function _callee2$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  _classPrivateFieldLooseBase(this, S)[S](
                                    'sendVoice',
                                    e
                                  )
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee2,
                        this
                      );
                    })
                  )),
                  function sendVoice(t) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'sendPostBack',
                value:
                  ((n = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee3(e) {
                      return regeneratorRuntime.wrap(
                        function _callee3$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  _classPrivateFieldLooseBase(this, S)[S](
                                    'sendPostBack',
                                    e
                                  )
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    })
                  )),
                  function sendPostBack(t) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'sendStartConversation',
                value:
                  ((e = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee4() {
                      return regeneratorRuntime.wrap(
                        function _callee4$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  _classPrivateFieldLooseBase(this, S)[S](
                                    'sendStartConversation'
                                  )
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee4,
                        this
                      );
                    })
                  )),
                  function sendStartConversation() {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: 'sendReset',
                value:
                  ((t = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee5() {
                      return regeneratorRuntime.wrap(
                        function _callee5$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  _classPrivateFieldLooseBase(this, S)[S](
                                    'sendReset'
                                  )
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee5,
                        this
                      );
                    })
                  )),
                  function sendReset() {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            Communication
          );
        })();
      function _extractConversationFromResponse2(t) {
        var e;
        try {
          e = t.system ? t : t.result.content;
        } catch (t) {
          e = { text: 'error', type: 'direct_message' };
        }
        return { type: 'output', data: e };
      }
      function _updateConversationEvent2(t) {
        this.PubSub.emit(s.default.EVENTS.CONVERSATION_UPDATE, t);
      }
      function _parseDataForConversation2(t, e) {
        switch (((e = { type: 'input', data: { type: '', content: e } }), t)) {
          case 'sendText':
            e.data.type = 'text';
            break;
          case 'sendPostBack':
            e.data.type = 'postback';
            break;
          case 'sendVoice':
            e.data.type = 'voice';
        }
        return e;
      }
      function _middlewareIsApiInitiated2() {
        return this.State.get(s.default.STATES.API_READY);
      }
      function _middlewareBefore2(t) {
        var e = this.State.get(y) || [];
        return (
          e.push(t),
          this.State.set(y, e),
          _classPrivateFieldLooseBase(this, v)[v](t),
          { index: e.length - 1, conversation: e }
        );
      }
      e.default = n;
    },
    './src/utils/iframe.js': function (t, e, n) {
      'use strict';
      n.r(e);
      var a = n('./src/constants.js'),
        r =
          (n(
            './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-client.js'
          ),
          n(
            './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-user.js'
          ),
          n(
            './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-debug-mode.js'
          ),
          n(
            './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-module-by-id.js'
          ),
          n('./node_modules/BlueDarwinJS/src/services/configuration.js')),
        o = n('./node_modules/BlueDarwinJS/src/services/state.js'),
        s = n('./node_modules/BlueDarwinJS/src/services/response.js'),
        i = n('./node_modules/BlueDarwinJS/src/services/pub-sub.js'),
        c = n(
          './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
        ),
        d = n('./src/dom/custom-elements/cognus-chatbot-button.js');
      function asyncGeneratorStep(t, e, n, r, o, a, s) {
        try {
          var i = t[a](s),
            c = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _defineProperties(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _classPrivateFieldLooseBase(t, e) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t;
        throw new TypeError('attempted to use private field on non-instance');
      }
      var u,
        l = 0;
      function _classPrivateFieldLooseKey(t) {
        return '__private_' + l++ + '_' + t;
      }
      var f = _classPrivateFieldLooseKey('parseIframeStyles'),
        p = _classPrivateFieldLooseKey('injectCustomElement'),
        h = _classPrivateFieldLooseKey('generateIframeUrl'),
        _ = _classPrivateFieldLooseKey('addIframeToDocument'),
        n = (function () {
          function Iframe() {
            !(function _classCallCheck(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, Iframe),
              Object.defineProperty(this, _, { value: _addIframeToDocument2 }),
              Object.defineProperty(this, h, { value: _generateIframeUrl2 }),
              Object.defineProperty(this, p, { value: _injectCustomElement2 }),
              Object.defineProperty(this, f, { value: _parseIframeStyles2 }),
              Object(c.default)(
                [r.default, o.default, s.default, i.default],
                this
              ),
              _classPrivateFieldLooseBase(this, p)[p]();
          }
          var t;
          return (
            (function _createClass(t, e, n) {
              e && _defineProperties(t.prototype, e),
                n && _defineProperties(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 });
            })(Iframe, [
              {
                key: 'render',
                value:
                  ((t = (function _asyncToGenerator(a) {
                    return function () {
                      var t = this,
                        o = arguments;
                      return new Promise(function (e, n) {
                        var r = a.apply(t, o);
                        function _next(t) {
                          asyncGeneratorStep(r, e, n, _next, _throw, 'next', t);
                        }
                        function _throw(t) {
                          asyncGeneratorStep(
                            r,
                            e,
                            n,
                            _next,
                            _throw,
                            'throw',
                            t
                          );
                        }
                        _next(void 0);
                      });
                    };
                  })(
                    regeneratorRuntime.mark(function _callee() {
                      var e,
                        n = arguments;
                      return regeneratorRuntime.wrap(
                        function _callee$(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e =
                                    0 < n.length && void 0 !== n[0]
                                      ? n[0]
                                      : {}),
                                  (t.prev = 1),
                                  u)
                                ) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 5),
                                  _classPrivateFieldLooseBase(this, _)[_](e)
                                );
                              case 5:
                                u = !0;
                              case 6:
                                return t.abrupt(
                                  'return',
                                  this.Response.ok({
                                    message: 'IFRAME_RENDER_SUCCESS',
                                  })
                                );
                              case 9:
                                throw (
                                  ((t.prev = 9),
                                  (t.t0 = t.catch(1)),
                                  this.Response.error({
                                    message: 'IFRAME_RENDER_FAIL',
                                    data: t.t0,
                                  }))
                                );
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        _callee,
                        this,
                        [[1, 9]]
                      );
                    })
                  )),
                  function render() {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            Iframe
          );
        })();
      function _parseIframeStyles2() {
        var e = 1 < arguments.length ? arguments[1] : void 0,
          n = a.default.DEFAULTS.IFRAME_CSS;
        return (
          Object.keys(n).forEach(function (t) {
            e.style[t] = n[t];
          }),
          n
        );
      }
      function _injectCustomElement2() {
        window.customElements.get(a.default.BUTTON_KEY) ||
          window.customElements.define(a.default.BUTTON_KEY, d.default);
      }
      function _generateIframeUrl2(t) {
        var e;
        (t.src = this.Configuration.url.iframe),
          this.State.get(a.default.STATES.APPLICATION_DISPLAY)
            ? ((e = new RegExp('#', 'g')),
              (e = JSON.stringify(
                this.State.get(a.default.STATES.APPLICATION_DISPLAY)
              ).replace(e, '')),
              (t.src += '?display='.concat(e)))
            : this.State.get(a.default.STATES.APPLICATION_DISPLAY);
      }
      function _addIframeToDocument2() {
        var r = this,
          o =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function (t, e) {
          var n = document.createElement('cognus-chatbot-button');
          if ((_classPrivateFieldLooseBase(r, h)[h](n), !n))
            return console.warn(
              r.Response.error({
                message:
                  "Can't add a iframe to document because there's no element",
              })
            );
          _classPrivateFieldLooseBase(r, f)[f](o, n),
            document.body.appendChild(n),
            r.State.set(a.default.STATES.ELEMENT_IFRAME, n.$iframe);
        });
      }
      e.default = n;
    },
  });
});
//# sourceMappingURL=index.production.js.map
