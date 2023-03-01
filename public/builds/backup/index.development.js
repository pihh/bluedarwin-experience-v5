(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define('CognusChatbot', [], factory);
  else if (typeof exports === 'object') exports['CognusChatbot'] = factory();
  else root['CognusChatbot'] = factory();
})(window, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = '';
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(
      (__webpack_require__.s = './src/index.js')
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js':
        /*!*****************************************************************************!*\
  !*** ./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js ***!
  \*****************************************************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          /**
           * @license
           * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
           * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
           * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
           * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
           * Code distributed by Google as part of the polymer project is also
           * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
           */
          (function () {
            'use strict';
            /**
             * Basic flow of the loader process
             *
             * There are 4 flows the loader can take when booting up
             *
             * - Synchronous script, no polyfills needed
             *   - wait for `DOMContentLoaded`
             *   - fire WCR event, as there could not be any callbacks passed to `waitFor`
             *
             * - Synchronous script, polyfills needed
             *   - document.write the polyfill bundle
             *   - wait on the `load` event of the bundle to batch Custom Element upgrades
             *   - wait for `DOMContentLoaded`
             *   - run callbacks passed to `waitFor`
             *   - fire WCR event
             *
             * - Asynchronous script, no polyfills needed
             *   - wait for `DOMContentLoaded`
             *   - run callbacks passed to `waitFor`
             *   - fire WCR event
             *
             * - Asynchronous script, polyfills needed
             *   - Append the polyfill bundle script
             *   - wait for `load` event of the bundle
             *   - batch Custom Element Upgrades
             *   - run callbacks pass to `waitFor`
             *   - fire WCR event
             */

            var polyfillsLoaded = false;
            var whenLoadedFns = [];
            var allowUpgrades = false;
            var flushFn;

            function fireEvent() {
              window.WebComponents.ready = true;
              document.dispatchEvent(
                new CustomEvent('WebComponentsReady', {
                  bubbles: true,
                })
              );
            }

            function batchCustomElements() {
              if (
                window.customElements &&
                customElements.polyfillWrapFlushCallback
              ) {
                customElements.polyfillWrapFlushCallback(function (
                  flushCallback
                ) {
                  flushFn = flushCallback;

                  if (allowUpgrades) {
                    flushFn();
                  }
                });
              }
            }

            function asyncReady() {
              batchCustomElements();
              ready();
            }

            function ready() {
              // bootstrap <template> elements before custom elements
              if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
                HTMLTemplateElement.bootstrap(window.document);
              }

              polyfillsLoaded = true;
              runWhenLoadedFns().then(fireEvent);
            }

            function runWhenLoadedFns() {
              allowUpgrades = false;
              var fnsMap = whenLoadedFns.map(function (fn) {
                return fn instanceof Function ? fn() : fn;
              });
              whenLoadedFns = [];
              return Promise.all(fnsMap)
                .then(function () {
                  allowUpgrades = true;
                  flushFn && flushFn();
                })
                .catch(function (err) {
                  console.error(err);
                });
            }

            window.WebComponents = window.WebComponents || {};
            window.WebComponents.ready = window.WebComponents.ready || false;

            window.WebComponents.waitFor =
              window.WebComponents.waitFor ||
              function (waitFn) {
                if (!waitFn) {
                  return;
                }

                whenLoadedFns.push(waitFn);

                if (polyfillsLoaded) {
                  runWhenLoadedFns();
                }
              };

            window.WebComponents._batchCustomElements = batchCustomElements;
            var name = 'webcomponents-loader.js'; // Feature detect which polyfill needs to be imported.

            var polyfills = [];

            if (
              !(
                'attachShadow' in Element.prototype &&
                'getRootNode' in Element.prototype
              ) ||
              (window.ShadyDOM && window.ShadyDOM.force)
            ) {
              polyfills.push('sd');
            }

            if (!window.customElements || window.customElements.forcePolyfill) {
              polyfills.push('ce');
            }

            var needsTemplate = (function () {
              // no real <template> because no `content` property (IE and older browsers)
              var t = document.createElement('template');

              if (!('content' in t)) {
                return true;
              } // broken doc fragment (older Edge)

              if (!(t.content.cloneNode() instanceof DocumentFragment)) {
                return true;
              } // broken <template> cloning (Edge up to at least version 17)

              var t2 = document.createElement('template');
              t2.content.appendChild(document.createElement('div'));
              t.content.appendChild(t2);
              var clone = t.cloneNode(true);
              return (
                clone.content.childNodes.length === 0 ||
                clone.content.firstChild.content.childNodes.length === 0
              );
            })(); // NOTE: any browser that does not have template or ES6 features
            // must load the full suite of polyfills.

            if (
              !window.Promise ||
              !Array.from ||
              !window.URL ||
              !window.Symbol ||
              needsTemplate
            ) {
              polyfills = ['sd-ce-pf'];
            }

            if (polyfills.length) {
              var url;
              var polyfillFile =
                'bundles/webcomponents-' + polyfills.join('-') + '.js'; // Load it from the right place.

              if (window.WebComponents.root) {
                url = window.WebComponents.root + polyfillFile;
              } else {
                var script = document.querySelector(
                  'script[src*="' + name + '"]'
                ); // Load it from the right place.

                url = script.src.replace(name, polyfillFile);
              }

              var newScript = document.createElement('script');
              newScript.src = url; // if readyState is 'loading', this script is synchronous

              if (document.readyState === 'loading') {
                // make sure custom elements are batched whenever parser gets to the injected script
                newScript.setAttribute(
                  'onload',
                  'window.WebComponents._batchCustomElements()'
                );
                document.write(newScript.outerHTML);
                document.addEventListener('DOMContentLoaded', ready);
              } else {
                newScript.addEventListener('load', function () {
                  asyncReady();
                });
                newScript.addEventListener('error', function () {
                  throw new Error('Could not load polyfill bundle' + url);
                });
                document.head.appendChild(newScript);
              }
            } else {
              // if readyState is 'complete', script is loaded imperatively on a spec-compliant browser, so just fire WCR
              if (document.readyState === 'complete') {
                polyfillsLoaded = true;
                fireEvent();
              } else {
                // this script may come between DCL and load, so listen for both, and cancel load listener if DCL fires
                window.addEventListener('load', ready);
                window.addEventListener('DOMContentLoaded', function () {
                  window.removeEventListener('load', ready);
                  ready();
                });
              }
            }
          })();

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/app-constants.js':
        /*!********************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/app-constants.js ***!
  \********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          const APP_CONSTANTS = {
            DEFAULTS: {
              LANGUAGE: 'en_EN',
              ENCRYPTION: true,
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
            ENVIRONMENT_IDS: {
              development: 3,
              staging: 4,
              production: 5,
            },
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
          /* harmony default export */ __webpack_exports__['default'] =
            APP_CONSTANTS;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/auth/api-login.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/auth/api-login.js ***!
  \*****************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _set_credentials__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./set-credentials */ './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js'
            );
          /* harmony import */ var _set_logged_in_state__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./set-logged-in-state */ './node_modules/BlueDarwinJS/src/helpers/auth/set-logged-in-state.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          // if (!global._babelPolyfill) {
          //   require('babel-polyfill');
          // }

          /**
           * [description]
           * @param  {String[email, password]} loginParams [description]
           * @return {Promise}             [description]
           */

          const apiLogin = async function (
            loginParams,
            http = new _services_http__WEBPACK_IMPORTED_MODULE_4__['default'](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_5__[
              'default'
            ](),
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ](),
            response = new _services_response__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_8__[
              'default'
            ](),
            state = new _services_state__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ]()
          ) {
            try {
              let loginData;
              const email = loginParams[0];
              const password = loginParams[1]; // Get login data from server and decrypt the payload

              loginData = await http.post(
                'letmein',
                {
                  email,
                  password: encryption.encryptString(password),
                },
                {
                  skipEncryption: true,
                  loginDecryption: password,
                  getFullResponse: true,
                }
              ); //@TODO: CHECK THIS BUG - this should de stardardized for development and production

              loginData = loginData.data || loginData; // Set them credentials

              await Object(
                _set_credentials__WEBPACK_IMPORTED_MODULE_1__['default']
              )(loginData, http, encryption, state, storage, response); // Update state for middleware

              Object(
                _set_logged_in_state__WEBPACK_IMPORTED_MODULE_2__['default']
              )(state);
              pubSub.emit(
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].EVENTS
                  .LOGGED_IN
              );
              return response.ok({
                data: {
                  id: loginData.user.id,
                  key: loginData.key,
                  token: loginData.token,
                },
              });
            } catch (ex) {
              pubSub.emit(
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].EVENTS
                  .LOGIN_FAIL
              );
              throw response.error({
                data: ex,
                message: 'ERROR.LOGIN_FAIL',
              });
            }
          };

          /* harmony default export */ __webpack_exports__['default'] =
            apiLogin;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/auth/check-login-type.js':
        /*!************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/auth/check-login-type.js ***!
  \************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _regex_is_email__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../regex/is-email */ './node_modules/BlueDarwinJS/src/helpers/regex/is-email.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );

          const checkLoginType = function (
            firstArgument,
            state = new _services_state__WEBPACK_IMPORTED_MODULE_2__[
              'default'
            ]()
          ) {
            let loginType =
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default']
                .LOGIN_TYPES[1];

            if (
              firstArgument === 'cognus' ||
              Object(_regex_is_email__WEBPACK_IMPORTED_MODULE_1__['default'])(
                firstArgument
              )
            ) {
              loginType =
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default']
                  .LOGIN_TYPES[0];
            }

            state.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .LOGIN_METHOD,
              loginType
            );
            return loginType;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            checkLoginType;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/auth/login-chatbot.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/auth/login-chatbot.js ***!
  \*********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _set_credentials__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./set-credentials */ './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js'
            );
          /* harmony import */ var _set_logged_in_state__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./set-logged-in-state */ './node_modules/BlueDarwinJS/src/helpers/auth/set-logged-in-state.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /* harmony import */ var _device_info_uuid__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ../device-info-uuid */ './node_modules/BlueDarwinJS/src/helpers/device-info-uuid.js'
            );
          // if (!global._babelPolyfill) {
          //   require('babel-polyfill');
          // }

          /**
           * [description]
           * @param  {String[email, password]} loginParams [description]
           * @return {Promise}             [description]
           */

          const loginChatbot = async function (
            loginParams,
            state = new _services_state__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ](),
            http = new _services_http__WEBPACK_IMPORTED_MODULE_4__['default'](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_5__[
              'default'
            ](),
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ](),
            response = new _services_response__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_8__[
              'default'
            ]()
          ) {
            try {
              let loginData; // CHANGES INIT

              /*
    const project = parseInt(loginParams[0]);
    const apiKey = encryption.encryptString(loginParams[1]);
    */

              const channelToken = loginParams[0];
              const apiKey = loginParams[1]; // CHANGES END

              const machineUuid =
                _device_info_uuid__WEBPACK_IMPORTED_MODULE_9__[
                  'default'
                ].machine(); // Get login data from server and decrypt the payload

              loginData = await http.post(
                'let-the-chatbot-in-v2',
                {
                  // START CHANGES
                  // project,
                  channelToken,
                  // END CHANGES
                  apiKey,
                  machineUuid,
                },
                {
                  skipEncryption: true,
                  loginDecryption: loginParams[1],
                  getFullResponse: true,
                }
              ); //@TODO: CHECK THIS BUG - this should de stardardized for development and production

              loginData = loginData.data || loginData; // loginData = encryption.decryptPayload(loginData, loginParams[1], {force: true})
              // Set them credentials

              await Object(
                _set_credentials__WEBPACK_IMPORTED_MODULE_1__['default']
              )(loginData, http, encryption, state, storage, response); // Update state for middleware

              Object(
                _set_logged_in_state__WEBPACK_IMPORTED_MODULE_2__['default']
              )(state);
              pubSub.emit(
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].EVENTS
                  .LOGGED_IN
              );
              return response.ok({
                data: {
                  // START CHANGES
                  module: loginData.module,
                  // END CHANGES
                  key: loginData.key,
                  token: loginData.token,
                },
              });
            } catch (ex) {
              pubSub.emit(
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].EVENTS
                  .LOGIN_FAIL
              );
              throw response.error({
                data: ex,
                message: 'ERROR.LOGIN_FAIL',
              });
            }
          };

          /* harmony default export */ __webpack_exports__['default'] =
            loginChatbot;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/auth/login.js':
        /*!*************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/auth/login.js ***!
  \*************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./api-login */ './node_modules/BlueDarwinJS/src/helpers/auth/api-login.js'
            );
          /* harmony import */ var _set_credentials__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./set-credentials */ './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js'
            );
          /* harmony import */ var _check_login_type__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./check-login-type */ './node_modules/BlueDarwinJS/src/helpers/auth/check-login-type.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../../services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ../../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );

          /**
           * Defines what kind of login should be used calls it
           * @param  {String[]} loginData [description]
           * @return {[Promise]}           [description]
           */

          const login = function (
            loginData,
            state = new _services_state__WEBPACK_IMPORTED_MODULE_4__[
              'default'
            ](),
            http = new _services_http__WEBPACK_IMPORTED_MODULE_6__['default'](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ](),
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_5__[
              'default'
            ](),
            response = new _services_response__WEBPACK_IMPORTED_MODULE_8__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_9__[
              'default'
            ]()
          ) {
            // Login type
            const loginType = Object(
              _check_login_type__WEBPACK_IMPORTED_MODULE_3__['default']
            )(loginData[0], state); // Track state for unit testing and debug

            state.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .LOGIN_METHOD,
              loginType
            ); // Return promises

            if (
              loginType ===
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default']
                .LOGIN_TYPES[0]
            ) {
              return Object(_api_login__WEBPACK_IMPORTED_MODULE_1__['default'])(
                loginData,
                http,
                encryption,
                pubSub,
                response,
                storage,
                state
              );
            }

            return Object(
              _set_credentials__WEBPACK_IMPORTED_MODULE_2__['default']
            )(loginData, http, encryption, state, storage, response);
          };

          /* harmony default export */ __webpack_exports__['default'] = login;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/auth/logout.js':
        /*!**************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/auth/logout.js ***!
  \**************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );

          const logout = function (
            state = new _services_state__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ](),
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_2__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ]()
          ) {
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .IS_LOGGED_IN
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .LOGIN_METHOD
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_USER
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_TOKEN
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_KEY
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .MODEL_INTENT
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .MODEL_MODULE
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .MODEL_CHANNELS
            );
            state.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .MODEL_SESSION
            );
            storage.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STORAGE
                .TOKEN
            );
            storage.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STORAGE.KEY
            );
            storage.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STORAGE
                .OLD_KEY
            );
            storage.delete(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STORAGE
                .USER
            );
            pubSub.emit(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].EVENTS
                .LOGGED_OUT
            );
            return Promise.resolve();
          };

          /* harmony default export */ __webpack_exports__['default'] = logout;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/auth/set-credentials.js ***!
  \***********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );

          /**
           * Set the credentials
           * @param  {String[key, token, user]} credentials
           * @return {Promise}
           */

          const setCredentials = function (
            credentials,
            http = new _services_http__WEBPACK_IMPORTED_MODULE_1__['default'](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ](),
            state = new _services_state__WEBPACK_IMPORTED_MODULE_2__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ](),
            response = new _services_response__WEBPACK_IMPORTED_MODULE_4__[
              'default'
            ]()
          ) {
            credentials = credentials.data || credentials;
            const token = credentials.token;
            const key = credentials.key;
            const user = credentials.user || {};
            encryption.updateKey(key);
            http.updateToken(token);
            state.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_5__['default'].STATES
                .HAS_USER,
              user
            );
            state.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_5__['default'].STATES
                .HAS_TOKEN,
              token
            );
            state.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_5__['default'].STATES
                .HAS_KEY,
              key
            );
            storage.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_5__['default'].STORAGE
                .USER,
              user
            );
            return Promise.resolve(
              response.ok({
                token,
                key,
                user,
              })
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            setCredentials;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/auth/set-logged-in-state.js':
        /*!***************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/auth/set-logged-in-state.js ***!
  \***************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );

          /**
           * Self explanatory
           * @return {undefined} [description]
           */

          const setLoggedInState = function (
            state = new _services_state__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ]()
          ) {
            state.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .IS_LOGGED_IN,
              true
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            setLoggedInState;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/config-objects/config.js':
        /*!************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/config-objects/config.js ***!
  \************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony default export */ __webpack_exports__['default'] = {
            original: {
              environment: 'production',
              language: 'en_EN',
            },
            possible: {
              environment: ['development', 'staging', 'production', 'local'],
              language: ['en_EN'],
            },
          };

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request-body.js':
        /*!***********************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/config-objects/http-request-body.js ***!
  \***********************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony default export */ __webpack_exports__['default'] = {
            skipEncryption: false,
          };

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request.js':
        /*!******************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/config-objects/http-request.js ***!
  \******************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony default export */ __webpack_exports__['default'] = {
            skipEncryption: false,
            loginDecryption: false,
            getFullResponse: false,
          };

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/config-objects/response.js':
        /*!**************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/config-objects/response.js ***!
  \**************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony default export */ __webpack_exports__['default'] = {
            data: false,
            message: false,
          };

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js':
        /*!***********************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js ***!
  \***********************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /**
           * Gets a array or a object, if is array, instanciates
           * the deprendency service, else returns
           * object with several dependencies
           * @param arrayOfDependencies
           * @returns {*}
           */
          const injectDependencies = function (arrayOfDependencies, pointer) {
            arrayOfDependencies.forEach((arg) => {
              let _class;

              try {
                _class = new arg();
              } catch (ex) {
                _class = arg;
              }

              let _className = _class.constructor.name;

              if (_class.constructor.name === 'Object') {
                pointer.Configuration = _class;
                _className = 'Configuration';
              }

              pointer[_className] = _class;
            });
          };

          /* harmony default export */ __webpack_exports__['default'] =
            injectDependencies;
          /*
(function(w){
    var stack = {},
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === '[object Array]';
        };

    function Inject () {
        this.container = {};
    }

    Inject.ERROR_RECURSION = 'Recursive failure : Circular reference for dependency ';
    Inject.ERROR_REGISTRATION = 'Already registered.';
    Inject.ERROR_ARRAY = 'Must pass array.';
    Inject.ERROR_FUNCTION = 'Must pass function to invoke.';
    Inject.ERROR_SERVICE = 'Service does not exist.';

    Inject.prototype.get = function(name) {
        var wrapper = this.container[name];
        if (wrapper) {
            return wrapper();
        }
        throw Inject.ERROR_SERVICE;
    };

    Inject.prototype.invoke = function (fn, deps, instance, name) {
        var i = 0,
            args = [];
        if (stack[name]) {
            throw Inject.ERROR_RECURSION + name + " : " + JSON.stringify(Object.keys(stack));
        }

        stack[name] = instance;
        for (; i < deps.length; i += 1) {
            args.push(this.get(deps[i]));
        }
        delete stack[name];

        return fn.apply(instance, args);
    };

    Inject.prototype.register = function (name, annotatedArray) {
        if (!isArray(annotatedArray)) {
            throw Inject.ERROR_ARRAY;
        }

        if (this.container[name]) {
            throw Inject.ERROR_REGISTRATION;
        }

        if (typeof annotatedArray[annotatedArray.length - 1] !== 'function') {
            throw Inject.ERROR_FUNCTION;
        }

        var _this = this;
        this.container[name] = function () {
            var InjectionInstance = function () {};
            var result = {};
            var instance;
            var fn = annotatedArray[annotatedArray.length - 1],
            var deps = annotatedArray.length === 1 ? (annotatedArray[0].$$deps || []) :
                    annotatedArray.slice(0, annotatedArray.length - 1),
                injected;

            InjectionInstance.prototype = fn.prototype;

            instance = new InjectionInstance();

            injected = _this.invoke(fn, deps, instance, name);

            result = injected || instance;

            _this.container[name] = function () {
                return result;
            };
            return result;
        };
    };

  	function InjectionWrapper(){
   	var ioc = new Inject(), _that = this;
    this.get = ioc.get.bind(ioc);
        this.register = ioc.register.bind(ioc);
        ioc.container['$$Inject'] = function () {
            return _that;
        };
    }

    w.$$Inject = new InjectionWrapper();

 })(window);


function main(){

  const log = console.log;

  function Pistons() {
  	this.action = () => log("The pistons fire up and down.");
    log("Made some pistons.");
  }

  $$Inject.register("pistons", [Pistons]);

   function Engine(pistons) {
  	this.pistons = pistons;
    this.action = () => {
    	this.pistons.action();
      log("The engine goes vroom vroom.");
    };
    log("Made an engine.");
  }

  $$Inject.register("engine", ["pistons", Engine]);

  return {$$Inject};
}

main();
*/

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/device-info-uuid.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/device-info-uuid.js ***!
  \*******************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          var BOTS = [
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
          ];
          var IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');
          var MACHINE_UUID_KEY = 'bluedarwin-chatbot__machine_uuid';

          var uuidv4 = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
              /[xy]/g,
              function (c) {
                var r = (Math.random() * 16) | 0,
                  v = c == 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
              }
            );
          };

          var timeStamp = function () {
            return new Date().getTime();
          };

          var DeviceUUID = function (options) {
            options = options ? options : {};
            var defOptions = {
              version: false,
              language: false,
              platform: true,
              os: true,
              pixelDepth: true,
              colorDepth: true,
              resolution: false,
              isAuthoritative: true,
              silkAccelerated: true,
              isKindleFire: true,
              isDesktop: true,
              isMobile: true,
              isTablet: true,
              isWindows: true,
              isLinux: true,
              isLinux64: true,
              isChromeOS: true,
              isMac: true,
              isiPad: true,
              isiPhone: true,
              isiPod: true,
              isAndroid: true,
              isSamsung: true,
              isSmartTV: true,
              isRaspberry: true,
              isBlackberry: true,
              isTouchScreen: true,
              isOpera: false,
              isIE: false,
              isEdge: false,
              isIECompatibilityMode: false,
              isSafari: false,
              isFirefox: false,
              isWebkit: false,
              isChrome: false,
              isKonqueror: false,
              isOmniWeb: false,
              isSeaMonkey: false,
              isFlock: false,
              isAmaya: false,
              isPhantomJS: false,
              isEpiphany: false,
              source: false,
              cpuCores: false,
            };

            for (var key in options) {
              if (
                options.hasOwnProperty(key) &&
                typeof defOptions[key] !== 'undefined'
              ) {
                defOptions[key] = options[key];
              }
            }

            this.options = defOptions;
            this.version = '1.0.0';
            this._Versions = {
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
            };
            this._Browsers = {
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
            };
            this._OS = {
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
            };
            this._Platform = {
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
            };
            this.DefaultAgent = {
              isAuthoritative: true,
              isMobile: false,
              isTablet: false,
              isiPad: false,
              isiPod: false,
              isiPhone: false,
              isAndroid: false,
              isBlackberry: false,
              isOpera: false,
              isIE: false,
              isEdge: false,
              isIECompatibilityMode: false,
              isSafari: false,
              isFirefox: false,
              isWebkit: false,
              isChrome: false,
              isKonqueror: false,
              isOmniWeb: false,
              isSeaMonkey: false,
              isFlock: false,
              isAmaya: false,
              isPhantomJS: false,
              isEpiphany: false,
              isDesktop: false,
              isWindows: false,
              isLinux: false,
              isLinux64: false,
              isMac: false,
              isChromeOS: false,
              isBada: false,
              isSamsung: false,
              isRaspberry: false,
              isBot: false,
              isCurl: false,
              isAndroidTablet: false,
              isWinJs: false,
              isKindleFire: false,
              isSilk: false,
              isCaptive: false,
              isSmartTV: false,
              isUC: false,
              isTouchScreen: false,
              silkAccelerated: false,
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
              hashInt: function (string) {
                var hash = 0,
                  i,
                  chr,
                  len;

                if (string.length === 0) {
                  return hash;
                }

                for (i = 0, len = string.length; i < len; i++) {
                  chr = string.charCodeAt(i);
                  hash = (hash << 5) - hash + chr;
                  hash |= 0;
                }

                return hash;
              },
              hashMD5: function (string) {
                function rotateLeft(lValue, iShiftBits) {
                  return (
                    (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits))
                  );
                }

                function addUnsigned(lX, lY) {
                  var lX4, lY4, lX8, lY8, lResult;
                  lX8 = lX & 0x80000000;
                  lY8 = lY & 0x80000000;
                  lX4 = lX & 0x40000000;
                  lY4 = lY & 0x40000000;
                  lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);

                  if (lX4 & lY4) {
                    return lResult ^ 0x80000000 ^ lX8 ^ lY8;
                  }

                  if (lX4 | lY4) {
                    if (lResult & 0x40000000) {
                      return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
                    } else {
                      return lResult ^ 0x40000000 ^ lX8 ^ lY8;
                    }
                  } else {
                    return lResult ^ lX8 ^ lY8;
                  }
                }

                function gF(x, y, z) {
                  return (x & y) | (~x & z);
                }

                function gG(x, y, z) {
                  return (x & z) | (y & ~z);
                }

                function gH(x, y, z) {
                  return x ^ y ^ z;
                }

                function gI(x, y, z) {
                  return y ^ (x | ~z);
                }

                function gFF(a, b, c, d, x, s, ac) {
                  a = addUnsigned(
                    a,
                    addUnsigned(addUnsigned(gF(b, c, d), x), ac)
                  );
                  return addUnsigned(rotateLeft(a, s), b);
                }

                function gGG(a, b, c, d, x, s, ac) {
                  a = addUnsigned(
                    a,
                    addUnsigned(addUnsigned(gG(b, c, d), x), ac)
                  );
                  return addUnsigned(rotateLeft(a, s), b);
                }

                function gHH(a, b, c, d, x, s, ac) {
                  a = addUnsigned(
                    a,
                    addUnsigned(addUnsigned(gH(b, c, d), x), ac)
                  );
                  return addUnsigned(rotateLeft(a, s), b);
                }

                function gII(a, b, c, d, x, s, ac) {
                  a = addUnsigned(
                    a,
                    addUnsigned(addUnsigned(gI(b, c, d), x), ac)
                  );
                  return addUnsigned(rotateLeft(a, s), b);
                }

                function convertToWordArray(string) {
                  var lWordCount;
                  var lMessageLength = string.length;
                  var lNumberOfWordsTemp1 = lMessageLength + 8;
                  var lNumberOfWordsTemp2 =
                    (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
                  var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
                  var lWordArray = new Array(lNumberOfWords - 1);
                  var lBytePosition = 0;
                  var lByteCount = 0;

                  while (lByteCount < lMessageLength) {
                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] =
                      lWordArray[lWordCount] |
                      (string.charCodeAt(lByteCount) << lBytePosition);
                    lByteCount++;
                  }

                  lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                  lBytePosition = (lByteCount % 4) * 8;
                  lWordArray[lWordCount] =
                    lWordArray[lWordCount] | (0x80 << lBytePosition);
                  lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                  lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                  return lWordArray;
                }

                function wordToHex(lValue) {
                  var wordToHexValue = '',
                    wordToHexValueTemp = '',
                    lByte,
                    lCount;

                  for (lCount = 0; lCount <= 3; lCount++) {
                    lByte = (lValue >>> (lCount * 8)) & 255;
                    wordToHexValueTemp = '0' + lByte.toString(16);
                    wordToHexValue =
                      wordToHexValue +
                      wordToHexValueTemp.substr(
                        wordToHexValueTemp.length - 2,
                        2
                      );
                  }

                  return wordToHexValue;
                }

                function utf8Encode(string) {
                  string = string.replace(/\r\n/g, '\n');
                  var utftext = '';

                  for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);

                    if (c < 128) {
                      utftext += String.fromCharCode(c);
                    } else if (c > 127 && c < 2048) {
                      utftext += String.fromCharCode((c >> 6) | 192);
                      utftext += String.fromCharCode((c & 63) | 128);
                    } else {
                      utftext += String.fromCharCode((c >> 12) | 224);
                      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                      utftext += String.fromCharCode((c & 63) | 128);
                    }
                  }

                  return utftext;
                }

                var x = [];
                var k, AA, BB, CC, DD, a, b, c, d;
                var S11 = 7,
                  S12 = 12,
                  S13 = 17,
                  S14 = 22;
                var S21 = 5,
                  S22 = 9,
                  S23 = 14,
                  S24 = 20;
                var S31 = 4,
                  S32 = 11,
                  S33 = 16,
                  S34 = 23;
                var S41 = 6,
                  S42 = 10,
                  S43 = 15,
                  S44 = 21;
                string = utf8Encode(string);
                x = convertToWordArray(string);
                a = 0x67452301;
                b = 0xefcdab89;
                c = 0x98badcfe;
                d = 0x10325476;

                for (k = 0; k < x.length; k += 16) {
                  AA = a;
                  BB = b;
                  CC = c;
                  DD = d;
                  a = gFF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
                  d = gFF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
                  c = gFF(c, d, a, b, x[k + 2], S13, 0x242070db);
                  b = gFF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
                  a = gFF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
                  d = gFF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
                  c = gFF(c, d, a, b, x[k + 6], S13, 0xa8304613);
                  b = gFF(b, c, d, a, x[k + 7], S14, 0xfd469501);
                  a = gFF(a, b, c, d, x[k + 8], S11, 0x698098d8);
                  d = gFF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
                  c = gFF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
                  b = gFF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
                  a = gFF(a, b, c, d, x[k + 12], S11, 0x6b901122);
                  d = gFF(d, a, b, c, x[k + 13], S12, 0xfd987193);
                  c = gFF(c, d, a, b, x[k + 14], S13, 0xa679438e);
                  b = gFF(b, c, d, a, x[k + 15], S14, 0x49b40821);
                  a = gGG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
                  d = gGG(d, a, b, c, x[k + 6], S22, 0xc040b340);
                  c = gGG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
                  b = gGG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
                  a = gGG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
                  d = gGG(d, a, b, c, x[k + 10], S22, 0x2441453);
                  c = gGG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
                  b = gGG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
                  a = gGG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
                  d = gGG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
                  c = gGG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
                  b = gGG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
                  a = gGG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
                  d = gGG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
                  c = gGG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
                  b = gGG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
                  a = gHH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
                  d = gHH(d, a, b, c, x[k + 8], S32, 0x8771f681);
                  c = gHH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
                  b = gHH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
                  a = gHH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
                  d = gHH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
                  c = gHH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
                  b = gHH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
                  a = gHH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
                  d = gHH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
                  c = gHH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
                  b = gHH(b, c, d, a, x[k + 6], S34, 0x4881d05);
                  a = gHH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
                  d = gHH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
                  c = gHH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
                  b = gHH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
                  a = gII(a, b, c, d, x[k + 0], S41, 0xf4292244);
                  d = gII(d, a, b, c, x[k + 7], S42, 0x432aff97);
                  c = gII(c, d, a, b, x[k + 14], S43, 0xab9423a7);
                  b = gII(b, c, d, a, x[k + 5], S44, 0xfc93a039);
                  a = gII(a, b, c, d, x[k + 12], S41, 0x655b59c3);
                  d = gII(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
                  c = gII(c, d, a, b, x[k + 10], S43, 0xffeff47d);
                  b = gII(b, c, d, a, x[k + 1], S44, 0x85845dd1);
                  a = gII(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
                  d = gII(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
                  c = gII(c, d, a, b, x[k + 6], S43, 0xa3014314);
                  b = gII(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
                  a = gII(a, b, c, d, x[k + 4], S41, 0xf7537e82);
                  d = gII(d, a, b, c, x[k + 11], S42, 0xbd3af235);
                  c = gII(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
                  b = gII(b, c, d, a, x[k + 9], S44, 0xeb86d391);
                  a = addUnsigned(a, AA);
                  b = addUnsigned(b, BB);
                  c = addUnsigned(c, CC);
                  d = addUnsigned(d, DD);
                }

                var temp =
                  wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
                return temp.toLowerCase();
              },
            };
            this.Agent = {};

            this.getBrowser = function (string) {
              switch (true) {
                case this._Browsers.Edge.test(string):
                  this.Agent.isEdge = true;
                  return 'Edge';

                case this._Browsers.PhantomJS.test(string):
                  this.Agent.isPhantomJS = true;
                  return 'PhantomJS';

                case this._Browsers.Konqueror.test(string):
                  this.Agent.isKonqueror = true;
                  return 'Konqueror';

                case this._Browsers.Amaya.test(string):
                  this.Agent.isAmaya = true;
                  return 'Amaya';

                case this._Browsers.Epiphany.test(string):
                  this.Agent.isEpiphany = true;
                  return 'Epiphany';

                case this._Browsers.SeaMonkey.test(string):
                  this.Agent.isSeaMonkey = true;
                  return 'SeaMonkey';

                case this._Browsers.Flock.test(string):
                  this.Agent.isFlock = true;
                  return 'Flock';

                case this._Browsers.OmniWeb.test(string):
                  this.Agent.isOmniWeb = true;
                  return 'OmniWeb';

                case this._Browsers.Opera.test(string):
                  this.Agent.isOpera = true;
                  return 'Opera';

                case this._Browsers.Chromium.test(string):
                  this.Agent.isChrome = true;
                  return 'Chromium';

                case this._Browsers.Chrome.test(string):
                  this.Agent.isChrome = true;
                  return 'Chrome';

                case this._Browsers.Safari.test(string):
                  this.Agent.isSafari = true;
                  return 'Safari';

                case this._Browsers.WinJs.test(string):
                  this.Agent.isWinJs = true;
                  return 'WinJs';

                case this._Browsers.IE.test(string):
                  this.Agent.isIE = true;
                  return 'IE';

                case this._Browsers.PS3.test(string):
                  return 'ps3';

                case this._Browsers.PSP.test(string):
                  return 'psp';

                case this._Browsers.Firefox.test(string):
                  this.Agent.isFirefox = true;
                  return 'Firefox';

                case this._Browsers.UC.test(string):
                  this.Agent.isUC = true;
                  return 'UCBrowser';

                default:
                  // If the UA does not start with Mozilla guess the user agent.
                  if (
                    string.indexOf('Mozilla') !== 0 &&
                    /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)
                  ) {
                    this.Agent.isAuthoritative = false;
                    return RegExp.$1;
                  }

                  return 'unknown';
              }
            };

            this.getBrowserVersion = function (string) {
              var regex;

              switch (this.Agent.browser) {
                case 'Edge':
                  if (this._Versions.Edge.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'PhantomJS':
                  if (this._Versions.PhantomJS.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'Chrome':
                  if (this._Versions.Chrome.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'Chromium':
                  if (this._Versions.Chromium.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'Safari':
                  if (this._Versions.Safari.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'Opera':
                  if (this._Versions.Opera.test(string)) {
                    return RegExp.$1 ? RegExp.$1 : RegExp.$2;
                  }

                  break;

                case 'Firefox':
                  if (this._Versions.Firefox.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'WinJs':
                  if (this._Versions.WinJs.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'IE':
                  if (this._Versions.IE.test(string)) {
                    return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                  }

                  break;

                case 'ps3':
                  if (this._Versions.Ps3.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'psp':
                  if (this._Versions.Psp.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'Amaya':
                  if (this._Versions.Amaya.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'Epiphany':
                  if (this._Versions.Epiphany.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'SeaMonkey':
                  if (this._Versions.SeaMonkey.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'Flock':
                  if (this._Versions.Flock.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'OmniWeb':
                  if (this._Versions.OmniWeb.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                case 'UCBrowser':
                  if (this._Versions.UC.test(string)) {
                    return RegExp.$1;
                  }

                  break;

                default:
                  if (this.Agent.browser !== 'unknown') {
                    regex = new RegExp(
                      this.Agent.browser + '[\\/ ]([\\d\\w\\.\\-]+)',
                      'i'
                    );

                    if (regex.test(string)) {
                      return RegExp.$1;
                    }
                  }
              }
            };

            this.getOS = function (string) {
              switch (true) {
                case this._OS.WindowsVista.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows Vista';

                case this._OS.Windows7.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows 7';

                case this._OS.Windows8.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows 8';

                case this._OS.Windows81.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows 8.1';

                case this._OS.Windows10.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows 10.0';

                case this._OS.Windows2003.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows 2003';

                case this._OS.WindowsXP.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows XP';

                case this._OS.Windows2000.test(string):
                  this.Agent.isWindows = true;
                  return 'Windows 2000';

                case this._OS.WindowsPhone8.test(string):
                  return 'Windows Phone 8';

                case this._OS.Linux64.test(string):
                  this.Agent.isLinux = true;
                  this.Agent.isLinux64 = true;
                  return 'Linux 64';

                case this._OS.Linux.test(string):
                  this.Agent.isLinux = true;
                  return 'Linux';

                case this._OS.ChromeOS.test(string):
                  this.Agent.isChromeOS = true;
                  return 'Chrome OS';

                case this._OS.Wii.test(string):
                  return 'Wii';

                case this._OS.PS3.test(string):
                  return 'Playstation';

                case this._OS.PSP.test(string):
                  return 'Playstation';

                case this._OS.OSXCheetah.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Cheetah';

                case this._OS.OSXPuma.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Puma';

                case this._OS.OSXJaguar.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Jaguar';

                case this._OS.OSXPanther.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Panther';

                case this._OS.OSXTiger.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Tiger';

                case this._OS.OSXLeopard.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Leopard';

                case this._OS.OSXSnowLeopard.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Snow Leopard';

                case this._OS.OSXLion.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Lion';

                case this._OS.OSXMountainLion.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Mountain Lion';

                case this._OS.OSXMavericks.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Mavericks';

                case this._OS.OSXYosemite.test(string):
                  this.Agent.isMac = true;
                  return 'OS X Yosemite';

                case this._OS.OSXElCapitan.test(string):
                  this.Agent.isMac = true;
                  return 'OS X El Capitan';

                case this._OS.OSXSierra.test(string):
                  this.Agent.isMac = true;
                  return 'macOS Sierra';

                case this._OS.Mac.test(string):
                  this.Agent.isMac = true;
                  return 'OS X';

                case this._OS.iPad.test(string):
                  this.Agent.isiPad = true;
                  return string.match(this._OS.iPad)[0].replace('_', '.');

                case this._OS.iPhone.test(string):
                  this.Agent.isiPhone = true;
                  return string.match(this._OS.iPhone)[0].replace('_', '.');

                case this._OS.Bada.test(string):
                  this.Agent.isBada = true;
                  return 'Bada';

                case this._OS.Curl.test(string):
                  this.Agent.isCurl = true;
                  return 'Curl';

                default:
                  return 'unknown';
              }
            };

            this.getPlatform = function (string) {
              switch (true) {
                case this._Platform.Windows.test(string):
                  return 'Microsoft Windows';

                case this._Platform.WindowsPhone.test(string):
                  this.Agent.isWindowsPhone = true;
                  return 'Microsoft Windows Phone';

                case this._Platform.Mac.test(string):
                  return 'Apple Mac';

                case this._Platform.Curl.test(string):
                  return 'Curl';

                case this._Platform.Android.test(string):
                  this.Agent.isAndroid = true;
                  return 'Android';

                case this._Platform.Blackberry.test(string):
                  this.Agent.isBlackberry = true;
                  return 'Blackberry';

                case this._Platform.Linux.test(string):
                  return 'Linux';

                case this._Platform.Wii.test(string):
                  return 'Wii';

                case this._Platform.Playstation.test(string):
                  return 'Playstation';

                case this._Platform.iPad.test(string):
                  this.Agent.isiPad = true;
                  return 'iPad';

                case this._Platform.iPod.test(string):
                  this.Agent.isiPod = true;
                  return 'iPod';

                case this._Platform.iPhone.test(string):
                  this.Agent.isiPhone = true;
                  return 'iPhone';

                case this._Platform.Samsung.test(string):
                  this.Agent.isiSamsung = true;
                  return 'Samsung';

                default:
                  return 'unknown';
              }
            };

            this.testCompatibilityMode = function () {
              var ua = this;

              if (this.Agent.isIE) {
                if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
                  var tridentVersion = parseInt(RegExp.$1, 10);
                  var version = parseInt(ua.Agent.version, 10);

                  if (version === 7 && tridentVersion === 7) {
                    ua.Agent.isIECompatibilityMode = true;
                    ua.Agent.version = 11.0;
                  }

                  if (version === 7 && tridentVersion === 6) {
                    ua.Agent.isIECompatibilityMode = true;
                    ua.Agent.version = 10.0;
                  }

                  if (version === 7 && tridentVersion === 5) {
                    ua.Agent.isIECompatibilityMode = true;
                    ua.Agent.version = 9.0;
                  }

                  if (version === 7 && tridentVersion === 4) {
                    ua.Agent.isIECompatibilityMode = true;
                    ua.Agent.version = 8.0;
                  }
                }
              }
            };

            this.testSilk = function () {
              var ua = this;

              switch (true) {
                case new RegExp('silk', 'gi').test(ua.Agent.source):
                  this.Agent.isSilk = true;
                  break;

                default:
              }

              if (/Silk-Accelerated=true/gi.test(ua.Agent.source)) {
                this.Agent.SilkAccelerated = true;
              }

              return this.Agent.isSilk ? 'Silk' : false;
            };

            this.testKindleFire = function () {
              var ua = this;

              switch (true) {
                case /KFOT/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire';

                case /KFTT/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HD';

                case /KFJWI/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HD 8.9';

                case /KFJWA/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HD 8.9 4G';

                case /KFSOWI/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HD 7';

                case /KFTHWI/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HDX 7';

                case /KFTHWA/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HDX 7 4G';

                case /KFAPWI/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HDX 8.9';

                case /KFAPWA/gi.test(ua.Agent.source):
                  this.Agent.isKindleFire = true;
                  return 'Kindle Fire HDX 8.9 4G';

                default:
                  return false;
              }
            };

            this.testCaptiveNetwork = function () {
              var ua = this;

              switch (true) {
                case /CaptiveNetwork/gi.test(ua.Agent.source):
                  ua.Agent.isCaptive = true;
                  ua.Agent.isMac = true;
                  ua.Agent.platform = 'Apple Mac';
                  return 'CaptiveNetwork';

                default:
                  return false;
              }
            };

            this.testMobile = function testMobile() {
              var ua = this;

              switch (true) {
                case ua.Agent.isWindows:
                case ua.Agent.isLinux:
                case ua.Agent.isMac:
                case ua.Agent.isChromeOS:
                  ua.Agent.isDesktop = true;
                  break;

                case ua.Agent.isAndroid:
                case ua.Agent.isSamsung:
                  ua.Agent.isMobile = true;
                  ua.Agent.isDesktop = false;
                  break;

                default:
              }

              switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isiPod:
                case ua.Agent.isiPhone:
                case ua.Agent.isBada:
                case ua.Agent.isBlackberry:
                case ua.Agent.isAndroid:
                case ua.Agent.isWindowsPhone:
                  ua.Agent.isMobile = true;
                  ua.Agent.isDesktop = false;
                  break;

                default:
              }

              if (/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isMobile = true;
                ua.Agent.isDesktop = false;
              }
            };

            this.testTablet = function testTablet() {
              var ua = this;

              switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isAndroidTablet:
                case ua.Agent.isKindleFire:
                  ua.Agent.isTablet = true;
                  break;
              }

              if (/tablet/i.test(ua.Agent.source)) {
                ua.Agent.isTablet = true;
              }
            };

            this.testNginxGeoIP = function testNginxGeoIP(headers) {
              var ua = this;
              Object.keys(headers).forEach(function (key) {
                if (/^GEOIP/i.test(key)) {
                  ua.Agent.geoIp[key] = headers[key];
                }
              });
            };

            this.testBot = function testBot() {
              var ua = this;
              var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());

              if (isBot) {
                ua.Agent.isBot = isBot[1];
              } else if (!ua.Agent.isAuthoritative) {
                // Test unauthoritative parse for `bot` in UA to flag for bot
                ua.Agent.isBot = /bot/i.test(ua.Agent.source);
              }
            };

            this.testSmartTV = function testBot() {
              var ua = this;
              var isSmartTV = new RegExp(
                'smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv',
                'gi'
              ).exec(ua.Agent.source.toLowerCase());

              if (isSmartTV) {
                ua.Agent.isSmartTV = isSmartTV[1];
              }
            };

            this.testAndroidTablet = function testAndroidTablet() {
              var ua = this;

              if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isAndroidTablet = true;
              }
            };

            this.testTouchSupport = function () {
              var ua = this;
              ua.Agent.isTouchScreen =
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0;
            };

            this.getLaguage = function () {
              var ua = this;
              ua.Agent.language = (
                navigator.language ||
                navigator.userLanguage ||
                navigator.browserLanguage ||
                navigator.systemLanguage ||
                ''
              ).toLowerCase();
            };

            this.getColorDepth = function () {
              var ua = this;
              ua.Agent.colorDepth = screen.colorDepth || -1;
            };

            this.getScreenResolution = function () {
              var ua = this;
              ua.Agent.resolution = [screen.availWidth, screen.availHeight];
            };

            this.getPixelDepth = function () {
              var ua = this;
              ua.Agent.pixelDepth = screen.pixelDepth || -1;
            };

            this.getCPU = function () {
              var ua = this;
              ua.Agent.cpuCores = navigator.hardwareConcurrency || -1;
            };

            this.reset = function reset() {
              var ua = this;

              for (var key in ua.DefaultAgent) {
                if (ua.DefaultAgent.hasOwnProperty(key)) {
                  ua.Agent[key] = ua.DefaultAgent[key];
                }
              }

              return ua;
            };

            this.parse = function get(source) {
              source = source || navigator.userAgent;
              var ua = new DeviceUUID();
              ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
              ua.Agent.os = ua.getOS(ua.Agent.source);
              ua.Agent.platform = ua.getPlatform(ua.Agent.source);
              ua.Agent.browser = ua.getBrowser(ua.Agent.source);
              ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
              ua.testBot();
              ua.testSmartTV();
              ua.testMobile();
              ua.testAndroidTablet();
              ua.testTablet();
              ua.testCompatibilityMode();
              ua.testSilk();
              ua.testKindleFire();
              ua.testCaptiveNetwork();
              ua.testTouchSupport();
              ua.getLaguage();
              ua.getColorDepth();
              ua.getPixelDepth();
              ua.getScreenResolution();
              ua.getCPU();
              return ua.Agent;
            };

            this.get = function (customData) {
              var pref = 'a',
                du = this.parse();
              var dua = [];

              for (var key in this.options) {
                if (
                  this.options.hasOwnProperty(key) &&
                  this.options[key] === true
                ) {
                  dua.push(du[key]);
                }
              }

              if (customData) {
                dua.push(customData);
              }

              if (!this.options.resolution && du.isMobile) {
                dua.push(du.resolution);
              } // 8, 9, a, b

              pref = 'b';
              var tmpUuid = du.hashMD5(dua.join(':'));
              var uuid = [
                tmpUuid.slice(0, 8),
                tmpUuid.slice(8, 12),
                '4' + tmpUuid.slice(12, 15),
                pref + tmpUuid.slice(15, 18),
                tmpUuid.slice(20),
              ];
              return uuid.join('-');
            };

            this.Agent = this.DefaultAgent;
            return this;
          };

          const deviceInfoUuid = {
            info() {
              return new DeviceUUID().parse();
            },

            machine() {
              var machineUuidKey = localStorage.getItem(MACHINE_UUID_KEY);
              if (machineUuidKey) return machineUuidKey;
              machineUuidKey =
                new DeviceUUID().get() + '_' + timeStamp() + '_' + uuidv4();
              localStorage.setItem(MACHINE_UUID_KEY, machineUuidKey);
              return machineUuidKey;
            },
          };
          /* harmony default export */ __webpack_exports__['default'] =
            deviceInfoUuid;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/encryption/decrypt-payload.js':
        /*!*****************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/encryption/decrypt-payload.js ***!
  \*****************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! lodash.isobject */ './node_modules/lodash.isobject/index.js'
            );
          /* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              lodash_isobject__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var base_encryption__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! base-encryption */ './node_modules/base-encryption/index.js'
            );
          /* harmony import */ var base_encryption__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              base_encryption__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _middleware_will_encrypt__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./middleware-will-encrypt */ './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js'
            );

          /**
           * Tries to decrypt a payload with
           * @param  {CognusResponseObject} payload [description]
           * @return {Object|JSONAPI}
           */

          function decrypt(payload, key) {
            const decrypted =
              base_encryption__WEBPACK_IMPORTED_MODULE_1___default.a.twoWayDecrypt(
                payload.cognus || payload.data || payload.error || payload, // in case of errors
                key
              );
            return JSON.parse(decrypted);
          }

          const decryptPayload = function (
            payload,
            pointerKey = '',
            pointerOldKey = '',
            pointerShouldEncrypt,
            customKey
          ) {
            if (
              !Object(
                _middleware_will_encrypt__WEBPACK_IMPORTED_MODULE_2__['default']
              )(pointerShouldEncrypt)
            )
              return payload;
            if (
              !lodash_isobject__WEBPACK_IMPORTED_MODULE_0___default()(
                payload
              ) ||
              (!payload.cognus && !payload.error && !payload.data)
            )
              throw {
                message: 'ERROR.INVALID_COGNUS_RESPONSE_OBJECT',
              };

            if (payload.error) {
              return payload;
            }

            try {
              // First attempt - with current key
              // Custom key will never be stored
              return decrypt(payload, customKey || pointerKey);
            } catch (ex) {
              // Second Attempt - with old key
              try {
                return decrypt(payload, customKey || pointerOldKey);
              } catch (ex) {
                throw {
                  data: ex,
                  message: 'ERROR.FAILED_TO_DECRYPT',
                };
              }
            }
          };

          /* harmony default export */ __webpack_exports__['default'] =
            decryptPayload;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-payload.js':
        /*!*****************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-payload.js ***!
  \*****************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var base_encryption__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! base-encryption */ './node_modules/base-encryption/index.js'
            );
          /* harmony import */ var base_encryption__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              base_encryption__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _middleware_will_encrypt__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./middleware-will-encrypt */ './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js'
            );

          /**
           * Encrypts a payload in order to be consumable with our API
           * @param  {@TODO} payload [description]
           * @param {Pointer} key
           * @return {Object|CognusResponse} {"cognus":"encrypted string"}
           */

          const encryptPayload = function (
            payload,
            pointerKey,
            pointerShouldEncrypt
          ) {
            if (
              !Object(
                _middleware_will_encrypt__WEBPACK_IMPORTED_MODULE_1__['default']
              )(pointerShouldEncrypt)
            )
              return payload;
            return {
              cognus:
                base_encryption__WEBPACK_IMPORTED_MODULE_0___default.a.twoWayEncrypt(
                  payload,
                  pointerKey
                ),
            };
          };

          /* harmony default export */ __webpack_exports__['default'] =
            encryptPayload;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-string.js':
        /*!****************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-string.js ***!
  \****************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var base_encryption__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! base-encryption */ './node_modules/base-encryption/index.js'
            );
          /* harmony import */ var base_encryption__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              base_encryption__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _middleware_will_encrypt__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./middleware-will-encrypt */ './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js'
            );

          const encryptString = function (str, pointerShouldEncrypt) {
            if (
              Object(
                _middleware_will_encrypt__WEBPACK_IMPORTED_MODULE_1__['default']
              )(pointerShouldEncrypt)
            ) {
              return base_encryption__WEBPACK_IMPORTED_MODULE_0___default.a.oneWayEncrypt(
                str
              );
            }

            return str;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            encryptString;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js':
        /*!*************************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/encryption/middleware-will-encrypt.js ***!
  \*************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /**
           * Middleware function that defines if a payload should be encrypted
           * @param {Pointer} pointerInstance
           * @param {Pointer} pointerShouldEncrypt
           * @returns {Boolean}
           */
          const middlewareWillEncrypt = function (
            pointerShouldEncrypt = false
          ) {
            return pointerShouldEncrypt;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            middlewareWillEncrypt;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/encryption/update-key.js':
        /*!************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/encryption/update-key.js ***!
  \************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );

          const updateKey = function (
            newKey,
            scope = {
              key: '',
              oldKey: '',
            },
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ]()
          ) {
            scope.oldKey = scope.key;
            scope.key = newKey;
            storage.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STORAGE
                .OLD_KEY,
              scope.oldKey
            );
            storage.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STORAGE
                .KEY,
              scope.key
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            updateKey;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/extend-and-keep-structure.js':
        /*!****************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/extend-and-keep-structure.js ***!
  \****************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /**
           * Returns a object with only the data required for the model
           * @param {Object|Model} model
           * @param {Object} data
           * @return {Object|Model}
           *
           */
          const extendAndKeepStructure = function (model, data) {
            const updatedModel = {};
            Object.keys(model).forEach((key) => {
              updatedModel[key] = data[key] || model[key];
            });
            return updatedModel;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            extendAndKeepStructure;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/get-chatbot-user-id.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/get-chatbot-user-id.js ***!
  \**********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./uuid */ './node_modules/BlueDarwinJS/src/helpers/uuid.js'
            );

          const getChatBotUserId = function (
            state = new _services_state__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ]()
          ) {
            const userId = state.get(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_USER
            ).id;
            let clientUserId = state.get(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_CLIENT_USER_ID
            );

            if (!userId) {
              throw 'To get a chatbot user, you need a valid user with id';
            }

            if (!clientUserId) {
              clientUserId = Object(
                _uuid__WEBPACK_IMPORTED_MODULE_2__['default']
              )();
              state.set(
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                  .HAS_CLIENT_USER_ID,
                clientUserId
              );
            }

            return `cb_${userId}-${clientUserId}`;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getChatBotUserId;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/build-url.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/build-url.js ***!
  \*****************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_configuration__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../services/configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );

          /**
           * Builds a url
           * @param  {String} route         [description]
           * @param  {String} pointerApiUrl [internal pointer of class]
           * @return {String}               [description]
           */

          const buildUrl = function (
            route,
            configuration = new _services_configuration__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ]()
          ) {
            return `${configuration.url.api}/${route
              .split('/')
              .filter((el) => el !== '')
              .join('/')}`;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            buildUrl;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/check-response-for-key-and-token.js':
        /*!****************************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/check-response-for-key-and-token.js ***!
  \****************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _update_token__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./update-token */ './node_modules/BlueDarwinJS/src/helpers/http/update-token.js'
            );
          /* harmony import */ var _services_validator__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/validator */ './node_modules/BlueDarwinJS/src/services/validator.js'
            );
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /**
           * If url has key and/or token it should update encryptionKey and
           * Http token
           * @param  {HttpResponse} decryptedResponse [description]
           * @return {Undefined}                   [description]
           */

          const checkResponseForKeyAndToken = function (
            decryptedPayload,
            pointerToken = {
              token: '',
            },
            validator = new _services_validator__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_2__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ]()
          ) {
            const token = decryptedPayload.token;
            const key = decryptedPayload.key;
            if (
              token &&
              validator.isFunction(
                _update_token__WEBPACK_IMPORTED_MODULE_0__['default']
              )
            )
              Object(_update_token__WEBPACK_IMPORTED_MODULE_0__['default'])(
                token,
                pointerToken,
                storage
              );
            if (key) encryption.updateKey(key);
          };

          /* harmony default export */ __webpack_exports__['default'] =
            checkResponseForKeyAndToken;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/event-token-negotiation-required.js':
        /*!****************************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/event-token-negotiation-required.js ***!
  \****************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );

          // @TODO: discover why pubsub isn't valid injection

          const eventTokenNegotiationRequired = function (
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ]()
          ) {
            pubSub.emit(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].EVENTS
                .TOKEN_NEGOTIATION_REQUIRED
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            eventTokenNegotiationRequired;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/get-headers.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/get-headers.js ***!
  \*******************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /**
           * Gets http headers
           * @param  {Private variable token} pointerToken
           * @return {HeadersObject}
           */
          const getHeaders = function (
            pointerToken = {
              token: '',
            }
          ) {
            return {
              'Content-Type': 'application/json',
              'x-access-token': pointerToken.token,
            };
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getHeaders;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/handle-fail.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/handle-fail.js ***!
  \*******************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );

          /**
           * Decrypts and handles a failed request
           * @param  {HttpError} ex [description]
           * @return {Response}
           */

          const handleFail = function (
            ex,
            response = new _services_response__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ]()
          ) {
            try {
              // if can decrypt
              const data = encryption.decryptPayload(ex);
              return response.error({
                data,
                message: 'ERROR.HTTP_REQUEST_FAIL',
              });
            } catch (_ex) {
              return response.error({
                data: _ex,
                message: 'ERROR.FAILED_TO_DECRYPT',
              });
            }
          };

          /* harmony default export */ __webpack_exports__['default'] =
            handleFail;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/handle-request.js':
        /*!**********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/handle-request.js ***!
  \**********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          // Simple proxy for unit testing fetch API
          // If on node testing environment use node-fetch , unable to do this by using rewire so
          // ended up like this. A more elegant solution would be awesome.
          // if (!global._babelPolyfill) {
          //   require('babel-polyfill');
          // }
          // Fix for unit testing
          let _fetch;

          if (!_fetch) {
            try {
              _fetch = fetch;
            } catch (ex) {
              try {
                _fetch = __webpack_require__(
                  /*! node-fetch */ './node_modules/node-fetch/browser.js'
                );
              } catch (_ex) {
                // ... Silence is golden
              }
            }
          }

          const handleRequest = async function (url, params) {
            // Create a fetch API request
            let response = await _fetch(url, params); // "Wait" to get json from response

            const data = await response.json();
            return {
              response,
              data,
            };
          };

          /* harmony default export */ __webpack_exports__['default'] =
            handleRequest;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/handle-response.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/handle-response.js ***!
  \***********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _check_response_for_key_and_token__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./check-response-for-key-and-token */ './node_modules/BlueDarwinJS/src/helpers/http/check-response-for-key-and-token.js'
            );
          /* harmony import */ var _event_token_negotiation_required__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./event-token-negotiation-required */ './node_modules/BlueDarwinJS/src/helpers/http/event-token-negotiation-required.js'
            );
          /* harmony import */ var _handle_request__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./handle-request */ './node_modules/BlueDarwinJS/src/helpers/http/handle-request.js'
            );
          /* harmony import */ var _services_validator__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../services/validator */ './node_modules/BlueDarwinJS/src/services/validator.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          // if (!global._babelPolyfill) {
          //   require("babel-polyfill");
          // }

          /**
           * Handles a response:
           * Awaits to fetch,
           * Decryots payloas
           * Checks for token and key to update them if nessed
           * Returns handled data
           * @param  {string} url
           * @param  {payload} url
           * @return {Object}             [description]
           */

          const configObject = {
            loginDecryption: false,
            getFullResponse: false,
          };

          const handleResponse = async function (
            response,
            data,
            config = configObject,
            pointerToken = {
              token: '',
            },
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ](),
            validator = new _services_validator__WEBPACK_IMPORTED_MODULE_4__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_5__[
              'default'
            ](),
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ]()
          ) {
            try {
              // Decript data from response and
              data = config.loginDecryption
                ? encryption.decryptPayload(data, config.loginDecryption)
                : encryption.decryptPayload(data); // Update Token and key if needed

              Object(
                _check_response_for_key_and_token__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )(data, pointerToken, validator, encryption, storage); // check if sends full response
              // Tries data.data (API), data.error (APIError) and then dataOnly for orchestrator

              data = config.getFullResponse
                ? data
                : data.data || data.error || data; // If success return handled data

              if (response.status === 200) {
                return data;
              } // Requires negotiation

              if (response.status === 401 || response.status === 403) {
                Object(
                  _event_token_negotiation_required__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ]
                )(pubSub);
              } // Failed with 500

              if (response.status === 500) {
                //@todo
              } // @todo: See why then data fails aint going decrypted

              const fail = data.cognus ? encryption.decryptPayload(data) : data;
              throw fail; // Return handled data
            } catch (ex) {
              throw ex;
            }
          };

          /* harmony default export */ __webpack_exports__['default'] =
            handleResponse;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/parse-body.js':
        /*!******************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/parse-body.js ***!
  \******************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _config_objects_http_request_body__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../config-objects/http-request-body */ './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request-body.js'
            );
          /**
           * Handles body
           * Checks for skipEncryption flag
           * JSON.stringifies the body
           * @param  {Object} payload - payload to be encrypted and stringified
           * @param  {Object} config - configurations for this request
           * @return {String}
           */

          const parseBody = function (
            payload = {},
            config = _config_objects_http_request_body__WEBPACK_IMPORTED_MODULE_1__,
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ]()
          ) {
            if (!config.skipEncryption)
              payload = encryption.encryptPayload(payload);
            return JSON.stringify(payload);
          };

          /* harmony default export */ __webpack_exports__['default'] =
            parseBody;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/request-get.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/request-get.js ***!
  \*******************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _build_url__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./build-url */ './node_modules/BlueDarwinJS/src/helpers/http/build-url.js'
            );
          /* harmony import */ var _handle_response__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./handle-response */ './node_modules/BlueDarwinJS/src/helpers/http/handle-response.js'
            );
          /* harmony import */ var _handle_fail__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./handle-fail */ './node_modules/BlueDarwinJS/src/helpers/http/handle-fail.js'
            );
          /* harmony import */ var _get_headers__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./get-headers */ './node_modules/BlueDarwinJS/src/helpers/http/get-headers.js'
            );
          /* harmony import */ var _services_configuration__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../../services/configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );
          /* harmony import */ var _services_validator__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../services/validator */ './node_modules/BlueDarwinJS/src/services/validator.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ../../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /* harmony import */ var _handle_request__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./handle-request */ './node_modules/BlueDarwinJS/src/helpers/http/handle-request.js'
            );
          // if (!global._babelPolyfill) {
          //   require("babel-polyfill");
          // }

          /**
 * GET request
 * @param  {String} route         [description]
 * @param  {Object} [config={
    getFullResponse: false, // Returns only data.
  }]
 * @param  {Pointer} pointerApiUrl [description]
 * @param  {Pointer} pointerToken  [description]
 * @return {Promise}               [description]
 */

          const requestGet = async function (
            route,
            config,
            pointerToken = {
              token: '',
            },
            configuration = new _services_configuration__WEBPACK_IMPORTED_MODULE_4__[
              'default'
            ](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ](),
            response = new _services_response__WEBPACK_IMPORTED_MODULE_8__[
              'default'
            ](),
            validator = new _services_validator__WEBPACK_IMPORTED_MODULE_5__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_9__[
              'default'
            ](),
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ]()
          ) {
            try {
              // Setup the URL
              let url = Object(
                _build_url__WEBPACK_IMPORTED_MODULE_0__['default']
              )(route, configuration); // Setup the parameters

              let params = {
                method: 'GET',
                headers: Object(
                  _get_headers__WEBPACK_IMPORTED_MODULE_3__['default']
                )(pointerToken),
              }; // "Wait" for response

              let { response, data } = await Object(
                _handle_request__WEBPACK_IMPORTED_MODULE_10__['default']
              )(url, params);
              return Object(
                _handle_response__WEBPACK_IMPORTED_MODULE_1__['default']
              )(
                response,
                data,
                config,
                pointerToken,
                encryption,
                validator,
                storage,
                pubSub
              );
            } catch (ex) {
              throw Object(
                _handle_fail__WEBPACK_IMPORTED_MODULE_2__['default']
              )(ex, response, encryption);
            }
          };

          /* harmony default export */ __webpack_exports__['default'] =
            requestGet;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/request-post.js':
        /*!********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/request-post.js ***!
  \********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _build_url__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./build-url */ './node_modules/BlueDarwinJS/src/helpers/http/build-url.js'
            );
          /* harmony import */ var _handle_response__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./handle-response */ './node_modules/BlueDarwinJS/src/helpers/http/handle-response.js'
            );
          /* harmony import */ var _handle_fail__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./handle-fail */ './node_modules/BlueDarwinJS/src/helpers/http/handle-fail.js'
            );
          /* harmony import */ var _parse_body__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./parse-body */ './node_modules/BlueDarwinJS/src/helpers/http/parse-body.js'
            );
          /* harmony import */ var _get_headers__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./get-headers */ './node_modules/BlueDarwinJS/src/helpers/http/get-headers.js'
            );
          /* harmony import */ var _services_configuration__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../../services/configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );
          /* harmony import */ var _services_encryption__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../../services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _config_objects_http_request__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ../config-objects/http-request */ './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request.js'
            );
          /* harmony import */ var _services_validator__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ../../services/validator */ './node_modules/BlueDarwinJS/src/services/validator.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! ../../services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var _handle_request__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! ./handle-request */ './node_modules/BlueDarwinJS/src/helpers/http/handle-request.js'
            );
          // if (!global._babelPolyfill) {
          //   require('babel-polyfill');
          // }

          /**
   * Post request
   * @param  {String} route       [description]
   * @param  {Object} data        [body]
   * @param  {Object} [config={
       skipEncryption: false,
       loginDecryption: false,
       getFullResponse: false, // Returns only data.
    }]
   * @param {Pointer} pointerApiUrl
   * @param {Pointer} pointerToken
   * @return {[type]}             [description]
   */

          const requestPost = async function (
            route,
            _data,
            config = _config_objects_http_request__WEBPACK_IMPORTED_MODULE_8__,
            pointerToken,
            configuration = new _services_configuration__WEBPACK_IMPORTED_MODULE_5__[
              'default'
            ](),
            encryption = new _services_encryption__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ](),
            response = new _services_response__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ](),
            validator = new _services_validator__WEBPACK_IMPORTED_MODULE_9__[
              'default'
            ](),
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_10__[
              'default'
            ](),
            pubSub = new _services_pub_sub__WEBPACK_IMPORTED_MODULE_11__[
              'default'
            ]()
          ) {
            try {
              // Setup the URL
              let url = Object(
                _build_url__WEBPACK_IMPORTED_MODULE_0__['default']
              )(route, configuration); // Setup the parameters

              let params = {
                method: 'POST',
                headers: Object(
                  _get_headers__WEBPACK_IMPORTED_MODULE_4__['default']
                )(pointerToken),
                body: Object(
                  _parse_body__WEBPACK_IMPORTED_MODULE_3__['default']
                )(_data, config, encryption),
              }; // "Wait" for response

              let { response, data } = await Object(
                _handle_request__WEBPACK_IMPORTED_MODULE_12__['default']
              )(url, params); // handle the response

              return Object(
                _handle_response__WEBPACK_IMPORTED_MODULE_1__['default']
              )(
                response,
                data,
                config,
                pointerToken,
                encryption,
                validator,
                storage,
                pubSub
              );
            } catch (ex) {
              // Handle the exception
              throw Object(
                _handle_fail__WEBPACK_IMPORTED_MODULE_2__['default']
              )(ex, response, encryption);
            }
          };

          /* harmony default export */ __webpack_exports__['default'] =
            requestPost;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/http/update-token.js':
        /*!********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/http/update-token.js ***!
  \********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );

          /**
           * Updates and stores x-access-token
           * @param  {String} newToken     [description]
           * @param  {InternalPoiner} pointerToken [description]
           * @return {Undefined}              [description]
           */

          const updateToken = function (
            newToken,
            pointer = {
              token: '',
            },
            storage = new _services_storage__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ]()
          ) {
            pointer.token = newToken;
            storage.set(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STORAGE
                .TOKEN,
              newToken
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            updateToken;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/post-message.js':
        /*!***************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/post-message.js ***!
  \***************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );

          const _getPostMessageTargetOrigin = function () {
            // @TODO
            return '*';
          };

          const send = function (
            event = '',
            data = {},
            state = new _services_state__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ](),
            response = new _services_response__WEBPACK_IMPORTED_MODULE_2__[
              'default'
            ]()
          ) {
            const element = state.get(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .ELEMENT_IFRAME
            );
            if (!element)
              return console.warn(
                response.ok({
                  message: "Can't send postback events if no element is found",
                })
              );
            element.contentWindow.postMessage(
              JSON.parse(
                JSON.stringify({
                  cognusEvent: {
                    event,
                    data,
                  },
                })
              ),
              _getPostMessageTargetOrigin()
            );
          };

          const recieve = function () {
            //@TODO
          };

          const PostMessage = {
            send,
            recieve,
          };
          /* harmony default export */ __webpack_exports__['default'] =
            PostMessage;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-debug-mode.js':
        /*!*************************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-debug-mode.js ***!
  \*************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _post_message__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../post-message */ './node_modules/BlueDarwinJS/src/helpers/post-message.js'
            );

          const iframeSetDebugMode = function (
            state = new _services_state__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ]()
          ) {
            const event = 'setDebugMode';
            _post_message__WEBPACK_IMPORTED_MODULE_2__['default'].send(
              event,
              state.get(
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                  .IS_IFRAME_IN_DEBUG_MODE
              )
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            iframeSetDebugMode;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-module-by-id.js':
        /*!***************************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-module-by-id.js ***!
  \***************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _post_message__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../post-message */ './node_modules/BlueDarwinJS/src/helpers/post-message.js'
            );
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /*
const APP_CONSTANTS = require("../../app-constants");

const PostMessage = require("../post-message");
const State = require("../../services/state");



const action = function() {
  PostMessage.send(event, State.get(APP_CONSTANTS.STATES.HAS_MODULE));
};

module.exports = action;
*/

          const iframeSetModuleById = function (
            state = new _services_state__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ]()
          ) {
            const event = 'setModuleById';
            _post_message__WEBPACK_IMPORTED_MODULE_1__['default'].send(
              event,
              state.get(
                _app_constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                  .HAS_MODULE
              )
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            iframeSetModuleById;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-client.js':
        /*!***********************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-client.js ***!
  \***********************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _post_message__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../post-message */ './node_modules/BlueDarwinJS/src/helpers/post-message.js'
            );
          /* harmony import */ var _extend_and_keep_structure__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../extend-and-keep-structure */ './node_modules/BlueDarwinJS/src/helpers/extend-and-keep-structure.js'
            );

          const Model = {
            token: 'login.token',
            userId: 'login.user.id',
            key: 'login.key',
            user: 'JSON.stringify(login.user)',
          };

          const iframeSetupClient = function (
            state = new _services_state__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ]()
          ) {
            const event = 'setupClient';
            const token = state.get(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_TOKEN
            );
            const userId = state.get(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_USER
            ).id;
            const key = state.get(
              _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                .HAS_KEY
            );
            const user = JSON.stringify(
              state.get(
                _app_constants__WEBPACK_IMPORTED_MODULE_0__['default'].STATES
                  .HAS_USER
              ) || {}
            );
            const data = {
              token,
              userId,
              key,
              user,
            };
            _post_message__WEBPACK_IMPORTED_MODULE_2__['default'].send(
              event,
              Object(
                _extend_and_keep_structure__WEBPACK_IMPORTED_MODULE_3__[
                  'default'
                ]
              )(Model, data)
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            iframeSetupClient;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-user.js':
        /*!*********************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-user.js ***!
  \*********************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _post_message__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../post-message */ './node_modules/BlueDarwinJS/src/helpers/post-message.js'
            );
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );

          const iframeSetupUser = function (
            state = new _services_state__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ]()
          ) {
            const id = state.get(
              _app_constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                .HAS_CLIENT_USER_ID
            );
            const event = 'setupUser';
            _post_message__WEBPACK_IMPORTED_MODULE_1__['default'].send(event, {
              id,
            });
          };

          /* harmony default export */ __webpack_exports__['default'] =
            iframeSetupUser;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/regex/is-email.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/regex/is-email.js ***!
  \*****************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          //const regex = (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]);
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          const isEmail = function (email) {
            return regex.test(email);
          };

          /* harmony default export */ __webpack_exports__['default'] = isEmail;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/search-object-path.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/search-object-path.js ***!
  \*********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          const defaultConfig = {
            returnType: 'PATH', // PATH || UNDEFINED
          };

          const searchOnjectPath = function (
            object = {},
            path = '',
            config = defaultConfig
          ) {
            const splitPath = path.split('.');
            let currentObject = object;

            for (let i = 0; i < splitPath.length; i++) {
              const currentPath = splitPath[i];
              const testNode = currentObject[currentPath];

              if (testNode) {
                currentObject = testNode;
                continue;
              }

              return defaultConfig.returnType === 'PATH' ? path : undefined;
            }

            return currentObject;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            searchOnjectPath;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js':
        /*!***************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js ***!
  \***************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var _get_chatbot_user_id__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./get-chatbot-user-id */ './node_modules/BlueDarwinJS/src/helpers/get-chatbot-user-id.js'
            );
          /* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! lodash.isobject */ './node_modules/lodash.isobject/index.js'
            );
          /* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              lodash_isobject__WEBPACK_IMPORTED_MODULE_3__
            );

          const _buildPayload = function (
            input,
            config = {},
            state = new _services_state__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ]()
          ) {
            const payload = {
              auth: {
                channel_token: state.get(
                  _app_constants__WEBPACK_IMPORTED_MODULE_1__['default'].STATES
                    .CHANNEL_TOKEN
                ),
                client_user_id: Object(
                  _get_chatbot_user_id__WEBPACK_IMPORTED_MODULE_2__['default']
                )(state),
                stage:
                  _app_constants__WEBPACK_IMPORTED_MODULE_1__['default']
                    .ENVIRONMENT_IDS[
                    state.get(
                      _app_constants__WEBPACK_IMPORTED_MODULE_1__['default']
                        .STATES.ENVIRONMENT
                    )
                  ],
              },
              context_variables: {
                extracted_entities: [],
                actions: {
                  close_session: {
                    enabled: false,
                  },
                },
              },
              input,
            };

            if (config.logout) {
              payload.context_variables.actions.close_session.enabled = true;
            }

            return payload;
          };
          /**
           * Returns a object with only the data required for the model
           * @param {Object|Model} model
           * @param {Object} data
           * @return {Object|Model}
           */

          const setOrchestratorPayload = {
            v3: {
              text: function (
                text,
                state = new _services_state__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ]()
              ) {
                return _buildPayload(
                  {
                    text: text,
                  },
                  {},
                  state
                );
              },
              voice: function (
                voice,
                state = new _services_state__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ]()
              ) {
                return _buildPayload(
                  {
                    voice: voice,
                  },
                  {},
                  state
                );
              },
              postBack: function (
                postback,
                state = new _services_state__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ]()
              ) {
                if (
                  !lodash_isobject__WEBPACK_IMPORTED_MODULE_3___default()(
                    postback
                  )
                )
                  postback = {
                    name: null,
                    label: null,
                    type: null,
                    value: null,
                    argType: null,
                  };
                postback.type = postback.argType;
                delete postback.argType;
                return _buildPayload(
                  {
                    postback: postback,
                  },
                  {},
                  state
                );
              },
              logout: function (
                state = new _services_state__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ]()
              ) {
                return _buildPayload(
                  {},
                  {
                    logout: true,
                  },
                  state
                );
              },
            },
          };
          /* harmony default export */ __webpack_exports__['default'] =
            setOrchestratorPayload;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/uuid.js':
        /*!*******************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/uuid.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          const uuid = __webpack_require__(
            /*! uuid/v4 */ './node_modules/uuid/v4.js'
          );

          /* harmony default export */ __webpack_exports__['default'] = uuid;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/validators/array-contains-function.js':
        /*!*************************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/validators/array-contains-function.js ***!
  \*************************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _is_equal_function__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./is-equal-function */ './node_modules/BlueDarwinJS/src/helpers/validators/is-equal-function.js'
            );

          const arrayContainsFunction = function (array, fn) {
            if (!Array.isArray(array)) return false;

            for (let i = 0; i < array.length; i++) {
              if (
                Object(
                  _is_equal_function__WEBPACK_IMPORTED_MODULE_0__['default']
                )(array[i], fn)
              )
                return true;
            }

            return false;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            arrayContainsFunction;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/validators/get-function-content.js':
        /*!**********************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/validators/get-function-content.js ***!
  \**********************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          const getFunctionContent = function (functionStr) {
            const separator = ')'; // First part of function will be function xxx = ()

            return functionStr.split(separator).splice(1).join(separator);
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getFunctionContent;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/helpers/validators/is-equal-function.js':
        /*!*******************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/helpers/validators/is-equal-function.js ***!
  \*******************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! lodash.isfunction */ './node_modules/lodash.isfunction/index.js'
            );
          /* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              lodash_isfunction__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _get_function_content__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./get-function-content */ './node_modules/BlueDarwinJS/src/helpers/validators/get-function-content.js'
            );

          const isEqualFunction = function (a, b) {
            if (
              !lodash_isfunction__WEBPACK_IMPORTED_MODULE_0___default()(a) ||
              !lodash_isfunction__WEBPACK_IMPORTED_MODULE_0___default()(b)
            ) {
              return false;
            } // Get only the content of the function

            return (
              Object(
                _get_function_content__WEBPACK_IMPORTED_MODULE_1__['default']
              )(a.toString()) ===
              Object(
                _get_function_content__WEBPACK_IMPORTED_MODULE_1__['default']
              )(b.toString())
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            isEqualFunction;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/prototypes/extend-configuration.js':
        /*!**************************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/prototypes/extend-configuration.js ***!
  \**************************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          // if (!Object.prototype.extendDefault) {
          //   Object.prototype.extendDefaults = function(defaults) {
          //     Object.keys(defaults).forEach(key => {
          //       if (!this[key]) this[key] = defaults[key];
          //     });
          //   };
          //   return this;
          // }
          // Note, this is not a prototype yet but will be in future
          const extendConfiguration = function (obj, configuration) {
            Object.keys(configuration).forEach((key) => {
              if (!obj[key]) obj[key] = configuration[key];
            });
            return obj;
          };

          /* harmony default export */ __webpack_exports__['default'] =
            extendConfiguration;

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/auth.js':
        /*!********************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/auth.js ***!
  \********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Auth;
            }
          );
          /* harmony import */ var _helpers_auth_login__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../helpers/auth/login */ './node_modules/BlueDarwinJS/src/helpers/auth/login.js'
            );
          /* harmony import */ var _helpers_auth_login_chatbot__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../helpers/auth/login-chatbot */ './node_modules/BlueDarwinJS/src/helpers/auth/login-chatbot.js'
            );
          /* harmony import */ var _helpers_auth_logout__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../helpers/auth/logout */ './node_modules/BlueDarwinJS/src/helpers/auth/logout.js'
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var _encryption__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );

          class Auth extends ___WEBPACK_IMPORTED_MODULE_3__['default'] {
            constructor() {
              super(
                _state__WEBPACK_IMPORTED_MODULE_4__['default'],
                _http__WEBPACK_IMPORTED_MODULE_7__['default'],
                _encryption__WEBPACK_IMPORTED_MODULE_6__['default'],
                _http__WEBPACK_IMPORTED_MODULE_7__['default'],
                _pub_sub__WEBPACK_IMPORTED_MODULE_5__['default'],
                _response__WEBPACK_IMPORTED_MODULE_8__['default'],
                _storage__WEBPACK_IMPORTED_MODULE_9__['default']
              );
            }

            login(loginParams = []) {
              return Object(
                _helpers_auth_login__WEBPACK_IMPORTED_MODULE_0__['default']
              )(
                loginParams,
                this.State,
                this.Http,
                this.Encryption,
                this.PubSub,
                this.Response,
                this.Storage
              );
            }

            loginChatbot(loginParams = []) {
              return Object(
                _helpers_auth_login_chatbot__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )(
                loginParams,
                this.State,
                this.Http,
                this.Encryption,
                this.PubSub,
                this.Response,
                this.Storage
              );
            }

            logout() {
              return Object(
                _helpers_auth_logout__WEBPACK_IMPORTED_MODULE_2__['default']
              )(this.State, this.PubSub, this.Storage);
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/configuration.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/configuration.js ***!
  \*****************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Configuration;
            }
          );
          /* harmony import */ var _helpers_config_objects_config__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../helpers/config-objects/config */ './node_modules/BlueDarwinJS/src/helpers/config-objects/config.js'
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );

          const defaultConfiguration = {
            environment:
              _helpers_config_objects_config__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ].original.environment,
            url: {
              api: '',
              iframe: '',
            },
            encryption: true,
            language:
              _helpers_config_objects_config__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ].original.language,
          };
          let config;
          class Configuration extends ___WEBPACK_IMPORTED_MODULE_1__[
            'default'
          ] {
            constructor(_config = {}) {
              super(...arguments);

              if (!config) {
                Object.keys(_config).forEach((key) => {
                  const configObjectKey =
                    _helpers_config_objects_config__WEBPACK_IMPORTED_MODULE_0__[
                      'default'
                    ].original[key];
                  const configObjectValidConfigs =
                    _helpers_config_objects_config__WEBPACK_IMPORTED_MODULE_0__[
                      'default'
                    ].possible[key];

                  if (
                    configObjectKey &&
                    configObjectValidConfigs.indexOf(_config[key]) > -1
                  ) {
                    defaultConfiguration[key] = _config[key];
                  }
                });

                switch (defaultConfiguration.environment) {
                  case 'development':
                    defaultConfiguration.encryption = false;
                    defaultConfiguration.url.api =
                      'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_dev/default/api';
                    defaultConfiguration.url.iframe =
                      'https://bluedarwin-chatbot-iframedev.eu-de.mybluemix.net/';
                    break;

                  case 'local':
                    defaultConfiguration.encryption = false;
                    defaultConfiguration.url.api =
                      'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_dev/default/api';
                    defaultConfiguration.url.iframe = 'http://localhost:4201';
                    break;

                  case 'staging':
                    defaultConfiguration.encryption = true;
                    defaultConfiguration.url.api =
                      'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_staging/default/api';
                    defaultConfiguration.url.iframe =
                      'https://bluedarwin-chatbot-iframestaging.eu-de.mybluemix.net/';
                    break;

                  case 'production':
                    defaultConfiguration.encryption = true;
                    defaultConfiguration.url.api =
                      'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_prod/default/api';
                    defaultConfiguration.url.iframe =
                      'https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/';
                    break;
                } //defaultConfiguration.url.api = "http://localhost:8080/api"

                config = defaultConfiguration;
                Object.freeze(defaultConfiguration);
                Object.freeze(config);
              }

              return config;
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/encryption.js':
        /*!**************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/encryption.js ***!
  \**************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Encryption;
            }
          );
          /* harmony import */ var _helpers_encryption_encrypt_string__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../helpers/encryption/encrypt-string */ './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-string.js'
            );
          /* harmony import */ var _helpers_encryption_update_key__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../helpers/encryption/update-key */ './node_modules/BlueDarwinJS/src/helpers/encryption/update-key.js'
            );
          /* harmony import */ var _helpers_encryption_encrypt_payload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../helpers/encryption/encrypt-payload */ './node_modules/BlueDarwinJS/src/helpers/encryption/encrypt-payload.js'
            );
          /* harmony import */ var _helpers_encryption_decrypt_payload__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../helpers/encryption/decrypt-payload */ './node_modules/BlueDarwinJS/src/helpers/encryption/decrypt-payload.js'
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );
          /* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /**
           * @name BlueDarwin Project: Encryption
           * @description: Handles one and two way encription of data, the function names are preety much explanatory, no
           *    need to go deeper on that queston
           * @method encryptString
           *    @param {String} string
           *    @return {String} encrypted string
           * @method encryptPayload
           *    @param {Object} payload
           *    @param {String} cypher
           *    @return {String}
           *  @method decryptPayload
           *    @param {String} encryptedPayload
           *    @param {String} cypher
           *    @return {Object} payload
           */

          // privateScope is a pointer that can be updated by the class

          let privateScope = {
            key: '',
            oldKey: '',
          };
          class Encryption extends ___WEBPACK_IMPORTED_MODULE_4__['default'] {
            constructor() {
              super(
                _configuration__WEBPACK_IMPORTED_MODULE_5__['default'],
                _storage__WEBPACK_IMPORTED_MODULE_6__['default']
              );
            }
            /**
             * Encrypts a string with our base encryption
             * @param  {String} str [description]
             * @return {String}     [description]
             */

            encryptString(str) {
              return Object(
                _helpers_encryption_encrypt_string__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ]
              )(str, this.Configuration.encryption);
            }

            encryptPayload(payload) {
              return Object(
                _helpers_encryption_encrypt_payload__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ]
              )(payload, privateScope.key, this.Configuration.encryption);
            }
            /**
       * Encrypts a payload in order to be consumable with our API
       * @param  {@TODO} payload [description]
       * @return {Object|CognusResponse} {"cognus":"encrypted string"}
       *
       encryptPayload(payload) {
          if (!this.#middlewareWillEncript()) return payload;
            return {
            cognus: BlueDarwinBaseEncryption.twoWayEncrypt(payload, this.#key)
          };
        }
       /**
       * Tries to decrypt a payload with
       * @param  {CognusResponseObject} payload [description]
       * @return {Object|JSONAPI}
       */

            decryptPayload(payload, customKey) {
              return Object(
                _helpers_encryption_decrypt_payload__WEBPACK_IMPORTED_MODULE_3__[
                  'default'
                ]
              )(
                payload,
                privateScope.key,
                privateScope.oldKey,
                this.Configuration.encryption,
                customKey
              );
            }
            /**
             * Updates old key and sets new key
             * @param  {UUID} newKey [description]
             * @return {Undefined}        [description]
             */

            updateKey(newKey) {
              Object(
                _helpers_encryption_update_key__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )(newKey, (privateScope = privateScope), this.Storage);
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/http.js':
        /*!********************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/http.js ***!
  \********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Http;
            }
          );
          /* harmony import */ var _helpers_http_request_get__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../helpers/http/request-get */ './node_modules/BlueDarwinJS/src/helpers/http/request-get.js'
            );
          /* harmony import */ var _helpers_http_request_post__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../helpers/http/request-post */ './node_modules/BlueDarwinJS/src/helpers/http/request-post.js'
            );
          /* harmony import */ var _helpers_http_update_token__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../helpers/http/update-token */ './node_modules/BlueDarwinJS/src/helpers/http/update-token.js'
            );
          /* harmony import */ var _helpers_config_objects_http_request__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../helpers/config-objects/http-request */ './node_modules/BlueDarwinJS/src/helpers/config-objects/http-request.js'
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );
          /* harmony import */ var _encryption__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./validator */ './node_modules/BlueDarwinJS/src/services/validator.js'
            );
          /* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./storage */ './node_modules/BlueDarwinJS/src/services/storage.js'
            );
          /* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );

          // Decoratotors

          /**
           * Http Handler:
           * Builds url
           * Adds and updates x-access-token
           * Adds headers to all requests
           * Encrypt and stringify payload
           * Decrypt Payload
           * Middlewares:
           *  Update key and token
           *  Handle http fail 500
           *  Handle http fail 403 and 401
           *  Is isntanciated
           * PubSub Events:
           *
           * @public post - sends post request
           * @public get - sends get request
           * @public updateToken - updates x-access-token
           * @public setup - runs once and defines environment
           */

          const privateScope = {
            token: '',
          };
          class Http extends ___WEBPACK_IMPORTED_MODULE_4__['default'] {
            constructor() {
              super(
                _configuration__WEBPACK_IMPORTED_MODULE_5__['default'],
                _encryption__WEBPACK_IMPORTED_MODULE_6__['default']
              ),
                _response__WEBPACK_IMPORTED_MODULE_7__['default'],
                _storage__WEBPACK_IMPORTED_MODULE_9__['default'],
                _pub_sub__WEBPACK_IMPORTED_MODULE_10__['default'],
                _validator__WEBPACK_IMPORTED_MODULE_8__['default'];
            } // GET REQUEST

            get(
              route = '',
              config = _helpers_config_objects_http_request__WEBPACK_IMPORTED_MODULE_3__
            ) {
              return Object(
                _helpers_http_request_get__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ]
              )(
                route,
                config,
                privateScope,
                this.Configuration,
                this.Encryption,
                this.Response,
                this.Validator,
                this.Storage,
                this.PubSub
              );
            } // POST REQUEST

            post(
              route = '',
              params = {},
              config = _helpers_config_objects_http_request__WEBPACK_IMPORTED_MODULE_3__
            ) {
              return Object(
                _helpers_http_request_post__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]
              )(
                route,
                params,
                config,
                privateScope,
                this.Configuration,
                this.Encryption,
                this.Response,
                this.Validator,
                this.Storage,
                this.PubSub
              );
            } // UPDATE X-ACCESS-TOKEN

            updateToken(newToken = '') {
              return Object(
                _helpers_http_update_token__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ]
              )(newToken, privateScope, this.Storage);
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/index.js':
        /*!*********************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/index.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Service;
            }
          );
          /* harmony import */ var _helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../helpers/dependencies/inject-dependencies */ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
            );
          /**
           * Service is singleton and injects dependencies on his parent class
           * @type {{}}
           */

          const instances = {};
          class Service {
            constructor() {
              const name = this.constructor.name;

              if (!instances[name]) {
                instances[name] = this; // Inject dependencies

                /*
      [...arguments].forEach(arg => {
        const _class = new arg();
        let _className = _class.constructor.name;
        if (_class.constructor.name === "Object") {
          instances.Configuration = _class;
          _className = "Configuration";
        }
        instances[name][_className] = _class;
      });
      */

                Object(
                  _helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]
                )([...arguments], instances[name]);

                if (
                  instances.Configuration &&
                  !instances.Configuration.environment
                ) {
                  if (instances[name].Configuration)
                    instances.Configuration = instances[name].Configuration;
                }
              }

              return instances[name];
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/pub-sub.js':
        /*!***********************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/pub-sub.js ***!
  \***********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return PubSub;
            }
          );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./validator */ './node_modules/BlueDarwinJS/src/services/validator.js'
            );
          /**
           * @name BlueDarwin Project: PubSub
           * @description: Very simple pubsub to subscribe to events and run functions when they happen
           * @note THIS IS A SINGLETON, SINCE I DON'T WANT MULTIPLE INSTANCES OF PUBSUBS
           */

          const _events = {};
          class PubSub extends ___WEBPACK_IMPORTED_MODULE_0__['default'] {
            constructor() {
              super(_validator__WEBPACK_IMPORTED_MODULE_1__['default']);
            }
            /**
             * @name_on
             * @desc Creates a array of callbacks for a given event name. Will add unique functions
             *  validates if callback is a function, if callback exists on current event
             * @param {String} eventName
             * @param {Function} callback
             * @return {Void}
             * @public
             *
             */

            on(eventName = '*', callback) {
              if (
                !this.Validator.isFunction(callback) ||
                (_events[eventName] &&
                  this.Validator.containsFunction(_events[eventName], callback))
              )
                return;
              _events[eventName] = _events[eventName] || this.reset(eventName);

              _events[eventName].push(callback);
            }
            /**
             * @name off
             * @desc Removes a callback from a event
             * @param {String} eventName
             * @param {Function} callback
             * @return {Void}
             * @public
             *
             */

            off(eventName = '*', callback) {
              if (_events[eventName] && Array.isArray(_events[eventName])) {
                for (let i = 0; i < _events[eventName].length; i++) {
                  if (_events[eventName][i] === callback) {
                    _events[eventName].splice(i, 1);

                    break;
                  }
                }
              }
            }
            /**
             * @name emit
             * @desc debugging only
             * @param {String} eventName
             * @param {Object|String} data
             * @public
             *
             */

            emit(eventName = '*', data) {
              if (_events[eventName]) {
                _events[eventName].forEach((callback) => {
                  callback(data);
                });
              }
            }
            /**
             * @name reset
             * @desc Removes all callbacks from a event
             * @param {String} eventName
             * @param {Function} callback
             * @return {Void}
             * @public
             *
             */

            reset(eventName = '*') {
              let reset = [];
              _events[eventName] = reset;
              return reset;
            }
            /**
             * Get all events
             * @return {[type]} [description]
             */

            getEvents() {
              return _events;
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/response.js':
        /*!************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/response.js ***!
  \************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Response;
            }
          );
          /* harmony import */ var _helpers_config_objects_response__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../helpers/config-objects/response */ './node_modules/BlueDarwinJS/src/helpers/config-objects/response.js'
            );
          /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./index */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./translate */ './node_modules/BlueDarwinJS/src/services/translate.js'
            );
          /**
           * Simple Function to standardize function responses
           * @param  {Enum[0,1,2]} statusIndex
           * @param  {Any} info - response success data
           * @return {[Response]}
           */

          const availableStatus = ['OK', 'WARN', 'FAIL'];

          const buildResponse = function (index, info, Translate) {
            const status = availableStatus[index];
            const data = info.data;
            const message = Translate.instant(info.message);
            return {
              status,
              data,
              message,
            };
          };

          class Response extends _index__WEBPACK_IMPORTED_MODULE_1__[
            'default'
          ] {
            constructor() {
              super(_translate__WEBPACK_IMPORTED_MODULE_2__['default']);
            }

            ok(
              info = _helpers_config_objects_response__WEBPACK_IMPORTED_MODULE_0__
            ) {
              return buildResponse(0, info, this.Translate);
            }

            warn(
              info = _helpers_config_objects_response__WEBPACK_IMPORTED_MODULE_0__
            ) {
              return buildResponse(1, info, this.Translate);
            }

            error(
              info = _helpers_config_objects_response__WEBPACK_IMPORTED_MODULE_0__
            ) {
              return buildResponse(2, info, this.Translate);
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/state.js':
        /*!*********************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/state.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return State;
            }
          );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /**
           * Stage Manager, stores application states
           * @public get
           * @public set
           * @public list
           * @public delete
           */

          let states = {};
          class State extends ___WEBPACK_IMPORTED_MODULE_0__['default'] {
            constructor() {
              super();
            }

            set(name, data) {
              return (states[name] = data);
            }

            get(name) {
              return states[name];
            }

            list() {
              return states;
            }

            delete(name) {
              states[name] = undefined;
            }

            clear() {
              states = {};
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/storage.js':
        /*!***********************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/storage.js ***!
  \***********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Storage;
            }
          );
          /* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! localforage */ './node_modules/localforage/dist/localforage.js'
            );
          /* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              localforage__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );

          class Storage extends ___WEBPACK_IMPORTED_MODULE_1__['default'] {
            constructor(
              config = {
                options: {
                  driver: undefined,
                  name: undefined,
                  size: undefined,
                  storeName: undefined,
                },
              }
            ) {
              switch (config.driver) {
                case 'localstorage':
                  config.driver =
                    localforage__WEBPACK_IMPORTED_MODULE_0___default.a.LOCALSTORAGE;
                  break;
              }

              localforage__WEBPACK_IMPORTED_MODULE_0___default.a.config(config);
              localforage__WEBPACK_IMPORTED_MODULE_0___default.a
                .ready()
                .catch((fail) => {
                  // Silence is golden
                });
              super();
            }

            get(key) {
              return localforage__WEBPACK_IMPORTED_MODULE_0___default.a
                .getItem(key)
                .catch((ex) => {
                  // Silence is golden
                });
            }

            set(key, value) {
              localforage__WEBPACK_IMPORTED_MODULE_0___default.a
                .setItem(key, value)
                .catch((ex) => {
                  // Silence is golden
                });
            }

            delete(key) {
              localforage__WEBPACK_IMPORTED_MODULE_0___default.a
                .removeItem(key)
                .catch((ex) => {
                  // Silence is golden
                });
            }

            clear() {
              localforage__WEBPACK_IMPORTED_MODULE_0___default.a
                .clear()
                .catch((ex) => {
                  // Silence is golden
                });
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/translate.js':
        /*!*************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/translate.js ***!
  \*************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Translate;
            }
          );
          /* harmony import */ var _helpers_search_object_path__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../helpers/search-object-path */ './node_modules/BlueDarwinJS/src/helpers/search-object-path.js'
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );

          let dictionary;
          class Translate extends ___WEBPACK_IMPORTED_MODULE_1__['default'] {
            constructor(language = {}) {
              super(_configuration__WEBPACK_IMPORTED_MODULE_2__['default']);
              this.setLanguage(language || this.Configuration.language);
            }

            setLanguage(language = {}) {
              dictionary = language;
            }
            /**
             * Translates a key
             * @param  {String}
             * @return {String}
             */

            instant(key = '') {
              if (typeof key === 'string' && key.trim().length > 0) {
                return Object(
                  _helpers_search_object_path__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]
                )(dictionary, key);
              }

              return key;
            }
          }

          /***/
        },

      /***/ './node_modules/BlueDarwinJS/src/services/validator.js':
        /*!*************************************************************!*\
  !*** ./node_modules/BlueDarwinJS/src/services/validator.js ***!
  \*************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return Validator;
            }
          );
          /* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! lodash.isempty */ './node_modules/lodash.isempty/index.js'
            );
          /* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              lodash_isempty__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! lodash.isfunction */ './node_modules/lodash.isfunction/index.js'
            );
          /* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              lodash_isfunction__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _helpers_validators_get_function_content__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../helpers/validators/get-function-content */ './node_modules/BlueDarwinJS/src/helpers/validators/get-function-content.js'
            );
          /* harmony import */ var _helpers_validators_is_equal_function__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../helpers/validators/is-equal-function */ './node_modules/BlueDarwinJS/src/helpers/validators/is-equal-function.js'
            );
          /* harmony import */ var _helpers_validators_array_contains_function__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../helpers/validators/array-contains-function */ './node_modules/BlueDarwinJS/src/helpers/validators/array-contains-function.js'
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! . */ './node_modules/BlueDarwinJS/src/services/index.js'
            );
          /**
           * @name BlueDarwin Project: Validator
           * @desc A simple utils util to validate some properties. All functions return a boolean
           */

          class Validator extends ___WEBPACK_IMPORTED_MODULE_5__['default'] {
            constructor() {
              super();
            }

            getFunctionContent(functionStr) {
              return Object(
                _helpers_validators_get_function_content__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ]
              )(functionStr);
            }

            isEmpty(value) {
              return lodash_isempty__WEBPACK_IMPORTED_MODULE_0___default()(
                value
              );
            }

            isFunction(value) {
              return lodash_isfunction__WEBPACK_IMPORTED_MODULE_1___default()(
                value
              );
            }

            isEqualFunction(a, b) {
              return Object(
                _helpers_validators_is_equal_function__WEBPACK_IMPORTED_MODULE_3__[
                  'default'
                ]
              )(a, b);
            }

            containsFunction(array, fn) {
              return Object(
                _helpers_validators_array_contains_function__WEBPACK_IMPORTED_MODULE_4__[
                  'default'
                ]
              )(array, fn);
            }
          }

          /***/
        },

      /***/ './node_modules/base-encryption/index.js':
        /*!***********************************************!*\
  !*** ./node_modules/base-encryption/index.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          (function webpackUniversalModuleDefinition(root, factory) {
            if (true) module.exports = factory();
            else {
            }
          })(typeof window === 'undefined' ? global : window, function () {
            return (
              /******/
              (function (modules) {
                // webpackBootstrap

                /******/
                // The module cache

                /******/
                var installedModules = {};
                /******/

                /******/
                // The require function

                /******/

                function __webpack_require__(moduleId) {
                  /******/

                  /******/
                  // Check if module is in cache

                  /******/
                  if (installedModules[moduleId]) {
                    /******/
                    return installedModules[moduleId].exports;
                    /******/
                  }
                  /******/
                  // Create a new module (and put it into the cache)

                  /******/

                  var module = (installedModules[moduleId] = {
                    /******/
                    i: moduleId,

                    /******/
                    l: false,

                    /******/
                    exports: {},
                    /******/
                  });
                  /******/

                  /******/
                  // Execute the module function

                  /******/

                  modules[moduleId].call(
                    module.exports,
                    module,
                    module.exports,
                    __webpack_require__
                  );
                  /******/

                  /******/
                  // Flag the module as loaded

                  /******/

                  module.l = true;
                  /******/

                  /******/
                  // Return the exports of the module

                  /******/

                  return module.exports;
                  /******/
                }
                /******/

                /******/

                /******/
                // expose the modules object (__webpack_modules__)

                /******/

                __webpack_require__.m = modules;
                /******/

                /******/
                // expose the module cache

                /******/

                __webpack_require__.c = installedModules;
                /******/

                /******/
                // define getter function for harmony exports

                /******/

                __webpack_require__.d = function (exports, name, getter) {
                  /******/
                  if (!__webpack_require__.o(exports, name)) {
                    /******/
                    Object.defineProperty(exports, name, {
                      /******/
                      configurable: false,

                      /******/
                      enumerable: true,

                      /******/
                      get: getter,
                      /******/
                    });
                    /******/
                  }
                  /******/
                };
                /******/

                /******/
                // define __esModule on exports

                /******/

                __webpack_require__.r = function (exports) {
                  /******/
                  Object.defineProperty(exports, '__esModule', {
                    value: true,
                  });
                  /******/
                };
                /******/

                /******/
                // getDefaultExport function for compatibility with non-harmony modules

                /******/

                __webpack_require__.n = function (module) {
                  /******/
                  var getter =
                    module && module.__esModule
                      ? /******/
                        function getDefault() {
                          return module['default'];
                        }
                      : /******/
                        function getModuleExports() {
                          return module;
                        };
                  /******/

                  __webpack_require__.d(getter, 'a', getter);
                  /******/

                  return getter;
                  /******/
                };
                /******/

                /******/
                // Object.prototype.hasOwnProperty.call

                /******/

                __webpack_require__.o = function (object, property) {
                  return Object.prototype.hasOwnProperty.call(object, property);
                };
                /******/

                /******/
                // __webpack_public_path__

                /******/

                __webpack_require__.p = '';
                /******/

                /******/

                /******/
                // Load entry module and return exports

                /******/

                return __webpack_require__(
                  (__webpack_require__.s = './src/index.js')
                );
                /******/
              })(
                /************************************************************************/

                /******/
                {
                  /***/
                  './node_modules/crypto-js/aes.js':
                    /*!***************************************!*\
        !*** ./node_modules/crypto-js/aes.js ***!
        \***************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar BlockCipher = C_lib.BlockCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Lookup tables\n\t\tvar SBOX = [];\n\t\tvar INV_SBOX = [];\n\t\tvar SUB_MIX_0 = [];\n\t\tvar SUB_MIX_1 = [];\n\t\tvar SUB_MIX_2 = [];\n\t\tvar SUB_MIX_3 = [];\n\t\tvar INV_SUB_MIX_0 = [];\n\t\tvar INV_SUB_MIX_1 = [];\n\t\tvar INV_SUB_MIX_2 = [];\n\t\tvar INV_SUB_MIX_3 = [];\n\n\t\t// Compute lookup tables\n\t\t(function () {\n\t\t\t// Compute double table\n\t\t\tvar d = [];\n\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\tif (i < 128) {\n\t\t\t\t\td[i] = i << 1;\n\t\t\t\t} else {\n\t\t\t\t\td[i] = i << 1 ^ 0x11b;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Walk GF(2^8)\n\t\t\tvar x = 0;\n\t\t\tvar xi = 0;\n\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\t// Compute sbox\n\t\t\t\tvar sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;\n\t\t\t\tsx = sx >>> 8 ^ sx & 0xff ^ 0x63;\n\t\t\t\tSBOX[x] = sx;\n\t\t\t\tINV_SBOX[sx] = x;\n\n\t\t\t\t// Compute multiplication\n\t\t\t\tvar x2 = d[x];\n\t\t\t\tvar x4 = d[x2];\n\t\t\t\tvar x8 = d[x4];\n\n\t\t\t\t// Compute sub bytes, mix columns tables\n\t\t\t\tvar t = d[sx] * 0x101 ^ sx * 0x1010100;\n\t\t\t\tSUB_MIX_0[x] = t << 24 | t >>> 8;\n\t\t\t\tSUB_MIX_1[x] = t << 16 | t >>> 16;\n\t\t\t\tSUB_MIX_2[x] = t << 8 | t >>> 24;\n\t\t\t\tSUB_MIX_3[x] = t;\n\n\t\t\t\t// Compute inv sub bytes, inv mix columns tables\n\t\t\t\tvar t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;\n\t\t\t\tINV_SUB_MIX_0[sx] = t << 24 | t >>> 8;\n\t\t\t\tINV_SUB_MIX_1[sx] = t << 16 | t >>> 16;\n\t\t\t\tINV_SUB_MIX_2[sx] = t << 8 | t >>> 24;\n\t\t\t\tINV_SUB_MIX_3[sx] = t;\n\n\t\t\t\t// Compute next counter\n\t\t\t\tif (!x) {\n\t\t\t\t\tx = xi = 1;\n\t\t\t\t} else {\n\t\t\t\t\tx = x2 ^ d[d[d[x8 ^ x2]]];\n\t\t\t\t\txi ^= d[d[xi]];\n\t\t\t\t}\n\t\t\t}\n\t\t})();\n\n\t\t// Precomputed Rcon lookup\n\t\tvar RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];\n\n\t\t/**\n   * AES block cipher algorithm.\n   */\n\t\tvar AES = C_algo.AES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Skip reset of nRounds has been set before and key did not change\n\t\t\t\tif (this._nRounds && this._keyPriorReset === this._key) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._keyPriorReset = this._key;\n\t\t\t\tvar keyWords = key.words;\n\t\t\t\tvar keySize = key.sigBytes / 4;\n\n\t\t\t\t// Compute number of rounds\n\t\t\t\tvar nRounds = this._nRounds = keySize + 6;\n\n\t\t\t\t// Compute number of key schedule rows\n\t\t\t\tvar ksRows = (nRounds + 1) * 4;\n\n\t\t\t\t// Compute key schedule\n\t\t\t\tvar keySchedule = this._keySchedule = [];\n\t\t\t\tfor (var ksRow = 0; ksRow < ksRows; ksRow++) {\n\t\t\t\t\tif (ksRow < keySize) {\n\t\t\t\t\t\tkeySchedule[ksRow] = keyWords[ksRow];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar t = keySchedule[ksRow - 1];\n\n\t\t\t\t\t\tif (!(ksRow % keySize)) {\n\t\t\t\t\t\t\t// Rot word\n\t\t\t\t\t\t\tt = t << 8 | t >>> 24;\n\n\t\t\t\t\t\t\t// Sub word\n\t\t\t\t\t\t\tt = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];\n\n\t\t\t\t\t\t\t// Mix Rcon\n\t\t\t\t\t\t\tt ^= RCON[ksRow / keySize | 0] << 24;\n\t\t\t\t\t\t} else if (keySize > 6 && ksRow % keySize == 4) {\n\t\t\t\t\t\t\t// Sub word\n\t\t\t\t\t\t\tt = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tkeySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Compute inv key schedule\n\t\t\t\tvar invKeySchedule = this._invKeySchedule = [];\n\t\t\t\tfor (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {\n\t\t\t\t\tvar ksRow = ksRows - invKsRow;\n\n\t\t\t\t\tif (invKsRow % 4) {\n\t\t\t\t\t\tvar t = keySchedule[ksRow];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar t = keySchedule[ksRow - 4];\n\t\t\t\t\t}\n\n\t\t\t\t\tif (invKsRow < 4 || ksRow <= 4) {\n\t\t\t\t\t\tinvKeySchedule[invKsRow] = t;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tinvKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\t// Swap 2nd and 4th rows\n\t\t\t\tvar t = M[offset + 1];\n\t\t\t\tM[offset + 1] = M[offset + 3];\n\t\t\t\tM[offset + 3] = t;\n\n\t\t\t\tthis._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);\n\n\t\t\t\t// Inv swap 2nd and 4th rows\n\t\t\t\tvar t = M[offset + 1];\n\t\t\t\tM[offset + 1] = M[offset + 3];\n\t\t\t\tM[offset + 3] = t;\n\t\t\t},\n\n\t\t\t_doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar nRounds = this._nRounds;\n\n\t\t\t\t// Get input, add round key\n\t\t\t\tvar s0 = M[offset] ^ keySchedule[0];\n\t\t\t\tvar s1 = M[offset + 1] ^ keySchedule[1];\n\t\t\t\tvar s2 = M[offset + 2] ^ keySchedule[2];\n\t\t\t\tvar s3 = M[offset + 3] ^ keySchedule[3];\n\n\t\t\t\t// Key schedule row counter\n\t\t\t\tvar ksRow = 4;\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 1; round < nRounds; round++) {\n\t\t\t\t\t// Shift rows, sub bytes, mix columns, add round key\n\t\t\t\t\tvar t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];\n\n\t\t\t\t\t// Update state\n\t\t\t\t\ts0 = t0;\n\t\t\t\t\ts1 = t1;\n\t\t\t\t\ts2 = t2;\n\t\t\t\t\ts3 = t3;\n\t\t\t\t}\n\n\t\t\t\t// Shift rows, sub bytes, add round key\n\t\t\t\tvar t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];\n\n\t\t\t\t// Set output\n\t\t\t\tM[offset] = t0;\n\t\t\t\tM[offset + 1] = t1;\n\t\t\t\tM[offset + 2] = t2;\n\t\t\t\tM[offset + 3] = t3;\n\t\t\t},\n\n\t\t\tkeySize: 256 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.AES = BlockCipher._createHelper(AES);\n\t})();\n\n\treturn CryptoJS.AES;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/aes.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/cipher-core.js':
                    /*!***********************************************!*\
        !*** ./node_modules/crypto-js/cipher-core.js ***!
        \***********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"), __webpack_require__(/*! ./evpkdf */ \"./node_modules/crypto-js/evpkdf.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Cipher core components.\n  */\n\tCryptoJS.lib.Cipher || function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;\n\t\tvar C_enc = C.enc;\n\t\tvar Utf8 = C_enc.Utf8;\n\t\tvar Base64 = C_enc.Base64;\n\t\tvar C_algo = C.algo;\n\t\tvar EvpKDF = C_algo.EvpKDF;\n\n\t\t/**\n   * Abstract base cipher template.\n   *\n   * @property {number} keySize This cipher's key size. Default: 4 (128 bits)\n   * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)\n   * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.\n   * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.\n   */\n\t\tvar Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {WordArray} iv The IV to use for this operation.\n    */\n\t\t\tcfg: Base.extend(),\n\n\t\t\t/**\n    * Creates this cipher in encryption mode.\n    *\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {Cipher} A cipher instance.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tcreateEncryptor: function (key, cfg) {\n\t\t\t\treturn this.create(this._ENC_XFORM_MODE, key, cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Creates this cipher in decryption mode.\n    *\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {Cipher} A cipher instance.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tcreateDecryptor: function (key, cfg) {\n\t\t\t\treturn this.create(this._DEC_XFORM_MODE, key, cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Initializes a newly created cipher.\n    *\n    * @param {number} xformMode Either the encryption or decryption transormation mode constant.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tinit: function (xformMode, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Store transform mode and key\n\t\t\t\tthis._xformMode = xformMode;\n\t\t\t\tthis._key = key;\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this cipher to its initial state.\n    *\n    * @example\n    *\n    *     cipher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Reset data buffer\n\t\t\t\tBufferedBlockAlgorithm.reset.call(this);\n\n\t\t\t\t// Perform concrete-cipher logic\n\t\t\t\tthis._doReset();\n\t\t\t},\n\n\t\t\t/**\n    * Adds data to be encrypted or decrypted.\n    *\n    * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.\n    *\n    * @return {WordArray} The data after processing.\n    *\n    * @example\n    *\n    *     var encrypted = cipher.process('data');\n    *     var encrypted = cipher.process(wordArray);\n    */\n\t\t\tprocess: function (dataUpdate) {\n\t\t\t\t// Append\n\t\t\t\tthis._append(dataUpdate);\n\n\t\t\t\t// Process available blocks\n\t\t\t\treturn this._process();\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the encryption or decryption process.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.\n    *\n    * @return {WordArray} The data after final processing.\n    *\n    * @example\n    *\n    *     var encrypted = cipher.finalize();\n    *     var encrypted = cipher.finalize('data');\n    *     var encrypted = cipher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (dataUpdate) {\n\t\t\t\t// Final data update\n\t\t\t\tif (dataUpdate) {\n\t\t\t\t\tthis._append(dataUpdate);\n\t\t\t\t}\n\n\t\t\t\t// Perform concrete-cipher logic\n\t\t\t\tvar finalProcessedData = this._doFinalize();\n\n\t\t\t\treturn finalProcessedData;\n\t\t\t},\n\n\t\t\tkeySize: 128 / 32,\n\n\t\t\tivSize: 128 / 32,\n\n\t\t\t_ENC_XFORM_MODE: 1,\n\n\t\t\t_DEC_XFORM_MODE: 2,\n\n\t\t\t/**\n    * Creates shortcut functions to a cipher's object interface.\n    *\n    * @param {Cipher} cipher The cipher to create a helper for.\n    *\n    * @return {Object} An object with encrypt and decrypt shortcut functions.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);\n    */\n\t\t\t_createHelper: function () {\n\t\t\t\tfunction selectCipherStrategy(key) {\n\t\t\t\t\tif (typeof key == 'string') {\n\t\t\t\t\t\treturn PasswordBasedCipher;\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn SerializableCipher;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn function (cipher) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tencrypt: function (message, key, cfg) {\n\t\t\t\t\t\t\treturn selectCipherStrategy(key).encrypt(cipher, message, key, cfg);\n\t\t\t\t\t\t},\n\n\t\t\t\t\t\tdecrypt: function (ciphertext, key, cfg) {\n\t\t\t\t\t\t\treturn selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t};\n\t\t\t}()\n\t\t});\n\n\t\t/**\n   * Abstract base stream cipher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)\n   */\n\t\tvar StreamCipher = C_lib.StreamCipher = Cipher.extend({\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Process partial blocks\n\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\n\t\t\t\treturn finalProcessedBlocks;\n\t\t\t},\n\n\t\t\tblockSize: 1\n\t\t});\n\n\t\t/**\n   * Mode namespace.\n   */\n\t\tvar C_mode = C.mode = {};\n\n\t\t/**\n   * Abstract base block cipher mode template.\n   */\n\t\tvar BlockCipherMode = C_lib.BlockCipherMode = Base.extend({\n\t\t\t/**\n    * Creates this mode for encryption.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);\n    */\n\t\t\tcreateEncryptor: function (cipher, iv) {\n\t\t\t\treturn this.Encryptor.create(cipher, iv);\n\t\t\t},\n\n\t\t\t/**\n    * Creates this mode for decryption.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);\n    */\n\t\t\tcreateDecryptor: function (cipher, iv) {\n\t\t\t\treturn this.Decryptor.create(cipher, iv);\n\t\t\t},\n\n\t\t\t/**\n    * Initializes a newly created mode.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);\n    */\n\t\t\tinit: function (cipher, iv) {\n\t\t\t\tthis._cipher = cipher;\n\t\t\t\tthis._iv = iv;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Cipher Block Chaining mode.\n   */\n\t\tvar CBC = C_mode.CBC = function () {\n\t\t\t/**\n    * Abstract base CBC mode.\n    */\n\t\t\tvar CBC = BlockCipherMode.extend();\n\n\t\t\t/**\n    * CBC encryptor.\n    */\n\t\t\tCBC.Encryptor = CBC.extend({\n\t\t\t\t/**\n     * Processes the data block at offset.\n     *\n     * @param {Array} words The data words to operate on.\n     * @param {number} offset The offset where the block starts.\n     *\n     * @example\n     *\n     *     mode.processBlock(data.words, offset);\n     */\n\t\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar cipher = this._cipher;\n\t\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t\t// XOR and encrypt\n\t\t\t\t\txorBlock.call(this, words, offset, blockSize);\n\t\t\t\t\tcipher.encryptBlock(words, offset);\n\n\t\t\t\t\t// Remember this block to use with next block\n\t\t\t\t\tthis._prevBlock = words.slice(offset, offset + blockSize);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t/**\n    * CBC decryptor.\n    */\n\t\t\tCBC.Decryptor = CBC.extend({\n\t\t\t\t/**\n     * Processes the data block at offset.\n     *\n     * @param {Array} words The data words to operate on.\n     * @param {number} offset The offset where the block starts.\n     *\n     * @example\n     *\n     *     mode.processBlock(data.words, offset);\n     */\n\t\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar cipher = this._cipher;\n\t\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t\t// Remember this block to use with next block\n\t\t\t\t\tvar thisBlock = words.slice(offset, offset + blockSize);\n\n\t\t\t\t\t// Decrypt and XOR\n\t\t\t\t\tcipher.decryptBlock(words, offset);\n\t\t\t\t\txorBlock.call(this, words, offset, blockSize);\n\n\t\t\t\t\t// This block becomes the previous block\n\t\t\t\t\tthis._prevBlock = thisBlock;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tfunction xorBlock(words, offset, blockSize) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar iv = this._iv;\n\n\t\t\t\t// Choose mixing block\n\t\t\t\tif (iv) {\n\t\t\t\t\tvar block = iv;\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t} else {\n\t\t\t\t\tvar block = this._prevBlock;\n\t\t\t\t}\n\n\t\t\t\t// XOR blocks\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= block[i];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn CBC;\n\t\t}();\n\n\t\t/**\n   * Padding namespace.\n   */\n\t\tvar C_pad = C.pad = {};\n\n\t\t/**\n   * PKCS #5/7 padding strategy.\n   */\n\t\tvar Pkcs7 = C_pad.Pkcs7 = {\n\t\t\t/**\n    * Pads data using the algorithm defined in PKCS #5/7.\n    *\n    * @param {WordArray} data The data to pad.\n    * @param {number} blockSize The multiple that the data should be padded to.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);\n    */\n\t\t\tpad: function (data, blockSize) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t\t// Count padding bytes\n\t\t\t\tvar nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;\n\n\t\t\t\t// Create padding word\n\t\t\t\tvar paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;\n\n\t\t\t\t// Create padding\n\t\t\t\tvar paddingWords = [];\n\t\t\t\tfor (var i = 0; i < nPaddingBytes; i += 4) {\n\t\t\t\t\tpaddingWords.push(paddingWord);\n\t\t\t\t}\n\t\t\t\tvar padding = WordArray.create(paddingWords, nPaddingBytes);\n\n\t\t\t\t// Add padding\n\t\t\t\tdata.concat(padding);\n\t\t\t},\n\n\t\t\t/**\n    * Unpads data that had been padded using the algorithm defined in PKCS #5/7.\n    *\n    * @param {WordArray} data The data to unpad.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     CryptoJS.pad.Pkcs7.unpad(wordArray);\n    */\n\t\t\tunpad: function (data) {\n\t\t\t\t// Get number of padding bytes from last byte\n\t\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t\t// Remove padding\n\t\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Abstract base block cipher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)\n   */\n\t\tvar BlockCipher = C_lib.BlockCipher = Cipher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {Mode} mode The block mode to use. Default: CBC\n    * @property {Padding} padding The padding strategy to use. Default: Pkcs7\n    */\n\t\t\tcfg: Cipher.cfg.extend({\n\t\t\t\tmode: CBC,\n\t\t\t\tpadding: Pkcs7\n\t\t\t}),\n\n\t\t\treset: function () {\n\t\t\t\t// Reset cipher\n\t\t\t\tCipher.reset.call(this);\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cfg = this.cfg;\n\t\t\t\tvar iv = cfg.iv;\n\t\t\t\tvar mode = cfg.mode;\n\n\t\t\t\t// Reset block mode\n\t\t\t\tif (this._xformMode == this._ENC_XFORM_MODE) {\n\t\t\t\t\tvar modeCreator = mode.createEncryptor;\n\t\t\t\t} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{\n\t\t\t\t\t\tvar modeCreator = mode.createDecryptor;\n\t\t\t\t\t\t// Keep at least one block in the buffer for unpadding\n\t\t\t\t\t\tthis._minBufferSize = 1;\n\t\t\t\t\t}\n\n\t\t\t\tif (this._mode && this._mode.__creator == modeCreator) {\n\t\t\t\t\tthis._mode.init(this, iv && iv.words);\n\t\t\t\t} else {\n\t\t\t\t\tthis._mode = modeCreator.call(mode, this, iv && iv.words);\n\t\t\t\t\tthis._mode.__creator = modeCreator;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (words, offset) {\n\t\t\t\tthis._mode.processBlock(words, offset);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcut\n\t\t\t\tvar padding = this.cfg.padding;\n\n\t\t\t\t// Finalize\n\t\t\t\tif (this._xformMode == this._ENC_XFORM_MODE) {\n\t\t\t\t\t// Pad data\n\t\t\t\t\tpadding.pad(this._data, this.blockSize);\n\n\t\t\t\t\t// Process final blocks\n\t\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\t\t\t\t} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{\n\t\t\t\t\t\t// Process final blocks\n\t\t\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\n\t\t\t\t\t\t// Unpad data\n\t\t\t\t\t\tpadding.unpad(finalProcessedBlocks);\n\t\t\t\t\t}\n\n\t\t\t\treturn finalProcessedBlocks;\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32\n\t\t});\n\n\t\t/**\n   * A collection of cipher parameters.\n   *\n   * @property {WordArray} ciphertext The raw ciphertext.\n   * @property {WordArray} key The key to this ciphertext.\n   * @property {WordArray} iv The IV used in the ciphering operation.\n   * @property {WordArray} salt The salt used with a key derivation function.\n   * @property {Cipher} algorithm The cipher algorithm.\n   * @property {Mode} mode The block mode used in the ciphering operation.\n   * @property {Padding} padding The padding scheme used in the ciphering operation.\n   * @property {number} blockSize The block size of the cipher.\n   * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.\n   */\n\t\tvar CipherParams = C_lib.CipherParams = Base.extend({\n\t\t\t/**\n    * Initializes a newly created cipher params object.\n    *\n    * @param {Object} cipherParams An object with any of the possible cipher parameters.\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.lib.CipherParams.create({\n    *         ciphertext: ciphertextWordArray,\n    *         key: keyWordArray,\n    *         iv: ivWordArray,\n    *         salt: saltWordArray,\n    *         algorithm: CryptoJS.algo.AES,\n    *         mode: CryptoJS.mode.CBC,\n    *         padding: CryptoJS.pad.PKCS7,\n    *         blockSize: 4,\n    *         formatter: CryptoJS.format.OpenSSL\n    *     });\n    */\n\t\t\tinit: function (cipherParams) {\n\t\t\t\tthis.mixIn(cipherParams);\n\t\t\t},\n\n\t\t\t/**\n    * Converts this cipher params object to a string.\n    *\n    * @param {Format} formatter (Optional) The formatting strategy to use.\n    *\n    * @return {string} The stringified cipher params.\n    *\n    * @throws Error If neither the formatter nor the default formatter is set.\n    *\n    * @example\n    *\n    *     var string = cipherParams + '';\n    *     var string = cipherParams.toString();\n    *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);\n    */\n\t\t\ttoString: function (formatter) {\n\t\t\t\treturn (formatter || this.formatter).stringify(this);\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Format namespace.\n   */\n\t\tvar C_format = C.format = {};\n\n\t\t/**\n   * OpenSSL formatting strategy.\n   */\n\t\tvar OpenSSLFormatter = C_format.OpenSSL = {\n\t\t\t/**\n    * Converts a cipher params object to an OpenSSL-compatible string.\n    *\n    * @param {CipherParams} cipherParams The cipher params object.\n    *\n    * @return {string} The OpenSSL-compatible string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);\n    */\n\t\t\tstringify: function (cipherParams) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar ciphertext = cipherParams.ciphertext;\n\t\t\t\tvar salt = cipherParams.salt;\n\n\t\t\t\t// Format\n\t\t\t\tif (salt) {\n\t\t\t\t\tvar wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);\n\t\t\t\t} else {\n\t\t\t\t\tvar wordArray = ciphertext;\n\t\t\t\t}\n\n\t\t\t\treturn wordArray.toString(Base64);\n\t\t\t},\n\n\t\t\t/**\n    * Converts an OpenSSL-compatible string to a cipher params object.\n    *\n    * @param {string} openSSLStr The OpenSSL-compatible string.\n    *\n    * @return {CipherParams} The cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);\n    */\n\t\t\tparse: function (openSSLStr) {\n\t\t\t\t// Parse base64\n\t\t\t\tvar ciphertext = Base64.parse(openSSLStr);\n\n\t\t\t\t// Shortcut\n\t\t\t\tvar ciphertextWords = ciphertext.words;\n\n\t\t\t\t// Test for salt\n\t\t\t\tif (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {\n\t\t\t\t\t// Extract salt\n\t\t\t\t\tvar salt = WordArray.create(ciphertextWords.slice(2, 4));\n\n\t\t\t\t\t// Remove salt from ciphertext\n\t\t\t\t\tciphertextWords.splice(0, 4);\n\t\t\t\t\tciphertext.sigBytes -= 16;\n\t\t\t\t}\n\n\t\t\t\treturn CipherParams.create({ ciphertext: ciphertext, salt: salt });\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * A cipher wrapper that returns ciphertext as a serializable cipher params object.\n   */\n\t\tvar SerializableCipher = C_lib.SerializableCipher = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tformat: OpenSSLFormatter\n\t\t\t}),\n\n\t\t\t/**\n    * Encrypts a message.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {WordArray|string} message The message to encrypt.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {CipherParams} A cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tencrypt: function (cipher, message, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Encrypt\n\t\t\t\tvar encryptor = cipher.createEncryptor(key, cfg);\n\t\t\t\tvar ciphertext = encryptor.finalize(message);\n\n\t\t\t\t// Shortcut\n\t\t\t\tvar cipherCfg = encryptor.cfg;\n\n\t\t\t\t// Create and return serializable cipher params\n\t\t\t\treturn CipherParams.create({\n\t\t\t\t\tciphertext: ciphertext,\n\t\t\t\t\tkey: key,\n\t\t\t\t\tiv: cipherCfg.iv,\n\t\t\t\t\talgorithm: cipher,\n\t\t\t\t\tmode: cipherCfg.mode,\n\t\t\t\t\tpadding: cipherCfg.padding,\n\t\t\t\t\tblockSize: cipher.blockSize,\n\t\t\t\t\tformatter: cfg.format\n\t\t\t\t});\n\t\t\t},\n\n\t\t\t/**\n    * Decrypts serialized ciphertext.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {CipherParams|string} ciphertext The ciphertext to decrypt.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {WordArray} The plaintext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tdecrypt: function (cipher, ciphertext, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Convert string to CipherParams\n\t\t\t\tciphertext = this._parse(ciphertext, cfg.format);\n\n\t\t\t\t// Decrypt\n\t\t\t\tvar plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);\n\n\t\t\t\treturn plaintext;\n\t\t\t},\n\n\t\t\t/**\n    * Converts serialized ciphertext to CipherParams,\n    * else assumed CipherParams already and returns ciphertext unchanged.\n    *\n    * @param {CipherParams|string} ciphertext The ciphertext.\n    * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.\n    *\n    * @return {CipherParams} The unserialized ciphertext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);\n    */\n\t\t\t_parse: function (ciphertext, format) {\n\t\t\t\tif (typeof ciphertext == 'string') {\n\t\t\t\t\treturn format.parse(ciphertext, this);\n\t\t\t\t} else {\n\t\t\t\t\treturn ciphertext;\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Key derivation function namespace.\n   */\n\t\tvar C_kdf = C.kdf = {};\n\n\t\t/**\n   * OpenSSL key derivation function.\n   */\n\t\tvar OpenSSLKdf = C_kdf.OpenSSL = {\n\t\t\t/**\n    * Derives a key and IV from a password.\n    *\n    * @param {string} password The password to derive from.\n    * @param {number} keySize The size in words of the key to generate.\n    * @param {number} ivSize The size in words of the IV to generate.\n    * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.\n    *\n    * @return {CipherParams} A cipher params object with the key, IV, and salt.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);\n    *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');\n    */\n\t\t\texecute: function (password, keySize, ivSize, salt) {\n\t\t\t\t// Generate random salt\n\t\t\t\tif (!salt) {\n\t\t\t\t\tsalt = WordArray.random(64 / 8);\n\t\t\t\t}\n\n\t\t\t\t// Derive key and IV\n\t\t\t\tvar key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);\n\n\t\t\t\t// Separate key and IV\n\t\t\t\tvar iv = WordArray.create(key.words.slice(keySize), ivSize * 4);\n\t\t\t\tkey.sigBytes = keySize * 4;\n\n\t\t\t\t// Return params\n\t\t\t\treturn CipherParams.create({ key: key, iv: iv, salt: salt });\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * A serializable cipher wrapper that derives the key from a password,\n   * and returns ciphertext as a serializable cipher params object.\n   */\n\t\tvar PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL\n    */\n\t\t\tcfg: SerializableCipher.cfg.extend({\n\t\t\t\tkdf: OpenSSLKdf\n\t\t\t}),\n\n\t\t\t/**\n    * Encrypts a message using a password.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {WordArray|string} message The message to encrypt.\n    * @param {string} password The password.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {CipherParams} A cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');\n    *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tencrypt: function (cipher, message, password, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Derive key and other params\n\t\t\t\tvar derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);\n\n\t\t\t\t// Add IV to config\n\t\t\t\tcfg.iv = derivedParams.iv;\n\n\t\t\t\t// Encrypt\n\t\t\t\tvar ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);\n\n\t\t\t\t// Mix in derived params\n\t\t\t\tciphertext.mixIn(derivedParams);\n\n\t\t\t\treturn ciphertext;\n\t\t\t},\n\n\t\t\t/**\n    * Decrypts serialized ciphertext using a password.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {CipherParams|string} ciphertext The ciphertext to decrypt.\n    * @param {string} password The password.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {WordArray} The plaintext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });\n    *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tdecrypt: function (cipher, ciphertext, password, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Convert string to CipherParams\n\t\t\t\tciphertext = this._parse(ciphertext, cfg.format);\n\n\t\t\t\t// Derive key and other params\n\t\t\t\tvar derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);\n\n\t\t\t\t// Add IV to config\n\t\t\t\tcfg.iv = derivedParams.iv;\n\n\t\t\t\t// Decrypt\n\t\t\t\tvar plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);\n\n\t\t\t\treturn plaintext;\n\t\t\t}\n\t\t});\n\t}();\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/cipher-core.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/core.js':
                    /*!****************************************!*\
        !*** ./node_modules/crypto-js/core.js ***!
        \****************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory();\n\t} else {}\n})(this, function () {\n\n\t/**\n  * CryptoJS core components.\n  */\n\tvar CryptoJS = CryptoJS || function (Math, undefined) {\n\t\t/*\n   * Local polyfil of Object.create\n   */\n\t\tvar create = Object.create || function () {\n\t\t\tfunction F() {};\n\n\t\t\treturn function (obj) {\n\t\t\t\tvar subtype;\n\n\t\t\t\tF.prototype = obj;\n\n\t\t\t\tsubtype = new F();\n\n\t\t\t\tF.prototype = null;\n\n\t\t\t\treturn subtype;\n\t\t\t};\n\t\t}();\n\n\t\t/**\n   * CryptoJS namespace.\n   */\n\t\tvar C = {};\n\n\t\t/**\n   * Library namespace.\n   */\n\t\tvar C_lib = C.lib = {};\n\n\t\t/**\n   * Base object for prototypal inheritance.\n   */\n\t\tvar Base = C_lib.Base = function () {\n\n\t\t\treturn {\n\t\t\t\t/**\n     * Creates a new object that inherits from this object.\n     *\n     * @param {Object} overrides Properties to copy into the new object.\n     *\n     * @return {Object} The new object.\n     *\n     * @static\n     *\n     * @example\n     *\n     *     var MyType = CryptoJS.lib.Base.extend({\n     *         field: 'value',\n     *\n     *         method: function () {\n     *         }\n     *     });\n     */\n\t\t\t\textend: function (overrides) {\n\t\t\t\t\t// Spawn\n\t\t\t\t\tvar subtype = create(this);\n\n\t\t\t\t\t// Augment\n\t\t\t\t\tif (overrides) {\n\t\t\t\t\t\tsubtype.mixIn(overrides);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Create default initializer\n\t\t\t\t\tif (!subtype.hasOwnProperty('init') || this.init === subtype.init) {\n\t\t\t\t\t\tsubtype.init = function () {\n\t\t\t\t\t\t\tsubtype.$super.init.apply(this, arguments);\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\t// Initializer's prototype is the subtype object\n\t\t\t\t\tsubtype.init.prototype = subtype;\n\n\t\t\t\t\t// Reference supertype\n\t\t\t\t\tsubtype.$super = this;\n\n\t\t\t\t\treturn subtype;\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Extends this object and runs the init method.\n     * Arguments to create() will be passed to init().\n     *\n     * @return {Object} The new object.\n     *\n     * @static\n     *\n     * @example\n     *\n     *     var instance = MyType.create();\n     */\n\t\t\t\tcreate: function () {\n\t\t\t\t\tvar instance = this.extend();\n\t\t\t\t\tinstance.init.apply(instance, arguments);\n\n\t\t\t\t\treturn instance;\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Initializes a newly created object.\n     * Override this method to add some logic when your objects are created.\n     *\n     * @example\n     *\n     *     var MyType = CryptoJS.lib.Base.extend({\n     *         init: function () {\n     *             // ...\n     *         }\n     *     });\n     */\n\t\t\t\tinit: function () {},\n\n\t\t\t\t/**\n     * Copies properties into this object.\n     *\n     * @param {Object} properties The properties to mix in.\n     *\n     * @example\n     *\n     *     MyType.mixIn({\n     *         field: 'value'\n     *     });\n     */\n\t\t\t\tmixIn: function (properties) {\n\t\t\t\t\tfor (var propertyName in properties) {\n\t\t\t\t\t\tif (properties.hasOwnProperty(propertyName)) {\n\t\t\t\t\t\t\tthis[propertyName] = properties[propertyName];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// IE won't copy toString using the loop above\n\t\t\t\t\tif (properties.hasOwnProperty('toString')) {\n\t\t\t\t\t\tthis.toString = properties.toString;\n\t\t\t\t\t}\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Creates a copy of this object.\n     *\n     * @return {Object} The clone.\n     *\n     * @example\n     *\n     *     var clone = instance.clone();\n     */\n\t\t\t\tclone: function () {\n\t\t\t\t\treturn this.init.prototype.extend(this);\n\t\t\t\t}\n\t\t\t};\n\t\t}();\n\n\t\t/**\n   * An array of 32-bit words.\n   *\n   * @property {Array} words The array of 32-bit words.\n   * @property {number} sigBytes The number of significant bytes in this word array.\n   */\n\t\tvar WordArray = C_lib.WordArray = Base.extend({\n\t\t\t/**\n    * Initializes a newly created word array.\n    *\n    * @param {Array} words (Optional) An array of 32-bit words.\n    * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.lib.WordArray.create();\n    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);\n    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);\n    */\n\t\t\tinit: function (words, sigBytes) {\n\t\t\t\twords = this.words = words || [];\n\n\t\t\t\tif (sigBytes != undefined) {\n\t\t\t\t\tthis.sigBytes = sigBytes;\n\t\t\t\t} else {\n\t\t\t\t\tthis.sigBytes = words.length * 4;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts this word array to a string.\n    *\n    * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex\n    *\n    * @return {string} The stringified word array.\n    *\n    * @example\n    *\n    *     var string = wordArray + '';\n    *     var string = wordArray.toString();\n    *     var string = wordArray.toString(CryptoJS.enc.Utf8);\n    */\n\t\t\ttoString: function (encoder) {\n\t\t\t\treturn (encoder || Hex).stringify(this);\n\t\t\t},\n\n\t\t\t/**\n    * Concatenates a word array to this word array.\n    *\n    * @param {WordArray} wordArray The word array to append.\n    *\n    * @return {WordArray} This word array.\n    *\n    * @example\n    *\n    *     wordArray1.concat(wordArray2);\n    */\n\t\t\tconcat: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar thisWords = this.words;\n\t\t\t\tvar thatWords = wordArray.words;\n\t\t\t\tvar thisSigBytes = this.sigBytes;\n\t\t\t\tvar thatSigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\tthis.clamp();\n\n\t\t\t\t// Concat\n\t\t\t\tif (thisSigBytes % 4) {\n\t\t\t\t\t// Copy one byte at a time\n\t\t\t\t\tfor (var i = 0; i < thatSigBytes; i++) {\n\t\t\t\t\t\tvar thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\t\tthisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\t// Copy one word at a time\n\t\t\t\t\tfor (var i = 0; i < thatSigBytes; i += 4) {\n\t\t\t\t\t\tthisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tthis.sigBytes += thatSigBytes;\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Removes insignificant bits.\n    *\n    * @example\n    *\n    *     wordArray.clamp();\n    */\n\t\t\tclamp: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = this.words;\n\t\t\t\tvar sigBytes = this.sigBytes;\n\n\t\t\t\t// Clamp\n\t\t\t\twords[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;\n\t\t\t\twords.length = Math.ceil(sigBytes / 4);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this word array.\n    *\n    * @return {WordArray} The clone.\n    *\n    * @example\n    *\n    *     var clone = wordArray.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\t\t\t\tclone.words = this.words.slice(0);\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\t/**\n    * Creates a word array filled with random bytes.\n    *\n    * @param {number} nBytes The number of random bytes to generate.\n    *\n    * @return {WordArray} The random word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.lib.WordArray.random(16);\n    */\n\t\t\trandom: function (nBytes) {\n\t\t\t\tvar words = [];\n\n\t\t\t\tvar r = function (m_w) {\n\t\t\t\t\tvar m_w = m_w;\n\t\t\t\t\tvar m_z = 0x3ade68b1;\n\t\t\t\t\tvar mask = 0xffffffff;\n\n\t\t\t\t\treturn function () {\n\t\t\t\t\t\tm_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;\n\t\t\t\t\t\tm_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;\n\t\t\t\t\t\tvar result = (m_z << 0x10) + m_w & mask;\n\t\t\t\t\t\tresult /= 0x100000000;\n\t\t\t\t\t\tresult += 0.5;\n\t\t\t\t\t\treturn result * (Math.random() > .5 ? 1 : -1);\n\t\t\t\t\t};\n\t\t\t\t};\n\n\t\t\t\tfor (var i = 0, rcache; i < nBytes; i += 4) {\n\t\t\t\t\tvar _r = r((rcache || Math.random()) * 0x100000000);\n\n\t\t\t\t\trcache = _r() * 0x3ade67b7;\n\t\t\t\t\twords.push(_r() * 0x100000000 | 0);\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, nBytes);\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Encoder namespace.\n   */\n\t\tvar C_enc = C.enc = {};\n\n\t\t/**\n   * Hex encoding strategy.\n   */\n\t\tvar Hex = C_enc.Hex = {\n\t\t\t/**\n    * Converts a word array to a hex string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The hex string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar hexChars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i++) {\n\t\t\t\t\tvar bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\thexChars.push((bite >>> 4).toString(16));\n\t\t\t\t\thexChars.push((bite & 0x0f).toString(16));\n\t\t\t\t}\n\n\t\t\t\treturn hexChars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a hex string to a word array.\n    *\n    * @param {string} hexStr The hex string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Hex.parse(hexString);\n    */\n\t\t\tparse: function (hexStr) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hexStrLength = hexStr.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < hexStrLength; i += 2) {\n\t\t\t\t\twords[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, hexStrLength / 2);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Latin1 encoding strategy.\n   */\n\t\tvar Latin1 = C_enc.Latin1 = {\n\t\t\t/**\n    * Converts a word array to a Latin1 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The Latin1 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar latin1Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i++) {\n\t\t\t\t\tvar bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\tlatin1Chars.push(String.fromCharCode(bite));\n\t\t\t\t}\n\n\t\t\t\treturn latin1Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a Latin1 string to a word array.\n    *\n    * @param {string} latin1Str The Latin1 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);\n    */\n\t\t\tparse: function (latin1Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar latin1StrLength = latin1Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < latin1StrLength; i++) {\n\t\t\t\t\twords[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, latin1StrLength);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * UTF-8 encoding strategy.\n   */\n\t\tvar Utf8 = C_enc.Utf8 = {\n\t\t\t/**\n    * Converts a word array to a UTF-8 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-8 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\ttry {\n\t\t\t\t\treturn decodeURIComponent(escape(Latin1.stringify(wordArray)));\n\t\t\t\t} catch (e) {\n\t\t\t\t\tthrow new Error('Malformed UTF-8 data');\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-8 string to a word array.\n    *\n    * @param {string} utf8Str The UTF-8 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);\n    */\n\t\t\tparse: function (utf8Str) {\n\t\t\t\treturn Latin1.parse(unescape(encodeURIComponent(utf8Str)));\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Abstract buffered block algorithm template.\n   *\n   * The property blockSize must be implemented in a concrete subtype.\n   *\n   * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0\n   */\n\t\tvar BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({\n\t\t\t/**\n    * Resets this block algorithm's data buffer to its initial state.\n    *\n    * @example\n    *\n    *     bufferedBlockAlgorithm.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Initial values\n\t\t\t\tthis._data = new WordArray.init();\n\t\t\t\tthis._nDataBytes = 0;\n\t\t\t},\n\n\t\t\t/**\n    * Adds new data to this block algorithm's buffer.\n    *\n    * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.\n    *\n    * @example\n    *\n    *     bufferedBlockAlgorithm._append('data');\n    *     bufferedBlockAlgorithm._append(wordArray);\n    */\n\t\t\t_append: function (data) {\n\t\t\t\t// Convert string to WordArray, else assume WordArray already\n\t\t\t\tif (typeof data == 'string') {\n\t\t\t\t\tdata = Utf8.parse(data);\n\t\t\t\t}\n\n\t\t\t\t// Append\n\t\t\t\tthis._data.concat(data);\n\t\t\t\tthis._nDataBytes += data.sigBytes;\n\t\t\t},\n\n\t\t\t/**\n    * Processes available data blocks.\n    *\n    * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.\n    *\n    * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.\n    *\n    * @return {WordArray} The processed data.\n    *\n    * @example\n    *\n    *     var processedData = bufferedBlockAlgorithm._process();\n    *     var processedData = bufferedBlockAlgorithm._process(!!'flush');\n    */\n\t\t\t_process: function (doFlush) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\t\t\t\tvar dataSigBytes = data.sigBytes;\n\t\t\t\tvar blockSize = this.blockSize;\n\t\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t\t// Count blocks ready\n\t\t\t\tvar nBlocksReady = dataSigBytes / blockSizeBytes;\n\t\t\t\tif (doFlush) {\n\t\t\t\t\t// Round up to include partial blocks\n\t\t\t\t\tnBlocksReady = Math.ceil(nBlocksReady);\n\t\t\t\t} else {\n\t\t\t\t\t// Round down to include only full blocks,\n\t\t\t\t\t// less the number of blocks that must remain in the buffer\n\t\t\t\t\tnBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);\n\t\t\t\t}\n\n\t\t\t\t// Count words ready\n\t\t\t\tvar nWordsReady = nBlocksReady * blockSize;\n\n\t\t\t\t// Count bytes ready\n\t\t\t\tvar nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);\n\n\t\t\t\t// Process blocks\n\t\t\t\tif (nWordsReady) {\n\t\t\t\t\tfor (var offset = 0; offset < nWordsReady; offset += blockSize) {\n\t\t\t\t\t\t// Perform concrete-algorithm logic\n\t\t\t\t\t\tthis._doProcessBlock(dataWords, offset);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Remove processed words\n\t\t\t\t\tvar processedWords = dataWords.splice(0, nWordsReady);\n\t\t\t\t\tdata.sigBytes -= nBytesReady;\n\t\t\t\t}\n\n\t\t\t\t// Return processed words\n\t\t\t\treturn new WordArray.init(processedWords, nBytesReady);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this object.\n    *\n    * @return {Object} The clone.\n    *\n    * @example\n    *\n    *     var clone = bufferedBlockAlgorithm.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\t\t\t\tclone._data = this._data.clone();\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\t_minBufferSize: 0\n\t\t});\n\n\t\t/**\n   * Abstract hasher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)\n   */\n\t\tvar Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({\n\t\t\t/**\n    * Configuration options.\n    */\n\t\t\tcfg: Base.extend(),\n\n\t\t\t/**\n    * Initializes a newly created hasher.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for this hash computation.\n    *\n    * @example\n    *\n    *     var hasher = CryptoJS.algo.SHA256.create();\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this hasher to its initial state.\n    *\n    * @example\n    *\n    *     hasher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Reset data buffer\n\t\t\t\tBufferedBlockAlgorithm.reset.call(this);\n\n\t\t\t\t// Perform concrete-hasher logic\n\t\t\t\tthis._doReset();\n\t\t\t},\n\n\t\t\t/**\n    * Updates this hasher with a message.\n    *\n    * @param {WordArray|string} messageUpdate The message to append.\n    *\n    * @return {Hasher} This hasher.\n    *\n    * @example\n    *\n    *     hasher.update('message');\n    *     hasher.update(wordArray);\n    */\n\t\t\tupdate: function (messageUpdate) {\n\t\t\t\t// Append\n\t\t\t\tthis._append(messageUpdate);\n\n\t\t\t\t// Update the hash\n\t\t\t\tthis._process();\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the hash computation.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} messageUpdate (Optional) A final message update.\n    *\n    * @return {WordArray} The hash.\n    *\n    * @example\n    *\n    *     var hash = hasher.finalize();\n    *     var hash = hasher.finalize('message');\n    *     var hash = hasher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (messageUpdate) {\n\t\t\t\t// Final message update\n\t\t\t\tif (messageUpdate) {\n\t\t\t\t\tthis._append(messageUpdate);\n\t\t\t\t}\n\n\t\t\t\t// Perform concrete-hasher logic\n\t\t\t\tvar hash = this._doFinalize();\n\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tblockSize: 512 / 32,\n\n\t\t\t/**\n    * Creates a shortcut function to a hasher's object interface.\n    *\n    * @param {Hasher} hasher The hasher to create a helper for.\n    *\n    * @return {Function} The shortcut function.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);\n    */\n\t\t\t_createHelper: function (hasher) {\n\t\t\t\treturn function (message, cfg) {\n\t\t\t\t\treturn new hasher.init(cfg).finalize(message);\n\t\t\t\t};\n\t\t\t},\n\n\t\t\t/**\n    * Creates a shortcut function to the HMAC's object interface.\n    *\n    * @param {Hasher} hasher The hasher to use in this HMAC helper.\n    *\n    * @return {Function} The shortcut function.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);\n    */\n\t\t\t_createHmacHelper: function (hasher) {\n\t\t\t\treturn function (message, key) {\n\t\t\t\t\treturn new C_algo.HMAC.init(hasher, key).finalize(message);\n\t\t\t\t};\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Algorithm namespace.\n   */\n\t\tvar C_algo = C.algo = {};\n\n\t\treturn C;\n\t}(Math);\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/core.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/enc-base64.js':
                    /*!**********************************************!*\
        !*** ./node_modules/crypto-js/enc-base64.js ***!
        \**********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_enc = C.enc;\n\n\t\t/**\n   * Base64 encoding strategy.\n   */\n\t\tvar Base64 = C_enc.Base64 = {\n\t\t\t/**\n    * Converts a word array to a Base64 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The Base64 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\t\t\t\tvar map = this._map;\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\twordArray.clamp();\n\n\t\t\t\t// Convert\n\t\t\t\tvar base64Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 3) {\n\t\t\t\t\tvar byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\tvar byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;\n\t\t\t\t\tvar byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;\n\n\t\t\t\t\tvar triplet = byte1 << 16 | byte2 << 8 | byte3;\n\n\t\t\t\t\tfor (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {\n\t\t\t\t\t\tbase64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Add padding\n\t\t\t\tvar paddingChar = map.charAt(64);\n\t\t\t\tif (paddingChar) {\n\t\t\t\t\twhile (base64Chars.length % 4) {\n\t\t\t\t\t\tbase64Chars.push(paddingChar);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn base64Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a Base64 string to a word array.\n    *\n    * @param {string} base64Str The Base64 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Base64.parse(base64String);\n    */\n\t\t\tparse: function (base64Str) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar base64StrLength = base64Str.length;\n\t\t\t\tvar map = this._map;\n\t\t\t\tvar reverseMap = this._reverseMap;\n\n\t\t\t\tif (!reverseMap) {\n\t\t\t\t\treverseMap = this._reverseMap = [];\n\t\t\t\t\tfor (var j = 0; j < map.length; j++) {\n\t\t\t\t\t\treverseMap[map.charCodeAt(j)] = j;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Ignore padding\n\t\t\t\tvar paddingChar = map.charAt(64);\n\t\t\t\tif (paddingChar) {\n\t\t\t\t\tvar paddingIndex = base64Str.indexOf(paddingChar);\n\t\t\t\t\tif (paddingIndex !== -1) {\n\t\t\t\t\t\tbase64StrLength = paddingIndex;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Convert\n\t\t\t\treturn parseLoop(base64Str, base64StrLength, reverseMap);\n\t\t\t},\n\n\t\t\t_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='\n\t\t};\n\n\t\tfunction parseLoop(base64Str, base64StrLength, reverseMap) {\n\t\t\tvar words = [];\n\t\t\tvar nBytes = 0;\n\t\t\tfor (var i = 0; i < base64StrLength; i++) {\n\t\t\t\tif (i % 4) {\n\t\t\t\t\tvar bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;\n\t\t\t\t\tvar bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;\n\t\t\t\t\twords[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;\n\t\t\t\t\tnBytes++;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn WordArray.create(words, nBytes);\n\t\t}\n\t})();\n\n\treturn CryptoJS.enc.Base64;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/enc-base64.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/enc-utf16.js':
                    /*!*********************************************!*\
        !*** ./node_modules/crypto-js/enc-utf16.js ***!
        \*********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_enc = C.enc;\n\n\t\t/**\n   * UTF-16 BE encoding strategy.\n   */\n\t\tvar Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {\n\t\t\t/**\n    * Converts a word array to a UTF-16 BE string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-16 BE string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar utf16Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 2) {\n\t\t\t\t\tvar codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;\n\t\t\t\t\tutf16Chars.push(String.fromCharCode(codePoint));\n\t\t\t\t}\n\n\t\t\t\treturn utf16Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-16 BE string to a word array.\n    *\n    * @param {string} utf16Str The UTF-16 BE string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);\n    */\n\t\t\tparse: function (utf16Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar utf16StrLength = utf16Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < utf16StrLength; i++) {\n\t\t\t\t\twords[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;\n\t\t\t\t}\n\n\t\t\t\treturn WordArray.create(words, utf16StrLength * 2);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * UTF-16 LE encoding strategy.\n   */\n\t\tC_enc.Utf16LE = {\n\t\t\t/**\n    * Converts a word array to a UTF-16 LE string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-16 LE string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar utf16Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 2) {\n\t\t\t\t\tvar codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);\n\t\t\t\t\tutf16Chars.push(String.fromCharCode(codePoint));\n\t\t\t\t}\n\n\t\t\t\treturn utf16Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-16 LE string to a word array.\n    *\n    * @param {string} utf16Str The UTF-16 LE string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);\n    */\n\t\t\tparse: function (utf16Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar utf16StrLength = utf16Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < utf16StrLength; i++) {\n\t\t\t\t\twords[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);\n\t\t\t\t}\n\n\t\t\t\treturn WordArray.create(words, utf16StrLength * 2);\n\t\t\t}\n\t\t};\n\n\t\tfunction swapEndian(word) {\n\t\t\treturn word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;\n\t\t}\n\t})();\n\n\treturn CryptoJS.enc.Utf16;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/enc-utf16.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/evpkdf.js':
                    /*!******************************************!*\
        !*** ./node_modules/crypto-js/evpkdf.js ***!
        \******************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar MD5 = C_algo.MD5;\n\n\t\t/**\n   * This key derivation function is meant to conform with EVP_BytesToKey.\n   * www.openssl.org/docs/crypto/EVP_BytesToKey.html\n   */\n\t\tvar EvpKDF = C_algo.EvpKDF = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)\n    * @property {Hasher} hasher The hash algorithm to use. Default: MD5\n    * @property {number} iterations The number of iterations to perform. Default: 1\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tkeySize: 128 / 32,\n\t\t\t\thasher: MD5,\n\t\t\t\titerations: 1\n\t\t\t}),\n\n\t\t\t/**\n    * Initializes a newly created key derivation function.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for the derivation.\n    *\n    * @example\n    *\n    *     var kdf = CryptoJS.algo.EvpKDF.create();\n    *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });\n    *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Derives a key from a password.\n    *\n    * @param {WordArray|string} password The password.\n    * @param {WordArray|string} salt A salt.\n    *\n    * @return {WordArray} The derived key.\n    *\n    * @example\n    *\n    *     var key = kdf.compute(password, salt);\n    */\n\t\t\tcompute: function (password, salt) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar cfg = this.cfg;\n\n\t\t\t\t// Init hasher\n\t\t\t\tvar hasher = cfg.hasher.create();\n\n\t\t\t\t// Initial values\n\t\t\t\tvar derivedKey = WordArray.create();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar derivedKeyWords = derivedKey.words;\n\t\t\t\tvar keySize = cfg.keySize;\n\t\t\t\tvar iterations = cfg.iterations;\n\n\t\t\t\t// Generate key\n\t\t\t\twhile (derivedKeyWords.length < keySize) {\n\t\t\t\t\tif (block) {\n\t\t\t\t\t\thasher.update(block);\n\t\t\t\t\t}\n\t\t\t\t\tvar block = hasher.update(password).finalize(salt);\n\t\t\t\t\thasher.reset();\n\n\t\t\t\t\t// Iterations\n\t\t\t\t\tfor (var i = 1; i < iterations; i++) {\n\t\t\t\t\t\tblock = hasher.finalize(block);\n\t\t\t\t\t\thasher.reset();\n\t\t\t\t\t}\n\n\t\t\t\t\tderivedKey.concat(block);\n\t\t\t\t}\n\t\t\t\tderivedKey.sigBytes = keySize * 4;\n\n\t\t\t\treturn derivedKey;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Derives a key from a password.\n   *\n   * @param {WordArray|string} password The password.\n   * @param {WordArray|string} salt A salt.\n   * @param {Object} cfg (Optional) The configuration options to use for this computation.\n   *\n   * @return {WordArray} The derived key.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var key = CryptoJS.EvpKDF(password, salt);\n   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });\n   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });\n   */\n\t\tC.EvpKDF = function (password, salt, cfg) {\n\t\t\treturn EvpKDF.create(cfg).compute(password, salt);\n\t\t};\n\t})();\n\n\treturn CryptoJS.EvpKDF;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/evpkdf.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/format-hex.js':
                    /*!**********************************************!*\
        !*** ./node_modules/crypto-js/format-hex.js ***!
        \**********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar CipherParams = C_lib.CipherParams;\n\t\tvar C_enc = C.enc;\n\t\tvar Hex = C_enc.Hex;\n\t\tvar C_format = C.format;\n\n\t\tvar HexFormatter = C_format.Hex = {\n\t\t\t/**\n    * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.\n    *\n    * @param {CipherParams} cipherParams The cipher params object.\n    *\n    * @return {string} The hexadecimally encoded string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);\n    */\n\t\t\tstringify: function (cipherParams) {\n\t\t\t\treturn cipherParams.ciphertext.toString(Hex);\n\t\t\t},\n\n\t\t\t/**\n    * Converts a hexadecimally encoded ciphertext string to a cipher params object.\n    *\n    * @param {string} input The hexadecimally encoded string.\n    *\n    * @return {CipherParams} The cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.format.Hex.parse(hexString);\n    */\n\t\t\tparse: function (input) {\n\t\t\t\tvar ciphertext = Hex.parse(input);\n\t\t\t\treturn CipherParams.create({ ciphertext: ciphertext });\n\t\t\t}\n\t\t};\n\t})();\n\n\treturn CryptoJS.format.Hex;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/format-hex.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/hmac.js':
                    /*!****************************************!*\
        !*** ./node_modules/crypto-js/hmac.js ***!
        \****************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar C_enc = C.enc;\n\t\tvar Utf8 = C_enc.Utf8;\n\t\tvar C_algo = C.algo;\n\n\t\t/**\n   * HMAC algorithm.\n   */\n\t\tvar HMAC = C_algo.HMAC = Base.extend({\n\t\t\t/**\n    * Initializes a newly created HMAC.\n    *\n    * @param {Hasher} hasher The hash algorithm to use.\n    * @param {WordArray|string} key The secret key.\n    *\n    * @example\n    *\n    *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);\n    */\n\t\t\tinit: function (hasher, key) {\n\t\t\t\t// Init hasher\n\t\t\t\thasher = this._hasher = new hasher.init();\n\n\t\t\t\t// Convert string to WordArray, else assume WordArray already\n\t\t\t\tif (typeof key == 'string') {\n\t\t\t\t\tkey = Utf8.parse(key);\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hasherBlockSize = hasher.blockSize;\n\t\t\t\tvar hasherBlockSizeBytes = hasherBlockSize * 4;\n\n\t\t\t\t// Allow arbitrary length keys\n\t\t\t\tif (key.sigBytes > hasherBlockSizeBytes) {\n\t\t\t\t\tkey = hasher.finalize(key);\n\t\t\t\t}\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\tkey.clamp();\n\n\t\t\t\t// Clone key for inner and outer pads\n\t\t\t\tvar oKey = this._oKey = key.clone();\n\t\t\t\tvar iKey = this._iKey = key.clone();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar oKeyWords = oKey.words;\n\t\t\t\tvar iKeyWords = iKey.words;\n\n\t\t\t\t// XOR keys with pad constants\n\t\t\t\tfor (var i = 0; i < hasherBlockSize; i++) {\n\t\t\t\t\toKeyWords[i] ^= 0x5c5c5c5c;\n\t\t\t\t\tiKeyWords[i] ^= 0x36363636;\n\t\t\t\t}\n\t\t\t\toKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this HMAC to its initial state.\n    *\n    * @example\n    *\n    *     hmacHasher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hasher = this._hasher;\n\n\t\t\t\t// Reset\n\t\t\t\thasher.reset();\n\t\t\t\thasher.update(this._iKey);\n\t\t\t},\n\n\t\t\t/**\n    * Updates this HMAC with a message.\n    *\n    * @param {WordArray|string} messageUpdate The message to append.\n    *\n    * @return {HMAC} This HMAC instance.\n    *\n    * @example\n    *\n    *     hmacHasher.update('message');\n    *     hmacHasher.update(wordArray);\n    */\n\t\t\tupdate: function (messageUpdate) {\n\t\t\t\tthis._hasher.update(messageUpdate);\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the HMAC computation.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} messageUpdate (Optional) A final message update.\n    *\n    * @return {WordArray} The HMAC.\n    *\n    * @example\n    *\n    *     var hmac = hmacHasher.finalize();\n    *     var hmac = hmacHasher.finalize('message');\n    *     var hmac = hmacHasher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (messageUpdate) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hasher = this._hasher;\n\n\t\t\t\t// Compute HMAC\n\t\t\t\tvar innerHash = hasher.finalize(messageUpdate);\n\t\t\t\thasher.reset();\n\t\t\t\tvar hmac = hasher.finalize(this._oKey.clone().concat(innerHash));\n\n\t\t\t\treturn hmac;\n\t\t\t}\n\t\t});\n\t})();\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/hmac.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/index.js':
                    /*!*****************************************!*\
        !*** ./node_modules/crypto-js/index.js ***!
        \*****************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./lib-typedarrays */ "./node_modules/crypto-js/lib-typedarrays.js"), __webpack_require__(/*! ./enc-utf16 */ "./node_modules/crypto-js/enc-utf16.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"), __webpack_require__(/*! ./sha224 */ "./node_modules/crypto-js/sha224.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"), __webpack_require__(/*! ./sha384 */ "./node_modules/crypto-js/sha384.js"), __webpack_require__(/*! ./sha3 */ "./node_modules/crypto-js/sha3.js"), __webpack_require__(/*! ./ripemd160 */ "./node_modules/crypto-js/ripemd160.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"), __webpack_require__(/*! ./pbkdf2 */ "./node_modules/crypto-js/pbkdf2.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"), __webpack_require__(/*! ./mode-cfb */ "./node_modules/crypto-js/mode-cfb.js"), __webpack_require__(/*! ./mode-ctr */ "./node_modules/crypto-js/mode-ctr.js"), __webpack_require__(/*! ./mode-ctr-gladman */ "./node_modules/crypto-js/mode-ctr-gladman.js"), __webpack_require__(/*! ./mode-ofb */ "./node_modules/crypto-js/mode-ofb.js"), __webpack_require__(/*! ./mode-ecb */ "./node_modules/crypto-js/mode-ecb.js"), __webpack_require__(/*! ./pad-ansix923 */ "./node_modules/crypto-js/pad-ansix923.js"), __webpack_require__(/*! ./pad-iso10126 */ "./node_modules/crypto-js/pad-iso10126.js"), __webpack_require__(/*! ./pad-iso97971 */ "./node_modules/crypto-js/pad-iso97971.js"), __webpack_require__(/*! ./pad-zeropadding */ "./node_modules/crypto-js/pad-zeropadding.js"), __webpack_require__(/*! ./pad-nopadding */ "./node_modules/crypto-js/pad-nopadding.js"), __webpack_require__(/*! ./format-hex */ "./node_modules/crypto-js/format-hex.js"), __webpack_require__(/*! ./aes */ "./node_modules/crypto-js/aes.js"), __webpack_require__(/*! ./tripledes */ "./node_modules/crypto-js/tripledes.js"), __webpack_require__(/*! ./rc4 */ "./node_modules/crypto-js/rc4.js"), __webpack_require__(/*! ./rabbit */ "./node_modules/crypto-js/rabbit.js"), __webpack_require__(/*! ./rabbit-legacy */ "./node_modules/crypto-js/rabbit-legacy.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/index.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/lib-typedarrays.js':
                    /*!***************************************************!*\
        !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
        \***************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Check if typed arrays are supported\n\t\tif (typeof ArrayBuffer != \'function\') {\n\t\t\treturn;\n\t\t}\n\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\n\t\t// Reference original init\n\t\tvar superInit = WordArray.init;\n\n\t\t// Augment WordArray.init to handle typed arrays\n\t\tvar subInit = WordArray.init = function (typedArray) {\n\t\t\t// Convert buffers to uint8\n\t\t\tif (typedArray instanceof ArrayBuffer) {\n\t\t\t\ttypedArray = new Uint8Array(typedArray);\n\t\t\t}\n\n\t\t\t// Convert other array views to uint8\n\t\t\tif (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {\n\t\t\t\ttypedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);\n\t\t\t}\n\n\t\t\t// Handle Uint8Array\n\t\t\tif (typedArray instanceof Uint8Array) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar typedArrayByteLength = typedArray.byteLength;\n\n\t\t\t\t// Extract bytes\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < typedArrayByteLength; i++) {\n\t\t\t\t\twords[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;\n\t\t\t\t}\n\n\t\t\t\t// Initialize this word array\n\t\t\t\tsuperInit.call(this, words, typedArrayByteLength);\n\t\t\t} else {\n\t\t\t\t// Else call normal init\n\t\t\t\tsuperInit.apply(this, arguments);\n\t\t\t}\n\t\t};\n\n\t\tsubInit.prototype = WordArray;\n\t})();\n\n\treturn CryptoJS.lib.WordArray;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/lib-typedarrays.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/md5.js':
                    /*!***************************************!*\
        !*** ./node_modules/crypto-js/md5.js ***!
        \***************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants table\n\t\tvar T = [];\n\n\t\t// Compute constants\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 64; i++) {\n\t\t\t\tT[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * MD5 hash algorithm.\n   */\n\t\tvar MD5 = C_algo.MD5 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar offset_i = offset + i;\n\t\t\t\t\tvar M_offset_i = M[offset_i];\n\n\t\t\t\t\tM[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\tvar M_offset_0 = M[offset + 0];\n\t\t\t\tvar M_offset_1 = M[offset + 1];\n\t\t\t\tvar M_offset_2 = M[offset + 2];\n\t\t\t\tvar M_offset_3 = M[offset + 3];\n\t\t\t\tvar M_offset_4 = M[offset + 4];\n\t\t\t\tvar M_offset_5 = M[offset + 5];\n\t\t\t\tvar M_offset_6 = M[offset + 6];\n\t\t\t\tvar M_offset_7 = M[offset + 7];\n\t\t\t\tvar M_offset_8 = M[offset + 8];\n\t\t\t\tvar M_offset_9 = M[offset + 9];\n\t\t\t\tvar M_offset_10 = M[offset + 10];\n\t\t\t\tvar M_offset_11 = M[offset + 11];\n\t\t\t\tvar M_offset_12 = M[offset + 12];\n\t\t\t\tvar M_offset_13 = M[offset + 13];\n\t\t\t\tvar M_offset_14 = M[offset + 14];\n\t\t\t\tvar M_offset_15 = M[offset + 15];\n\n\t\t\t\t// Working varialbes\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\n\t\t\t\t// Computation\n\t\t\t\ta = FF(a, b, c, d, M_offset_0, 7, T[0]);\n\t\t\t\td = FF(d, a, b, c, M_offset_1, 12, T[1]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_2, 17, T[2]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_3, 22, T[3]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_4, 7, T[4]);\n\t\t\t\td = FF(d, a, b, c, M_offset_5, 12, T[5]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_6, 17, T[6]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_7, 22, T[7]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_8, 7, T[8]);\n\t\t\t\td = FF(d, a, b, c, M_offset_9, 12, T[9]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_10, 17, T[10]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_11, 22, T[11]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_12, 7, T[12]);\n\t\t\t\td = FF(d, a, b, c, M_offset_13, 12, T[13]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_14, 17, T[14]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_15, 22, T[15]);\n\n\t\t\t\ta = GG(a, b, c, d, M_offset_1, 5, T[16]);\n\t\t\t\td = GG(d, a, b, c, M_offset_6, 9, T[17]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_11, 14, T[18]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_0, 20, T[19]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_5, 5, T[20]);\n\t\t\t\td = GG(d, a, b, c, M_offset_10, 9, T[21]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_15, 14, T[22]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_4, 20, T[23]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_9, 5, T[24]);\n\t\t\t\td = GG(d, a, b, c, M_offset_14, 9, T[25]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_3, 14, T[26]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_8, 20, T[27]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_13, 5, T[28]);\n\t\t\t\td = GG(d, a, b, c, M_offset_2, 9, T[29]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_7, 14, T[30]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_12, 20, T[31]);\n\n\t\t\t\ta = HH(a, b, c, d, M_offset_5, 4, T[32]);\n\t\t\t\td = HH(d, a, b, c, M_offset_8, 11, T[33]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_11, 16, T[34]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_14, 23, T[35]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_1, 4, T[36]);\n\t\t\t\td = HH(d, a, b, c, M_offset_4, 11, T[37]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_7, 16, T[38]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_10, 23, T[39]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_13, 4, T[40]);\n\t\t\t\td = HH(d, a, b, c, M_offset_0, 11, T[41]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_3, 16, T[42]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_6, 23, T[43]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_9, 4, T[44]);\n\t\t\t\td = HH(d, a, b, c, M_offset_12, 11, T[45]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_15, 16, T[46]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_2, 23, T[47]);\n\n\t\t\t\ta = II(a, b, c, d, M_offset_0, 6, T[48]);\n\t\t\t\td = II(d, a, b, c, M_offset_7, 10, T[49]);\n\t\t\t\tc = II(c, d, a, b, M_offset_14, 15, T[50]);\n\t\t\t\tb = II(b, c, d, a, M_offset_5, 21, T[51]);\n\t\t\t\ta = II(a, b, c, d, M_offset_12, 6, T[52]);\n\t\t\t\td = II(d, a, b, c, M_offset_3, 10, T[53]);\n\t\t\t\tc = II(c, d, a, b, M_offset_10, 15, T[54]);\n\t\t\t\tb = II(b, c, d, a, M_offset_1, 21, T[55]);\n\t\t\t\ta = II(a, b, c, d, M_offset_8, 6, T[56]);\n\t\t\t\td = II(d, a, b, c, M_offset_15, 10, T[57]);\n\t\t\t\tc = II(c, d, a, b, M_offset_6, 15, T[58]);\n\t\t\t\tb = II(b, c, d, a, M_offset_13, 21, T[59]);\n\t\t\t\ta = II(a, b, c, d, M_offset_4, 6, T[60]);\n\t\t\t\td = II(d, a, b, c, M_offset_11, 10, T[61]);\n\t\t\t\tc = II(c, d, a, b, M_offset_2, 15, T[62]);\n\t\t\t\tb = II(b, c, d, a, M_offset_9, 21, T[63]);\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\n\t\t\t\tvar nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tvar nBitsTotalL = nBitsTotal;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;\n\n\t\t\t\tdata.sigBytes = (dataWords.length + 1) * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hash = this._hash;\n\t\t\t\tvar H = hash.words;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar H_i = H[i];\n\n\t\t\t\t\tH[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\tfunction FF(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b & c | ~b & d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction GG(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b & d | c & ~d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction HH(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b ^ c ^ d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction II(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (c ^ (b | ~d)) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.MD5('message');\n   *     var hash = CryptoJS.MD5(wordArray);\n   */\n\t\tC.MD5 = Hasher._createHelper(MD5);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacMD5(message, key);\n   */\n\t\tC.HmacMD5 = Hasher._createHmacHelper(MD5);\n\t})(Math);\n\n\treturn CryptoJS.MD5;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/md5.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/mode-cfb.js':
                    /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-cfb.js ***!
        \********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Cipher Feedback block mode.\n  */\n\tCryptoJS.mode.CFB = function () {\n\t\tvar CFB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tCFB.Encryptor = CFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\tgenerateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);\n\n\t\t\t\t// Remember this block to use with next block\n\t\t\t\tthis._prevBlock = words.slice(offset, offset + blockSize);\n\t\t\t}\n\t\t});\n\n\t\tCFB.Decryptor = CFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t// Remember this block to use with next block\n\t\t\t\tvar thisBlock = words.slice(offset, offset + blockSize);\n\n\t\t\t\tgenerateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);\n\n\t\t\t\t// This block becomes the previous block\n\t\t\t\tthis._prevBlock = thisBlock;\n\t\t\t}\n\t\t});\n\n\t\tfunction generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {\n\t\t\t// Shortcut\n\t\t\tvar iv = this._iv;\n\n\t\t\t// Generate keystream\n\t\t\tif (iv) {\n\t\t\t\tvar keystream = iv.slice(0);\n\n\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\tthis._iv = undefined;\n\t\t\t} else {\n\t\t\t\tvar keystream = this._prevBlock;\n\t\t\t}\n\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t// Encrypt\n\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t}\n\t\t}\n\n\t\treturn CFB;\n\t}();\n\n\treturn CryptoJS.mode.CFB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-cfb.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/mode-ctr-gladman.js':
                    /*!****************************************************!*\
        !*** ./node_modules/crypto-js/mode-ctr-gladman.js ***!
        \****************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/** @preserve\n  * Counter block mode compatible with  Dr Brian Gladman fileenc.c\n  * derived from CryptoJS.mode.CTR\n  * Jan Hruby jhruby.web@gmail.com\n  */\n\tCryptoJS.mode.CTRGladman = function () {\n\t\tvar CTRGladman = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tfunction incWord(word) {\n\t\t\tif ((word >> 24 & 0xff) === 0xff) {\n\t\t\t\t//overflow\n\t\t\t\tvar b1 = word >> 16 & 0xff;\n\t\t\t\tvar b2 = word >> 8 & 0xff;\n\t\t\t\tvar b3 = word & 0xff;\n\n\t\t\t\tif (b1 === 0xff) // overflow b1\n\t\t\t\t\t{\n\t\t\t\t\t\tb1 = 0;\n\t\t\t\t\t\tif (b2 === 0xff) {\n\t\t\t\t\t\t\tb2 = 0;\n\t\t\t\t\t\t\tif (b3 === 0xff) {\n\t\t\t\t\t\t\t\tb3 = 0;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t++b3;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t++b2;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t++b1;\n\t\t\t\t}\n\n\t\t\t\tword = 0;\n\t\t\t\tword += b1 << 16;\n\t\t\t\tword += b2 << 8;\n\t\t\t\tword += b3;\n\t\t\t} else {\n\t\t\t\tword += 0x01 << 24;\n\t\t\t}\n\t\t\treturn word;\n\t\t}\n\n\t\tfunction incCounter(counter) {\n\t\t\tif ((counter[0] = incWord(counter[0])) === 0) {\n\t\t\t\t// encr_data in fileenc.c from  Dr Brian Gladman\'s counts only with DWORD j < 8\n\t\t\t\tcounter[1] = incWord(counter[1]);\n\t\t\t}\n\t\t\treturn counter;\n\t\t}\n\n\t\tvar Encryptor = CTRGladman.Encryptor = CTRGladman.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar counter = this._counter;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tcounter = this._counter = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\n\t\t\t\tincCounter(counter);\n\n\t\t\t\tvar keystream = counter.slice(0);\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tCTRGladman.Decryptor = Encryptor;\n\n\t\treturn CTRGladman;\n\t}();\n\n\treturn CryptoJS.mode.CTRGladman;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ctr-gladman.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/mode-ctr.js':
                    /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-ctr.js ***!
        \********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Counter block mode.\n  */\n\tCryptoJS.mode.CTR = function () {\n\t\tvar CTR = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tvar Encryptor = CTR.Encryptor = CTR.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar counter = this._counter;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tcounter = this._counter = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\t\t\t\tvar keystream = counter.slice(0);\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Increment counter\n\t\t\t\tcounter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tCTR.Decryptor = Encryptor;\n\n\t\treturn CTR;\n\t}();\n\n\treturn CryptoJS.mode.CTR;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ctr.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/mode-ecb.js':
                    /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-ecb.js ***!
        \********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Electronic Codebook block mode.\n  */\n\tCryptoJS.mode.ECB = function () {\n\t\tvar ECB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tECB.Encryptor = ECB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\tthis._cipher.encryptBlock(words, offset);\n\t\t\t}\n\t\t});\n\n\t\tECB.Decryptor = ECB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\tthis._cipher.decryptBlock(words, offset);\n\t\t\t}\n\t\t});\n\n\t\treturn ECB;\n\t}();\n\n\treturn CryptoJS.mode.ECB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ecb.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/mode-ofb.js':
                    /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-ofb.js ***!
        \********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Output Feedback block mode.\n  */\n\tCryptoJS.mode.OFB = function () {\n\t\tvar OFB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tvar Encryptor = OFB.Encryptor = OFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar keystream = this._keystream;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tkeystream = this._keystream = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tOFB.Decryptor = Encryptor;\n\n\t\treturn OFB;\n\t}();\n\n\treturn CryptoJS.mode.OFB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ofb.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/pad-ansix923.js':
                    /*!************************************************!*\
        !*** ./node_modules/crypto-js/pad-ansix923.js ***!
        \************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ANSI X.923 padding strategy.\n  */\n\tCryptoJS.pad.AnsiX923 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcuts\n\t\t\tvar dataSigBytes = data.sigBytes;\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Count padding bytes\n\t\t\tvar nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;\n\n\t\t\t// Compute last byte position\n\t\t\tvar lastBytePos = dataSigBytes + nPaddingBytes - 1;\n\n\t\t\t// Pad\n\t\t\tdata.clamp();\n\t\t\tdata.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;\n\t\t\tdata.sigBytes += nPaddingBytes;\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Get number of padding bytes from last byte\n\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t// Remove padding\n\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Ansix923;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-ansix923.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/pad-iso10126.js':
                    /*!************************************************!*\
        !*** ./node_modules/crypto-js/pad-iso10126.js ***!
        \************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ISO 10126 padding strategy.\n  */\n\tCryptoJS.pad.Iso10126 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcut\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Count padding bytes\n\t\t\tvar nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;\n\n\t\t\t// Pad\n\t\t\tdata.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Get number of padding bytes from last byte\n\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t// Remove padding\n\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Iso10126;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-iso10126.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/pad-iso97971.js':
                    /*!************************************************!*\
        !*** ./node_modules/crypto-js/pad-iso97971.js ***!
        \************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ISO/IEC 9797-1 Padding Method 2.\n  */\n\tCryptoJS.pad.Iso97971 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Add 0x80 byte\n\t\t\tdata.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));\n\n\t\t\t// Zero pad the rest\n\t\t\tCryptoJS.pad.ZeroPadding.pad(data, blockSize);\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Remove zero padding\n\t\t\tCryptoJS.pad.ZeroPadding.unpad(data);\n\n\t\t\t// Remove one more byte -- the 0x80 byte\n\t\t\tdata.sigBytes--;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Iso97971;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-iso97971.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/pad-nopadding.js':
                    /*!*************************************************!*\
        !*** ./node_modules/crypto-js/pad-nopadding.js ***!
        \*************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * A noop padding strategy.\n  */\n\tCryptoJS.pad.NoPadding = {\n\t\tpad: function () {},\n\n\t\tunpad: function () {}\n\t};\n\n\treturn CryptoJS.pad.NoPadding;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-nopadding.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/pad-zeropadding.js':
                    /*!***************************************************!*\
        !*** ./node_modules/crypto-js/pad-zeropadding.js ***!
        \***************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Zero padding strategy.\n  */\n\tCryptoJS.pad.ZeroPadding = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcut\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Pad\n\t\t\tdata.clamp();\n\t\t\tdata.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Shortcut\n\t\t\tvar dataWords = data.words;\n\n\t\t\t// Unpad\n\t\t\tvar i = data.sigBytes - 1;\n\t\t\twhile (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff)) {\n\t\t\t\ti--;\n\t\t\t}\n\t\t\tdata.sigBytes = i + 1;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.ZeroPadding;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-zeropadding.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/pbkdf2.js':
                    /*!******************************************!*\
        !*** ./node_modules/crypto-js/pbkdf2.js ***!
        \******************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA1 = C_algo.SHA1;\n\t\tvar HMAC = C_algo.HMAC;\n\n\t\t/**\n   * Password-Based Key Derivation Function 2 algorithm.\n   */\n\t\tvar PBKDF2 = C_algo.PBKDF2 = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)\n    * @property {Hasher} hasher The hasher to use. Default: SHA1\n    * @property {number} iterations The number of iterations to perform. Default: 1\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tkeySize: 128 / 32,\n\t\t\t\thasher: SHA1,\n\t\t\t\titerations: 1\n\t\t\t}),\n\n\t\t\t/**\n    * Initializes a newly created key derivation function.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for the derivation.\n    *\n    * @example\n    *\n    *     var kdf = CryptoJS.algo.PBKDF2.create();\n    *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });\n    *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Computes the Password-Based Key Derivation Function 2.\n    *\n    * @param {WordArray|string} password The password.\n    * @param {WordArray|string} salt A salt.\n    *\n    * @return {WordArray} The derived key.\n    *\n    * @example\n    *\n    *     var key = kdf.compute(password, salt);\n    */\n\t\t\tcompute: function (password, salt) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar cfg = this.cfg;\n\n\t\t\t\t// Init HMAC\n\t\t\t\tvar hmac = HMAC.create(cfg.hasher, password);\n\n\t\t\t\t// Initial values\n\t\t\t\tvar derivedKey = WordArray.create();\n\t\t\t\tvar blockIndex = WordArray.create([0x00000001]);\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar derivedKeyWords = derivedKey.words;\n\t\t\t\tvar blockIndexWords = blockIndex.words;\n\t\t\t\tvar keySize = cfg.keySize;\n\t\t\t\tvar iterations = cfg.iterations;\n\n\t\t\t\t// Generate key\n\t\t\t\twhile (derivedKeyWords.length < keySize) {\n\t\t\t\t\tvar block = hmac.update(salt).finalize(blockIndex);\n\t\t\t\t\thmac.reset();\n\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar blockWords = block.words;\n\t\t\t\t\tvar blockWordsLength = blockWords.length;\n\n\t\t\t\t\t// Iterations\n\t\t\t\t\tvar intermediate = block;\n\t\t\t\t\tfor (var i = 1; i < iterations; i++) {\n\t\t\t\t\t\tintermediate = hmac.finalize(intermediate);\n\t\t\t\t\t\thmac.reset();\n\n\t\t\t\t\t\t// Shortcut\n\t\t\t\t\t\tvar intermediateWords = intermediate.words;\n\n\t\t\t\t\t\t// XOR intermediate with block\n\t\t\t\t\t\tfor (var j = 0; j < blockWordsLength; j++) {\n\t\t\t\t\t\t\tblockWords[j] ^= intermediateWords[j];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tderivedKey.concat(block);\n\t\t\t\t\tblockIndexWords[0]++;\n\t\t\t\t}\n\t\t\t\tderivedKey.sigBytes = keySize * 4;\n\n\t\t\t\treturn derivedKey;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Computes the Password-Based Key Derivation Function 2.\n   *\n   * @param {WordArray|string} password The password.\n   * @param {WordArray|string} salt A salt.\n   * @param {Object} cfg (Optional) The configuration options to use for this computation.\n   *\n   * @return {WordArray} The derived key.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var key = CryptoJS.PBKDF2(password, salt);\n   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });\n   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });\n   */\n\t\tC.PBKDF2 = function (password, salt, cfg) {\n\t\t\treturn PBKDF2.create(cfg).compute(password, salt);\n\t\t};\n\t})();\n\n\treturn CryptoJS.PBKDF2;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pbkdf2.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/rabbit-legacy.js':
                    /*!*************************************************!*\
        !*** ./node_modules/crypto-js/rabbit-legacy.js ***!
        \*************************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable objects\n\t\tvar S = [];\n\t\tvar C_ = [];\n\t\tvar G = [];\n\n\t\t/**\n   * Rabbit stream cipher algorithm.\n   *\n   * This is a legacy version that neglected to convert the key to little-endian.\n   * This error doesn\'t affect the cipher\'s security,\n   * but it does affect its compatibility with other implementations.\n   */\n\t\tvar RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar K = this._key.words;\n\t\t\t\tvar iv = this.cfg.iv;\n\n\t\t\t\t// Generate initial state values\n\t\t\t\tvar X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];\n\n\t\t\t\t// Generate initial counter values\n\t\t\t\tvar C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];\n\n\t\t\t\t// Carry bit\n\t\t\t\tthis._b = 0;\n\n\t\t\t\t// Iterate the system four times\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tnextState.call(this);\n\t\t\t\t}\n\n\t\t\t\t// Modify the counters\n\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\tC[i] ^= X[i + 4 & 7];\n\t\t\t\t}\n\n\t\t\t\t// IV setup\n\t\t\t\tif (iv) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar IV = iv.words;\n\t\t\t\t\tvar IV_0 = IV[0];\n\t\t\t\t\tvar IV_1 = IV[1];\n\n\t\t\t\t\t// Generate four subvectors\n\t\t\t\t\tvar i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i1 = i0 >>> 16 | i2 & 0xffff0000;\n\t\t\t\t\tvar i3 = i2 << 16 | i0 & 0x0000ffff;\n\n\t\t\t\t\t// Modify counter values\n\t\t\t\t\tC[0] ^= i0;\n\t\t\t\t\tC[1] ^= i1;\n\t\t\t\t\tC[2] ^= i2;\n\t\t\t\t\tC[3] ^= i3;\n\t\t\t\t\tC[4] ^= i0;\n\t\t\t\t\tC[5] ^= i1;\n\t\t\t\t\tC[6] ^= i2;\n\t\t\t\t\tC[7] ^= i3;\n\n\t\t\t\t\t// Iterate the system four times\n\t\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t\tnextState.call(this);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar X = this._X;\n\n\t\t\t\t// Iterate the system\n\t\t\t\tnextState.call(this);\n\n\t\t\t\t// Generate four keystream words\n\t\t\t\tS[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;\n\t\t\t\tS[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;\n\t\t\t\tS[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;\n\t\t\t\tS[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;\n\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tS[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Encrypt\n\t\t\t\t\tM[offset + i] ^= S[i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32,\n\n\t\t\tivSize: 64 / 32\n\t\t});\n\n\t\tfunction nextState() {\n\t\t\t// Shortcuts\n\t\t\tvar X = this._X;\n\t\t\tvar C = this._C;\n\n\t\t\t// Save old counter values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tC_[i] = C[i];\n\t\t\t}\n\n\t\t\t// Calculate new counter values\n\t\t\tC[0] = C[0] + 0x4d34d34d + this._b | 0;\n\t\t\tC[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;\n\t\t\tthis._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;\n\n\t\t\t// Calculate the g-values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tvar gx = X[i] + C[i];\n\n\t\t\t\t// Construct high and low argument for squaring\n\t\t\t\tvar ga = gx & 0xffff;\n\t\t\t\tvar gb = gx >>> 16;\n\n\t\t\t\t// Calculate high and low result of squaring\n\t\t\t\tvar gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;\n\t\t\t\tvar gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);\n\n\t\t\t\t// High XOR low\n\t\t\t\tG[i] = gh ^ gl;\n\t\t\t}\n\n\t\t\t// Calculate new state values\n\t\t\tX[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;\n\t\t\tX[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;\n\t\t\tX[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;\n\t\t\tX[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;\n\t\t\tX[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;\n\t\t\tX[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;\n\t\t\tX[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;\n\t\t\tX[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);\n\t})();\n\n\treturn CryptoJS.RabbitLegacy;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rabbit-legacy.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/rabbit.js':
                    /*!******************************************!*\
        !*** ./node_modules/crypto-js/rabbit.js ***!
        \******************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable objects\n\t\tvar S = [];\n\t\tvar C_ = [];\n\t\tvar G = [];\n\n\t\t/**\n   * Rabbit stream cipher algorithm\n   */\n\t\tvar Rabbit = C_algo.Rabbit = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar K = this._key.words;\n\t\t\t\tvar iv = this.cfg.iv;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tK[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Generate initial state values\n\t\t\t\tvar X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];\n\n\t\t\t\t// Generate initial counter values\n\t\t\t\tvar C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];\n\n\t\t\t\t// Carry bit\n\t\t\t\tthis._b = 0;\n\n\t\t\t\t// Iterate the system four times\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tnextState.call(this);\n\t\t\t\t}\n\n\t\t\t\t// Modify the counters\n\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\tC[i] ^= X[i + 4 & 7];\n\t\t\t\t}\n\n\t\t\t\t// IV setup\n\t\t\t\tif (iv) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar IV = iv.words;\n\t\t\t\t\tvar IV_0 = IV[0];\n\t\t\t\t\tvar IV_1 = IV[1];\n\n\t\t\t\t\t// Generate four subvectors\n\t\t\t\t\tvar i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i1 = i0 >>> 16 | i2 & 0xffff0000;\n\t\t\t\t\tvar i3 = i2 << 16 | i0 & 0x0000ffff;\n\n\t\t\t\t\t// Modify counter values\n\t\t\t\t\tC[0] ^= i0;\n\t\t\t\t\tC[1] ^= i1;\n\t\t\t\t\tC[2] ^= i2;\n\t\t\t\t\tC[3] ^= i3;\n\t\t\t\t\tC[4] ^= i0;\n\t\t\t\t\tC[5] ^= i1;\n\t\t\t\t\tC[6] ^= i2;\n\t\t\t\t\tC[7] ^= i3;\n\n\t\t\t\t\t// Iterate the system four times\n\t\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t\tnextState.call(this);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar X = this._X;\n\n\t\t\t\t// Iterate the system\n\t\t\t\tnextState.call(this);\n\n\t\t\t\t// Generate four keystream words\n\t\t\t\tS[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;\n\t\t\t\tS[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;\n\t\t\t\tS[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;\n\t\t\t\tS[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;\n\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tS[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Encrypt\n\t\t\t\t\tM[offset + i] ^= S[i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32,\n\n\t\t\tivSize: 64 / 32\n\t\t});\n\n\t\tfunction nextState() {\n\t\t\t// Shortcuts\n\t\t\tvar X = this._X;\n\t\t\tvar C = this._C;\n\n\t\t\t// Save old counter values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tC_[i] = C[i];\n\t\t\t}\n\n\t\t\t// Calculate new counter values\n\t\t\tC[0] = C[0] + 0x4d34d34d + this._b | 0;\n\t\t\tC[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;\n\t\t\tthis._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;\n\n\t\t\t// Calculate the g-values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tvar gx = X[i] + C[i];\n\n\t\t\t\t// Construct high and low argument for squaring\n\t\t\t\tvar ga = gx & 0xffff;\n\t\t\t\tvar gb = gx >>> 16;\n\n\t\t\t\t// Calculate high and low result of squaring\n\t\t\t\tvar gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;\n\t\t\t\tvar gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);\n\n\t\t\t\t// High XOR low\n\t\t\t\tG[i] = gh ^ gl;\n\t\t\t}\n\n\t\t\t// Calculate new state values\n\t\t\tX[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;\n\t\t\tX[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;\n\t\t\tX[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;\n\t\t\tX[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;\n\t\t\tX[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;\n\t\t\tX[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;\n\t\t\tX[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;\n\t\t\tX[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.Rabbit = StreamCipher._createHelper(Rabbit);\n\t})();\n\n\treturn CryptoJS.Rabbit;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rabbit.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/rc4.js':
                    /*!***************************************!*\
        !*** ./node_modules/crypto-js/rc4.js ***!
        \***************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t/**\n   * RC4 stream cipher algorithm.\n   */\n\t\tvar RC4 = C_algo.RC4 = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\t\t\t\tvar keySigBytes = key.sigBytes;\n\n\t\t\t\t// Init sbox\n\t\t\t\tvar S = this._S = [];\n\t\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\t\tS[i] = i;\n\t\t\t\t}\n\n\t\t\t\t// Key setup\n\t\t\t\tfor (var i = 0, j = 0; i < 256; i++) {\n\t\t\t\t\tvar keyByteIndex = i % keySigBytes;\n\t\t\t\t\tvar keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;\n\n\t\t\t\t\tj = (j + S[i] + keyByte) % 256;\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tvar t = S[i];\n\t\t\t\t\tS[i] = S[j];\n\t\t\t\t\tS[j] = t;\n\t\t\t\t}\n\n\t\t\t\t// Counters\n\t\t\t\tthis._i = this._j = 0;\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\tM[offset] ^= generateKeystreamWord.call(this);\n\t\t\t},\n\n\t\t\tkeySize: 256 / 32,\n\n\t\t\tivSize: 0\n\t\t});\n\n\t\tfunction generateKeystreamWord() {\n\t\t\t// Shortcuts\n\t\t\tvar S = this._S;\n\t\t\tvar i = this._i;\n\t\t\tvar j = this._j;\n\n\t\t\t// Generate keystream word\n\t\t\tvar keystreamWord = 0;\n\t\t\tfor (var n = 0; n < 4; n++) {\n\t\t\t\ti = (i + 1) % 256;\n\t\t\t\tj = (j + S[i]) % 256;\n\n\t\t\t\t// Swap\n\t\t\t\tvar t = S[i];\n\t\t\t\tS[i] = S[j];\n\t\t\t\tS[j] = t;\n\n\t\t\t\tkeystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;\n\t\t\t}\n\n\t\t\t// Update counters\n\t\t\tthis._i = i;\n\t\t\tthis._j = j;\n\n\t\t\treturn keystreamWord;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RC4 = StreamCipher._createHelper(RC4);\n\n\t\t/**\n   * Modified RC4 stream cipher algorithm.\n   */\n\t\tvar RC4Drop = C_algo.RC4Drop = RC4.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} drop The number of keystream words to drop. Default 192\n    */\n\t\t\tcfg: RC4.cfg.extend({\n\t\t\t\tdrop: 192\n\t\t\t}),\n\n\t\t\t_doReset: function () {\n\t\t\t\tRC4._doReset.call(this);\n\n\t\t\t\t// Drop\n\t\t\t\tfor (var i = this.cfg.drop; i > 0; i--) {\n\t\t\t\t\tgenerateKeystreamWord.call(this);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RC4Drop = StreamCipher._createHelper(RC4Drop);\n\t})();\n\n\treturn CryptoJS.RC4;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rc4.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/ripemd160.js':
                    /*!*********************************************!*\
        !*** ./node_modules/crypto-js/ripemd160.js ***!
        \*********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/** @preserve\n (c) 2012 by Cédric Mesnil. All rights reserved.\n \tRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n \t    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n     - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n \tTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants table\n\t\tvar _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);\n\t\tvar _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);\n\t\tvar _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);\n\t\tvar _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);\n\n\t\tvar _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);\n\t\tvar _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);\n\n\t\t/**\n   * RIPEMD160 hash algorithm.\n   */\n\t\tvar RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar offset_i = offset + i;\n\t\t\t\t\tvar M_offset_i = M[offset_i];\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tM[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\t\t\t\tvar hl = _hl.words;\n\t\t\t\tvar hr = _hr.words;\n\t\t\t\tvar zl = _zl.words;\n\t\t\t\tvar zr = _zr.words;\n\t\t\t\tvar sl = _sl.words;\n\t\t\t\tvar sr = _sr.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar al, bl, cl, dl, el;\n\t\t\t\tvar ar, br, cr, dr, er;\n\n\t\t\t\tar = al = H[0];\n\t\t\t\tbr = bl = H[1];\n\t\t\t\tcr = cl = H[2];\n\t\t\t\tdr = dl = H[3];\n\t\t\t\ter = el = H[4];\n\t\t\t\t// Computation\n\t\t\t\tvar t;\n\t\t\t\tfor (var i = 0; i < 80; i += 1) {\n\t\t\t\t\tt = al + M[offset + zl[i]] | 0;\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tt += f1(bl, cl, dl) + hl[0];\n\t\t\t\t\t} else if (i < 32) {\n\t\t\t\t\t\tt += f2(bl, cl, dl) + hl[1];\n\t\t\t\t\t} else if (i < 48) {\n\t\t\t\t\t\tt += f3(bl, cl, dl) + hl[2];\n\t\t\t\t\t} else if (i < 64) {\n\t\t\t\t\t\tt += f4(bl, cl, dl) + hl[3];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// if (i<80) {\n\t\t\t\t\t\tt += f5(bl, cl, dl) + hl[4];\n\t\t\t\t\t}\n\t\t\t\t\tt = t | 0;\n\t\t\t\t\tt = rotl(t, sl[i]);\n\t\t\t\t\tt = t + el | 0;\n\t\t\t\t\tal = el;\n\t\t\t\t\tel = dl;\n\t\t\t\t\tdl = rotl(cl, 10);\n\t\t\t\t\tcl = bl;\n\t\t\t\t\tbl = t;\n\n\t\t\t\t\tt = ar + M[offset + zr[i]] | 0;\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tt += f5(br, cr, dr) + hr[0];\n\t\t\t\t\t} else if (i < 32) {\n\t\t\t\t\t\tt += f4(br, cr, dr) + hr[1];\n\t\t\t\t\t} else if (i < 48) {\n\t\t\t\t\t\tt += f3(br, cr, dr) + hr[2];\n\t\t\t\t\t} else if (i < 64) {\n\t\t\t\t\t\tt += f2(br, cr, dr) + hr[3];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// if (i<80) {\n\t\t\t\t\t\tt += f1(br, cr, dr) + hr[4];\n\t\t\t\t\t}\n\t\t\t\t\tt = t | 0;\n\t\t\t\t\tt = rotl(t, sr[i]);\n\t\t\t\t\tt = t + er | 0;\n\t\t\t\t\tar = er;\n\t\t\t\t\ter = dr;\n\t\t\t\t\tdr = rotl(cr, 10);\n\t\t\t\t\tcr = br;\n\t\t\t\t\tbr = t;\n\t\t\t\t}\n\t\t\t\t// Intermediate hash value\n\t\t\t\tt = H[1] + cl + dr | 0;\n\t\t\t\tH[1] = H[2] + dl + er | 0;\n\t\t\t\tH[2] = H[3] + el + ar | 0;\n\t\t\t\tH[3] = H[4] + al + br | 0;\n\t\t\t\tH[4] = H[0] + bl + cr | 0;\n\t\t\t\tH[0] = t;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;\n\t\t\t\tdata.sigBytes = (dataWords.length + 1) * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hash = this._hash;\n\t\t\t\tvar H = hash.words;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 5; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar H_i = H[i];\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tH[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\tfunction f1(x, y, z) {\n\t\t\treturn x ^ y ^ z;\n\t\t}\n\n\t\tfunction f2(x, y, z) {\n\t\t\treturn x & y | ~x & z;\n\t\t}\n\n\t\tfunction f3(x, y, z) {\n\t\t\treturn (x | ~y) ^ z;\n\t\t}\n\n\t\tfunction f4(x, y, z) {\n\t\t\treturn x & z | y & ~z;\n\t\t}\n\n\t\tfunction f5(x, y, z) {\n\t\t\treturn x ^ (y | ~z);\n\t\t}\n\n\t\tfunction rotl(x, n) {\n\t\t\treturn x << n | x >>> 32 - n;\n\t\t}\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.RIPEMD160(\'message\');\n   *     var hash = CryptoJS.RIPEMD160(wordArray);\n   */\n\t\tC.RIPEMD160 = Hasher._createHelper(RIPEMD160);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacRIPEMD160(message, key);\n   */\n\t\tC.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);\n\t})(Math);\n\n\treturn CryptoJS.RIPEMD160;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/ripemd160.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/sha1.js':
                    /*!****************************************!*\
        !*** ./node_modules/crypto-js/sha1.js ***!
        \****************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable object\n\t\tvar W = [];\n\n\t\t/**\n   * SHA-1 hash algorithm.\n   */\n\t\tvar SHA1 = C_algo.SHA1 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\t\t\t\tvar e = H[4];\n\n\t\t\t\t// Computation\n\t\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tW[i] = M[offset + i] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];\n\t\t\t\t\t\tW[i] = n << 1 | n >>> 31;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar t = (a << 5 | a >>> 27) + e + W[i];\n\t\t\t\t\tif (i < 20) {\n\t\t\t\t\t\tt += (b & c | ~b & d) + 0x5a827999;\n\t\t\t\t\t} else if (i < 40) {\n\t\t\t\t\t\tt += (b ^ c ^ d) + 0x6ed9eba1;\n\t\t\t\t\t} else if (i < 60) {\n\t\t\t\t\t\tt += (b & c | b & d | c & d) - 0x70e44324;\n\t\t\t\t\t} else /* if (i < 80) */{\n\t\t\t\t\t\t\tt += (b ^ c ^ d) - 0x359d3e2a;\n\t\t\t\t\t\t}\n\n\t\t\t\t\te = d;\n\t\t\t\t\td = c;\n\t\t\t\t\tc = b << 30 | b >>> 2;\n\t\t\t\t\tb = a;\n\t\t\t\t\ta = t;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t\tH[4] = H[4] + e | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn this._hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA1('message');\n   *     var hash = CryptoJS.SHA1(wordArray);\n   */\n\t\tC.SHA1 = Hasher._createHelper(SHA1);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA1(message, key);\n   */\n\t\tC.HmacSHA1 = Hasher._createHmacHelper(SHA1);\n\t})();\n\n\treturn CryptoJS.SHA1;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha1.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/sha224.js':
                    /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha224.js ***!
        \******************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA256 = C_algo.SHA256;\n\n\t\t/**\n   * SHA-224 hash algorithm.\n   */\n\t\tvar SHA224 = C_algo.SHA224 = SHA256.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\tvar hash = SHA256._doFinalize.call(this);\n\n\t\t\t\thash.sigBytes -= 4;\n\n\t\t\t\treturn hash;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA224(\'message\');\n   *     var hash = CryptoJS.SHA224(wordArray);\n   */\n\t\tC.SHA224 = SHA256._createHelper(SHA224);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA224(message, key);\n   */\n\t\tC.HmacSHA224 = SHA256._createHmacHelper(SHA224);\n\t})();\n\n\treturn CryptoJS.SHA224;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha224.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/sha256.js':
                    /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha256.js ***!
        \******************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Initialization and round constants tables\n\t\tvar H = [];\n\t\tvar K = [];\n\n\t\t// Compute constants\n\t\t(function () {\n\t\t\tfunction isPrime(n) {\n\t\t\t\tvar sqrtN = Math.sqrt(n);\n\t\t\t\tfor (var factor = 2; factor <= sqrtN; factor++) {\n\t\t\t\t\tif (!(n % factor)) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tfunction getFractionalBits(n) {\n\t\t\t\treturn (n - (n | 0)) * 0x100000000 | 0;\n\t\t\t}\n\n\t\t\tvar n = 2;\n\t\t\tvar nPrime = 0;\n\t\t\twhile (nPrime < 64) {\n\t\t\t\tif (isPrime(n)) {\n\t\t\t\t\tif (nPrime < 8) {\n\t\t\t\t\t\tH[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));\n\t\t\t\t\t}\n\t\t\t\t\tK[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));\n\n\t\t\t\t\tnPrime++;\n\t\t\t\t}\n\n\t\t\t\tn++;\n\t\t\t}\n\t\t})();\n\n\t\t// Reusable object\n\t\tvar W = [];\n\n\t\t/**\n   * SHA-256 hash algorithm.\n   */\n\t\tvar SHA256 = C_algo.SHA256 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init(H.slice(0));\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\t\t\t\tvar e = H[4];\n\t\t\t\tvar f = H[5];\n\t\t\t\tvar g = H[6];\n\t\t\t\tvar h = H[7];\n\n\t\t\t\t// Computation\n\t\t\t\tfor (var i = 0; i < 64; i++) {\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tW[i] = M[offset + i] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar gamma0x = W[i - 15];\n\t\t\t\t\t\tvar gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;\n\n\t\t\t\t\t\tvar gamma1x = W[i - 2];\n\t\t\t\t\t\tvar gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;\n\n\t\t\t\t\t\tW[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];\n\t\t\t\t\t}\n\n\t\t\t\t\tvar ch = e & f ^ ~e & g;\n\t\t\t\t\tvar maj = a & b ^ a & c ^ b & c;\n\n\t\t\t\t\tvar sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);\n\t\t\t\t\tvar sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);\n\n\t\t\t\t\tvar t1 = h + sigma1 + ch + K[i] + W[i];\n\t\t\t\t\tvar t2 = sigma0 + maj;\n\n\t\t\t\t\th = g;\n\t\t\t\t\tg = f;\n\t\t\t\t\tf = e;\n\t\t\t\t\te = d + t1 | 0;\n\t\t\t\t\td = c;\n\t\t\t\t\tc = b;\n\t\t\t\t\tb = a;\n\t\t\t\t\ta = t1 + t2 | 0;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t\tH[4] = H[4] + e | 0;\n\t\t\t\tH[5] = H[5] + f | 0;\n\t\t\t\tH[6] = H[6] + g | 0;\n\t\t\t\tH[7] = H[7] + h | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn this._hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA256('message');\n   *     var hash = CryptoJS.SHA256(wordArray);\n   */\n\t\tC.SHA256 = Hasher._createHelper(SHA256);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA256(message, key);\n   */\n\t\tC.HmacSHA256 = Hasher._createHmacHelper(SHA256);\n\t})(Math);\n\n\treturn CryptoJS.SHA256;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha256.js?"
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/sha3.js':
                    /*!****************************************!*\
        !*** ./node_modules/crypto-js/sha3.js ***!
        \****************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants tables\n\t\tvar RHO_OFFSETS = [];\n\t\tvar PI_INDEXES = [];\n\t\tvar ROUND_CONSTANTS = [];\n\n\t\t// Compute Constants\n\t\t(function () {\n\t\t\t// Compute rho offset constants\n\t\t\tvar x = 1,\n\t\t\t    y = 0;\n\t\t\tfor (var t = 0; t < 24; t++) {\n\t\t\t\tRHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;\n\n\t\t\t\tvar newX = y % 5;\n\t\t\t\tvar newY = (2 * x + 3 * y) % 5;\n\t\t\t\tx = newX;\n\t\t\t\ty = newY;\n\t\t\t}\n\n\t\t\t// Compute pi index constants\n\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\tPI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Compute round constants\n\t\t\tvar LFSR = 0x01;\n\t\t\tfor (var i = 0; i < 24; i++) {\n\t\t\t\tvar roundConstantMsw = 0;\n\t\t\t\tvar roundConstantLsw = 0;\n\n\t\t\t\tfor (var j = 0; j < 7; j++) {\n\t\t\t\t\tif (LFSR & 0x01) {\n\t\t\t\t\t\tvar bitPosition = (1 << j) - 1;\n\t\t\t\t\t\tif (bitPosition < 32) {\n\t\t\t\t\t\t\troundConstantLsw ^= 1 << bitPosition;\n\t\t\t\t\t\t} else /* if (bitPosition >= 32) */{\n\t\t\t\t\t\t\t\troundConstantMsw ^= 1 << bitPosition - 32;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Compute next LFSR\n\t\t\t\t\tif (LFSR & 0x80) {\n\t\t\t\t\t\t// Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1\n\t\t\t\t\t\tLFSR = LFSR << 1 ^ 0x71;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tLFSR <<= 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);\n\t\t\t}\n\t\t})();\n\n\t\t// Reusable objects for temporary values\n\t\tvar T = [];\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\tT[i] = X64Word.create();\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * SHA-3 hash algorithm.\n   */\n\t\tvar SHA3 = C_algo.SHA3 = Hasher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} outputLength\n    *   The desired number of bits in the output hash.\n    *   Only values permitted are: 224, 256, 384, 512.\n    *   Default: 512\n    */\n\t\t\tcfg: Hasher.cfg.extend({\n\t\t\t\toutputLength: 512\n\t\t\t}),\n\n\t\t\t_doReset: function () {\n\t\t\t\tvar state = this._state = [];\n\t\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\t\tstate[i] = new X64Word.init();\n\t\t\t\t}\n\n\t\t\t\tthis.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar state = this._state;\n\t\t\t\tvar nBlockSizeLanes = this.blockSize / 2;\n\n\t\t\t\t// Absorb\n\t\t\t\tfor (var i = 0; i < nBlockSizeLanes; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar M2i = M[offset + 2 * i];\n\t\t\t\t\tvar M2i1 = M[offset + 2 * i + 1];\n\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tM2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;\n\t\t\t\t\tM2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Absorb message into state\n\t\t\t\t\tvar lane = state[i];\n\t\t\t\t\tlane.high ^= M2i1;\n\t\t\t\t\tlane.low ^= M2i;\n\t\t\t\t}\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 0; round < 24; round++) {\n\t\t\t\t\t// Theta\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\t// Mix column lanes\n\t\t\t\t\t\tvar tMsw = 0,\n\t\t\t\t\t\t    tLsw = 0;\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\tvar lane = state[x + 5 * y];\n\t\t\t\t\t\t\ttMsw ^= lane.high;\n\t\t\t\t\t\t\ttLsw ^= lane.low;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Temporary values\n\t\t\t\t\t\tvar Tx = T[x];\n\t\t\t\t\t\tTx.high = tMsw;\n\t\t\t\t\t\tTx.low = tLsw;\n\t\t\t\t\t}\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\tvar Tx4 = T[(x + 4) % 5];\n\t\t\t\t\t\tvar Tx1 = T[(x + 1) % 5];\n\t\t\t\t\t\tvar Tx1Msw = Tx1.high;\n\t\t\t\t\t\tvar Tx1Lsw = Tx1.low;\n\n\t\t\t\t\t\t// Mix surrounding columns\n\t\t\t\t\t\tvar tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);\n\t\t\t\t\t\tvar tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\tvar lane = state[x + 5 * y];\n\t\t\t\t\t\t\tlane.high ^= tMsw;\n\t\t\t\t\t\t\tlane.low ^= tLsw;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Rho Pi\n\t\t\t\t\tfor (var laneIndex = 1; laneIndex < 25; laneIndex++) {\n\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\tvar lane = state[laneIndex];\n\t\t\t\t\t\tvar laneMsw = lane.high;\n\t\t\t\t\t\tvar laneLsw = lane.low;\n\t\t\t\t\t\tvar rhoOffset = RHO_OFFSETS[laneIndex];\n\n\t\t\t\t\t\t// Rotate lanes\n\t\t\t\t\t\tif (rhoOffset < 32) {\n\t\t\t\t\t\t\tvar tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;\n\t\t\t\t\t\t\tvar tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;\n\t\t\t\t\t\t} else /* if (rhoOffset >= 32) */{\n\t\t\t\t\t\t\t\tvar tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;\n\t\t\t\t\t\t\t\tvar tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Transpose lanes\n\t\t\t\t\t\tvar TPiLane = T[PI_INDEXES[laneIndex]];\n\t\t\t\t\t\tTPiLane.high = tMsw;\n\t\t\t\t\t\tTPiLane.low = tLsw;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Rho pi at x = y = 0\n\t\t\t\t\tvar T0 = T[0];\n\t\t\t\t\tvar state0 = state[0];\n\t\t\t\t\tT0.high = state0.high;\n\t\t\t\t\tT0.low = state0.low;\n\n\t\t\t\t\t// Chi\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\t\tvar laneIndex = x + 5 * y;\n\t\t\t\t\t\t\tvar lane = state[laneIndex];\n\t\t\t\t\t\t\tvar TLane = T[laneIndex];\n\t\t\t\t\t\t\tvar Tx1Lane = T[(x + 1) % 5 + 5 * y];\n\t\t\t\t\t\t\tvar Tx2Lane = T[(x + 2) % 5 + 5 * y];\n\n\t\t\t\t\t\t\t// Mix rows\n\t\t\t\t\t\t\tlane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;\n\t\t\t\t\t\t\tlane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Iota\n\t\t\t\t\tvar lane = state[0];\n\t\t\t\t\tvar roundConstant = ROUND_CONSTANTS[round];\n\t\t\t\t\tlane.high ^= roundConstant.high;\n\t\t\t\t\tlane.low ^= roundConstant.low;;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\t\t\t\tvar blockSizeBits = this.blockSize * 32;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar state = this._state;\n\t\t\t\tvar outputLengthBytes = this.cfg.outputLength / 8;\n\t\t\t\tvar outputLengthLanes = outputLengthBytes / 8;\n\n\t\t\t\t// Squeeze\n\t\t\t\tvar hashWords = [];\n\t\t\t\tfor (var i = 0; i < outputLengthLanes; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar lane = state[i];\n\t\t\t\t\tvar laneMsw = lane.high;\n\t\t\t\t\tvar laneLsw = lane.low;\n\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tlaneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;\n\t\t\t\t\tlaneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Squeeze state to retrieve hash\n\t\t\t\t\thashWords.push(laneLsw);\n\t\t\t\t\thashWords.push(laneMsw);\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn new WordArray.init(hashWords, outputLengthBytes);\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\n\t\t\t\tvar state = clone._state = this._state.slice(0);\n\t\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\t\tstate[i] = state[i].clone();\n\t\t\t\t}\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA3(\'message\');\n   *     var hash = CryptoJS.SHA3(wordArray);\n   */\n\t\tC.SHA3 = Hasher._createHelper(SHA3);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA3(message, key);\n   */\n\t\tC.HmacSHA3 = Hasher._createHmacHelper(SHA3);\n\t})(Math);\n\n\treturn CryptoJS.SHA3;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha3.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/sha384.js':
                    /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha384.js ***!
        \******************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar X64WordArray = C_x64.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA512 = C_algo.SHA512;\n\n\t\t/**\n   * SHA-384 hash algorithm.\n   */\n\t\tvar SHA384 = C_algo.SHA384 = SHA512.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\tvar hash = SHA512._doFinalize.call(this);\n\n\t\t\t\thash.sigBytes -= 16;\n\n\t\t\t\treturn hash;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA384(\'message\');\n   *     var hash = CryptoJS.SHA384(wordArray);\n   */\n\t\tC.SHA384 = SHA512._createHelper(SHA384);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA384(message, key);\n   */\n\t\tC.HmacSHA384 = SHA512._createHmacHelper(SHA384);\n\t})();\n\n\treturn CryptoJS.SHA384;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha384.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/sha512.js':
                    /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha512.js ***!
        \******************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar X64WordArray = C_x64.WordArray;\n\t\tvar C_algo = C.algo;\n\n\t\tfunction X64Word_create() {\n\t\t\treturn X64Word.create.apply(X64Word, arguments);\n\t\t}\n\n\t\t// Constants\n\t\tvar K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];\n\n\t\t// Reusable objects\n\t\tvar W = [];\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\tW[i] = X64Word_create();\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * SHA-512 hash algorithm.\n   */\n\t\tvar SHA512 = C_algo.SHA512 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\tvar H0 = H[0];\n\t\t\t\tvar H1 = H[1];\n\t\t\t\tvar H2 = H[2];\n\t\t\t\tvar H3 = H[3];\n\t\t\t\tvar H4 = H[4];\n\t\t\t\tvar H5 = H[5];\n\t\t\t\tvar H6 = H[6];\n\t\t\t\tvar H7 = H[7];\n\n\t\t\t\tvar H0h = H0.high;\n\t\t\t\tvar H0l = H0.low;\n\t\t\t\tvar H1h = H1.high;\n\t\t\t\tvar H1l = H1.low;\n\t\t\t\tvar H2h = H2.high;\n\t\t\t\tvar H2l = H2.low;\n\t\t\t\tvar H3h = H3.high;\n\t\t\t\tvar H3l = H3.low;\n\t\t\t\tvar H4h = H4.high;\n\t\t\t\tvar H4l = H4.low;\n\t\t\t\tvar H5h = H5.high;\n\t\t\t\tvar H5l = H5.low;\n\t\t\t\tvar H6h = H6.high;\n\t\t\t\tvar H6l = H6.low;\n\t\t\t\tvar H7h = H7.high;\n\t\t\t\tvar H7l = H7.low;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar ah = H0h;\n\t\t\t\tvar al = H0l;\n\t\t\t\tvar bh = H1h;\n\t\t\t\tvar bl = H1l;\n\t\t\t\tvar ch = H2h;\n\t\t\t\tvar cl = H2l;\n\t\t\t\tvar dh = H3h;\n\t\t\t\tvar dl = H3l;\n\t\t\t\tvar eh = H4h;\n\t\t\t\tvar el = H4l;\n\t\t\t\tvar fh = H5h;\n\t\t\t\tvar fl = H5l;\n\t\t\t\tvar gh = H6h;\n\t\t\t\tvar gl = H6l;\n\t\t\t\tvar hh = H7h;\n\t\t\t\tvar hl = H7l;\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar Wi = W[i];\n\n\t\t\t\t\t// Extend message\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tvar Wih = Wi.high = M[offset + i * 2] | 0;\n\t\t\t\t\t\tvar Wil = Wi.low = M[offset + i * 2 + 1] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Gamma0\n\t\t\t\t\t\tvar gamma0x = W[i - 15];\n\t\t\t\t\t\tvar gamma0xh = gamma0x.high;\n\t\t\t\t\t\tvar gamma0xl = gamma0x.low;\n\t\t\t\t\t\tvar gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;\n\t\t\t\t\t\tvar gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);\n\n\t\t\t\t\t\t// Gamma1\n\t\t\t\t\t\tvar gamma1x = W[i - 2];\n\t\t\t\t\t\tvar gamma1xh = gamma1x.high;\n\t\t\t\t\t\tvar gamma1xl = gamma1x.low;\n\t\t\t\t\t\tvar gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;\n\t\t\t\t\t\tvar gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);\n\n\t\t\t\t\t\t// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]\n\t\t\t\t\t\tvar Wi7 = W[i - 7];\n\t\t\t\t\t\tvar Wi7h = Wi7.high;\n\t\t\t\t\t\tvar Wi7l = Wi7.low;\n\n\t\t\t\t\t\tvar Wi16 = W[i - 16];\n\t\t\t\t\t\tvar Wi16h = Wi16.high;\n\t\t\t\t\t\tvar Wi16l = Wi16.low;\n\n\t\t\t\t\t\tvar Wil = gamma0l + Wi7l;\n\t\t\t\t\t\tvar Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);\n\t\t\t\t\t\tvar Wil = Wil + gamma1l;\n\t\t\t\t\t\tvar Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);\n\t\t\t\t\t\tvar Wil = Wil + Wi16l;\n\t\t\t\t\t\tvar Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);\n\n\t\t\t\t\t\tWi.high = Wih;\n\t\t\t\t\t\tWi.low = Wil;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar chh = eh & fh ^ ~eh & gh;\n\t\t\t\t\tvar chl = el & fl ^ ~el & gl;\n\t\t\t\t\tvar majh = ah & bh ^ ah & ch ^ bh & ch;\n\t\t\t\t\tvar majl = al & bl ^ al & cl ^ bl & cl;\n\n\t\t\t\t\tvar sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);\n\t\t\t\t\tvar sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);\n\t\t\t\t\tvar sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);\n\t\t\t\t\tvar sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);\n\n\t\t\t\t\t// t1 = h + sigma1 + ch + K[i] + W[i]\n\t\t\t\t\tvar Ki = K[i];\n\t\t\t\t\tvar Kih = Ki.high;\n\t\t\t\t\tvar Kil = Ki.low;\n\n\t\t\t\t\tvar t1l = hl + sigma1l;\n\t\t\t\t\tvar t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + chl;\n\t\t\t\t\tvar t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + Kil;\n\t\t\t\t\tvar t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + Wil;\n\t\t\t\t\tvar t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);\n\n\t\t\t\t\t// t2 = sigma0 + maj\n\t\t\t\t\tvar t2l = sigma0l + majl;\n\t\t\t\t\tvar t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);\n\n\t\t\t\t\t// Update working variables\n\t\t\t\t\thh = gh;\n\t\t\t\t\thl = gl;\n\t\t\t\t\tgh = fh;\n\t\t\t\t\tgl = fl;\n\t\t\t\t\tfh = eh;\n\t\t\t\t\tfl = el;\n\t\t\t\t\tel = dl + t1l | 0;\n\t\t\t\t\teh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;\n\t\t\t\t\tdh = ch;\n\t\t\t\t\tdl = cl;\n\t\t\t\t\tch = bh;\n\t\t\t\t\tcl = bl;\n\t\t\t\t\tbh = ah;\n\t\t\t\t\tbl = al;\n\t\t\t\t\tal = t1l + t2l | 0;\n\t\t\t\t\tah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH0l = H0.low = H0l + al;\n\t\t\t\tH0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);\n\t\t\t\tH1l = H1.low = H1l + bl;\n\t\t\t\tH1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);\n\t\t\t\tH2l = H2.low = H2l + cl;\n\t\t\t\tH2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);\n\t\t\t\tH3l = H3.low = H3l + dl;\n\t\t\t\tH3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);\n\t\t\t\tH4l = H4.low = H4l + el;\n\t\t\t\tH4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);\n\t\t\t\tH5l = H5.low = H5l + fl;\n\t\t\t\tH5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);\n\t\t\t\tH6l = H6.low = H6l + gl;\n\t\t\t\tH6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);\n\t\t\t\tH7l = H7.low = H7l + hl;\n\t\t\t\tH7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Convert hash to 32-bit word array before returning\n\t\t\t\tvar hash = this._hash.toX32();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\tblockSize: 1024 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA512(\'message\');\n   *     var hash = CryptoJS.SHA512(wordArray);\n   */\n\t\tC.SHA512 = Hasher._createHelper(SHA512);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA512(message, key);\n   */\n\t\tC.HmacSHA512 = Hasher._createHmacHelper(SHA512);\n\t})();\n\n\treturn CryptoJS.SHA512;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha512.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/tripledes.js':
                    /*!*********************************************!*\
        !*** ./node_modules/crypto-js/tripledes.js ***!
        \*********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar BlockCipher = C_lib.BlockCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Permuted Choice 1 constants\n\t\tvar PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];\n\n\t\t// Permuted Choice 2 constants\n\t\tvar PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];\n\n\t\t// Cumulative bit shift constants\n\t\tvar BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];\n\n\t\t// SBOXes and round permutation constants\n\t\tvar SBOX_P = [{\n\t\t\t0x0: 0x808200,\n\t\t\t0x10000000: 0x8000,\n\t\t\t0x20000000: 0x808002,\n\t\t\t0x30000000: 0x2,\n\t\t\t0x40000000: 0x200,\n\t\t\t0x50000000: 0x808202,\n\t\t\t0x60000000: 0x800202,\n\t\t\t0x70000000: 0x800000,\n\t\t\t0x80000000: 0x202,\n\t\t\t0x90000000: 0x800200,\n\t\t\t0xa0000000: 0x8200,\n\t\t\t0xb0000000: 0x808000,\n\t\t\t0xc0000000: 0x8002,\n\t\t\t0xd0000000: 0x800002,\n\t\t\t0xe0000000: 0x0,\n\t\t\t0xf0000000: 0x8202,\n\t\t\t0x8000000: 0x0,\n\t\t\t0x18000000: 0x808202,\n\t\t\t0x28000000: 0x8202,\n\t\t\t0x38000000: 0x8000,\n\t\t\t0x48000000: 0x808200,\n\t\t\t0x58000000: 0x200,\n\t\t\t0x68000000: 0x808002,\n\t\t\t0x78000000: 0x2,\n\t\t\t0x88000000: 0x800200,\n\t\t\t0x98000000: 0x8200,\n\t\t\t0xa8000000: 0x808000,\n\t\t\t0xb8000000: 0x800202,\n\t\t\t0xc8000000: 0x800002,\n\t\t\t0xd8000000: 0x8002,\n\t\t\t0xe8000000: 0x202,\n\t\t\t0xf8000000: 0x800000,\n\t\t\t0x1: 0x8000,\n\t\t\t0x10000001: 0x2,\n\t\t\t0x20000001: 0x808200,\n\t\t\t0x30000001: 0x800000,\n\t\t\t0x40000001: 0x808002,\n\t\t\t0x50000001: 0x8200,\n\t\t\t0x60000001: 0x200,\n\t\t\t0x70000001: 0x800202,\n\t\t\t0x80000001: 0x808202,\n\t\t\t0x90000001: 0x808000,\n\t\t\t0xa0000001: 0x800002,\n\t\t\t0xb0000001: 0x8202,\n\t\t\t0xc0000001: 0x202,\n\t\t\t0xd0000001: 0x800200,\n\t\t\t0xe0000001: 0x8002,\n\t\t\t0xf0000001: 0x0,\n\t\t\t0x8000001: 0x808202,\n\t\t\t0x18000001: 0x808000,\n\t\t\t0x28000001: 0x800000,\n\t\t\t0x38000001: 0x200,\n\t\t\t0x48000001: 0x8000,\n\t\t\t0x58000001: 0x800002,\n\t\t\t0x68000001: 0x2,\n\t\t\t0x78000001: 0x8202,\n\t\t\t0x88000001: 0x8002,\n\t\t\t0x98000001: 0x800202,\n\t\t\t0xa8000001: 0x202,\n\t\t\t0xb8000001: 0x808200,\n\t\t\t0xc8000001: 0x800200,\n\t\t\t0xd8000001: 0x0,\n\t\t\t0xe8000001: 0x8200,\n\t\t\t0xf8000001: 0x808002\n\t\t}, {\n\t\t\t0x0: 0x40084010,\n\t\t\t0x1000000: 0x4000,\n\t\t\t0x2000000: 0x80000,\n\t\t\t0x3000000: 0x40080010,\n\t\t\t0x4000000: 0x40000010,\n\t\t\t0x5000000: 0x40084000,\n\t\t\t0x6000000: 0x40004000,\n\t\t\t0x7000000: 0x10,\n\t\t\t0x8000000: 0x84000,\n\t\t\t0x9000000: 0x40004010,\n\t\t\t0xa000000: 0x40000000,\n\t\t\t0xb000000: 0x84010,\n\t\t\t0xc000000: 0x80010,\n\t\t\t0xd000000: 0x0,\n\t\t\t0xe000000: 0x4010,\n\t\t\t0xf000000: 0x40080000,\n\t\t\t0x800000: 0x40004000,\n\t\t\t0x1800000: 0x84010,\n\t\t\t0x2800000: 0x10,\n\t\t\t0x3800000: 0x40004010,\n\t\t\t0x4800000: 0x40084010,\n\t\t\t0x5800000: 0x40000000,\n\t\t\t0x6800000: 0x80000,\n\t\t\t0x7800000: 0x40080010,\n\t\t\t0x8800000: 0x80010,\n\t\t\t0x9800000: 0x0,\n\t\t\t0xa800000: 0x4000,\n\t\t\t0xb800000: 0x40080000,\n\t\t\t0xc800000: 0x40000010,\n\t\t\t0xd800000: 0x84000,\n\t\t\t0xe800000: 0x40084000,\n\t\t\t0xf800000: 0x4010,\n\t\t\t0x10000000: 0x0,\n\t\t\t0x11000000: 0x40080010,\n\t\t\t0x12000000: 0x40004010,\n\t\t\t0x13000000: 0x40084000,\n\t\t\t0x14000000: 0x40080000,\n\t\t\t0x15000000: 0x10,\n\t\t\t0x16000000: 0x84010,\n\t\t\t0x17000000: 0x4000,\n\t\t\t0x18000000: 0x4010,\n\t\t\t0x19000000: 0x80000,\n\t\t\t0x1a000000: 0x80010,\n\t\t\t0x1b000000: 0x40000010,\n\t\t\t0x1c000000: 0x84000,\n\t\t\t0x1d000000: 0x40004000,\n\t\t\t0x1e000000: 0x40000000,\n\t\t\t0x1f000000: 0x40084010,\n\t\t\t0x10800000: 0x84010,\n\t\t\t0x11800000: 0x80000,\n\t\t\t0x12800000: 0x40080000,\n\t\t\t0x13800000: 0x4000,\n\t\t\t0x14800000: 0x40004000,\n\t\t\t0x15800000: 0x40084010,\n\t\t\t0x16800000: 0x10,\n\t\t\t0x17800000: 0x40000000,\n\t\t\t0x18800000: 0x40084000,\n\t\t\t0x19800000: 0x40000010,\n\t\t\t0x1a800000: 0x40004010,\n\t\t\t0x1b800000: 0x80010,\n\t\t\t0x1c800000: 0x0,\n\t\t\t0x1d800000: 0x4010,\n\t\t\t0x1e800000: 0x40080010,\n\t\t\t0x1f800000: 0x84000\n\t\t}, {\n\t\t\t0x0: 0x104,\n\t\t\t0x100000: 0x0,\n\t\t\t0x200000: 0x4000100,\n\t\t\t0x300000: 0x10104,\n\t\t\t0x400000: 0x10004,\n\t\t\t0x500000: 0x4000004,\n\t\t\t0x600000: 0x4010104,\n\t\t\t0x700000: 0x4010000,\n\t\t\t0x800000: 0x4000000,\n\t\t\t0x900000: 0x4010100,\n\t\t\t0xa00000: 0x10100,\n\t\t\t0xb00000: 0x4010004,\n\t\t\t0xc00000: 0x4000104,\n\t\t\t0xd00000: 0x10000,\n\t\t\t0xe00000: 0x4,\n\t\t\t0xf00000: 0x100,\n\t\t\t0x80000: 0x4010100,\n\t\t\t0x180000: 0x4010004,\n\t\t\t0x280000: 0x0,\n\t\t\t0x380000: 0x4000100,\n\t\t\t0x480000: 0x4000004,\n\t\t\t0x580000: 0x10000,\n\t\t\t0x680000: 0x10004,\n\t\t\t0x780000: 0x104,\n\t\t\t0x880000: 0x4,\n\t\t\t0x980000: 0x100,\n\t\t\t0xa80000: 0x4010000,\n\t\t\t0xb80000: 0x10104,\n\t\t\t0xc80000: 0x10100,\n\t\t\t0xd80000: 0x4000104,\n\t\t\t0xe80000: 0x4010104,\n\t\t\t0xf80000: 0x4000000,\n\t\t\t0x1000000: 0x4010100,\n\t\t\t0x1100000: 0x10004,\n\t\t\t0x1200000: 0x10000,\n\t\t\t0x1300000: 0x4000100,\n\t\t\t0x1400000: 0x100,\n\t\t\t0x1500000: 0x4010104,\n\t\t\t0x1600000: 0x4000004,\n\t\t\t0x1700000: 0x0,\n\t\t\t0x1800000: 0x4000104,\n\t\t\t0x1900000: 0x4000000,\n\t\t\t0x1a00000: 0x4,\n\t\t\t0x1b00000: 0x10100,\n\t\t\t0x1c00000: 0x4010000,\n\t\t\t0x1d00000: 0x104,\n\t\t\t0x1e00000: 0x10104,\n\t\t\t0x1f00000: 0x4010004,\n\t\t\t0x1080000: 0x4000000,\n\t\t\t0x1180000: 0x104,\n\t\t\t0x1280000: 0x4010100,\n\t\t\t0x1380000: 0x0,\n\t\t\t0x1480000: 0x10004,\n\t\t\t0x1580000: 0x4000100,\n\t\t\t0x1680000: 0x100,\n\t\t\t0x1780000: 0x4010004,\n\t\t\t0x1880000: 0x10000,\n\t\t\t0x1980000: 0x4010104,\n\t\t\t0x1a80000: 0x10104,\n\t\t\t0x1b80000: 0x4000004,\n\t\t\t0x1c80000: 0x4000104,\n\t\t\t0x1d80000: 0x4010000,\n\t\t\t0x1e80000: 0x4,\n\t\t\t0x1f80000: 0x10100\n\t\t}, {\n\t\t\t0x0: 0x80401000,\n\t\t\t0x10000: 0x80001040,\n\t\t\t0x20000: 0x401040,\n\t\t\t0x30000: 0x80400000,\n\t\t\t0x40000: 0x0,\n\t\t\t0x50000: 0x401000,\n\t\t\t0x60000: 0x80000040,\n\t\t\t0x70000: 0x400040,\n\t\t\t0x80000: 0x80000000,\n\t\t\t0x90000: 0x400000,\n\t\t\t0xa0000: 0x40,\n\t\t\t0xb0000: 0x80001000,\n\t\t\t0xc0000: 0x80400040,\n\t\t\t0xd0000: 0x1040,\n\t\t\t0xe0000: 0x1000,\n\t\t\t0xf0000: 0x80401040,\n\t\t\t0x8000: 0x80001040,\n\t\t\t0x18000: 0x40,\n\t\t\t0x28000: 0x80400040,\n\t\t\t0x38000: 0x80001000,\n\t\t\t0x48000: 0x401000,\n\t\t\t0x58000: 0x80401040,\n\t\t\t0x68000: 0x0,\n\t\t\t0x78000: 0x80400000,\n\t\t\t0x88000: 0x1000,\n\t\t\t0x98000: 0x80401000,\n\t\t\t0xa8000: 0x400000,\n\t\t\t0xb8000: 0x1040,\n\t\t\t0xc8000: 0x80000000,\n\t\t\t0xd8000: 0x400040,\n\t\t\t0xe8000: 0x401040,\n\t\t\t0xf8000: 0x80000040,\n\t\t\t0x100000: 0x400040,\n\t\t\t0x110000: 0x401000,\n\t\t\t0x120000: 0x80000040,\n\t\t\t0x130000: 0x0,\n\t\t\t0x140000: 0x1040,\n\t\t\t0x150000: 0x80400040,\n\t\t\t0x160000: 0x80401000,\n\t\t\t0x170000: 0x80001040,\n\t\t\t0x180000: 0x80401040,\n\t\t\t0x190000: 0x80000000,\n\t\t\t0x1a0000: 0x80400000,\n\t\t\t0x1b0000: 0x401040,\n\t\t\t0x1c0000: 0x80001000,\n\t\t\t0x1d0000: 0x400000,\n\t\t\t0x1e0000: 0x40,\n\t\t\t0x1f0000: 0x1000,\n\t\t\t0x108000: 0x80400000,\n\t\t\t0x118000: 0x80401040,\n\t\t\t0x128000: 0x0,\n\t\t\t0x138000: 0x401000,\n\t\t\t0x148000: 0x400040,\n\t\t\t0x158000: 0x80000000,\n\t\t\t0x168000: 0x80001040,\n\t\t\t0x178000: 0x40,\n\t\t\t0x188000: 0x80000040,\n\t\t\t0x198000: 0x1000,\n\t\t\t0x1a8000: 0x80001000,\n\t\t\t0x1b8000: 0x80400040,\n\t\t\t0x1c8000: 0x1040,\n\t\t\t0x1d8000: 0x80401000,\n\t\t\t0x1e8000: 0x400000,\n\t\t\t0x1f8000: 0x401040\n\t\t}, {\n\t\t\t0x0: 0x80,\n\t\t\t0x1000: 0x1040000,\n\t\t\t0x2000: 0x40000,\n\t\t\t0x3000: 0x20000000,\n\t\t\t0x4000: 0x20040080,\n\t\t\t0x5000: 0x1000080,\n\t\t\t0x6000: 0x21000080,\n\t\t\t0x7000: 0x40080,\n\t\t\t0x8000: 0x1000000,\n\t\t\t0x9000: 0x20040000,\n\t\t\t0xa000: 0x20000080,\n\t\t\t0xb000: 0x21040080,\n\t\t\t0xc000: 0x21040000,\n\t\t\t0xd000: 0x0,\n\t\t\t0xe000: 0x1040080,\n\t\t\t0xf000: 0x21000000,\n\t\t\t0x800: 0x1040080,\n\t\t\t0x1800: 0x21000080,\n\t\t\t0x2800: 0x80,\n\t\t\t0x3800: 0x1040000,\n\t\t\t0x4800: 0x40000,\n\t\t\t0x5800: 0x20040080,\n\t\t\t0x6800: 0x21040000,\n\t\t\t0x7800: 0x20000000,\n\t\t\t0x8800: 0x20040000,\n\t\t\t0x9800: 0x0,\n\t\t\t0xa800: 0x21040080,\n\t\t\t0xb800: 0x1000080,\n\t\t\t0xc800: 0x20000080,\n\t\t\t0xd800: 0x21000000,\n\t\t\t0xe800: 0x1000000,\n\t\t\t0xf800: 0x40080,\n\t\t\t0x10000: 0x40000,\n\t\t\t0x11000: 0x80,\n\t\t\t0x12000: 0x20000000,\n\t\t\t0x13000: 0x21000080,\n\t\t\t0x14000: 0x1000080,\n\t\t\t0x15000: 0x21040000,\n\t\t\t0x16000: 0x20040080,\n\t\t\t0x17000: 0x1000000,\n\t\t\t0x18000: 0x21040080,\n\t\t\t0x19000: 0x21000000,\n\t\t\t0x1a000: 0x1040000,\n\t\t\t0x1b000: 0x20040000,\n\t\t\t0x1c000: 0x40080,\n\t\t\t0x1d000: 0x20000080,\n\t\t\t0x1e000: 0x0,\n\t\t\t0x1f000: 0x1040080,\n\t\t\t0x10800: 0x21000080,\n\t\t\t0x11800: 0x1000000,\n\t\t\t0x12800: 0x1040000,\n\t\t\t0x13800: 0x20040080,\n\t\t\t0x14800: 0x20000000,\n\t\t\t0x15800: 0x1040080,\n\t\t\t0x16800: 0x80,\n\t\t\t0x17800: 0x21040000,\n\t\t\t0x18800: 0x40080,\n\t\t\t0x19800: 0x21040080,\n\t\t\t0x1a800: 0x0,\n\t\t\t0x1b800: 0x21000000,\n\t\t\t0x1c800: 0x1000080,\n\t\t\t0x1d800: 0x40000,\n\t\t\t0x1e800: 0x20040000,\n\t\t\t0x1f800: 0x20000080\n\t\t}, {\n\t\t\t0x0: 0x10000008,\n\t\t\t0x100: 0x2000,\n\t\t\t0x200: 0x10200000,\n\t\t\t0x300: 0x10202008,\n\t\t\t0x400: 0x10002000,\n\t\t\t0x500: 0x200000,\n\t\t\t0x600: 0x200008,\n\t\t\t0x700: 0x10000000,\n\t\t\t0x800: 0x0,\n\t\t\t0x900: 0x10002008,\n\t\t\t0xa00: 0x202000,\n\t\t\t0xb00: 0x8,\n\t\t\t0xc00: 0x10200008,\n\t\t\t0xd00: 0x202008,\n\t\t\t0xe00: 0x2008,\n\t\t\t0xf00: 0x10202000,\n\t\t\t0x80: 0x10200000,\n\t\t\t0x180: 0x10202008,\n\t\t\t0x280: 0x8,\n\t\t\t0x380: 0x200000,\n\t\t\t0x480: 0x202008,\n\t\t\t0x580: 0x10000008,\n\t\t\t0x680: 0x10002000,\n\t\t\t0x780: 0x2008,\n\t\t\t0x880: 0x200008,\n\t\t\t0x980: 0x2000,\n\t\t\t0xa80: 0x10002008,\n\t\t\t0xb80: 0x10200008,\n\t\t\t0xc80: 0x0,\n\t\t\t0xd80: 0x10202000,\n\t\t\t0xe80: 0x202000,\n\t\t\t0xf80: 0x10000000,\n\t\t\t0x1000: 0x10002000,\n\t\t\t0x1100: 0x10200008,\n\t\t\t0x1200: 0x10202008,\n\t\t\t0x1300: 0x2008,\n\t\t\t0x1400: 0x200000,\n\t\t\t0x1500: 0x10000000,\n\t\t\t0x1600: 0x10000008,\n\t\t\t0x1700: 0x202000,\n\t\t\t0x1800: 0x202008,\n\t\t\t0x1900: 0x0,\n\t\t\t0x1a00: 0x8,\n\t\t\t0x1b00: 0x10200000,\n\t\t\t0x1c00: 0x2000,\n\t\t\t0x1d00: 0x10002008,\n\t\t\t0x1e00: 0x10202000,\n\t\t\t0x1f00: 0x200008,\n\t\t\t0x1080: 0x8,\n\t\t\t0x1180: 0x202000,\n\t\t\t0x1280: 0x200000,\n\t\t\t0x1380: 0x10000008,\n\t\t\t0x1480: 0x10002000,\n\t\t\t0x1580: 0x2008,\n\t\t\t0x1680: 0x10202008,\n\t\t\t0x1780: 0x10200000,\n\t\t\t0x1880: 0x10202000,\n\t\t\t0x1980: 0x10200008,\n\t\t\t0x1a80: 0x2000,\n\t\t\t0x1b80: 0x202008,\n\t\t\t0x1c80: 0x200008,\n\t\t\t0x1d80: 0x0,\n\t\t\t0x1e80: 0x10000000,\n\t\t\t0x1f80: 0x10002008\n\t\t}, {\n\t\t\t0x0: 0x100000,\n\t\t\t0x10: 0x2000401,\n\t\t\t0x20: 0x400,\n\t\t\t0x30: 0x100401,\n\t\t\t0x40: 0x2100401,\n\t\t\t0x50: 0x0,\n\t\t\t0x60: 0x1,\n\t\t\t0x70: 0x2100001,\n\t\t\t0x80: 0x2000400,\n\t\t\t0x90: 0x100001,\n\t\t\t0xa0: 0x2000001,\n\t\t\t0xb0: 0x2100400,\n\t\t\t0xc0: 0x2100000,\n\t\t\t0xd0: 0x401,\n\t\t\t0xe0: 0x100400,\n\t\t\t0xf0: 0x2000000,\n\t\t\t0x8: 0x2100001,\n\t\t\t0x18: 0x0,\n\t\t\t0x28: 0x2000401,\n\t\t\t0x38: 0x2100400,\n\t\t\t0x48: 0x100000,\n\t\t\t0x58: 0x2000001,\n\t\t\t0x68: 0x2000000,\n\t\t\t0x78: 0x401,\n\t\t\t0x88: 0x100401,\n\t\t\t0x98: 0x2000400,\n\t\t\t0xa8: 0x2100000,\n\t\t\t0xb8: 0x100001,\n\t\t\t0xc8: 0x400,\n\t\t\t0xd8: 0x2100401,\n\t\t\t0xe8: 0x1,\n\t\t\t0xf8: 0x100400,\n\t\t\t0x100: 0x2000000,\n\t\t\t0x110: 0x100000,\n\t\t\t0x120: 0x2000401,\n\t\t\t0x130: 0x2100001,\n\t\t\t0x140: 0x100001,\n\t\t\t0x150: 0x2000400,\n\t\t\t0x160: 0x2100400,\n\t\t\t0x170: 0x100401,\n\t\t\t0x180: 0x401,\n\t\t\t0x190: 0x2100401,\n\t\t\t0x1a0: 0x100400,\n\t\t\t0x1b0: 0x1,\n\t\t\t0x1c0: 0x0,\n\t\t\t0x1d0: 0x2100000,\n\t\t\t0x1e0: 0x2000001,\n\t\t\t0x1f0: 0x400,\n\t\t\t0x108: 0x100400,\n\t\t\t0x118: 0x2000401,\n\t\t\t0x128: 0x2100001,\n\t\t\t0x138: 0x1,\n\t\t\t0x148: 0x2000000,\n\t\t\t0x158: 0x100000,\n\t\t\t0x168: 0x401,\n\t\t\t0x178: 0x2100400,\n\t\t\t0x188: 0x2000001,\n\t\t\t0x198: 0x2100000,\n\t\t\t0x1a8: 0x0,\n\t\t\t0x1b8: 0x2100401,\n\t\t\t0x1c8: 0x100401,\n\t\t\t0x1d8: 0x400,\n\t\t\t0x1e8: 0x2000400,\n\t\t\t0x1f8: 0x100001\n\t\t}, {\n\t\t\t0x0: 0x8000820,\n\t\t\t0x1: 0x20000,\n\t\t\t0x2: 0x8000000,\n\t\t\t0x3: 0x20,\n\t\t\t0x4: 0x20020,\n\t\t\t0x5: 0x8020820,\n\t\t\t0x6: 0x8020800,\n\t\t\t0x7: 0x800,\n\t\t\t0x8: 0x8020000,\n\t\t\t0x9: 0x8000800,\n\t\t\t0xa: 0x20800,\n\t\t\t0xb: 0x8020020,\n\t\t\t0xc: 0x820,\n\t\t\t0xd: 0x0,\n\t\t\t0xe: 0x8000020,\n\t\t\t0xf: 0x20820,\n\t\t\t0x80000000: 0x800,\n\t\t\t0x80000001: 0x8020820,\n\t\t\t0x80000002: 0x8000820,\n\t\t\t0x80000003: 0x8000000,\n\t\t\t0x80000004: 0x8020000,\n\t\t\t0x80000005: 0x20800,\n\t\t\t0x80000006: 0x20820,\n\t\t\t0x80000007: 0x20,\n\t\t\t0x80000008: 0x8000020,\n\t\t\t0x80000009: 0x820,\n\t\t\t0x8000000a: 0x20020,\n\t\t\t0x8000000b: 0x8020800,\n\t\t\t0x8000000c: 0x0,\n\t\t\t0x8000000d: 0x8020020,\n\t\t\t0x8000000e: 0x8000800,\n\t\t\t0x8000000f: 0x20000,\n\t\t\t0x10: 0x20820,\n\t\t\t0x11: 0x8020800,\n\t\t\t0x12: 0x20,\n\t\t\t0x13: 0x800,\n\t\t\t0x14: 0x8000800,\n\t\t\t0x15: 0x8000020,\n\t\t\t0x16: 0x8020020,\n\t\t\t0x17: 0x20000,\n\t\t\t0x18: 0x0,\n\t\t\t0x19: 0x20020,\n\t\t\t0x1a: 0x8020000,\n\t\t\t0x1b: 0x8000820,\n\t\t\t0x1c: 0x8020820,\n\t\t\t0x1d: 0x20800,\n\t\t\t0x1e: 0x820,\n\t\t\t0x1f: 0x8000000,\n\t\t\t0x80000010: 0x20000,\n\t\t\t0x80000011: 0x800,\n\t\t\t0x80000012: 0x8020020,\n\t\t\t0x80000013: 0x20820,\n\t\t\t0x80000014: 0x20,\n\t\t\t0x80000015: 0x8020000,\n\t\t\t0x80000016: 0x8000000,\n\t\t\t0x80000017: 0x8000820,\n\t\t\t0x80000018: 0x8020820,\n\t\t\t0x80000019: 0x8000020,\n\t\t\t0x8000001a: 0x8000800,\n\t\t\t0x8000001b: 0x0,\n\t\t\t0x8000001c: 0x20800,\n\t\t\t0x8000001d: 0x820,\n\t\t\t0x8000001e: 0x20020,\n\t\t\t0x8000001f: 0x8020800\n\t\t}];\n\n\t\t// Masks that select the SBOX input\n\t\tvar SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];\n\n\t\t/**\n   * DES block cipher algorithm.\n   */\n\t\tvar DES = C_algo.DES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\n\t\t\t\t// Select 56 bits according to PC1\n\t\t\t\tvar keyBits = [];\n\t\t\t\tfor (var i = 0; i < 56; i++) {\n\t\t\t\t\tvar keyBitPos = PC1[i] - 1;\n\t\t\t\t\tkeyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;\n\t\t\t\t}\n\n\t\t\t\t// Assemble 16 subkeys\n\t\t\t\tvar subKeys = this._subKeys = [];\n\t\t\t\tfor (var nSubKey = 0; nSubKey < 16; nSubKey++) {\n\t\t\t\t\t// Create subkey\n\t\t\t\t\tvar subKey = subKeys[nSubKey] = [];\n\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar bitShift = BIT_SHIFTS[nSubKey];\n\n\t\t\t\t\t// Select 48 bits according to PC2\n\t\t\t\t\tfor (var i = 0; i < 24; i++) {\n\t\t\t\t\t\t// Select from the left 28 key bits\n\t\t\t\t\t\tsubKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;\n\n\t\t\t\t\t\t// Select from the right 28 key bits\n\t\t\t\t\t\tsubKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Since each subkey is applied to an expanded 32-bit input,\n\t\t\t\t\t// the subkey can be broken into 8 values scaled to 32-bits,\n\t\t\t\t\t// which allows the key to be used without expansion\n\t\t\t\t\tsubKey[0] = subKey[0] << 1 | subKey[0] >>> 31;\n\t\t\t\t\tfor (var i = 1; i < 7; i++) {\n\t\t\t\t\t\tsubKey[i] = subKey[i] >>> (i - 1) * 4 + 3;\n\t\t\t\t\t}\n\t\t\t\t\tsubKey[7] = subKey[7] << 5 | subKey[7] >>> 27;\n\t\t\t\t}\n\n\t\t\t\t// Compute inverse subkeys\n\t\t\t\tvar invSubKeys = this._invSubKeys = [];\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\tinvSubKeys[i] = subKeys[15 - i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._subKeys);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._invSubKeys);\n\t\t\t},\n\n\t\t\t_doCryptBlock: function (M, offset, subKeys) {\n\t\t\t\t// Get input\n\t\t\t\tthis._lBlock = M[offset];\n\t\t\t\tthis._rBlock = M[offset + 1];\n\n\t\t\t\t// Initial permutation\n\t\t\t\texchangeLR.call(this, 4, 0x0f0f0f0f);\n\t\t\t\texchangeLR.call(this, 16, 0x0000ffff);\n\t\t\t\texchangeRL.call(this, 2, 0x33333333);\n\t\t\t\texchangeRL.call(this, 8, 0x00ff00ff);\n\t\t\t\texchangeLR.call(this, 1, 0x55555555);\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 0; round < 16; round++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar subKey = subKeys[round];\n\t\t\t\t\tvar lBlock = this._lBlock;\n\t\t\t\t\tvar rBlock = this._rBlock;\n\n\t\t\t\t\t// Feistel function\n\t\t\t\t\tvar f = 0;\n\t\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\t\tf |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];\n\t\t\t\t\t}\n\t\t\t\t\tthis._lBlock = rBlock;\n\t\t\t\t\tthis._rBlock = lBlock ^ f;\n\t\t\t\t}\n\n\t\t\t\t// Undo swap from last round\n\t\t\t\tvar t = this._lBlock;\n\t\t\t\tthis._lBlock = this._rBlock;\n\t\t\t\tthis._rBlock = t;\n\n\t\t\t\t// Final permutation\n\t\t\t\texchangeLR.call(this, 1, 0x55555555);\n\t\t\t\texchangeRL.call(this, 8, 0x00ff00ff);\n\t\t\t\texchangeRL.call(this, 2, 0x33333333);\n\t\t\t\texchangeLR.call(this, 16, 0x0000ffff);\n\t\t\t\texchangeLR.call(this, 4, 0x0f0f0f0f);\n\n\t\t\t\t// Set output\n\t\t\t\tM[offset] = this._lBlock;\n\t\t\t\tM[offset + 1] = this._rBlock;\n\t\t\t},\n\n\t\t\tkeySize: 64 / 32,\n\n\t\t\tivSize: 64 / 32,\n\n\t\t\tblockSize: 64 / 32\n\t\t});\n\n\t\t// Swap bits across the left and right words\n\t\tfunction exchangeLR(offset, mask) {\n\t\t\tvar t = (this._lBlock >>> offset ^ this._rBlock) & mask;\n\t\t\tthis._rBlock ^= t;\n\t\t\tthis._lBlock ^= t << offset;\n\t\t}\n\n\t\tfunction exchangeRL(offset, mask) {\n\t\t\tvar t = (this._rBlock >>> offset ^ this._lBlock) & mask;\n\t\t\tthis._lBlock ^= t;\n\t\t\tthis._rBlock ^= t << offset;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.DES = BlockCipher._createHelper(DES);\n\n\t\t/**\n   * Triple-DES block cipher algorithm.\n   */\n\t\tvar TripleDES = C_algo.TripleDES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\n\t\t\t\t// Create DES instances\n\t\t\t\tthis._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));\n\t\t\t\tthis._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));\n\t\t\t\tthis._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._des1.encryptBlock(M, offset);\n\t\t\t\tthis._des2.decryptBlock(M, offset);\n\t\t\t\tthis._des3.encryptBlock(M, offset);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\tthis._des3.decryptBlock(M, offset);\n\t\t\t\tthis._des2.encryptBlock(M, offset);\n\t\t\t\tthis._des1.decryptBlock(M, offset);\n\t\t\t},\n\n\t\t\tkeySize: 192 / 32,\n\n\t\t\tivSize: 64 / 32,\n\n\t\t\tblockSize: 64 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.TripleDES = BlockCipher._createHelper(TripleDES);\n\t})();\n\n\treturn CryptoJS.TripleDES;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/tripledes.js?'
                      );
                      /***/
                    },

                  /***/
                  './node_modules/crypto-js/x64-core.js':
                    /*!********************************************!*\
        !*** ./node_modules/crypto-js/x64-core.js ***!
        \********************************************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      eval(
                        ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar X32WordArray = C_lib.WordArray;\n\n\t\t/**\n   * x64 namespace.\n   */\n\t\tvar C_x64 = C.x64 = {};\n\n\t\t/**\n   * A 64-bit word.\n   */\n\t\tvar X64Word = C_x64.Word = Base.extend({\n\t\t\t/**\n    * Initializes a newly created 64-bit word.\n    *\n    * @param {number} high The high 32 bits.\n    * @param {number} low The low 32 bits.\n    *\n    * @example\n    *\n    *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);\n    */\n\t\t\tinit: function (high, low) {\n\t\t\t\tthis.high = high;\n\t\t\t\tthis.low = low;\n\t\t\t}\n\n\t\t\t/**\n    * Bitwise NOTs this word.\n    *\n    * @return {X64Word} A new x64-Word object after negating.\n    *\n    * @example\n    *\n    *     var negated = x64Word.not();\n    */\n\t\t\t// not: function () {\n\t\t\t// var high = ~this.high;\n\t\t\t// var low = ~this.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise ANDs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to AND with this word.\n    *\n    * @return {X64Word} A new x64-Word object after ANDing.\n    *\n    * @example\n    *\n    *     var anded = x64Word.and(anotherX64Word);\n    */\n\t\t\t// and: function (word) {\n\t\t\t// var high = this.high & word.high;\n\t\t\t// var low = this.low & word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise ORs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to OR with this word.\n    *\n    * @return {X64Word} A new x64-Word object after ORing.\n    *\n    * @example\n    *\n    *     var ored = x64Word.or(anotherX64Word);\n    */\n\t\t\t// or: function (word) {\n\t\t\t// var high = this.high | word.high;\n\t\t\t// var low = this.low | word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise XORs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to XOR with this word.\n    *\n    * @return {X64Word} A new x64-Word object after XORing.\n    *\n    * @example\n    *\n    *     var xored = x64Word.xor(anotherX64Word);\n    */\n\t\t\t// xor: function (word) {\n\t\t\t// var high = this.high ^ word.high;\n\t\t\t// var low = this.low ^ word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Shifts this word n bits to the left.\n    *\n    * @param {number} n The number of bits to shift.\n    *\n    * @return {X64Word} A new x64-Word object after shifting.\n    *\n    * @example\n    *\n    *     var shifted = x64Word.shiftL(25);\n    */\n\t\t\t// shiftL: function (n) {\n\t\t\t// if (n < 32) {\n\t\t\t// var high = (this.high << n) | (this.low >>> (32 - n));\n\t\t\t// var low = this.low << n;\n\t\t\t// } else {\n\t\t\t// var high = this.low << (n - 32);\n\t\t\t// var low = 0;\n\t\t\t// }\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Shifts this word n bits to the right.\n    *\n    * @param {number} n The number of bits to shift.\n    *\n    * @return {X64Word} A new x64-Word object after shifting.\n    *\n    * @example\n    *\n    *     var shifted = x64Word.shiftR(7);\n    */\n\t\t\t// shiftR: function (n) {\n\t\t\t// if (n < 32) {\n\t\t\t// var low = (this.low >>> n) | (this.high << (32 - n));\n\t\t\t// var high = this.high >>> n;\n\t\t\t// } else {\n\t\t\t// var low = this.high >>> (n - 32);\n\t\t\t// var high = 0;\n\t\t\t// }\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Rotates this word n bits to the left.\n    *\n    * @param {number} n The number of bits to rotate.\n    *\n    * @return {X64Word} A new x64-Word object after rotating.\n    *\n    * @example\n    *\n    *     var rotated = x64Word.rotL(25);\n    */\n\t\t\t// rotL: function (n) {\n\t\t\t// return this.shiftL(n).or(this.shiftR(64 - n));\n\t\t\t// },\n\n\t\t\t/**\n    * Rotates this word n bits to the right.\n    *\n    * @param {number} n The number of bits to rotate.\n    *\n    * @return {X64Word} A new x64-Word object after rotating.\n    *\n    * @example\n    *\n    *     var rotated = x64Word.rotR(7);\n    */\n\t\t\t// rotR: function (n) {\n\t\t\t// return this.shiftR(n).or(this.shiftL(64 - n));\n\t\t\t// },\n\n\t\t\t/**\n    * Adds this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to add with this word.\n    *\n    * @return {X64Word} A new x64-Word object after adding.\n    *\n    * @example\n    *\n    *     var added = x64Word.add(anotherX64Word);\n    */\n\t\t\t// add: function (word) {\n\t\t\t// var low = (this.low + word.low) | 0;\n\t\t\t// var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;\n\t\t\t// var high = (this.high + word.high + carry) | 0;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// }\n\t\t});\n\n\t\t/**\n   * An array of 64-bit words.\n   *\n   * @property {Array} words The array of CryptoJS.x64.Word objects.\n   * @property {number} sigBytes The number of significant bytes in this word array.\n   */\n\t\tvar X64WordArray = C_x64.WordArray = Base.extend({\n\t\t\t/**\n    * Initializes a newly created word array.\n    *\n    * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.\n    * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create();\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create([\n    *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),\n    *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)\n    *     ]);\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create([\n    *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),\n    *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)\n    *     ], 10);\n    */\n\t\t\tinit: function (words, sigBytes) {\n\t\t\t\twords = this.words = words || [];\n\n\t\t\t\tif (sigBytes != undefined) {\n\t\t\t\t\tthis.sigBytes = sigBytes;\n\t\t\t\t} else {\n\t\t\t\t\tthis.sigBytes = words.length * 8;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts this 64-bit word array to a 32-bit word array.\n    *\n    * @return {CryptoJS.lib.WordArray} This word array\'s data as a 32-bit word array.\n    *\n    * @example\n    *\n    *     var x32WordArray = x64WordArray.toX32();\n    */\n\t\t\ttoX32: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar x64Words = this.words;\n\t\t\t\tvar x64WordsLength = x64Words.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar x32Words = [];\n\t\t\t\tfor (var i = 0; i < x64WordsLength; i++) {\n\t\t\t\t\tvar x64Word = x64Words[i];\n\t\t\t\t\tx32Words.push(x64Word.high);\n\t\t\t\t\tx32Words.push(x64Word.low);\n\t\t\t\t}\n\n\t\t\t\treturn X32WordArray.create(x32Words, this.sigBytes);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this word array.\n    *\n    * @return {X64WordArray} The clone.\n    *\n    * @example\n    *\n    *     var clone = x64WordArray.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\n\t\t\t\t// Clone "words" array\n\t\t\t\tvar words = clone.words = this.words.slice(0);\n\n\t\t\t\t// Clone each X64Word object\n\t\t\t\tvar wordsLength = words.length;\n\t\t\t\tfor (var i = 0; i < wordsLength; i++) {\n\t\t\t\t\twords[i] = words[i].clone();\n\t\t\t\t}\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\t})();\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/x64-core.js?'
                      );
                      /***/
                    },

                  /***/
                  './src/index.js':
                    /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

                    /*! no static exports found */

                    /***/
                    function (module, exports, __webpack_require__) {
                      'use strict';

                      eval(
                        "\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\nconst AES = __webpack_require__(/*! crypto-js/aes */ \"./node_modules/crypto-js/aes.js\");\n\nconst keySize = 256;\nconst ivSize = 128;\nconst iterations = 100;\nconst length = 32;\nconst ivSizeDivider = 8;\n\n// HELPERS\nfunction isObject(obj) {\n  return obj === Object(obj);\n}\n\nfunction objToString(obj) {\n  if (isObject(obj)) {\n    obj = JSON.stringify(obj);\n  }\n  return obj;\n}\n\nconst oneWayEncryption = function (data) {\n  if (data) return CryptoJS.MD5(data).toString();\n  return data;\n};\n\nconst oneWayComparation = function (cypher, compare) {\n  if (cypher && compare) {\n    return cypher === CryptoJS.MD5(compare).toString();\n  }\n  return cypher;\n};\n\nconst twoWayEncryption = function (data, passphrase) {\n  if (!data) return data;\n  if (!passphrase) return passphrase;\n\n  if (isObject(data)) {\n    data = objToString(data);\n  }\n  const salt = CryptoJS.lib.WordArray.random(ivSize / ivSizeDivider);\n  const key = CryptoJS.PBKDF2(passphrase, salt, {\n    keySize: keySize / length,\n    iterations: iterations\n  });\n  const iv = CryptoJS.lib.WordArray.random(ivSize / ivSizeDivider);\n  const encrypted = CryptoJS.AES.encrypt(objToString(data), key, {\n    iv: iv,\n    padding: CryptoJS.pad.Pkcs7,\n    mode: CryptoJS.mode.CBC\n  });\n  // salt, initialization vector will be hex 32 in length\n  const cypher = salt.toString() + iv.toString() + encrypted.toString();\n  return cypher;\n};\n\nconst twoWayDecryption = function (cypher, passphrase) {\n\n  // console.log({\n  //   twd: 1,\n  //   cypher: cypher,\n  //   passphrase: passphrase\n  // });\n\n  if (!cypher) return cypher;\n\n  if (!passphrase) return passphrase;\n\n  const salt = CryptoJS.enc.Hex.parse(cypher.substr(0, length));\n  const iv = CryptoJS.enc.Hex.parse(cypher.substr(length, length));\n  const encrypted = cypher.substring(length * 2);\n  const key = CryptoJS.PBKDF2(passphrase, salt, {\n    keySize: keySize / length,\n    iterations: iterations\n  });\n  // console.log({\n  //   twd: 2,\n  //   salt: salt,\n  //   iv: iv,\n  //   encrypted: encrypted,\n  //   key: key\n  // });\n  let decrypted = CryptoJS.AES.decrypt(encrypted, key, {\n    iv: iv,\n    padding: CryptoJS.pad.Pkcs7,\n    mode: CryptoJS.mode.CBC\n  }).toString(CryptoJS.enc.Utf8);\n\n  // console.log({\n  //   twd: 3,\n  //   decrypted:decrypted\n  // })\n  // console.log('twDec4');\n  // console.log('DECRYPED',decrypted);\n  if (decrypted.charAt(0) === '\"' && decrypted.charAt(decrypted.length - 1) === '\"') {\n    decrypted = decrypted.substr(1, decrypted.length - 2);\n  }\n\n  // console.log('twDec5');\n  // console.log('DECRYPED',decrypted);\n  return decrypted;\n};\n\nconst BaseEncryption = {\n  oneWayEncrypt: oneWayEncryption,\n  oneWayCompare: oneWayComparation,\n  twoWayEncrypt: twoWayEncryption,\n  twoWayDecrypt: twoWayDecryption\n};\n\nmodule.exports = BaseEncryption;\n\n//# sourceURL=webpack://BaseEncryption/./src/index.js?"
                      );
                      /***/
                    },
                  /******/
                }
              )
            );
          });

          /***/
        },

      /***/ './node_modules/localforage/dist/localforage.js':
        /*!******************************************************!*\
  !*** ./node_modules/localforage/dist/localforage.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          var require;
          var require; /*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
          (function (f) {
            if (true) {
              module.exports = f();
            } else {
              var g;
            }
          })(function () {
            var define, module, exports;
            return (function e(t, n, r) {
              function s(o, u) {
                if (!n[o]) {
                  if (!t[o]) {
                    var a = typeof require == 'function' && require;
                    if (!u && a) return require(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw ((f.code = 'MODULE_NOT_FOUND'), f);
                  }

                  var l = (n[o] = {
                    exports: {},
                  });
                  t[o][0].call(
                    l.exports,
                    function (e) {
                      var n = t[o][1][e];
                      return s(n ? n : e);
                    },
                    l,
                    l.exports,
                    e,
                    t,
                    n,
                    r
                  );
                }

                return n[o].exports;
              }

              var i = typeof require == 'function' && require;

              for (var o = 0; o < r.length; o++) s(r[o]);

              return s;
            })(
              {
                1: [
                  function (_dereq_, module, exports) {
                    (function (global) {
                      'use strict';

                      var Mutation =
                        global.MutationObserver ||
                        global.WebKitMutationObserver;
                      var scheduleDrain;
                      {
                        if (Mutation) {
                          var called = 0;
                          var observer = new Mutation(nextTick);
                          var element = global.document.createTextNode('');
                          observer.observe(element, {
                            characterData: true,
                          });

                          scheduleDrain = function () {
                            element.data = called = ++called % 2;
                          };
                        } else if (
                          !global.setImmediate &&
                          typeof global.MessageChannel !== 'undefined'
                        ) {
                          var channel = new global.MessageChannel();
                          channel.port1.onmessage = nextTick;

                          scheduleDrain = function () {
                            channel.port2.postMessage(0);
                          };
                        } else if (
                          'document' in global &&
                          'onreadystatechange' in
                            global.document.createElement('script')
                        ) {
                          scheduleDrain = function () {
                            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                            var scriptEl =
                              global.document.createElement('script');

                            scriptEl.onreadystatechange = function () {
                              nextTick();
                              scriptEl.onreadystatechange = null;
                              scriptEl.parentNode.removeChild(scriptEl);
                              scriptEl = null;
                            };

                            global.document.documentElement.appendChild(
                              scriptEl
                            );
                          };
                        } else {
                          scheduleDrain = function () {
                            setTimeout(nextTick, 0);
                          };
                        }
                      }
                      var draining;
                      var queue = []; //named nextTick for less confusing stack traces

                      function nextTick() {
                        draining = true;
                        var i, oldQueue;
                        var len = queue.length;

                        while (len) {
                          oldQueue = queue;
                          queue = [];
                          i = -1;

                          while (++i < len) {
                            oldQueue[i]();
                          }

                          len = queue.length;
                        }

                        draining = false;
                      }

                      module.exports = immediate;

                      function immediate(task) {
                        if (queue.push(task) === 1 && !draining) {
                          scheduleDrain();
                        }
                      }
                    }).call(
                      this,
                      typeof global !== 'undefined'
                        ? global
                        : typeof self !== 'undefined'
                        ? self
                        : typeof window !== 'undefined'
                        ? window
                        : {}
                    );
                  },
                  {},
                ],
                2: [
                  function (_dereq_, module, exports) {
                    'use strict';

                    var immediate = _dereq_(1);
                    /* istanbul ignore next */

                    function INTERNAL() {}

                    var handlers = {};
                    var REJECTED = ['REJECTED'];
                    var FULFILLED = ['FULFILLED'];
                    var PENDING = ['PENDING'];
                    module.exports = Promise;

                    function Promise(resolver) {
                      if (typeof resolver !== 'function') {
                        throw new TypeError('resolver must be a function');
                      }

                      this.state = PENDING;
                      this.queue = [];
                      this.outcome = void 0;

                      if (resolver !== INTERNAL) {
                        safelyResolveThenable(this, resolver);
                      }
                    }

                    Promise.prototype['catch'] = function (onRejected) {
                      return this.then(null, onRejected);
                    };

                    Promise.prototype.then = function (
                      onFulfilled,
                      onRejected
                    ) {
                      if (
                        (typeof onFulfilled !== 'function' &&
                          this.state === FULFILLED) ||
                        (typeof onRejected !== 'function' &&
                          this.state === REJECTED)
                      ) {
                        return this;
                      }

                      var promise = new this.constructor(INTERNAL);

                      if (this.state !== PENDING) {
                        var resolver =
                          this.state === FULFILLED ? onFulfilled : onRejected;
                        unwrap(promise, resolver, this.outcome);
                      } else {
                        this.queue.push(
                          new QueueItem(promise, onFulfilled, onRejected)
                        );
                      }

                      return promise;
                    };

                    function QueueItem(promise, onFulfilled, onRejected) {
                      this.promise = promise;

                      if (typeof onFulfilled === 'function') {
                        this.onFulfilled = onFulfilled;
                        this.callFulfilled = this.otherCallFulfilled;
                      }

                      if (typeof onRejected === 'function') {
                        this.onRejected = onRejected;
                        this.callRejected = this.otherCallRejected;
                      }
                    }

                    QueueItem.prototype.callFulfilled = function (value) {
                      handlers.resolve(this.promise, value);
                    };

                    QueueItem.prototype.otherCallFulfilled = function (value) {
                      unwrap(this.promise, this.onFulfilled, value);
                    };

                    QueueItem.prototype.callRejected = function (value) {
                      handlers.reject(this.promise, value);
                    };

                    QueueItem.prototype.otherCallRejected = function (value) {
                      unwrap(this.promise, this.onRejected, value);
                    };

                    function unwrap(promise, func, value) {
                      immediate(function () {
                        var returnValue;

                        try {
                          returnValue = func(value);
                        } catch (e) {
                          return handlers.reject(promise, e);
                        }

                        if (returnValue === promise) {
                          handlers.reject(
                            promise,
                            new TypeError('Cannot resolve promise with itself')
                          );
                        } else {
                          handlers.resolve(promise, returnValue);
                        }
                      });
                    }

                    handlers.resolve = function (self, value) {
                      var result = tryCatch(getThen, value);

                      if (result.status === 'error') {
                        return handlers.reject(self, result.value);
                      }

                      var thenable = result.value;

                      if (thenable) {
                        safelyResolveThenable(self, thenable);
                      } else {
                        self.state = FULFILLED;
                        self.outcome = value;
                        var i = -1;
                        var len = self.queue.length;

                        while (++i < len) {
                          self.queue[i].callFulfilled(value);
                        }
                      }

                      return self;
                    };

                    handlers.reject = function (self, error) {
                      self.state = REJECTED;
                      self.outcome = error;
                      var i = -1;
                      var len = self.queue.length;

                      while (++i < len) {
                        self.queue[i].callRejected(error);
                      }

                      return self;
                    };

                    function getThen(obj) {
                      // Make sure we only access the accessor once as required by the spec
                      var then = obj && obj.then;

                      if (
                        obj &&
                        (typeof obj === 'object' ||
                          typeof obj === 'function') &&
                        typeof then === 'function'
                      ) {
                        return function appyThen() {
                          then.apply(obj, arguments);
                        };
                      }
                    }

                    function safelyResolveThenable(self, thenable) {
                      // Either fulfill, reject or reject with error
                      var called = false;

                      function onError(value) {
                        if (called) {
                          return;
                        }

                        called = true;
                        handlers.reject(self, value);
                      }

                      function onSuccess(value) {
                        if (called) {
                          return;
                        }

                        called = true;
                        handlers.resolve(self, value);
                      }

                      function tryToUnwrap() {
                        thenable(onSuccess, onError);
                      }

                      var result = tryCatch(tryToUnwrap);

                      if (result.status === 'error') {
                        onError(result.value);
                      }
                    }

                    function tryCatch(func, value) {
                      var out = {};

                      try {
                        out.value = func(value);
                        out.status = 'success';
                      } catch (e) {
                        out.status = 'error';
                        out.value = e;
                      }

                      return out;
                    }

                    Promise.resolve = resolve;

                    function resolve(value) {
                      if (value instanceof this) {
                        return value;
                      }

                      return handlers.resolve(new this(INTERNAL), value);
                    }

                    Promise.reject = reject;

                    function reject(reason) {
                      var promise = new this(INTERNAL);
                      return handlers.reject(promise, reason);
                    }

                    Promise.all = all;

                    function all(iterable) {
                      var self = this;

                      if (
                        Object.prototype.toString.call(iterable) !==
                        '[object Array]'
                      ) {
                        return this.reject(new TypeError('must be an array'));
                      }

                      var len = iterable.length;
                      var called = false;

                      if (!len) {
                        return this.resolve([]);
                      }

                      var values = new Array(len);
                      var resolved = 0;
                      var i = -1;
                      var promise = new this(INTERNAL);

                      while (++i < len) {
                        allResolver(iterable[i], i);
                      }

                      return promise;

                      function allResolver(value, i) {
                        self
                          .resolve(value)
                          .then(resolveFromAll, function (error) {
                            if (!called) {
                              called = true;
                              handlers.reject(promise, error);
                            }
                          });

                        function resolveFromAll(outValue) {
                          values[i] = outValue;

                          if (++resolved === len && !called) {
                            called = true;
                            handlers.resolve(promise, values);
                          }
                        }
                      }
                    }

                    Promise.race = race;

                    function race(iterable) {
                      var self = this;

                      if (
                        Object.prototype.toString.call(iterable) !==
                        '[object Array]'
                      ) {
                        return this.reject(new TypeError('must be an array'));
                      }

                      var len = iterable.length;
                      var called = false;

                      if (!len) {
                        return this.resolve([]);
                      }

                      var i = -1;
                      var promise = new this(INTERNAL);

                      while (++i < len) {
                        resolver(iterable[i]);
                      }

                      return promise;

                      function resolver(value) {
                        self.resolve(value).then(
                          function (response) {
                            if (!called) {
                              called = true;
                              handlers.resolve(promise, response);
                            }
                          },
                          function (error) {
                            if (!called) {
                              called = true;
                              handlers.reject(promise, error);
                            }
                          }
                        );
                      }
                    }
                  },
                  {
                    1: 1,
                  },
                ],
                3: [
                  function (_dereq_, module, exports) {
                    (function (global) {
                      'use strict';

                      if (typeof global.Promise !== 'function') {
                        global.Promise = _dereq_(2);
                      }
                    }).call(
                      this,
                      typeof global !== 'undefined'
                        ? global
                        : typeof self !== 'undefined'
                        ? self
                        : typeof window !== 'undefined'
                        ? window
                        : {}
                    );
                  },
                  {
                    2: 2,
                  },
                ],
                4: [
                  function (_dereq_, module, exports) {
                    'use strict';

                    var _typeof =
                      typeof Symbol === 'function' &&
                      typeof Symbol.iterator === 'symbol'
                        ? function (obj) {
                            return typeof obj;
                          }
                        : function (obj) {
                            return obj &&
                              typeof Symbol === 'function' &&
                              obj.constructor === Symbol &&
                              obj !== Symbol.prototype
                              ? 'symbol'
                              : typeof obj;
                          };

                    function _classCallCheck(instance, Constructor) {
                      if (!(instance instanceof Constructor)) {
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                      }
                    }

                    function getIDB() {
                      /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
                      try {
                        if (typeof indexedDB !== 'undefined') {
                          return indexedDB;
                        }

                        if (typeof webkitIndexedDB !== 'undefined') {
                          return webkitIndexedDB;
                        }

                        if (typeof mozIndexedDB !== 'undefined') {
                          return mozIndexedDB;
                        }

                        if (typeof OIndexedDB !== 'undefined') {
                          return OIndexedDB;
                        }

                        if (typeof msIndexedDB !== 'undefined') {
                          return msIndexedDB;
                        }
                      } catch (e) {
                        return;
                      }
                    }

                    var idb = getIDB();

                    function isIndexedDBValid() {
                      try {
                        // Initialize IndexedDB; fall back to vendor-prefixed versions
                        // if needed.
                        if (!idb || !idb.open) {
                          return false;
                        } // We mimic PouchDB here;
                        //
                        // We test for openDatabase because IE Mobile identifies itself
                        // as Safari. Oh the lulz...

                        var isSafari =
                          typeof openDatabase !== 'undefined' &&
                          /(Safari|iPhone|iPad|iPod)/.test(
                            navigator.userAgent
                          ) &&
                          !/Chrome/.test(navigator.userAgent) &&
                          !/BlackBerry/.test(navigator.platform);
                        var hasFetch =
                          typeof fetch === 'function' &&
                          fetch.toString().indexOf('[native code') !== -1; // Safari <10.1 does not meet our requirements for IDB support
                        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                        // Safari 10.1 shipped with fetch, we can use that to detect it.
                        // Note: this creates issues with `window.fetch` polyfills and
                        // overrides; see:
                        // https://github.com/localForage/localForage/issues/856

                        return (
                          (!isSafari || hasFetch) &&
                          typeof indexedDB !== 'undefined' && // some outdated implementations of IDB that appear on Samsung
                          // and HTC Android devices <4.4 are missing IDBKeyRange
                          // See: https://github.com/mozilla/localForage/issues/128
                          // See: https://github.com/mozilla/localForage/issues/272
                          typeof IDBKeyRange !== 'undefined'
                        );
                      } catch (e) {
                        return false;
                      }
                    } // Abstracts constructing a Blob object, so it also works in older
                    // browsers that don't support the native Blob constructor. (i.e.
                    // old QtWebKit versions, at least).
                    // Abstracts constructing a Blob object, so it also works in older
                    // browsers that don't support the native Blob constructor. (i.e.
                    // old QtWebKit versions, at least).

                    function createBlob(parts, properties) {
                      /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
                      parts = parts || [];
                      properties = properties || {};

                      try {
                        return new Blob(parts, properties);
                      } catch (e) {
                        if (e.name !== 'TypeError') {
                          throw e;
                        }

                        var Builder =
                          typeof BlobBuilder !== 'undefined'
                            ? BlobBuilder
                            : typeof MSBlobBuilder !== 'undefined'
                            ? MSBlobBuilder
                            : typeof MozBlobBuilder !== 'undefined'
                            ? MozBlobBuilder
                            : WebKitBlobBuilder;
                        var builder = new Builder();

                        for (var i = 0; i < parts.length; i += 1) {
                          builder.append(parts[i]);
                        }

                        return builder.getBlob(properties.type);
                      }
                    } // This is CommonJS because lie is an external dependency, so Rollup
                    // can just ignore it.

                    if (typeof Promise === 'undefined') {
                      // In the "nopromises" build this will just throw if you don't have
                      // a global promise object, but it would throw anyway later.
                      _dereq_(3);
                    }

                    var Promise$1 = Promise;

                    function executeCallback(promise, callback) {
                      if (callback) {
                        promise.then(
                          function (result) {
                            callback(null, result);
                          },
                          function (error) {
                            callback(error);
                          }
                        );
                      }
                    }

                    function executeTwoCallbacks(
                      promise,
                      callback,
                      errorCallback
                    ) {
                      if (typeof callback === 'function') {
                        promise.then(callback);
                      }

                      if (typeof errorCallback === 'function') {
                        promise['catch'](errorCallback);
                      }
                    }

                    function normalizeKey(key) {
                      // Cast the key to a string, as that's all we can set as a key.
                      if (typeof key !== 'string') {
                        console.warn(
                          key + ' used as a key, but it is not a string.'
                        );
                        key = String(key);
                      }

                      return key;
                    }

                    function getCallback() {
                      if (
                        arguments.length &&
                        typeof arguments[arguments.length - 1] === 'function'
                      ) {
                        return arguments[arguments.length - 1];
                      }
                    } // Some code originally from async_storage.js in
                    // [Gaia](https://github.com/mozilla-b2g/gaia).

                    var DETECT_BLOB_SUPPORT_STORE =
                      'local-forage-detect-blob-support';
                    var supportsBlobs = void 0;
                    var dbContexts = {};
                    var toString = Object.prototype.toString; // Transaction Modes

                    var READ_ONLY = 'readonly';
                    var READ_WRITE = 'readwrite'; // Transform a binary string to an array buffer, because otherwise
                    // weird stuff happens when you try to work with the binary string directly.
                    // It is known.
                    // From http://stackoverflow.com/questions/14967647/ (continues on next line)
                    // encode-decode-image-with-base64-breaks-image (2013-04-21)

                    function _binStringToArrayBuffer(bin) {
                      var length = bin.length;
                      var buf = new ArrayBuffer(length);
                      var arr = new Uint8Array(buf);

                      for (var i = 0; i < length; i++) {
                        arr[i] = bin.charCodeAt(i);
                      }

                      return buf;
                    } //
                    // Blobs are not supported in all versions of IndexedDB, notably
                    // Chrome <37 and Android <5. In those versions, storing a blob will throw.
                    //
                    // Various other blob bugs exist in Chrome v37-42 (inclusive).
                    // Detecting them is expensive and confusing to users, and Chrome 37-42
                    // is at very low usage worldwide, so we do a hacky userAgent check instead.
                    //
                    // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
                    // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
                    // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
                    //
                    // Code borrowed from PouchDB. See:
                    // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
                    //

                    function _checkBlobSupportWithoutCaching(idb) {
                      return new Promise$1(function (resolve) {
                        var txn = idb.transaction(
                          DETECT_BLOB_SUPPORT_STORE,
                          READ_WRITE
                        );
                        var blob = createBlob(['']);
                        txn
                          .objectStore(DETECT_BLOB_SUPPORT_STORE)
                          .put(blob, 'key');

                        txn.onabort = function (e) {
                          // If the transaction aborts now its due to not being able to
                          // write to the database, likely due to the disk being full
                          e.preventDefault();
                          e.stopPropagation();
                          resolve(false);
                        };

                        txn.oncomplete = function () {
                          var matchedChrome =
                            navigator.userAgent.match(/Chrome\/(\d+)/);
                          var matchedEdge = navigator.userAgent.match(/Edge\//); // MS Edge pretends to be Chrome 42:
                          // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx

                          resolve(
                            matchedEdge ||
                              !matchedChrome ||
                              parseInt(matchedChrome[1], 10) >= 43
                          );
                        };
                      })['catch'](function () {
                        return false; // error, so assume unsupported
                      });
                    }

                    function _checkBlobSupport(idb) {
                      if (typeof supportsBlobs === 'boolean') {
                        return Promise$1.resolve(supportsBlobs);
                      }

                      return _checkBlobSupportWithoutCaching(idb).then(
                        function (value) {
                          supportsBlobs = value;
                          return supportsBlobs;
                        }
                      );
                    }

                    function _deferReadiness(dbInfo) {
                      var dbContext = dbContexts[dbInfo.name]; // Create a deferred object representing the current database operation.

                      var deferredOperation = {};
                      deferredOperation.promise = new Promise$1(function (
                        resolve,
                        reject
                      ) {
                        deferredOperation.resolve = resolve;
                        deferredOperation.reject = reject;
                      }); // Enqueue the deferred operation.

                      dbContext.deferredOperations.push(deferredOperation); // Chain its promise to the database readiness.

                      if (!dbContext.dbReady) {
                        dbContext.dbReady = deferredOperation.promise;
                      } else {
                        dbContext.dbReady = dbContext.dbReady.then(function () {
                          return deferredOperation.promise;
                        });
                      }
                    }

                    function _advanceReadiness(dbInfo) {
                      var dbContext = dbContexts[dbInfo.name]; // Dequeue a deferred operation.

                      var deferredOperation =
                        dbContext.deferredOperations.pop(); // Resolve its promise (which is part of the database readiness
                      // chain of promises).

                      if (deferredOperation) {
                        deferredOperation.resolve();
                        return deferredOperation.promise;
                      }
                    }

                    function _rejectReadiness(dbInfo, err) {
                      var dbContext = dbContexts[dbInfo.name]; // Dequeue a deferred operation.

                      var deferredOperation =
                        dbContext.deferredOperations.pop(); // Reject its promise (which is part of the database readiness
                      // chain of promises).

                      if (deferredOperation) {
                        deferredOperation.reject(err);
                        return deferredOperation.promise;
                      }
                    }

                    function _getConnection(dbInfo, upgradeNeeded) {
                      return new Promise$1(function (resolve, reject) {
                        dbContexts[dbInfo.name] =
                          dbContexts[dbInfo.name] || createDbContext();

                        if (dbInfo.db) {
                          if (upgradeNeeded) {
                            _deferReadiness(dbInfo);

                            dbInfo.db.close();
                          } else {
                            return resolve(dbInfo.db);
                          }
                        }

                        var dbArgs = [dbInfo.name];

                        if (upgradeNeeded) {
                          dbArgs.push(dbInfo.version);
                        }

                        var openreq = idb.open.apply(idb, dbArgs);

                        if (upgradeNeeded) {
                          openreq.onupgradeneeded = function (e) {
                            var db = openreq.result;

                            try {
                              db.createObjectStore(dbInfo.storeName);

                              if (e.oldVersion <= 1) {
                                // Added when support for blob shims was added
                                db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                              }
                            } catch (ex) {
                              if (ex.name === 'ConstraintError') {
                                console.warn(
                                  'The database "' +
                                    dbInfo.name +
                                    '"' +
                                    ' has been upgraded from version ' +
                                    e.oldVersion +
                                    ' to version ' +
                                    e.newVersion +
                                    ', but the storage "' +
                                    dbInfo.storeName +
                                    '" already exists.'
                                );
                              } else {
                                throw ex;
                              }
                            }
                          };
                        }

                        openreq.onerror = function (e) {
                          e.preventDefault();
                          reject(openreq.error);
                        };

                        openreq.onsuccess = function () {
                          var db = openreq.result;

                          db.onversionchange = function (e) {
                            // Triggered when the database is modified (e.g. adding an objectStore) or
                            // deleted (even when initiated by other sessions in different tabs).
                            // Closing the connection here prevents those operations from being blocked.
                            // If the database is accessed again later by this instance, the connection
                            // will be reopened or the database recreated as needed.
                            e.target.close();
                          };

                          resolve(db);

                          _advanceReadiness(dbInfo);
                        };
                      });
                    }

                    function _getOriginalConnection(dbInfo) {
                      return _getConnection(dbInfo, false);
                    }

                    function _getUpgradedConnection(dbInfo) {
                      return _getConnection(dbInfo, true);
                    }

                    function _isUpgradeNeeded(dbInfo, defaultVersion) {
                      if (!dbInfo.db) {
                        return true;
                      }

                      var isNewStore = !dbInfo.db.objectStoreNames.contains(
                        dbInfo.storeName
                      );
                      var isDowngrade = dbInfo.version < dbInfo.db.version;
                      var isUpgrade = dbInfo.version > dbInfo.db.version;

                      if (isDowngrade) {
                        // If the version is not the default one
                        // then warn for impossible downgrade.
                        if (dbInfo.version !== defaultVersion) {
                          console.warn(
                            'The database "' +
                              dbInfo.name +
                              '"' +
                              " can't be downgraded from version " +
                              dbInfo.db.version +
                              ' to version ' +
                              dbInfo.version +
                              '.'
                          );
                        } // Align the versions to prevent errors.

                        dbInfo.version = dbInfo.db.version;
                      }

                      if (isUpgrade || isNewStore) {
                        // If the store is new then increment the version (if needed).
                        // This will trigger an "upgradeneeded" event which is required
                        // for creating a store.
                        if (isNewStore) {
                          var incVersion = dbInfo.db.version + 1;

                          if (incVersion > dbInfo.version) {
                            dbInfo.version = incVersion;
                          }
                        }

                        return true;
                      }

                      return false;
                    } // encode a blob for indexeddb engines that don't support blobs

                    function _encodeBlob(blob) {
                      return new Promise$1(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onerror = reject;

                        reader.onloadend = function (e) {
                          var base64 = btoa(e.target.result || '');
                          resolve({
                            __local_forage_encoded_blob: true,
                            data: base64,
                            type: blob.type,
                          });
                        };

                        reader.readAsBinaryString(blob);
                      });
                    } // decode an encoded blob

                    function _decodeBlob(encodedBlob) {
                      var arrayBuff = _binStringToArrayBuffer(
                        atob(encodedBlob.data)
                      );

                      return createBlob([arrayBuff], {
                        type: encodedBlob.type,
                      });
                    } // is this one of our fancy encoded blobs?

                    function _isEncodedBlob(value) {
                      return value && value.__local_forage_encoded_blob;
                    } // Specialize the default `ready()` function by making it dependent
                    // on the current database operations. Thus, the driver will be actually
                    // ready when it's been initialized (default) *and* there are no pending
                    // operations on the database (initiated by some other instances).

                    function _fullyReady(callback) {
                      var self = this;

                      var promise = self._initReady().then(function () {
                        var dbContext = dbContexts[self._dbInfo.name];

                        if (dbContext && dbContext.dbReady) {
                          return dbContext.dbReady;
                        }
                      });

                      executeTwoCallbacks(promise, callback, callback);
                      return promise;
                    } // Try to establish a new db connection to replace the
                    // current one which is broken (i.e. experiencing
                    // InvalidStateError while creating a transaction).

                    function _tryReconnect(dbInfo) {
                      _deferReadiness(dbInfo);

                      var dbContext = dbContexts[dbInfo.name];
                      var forages = dbContext.forages;

                      for (var i = 0; i < forages.length; i++) {
                        var forage = forages[i];

                        if (forage._dbInfo.db) {
                          forage._dbInfo.db.close();

                          forage._dbInfo.db = null;
                        }
                      }

                      dbInfo.db = null;
                      return _getOriginalConnection(dbInfo)
                        .then(function (db) {
                          dbInfo.db = db;

                          if (_isUpgradeNeeded(dbInfo)) {
                            // Reopen the database for upgrading.
                            return _getUpgradedConnection(dbInfo);
                          }

                          return db;
                        })
                        .then(function (db) {
                          // store the latest db reference
                          // in case the db was upgraded
                          dbInfo.db = dbContext.db = db;

                          for (var i = 0; i < forages.length; i++) {
                            forages[i]._dbInfo.db = db;
                          }
                        })
                        ['catch'](function (err) {
                          _rejectReadiness(dbInfo, err);

                          throw err;
                        });
                    } // FF doesn't like Promises (micro-tasks) and IDDB store operations,
                    // so we have to do it with callbacks

                    function createTransaction(
                      dbInfo,
                      mode,
                      callback,
                      retries
                    ) {
                      if (retries === undefined) {
                        retries = 1;
                      }

                      try {
                        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                        callback(null, tx);
                      } catch (err) {
                        if (
                          retries > 0 &&
                          (!dbInfo.db ||
                            err.name === 'InvalidStateError' ||
                            err.name === 'NotFoundError')
                        ) {
                          return Promise$1.resolve()
                            .then(function () {
                              if (
                                !dbInfo.db ||
                                (err.name === 'NotFoundError' &&
                                  !dbInfo.db.objectStoreNames.contains(
                                    dbInfo.storeName
                                  ) &&
                                  dbInfo.version <= dbInfo.db.version)
                              ) {
                                // increase the db version, to create the new ObjectStore
                                if (dbInfo.db) {
                                  dbInfo.version = dbInfo.db.version + 1;
                                } // Reopen the database for upgrading.

                                return _getUpgradedConnection(dbInfo);
                              }
                            })
                            .then(function () {
                              return _tryReconnect(dbInfo).then(function () {
                                createTransaction(
                                  dbInfo,
                                  mode,
                                  callback,
                                  retries - 1
                                );
                              });
                            })
                            ['catch'](callback);
                        }

                        callback(err);
                      }
                    }

                    function createDbContext() {
                      return {
                        // Running localForages sharing a database.
                        forages: [],
                        // Shared database.
                        db: null,
                        // Database readiness (promise).
                        dbReady: null,
                        // Deferred operations on the database.
                        deferredOperations: [],
                      };
                    } // Open the IndexedDB database (automatically creates one if one didn't
                    // previously exist), using any options set in the config.

                    function _initStorage(options) {
                      var self = this;
                      var dbInfo = {
                        db: null,
                      };

                      if (options) {
                        for (var i in options) {
                          dbInfo[i] = options[i];
                        }
                      } // Get the current context of the database;

                      var dbContext = dbContexts[dbInfo.name]; // ...or create a new context.

                      if (!dbContext) {
                        dbContext = createDbContext(); // Register the new context in the global container.

                        dbContexts[dbInfo.name] = dbContext;
                      } // Register itself as a running localForage in the current context.

                      dbContext.forages.push(self); // Replace the default `ready()` function with the specialized one.

                      if (!self._initReady) {
                        self._initReady = self.ready;
                        self.ready = _fullyReady;
                      } // Create an array of initialization states of the related localForages.

                      var initPromises = [];

                      function ignoreErrors() {
                        // Don't handle errors here,
                        // just makes sure related localForages aren't pending.
                        return Promise$1.resolve();
                      }

                      for (var j = 0; j < dbContext.forages.length; j++) {
                        var forage = dbContext.forages[j];

                        if (forage !== self) {
                          // Don't wait for itself...
                          initPromises.push(
                            forage._initReady()['catch'](ignoreErrors)
                          );
                        }
                      } // Take a snapshot of the related localForages.

                      var forages = dbContext.forages.slice(0); // Initialize the connection process only when
                      // all the related localForages aren't pending.

                      return Promise$1.all(initPromises)
                        .then(function () {
                          dbInfo.db = dbContext.db; // Get the connection or open a new one without upgrade.

                          return _getOriginalConnection(dbInfo);
                        })
                        .then(function (db) {
                          dbInfo.db = db;

                          if (
                            _isUpgradeNeeded(
                              dbInfo,
                              self._defaultConfig.version
                            )
                          ) {
                            // Reopen the database for upgrading.
                            return _getUpgradedConnection(dbInfo);
                          }

                          return db;
                        })
                        .then(function (db) {
                          dbInfo.db = dbContext.db = db;
                          self._dbInfo = dbInfo; // Share the final connection amongst related localForages.

                          for (var k = 0; k < forages.length; k++) {
                            var forage = forages[k];

                            if (forage !== self) {
                              // Self is already up-to-date.
                              forage._dbInfo.db = dbInfo.db;
                              forage._dbInfo.version = dbInfo.version;
                            }
                          }
                        });
                    }

                    function getItem(key, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            createTransaction(
                              self._dbInfo,
                              READ_ONLY,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  );
                                  var req = store.get(key);

                                  req.onsuccess = function () {
                                    var value = req.result;

                                    if (value === undefined) {
                                      value = null;
                                    }

                                    if (_isEncodedBlob(value)) {
                                      value = _decodeBlob(value);
                                    }

                                    resolve(value);
                                  };

                                  req.onerror = function () {
                                    reject(req.error);
                                  };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Iterate over all items stored in database.

                    function iterate(iterator, callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            createTransaction(
                              self._dbInfo,
                              READ_ONLY,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  );
                                  var req = store.openCursor();
                                  var iterationNumber = 1;

                                  req.onsuccess = function () {
                                    var cursor = req.result;

                                    if (cursor) {
                                      var value = cursor.value;

                                      if (_isEncodedBlob(value)) {
                                        value = _decodeBlob(value);
                                      }

                                      var result = iterator(
                                        value,
                                        cursor.key,
                                        iterationNumber++
                                      ); // when the iterator callback returns any
                                      // (non-`undefined`) value, then we stop
                                      // the iteration immediately

                                      if (result !== void 0) {
                                        resolve(result);
                                      } else {
                                        cursor['continue']();
                                      }
                                    } else {
                                      resolve();
                                    }
                                  };

                                  req.onerror = function () {
                                    reject(req.error);
                                  };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function setItem(key, value, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = new Promise$1(function (resolve, reject) {
                        var dbInfo;
                        self
                          .ready()
                          .then(function () {
                            dbInfo = self._dbInfo;

                            if (toString.call(value) === '[object Blob]') {
                              return _checkBlobSupport(dbInfo.db).then(
                                function (blobSupport) {
                                  if (blobSupport) {
                                    return value;
                                  }

                                  return _encodeBlob(value);
                                }
                              );
                            }

                            return value;
                          })
                          .then(function (value) {
                            createTransaction(
                              self._dbInfo,
                              READ_WRITE,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  ); // The reason we don't _save_ null is because IE 10 does
                                  // not support saving the `null` type in IndexedDB. How
                                  // ironic, given the bug below!
                                  // See: https://github.com/mozilla/localForage/issues/161

                                  if (value === null) {
                                    value = undefined;
                                  }

                                  var req = store.put(value, key);

                                  transaction.oncomplete = function () {
                                    // Cast to undefined so the value passed to
                                    // callback/promise is the same as what one would get out
                                    // of `getItem()` later. This leads to some weirdness
                                    // (setItem('foo', undefined) will return `null`), but
                                    // it's not my fault localStorage is our baseline and that
                                    // it's weird.
                                    if (value === undefined) {
                                      value = null;
                                    }

                                    resolve(value);
                                  };

                                  transaction.onabort = transaction.onerror =
                                    function () {
                                      var err = req.error
                                        ? req.error
                                        : req.transaction.error;
                                      reject(err);
                                    };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function removeItem(key, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            createTransaction(
                              self._dbInfo,
                              READ_WRITE,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  ); // We use a Grunt task to make this safe for IE and some
                                  // versions of Android (including those used by Cordova).
                                  // Normally IE won't like `.delete()` and will insist on
                                  // using `['delete']()`, but we have a build step that
                                  // fixes this for us now.

                                  var req = store['delete'](key);

                                  transaction.oncomplete = function () {
                                    resolve();
                                  };

                                  transaction.onerror = function () {
                                    reject(req.error);
                                  }; // The request will be also be aborted if we've exceeded our storage
                                  // space.

                                  transaction.onabort = function () {
                                    var err = req.error
                                      ? req.error
                                      : req.transaction.error;
                                    reject(err);
                                  };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function clear(callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            createTransaction(
                              self._dbInfo,
                              READ_WRITE,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  );
                                  var req = store.clear();

                                  transaction.oncomplete = function () {
                                    resolve();
                                  };

                                  transaction.onabort = transaction.onerror =
                                    function () {
                                      var err = req.error
                                        ? req.error
                                        : req.transaction.error;
                                      reject(err);
                                    };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function length(callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            createTransaction(
                              self._dbInfo,
                              READ_ONLY,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  );
                                  var req = store.count();

                                  req.onsuccess = function () {
                                    resolve(req.result);
                                  };

                                  req.onerror = function () {
                                    reject(req.error);
                                  };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function key(n, callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        if (n < 0) {
                          resolve(null);
                          return;
                        }

                        self
                          .ready()
                          .then(function () {
                            createTransaction(
                              self._dbInfo,
                              READ_ONLY,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  );
                                  var advanced = false;
                                  var req = store.openKeyCursor();

                                  req.onsuccess = function () {
                                    var cursor = req.result;

                                    if (!cursor) {
                                      // this means there weren't enough keys
                                      resolve(null);
                                      return;
                                    }

                                    if (n === 0) {
                                      // We have the first key, return it if that's what they
                                      // wanted.
                                      resolve(cursor.key);
                                    } else {
                                      if (!advanced) {
                                        // Otherwise, ask the cursor to skip ahead n
                                        // records.
                                        advanced = true;
                                        cursor.advance(n);
                                      } else {
                                        // When we get here, we've got the nth key.
                                        resolve(cursor.key);
                                      }
                                    }
                                  };

                                  req.onerror = function () {
                                    reject(req.error);
                                  };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function keys(callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            createTransaction(
                              self._dbInfo,
                              READ_ONLY,
                              function (err, transaction) {
                                if (err) {
                                  return reject(err);
                                }

                                try {
                                  var store = transaction.objectStore(
                                    self._dbInfo.storeName
                                  );
                                  var req = store.openKeyCursor();
                                  var keys = [];

                                  req.onsuccess = function () {
                                    var cursor = req.result;

                                    if (!cursor) {
                                      resolve(keys);
                                      return;
                                    }

                                    keys.push(cursor.key);
                                    cursor['continue']();
                                  };

                                  req.onerror = function () {
                                    reject(req.error);
                                  };
                                } catch (e) {
                                  reject(e);
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function dropInstance(options, callback) {
                      callback = getCallback.apply(this, arguments);
                      var currentConfig = this.config();
                      options =
                        (typeof options !== 'function' && options) || {};

                      if (!options.name) {
                        options.name = options.name || currentConfig.name;
                        options.storeName =
                          options.storeName || currentConfig.storeName;
                      }

                      var self = this;
                      var promise;

                      if (!options.name) {
                        promise = Promise$1.reject('Invalid arguments');
                      } else {
                        var isCurrentDb =
                          options.name === currentConfig.name &&
                          self._dbInfo.db;
                        var dbPromise = isCurrentDb
                          ? Promise$1.resolve(self._dbInfo.db)
                          : _getOriginalConnection(options).then(function (db) {
                              var dbContext = dbContexts[options.name];
                              var forages = dbContext.forages;
                              dbContext.db = db;

                              for (var i = 0; i < forages.length; i++) {
                                forages[i]._dbInfo.db = db;
                              }

                              return db;
                            });

                        if (!options.storeName) {
                          promise = dbPromise.then(function (db) {
                            _deferReadiness(options);

                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            db.close();

                            for (var i = 0; i < forages.length; i++) {
                              var forage = forages[i];
                              forage._dbInfo.db = null;
                            }

                            var dropDBPromise = new Promise$1(function (
                              resolve,
                              reject
                            ) {
                              var req = idb.deleteDatabase(options.name);

                              req.onerror = function () {
                                var db = req.result;

                                if (db) {
                                  db.close();
                                }

                                reject(req.error);
                              };

                              req.onblocked = function () {
                                // Closing all open connections in onversionchange handler should prevent this situation, but if
                                // we do get here, it just means the request remains pending - eventually it will succeed or error
                                console.warn(
                                  'dropInstance blocked for database "' +
                                    options.name +
                                    '" until all open connections are closed'
                                );
                              };

                              req.onsuccess = function () {
                                var db = req.result;

                                if (db) {
                                  db.close();
                                }

                                resolve(db);
                              };
                            });
                            return dropDBPromise
                              .then(function (db) {
                                dbContext.db = db;

                                for (var i = 0; i < forages.length; i++) {
                                  var _forage = forages[i];

                                  _advanceReadiness(_forage._dbInfo);
                                }
                              })
                              ['catch'](function (err) {
                                (_rejectReadiness(options, err) ||
                                  Promise$1.resolve())['catch'](function () {});
                                throw err;
                              });
                          });
                        } else {
                          promise = dbPromise.then(function (db) {
                            if (
                              !db.objectStoreNames.contains(options.storeName)
                            ) {
                              return;
                            }

                            var newVersion = db.version + 1;

                            _deferReadiness(options);

                            var dbContext = dbContexts[options.name];
                            var forages = dbContext.forages;
                            db.close();

                            for (var i = 0; i < forages.length; i++) {
                              var forage = forages[i];
                              forage._dbInfo.db = null;
                              forage._dbInfo.version = newVersion;
                            }

                            var dropObjectPromise = new Promise$1(function (
                              resolve,
                              reject
                            ) {
                              var req = idb.open(options.name, newVersion);

                              req.onerror = function (err) {
                                var db = req.result;
                                db.close();
                                reject(err);
                              };

                              req.onupgradeneeded = function () {
                                var db = req.result;
                                db.deleteObjectStore(options.storeName);
                              };

                              req.onsuccess = function () {
                                var db = req.result;
                                db.close();
                                resolve(db);
                              };
                            });
                            return dropObjectPromise
                              .then(function (db) {
                                dbContext.db = db;

                                for (var j = 0; j < forages.length; j++) {
                                  var _forage2 = forages[j];
                                  _forage2._dbInfo.db = db;

                                  _advanceReadiness(_forage2._dbInfo);
                                }
                              })
                              ['catch'](function (err) {
                                (_rejectReadiness(options, err) ||
                                  Promise$1.resolve())['catch'](function () {});
                                throw err;
                              });
                          });
                        }
                      }

                      executeCallback(promise, callback);
                      return promise;
                    }

                    var asyncStorage = {
                      _driver: 'asyncStorage',
                      _initStorage: _initStorage,
                      _support: isIndexedDBValid(),
                      iterate: iterate,
                      getItem: getItem,
                      setItem: setItem,
                      removeItem: removeItem,
                      clear: clear,
                      length: length,
                      key: key,
                      keys: keys,
                      dropInstance: dropInstance,
                    };

                    function isWebSQLValid() {
                      return typeof openDatabase === 'function';
                    } // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
                    // it to Base64, so this is how we store it to prevent very strange errors with less
                    // verbose ways of binary <-> string data storage.

                    var BASE_CHARS =
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                    var BLOB_TYPE_PREFIX = '~~local_forage_type~';
                    var BLOB_TYPE_PREFIX_REGEX =
                      /^~~local_forage_type~([^~]+)~/;
                    var SERIALIZED_MARKER = '__lfsc__:';
                    var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length; // OMG the serializations!

                    var TYPE_ARRAYBUFFER = 'arbf';
                    var TYPE_BLOB = 'blob';
                    var TYPE_INT8ARRAY = 'si08';
                    var TYPE_UINT8ARRAY = 'ui08';
                    var TYPE_UINT8CLAMPEDARRAY = 'uic8';
                    var TYPE_INT16ARRAY = 'si16';
                    var TYPE_INT32ARRAY = 'si32';
                    var TYPE_UINT16ARRAY = 'ur16';
                    var TYPE_UINT32ARRAY = 'ui32';
                    var TYPE_FLOAT32ARRAY = 'fl32';
                    var TYPE_FLOAT64ARRAY = 'fl64';
                    var TYPE_SERIALIZED_MARKER_LENGTH =
                      SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
                    var toString$1 = Object.prototype.toString;

                    function stringToBuffer(serializedString) {
                      // Fill the string into a ArrayBuffer.
                      var bufferLength = serializedString.length * 0.75;
                      var len = serializedString.length;
                      var i;
                      var p = 0;
                      var encoded1, encoded2, encoded3, encoded4;

                      if (
                        serializedString[serializedString.length - 1] === '='
                      ) {
                        bufferLength--;

                        if (
                          serializedString[serializedString.length - 2] === '='
                        ) {
                          bufferLength--;
                        }
                      }

                      var buffer = new ArrayBuffer(bufferLength);
                      var bytes = new Uint8Array(buffer);

                      for (i = 0; i < len; i += 4) {
                        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
                        /*jslint bitwise: true */

                        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
                      }

                      return buffer;
                    } // Converts a buffer to a string to store, serialized, in the backend
                    // storage library.

                    function bufferToString(buffer) {
                      // base64-arraybuffer
                      var bytes = new Uint8Array(buffer);
                      var base64String = '';
                      var i;

                      for (i = 0; i < bytes.length; i += 3) {
                        /*jslint bitwise: true */
                        base64String += BASE_CHARS[bytes[i] >> 2];
                        base64String +=
                          BASE_CHARS[
                            ((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)
                          ];
                        base64String +=
                          BASE_CHARS[
                            ((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)
                          ];
                        base64String += BASE_CHARS[bytes[i + 2] & 63];
                      }

                      if (bytes.length % 3 === 2) {
                        base64String =
                          base64String.substring(0, base64String.length - 1) +
                          '=';
                      } else if (bytes.length % 3 === 1) {
                        base64String =
                          base64String.substring(0, base64String.length - 2) +
                          '==';
                      }

                      return base64String;
                    } // Serialize a value, afterwards executing a callback (which usually
                    // instructs the `setItem()` callback/promise to be executed). This is how
                    // we store binary data with localStorage.

                    function serialize(value, callback) {
                      var valueType = '';

                      if (value) {
                        valueType = toString$1.call(value);
                      } // Cannot use `value instanceof ArrayBuffer` or such here, as these
                      // checks fail when running the tests using casper.js...
                      //
                      // TODO: See why those tests fail and use a better solution.

                      if (
                        value &&
                        (valueType === '[object ArrayBuffer]' ||
                          (value.buffer &&
                            toString$1.call(value.buffer) ===
                              '[object ArrayBuffer]'))
                      ) {
                        // Convert binary arrays to a string and prefix the string with
                        // a special marker.
                        var buffer;
                        var marker = SERIALIZED_MARKER;

                        if (value instanceof ArrayBuffer) {
                          buffer = value;
                          marker += TYPE_ARRAYBUFFER;
                        } else {
                          buffer = value.buffer;

                          if (valueType === '[object Int8Array]') {
                            marker += TYPE_INT8ARRAY;
                          } else if (valueType === '[object Uint8Array]') {
                            marker += TYPE_UINT8ARRAY;
                          } else if (
                            valueType === '[object Uint8ClampedArray]'
                          ) {
                            marker += TYPE_UINT8CLAMPEDARRAY;
                          } else if (valueType === '[object Int16Array]') {
                            marker += TYPE_INT16ARRAY;
                          } else if (valueType === '[object Uint16Array]') {
                            marker += TYPE_UINT16ARRAY;
                          } else if (valueType === '[object Int32Array]') {
                            marker += TYPE_INT32ARRAY;
                          } else if (valueType === '[object Uint32Array]') {
                            marker += TYPE_UINT32ARRAY;
                          } else if (valueType === '[object Float32Array]') {
                            marker += TYPE_FLOAT32ARRAY;
                          } else if (valueType === '[object Float64Array]') {
                            marker += TYPE_FLOAT64ARRAY;
                          } else {
                            callback(
                              new Error('Failed to get type for BinaryArray')
                            );
                          }
                        }

                        callback(marker + bufferToString(buffer));
                      } else if (valueType === '[object Blob]') {
                        // Conver the blob to a binaryArray and then to a string.
                        var fileReader = new FileReader();

                        fileReader.onload = function () {
                          // Backwards-compatible prefix for the blob type.
                          var str =
                            BLOB_TYPE_PREFIX +
                            value.type +
                            '~' +
                            bufferToString(this.result);
                          callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                        };

                        fileReader.readAsArrayBuffer(value);
                      } else {
                        try {
                          callback(JSON.stringify(value));
                        } catch (e) {
                          console.error(
                            "Couldn't convert value into a JSON string: ",
                            value
                          );
                          callback(null, e);
                        }
                      }
                    } // Deserialize data we've inserted into a value column/field. We place
                    // special markers into our strings to mark them as encoded; this isn't
                    // as nice as a meta field, but it's the only sane thing we can do whilst
                    // keeping localStorage support intact.
                    //
                    // Oftentimes this will just deserialize JSON content, but if we have a
                    // special marker (SERIALIZED_MARKER, defined above), we will extract
                    // some kind of arraybuffer/binary data/typed array out of the string.

                    function deserialize(value) {
                      // If we haven't marked this string as being specially serialized (i.e.
                      // something other than serialized JSON), we can just return it and be
                      // done with it.
                      if (
                        value.substring(0, SERIALIZED_MARKER_LENGTH) !==
                        SERIALIZED_MARKER
                      ) {
                        return JSON.parse(value);
                      } // The following code deals with deserializing some kind of Blob or
                      // TypedArray. First we separate out the type of data we're dealing
                      // with from the data itself.

                      var serializedString = value.substring(
                        TYPE_SERIALIZED_MARKER_LENGTH
                      );
                      var type = value.substring(
                        SERIALIZED_MARKER_LENGTH,
                        TYPE_SERIALIZED_MARKER_LENGTH
                      );
                      var blobType; // Backwards-compatible blob type serialization strategy.
                      // DBs created with older versions of localForage will simply not have the blob type.

                      if (
                        type === TYPE_BLOB &&
                        BLOB_TYPE_PREFIX_REGEX.test(serializedString)
                      ) {
                        var matcher = serializedString.match(
                          BLOB_TYPE_PREFIX_REGEX
                        );
                        blobType = matcher[1];
                        serializedString = serializedString.substring(
                          matcher[0].length
                        );
                      }

                      var buffer = stringToBuffer(serializedString); // Return the right type based on the code/type set during
                      // serialization.

                      switch (type) {
                        case TYPE_ARRAYBUFFER:
                          return buffer;

                        case TYPE_BLOB:
                          return createBlob([buffer], {
                            type: blobType,
                          });

                        case TYPE_INT8ARRAY:
                          return new Int8Array(buffer);

                        case TYPE_UINT8ARRAY:
                          return new Uint8Array(buffer);

                        case TYPE_UINT8CLAMPEDARRAY:
                          return new Uint8ClampedArray(buffer);

                        case TYPE_INT16ARRAY:
                          return new Int16Array(buffer);

                        case TYPE_UINT16ARRAY:
                          return new Uint16Array(buffer);

                        case TYPE_INT32ARRAY:
                          return new Int32Array(buffer);

                        case TYPE_UINT32ARRAY:
                          return new Uint32Array(buffer);

                        case TYPE_FLOAT32ARRAY:
                          return new Float32Array(buffer);

                        case TYPE_FLOAT64ARRAY:
                          return new Float64Array(buffer);

                        default:
                          throw new Error('Unkown type: ' + type);
                      }
                    }

                    var localforageSerializer = {
                      serialize: serialize,
                      deserialize: deserialize,
                      stringToBuffer: stringToBuffer,
                      bufferToString: bufferToString,
                    };
                    /*
                     * Includes code from:
                     *
                     * base64-arraybuffer
                     * https://github.com/niklasvh/base64-arraybuffer
                     *
                     * Copyright (c) 2012 Niklas von Hertzen
                     * Licensed under the MIT license.
                     */

                    function createDbTable(t, dbInfo, callback, errorCallback) {
                      t.executeSql(
                        'CREATE TABLE IF NOT EXISTS ' +
                          dbInfo.storeName +
                          ' ' +
                          '(id INTEGER PRIMARY KEY, key unique, value)',
                        [],
                        callback,
                        errorCallback
                      );
                    } // Open the WebSQL database (automatically creates one if one didn't
                    // previously exist), using any options set in the config.

                    function _initStorage$1(options) {
                      var self = this;
                      var dbInfo = {
                        db: null,
                      };

                      if (options) {
                        for (var i in options) {
                          dbInfo[i] =
                            typeof options[i] !== 'string'
                              ? options[i].toString()
                              : options[i];
                        }
                      }

                      var dbInfoPromise = new Promise$1(function (
                        resolve,
                        reject
                      ) {
                        // Open the database; the openDatabase API will automatically
                        // create it for us if it doesn't exist.
                        try {
                          dbInfo.db = openDatabase(
                            dbInfo.name,
                            String(dbInfo.version),
                            dbInfo.description,
                            dbInfo.size
                          );
                        } catch (e) {
                          return reject(e);
                        } // Create our key/value table if it doesn't exist.

                        dbInfo.db.transaction(function (t) {
                          createDbTable(
                            t,
                            dbInfo,
                            function () {
                              self._dbInfo = dbInfo;
                              resolve();
                            },
                            function (t, error) {
                              reject(error);
                            }
                          );
                        }, reject);
                      });
                      dbInfo.serializer = localforageSerializer;
                      return dbInfoPromise;
                    }

                    function tryExecuteSql(
                      t,
                      dbInfo,
                      sqlStatement,
                      args,
                      callback,
                      errorCallback
                    ) {
                      t.executeSql(
                        sqlStatement,
                        args,
                        callback,
                        function (t, error) {
                          if (error.code === error.SYNTAX_ERR) {
                            t.executeSql(
                              'SELECT name FROM sqlite_master ' +
                                "WHERE type='table' AND name = ?",
                              [dbInfo.storeName],
                              function (t, results) {
                                if (!results.rows.length) {
                                  // if the table is missing (was deleted)
                                  // re-create it table and retry
                                  createDbTable(
                                    t,
                                    dbInfo,
                                    function () {
                                      t.executeSql(
                                        sqlStatement,
                                        args,
                                        callback,
                                        errorCallback
                                      );
                                    },
                                    errorCallback
                                  );
                                } else {
                                  errorCallback(t, error);
                                }
                              },
                              errorCallback
                            );
                          } else {
                            errorCallback(t, error);
                          }
                        },
                        errorCallback
                      );
                    }

                    function getItem$1(key, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                dbInfo,
                                'SELECT * FROM ' +
                                  dbInfo.storeName +
                                  ' WHERE key = ? LIMIT 1',
                                [key],
                                function (t, results) {
                                  var result = results.rows.length
                                    ? results.rows.item(0).value
                                    : null; // Check to see if this is serialized content we need to
                                  // unpack.

                                  if (result) {
                                    result =
                                      dbInfo.serializer.deserialize(result);
                                  }

                                  resolve(result);
                                },
                                function (t, error) {
                                  reject(error);
                                }
                              );
                            });
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function iterate$1(iterator, callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                dbInfo,
                                'SELECT * FROM ' + dbInfo.storeName,
                                [],
                                function (t, results) {
                                  var rows = results.rows;
                                  var length = rows.length;

                                  for (var i = 0; i < length; i++) {
                                    var item = rows.item(i);
                                    var result = item.value; // Check to see if this is serialized content
                                    // we need to unpack.

                                    if (result) {
                                      result =
                                        dbInfo.serializer.deserialize(result);
                                    }

                                    result = iterator(result, item.key, i + 1); // void(0) prevents problems with redefinition
                                    // of `undefined`.

                                    if (result !== void 0) {
                                      resolve(result);
                                      return;
                                    }
                                  }

                                  resolve();
                                },
                                function (t, error) {
                                  reject(error);
                                }
                              );
                            });
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function _setItem(key, value, callback, retriesLeft) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            // The localStorage API doesn't return undefined values in an
                            // "expected" way, so undefined is always cast to null in all
                            // drivers. See: https://github.com/mozilla/localForage/pull/42
                            if (value === undefined) {
                              value = null;
                            } // Save the original value to pass to the callback.

                            var originalValue = value;
                            var dbInfo = self._dbInfo;
                            dbInfo.serializer.serialize(
                              value,
                              function (value, error) {
                                if (error) {
                                  reject(error);
                                } else {
                                  dbInfo.db.transaction(
                                    function (t) {
                                      tryExecuteSql(
                                        t,
                                        dbInfo,
                                        'INSERT OR REPLACE INTO ' +
                                          dbInfo.storeName +
                                          ' ' +
                                          '(key, value) VALUES (?, ?)',
                                        [key, value],
                                        function () {
                                          resolve(originalValue);
                                        },
                                        function (t, error) {
                                          reject(error);
                                        }
                                      );
                                    },
                                    function (sqlError) {
                                      // The transaction failed; check
                                      // to see if it's a quota error.
                                      if (
                                        sqlError.code === sqlError.QUOTA_ERR
                                      ) {
                                        // We reject the callback outright for now, but
                                        // it's worth trying to re-run the transaction.
                                        // Even if the user accepts the prompt to use
                                        // more storage on Safari, this error will
                                        // be called.
                                        //
                                        // Try to re-run the transaction.
                                        if (retriesLeft > 0) {
                                          resolve(
                                            _setItem.apply(self, [
                                              key,
                                              originalValue,
                                              callback,
                                              retriesLeft - 1,
                                            ])
                                          );
                                          return;
                                        }

                                        reject(sqlError);
                                      }
                                    }
                                  );
                                }
                              }
                            );
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function setItem$1(key, value, callback) {
                      return _setItem.apply(this, [key, value, callback, 1]);
                    }

                    function removeItem$1(key, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                dbInfo,
                                'DELETE FROM ' +
                                  dbInfo.storeName +
                                  ' WHERE key = ?',
                                [key],
                                function () {
                                  resolve();
                                },
                                function (t, error) {
                                  reject(error);
                                }
                              );
                            });
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Deletes every item in the table.
                    // TODO: Find out if this resets the AUTO_INCREMENT number.

                    function clear$1(callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                dbInfo,
                                'DELETE FROM ' + dbInfo.storeName,
                                [],
                                function () {
                                  resolve();
                                },
                                function (t, error) {
                                  reject(error);
                                }
                              );
                            });
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Does a simple `COUNT(key)` to get the number of items stored in
                    // localForage.

                    function length$1(callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function (t) {
                              // Ahhh, SQL makes this one soooooo easy.
                              tryExecuteSql(
                                t,
                                dbInfo,
                                'SELECT COUNT(key) as c FROM ' +
                                  dbInfo.storeName,
                                [],
                                function (t, results) {
                                  var result = results.rows.item(0).c;
                                  resolve(result);
                                },
                                function (t, error) {
                                  reject(error);
                                }
                              );
                            });
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Return the key located at key index X; essentially gets the key from a
                    // `WHERE id = ?`. This is the most efficient way I can think to implement
                    // this rarely-used (in my experience) part of the API, but it can seem
                    // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
                    // the ID of each key will change every time it's updated. Perhaps a stored
                    // procedure for the `setItem()` SQL would solve this problem?
                    // TODO: Don't change ID on `setItem()`.

                    function key$1(n, callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                dbInfo,
                                'SELECT key FROM ' +
                                  dbInfo.storeName +
                                  ' WHERE id = ? LIMIT 1',
                                [n + 1],
                                function (t, results) {
                                  var result = results.rows.length
                                    ? results.rows.item(0).key
                                    : null;
                                  resolve(result);
                                },
                                function (t, error) {
                                  reject(error);
                                }
                              );
                            });
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function keys$1(callback) {
                      var self = this;
                      var promise = new Promise$1(function (resolve, reject) {
                        self
                          .ready()
                          .then(function () {
                            var dbInfo = self._dbInfo;
                            dbInfo.db.transaction(function (t) {
                              tryExecuteSql(
                                t,
                                dbInfo,
                                'SELECT key FROM ' + dbInfo.storeName,
                                [],
                                function (t, results) {
                                  var keys = [];

                                  for (
                                    var i = 0;
                                    i < results.rows.length;
                                    i++
                                  ) {
                                    keys.push(results.rows.item(i).key);
                                  }

                                  resolve(keys);
                                },
                                function (t, error) {
                                  reject(error);
                                }
                              );
                            });
                          })
                          ['catch'](reject);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // https://www.w3.org/TR/webdatabase/#databases
                    // > There is no way to enumerate or delete the databases available for an origin from this API.

                    function getAllStoreNames(db) {
                      return new Promise$1(function (resolve, reject) {
                        db.transaction(
                          function (t) {
                            t.executeSql(
                              'SELECT name FROM sqlite_master ' +
                                "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                              [],
                              function (t, results) {
                                var storeNames = [];

                                for (var i = 0; i < results.rows.length; i++) {
                                  storeNames.push(results.rows.item(i).name);
                                }

                                resolve({
                                  db: db,
                                  storeNames: storeNames,
                                });
                              },
                              function (t, error) {
                                reject(error);
                              }
                            );
                          },
                          function (sqlError) {
                            reject(sqlError);
                          }
                        );
                      });
                    }

                    function dropInstance$1(options, callback) {
                      callback = getCallback.apply(this, arguments);
                      var currentConfig = this.config();
                      options =
                        (typeof options !== 'function' && options) || {};

                      if (!options.name) {
                        options.name = options.name || currentConfig.name;
                        options.storeName =
                          options.storeName || currentConfig.storeName;
                      }

                      var self = this;
                      var promise;

                      if (!options.name) {
                        promise = Promise$1.reject('Invalid arguments');
                      } else {
                        promise = new Promise$1(function (resolve) {
                          var db;

                          if (options.name === currentConfig.name) {
                            // use the db reference of the current instance
                            db = self._dbInfo.db;
                          } else {
                            db = openDatabase(options.name, '', '', 0);
                          }

                          if (!options.storeName) {
                            // drop all database tables
                            resolve(getAllStoreNames(db));
                          } else {
                            resolve({
                              db: db,
                              storeNames: [options.storeName],
                            });
                          }
                        }).then(function (operationInfo) {
                          return new Promise$1(function (resolve, reject) {
                            operationInfo.db.transaction(
                              function (t) {
                                function dropTable(storeName) {
                                  return new Promise$1(function (
                                    resolve,
                                    reject
                                  ) {
                                    t.executeSql(
                                      'DROP TABLE IF EXISTS ' + storeName,
                                      [],
                                      function () {
                                        resolve();
                                      },
                                      function (t, error) {
                                        reject(error);
                                      }
                                    );
                                  });
                                }

                                var operations = [];

                                for (
                                  var i = 0,
                                    len = operationInfo.storeNames.length;
                                  i < len;
                                  i++
                                ) {
                                  operations.push(
                                    dropTable(operationInfo.storeNames[i])
                                  );
                                }

                                Promise$1.all(operations)
                                  .then(function () {
                                    resolve();
                                  })
                                  ['catch'](function (e) {
                                    reject(e);
                                  });
                              },
                              function (sqlError) {
                                reject(sqlError);
                              }
                            );
                          });
                        });
                      }

                      executeCallback(promise, callback);
                      return promise;
                    }

                    var webSQLStorage = {
                      _driver: 'webSQLStorage',
                      _initStorage: _initStorage$1,
                      _support: isWebSQLValid(),
                      iterate: iterate$1,
                      getItem: getItem$1,
                      setItem: setItem$1,
                      removeItem: removeItem$1,
                      clear: clear$1,
                      length: length$1,
                      key: key$1,
                      keys: keys$1,
                      dropInstance: dropInstance$1,
                    };

                    function isLocalStorageValid() {
                      try {
                        return (
                          typeof localStorage !== 'undefined' &&
                          'setItem' in localStorage && // in IE8 typeof localStorage.setItem === 'object'
                          !!localStorage.setItem
                        );
                      } catch (e) {
                        return false;
                      }
                    }

                    function _getKeyPrefix(options, defaultConfig) {
                      var keyPrefix = options.name + '/';

                      if (options.storeName !== defaultConfig.storeName) {
                        keyPrefix += options.storeName + '/';
                      }

                      return keyPrefix;
                    } // Check if localStorage throws when saving an item

                    function checkIfLocalStorageThrows() {
                      var localStorageTestKey = '_localforage_support_test';

                      try {
                        localStorage.setItem(localStorageTestKey, true);
                        localStorage.removeItem(localStorageTestKey);
                        return false;
                      } catch (e) {
                        return true;
                      }
                    } // Check if localStorage is usable and allows to save an item
                    // This method checks if localStorage is usable in Safari Private Browsing
                    // mode, or in any other case where the available quota for localStorage
                    // is 0 and there wasn't any saved items yet.

                    function _isLocalStorageUsable() {
                      return (
                        !checkIfLocalStorageThrows() || localStorage.length > 0
                      );
                    } // Config the localStorage backend, using options set in the config.

                    function _initStorage$2(options) {
                      var self = this;
                      var dbInfo = {};

                      if (options) {
                        for (var i in options) {
                          dbInfo[i] = options[i];
                        }
                      }

                      dbInfo.keyPrefix = _getKeyPrefix(
                        options,
                        self._defaultConfig
                      );

                      if (!_isLocalStorageUsable()) {
                        return Promise$1.reject();
                      }

                      self._dbInfo = dbInfo;
                      dbInfo.serializer = localforageSerializer;
                      return Promise$1.resolve();
                    } // Remove all keys from the datastore, effectively destroying all data in
                    // the app's key/value store!

                    function clear$2(callback) {
                      var self = this;
                      var promise = self.ready().then(function () {
                        var keyPrefix = self._dbInfo.keyPrefix;

                        for (var i = localStorage.length - 1; i >= 0; i--) {
                          var key = localStorage.key(i);

                          if (key.indexOf(keyPrefix) === 0) {
                            localStorage.removeItem(key);
                          }
                        }
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Retrieve an item from the store. Unlike the original async_storage
                    // library in Gaia, we don't modify return values at all. If a key's value
                    // is `undefined`, we pass that value to the callback function.

                    function getItem$2(key, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = self.ready().then(function () {
                        var dbInfo = self._dbInfo;
                        var result = localStorage.getItem(
                          dbInfo.keyPrefix + key
                        ); // If a result was found, parse it from the serialized
                        // string into a JS object. If result isn't truthy, the key
                        // is likely undefined and we'll pass it straight to the
                        // callback.

                        if (result) {
                          result = dbInfo.serializer.deserialize(result);
                        }

                        return result;
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Iterate over all items in the store.

                    function iterate$2(iterator, callback) {
                      var self = this;
                      var promise = self.ready().then(function () {
                        var dbInfo = self._dbInfo;
                        var keyPrefix = dbInfo.keyPrefix;
                        var keyPrefixLength = keyPrefix.length;
                        var length = localStorage.length; // We use a dedicated iterator instead of the `i` variable below
                        // so other keys we fetch in localStorage aren't counted in
                        // the `iterationNumber` argument passed to the `iterate()`
                        // callback.
                        //
                        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530

                        var iterationNumber = 1;

                        for (var i = 0; i < length; i++) {
                          var key = localStorage.key(i);

                          if (key.indexOf(keyPrefix) !== 0) {
                            continue;
                          }

                          var value = localStorage.getItem(key); // If a result was found, parse it from the serialized
                          // string into a JS object. If result isn't truthy, the
                          // key is likely undefined and we'll pass it straight
                          // to the iterator.

                          if (value) {
                            value = dbInfo.serializer.deserialize(value);
                          }

                          value = iterator(
                            value,
                            key.substring(keyPrefixLength),
                            iterationNumber++
                          );

                          if (value !== void 0) {
                            return value;
                          }
                        }
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Same as localStorage's key() method, except takes a callback.

                    function key$2(n, callback) {
                      var self = this;
                      var promise = self.ready().then(function () {
                        var dbInfo = self._dbInfo;
                        var result;

                        try {
                          result = localStorage.key(n);
                        } catch (error) {
                          result = null;
                        } // Remove the prefix from the key, if a key is found.

                        if (result) {
                          result = result.substring(dbInfo.keyPrefix.length);
                        }

                        return result;
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function keys$2(callback) {
                      var self = this;
                      var promise = self.ready().then(function () {
                        var dbInfo = self._dbInfo;
                        var length = localStorage.length;
                        var keys = [];

                        for (var i = 0; i < length; i++) {
                          var itemKey = localStorage.key(i);

                          if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                            keys.push(
                              itemKey.substring(dbInfo.keyPrefix.length)
                            );
                          }
                        }

                        return keys;
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Supply the number of keys in the datastore to the callback function.

                    function length$2(callback) {
                      var self = this;
                      var promise = self.keys().then(function (keys) {
                        return keys.length;
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Remove an item from the store, nice and simple.

                    function removeItem$2(key, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = self.ready().then(function () {
                        var dbInfo = self._dbInfo;
                        localStorage.removeItem(dbInfo.keyPrefix + key);
                      });
                      executeCallback(promise, callback);
                      return promise;
                    } // Set a key's value and run an optional callback once the value is set.
                    // Unlike Gaia's implementation, the callback function is passed the value,
                    // in case you want to operate on that value only after you're sure it
                    // saved, or something like that.

                    function setItem$2(key, value, callback) {
                      var self = this;
                      key = normalizeKey(key);
                      var promise = self.ready().then(function () {
                        // Convert undefined values to null.
                        // https://github.com/mozilla/localForage/pull/42
                        if (value === undefined) {
                          value = null;
                        } // Save the original value to pass to the callback.

                        var originalValue = value;
                        return new Promise$1(function (resolve, reject) {
                          var dbInfo = self._dbInfo;
                          dbInfo.serializer.serialize(
                            value,
                            function (value, error) {
                              if (error) {
                                reject(error);
                              } else {
                                try {
                                  localStorage.setItem(
                                    dbInfo.keyPrefix + key,
                                    value
                                  );
                                  resolve(originalValue);
                                } catch (e) {
                                  // localStorage capacity exceeded.
                                  // TODO: Make this a specific error/event.
                                  if (
                                    e.name === 'QuotaExceededError' ||
                                    e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
                                  ) {
                                    reject(e);
                                  }

                                  reject(e);
                                }
                              }
                            }
                          );
                        });
                      });
                      executeCallback(promise, callback);
                      return promise;
                    }

                    function dropInstance$2(options, callback) {
                      callback = getCallback.apply(this, arguments);
                      options =
                        (typeof options !== 'function' && options) || {};

                      if (!options.name) {
                        var currentConfig = this.config();
                        options.name = options.name || currentConfig.name;
                        options.storeName =
                          options.storeName || currentConfig.storeName;
                      }

                      var self = this;
                      var promise;

                      if (!options.name) {
                        promise = Promise$1.reject('Invalid arguments');
                      } else {
                        promise = new Promise$1(function (resolve) {
                          if (!options.storeName) {
                            resolve(options.name + '/');
                          } else {
                            resolve(
                              _getKeyPrefix(options, self._defaultConfig)
                            );
                          }
                        }).then(function (keyPrefix) {
                          for (var i = localStorage.length - 1; i >= 0; i--) {
                            var key = localStorage.key(i);

                            if (key.indexOf(keyPrefix) === 0) {
                              localStorage.removeItem(key);
                            }
                          }
                        });
                      }

                      executeCallback(promise, callback);
                      return promise;
                    }

                    var localStorageWrapper = {
                      _driver: 'localStorageWrapper',
                      _initStorage: _initStorage$2,
                      _support: isLocalStorageValid(),
                      iterate: iterate$2,
                      getItem: getItem$2,
                      setItem: setItem$2,
                      removeItem: removeItem$2,
                      clear: clear$2,
                      length: length$2,
                      key: key$2,
                      keys: keys$2,
                      dropInstance: dropInstance$2,
                    };

                    var sameValue = function sameValue(x, y) {
                      return (
                        x === y ||
                        (typeof x === 'number' &&
                          typeof y === 'number' &&
                          isNaN(x) &&
                          isNaN(y))
                      );
                    };

                    var includes = function includes(array, searchElement) {
                      var len = array.length;
                      var i = 0;

                      while (i < len) {
                        if (sameValue(array[i], searchElement)) {
                          return true;
                        }

                        i++;
                      }

                      return false;
                    };

                    var isArray =
                      Array.isArray ||
                      function (arg) {
                        return (
                          Object.prototype.toString.call(arg) ===
                          '[object Array]'
                        );
                      }; // Drivers are stored here when `defineDriver()` is called.
                    // They are shared across all instances of localForage.

                    var DefinedDrivers = {};
                    var DriverSupport = {};
                    var DefaultDrivers = {
                      INDEXEDDB: asyncStorage,
                      WEBSQL: webSQLStorage,
                      LOCALSTORAGE: localStorageWrapper,
                    };
                    var DefaultDriverOrder = [
                      DefaultDrivers.INDEXEDDB._driver,
                      DefaultDrivers.WEBSQL._driver,
                      DefaultDrivers.LOCALSTORAGE._driver,
                    ];
                    var OptionalDriverMethods = ['dropInstance'];
                    var LibraryMethods = [
                      'clear',
                      'getItem',
                      'iterate',
                      'key',
                      'keys',
                      'length',
                      'removeItem',
                      'setItem',
                    ].concat(OptionalDriverMethods);
                    var DefaultConfig = {
                      description: '',
                      driver: DefaultDriverOrder.slice(),
                      name: 'localforage',
                      // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
                      // we can use without a prompt.
                      size: 4980736,
                      storeName: 'keyvaluepairs',
                      version: 1.0,
                    };

                    function callWhenReady(localForageInstance, libraryMethod) {
                      localForageInstance[libraryMethod] = function () {
                        var _args = arguments;
                        return localForageInstance.ready().then(function () {
                          return localForageInstance[libraryMethod].apply(
                            localForageInstance,
                            _args
                          );
                        });
                      };
                    }

                    function extend() {
                      for (var i = 1; i < arguments.length; i++) {
                        var arg = arguments[i];

                        if (arg) {
                          for (var _key in arg) {
                            if (arg.hasOwnProperty(_key)) {
                              if (isArray(arg[_key])) {
                                arguments[0][_key] = arg[_key].slice();
                              } else {
                                arguments[0][_key] = arg[_key];
                              }
                            }
                          }
                        }
                      }

                      return arguments[0];
                    }

                    var LocalForage = (function () {
                      function LocalForage(options) {
                        _classCallCheck(this, LocalForage);

                        for (var driverTypeKey in DefaultDrivers) {
                          if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                            var driver = DefaultDrivers[driverTypeKey];
                            var driverName = driver._driver;
                            this[driverTypeKey] = driverName;

                            if (!DefinedDrivers[driverName]) {
                              // we don't need to wait for the promise,
                              // since the default drivers can be defined
                              // in a blocking manner
                              this.defineDriver(driver);
                            }
                          }
                        }

                        this._defaultConfig = extend({}, DefaultConfig);
                        this._config = extend({}, this._defaultConfig, options);
                        this._driverSet = null;
                        this._initDriver = null;
                        this._ready = false;
                        this._dbInfo = null;

                        this._wrapLibraryMethodsWithReady();

                        this.setDriver(this._config.driver)['catch'](
                          function () {}
                        );
                      } // Set any config values for localForage; can be called anytime before
                      // the first API call (e.g. `getItem`, `setItem`).
                      // We loop through options so we don't overwrite existing config
                      // values.

                      LocalForage.prototype.config = function config(options) {
                        // If the options argument is an object, we use it to set values.
                        // Otherwise, we return either a specified config value or all
                        // config values.
                        if (
                          (typeof options === 'undefined'
                            ? 'undefined'
                            : _typeof(options)) === 'object'
                        ) {
                          // If localforage is ready and fully initialized, we can't set
                          // any new configuration values. Instead, we return an error.
                          if (this._ready) {
                            return new Error(
                              "Can't call config() after localforage " +
                                'has been used.'
                            );
                          }

                          for (var i in options) {
                            if (i === 'storeName') {
                              options[i] = options[i].replace(/\W/g, '_');
                            }

                            if (
                              i === 'version' &&
                              typeof options[i] !== 'number'
                            ) {
                              return new Error(
                                'Database version must be a number.'
                              );
                            }

                            this._config[i] = options[i];
                          } // after all config options are set and
                          // the driver option is used, try setting it

                          if ('driver' in options && options.driver) {
                            return this.setDriver(this._config.driver);
                          }

                          return true;
                        } else if (typeof options === 'string') {
                          return this._config[options];
                        } else {
                          return this._config;
                        }
                      }; // Used to define a custom driver, shared across all instances of
                      // localForage.

                      LocalForage.prototype.defineDriver =
                        function defineDriver(
                          driverObject,
                          callback,
                          errorCallback
                        ) {
                          var promise = new Promise$1(function (
                            resolve,
                            reject
                          ) {
                            try {
                              var driverName = driverObject._driver;
                              var complianceError = new Error(
                                'Custom driver not compliant; see ' +
                                  'https://mozilla.github.io/localForage/#definedriver'
                              ); // A driver name should be defined and not overlap with the
                              // library-defined, default drivers.

                              if (!driverObject._driver) {
                                reject(complianceError);
                                return;
                              }

                              var driverMethods =
                                LibraryMethods.concat('_initStorage');

                              for (
                                var i = 0, len = driverMethods.length;
                                i < len;
                                i++
                              ) {
                                var driverMethodName = driverMethods[i]; // when the property is there,
                                // it should be a method even when optional

                                var isRequired = !includes(
                                  OptionalDriverMethods,
                                  driverMethodName
                                );

                                if (
                                  (isRequired ||
                                    driverObject[driverMethodName]) &&
                                  typeof driverObject[driverMethodName] !==
                                    'function'
                                ) {
                                  reject(complianceError);
                                  return;
                                }
                              }

                              var configureMissingMethods =
                                function configureMissingMethods() {
                                  var methodNotImplementedFactory =
                                    function methodNotImplementedFactory(
                                      methodName
                                    ) {
                                      return function () {
                                        var error = new Error(
                                          'Method ' +
                                            methodName +
                                            ' is not implemented by the current driver'
                                        );
                                        var promise = Promise$1.reject(error);
                                        executeCallback(
                                          promise,
                                          arguments[arguments.length - 1]
                                        );
                                        return promise;
                                      };
                                    };

                                  for (
                                    var _i = 0,
                                      _len = OptionalDriverMethods.length;
                                    _i < _len;
                                    _i++
                                  ) {
                                    var optionalDriverMethod =
                                      OptionalDriverMethods[_i];

                                    if (!driverObject[optionalDriverMethod]) {
                                      driverObject[optionalDriverMethod] =
                                        methodNotImplementedFactory(
                                          optionalDriverMethod
                                        );
                                    }
                                  }
                                };

                              configureMissingMethods();

                              var setDriverSupport = function setDriverSupport(
                                support
                              ) {
                                if (DefinedDrivers[driverName]) {
                                  console.info(
                                    'Redefining LocalForage driver: ' +
                                      driverName
                                  );
                                }

                                DefinedDrivers[driverName] = driverObject;
                                DriverSupport[driverName] = support; // don't use a then, so that we can define
                                // drivers that have simple _support methods
                                // in a blocking manner

                                resolve();
                              };

                              if ('_support' in driverObject) {
                                if (
                                  driverObject._support &&
                                  typeof driverObject._support === 'function'
                                ) {
                                  driverObject
                                    ._support()
                                    .then(setDriverSupport, reject);
                                } else {
                                  setDriverSupport(!!driverObject._support);
                                }
                              } else {
                                setDriverSupport(true);
                              }
                            } catch (e) {
                              reject(e);
                            }
                          });
                          executeTwoCallbacks(promise, callback, errorCallback);
                          return promise;
                        };

                      LocalForage.prototype.driver = function driver() {
                        return this._driver || null;
                      };

                      LocalForage.prototype.getDriver = function getDriver(
                        driverName,
                        callback,
                        errorCallback
                      ) {
                        var getDriverPromise = DefinedDrivers[driverName]
                          ? Promise$1.resolve(DefinedDrivers[driverName])
                          : Promise$1.reject(new Error('Driver not found.'));
                        executeTwoCallbacks(
                          getDriverPromise,
                          callback,
                          errorCallback
                        );
                        return getDriverPromise;
                      };

                      LocalForage.prototype.getSerializer =
                        function getSerializer(callback) {
                          var serializerPromise = Promise$1.resolve(
                            localforageSerializer
                          );
                          executeTwoCallbacks(serializerPromise, callback);
                          return serializerPromise;
                        };

                      LocalForage.prototype.ready = function ready(callback) {
                        var self = this;

                        var promise = self._driverSet.then(function () {
                          if (self._ready === null) {
                            self._ready = self._initDriver();
                          }

                          return self._ready;
                        });

                        executeTwoCallbacks(promise, callback, callback);
                        return promise;
                      };

                      LocalForage.prototype.setDriver = function setDriver(
                        drivers,
                        callback,
                        errorCallback
                      ) {
                        var self = this;

                        if (!isArray(drivers)) {
                          drivers = [drivers];
                        }

                        var supportedDrivers =
                          this._getSupportedDrivers(drivers);

                        function setDriverToConfig() {
                          self._config.driver = self.driver();
                        }

                        function extendSelfWithDriver(driver) {
                          self._extend(driver);

                          setDriverToConfig();
                          self._ready = self._initStorage(self._config);
                          return self._ready;
                        }

                        function initDriver(supportedDrivers) {
                          return function () {
                            var currentDriverIndex = 0;

                            function driverPromiseLoop() {
                              while (
                                currentDriverIndex < supportedDrivers.length
                              ) {
                                var driverName =
                                  supportedDrivers[currentDriverIndex];
                                currentDriverIndex++;
                                self._dbInfo = null;
                                self._ready = null;
                                return self
                                  .getDriver(driverName)
                                  .then(extendSelfWithDriver)
                                  ['catch'](driverPromiseLoop);
                              }

                              setDriverToConfig();
                              var error = new Error(
                                'No available storage method found.'
                              );
                              self._driverSet = Promise$1.reject(error);
                              return self._driverSet;
                            }

                            return driverPromiseLoop();
                          };
                        } // There might be a driver initialization in progress
                        // so wait for it to finish in order to avoid a possible
                        // race condition to set _dbInfo

                        var oldDriverSetDone =
                          this._driverSet !== null
                            ? this._driverSet['catch'](function () {
                                return Promise$1.resolve();
                              })
                            : Promise$1.resolve();
                        this._driverSet = oldDriverSetDone
                          .then(function () {
                            var driverName = supportedDrivers[0];
                            self._dbInfo = null;
                            self._ready = null;
                            return self
                              .getDriver(driverName)
                              .then(function (driver) {
                                self._driver = driver._driver;
                                setDriverToConfig();

                                self._wrapLibraryMethodsWithReady();

                                self._initDriver = initDriver(supportedDrivers);
                              });
                          })
                          ['catch'](function () {
                            setDriverToConfig();
                            var error = new Error(
                              'No available storage method found.'
                            );
                            self._driverSet = Promise$1.reject(error);
                            return self._driverSet;
                          });
                        executeTwoCallbacks(
                          this._driverSet,
                          callback,
                          errorCallback
                        );
                        return this._driverSet;
                      };

                      LocalForage.prototype.supports = function supports(
                        driverName
                      ) {
                        return !!DriverSupport[driverName];
                      };

                      LocalForage.prototype._extend = function _extend(
                        libraryMethodsAndProperties
                      ) {
                        extend(this, libraryMethodsAndProperties);
                      };

                      LocalForage.prototype._getSupportedDrivers =
                        function _getSupportedDrivers(drivers) {
                          var supportedDrivers = [];

                          for (var i = 0, len = drivers.length; i < len; i++) {
                            var driverName = drivers[i];

                            if (this.supports(driverName)) {
                              supportedDrivers.push(driverName);
                            }
                          }

                          return supportedDrivers;
                        };

                      LocalForage.prototype._wrapLibraryMethodsWithReady =
                        function _wrapLibraryMethodsWithReady() {
                          // Add a stub for each driver API method that delays the call to the
                          // corresponding driver method until localForage is ready. These stubs
                          // will be replaced by the driver methods as soon as the driver is
                          // loaded, so there is no performance impact.
                          for (
                            var i = 0, len = LibraryMethods.length;
                            i < len;
                            i++
                          ) {
                            callWhenReady(this, LibraryMethods[i]);
                          }
                        };

                      LocalForage.prototype.createInstance =
                        function createInstance(options) {
                          return new LocalForage(options);
                        };

                      return LocalForage;
                    })(); // The actual localForage object that we expose as a module or via a
                    // global. It's extended by pulling in one of our other libraries.

                    var localforage_js = new LocalForage();
                    module.exports = localforage_js;
                  },
                  {
                    3: 3,
                  },
                ],
              },
              {},
              [4]
            )(4);
          });

          /***/
        },

      /***/ './node_modules/lodash.isempty/index.js':
        /*!**********************************************!*\
  !*** ./node_modules/lodash.isempty/index.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function (module) {
            /**
             * lodash (Custom Build) <https://lodash.com/>
             * Build: `lodash modularize exports="npm" -o ./`
             * Copyright jQuery Foundation and other contributors <https://jquery.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */

            /** Used as references for various `Number` constants. */
            var MAX_SAFE_INTEGER = 9007199254740991;
            /** `Object#toString` result references. */

            var argsTag = '[object Arguments]',
              funcTag = '[object Function]',
              genTag = '[object GeneratorFunction]',
              mapTag = '[object Map]',
              objectTag = '[object Object]',
              promiseTag = '[object Promise]',
              setTag = '[object Set]',
              weakMapTag = '[object WeakMap]';
            var dataViewTag = '[object DataView]';
            /**
             * Used to match `RegExp`
             * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
             */

            var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
            /** Used to detect host constructors (Safari). */

            var reIsHostCtor = /^\[object .+?Constructor\]$/;
            /** Detect free variable `global` from Node.js. */

            var freeGlobal =
              typeof global == 'object' &&
              global &&
              global.Object === Object &&
              global;
            /** Detect free variable `self`. */

            var freeSelf =
              typeof self == 'object' && self && self.Object === Object && self;
            /** Used as a reference to the global object. */

            var root = freeGlobal || freeSelf || Function('return this')();
            /** Detect free variable `exports`. */

            var freeExports = true && exports && !exports.nodeType && exports;
            /** Detect free variable `module`. */

            var freeModule =
              freeExports &&
              typeof module == 'object' &&
              module &&
              !module.nodeType &&
              module;
            /** Detect the popular CommonJS extension `module.exports`. */

            var moduleExports =
              freeModule && freeModule.exports === freeExports;
            /**
             * Gets the value at `key` of `object`.
             *
             * @private
             * @param {Object} [object] The object to query.
             * @param {string} key The key of the property to get.
             * @returns {*} Returns the property value.
             */

            function getValue(object, key) {
              return object == null ? undefined : object[key];
            }
            /**
             * Checks if `value` is a host object in IE < 9.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
             */

            function isHostObject(value) {
              // Many host objects are `Object` objects that can coerce to strings
              // despite having improperly defined `toString` methods.
              var result = false;

              if (value != null && typeof value.toString != 'function') {
                try {
                  result = !!(value + '');
                } catch (e) {}
              }

              return result;
            }
            /**
             * Creates a unary function that invokes `func` with its argument transformed.
             *
             * @private
             * @param {Function} func The function to wrap.
             * @param {Function} transform The argument transform.
             * @returns {Function} Returns the new function.
             */

            function overArg(func, transform) {
              return function (arg) {
                return func(transform(arg));
              };
            }
            /** Used for built-in method references. */

            var funcProto = Function.prototype,
              objectProto = Object.prototype;
            /** Used to detect overreaching core-js shims. */

            var coreJsData = root['__core-js_shared__'];
            /** Used to detect methods masquerading as native. */

            var maskSrcKey = (function () {
              var uid = /[^.]+$/.exec(
                (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) ||
                  ''
              );
              return uid ? 'Symbol(src)_1.' + uid : '';
            })();
            /** Used to resolve the decompiled source of functions. */

            var funcToString = funcProto.toString;
            /** Used to check objects for own properties. */

            var hasOwnProperty = objectProto.hasOwnProperty;
            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */

            var objectToString = objectProto.toString;
            /** Used to detect if a method is native. */

            var reIsNative = RegExp(
              '^' +
                funcToString
                  .call(hasOwnProperty)
                  .replace(reRegExpChar, '\\$&')
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?'
                  ) +
                '$'
            );
            /** Built-in value references. */

            var Buffer = moduleExports ? root.Buffer : undefined,
              propertyIsEnumerable = objectProto.propertyIsEnumerable;
            /* Built-in method references for those with the same name as other `lodash` methods. */

            var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
              nativeKeys = overArg(Object.keys, Object);
            /* Built-in method references that are verified to be native. */

            var DataView = getNative(root, 'DataView'),
              Map = getNative(root, 'Map'),
              Promise = getNative(root, 'Promise'),
              Set = getNative(root, 'Set'),
              WeakMap = getNative(root, 'WeakMap');
            /** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */

            var nonEnumShadows = !propertyIsEnumerable.call(
              {
                valueOf: 1,
              },
              'valueOf'
            );
            /** Used to detect maps, sets, and weakmaps. */

            var dataViewCtorString = toSource(DataView),
              mapCtorString = toSource(Map),
              promiseCtorString = toSource(Promise),
              setCtorString = toSource(Set),
              weakMapCtorString = toSource(WeakMap);
            /**
             * The base implementation of `getTag`.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */

            function baseGetTag(value) {
              return objectToString.call(value);
            }
            /**
             * The base implementation of `_.isNative` without bad shim checks.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a native function,
             *  else `false`.
             */

            function baseIsNative(value) {
              if (!isObject(value) || isMasked(value)) {
                return false;
              }

              var pattern =
                isFunction(value) || isHostObject(value)
                  ? reIsNative
                  : reIsHostCtor;
              return pattern.test(toSource(value));
            }
            /**
             * Gets the native function at `key` of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {string} key The key of the method to get.
             * @returns {*} Returns the function if it's native, else `undefined`.
             */

            function getNative(object, key) {
              var value = getValue(object, key);
              return baseIsNative(value) ? value : undefined;
            }
            /**
             * Gets the `toStringTag` of `value`.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */

            var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11,
            // for data views in Edge < 14, and promises in Node.js.

            if (
              (DataView &&
                getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
              (Map && getTag(new Map()) != mapTag) ||
              (Promise && getTag(Promise.resolve()) != promiseTag) ||
              (Set && getTag(new Set()) != setTag) ||
              (WeakMap && getTag(new WeakMap()) != weakMapTag)
            ) {
              getTag = function (value) {
                var result = objectToString.call(value),
                  Ctor = result == objectTag ? value.constructor : undefined,
                  ctorString = Ctor ? toSource(Ctor) : undefined;

                if (ctorString) {
                  switch (ctorString) {
                    case dataViewCtorString:
                      return dataViewTag;

                    case mapCtorString:
                      return mapTag;

                    case promiseCtorString:
                      return promiseTag;

                    case setCtorString:
                      return setTag;

                    case weakMapCtorString:
                      return weakMapTag;
                  }
                }

                return result;
              };
            }
            /**
             * Checks if `func` has its source masked.
             *
             * @private
             * @param {Function} func The function to check.
             * @returns {boolean} Returns `true` if `func` is masked, else `false`.
             */

            function isMasked(func) {
              return !!maskSrcKey && maskSrcKey in func;
            }
            /**
             * Checks if `value` is likely a prototype object.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
             */

            function isPrototype(value) {
              var Ctor = value && value.constructor,
                proto =
                  (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
              return value === proto;
            }
            /**
             * Converts `func` to its source code.
             *
             * @private
             * @param {Function} func The function to process.
             * @returns {string} Returns the source code.
             */

            function toSource(func) {
              if (func != null) {
                try {
                  return funcToString.call(func);
                } catch (e) {}

                try {
                  return func + '';
                } catch (e) {}
              }

              return '';
            }
            /**
             * Checks if `value` is likely an `arguments` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an `arguments` object,
             *  else `false`.
             * @example
             *
             * _.isArguments(function() { return arguments; }());
             * // => true
             *
             * _.isArguments([1, 2, 3]);
             * // => false
             */

            function isArguments(value) {
              // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
              return (
                isArrayLikeObject(value) &&
                hasOwnProperty.call(value, 'callee') &&
                (!propertyIsEnumerable.call(value, 'callee') ||
                  objectToString.call(value) == argsTag)
              );
            }
            /**
             * Checks if `value` is classified as an `Array` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array, else `false`.
             * @example
             *
             * _.isArray([1, 2, 3]);
             * // => true
             *
             * _.isArray(document.body.children);
             * // => false
             *
             * _.isArray('abc');
             * // => false
             *
             * _.isArray(_.noop);
             * // => false
             */

            var isArray = Array.isArray;
            /**
             * Checks if `value` is array-like. A value is considered array-like if it's
             * not a function and has a `value.length` that's an integer greater than or
             * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
             * @example
             *
             * _.isArrayLike([1, 2, 3]);
             * // => true
             *
             * _.isArrayLike(document.body.children);
             * // => true
             *
             * _.isArrayLike('abc');
             * // => true
             *
             * _.isArrayLike(_.noop);
             * // => false
             */

            function isArrayLike(value) {
              return (
                value != null && isLength(value.length) && !isFunction(value)
              );
            }
            /**
             * This method is like `_.isArrayLike` except that it also checks if `value`
             * is an object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array-like object,
             *  else `false`.
             * @example
             *
             * _.isArrayLikeObject([1, 2, 3]);
             * // => true
             *
             * _.isArrayLikeObject(document.body.children);
             * // => true
             *
             * _.isArrayLikeObject('abc');
             * // => false
             *
             * _.isArrayLikeObject(_.noop);
             * // => false
             */

            function isArrayLikeObject(value) {
              return isObjectLike(value) && isArrayLike(value);
            }
            /**
             * Checks if `value` is a buffer.
             *
             * @static
             * @memberOf _
             * @since 4.3.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
             * @example
             *
             * _.isBuffer(new Buffer(2));
             * // => true
             *
             * _.isBuffer(new Uint8Array(2));
             * // => false
             */

            var isBuffer = nativeIsBuffer || stubFalse;
            /**
             * Checks if `value` is an empty object, collection, map, or set.
             *
             * Objects are considered empty if they have no own enumerable string keyed
             * properties.
             *
             * Array-like values such as `arguments` objects, arrays, buffers, strings, or
             * jQuery-like collections are considered empty if they have a `length` of `0`.
             * Similarly, maps and sets are considered empty if they have a `size` of `0`.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is empty, else `false`.
             * @example
             *
             * _.isEmpty(null);
             * // => true
             *
             * _.isEmpty(true);
             * // => true
             *
             * _.isEmpty(1);
             * // => true
             *
             * _.isEmpty([1, 2, 3]);
             * // => false
             *
             * _.isEmpty({ 'a': 1 });
             * // => false
             */

            function isEmpty(value) {
              if (
                isArrayLike(value) &&
                (isArray(value) ||
                  typeof value == 'string' ||
                  typeof value.splice == 'function' ||
                  isBuffer(value) ||
                  isArguments(value))
              ) {
                return !value.length;
              }

              var tag = getTag(value);

              if (tag == mapTag || tag == setTag) {
                return !value.size;
              }

              if (nonEnumShadows || isPrototype(value)) {
                return !nativeKeys(value).length;
              }

              for (var key in value) {
                if (hasOwnProperty.call(value, key)) {
                  return false;
                }
              }

              return true;
            }
            /**
             * Checks if `value` is classified as a `Function` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a function, else `false`.
             * @example
             *
             * _.isFunction(_);
             * // => true
             *
             * _.isFunction(/abc/);
             * // => false
             */

            function isFunction(value) {
              // The use of `Object#toString` avoids issues with the `typeof` operator
              // in Safari 8-9 which returns 'object' for typed array and other constructors.
              var tag = isObject(value) ? objectToString.call(value) : '';
              return tag == funcTag || tag == genTag;
            }
            /**
             * Checks if `value` is a valid array-like length.
             *
             * **Note:** This method is loosely based on
             * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
             * @example
             *
             * _.isLength(3);
             * // => true
             *
             * _.isLength(Number.MIN_VALUE);
             * // => false
             *
             * _.isLength(Infinity);
             * // => false
             *
             * _.isLength('3');
             * // => false
             */

            function isLength(value) {
              return (
                typeof value == 'number' &&
                value > -1 &&
                value % 1 == 0 &&
                value <= MAX_SAFE_INTEGER
              );
            }
            /**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */

            function isObject(value) {
              var type = typeof value;
              return !!value && (type == 'object' || type == 'function');
            }
            /**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */

            function isObjectLike(value) {
              return !!value && typeof value == 'object';
            }
            /**
             * This method returns `false`.
             *
             * @static
             * @memberOf _
             * @since 4.13.0
             * @category Util
             * @returns {boolean} Returns `false`.
             * @example
             *
             * _.times(2, _.stubFalse);
             * // => [false, false]
             */

            function stubFalse() {
              return false;
            }

            module.exports = isEmpty;
            /* WEBPACK VAR INJECTION */
          }).call(
            this,
            __webpack_require__(
              /*! ./../webpack/buildin/module.js */ './node_modules/webpack/buildin/module.js'
            )(module)
          );

          /***/
        },

      /***/ './node_modules/lodash.isfunction/index.js':
        /*!*************************************************!*\
  !*** ./node_modules/lodash.isfunction/index.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          /**
           * Lodash (Custom Build) <https://lodash.com/>
           * Build: `lodash modularize exports="npm" -o ./`
           * Copyright JS Foundation and other contributors <https://js.foundation/>
           * Released under MIT license <https://lodash.com/license>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           */

          /** `Object#toString` result references. */
          var asyncTag = '[object AsyncFunction]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            nullTag = '[object Null]',
            proxyTag = '[object Proxy]',
            undefinedTag = '[object Undefined]';
          /** Detect free variable `global` from Node.js. */

          var freeGlobal =
            typeof global == 'object' &&
            global &&
            global.Object === Object &&
            global;
          /** Detect free variable `self`. */

          var freeSelf =
            typeof self == 'object' && self && self.Object === Object && self;
          /** Used as a reference to the global object. */

          var root = freeGlobal || freeSelf || Function('return this')();
          /** Used for built-in method references. */

          var objectProto = Object.prototype;
          /** Used to check objects for own properties. */

          var hasOwnProperty = objectProto.hasOwnProperty;
          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */

          var nativeObjectToString = objectProto.toString;
          /** Built-in value references. */

          var Symbol = root.Symbol,
            symToStringTag = Symbol ? Symbol.toStringTag : undefined;
          /**
           * The base implementation of `getTag` without fallbacks for buggy environments.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */

          function baseGetTag(value) {
            if (value == null) {
              return value === undefined ? undefinedTag : nullTag;
            }

            return symToStringTag && symToStringTag in Object(value)
              ? getRawTag(value)
              : objectToString(value);
          }
          /**
           * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the raw `toStringTag`.
           */

          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];

            try {
              value[symToStringTag] = undefined;
              var unmasked = true;
            } catch (e) {}

            var result = nativeObjectToString.call(value);

            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }

            return result;
          }
          /**
           * Converts `value` to a string using `Object.prototype.toString`.
           *
           * @private
           * @param {*} value The value to convert.
           * @returns {string} Returns the converted string.
           */

          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */

          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            } // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.

            var tag = baseGetTag(value);
            return (
              tag == funcTag ||
              tag == genTag ||
              tag == asyncTag ||
              tag == proxyTag
            );
          }
          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */

          function isObject(value) {
            var type = typeof value;
            return value != null && (type == 'object' || type == 'function');
          }

          module.exports = isFunction;

          /***/
        },

      /***/ './node_modules/lodash.isobject/index.js':
        /*!***********************************************!*\
  !*** ./node_modules/lodash.isobject/index.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          /**
           * lodash 3.0.2 (Custom Build) <https://lodash.com/>
           * Build: `lodash modern modularize exports="npm" -o ./`
           * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           * Available under MIT license <https://lodash.com/license>
           */

          /**
           * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
           * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(1);
           * // => false
           */
          function isObject(value) {
            // Avoid a V8 JIT bug in Chrome 19-20.
            // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
            var type = typeof value;
            return !!value && (type == 'object' || type == 'function');
          }

          module.exports = isObject;

          /***/
        },

      /***/ './node_modules/node-fetch/browser.js':
        /*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          'use strict';
          // ref: https://github.com/tc39/proposal-global

          var getGlobal = function () {
            // the only reliable means to get the global object is
            // `Function('return this')()`
            // However, this causes CSP violations in Chrome apps.
            if (typeof self !== 'undefined') {
              return self;
            }

            if (typeof window !== 'undefined') {
              return window;
            }

            if (typeof global !== 'undefined') {
              return global;
            }

            throw new Error('unable to locate global object');
          };

          var global = getGlobal();
          module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

          if (global.fetch) {
            exports.default = global.fetch.bind(global);
          }

          exports.Headers = global.Headers;
          exports.Request = global.Request;
          exports.Response = global.Response;

          /***/
        },

      /***/ './node_modules/regenerator-runtime/runtime.js':
        /*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          /**
           * Copyright (c) 2014-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
          var runtime = (function (exports) {
            'use strict';

            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var undefined; // More compressible than void 0.

            var $Symbol = typeof Symbol === 'function' ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || '@@iterator';
            var asyncIteratorSymbol =
              $Symbol.asyncIterator || '@@asyncIterator';
            var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

            function define(obj, key, value) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
              return obj[key];
            }

            try {
              // IE 8 has a broken Object.defineProperty that only works on DOM objects.
              define({}, '');
            } catch (err) {
              define = function (obj, key, value) {
                return (obj[key] = value);
              };
            }

            function wrap(innerFn, outerFn, self, tryLocsList) {
              // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
              var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator;
              var generator = Object.create(protoGenerator.prototype);
              var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
              // .throw, and .return methods.

              generator._invoke = makeInvokeMethod(innerFn, self, context);
              return generator;
            }

            exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
            // record like context.tryEntries[i].completion. This interface could
            // have been (and was previously) designed to take a closure to be
            // invoked without arguments, but in all the cases we care about we
            // already have an existing method we want to call, so there's no need
            // to create a new function object. We can even get away with assuming
            // the method takes exactly one argument, since that happens to be true
            // in every case, so we don't have to touch the arguments object. The
            // only additional allocation required is the completion record, which
            // has a stable shape and so hopefully should be cheap to allocate.

            function tryCatch(fn, obj, arg) {
              try {
                return {
                  type: 'normal',
                  arg: fn.call(obj, arg),
                };
              } catch (err) {
                return {
                  type: 'throw',
                  arg: err,
                };
              }
            }

            var GenStateSuspendedStart = 'suspendedStart';
            var GenStateSuspendedYield = 'suspendedYield';
            var GenStateExecuting = 'executing';
            var GenStateCompleted = 'completed'; // Returning this object from the innerFn has the same effect as
            // breaking out of the dispatch switch statement.

            var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.

            function Generator() {}

            function GeneratorFunction() {}

            function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
            // don't natively support it.

            var IteratorPrototype = {};
            define(IteratorPrototype, iteratorSymbol, function () {
              return this;
            });
            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));

            if (
              NativeIteratorPrototype &&
              NativeIteratorPrototype !== Op &&
              hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
            ) {
              // This environment has a native %IteratorPrototype%; use it instead
              // of the polyfill.
              IteratorPrototype = NativeIteratorPrototype;
            }

            var Gp =
              (GeneratorFunctionPrototype.prototype =
              Generator.prototype =
                Object.create(IteratorPrototype));
            GeneratorFunction.prototype = GeneratorFunctionPrototype;
            define(Gp, 'constructor', GeneratorFunctionPrototype);
            define(
              GeneratorFunctionPrototype,
              'constructor',
              GeneratorFunction
            );
            GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              'GeneratorFunction'
            ); // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.

            function defineIteratorMethods(prototype) {
              ['next', 'throw', 'return'].forEach(function (method) {
                define(prototype, method, function (arg) {
                  return this._invoke(method, arg);
                });
              });
            }

            exports.isGeneratorFunction = function (genFun) {
              var ctor = typeof genFun === 'function' && genFun.constructor;
              return ctor
                ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    (ctor.displayName || ctor.name) === 'GeneratorFunction'
                : false;
            };

            exports.mark = function (genFun) {
              if (Object.setPrototypeOf) {
                Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
              } else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                define(genFun, toStringTagSymbol, 'GeneratorFunction');
              }

              genFun.prototype = Object.create(Gp);
              return genFun;
            }; // Within the body of any async function, `await x` is transformed to
            // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
            // `hasOwn.call(value, "__await")` to determine if the yielded value is
            // meant to be awaited.

            exports.awrap = function (arg) {
              return {
                __await: arg,
              };
            };

            function AsyncIterator(generator, PromiseImpl) {
              function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);

                if (record.type === 'throw') {
                  reject(record.arg);
                } else {
                  var result = record.arg;
                  var value = result.value;

                  if (
                    value &&
                    typeof value === 'object' &&
                    hasOwn.call(value, '__await')
                  ) {
                    return PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      }
                    );
                  }

                  return PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      // When a yielded Promise is resolved, its final value becomes
                      // the .value of the Promise<{value,done}> result for the
                      // current iteration.
                      result.value = unwrapped;
                      resolve(result);
                    },
                    function (error) {
                      // If a rejected Promise was yielded, throw the rejection back
                      // into the async generator function so it can be handled there.
                      return invoke('throw', error, resolve, reject);
                    }
                  );
                }
              }

              var previousPromise;

              function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }

                return (previousPromise = // If enqueue has been called before, then we want to wait until
                  // all previous Promises have been resolved before calling invoke,
                  // so that results are always delivered in the correct order. If
                  // enqueue has not been called before, then it is important to
                  // call invoke immediately, without waiting on a callback to fire,
                  // so that the async generator function has the opportunity to do
                  // any necessary setup in a predictable way. This predictability
                  // is why the Promise constructor synchronously invokes its
                  // executor callback, and why async functions synchronously
                  // execute code before the first await. Since we implement simple
                  // async functions in terms of async generators, it is especially
                  // important to get this right, even though it requires care.
                  previousPromise
                    ? previousPromise.then(
                        callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                        // invocations of the iterator.
                        callInvokeWithMethodAndArg
                      )
                    : callInvokeWithMethodAndArg());
              } // Define the unified helper method that is used to implement .next,
              // .throw, and .return (see defineIteratorMethods).

              this._invoke = enqueue;
            }

            defineIteratorMethods(AsyncIterator.prototype);
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            });
            exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.

            exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl
            ) {
              if (PromiseImpl === void 0) PromiseImpl = Promise;
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter // If outerFn is a generator, return the full iterator.
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            };

            function makeInvokeMethod(innerFn, self, context) {
              var state = GenStateSuspendedStart;
              return function invoke(method, arg) {
                if (state === GenStateExecuting) {
                  throw new Error('Generator is already running');
                }

                if (state === GenStateCompleted) {
                  if (method === 'throw') {
                    throw arg;
                  } // Be forgiving, per 25.3.3.3.3 of the spec:
                  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume

                  return doneResult();
                }

                context.method = method;
                context.arg = arg;

                while (true) {
                  var delegate = context.delegate;

                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);

                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel) continue;
                      return delegateResult;
                    }
                  }

                  if (context.method === 'next') {
                    // Setting context._sent for legacy support of Babel's
                    // function.sent implementation.
                    context.sent = context._sent = context.arg;
                  } else if (context.method === 'throw') {
                    if (state === GenStateSuspendedStart) {
                      state = GenStateCompleted;
                      throw context.arg;
                    }

                    context.dispatchException(context.arg);
                  } else if (context.method === 'return') {
                    context.abrupt('return', context.arg);
                  }

                  state = GenStateExecuting;
                  var record = tryCatch(innerFn, self, context);

                  if (record.type === 'normal') {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done
                      ? GenStateCompleted
                      : GenStateSuspendedYield;

                    if (record.arg === ContinueSentinel) {
                      continue;
                    }

                    return {
                      value: record.arg,
                      done: context.done,
                    };
                  } else if (record.type === 'throw') {
                    state = GenStateCompleted; // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.

                    context.method = 'throw';
                    context.arg = record.arg;
                  }
                }
              };
            } // Call delegate.iterator[context.method](context.arg) and handle the
            // result, either by returning a { value, done } result from the
            // delegate iterator, or by modifying context.method and context.arg,
            // setting context.delegate to null, and returning the ContinueSentinel.

            function maybeInvokeDelegate(delegate, context) {
              var method = delegate.iterator[context.method];

              if (method === undefined) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;

                if (context.method === 'throw') {
                  // Note: ["return"] must be used for ES3 parsing compatibility.
                  if (delegate.iterator['return']) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = 'return';
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);

                    if (context.method === 'throw') {
                      // If maybeInvokeDelegate(context) changed context.method from
                      // "return" to "throw", let that override the TypeError below.
                      return ContinueSentinel;
                    }
                  }

                  context.method = 'throw';
                  context.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  );
                }

                return ContinueSentinel;
              }

              var record = tryCatch(method, delegate.iterator, context.arg);

              if (record.type === 'throw') {
                context.method = 'throw';
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
              }

              var info = record.arg;

              if (!info) {
                context.method = 'throw';
                context.arg = new TypeError('iterator result is not an object');
                context.delegate = null;
                return ContinueSentinel;
              }

              if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

                context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.

                if (context.method !== 'return') {
                  context.method = 'next';
                  context.arg = undefined;
                }
              } else {
                // Re-yield the result returned by the delegate method.
                return info;
              } // The delegate iterator is finished, so forget it and continue with
              // the outer generator.

              context.delegate = null;
              return ContinueSentinel;
            } // Define Generator.prototype.{next,throw,return} in terms of the
            // unified ._invoke helper method.

            defineIteratorMethods(Gp);
            define(Gp, toStringTagSymbol, 'Generator'); // A Generator should always return itself as the iterator object when the
            // @@iterator function is called on it. Some browsers' implementations of the
            // iterator prototype chain incorrectly implement this, causing the Generator
            // object to not be returned from this call. This ensures that doesn't happen.
            // See https://github.com/facebook/regenerator/issues/274 for more details.

            define(Gp, iteratorSymbol, function () {
              return this;
            });
            define(Gp, 'toString', function () {
              return '[object Generator]';
            });

            function pushTryEntry(locs) {
              var entry = {
                tryLoc: locs[0],
              };

              if (1 in locs) {
                entry.catchLoc = locs[1];
              }

              if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
              }

              this.tryEntries.push(entry);
            }

            function resetTryEntry(entry) {
              var record = entry.completion || {};
              record.type = 'normal';
              delete record.arg;
              entry.completion = record;
            }

            function Context(tryLocsList) {
              // The root entry object (effectively a try statement without a catch
              // or a finally block) gives us a place to store values thrown from
              // locations where there is no enclosing try statement.
              this.tryEntries = [
                {
                  tryLoc: 'root',
                },
              ];
              tryLocsList.forEach(pushTryEntry, this);
              this.reset(true);
            }

            exports.keys = function (object) {
              var keys = [];

              for (var key in object) {
                keys.push(key);
              }

              keys.reverse(); // Rather than returning an object with a next method, we keep
              // things simple and return the next function itself.

              return function next() {
                while (keys.length) {
                  var key = keys.pop();

                  if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                  }
                } // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.

                next.done = true;
                return next;
              };
            };

            function values(iterable) {
              if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];

                if (iteratorMethod) {
                  return iteratorMethod.call(iterable);
                }

                if (typeof iterable.next === 'function') {
                  return iterable;
                }

                if (!isNaN(iterable.length)) {
                  var i = -1,
                    next = function next() {
                      while (++i < iterable.length) {
                        if (hasOwn.call(iterable, i)) {
                          next.value = iterable[i];
                          next.done = false;
                          return next;
                        }
                      }

                      next.value = undefined;
                      next.done = true;
                      return next;
                    };

                  return (next.next = next);
                }
              } // Return an iterator with no values.

              return {
                next: doneResult,
              };
            }

            exports.values = values;

            function doneResult() {
              return {
                value: undefined,
                done: true,
              };
            }

            Context.prototype = {
              constructor: Context,
              reset: function (skipTempReset) {
                this.prev = 0;
                this.next = 0; // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.

                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;
                this.method = 'next';
                this.arg = undefined;
                this.tryEntries.forEach(resetTryEntry);

                if (!skipTempReset) {
                  for (var name in this) {
                    // Not sure about the optimal order of these conditions:
                    if (
                      name.charAt(0) === 't' &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1))
                    ) {
                      this[name] = undefined;
                    }
                  }
                }
              },
              stop: function () {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;

                if (rootRecord.type === 'throw') {
                  throw rootRecord.arg;
                }

                return this.rval;
              },
              dispatchException: function (exception) {
                if (this.done) {
                  throw exception;
                }

                var context = this;

                function handle(loc, caught) {
                  record.type = 'throw';
                  record.arg = exception;
                  context.next = loc;

                  if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = 'next';
                    context.arg = undefined;
                  }

                  return !!caught;
                }

                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  var record = entry.completion;

                  if (entry.tryLoc === 'root') {
                    // Exception thrown outside of any try block that could handle
                    // it, so set the completion value of the entire function to
                    // throw the exception.
                    return handle('end');
                  }

                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc');
                    var hasFinally = hasOwn.call(entry, 'finallyLoc');

                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                      } else if (this.prev < entry.finallyLoc) {
                        return handle(entry.finallyLoc);
                      }
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                      }
                    } else if (hasFinally) {
                      if (this.prev < entry.finallyLoc) {
                        return handle(entry.finallyLoc);
                      }
                    } else {
                      throw new Error('try statement without catch or finally');
                    }
                  }
                }
              },
              abrupt: function (type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];

                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, 'finallyLoc') &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }

                if (
                  finallyEntry &&
                  (type === 'break' || type === 'continue') &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc
                ) {
                  // Ignore the finally entry if control is not jumping to a
                  // location outside the try/catch block.
                  finallyEntry = null;
                }

                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;

                if (finallyEntry) {
                  this.method = 'next';
                  this.next = finallyEntry.finallyLoc;
                  return ContinueSentinel;
                }

                return this.complete(record);
              },
              complete: function (record, afterLoc) {
                if (record.type === 'throw') {
                  throw record.arg;
                }

                if (record.type === 'break' || record.type === 'continue') {
                  this.next = record.arg;
                } else if (record.type === 'return') {
                  this.rval = this.arg = record.arg;
                  this.method = 'return';
                  this.next = 'end';
                } else if (record.type === 'normal' && afterLoc) {
                  this.next = afterLoc;
                }

                return ContinueSentinel;
              },
              finish: function (finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];

                  if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                  }
                }
              },
              catch: function (tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];

                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;

                    if (record.type === 'throw') {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }

                    return thrown;
                  }
                } // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.

                throw new Error('illegal catch attempt');
              },
              delegateYield: function (iterable, resultName, nextLoc) {
                this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc,
                };

                if (this.method === 'next') {
                  // Deliberately forget the last sent value so that we don't
                  // accidentally pass it on to the delegate.
                  this.arg = undefined;
                }

                return ContinueSentinel;
              },
            }; // Regardless of whether this script is executing as a CommonJS module
            // or not, return the runtime object so that we can declare the variable
            // regeneratorRuntime in the outer scope, which allows this module to be
            // injected easily by `bin/regenerator --include-runtime script.js`.

            return exports;
          })(
            // If this script is executing as a CommonJS module, use module.exports
            // as the regeneratorRuntime namespace. Otherwise create a new empty
            // object. Either way, the resulting object will be used to initialize
            // the regeneratorRuntime variable at the top of this file.
            true ? module.exports : undefined
          );

          try {
            regeneratorRuntime = runtime;
          } catch (accidentalStrictMode) {
            // This module should not be running in strict mode, so the above
            // assignment should always work unless something is misconfigured. Just
            // in case runtime.js accidentally runs in strict mode, in modern engines
            // we can explicitly access globalThis. In older engines we can escape
            // strict mode using a global Function call. This could conceivably fail
            // if a Content Security Policy forbids using Function, but in that case
            // the proper solution is to fix the accidental strict mode problem. If
            // you've misconfigured your bundler to force strict mode and applied a
            // CSP to forbid Function, and you're not willing to fix either of those
            // problems, please detail your unique predicament in a GitHub issue.
            if (typeof globalThis === 'object') {
              globalThis.regeneratorRuntime = runtime;
            } else {
              Function('r', 'regeneratorRuntime = r')(runtime);
            }
          }

          /***/
        },

      /***/ './node_modules/uuid/lib/bytesToUuid.js':
        /*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          /**
           * Convert array of 16 byte values to UUID string format of the form:
           * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
           */
          var byteToHex = [];

          for (var i = 0; i < 256; ++i) {
            byteToHex[i] = (i + 0x100).toString(16).substr(1);
          }

          function bytesToUuid(buf, offset) {
            var i = offset || 0;
            var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

            return [
              bth[buf[i++]],
              bth[buf[i++]],
              bth[buf[i++]],
              bth[buf[i++]],
              '-',
              bth[buf[i++]],
              bth[buf[i++]],
              '-',
              bth[buf[i++]],
              bth[buf[i++]],
              '-',
              bth[buf[i++]],
              bth[buf[i++]],
              '-',
              bth[buf[i++]],
              bth[buf[i++]],
              bth[buf[i++]],
              bth[buf[i++]],
              bth[buf[i++]],
              bth[buf[i++]],
            ].join('');
          }

          module.exports = bytesToUuid;

          /***/
        },

      /***/ './node_modules/uuid/lib/rng-browser.js':
        /*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          // Unique ID creation requires a high quality random # generator.  In the
          // browser this is a little complicated due to unknown quality of Math.random()
          // and inconsistent support for the `crypto` API.  We do the best we can via
          // feature-detection
          // getRandomValues needs to be invoked in a context where "this" is a Crypto
          // implementation. Also, find the complete implementation of crypto on IE11.
          var getRandomValues =
            (typeof crypto != 'undefined' &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            (typeof msCrypto != 'undefined' &&
              typeof window.msCrypto.getRandomValues == 'function' &&
              msCrypto.getRandomValues.bind(msCrypto));

          if (getRandomValues) {
            // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
            var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

            module.exports = function whatwgRNG() {
              getRandomValues(rnds8);
              return rnds8;
            };
          } else {
            // Math.random()-based (RNG)
            //
            // If all else fails, use Math.random().  It's fast, but is of unspecified
            // quality.
            var rnds = new Array(16);

            module.exports = function mathRNG() {
              for (var i = 0, r; i < 16; i++) {
                if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
                rnds[i] = (r >>> ((i & 0x03) << 3)) & 0xff;
              }

              return rnds;
            };
          }

          /***/
        },

      /***/ './node_modules/uuid/v4.js':
        /*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          var rng = __webpack_require__(
            /*! ./lib/rng */ './node_modules/uuid/lib/rng-browser.js'
          );

          var bytesToUuid = __webpack_require__(
            /*! ./lib/bytesToUuid */ './node_modules/uuid/lib/bytesToUuid.js'
          );

          function v4(options, buf, offset) {
            var i = (buf && offset) || 0;

            if (typeof options == 'string') {
              buf = options === 'binary' ? new Array(16) : null;
              options = null;
            }

            options = options || {};
            var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

            rnds[6] = (rnds[6] & 0x0f) | 0x40;
            rnds[8] = (rnds[8] & 0x3f) | 0x80; // Copy bytes to buffer, if provided

            if (buf) {
              for (var ii = 0; ii < 16; ++ii) {
                buf[i + ii] = rnds[ii];
              }
            }

            return buf || bytesToUuid(rnds);
          }

          module.exports = v4;

          /***/
        },

      /***/ './node_modules/webpack/buildin/module.js':
        /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          module.exports = function (module) {
            if (!module.webpackPolyfill) {
              module.deprecate = function () {};

              module.paths = []; // module.parent = undefined by default

              if (!module.children) module.children = [];
              Object.defineProperty(module, 'loaded', {
                enumerable: true,
                get: function () {
                  return module.l;
                },
              });
              Object.defineProperty(module, 'id', {
                enumerable: true,
                get: function () {
                  return module.i;
                },
              });
              module.webpackPolyfill = 1;
            }

            return module;
          };

          /***/
        },

      /***/ './src/chatbot.js':
        /*!************************!*\
  !*** ./src/chatbot.js ***!
  \************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/web.dom.iterable'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.keys'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.slice'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ./constants */ './src/constants.js');
          /* harmony import */ var _helpers_rest_api_get_modules__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./helpers/rest-api/get-modules */ './src/helpers/rest-api/get-modules.js'
            );
          /* harmony import */ var _helpers_rest_api_get_module__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./helpers/rest-api/get-module */ './src/helpers/rest-api/get-module.js'
            );
          /* harmony import */ var _helpers_rest_api_get_chatbot_user__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./helpers/rest-api/get-chatbot-user */ './src/helpers/rest-api/get-chatbot-user.js'
            );
          /* harmony import */ var _helpers_rest_api_send_logout__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./helpers/rest-api/send-logout */ './src/helpers/rest-api/send-logout.js'
            );
          /* harmony import */ var _helpers_is_hex__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./helpers/is-hex */ './src/helpers/is-hex.js'
            );
          /* harmony import */ var _helpers_signature__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./helpers/signature */ './src/helpers/signature.js'
            );
          /* harmony import */ var _i18n_en_EN__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! ./i18n/en_EN */ './src/i18n/en_EN.js');
          /* harmony import */ var BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/dependencies/inject-dependencies */ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_configuration__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_translate__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/translate */ './node_modules/BlueDarwinJS/src/services/translate.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_encryption__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/encryption */ './node_modules/BlueDarwinJS/src/services/encryption.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_auth__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/auth */ './node_modules/BlueDarwinJS/src/services/auth.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_17__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_18__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          var _config = /*#__PURE__*/ _classPrivateFieldLooseKey('config');

          var _tmpLoginParams =
            /*#__PURE__*/ _classPrivateFieldLooseKey('tmpLoginParams');

          var _parseDisplayColors =
            /*#__PURE__*/ _classPrivateFieldLooseKey('parseDisplayColors');

          var _parseDisplay =
            /*#__PURE__*/ _classPrivateFieldLooseKey('parseDisplay');

          var _parseTheme =
            /*#__PURE__*/ _classPrivateFieldLooseKey('parseTheme');

          var Chatbot = /*#__PURE__*/ (function () {
            function Chatbot() {
              _classCallCheck(this, Chatbot);

              Object.defineProperty(this, _parseTheme, {
                value: _parseTheme2,
              });
              Object.defineProperty(this, _parseDisplay, {
                value: _parseDisplay2,
              });
              Object.defineProperty(this, _parseDisplayColors, {
                value: _parseDisplayColors2,
              });
              Object.defineProperty(this, _config, {
                writable: true,
                value: null,
              });
              Object.defineProperty(this, _tmpLoginParams, {
                writable: true,
                value: [],
              });
              this.module = void 0;
              this.chatbotUser = void 0;
              this.display = void 0;
              // Sign our application info on the console
              Object(
                _helpers_signature__WEBPACK_IMPORTED_MODULE_8__['default']
              )(
                'BlueDarwin Chatbot JS',
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].INFO
              );
              var args = Array.prototype.slice.call(arguments);
              var config = args[2] || {};
              var loginParams = args.slice(0, 2);

              var _display = config.display || {};

              var _theme = config.theme; // Setup configuration

              this.config =
                new BlueDarwinJS_src_services_configuration__WEBPACK_IMPORTED_MODULE_11__[
                  'default'
                ](config);
              Object(
                BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_10__[
                  'default'
                ]
              )(
                [
                  BlueDarwinJS_src_services_encryption__WEBPACK_IMPORTED_MODULE_14__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_13__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_auth__WEBPACK_IMPORTED_MODULE_15__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_translate__WEBPACK_IMPORTED_MODULE_12__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_16__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_17__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_18__[
                    'default'
                  ],
                ],
                this
              ); // Setup language

              this.Translate.setLanguage(
                _i18n_en_EN__WEBPACK_IMPORTED_MODULE_9__['default']
              ); // Setup this chatbot

              _classPrivateFieldLooseBase(this, _tmpLoginParams)[
                _tmpLoginParams
              ] = loginParams;
              this.chatbotUser = config.chatbotUser;
              this.State.set(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                  .HAS_CLIENT_USER_ID,
                this.chatbotUser
              );
              this.State.set(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                  .ENVIRONMENT,
                this.config.environment
              );

              _classPrivateFieldLooseBase(this, _parseTheme)[_parseTheme](
                _theme,
                _display
              );
            }

            _createClass(Chatbot, [
              {
                key: 'config',
                // Lock only one write settings for config
                get: function get() {
                  return _classPrivateFieldLooseBase(this, _config)[_config];
                },
                set: function set(data) {
                  if (
                    null === _classPrivateFieldLooseBase(this, _config)[_config]
                  ) {
                    _classPrivateFieldLooseBase(this, _config)[_config] = data;
                  }
                },
              },
              {
                key: 'getModules',
                value: function getModules() {
                  return Object(
                    _helpers_rest_api_get_modules__WEBPACK_IMPORTED_MODULE_3__[
                      'default'
                    ]
                  )(this.Http);
                },
              },
              {
                key: 'getModule',
                value: function getModule(id) {
                  return Object(
                    _helpers_rest_api_get_module__WEBPACK_IMPORTED_MODULE_4__[
                      'default'
                    ]
                  )(id, this.Http);
                },
              },
              {
                key: 'getChatbotUser',
                value: function getChatbotUser(id) {
                  return Object(
                    _helpers_rest_api_get_chatbot_user__WEBPACK_IMPORTED_MODULE_5__[
                      'default'
                    ]
                  )(id, this.Http);
                },
              },
              {
                key: 'createChatbotUser',
                value: function createChatbotUser(params) {
                  //return generateChatbotUser(params);
                },
              },
              {
                key: 'setup',
                value: function setup() {
                  //
                  // Setup Error Logger;
                  // Run Login
                  return this.login();
                }, // private method login requires a new Symbol declarated on top
              },
              {
                key: 'login',
                value: function login(Key1, Key2) {
                  var _this = this;

                  if (Key1 && Key2)
                    _classPrivateFieldLooseBase(this, _tmpLoginParams)[
                      _tmpLoginParams
                    ] = [Key1, Key2];
                  return new Promise(function (res, rej) {
                    _this.Auth.loginChatbot(
                      _classPrivateFieldLooseBase(_this, _tmpLoginParams)[
                        _tmpLoginParams
                      ],
                      _this.State,
                      _this.Http,
                      _this.Encryption,
                      _this.PubSub,
                      _this.Response,
                      _this.Storage
                    )
                      .then(function (success) {
                        _this.State.set(
                          _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                            .STATES.HAS_MODULE,
                          success.data.module
                        );

                        try {
                          _this.State.set(
                            _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                              .STATES.HAS_CLIENT_USER_ID,
                            success.data.user.id
                          );
                        } catch (ex) {
                          console.warn(ex);

                          _this.State.set(
                            _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                              .STATES.HAS_CLIENT_USER_ID,
                            undefined
                          );
                        }

                        _classPrivateFieldLooseBase(_this, _tmpLoginParams)[
                          _tmpLoginParams
                        ] = {};
                        res(success);
                      })
                      .catch(function (ex) {
                        console.warn(ex);
                        rej(ex);
                      });
                  });
                },
              },
              {
                key: 'closeSession',
                value: (function () {
                  var _closeSession = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return Object(
                                  _helpers_rest_api_send_logout__WEBPACK_IMPORTED_MODULE_6__[
                                    'default'
                                  ]
                                )();

                              case 2:
                                this.PubSub.emit('LOGOUT');

                              case 3:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    })
                  );

                  function closeSession() {
                    return _closeSession.apply(this, arguments);
                  }

                  return closeSession;
                })(),
              },
            ]);

            return Chatbot;
          })();

          function _parseDisplayColors2() {
            var display =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            var fallbackDisplay =
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].DISPLAY;
            Object.keys(display).forEach(function (key) {
              // CONDITIONS
              // HEADER LETTERS CAN BE DARK OR LIGHT ONLY
              if (key === 'headerLetters') {
                if (
                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ].DISPLAY_HEADER_LETTERS.indexOf(display[key]) > -1
                ) {
                  fallbackDisplay[key] = display[key];
                }
              } // OTHER SETTINGS MUS BE HEX

              if (
                Object(_helpers_is_hex__WEBPACK_IMPORTED_MODULE_7__['default'])(
                  display[key]
                )
              ) {
                fallbackDisplay[key] = display[key];
              }
            });
            return fallbackDisplay;
          }

          function _parseDisplay2() {
            var display =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            display.colors = _classPrivateFieldLooseBase(
              this,
              _parseDisplayColors
            )[_parseDisplayColors](display.colors);
            return display;
          }

          function _parseTheme2(theme) {
            var display =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var parsedDisplay = {};
            var themes = Object.keys(
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].THEME
            );

            if (themes.indexOf(theme) > -1) {
              parsedDisplay =
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].THEME[theme];
            } else {
              parsedDisplay = _classPrivateFieldLooseBase(this, _parseDisplay)[
                _parseDisplay
              ](display);
            }

            this.State.set(
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                .APPLICATION_DISPLAY,
              parsedDisplay
            );
            this.State.set(
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                .APPLICATION_THEME,
              theme
            );
          }

          /* harmony default export */ __webpack_exports__['default'] = Chatbot;

          /***/
        },

      /***/ './src/components/cb-module.js':
        /*!*************************************!*\
  !*** ./src/components/cb-module.js ***!
  \*************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _cb_user__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! ./cb-user */ './src/components/cb-user.js');
          /* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ./session */ './src/components/session.js');
          /* harmony import */ var _helpers_rest_api_get_session__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../helpers/rest-api/get-session */ './src/helpers/rest-api/get-session.js'
            );
          /* harmony import */ var _helpers_rest_api_create_session__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../helpers/rest-api/create-session */ './src/helpers/rest-api/create-session.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/dependencies/inject-dependencies */ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
            );
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          var _meta = /*#__PURE__*/ _classPrivateFieldLooseKey('meta');

          var _channelTokens =
            /*#__PURE__*/ _classPrivateFieldLooseKey('channelTokens');

          var CbModule = /*#__PURE__*/ (function () {
            function CbModule(model) {
              _classCallCheck(this, CbModule);

              Object.defineProperty(this, _meta, {
                writable: true,
                value: {
                  label: false,
                  id: false,
                  channels: [],
                  user: {},
                  bot: {},
                },
              });
              Object.defineProperty(this, _channelTokens, {
                writable: true,
                value: [],
              });
              model = model.attributes || model;
              _classPrivateFieldLooseBase(this, _meta)[_meta] = model;
              _classPrivateFieldLooseBase(this, _meta)[_meta].label =
                model.label;
              _classPrivateFieldLooseBase(this, _meta)[_meta].id = model.id;
              _classPrivateFieldLooseBase(this, _channelTokens)[
                _channelTokens
              ] = model.am_channel_tokens;
              this.intents = [];
              Object(
                BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ]
              )(
                [
                  BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_4__[
                    'default'
                  ],
                ],
                this
              );
            } // Getters

            _createClass(CbModule, [
              {
                key: 'getIntents',
                value: function getIntents() {
                  return this.intents;
                },
                /**
                 * [getSession description]
                 * @return {Session}
                 */
              },
              {
                key: 'getSession',
                value: function getSession(id) {
                  return Object(
                    _helpers_rest_api_get_session__WEBPACK_IMPORTED_MODULE_2__[
                      'default'
                    ]
                  )(id, this.Http);
                },
              },
              {
                key: 'getChannels',
                value: function getChannels() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta]
                    .channels;
                },
              },
              {
                key: 'getLabel',
                value: function getLabel() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta].label;
                },
              },
              {
                key: 'getId',
                value: function getId() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta].id;
                },
              },
              {
                key: 'getMeta',
                value: function getMeta() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta];
                },
                /**
                 *
                 * @param  {Object} cbUser [description]
                 * @return {CbUser}        [description]
                 */
              },
              {
                key: 'createSession',
                value: function createSession(cbUser) {
                  return Object(
                    _helpers_rest_api_create_session__WEBPACK_IMPORTED_MODULE_3__[
                      'default'
                    ]
                  )(cbUser);
                },
              },
              {
                key: 'setMetaChannels',
                value: function setMetaChannels() {},
              },
              {
                key: 'setMetaUser',
                value: function setMetaUser(cbUser) {
                  _classPrivateFieldLooseBase(this, _meta)[_meta].user =
                    new _cb_user__WEBPACK_IMPORTED_MODULE_0__['default'](
                      cbUser
                    );
                },
              },
            ]);

            return CbModule;
          })();

          /* harmony default export */ __webpack_exports__['default'] =
            CbModule;

          /***/
        },

      /***/ './src/components/cb-user.js':
        /*!***********************************!*\
  !*** ./src/components/cb-user.js ***!
  \***********************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _models_chatbot_user__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../models/chatbot-user */ './src/models/chatbot-user.js'
            );
          /* harmony import */ var _helpers_rest_api_set_chatbot_user_name__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../helpers/rest-api/set-chatbot-user-name */ './src/helpers/rest-api/set-chatbot-user-name.js'
            );
          /* harmony import */ var _helpers_rest_api_set_chatbot_user_avatar__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../helpers/rest-api/set-chatbot-user-avatar */ './src/helpers/rest-api/set-chatbot-user-avatar.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/dependencies/inject-dependencies */ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
            );

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          var Model = Object(
            _models_chatbot_user__WEBPACK_IMPORTED_MODULE_2__['default']
          )();
          Model.id = false;

          var _meta = /*#__PURE__*/ _classPrivateFieldLooseKey('meta');

          var CbUser = /*#__PURE__*/ (function () {
            function CbUser(model) {
              _classCallCheck(this, CbUser);

              Object.defineProperty(this, _meta, {
                writable: true,
                value: Model,
              });
              _classPrivateFieldLooseBase(this, _meta)[_meta] = model;
              Object(
                BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_6__[
                  'default'
                ]
              )(
                [
                  BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_5__[
                    'default'
                  ],
                ],
                this
              );
            }

            _createClass(CbUser, [
              {
                key: 'id',
                get: function get() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta].id;
                },
              },
              {
                key: 'name',
                get: function get() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta]
                    .user_settings.username;
                },
              },
              {
                key: 'avatar',
                get: function get() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta]
                    .user_settings.avatar;
                },
              },
              {
                key: 'setName',
                value: (function () {
                  var _setName = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
                      name
                    ) {
                      var rollback;
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                rollback = _classPrivateFieldLooseBase(
                                  this,
                                  _meta
                                )[_meta].user_settings.username;
                                _context.prev = 1;
                                _classPrivateFieldLooseBase(this, _meta)[
                                  _meta
                                ].user_settings.username = name;
                                _context.next = 5;
                                return Object(
                                  _helpers_rest_api_set_chatbot_user_name__WEBPACK_IMPORTED_MODULE_3__[
                                    'default'
                                  ]
                                )(
                                  _classPrivateFieldLooseBase(this, _meta)[
                                    _meta
                                  ].id,
                                  name,
                                  this.Http
                                );

                              case 5:
                                return _context.abrupt(
                                  'return',
                                  Promise.resolve(name)
                                );

                              case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](1);
                                _classPrivateFieldLooseBase(this, _meta)[
                                  _meta
                                ].user_settings.username = rollback;
                                return _context.abrupt(
                                  'return',
                                  Promise.reject(rollback)
                                );

                              case 12:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this,
                        [[1, 8]]
                      );
                    })
                  );

                  function setName(_x) {
                    return _setName.apply(this, arguments);
                  }

                  return setName;
                })(),
              },
              {
                key: 'setAvatar',
                value: (function () {
                  var _setAvatar = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(
                      avatar
                    ) {
                      var rollback;
                      return regeneratorRuntime.wrap(
                        function _callee2$(_context2) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                rollback = _classPrivateFieldLooseBase(
                                  this,
                                  _meta
                                )[_meta].user_settings.avatar;
                                _context2.prev = 1;
                                _classPrivateFieldLooseBase(this, _meta)[
                                  _meta
                                ].user_settings.avatar = avatar;
                                _context2.next = 5;
                                return Object(
                                  _helpers_rest_api_set_chatbot_user_avatar__WEBPACK_IMPORTED_MODULE_4__[
                                    'default'
                                  ]
                                )(
                                  _classPrivateFieldLooseBase(this, _meta)[
                                    _meta
                                  ].id,
                                  avatar,
                                  this.Http
                                );

                              case 5:
                                return _context2.abrupt(
                                  'return',
                                  Promise.resolve(avatar)
                                );

                              case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](1);
                                _classPrivateFieldLooseBase(this, _meta)[
                                  _meta
                                ].user_settings.avatar = rollback;
                                return _context2.abrupt(
                                  'return',
                                  Promise.reject(rollback)
                                );

                              case 12:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        },
                        _callee2,
                        this,
                        [[1, 8]]
                      );
                    })
                  );

                  function setAvatar(_x2) {
                    return _setAvatar.apply(this, arguments);
                  }

                  return setAvatar;
                })(),
              },
            ]);

            return CbUser;
          })();

          /* harmony default export */ __webpack_exports__['default'] = CbUser;

          /***/
        },

      /***/ './src/components/session.js':
        /*!***********************************!*\
  !*** ./src/components/session.js ***!
  \***********************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ../constants */ './src/constants.js');
          /* harmony import */ var _helpers_rest_api_get_or_create_chatbot_session__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../helpers/rest-api/get-or-create-chatbot-session */ './src/helpers/rest-api/get-or-create-chatbot-session.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _utils_communication__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../utils/communication */ './src/utils/communication.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/dependencies/inject-dependencies */ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
            );

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          var _meta = /*#__PURE__*/ _classPrivateFieldLooseKey('meta');

          var _session = /*#__PURE__*/ _classPrivateFieldLooseKey('session');

          var _conversation =
            /*#__PURE__*/ _classPrivateFieldLooseKey('conversation');

          var _updateConversation =
            /*#__PURE__*/ _classPrivateFieldLooseKey('updateConversation');

          var _buildConversationFromSession =
            /*#__PURE__*/ _classPrivateFieldLooseKey(
              'buildConversationFromSession'
            );

          var Session = /*#__PURE__*/ (function () {
            function Session(amModule, user) {
              _classCallCheck(this, Session);

              Object.defineProperty(this, _buildConversationFromSession, {
                value: _buildConversationFromSession2,
              });
              Object.defineProperty(this, _updateConversation, {
                value: _updateConversation2,
              });
              Object.defineProperty(this, _meta, {
                writable: true,
                value: {
                  user: false,
                  id: false,
                  module: false,
                  projectId: false,
                  isOpen: false,
                },
              });
              Object.defineProperty(this, _session, {
                writable: true,
                value: {},
              });
              Object.defineProperty(this, _conversation, {
                writable: true,
                value: [],
              });
              this.parameters = {};

              if (!amModule || !user) {
                throw 'ERROR.SESSION_CREATE_WITHOUT_LOGIN_OR_INIT';
              }

              _classPrivateFieldLooseBase(this, _meta)[_meta].module = amModule;
              _classPrivateFieldLooseBase(this, _meta)[_meta].user = user;
              Object(
                BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_8__[
                  'default'
                ]
              )(
                [
                  BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_6__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_4__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_5__[
                    'default'
                  ],
                  _utils_communication__WEBPACK_IMPORTED_MODULE_7__['default'],
                ],
                this
              );
            }

            _createClass(Session, [
              {
                key: 'getId',
                value: function getId() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta].id;
                },
              },
              {
                key: 'getUser',
                value: function getUser() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta].user;
                },
              },
              {
                key: 'getModule',
                value: function getModule() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta].module;
                },
              },
              {
                key: 'isOpen',
                value: function isOpen() {
                  return _classPrivateFieldLooseBase(this, _meta)[_meta].isOpen;
                },
              },
              {
                key: 'sendText',
                value: function sendText(text) {
                  return this.Communication.sendText(text);
                },
              },
              {
                key: 'sendVoice',
                value: function sendVoice(audio) {
                  return this.Communication.sendVoice(audio);
                },
              },
              {
                key: 'sendPostBack',
                value: function sendPostBack(postback) {
                  return this.Communication.sendPostBack(postback);
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
                }, // Returns conversation
              },
              {
                key: 'getSession',
                value: (function () {
                  var _getSession = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                      var session;
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return Object(
                                  _helpers_rest_api_get_or_create_chatbot_session__WEBPACK_IMPORTED_MODULE_3__[
                                    'default'
                                  ]
                                )();

                              case 3:
                                session = _context.sent;

                                if (!session) {
                                  _context.next = 10;
                                  break;
                                }

                                _classPrivateFieldLooseBase(this, _meta)[
                                  _meta
                                ].isOpen = session.attributes.status === 'open';
                                _classPrivateFieldLooseBase(this, _meta)[
                                  _meta
                                ].projectId =
                                  session.relationships.project.data.id;
                                _classPrivateFieldLooseBase(this, _meta)[
                                  _meta
                                ].id = session.id;
                                _classPrivateFieldLooseBase(this, _session)[
                                  _session
                                ] = session;
                                return _context.abrupt(
                                  'return',
                                  Promise.resolve(
                                    _classPrivateFieldLooseBase(
                                      this,
                                      _buildConversationFromSession
                                    )[_buildConversationFromSession](session)
                                  )
                                );

                              case 10:
                                return _context.abrupt(
                                  'return',
                                  Promise.resolve(
                                    _classPrivateFieldLooseBase(
                                      this,
                                      _conversation
                                    )[_conversation]
                                  )
                                );

                              case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt(
                                  'return',
                                  Promise.reject(
                                    BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_6__[
                                      'default'
                                    ].error({
                                      message: _context.t0,
                                      data: _context.t0,
                                    })
                                  )
                                );

                              case 16:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this,
                        [[0, 13]]
                      );
                    })
                  );

                  function getSession() {
                    return _getSession.apply(this, arguments);
                  }

                  return getSession;
                })(), // get a conversation
              },
              {
                key: 'getConversation',
                value: (function () {
                  var _getConversation = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
                      var conversation, session;
                      return regeneratorRuntime.wrap(
                        function _callee2$(_context2) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                _context2.prev = 0;
                                conversation = _classPrivateFieldLooseBase(
                                  this,
                                  _conversation
                                )[_conversation];

                                if (!(conversation.length > 0)) {
                                  _context2.next = 4;
                                  break;
                                }

                                return _context2.abrupt(
                                  'return',
                                  Promise.resolve(conversation)
                                );

                              case 4:
                                _context2.next = 6;
                                return this.getSession();

                              case 6:
                                session = _context2.sent;
                                return _context2.abrupt(
                                  'return',
                                  Promise.resolve(session)
                                );

                              case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2['catch'](0);
                                console.warn(_context2.t0);
                                return _context2.abrupt(
                                  'return',
                                  Promise.resolve(
                                    _classPrivateFieldLooseBase(
                                      this,
                                      _conversation
                                    )[_conversation]
                                  )
                                );

                              case 14:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        },
                        _callee2,
                        this,
                        [[0, 10]]
                      );
                    })
                  );

                  function getConversation() {
                    return _getConversation.apply(this, arguments);
                  }

                  return getConversation;
                })(), // update conversation
              },
              {
                key: 'reset',
                value: (function () {
                  var _reset = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
                      var reset;
                      return regeneratorRuntime.wrap(
                        function _callee3$(_context3) {
                          while (1) {
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                _context3.next = 2;
                                return this.Communication.sendReset();

                              case 2:
                                reset = _context3.sent;
                                _classPrivateFieldLooseBase(
                                  this,
                                  _conversation
                                )[_conversation] = {};
                                return _context3.abrupt('return', reset);

                              case 5:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        },
                        _callee3,
                        this
                      );
                    })
                  );

                  function reset() {
                    return _reset.apply(this, arguments);
                  }

                  return reset;
                })(),
              },
            ]);

            return Session;
          })();

          function _updateConversation2(type, data) {
            if (type && data) {
              var conversationObject = {
                type: type,
                data: data,
              };

              _classPrivateFieldLooseBase(this, _conversation)[
                _conversation
              ].push(conversationObject);
            }
          }

          function _buildConversationFromSession2(session) {
            if (!session || !session.attributes || !session.attributes.context)
              return _classPrivateFieldLooseBase(this, _conversation)[
                _conversation
              ];
            var context = session.attributes.context;

            for (var i = 1; i <= context.n_interactions; i++) {
              var key = 'interaction_' + i;
              var input =
                context.inputs[key] && Array.isArray(context.inputs[key])
                  ? context.inputs[key][0]
                  : undefined;
              var output =
                context.outputs[key] && Array.isArray(context.outputs[key])
                  ? context.outputs[key][0]
                  : undefined;

              _classPrivateFieldLooseBase(this, _updateConversation)[
                _updateConversation
              ]('input', input);

              _classPrivateFieldLooseBase(this, _updateConversation)[
                _updateConversation
              ]('output', output);
            }

            this.State.set(
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                .CONVERSATION,
              _classPrivateFieldLooseBase(this, _conversation)[_conversation]
            );
            return _classPrivateFieldLooseBase(this, _conversation)[
              _conversation
            ];
          }

          /* harmony default export */ __webpack_exports__['default'] = Session;

          /***/
        },

      /***/ './src/constants.js':
        /*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          var APP_CONSTANTS = {
            BUTTON_KEY: 'cognus-chatbot-button',
            DEFAULTS: {
              ENCRYPTION: true,
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
              dark: {
                color: '#000',
                'fill-opacity': '0.6',
              },
              light: {
                color: '#FFF',
                'fill-opacity': '1',
              },
            },
            ENCRYPTED_ENVIRONMENTS: ['production', 'staging'],
            ENVIRONMENT_IDS: {
              development: 3,
              production: 5,
              staging: 4,
            },
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
              DESCRIPTION: 'Effortless JS integration of our chatbot', // 'WANT_YOUR_CHATBOT_?':
              //   'Contact the Bluedarwin Team to get your own AI chatbot project'
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
          /* harmony default export */ __webpack_exports__['default'] =
            APP_CONSTANTS;

          /***/
        },

      /***/ './src/dom/animations/fade-in.js':
        /*!***************************************!*\
  !*** ./src/dom/animations/fade-in.js ***!
  \***************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return fadeIn;
            }
          );
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var BlueDarwinJS_src_prototypes_extend_configuration__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/prototypes/extend-configuration */ './node_modules/BlueDarwinJS/src/prototypes/extend-configuration.js'
            );

          var CONFIG = {
            display: 'block',
            time: '0.4s',
            delay: 0,
          };
          function fadeIn($el) {
            var config =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            config = Object(
              BlueDarwinJS_src_prototypes_extend_configuration__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )(config, CONFIG);
            return new Promise(function (res, rej) {
              try {
                setTimeout(function () {
                  $el.style.opacity = 0;
                  $el.style.display = config.display;
                  $el.style.WebkitTransition = 'opacity '.concat(config.time);
                  $el.style.MozTransition = 'opacity '.concat(config.time);
                  requestAnimationFrame(function () {
                    return ($el.style.opacity = 1);
                  });
                  res();
                }, config.delay);
              } catch (ex) {
                rej(ex);
              }
            });
          }

          /***/
        },

      /***/ './src/dom/animations/fade-out.js':
        /*!****************************************!*\
  !*** ./src/dom/animations/fade-out.js ***!
  \****************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return fadeOut;
            }
          );
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var BlueDarwinJS_src_prototypes_extend_configuration__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/prototypes/extend-configuration */ './node_modules/BlueDarwinJS/src/prototypes/extend-configuration.js'
            );

          var CONFIG = {
            time: '0.4s',
            delay: 0,
          };
          function fadeOut($el) {
            var config =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            config = Object(
              BlueDarwinJS_src_prototypes_extend_configuration__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )(config, CONFIG);
            return new Promise(function (res, rej) {
              setTimeout(function () {
                try {
                  $el.style.opacity = 1;
                  $el.style.WebkitTransition = 'opacity '.concat(config.time);
                  $el.style.MozTransition = 'opacity '.concat(config.time);
                  requestAnimationFrame(function () {
                    return ($el.style.opacity = 0);
                  });
                  res();
                } catch (ex) {
                  rej(ex);
                }
              }, config.delay);
            });
          }

          /***/
        },

      /***/ './src/dom/custom-elements/cognus-chatbot-button.js':
        /*!**********************************************************!*\
  !*** ./src/dom/custom-elements/cognus-chatbot-button.js ***!
  \**********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es7.symbol.async-iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.symbol'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/web.dom.iterable'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.string.iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error("Cannot find module 'core-js/modules/es6.map'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.reflect.construct'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.regexp.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.set-prototype-of'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ../../constants */ './src/constants.js');
          /* harmony import */ var _templates_cognus_chatbot_button__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./templates/cognus-chatbot-button */ './src/dom/custom-elements/templates/cognus-chatbot-button.js'
            );
          /* harmony import */ var _animations_fade_in__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../animations/fade-in */ './src/dom/animations/fade-in.js'
            );
          /* harmony import */ var _animations_fade_out__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../animations/fade-out */ './src/dom/animations/fade-out.js'
            );
          /* harmony import */ var _helpers_handle_template_display__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../../helpers/handle-template-display */ './src/helpers/handle-template-display.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/post-message */ './node_modules/BlueDarwinJS/src/helpers/post-message.js'
            );
          function _typeof(obj) {
            '@babel/helpers - typeof';
            return (
              (_typeof =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (obj) {
                      return typeof obj;
                    }
                  : function (obj) {
                      return obj &&
                        'function' == typeof Symbol &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? 'symbol'
                        : typeof obj;
                    }),
              _typeof(obj)
            );
          }

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            Object.defineProperty(subClass, 'prototype', { writable: false });
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived),
                result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (_typeof(call) === 'object' || typeof call === 'function')
            ) {
              return call;
            } else if (call !== void 0) {
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            }
            return _assertThisInitialized(self);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }

          function _wrapNativeSuper(Class) {
            var _cache = typeof Map === 'function' ? new Map() : undefined;
            _wrapNativeSuper = function _wrapNativeSuper(Class) {
              if (Class === null || !_isNativeFunction(Class)) return Class;
              if (typeof Class !== 'function') {
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              }
              if (typeof _cache !== 'undefined') {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
              }
              function Wrapper() {
                return _construct(
                  Class,
                  arguments,
                  _getPrototypeOf(this).constructor
                );
              }
              Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                  value: Wrapper,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              });
              return _setPrototypeOf(Wrapper, Class);
            };
            return _wrapNativeSuper(Class);
          }

          function _construct(Parent, args, Class) {
            if (_isNativeReflectConstruct()) {
              _construct = Reflect.construct;
            } else {
              _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
              };
            }
            return _construct.apply(null, arguments);
          }

          function _isNativeReflectConstruct() {
            if (typeof Reflect === 'undefined' || !Reflect.construct)
              return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === 'function') return true;
            try {
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
              return true;
            } catch (e) {
              return false;
            }
          }

          function _isNativeFunction(fn) {
            return Function.toString.call(fn).indexOf('[native code]') !== -1;
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
            return _setPrototypeOf(o, p);
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          var eventListenerElements = [
            // { id: "$button", action: "handleClick", type: "click" },
            {
              id: '$button',
              action: 'startButtonPress',
              type: 'mousedown',
            },
            {
              id: '$button',
              action: 'endButtonPress',
              type: 'mouseup',
            },
            {
              id: '$iframe',
              action: 'broadcastIframeLoaded',
              type: 'load',
            },
          ];
          var ANIMATIONS = {
            IFRAME_OPEN_AFTER: 0,
            IFRAME_CLOSE_AFTER: 0,
            //1000
            ICON_TRANSITION: 0,
            //400
            ICON_TRANSITION_DELAY: 0, //300
          };
          var LONGPRESS = 0; //100

          var pubSub;

          var _boot = /*#__PURE__*/ _classPrivateFieldLooseKey('boot');

          var _sendIframeEvents =
            /*#__PURE__*/ _classPrivateFieldLooseKey('sendIframeEvents');

          var CognusChatbotButton = /*#__PURE__*/ (function (_HTMLElement) {
            _inherits(CognusChatbotButton, _HTMLElement);

            var _super = _createSuper(CognusChatbotButton);

            function CognusChatbotButton() {
              var _this;

              _classCallCheck(this, CognusChatbotButton);

              // always call super() first
              _this = _super.call(this);
              Object.defineProperty(
                _assertThisInitialized(_this),
                _sendIframeEvents,
                {
                  value: _sendIframeEvents2,
                }
              );
              Object.defineProperty(_assertThisInitialized(_this), _boot, {
                value: _boot2,
              });
              _this.isLocked = false;
              _this.isChatbotWindowOpen = false;
              _this.delay = 0;
              _this.isButtonPressed = false;
              _this.firstClickTriggered = false;
              pubSub =
                new BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_7__[
                  'default'
                ]();
              _this.State =
                new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_8__[
                  'default'
                ]();

              _classPrivateFieldLooseBase(_assertThisInitialized(_this), _boot)[
                _boot
              ]();

              return _this;
            }

            _createClass(
              CognusChatbotButton,
              [
                {
                  key: 'handleClick',
                  value: (function () {
                    var _handleClick = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.prev = 0;

                                  if (!this.isLocked) {
                                    _context.next = 3;
                                    break;
                                  }

                                  return _context.abrupt('return');

                                case 3:
                                  this.isLocked = true;

                                  if (!this.isChatbotWindowOpen) {
                                    _context.next = 9;
                                    break;
                                  }

                                  _context.next = 7;
                                  return this.closeChatbotWindow();

                                case 7:
                                  _context.next = 11;
                                  break;

                                case 9:
                                  _context.next = 11;
                                  return this.openChatbotWindow();

                                case 11:
                                  this.isLocked = false;
                                  _context.next = 18;
                                  break;

                                case 14:
                                  _context.prev = 14;
                                  _context.t0 = _context['catch'](0);
                                  console.warn(_context.t0);
                                  this.isLocked = false;

                                case 18:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[0, 14]]
                        );
                      })
                    );

                    function handleClick() {
                      return _handleClick.apply(this, arguments);
                    }

                    return handleClick;
                  })(),
                },
                {
                  key: 'closeChatbotWindow',
                  value: function closeChatbotWindow() {
                    var _this2 = this;

                    return new Promise(function (res, rej) {
                      BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ].send('closeChatbotWindow');
                      setTimeout(function () {
                        _this2.isChatbotWindowOpen = false;
                        res();
                      }, ANIMATIONS.ICON_TRANSITION);
                      setTimeout(function () {
                        _this2.$iframe.style.display = 'none';
                      }, ANIMATIONS.IFRAME_CLOSE_AFTER);
                      Object(
                        _animations_fade_in__WEBPACK_IMPORTED_MODULE_4__[
                          'default'
                        ]
                      )(_this2.$iconOpen, {
                        delay: ANIMATIONS.ICON_TRANSITION_DELAY,
                      });
                      Object(
                        _animations_fade_out__WEBPACK_IMPORTED_MODULE_5__[
                          'default'
                        ]
                      )(_this2.$iconClose);
                    });
                  },
                },
                {
                  key: 'openChatbotWindow',
                  value: function openChatbotWindow() {
                    var _this3 = this;

                    return new Promise(function (res, rej) {
                      _this3.$iframe.style.display = 'block';

                      if (!_this3.firstClickTriggered) {
                        _this3.firstClickTriggered = true;

                        _classPrivateFieldLooseBase(_this3, _sendIframeEvents)[
                          _sendIframeEvents
                        ]();
                      }

                      BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ].send('openChatbotWindow');
                      setTimeout(function () {
                        _this3.isChatbotWindowOpen = true;
                        res();
                      }, ANIMATIONS.ICON_TRANSITION);
                      setTimeout(function () {
                        _this3.isChatbotWindowOpen = true;
                        res();
                      }, ANIMATIONS.IFRAME_OPEN_AFTER);
                      Object(
                        _animations_fade_in__WEBPACK_IMPORTED_MODULE_4__[
                          'default'
                        ]
                      )(_this3.$iconClose, {
                        delay: ANIMATIONS.ICON_TRANSITION_DELAY,
                      });
                      Object(
                        _animations_fade_out__WEBPACK_IMPORTED_MODULE_5__[
                          'default'
                        ]
                      )(_this3.$iconOpen);
                    });
                  },
                },
                {
                  key: 'broadcastIframeLoaded',
                  value: function broadcastIframeLoaded() {
                    pubSub.emit(
                      _constants__WEBPACK_IMPORTED_MODULE_2__['default'].EVENTS
                        .IFRAME_LOADED
                    );
                  }, // OBSERVERS //////////////////////////////////
                },
                {
                  key: 'attributeChangedCallback',
                  value: function attributeChangedCallback(
                    name,
                    oldValue,
                    newValue
                  ) {
                    switch (name) {
                      case 'src':
                        this.$iframe.src = newValue;
                        break;
                    }
                  },
                },
                {
                  key: 'startButtonPress',
                  value: function startButtonPress() {
                    // this.isButtonPressed = true;
                    // setTimeout(() => {
                    //   if (this.isButtonPressed) {
                    //   } else {
                    //     this.handleClick();
                    //   }
                    // }, LONGPRESS);
                    this.handleClick();
                  },
                },
                {
                  key: 'endButtonPress',
                  value: function endButtonPress(e) {
                    this.isButtonPressed = false;
                  }, // GETTERS / SETTERS ////////////////////////////
                },
                {
                  key: 'src',
                  get: function get() {
                    return this.getAttribute('src');
                  },
                  set: function set(newValue) {
                    this.setAttribute('src', newValue);
                  }, // EVENT LISTENERS /////////////////////////////
                },
                {
                  key: 'addEventListeners',
                  value: function addEventListeners() {
                    var _this4 = this;

                    // define event listeners
                    eventListenerElements.forEach(function ($el) {
                      _this4[$el.id].addEventListener(
                        $el.type,
                        _this4[$el.action]
                      );
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
            );

            return CognusChatbotButton;
          })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement));

          function _boot2() {
            var _this5 = this;

            _templates_cognus_chatbot_button__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ].innerHTML = Object(
              _helpers_handle_template_display__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ]
            )(
              _templates_cognus_chatbot_button__WEBPACK_IMPORTED_MODULE_3__[
                'default'
              ].innerHTML,
              this.State
            );
            this._shadowRoot = this.attachShadow({
              mode: 'open',
            });

            this._shadowRoot.appendChild(
              _templates_cognus_chatbot_button__WEBPACK_IMPORTED_MODULE_3__[
                'default'
              ].content.cloneNode(true)
            ); // Register actions

            this.handleClick = this.handleClick.bind(this);
            this.startButtonPress = this.startButtonPress.bind(this);
            this.endButtonPress = this.endButtonPress.bind(this); // define all elements that are going to be used

            this.$container = this._shadowRoot.getElementById(
              'cognus-chatbot__container'
            );
            this.$button = this._shadowRoot.getElementById(
              'cognus-chatbot__button'
            );
            this.$iframe = this._shadowRoot.getElementById(
              'cognus-chatbot__iframe'
            );
            this.$iconClose = this._shadowRoot.getElementById(
              'cognus-chatbot__icon-close'
            );
            this.$iconOpen = this._shadowRoot.getElementById(
              'cognus-chatbot__icon-open'
            );

            this.$iframe.onload = function () {
              _this5.State.set(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].IFRAME_READY,
                true
              );
            }; // Add event listeners

            this.addEventListeners();
          }

          function _sendIframeEvents2() {
            var _this6 = this;

            var sendIframeEventsInterval = setInterval(function () {
              if (
                _this6.State.get(
                  _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                    .IFRAME_READY
                )
              ) {
                var data = {
                  key: _this6.State.get(
                    _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                      .HAS_KEY
                  ),
                  module: _this6.State.get(
                    _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                      .HAS_MODULE
                  ),
                  project: _this6.State.get(
                    _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                      .HAS_PROJECT
                  ),
                  token: _this6.State.get(
                    _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                      .HAS_TOKEN
                  ),
                  user: _this6.State.get(
                    _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                      .HAS_USER
                  ),
                };
                BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_9__[
                  'default'
                ].send('setupClient', data);
                BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_9__[
                  'default'
                ].send('setupUser', data.user);
                BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_9__[
                  'default'
                ].send('setModuleById', data.module);
                clearInterval(sendIframeEventsInterval);
              }
            }, 100);
          }

          /* harmony default export */ __webpack_exports__['default'] =
            CognusChatbotButton;

          /***/
        },

      /***/ './src/dom/custom-elements/templates/cognus-chatbot-button.js':
        /*!********************************************************************!*\
  !*** ./src/dom/custom-elements/templates/cognus-chatbot-button.js ***!
  \********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          var TEMPLATE = document.createElement('template');
          TEMPLATE.innerHTML =
            '\n<style>\n/*! CSS Used from: https://fonts.googleapis.com/icon?family=Material+Icons */.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}/*! CSS Used from: https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/chatbot-ui.css */#open-chat-button{background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),__headerGradientStart__;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-moz-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-webkit-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),linear-gradient(135deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);margin-top:8px}.mdl-button--fab.mdl-button--colored{background:linear-gradient(135deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);color:#fff;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),__headerGradientStart__;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-moz-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-webkit-linear-gradient(-45deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),linear-gradient(135deg,__headerGradientStart__ 1%,__headerGradientEnd__ 77%,__headerGradientEnd__ 77%)}.snippet-open-chat-button{float:right;margin-right:10px;margin-top:10px}button{text-transform:initial!important}/*! CSS Used from: https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/material.min.css */::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}@media print{*,:after,:before,:first-letter{background:0 0!important;color:#000!important;box-shadow:none!important}}.mdl-button{-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:rgba(255,255,255,0)}.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;word-wrap:normal;-moz-font-feature-settings:\'liga\';font-feature-settings:\'liga\';-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:0;overflow:hidden;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:rgba(158,158,158,.2)}.mdl-button:active{background-color:rgba(158,158,158,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:rgba(158,158,158,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:rgba(158,158,158,.4)}.mdl-button .material-icons{vertical-align:middle}/*! CSS Used from: https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/fonts.css */.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}\n\niframe{display:none; border: none;width: 350px;height: 650px; position:absolute; right:0; bottom: 0;}\n.mdl-button.mdl-js-button.mdl-button--fab.mdl-button--colored.snippet-open-chat-button{box-shadow: 0 3px 10px rgba(0,0,0,0.15)}\n#cognus-chatbot__container{\n    position: relative;\n    height: 0;\n    width: 0;\n    float: right;\n}\n\ncognus-chatbot-button{\n  width: 0px;\n  height: 0px;\n}\n\n</style>\n<div id="cognus-chatbot__container">\n<iframe class="closed" id="cognus-chatbot__iframe" allow="microphone"></iframe>\n<button id="cognus-chatbot__button"  class="mdl-button mdl-js-button\n              mdl-button--fab\n              mdl-button--colored\n              snippet-open-chat-button"  data-upgraded=",MaterialButton">\n\n<i id="cognus-chatbot__icon-close" class="material-icons" style="opacity:0">\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path fill="none" d="M0 0h24v24H0V0z"/>\n    <path fill="__headerLettersColor__" fill-opacity="__headerLettersOpacity__"  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>\n</i>\n<i id="cognus-chatbot__icon-open" class="material-icons">\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path fill="none" d="M0 0h24v24H0V0z"/>\n    <path fill="__headerLettersColor__" fill-opacity="__headerLettersOpacity__" d="M22 2H2v20l4-4h16V2z"/></svg>\n</i>\n</button>\n</div>\n';
          /* harmony default export */ __webpack_exports__['default'] =
            TEMPLATE;

          /***/
        },

      /***/ './src/helpers/handle-template-display.js':
        /*!************************************************!*\
  !*** ./src/helpers/handle-template-display.js ***!
  \************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return handleTemplateDisplay;
            }
          );
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.regexp.replace'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.regexp.constructor'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/web.dom.iterable'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.keys'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ../constants */ './src/constants.js');

          function handleTemplateDisplay() {
            var template =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : '';
            var state =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var display = state.get(
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                .APPLICATION_DISPLAY
            );
            var colors =
              display.colors ||
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].DISPLAY;
            Object.keys(colors).forEach(function (key) {
              var find;
              var re;

              if (key === 'headerLetters') {
                find = '__'.concat(key, 'Color__');
                re = new RegExp(find, 'g');
                template = template.replace(
                  re,
                  _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                    .DISPLAY_HEADER_LETTERS_STYLES[colors[key]].color
                );
                find = '__'.concat(key, 'Opacity__');
                re = new RegExp(find, 'g');
                template = template.replace(
                  re,
                  _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                    .DISPLAY_HEADER_LETTERS_STYLES[colors[key]]['fill-opacity']
                ); // find = `__${key}__`;
                // re = new RegExp(find, 'g');
                // template = template.replace(re, colors[key]);
              } else {
                find = '__'.concat(key, '__');
                re = new RegExp(find, 'g');
                template = template.replace(re, colors[key]);
              }
            });
            return template;
          }

          /***/
        },

      /***/ './src/helpers/is-hex.js':
        /*!*******************************!*\
  !*** ./src/helpers/is-hex.js ***!
  \*******************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return isHex;
            }
          );
          function isHex() {
            var h =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : '';
            // h = h.replace('#', '').trim();
            // const a = parseInt(h, 16);
            // return a.toString(16) === h.toLowerCase();
            return true;
          }

          /***/
        },

      /***/ './src/helpers/rest-api/create-session.js':
        /*!************************************************!*\
  !*** ./src/helpers/rest-api/create-session.js ***!
  \************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../models/session */ './src/models/session.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_extend_and_keep_structure__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/extend-and-keep-structure */ './node_modules/BlueDarwinJS/src/helpers/extend-and-keep-structure.js'
            );
          /*
const Http = require("../../utils/http");
const Model = require("../../models/session")();
const setModelParams = require("../set-model-params");
/**
 * Generates a new chatbot user
 * @param  {ChatbotUser} data [description]
 * @return {Promise|ChatbotUserModel}      [description]
 */

          var createSession = function createSession() {
            var data =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : _models_session__WEBPACK_IMPORTED_MODULE_1__['default'];
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ].post(
              'url',
              Object(
                BlueDarwinJS_src_helpers_extend_and_keep_structure__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ]
              )(_models_session__WEBPACK_IMPORTED_MODULE_1__['default'], data)
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            createSession;

          /***/
        },

      /***/ './src/helpers/rest-api/get-channel-token.js':
        /*!***************************************************!*\
  !*** ./src/helpers/rest-api/get-channel-token.js ***!
  \***************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /*
const Http = require("../../utils/http");

const action = function(id) {
  return Http.get(`am_channels/${id}`);
};

export default  action;
*/

          var getChannel = function getChannel(id) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.get('am_channel_tokens/'.concat(id));
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getChannel;

          /***/
        },

      /***/ './src/helpers/rest-api/get-channel.js':
        /*!*********************************************!*\
  !*** ./src/helpers/rest-api/get-channel.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /*
const Http = require("../../utils/http");

const action = function(id) {
  return Http.get(`am_channels/${id}`);
};

export default  action;
*/

          var getChannel = function getChannel(id) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.get('am_channels/'.concat(id));
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getChannel;

          /***/
        },

      /***/ './src/helpers/rest-api/get-chatbot-user.js':
        /*!**************************************************!*\
  !*** ./src/helpers/rest-api/get-chatbot-user.js ***!
  \**************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_get_chatbot_user_id__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/get-chatbot-user-id */ './node_modules/BlueDarwinJS/src/helpers/get-chatbot-user-id.js'
            );

          var getChatbotUser = function getChatbotUser(id) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            var state =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            return http.get(
              'am_client_users?client_user_id='.concat(
                Object(
                  BlueDarwinJS_src_helpers_get_chatbot_user_id__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ]
                )(state)
              )
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getChatbotUser;

          /***/
        },

      /***/ './src/helpers/rest-api/get-intent.js':
        /*!********************************************!*\
  !*** ./src/helpers/rest-api/get-intent.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );

          var getIntent = function getIntent(id) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.get('am_intents/'.concat(id));
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getIntent;

          /***/
        },

      /***/ './src/helpers/rest-api/get-module.js':
        /*!********************************************!*\
  !*** ./src/helpers/rest-api/get-module.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_app_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/app-constants */ './node_modules/BlueDarwinJS/src/app-constants.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );

          var getModule = function getModule(id) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var state =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ]();
            return http.get(
              'am_modules/'.concat(
                id ||
                  state.get(
                    BlueDarwinJS_src_app_constants__WEBPACK_IMPORTED_MODULE_0__[
                      'default'
                    ].STATES.HAS_MODULE
                  )
              )
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getModule;

          /***/
        },

      /***/ './src/helpers/rest-api/get-modules.js':
        /*!*********************************************!*\
  !*** ./src/helpers/rest-api/get-modules.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );

          var getModules = function getModules() {
            var http =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.get('am_modules');
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getModules;

          /***/
        },

      /***/ './src/helpers/rest-api/get-or-create-chatbot-session.js':
        /*!***************************************************************!*\
  !*** ./src/helpers/rest-api/get-or-create-chatbot-session.js ***!
  \***************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var _get_session__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./get-session */ './src/helpers/rest-api/get-session.js'
            );

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          /*
const getSession = require("./get-session");
const createSession = require("./create-session");
const Response = require("../../utils/response");
*/

          var getOrCreateChatbotSession = /*#__PURE__*/ (function () {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                var response,
                  session,
                  _args = arguments;
                return regeneratorRuntime.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          response =
                            _args.length > 0 && _args[0] !== undefined
                              ? _args[0]
                              : new BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_2__[
                                  'default'
                                ]();
                          _context.prev = 1;
                          _context.next = 4;
                          return Object(
                            _get_session__WEBPACK_IMPORTED_MODULE_3__['default']
                          )();

                        case 4:
                          session = _context.sent;

                          if (!session || 0 === session.length) {
                            session = false;
                          }

                          return _context.abrupt('return', session[0]);

                        case 9:
                          _context.prev = 9;
                          _context.t0 = _context['catch'](1);
                          throw BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_2__[
                            'default'
                          ].error({
                            message: 'ERROR.GET_OR_CREATE_SESSION',
                            data: _context.t0,
                          });

                        case 12:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[1, 9]]
                );
              })
            );

            return function getOrCreateChatbotSession() {
              return _ref.apply(this, arguments);
            };
          })();

          /* harmony default export */ __webpack_exports__['default'] =
            getOrCreateChatbotSession;

          /***/
        },

      /***/ './src/helpers/rest-api/get-session.js':
        /*!*********************************************!*\
  !*** ./src/helpers/rest-api/get-session.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/web.dom.iterable'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.keys'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ../../constants */ './src/constants.js');
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );

          var _buildQueryString = function _buildQueryString() {
            var state =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ]();
            var urlStr = '';
            var params = {
              am_user: 12323,
              //State.get(APP_CONSTANTS.STATES.HAS_CHATBOT_USER),
              stage:
                _constants__WEBPACK_IMPORTED_MODULE_1__['default']
                  .ENVIRONMENT_IDS[
                  state.get(
                    _constants__WEBPACK_IMPORTED_MODULE_1__['default'].STATES
                      .ENVIRONMENT
                  )
                ],
              project: state.get(
                _constants__WEBPACK_IMPORTED_MODULE_1__['default'].STATES
                  .HAS_PROJECT
              ),
              status: 'open',
            }; // Add the params to the string;

            Object.keys(params).forEach(function (key) {
              if (params[key]) {
                urlStr += '&'.concat(key, '=').concat(params[key]);
              }
            }); // Remove the first / from the url

            urlStr = urlStr.substr(1); // Add questionmark if string exists

            urlStr = urlStr.length > 0 ? '?'.concat(urlStr) : urlStr;
            return urlStr;
          };
          /**
           * [description]
           * @param  {Object} data [description]
           * @return {Promise}      [description]
           */

          var getSession = function getSession() {
            var http =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_3__[
                    'default'
                  ]();
            return http.get('am_sessions'.concat(_buildQueryString()));
          };

          /* harmony default export */ __webpack_exports__['default'] =
            getSession;

          /***/
        },

      /***/ './src/helpers/rest-api/send-logout.js':
        /*!*********************************************!*\
  !*** ./src/helpers/rest-api/send-logout.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/set-orchestrator-payload */ './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
            );

          var sendLogout = function sendLogout(text) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var state =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.post(
              'orchestrator_v3',
              BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ].v3.logout(state)
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            sendLogout;

          /***/
        },

      /***/ './src/helpers/rest-api/send-post-back.js':
        /*!************************************************!*\
  !*** ./src/helpers/rest-api/send-post-back.js ***!
  \************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/set-orchestrator-payload */ './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
            );

          var sendPostBack = function sendPostBack(postback) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var state =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.post(
              'orchestrator_v3',
              BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ].v3.postBack(postback, state)
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            sendPostBack;

          /***/
        },

      /***/ './src/helpers/rest-api/send-reset.js':
        /*!********************************************!*\
  !*** ./src/helpers/rest-api/send-reset.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/set-orchestrator-payload */ './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
            );

          var sendStartConversation = function sendStartConversation() {
            var http =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var state =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            var payload =
              BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ].v3.text('olá', state);
            payload.context_variables = payload.context_variables || {};
            payload.context_variables.actions =
              payload.context_variables.actions || {};
            payload.context_variables.actions.close_session =
              payload.context_variables.actions.close_session || {};
            payload.context_variables.actions.close_session.enabled = true;
            delete payload.input;
            delete payload.auth.stage;
            delete payload.context_variables.extracted_entities;
            return http.post('orchestrator_v3', payload);
          };

          /* harmony default export */ __webpack_exports__['default'] =
            sendStartConversation;

          /***/
        },

      /***/ './src/helpers/rest-api/send-start-conversation.js':
        /*!*********************************************************!*\
  !*** ./src/helpers/rest-api/send-start-conversation.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/set-orchestrator-payload */ './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
            );

          var sendStartConversation = function sendStartConversation() {
            var http =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var state =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            var payload =
              BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ].v3.text('start', state);
            payload.input = null;
            return http.post('orchestrator_v3', payload);
          };

          /* harmony default export */ __webpack_exports__['default'] =
            sendStartConversation;

          /***/
        },

      /***/ './src/helpers/rest-api/send-text.js':
        /*!*******************************************!*\
  !*** ./src/helpers/rest-api/send-text.js ***!
  \*******************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/set-orchestrator-payload */ './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
            );

          var sendText = function sendText(text) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var state =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.post(
              'orchestrator_v3',
              BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ].v3.text(text, state)
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            sendText;

          /***/
        },

      /***/ './src/helpers/rest-api/send-voice.js':
        /*!********************************************!*\
  !*** ./src/helpers/rest-api/send-voice.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/set-orchestrator-payload */ './node_modules/BlueDarwinJS/src/helpers/set-orchestrator-payload.js'
            );

          var sendVoice = function sendVoice(voice) {
            var http =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ]();
            var state =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.post(
              'orchestrator_v3',
              BlueDarwinJS_src_helpers_set_orchestrator_payload__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ].v3.voice(voice, state)
            );
          };

          /* harmony default export */ __webpack_exports__['default'] =
            sendVoice;

          /***/
        },

      /***/ './src/helpers/rest-api/set-chatbot-user-avatar.js':
        /*!*********************************************************!*\
  !*** ./src/helpers/rest-api/set-chatbot-user-avatar.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /**
           * Generates a new chatbot user
           * @param  {String} username [description]
           * @return {Promise|ChatbotUserModel}      [description]
           */

          var setChatbotUserAvatar = function setChatbotUserAvatar(
            id,
            username
          ) {
            var http =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.post('am_client_users/'.concat(id), {
              user_settings: {
                avatar: avatar,
              },
            });
          };

          /* harmony default export */ __webpack_exports__['default'] =
            setChatbotUserAvatar;

          /***/
        },

      /***/ './src/helpers/rest-api/set-chatbot-user-name.js':
        /*!*******************************************************!*\
  !*** ./src/helpers/rest-api/set-chatbot-user-name.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );
          /**
           * Generates a new chatbot user
           * @param  {String} username [description]
           * @return {Promise|ChatbotUserModel}      [description]
           */

          var setChatbotUserName = function setChatbotUserName(id, username) {
            var http =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : new BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]();
            return http.post('am_client_users/'.concat(id), {
              user_settings: {
                username: username,
              },
            });
          };

          /* harmony default export */ __webpack_exports__['default'] =
            setChatbotUserName;

          /***/
        },

      /***/ './src/helpers/signature.js':
        /*!**********************************!*\
  !*** ./src/helpers/signature.js ***!
  \**********************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function () {
              return signature;
            }
          );
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.regexp.replace'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/web.dom.iterable'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.keys'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.fill'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.slice'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();

          /**
           * capitalizeFirstLetter
           * Capitalizes the first letter of a string
           *
           * @param  {String} string
           * @return {String}
           */
          function capitalizeFirstLetter() {
            var string =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : '';
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          /**
           * createString
           * Ceates a string with a defined length and filled with content on it's white splace
           *
           * @param  {String} string
           * @param {Integer} length
           * @param {String} fill
           * @return {String}
           */

          function createString() {
            var string =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : '';
            var length =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : 0;
            var fill =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : '';
            var strLen = string.length;
            var remainingLength = length - strLen;
            fill = new Array(remainingLength).fill(fill).join('');
            return ''.concat(string, ' ').concat(fill);
          }
          /**
           * logLine
           * Console.logs the output with a defined format
           *
           * @param  {String} string
           * @param {Integer} length
           * @param {String} fill
           * @return {String}
           */

          function logLine() {
            var string =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : '';
            var distanceStart =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : ' ';
            var distanceEnd =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : '  ';
            console.log(
              '|'.concat(distanceStart).concat(string).concat(distanceEnd, '|')
            );
          }
          /**
           * Generate Application Signature
           * Logs the signature on app boot;
           * @param  {String} TITLE     App title
           * @param  {Object} INFO = {} Key value pair object {string:string}
           * @return {Void}
           */

          function signature(TITLE) {
            var INFO =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var maxLength = [0, 0];
            var totalLength;
            var LABELS = [];
            var DESCRIPTIONS = []; // Get labels and descriptions + the maximum label/description length

            Object.keys(INFO).forEach(function (key) {
              var label = capitalizeFirstLetter(
                key.toLowerCase().replace(/[_-]/g, ' ').trim()
              );
              var description = INFO[key];
              LABELS.push(label);
              DESCRIPTIONS.push(description);
              if (label.length > maxLength[0]) maxLength[0] = label.length;
              if (description.length > maxLength[1])
                maxLength[1] = description.length;
            }); // Add distances

            maxLength[0] = maxLength[0] + 4;
            maxLength[1] = maxLength[1] + 3; // Get the total length

            totalLength = maxLength.reduce(function (a, b) {
              return a + b;
            }, 0); // Add some space

            console.log(' '); // Log the title and top of the box

            logLine(createString(TITLE, totalLength, '-'), ' ', '   '); // Log info parameters

            for (var i = 0; i < LABELS.length; i++) {
              logLine(
                createString(LABELS[i] + ':', maxLength[0], ' ') +
                  createString(DESCRIPTIONS[i], maxLength[1], ' ')
              );
            } // Log the bottom of the box

            logLine(createString('', totalLength, '-'), ' ', '   '); // Add some space

            console.log(' ');
          }

          /***/
        },

      /***/ './src/i18n/en_EN.js':
        /*!***************************!*\
  !*** ./src/i18n/en_EN.js ***!
  \***************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          var I18N = {
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
          /* harmony default export */ __webpack_exports__['default'] = I18N;

          /***/
        },

      /***/ './src/index.js':
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! exports provided: Iframe, Api */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Iframe',
            function () {
              return Iframe;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Api',
            function () {
              return Api;
            }
          );
          /* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! regenerator-runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _webcomponents_webcomponentsjs_webcomponents_loader_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @webcomponents/webcomponentsjs/webcomponents-loader.js */ './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'
            );
          /* harmony import */ var _webcomponents_webcomponentsjs_webcomponents_loader_js__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              _webcomponents_webcomponentsjs_webcomponents_loader_js__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _libs_iframe__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ./libs/iframe */ './src/libs/iframe.js');
          /* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! ./libs/api */ './src/libs/api.js');
          // import "whatwg-fetch";

          var Iframe = _libs_iframe__WEBPACK_IMPORTED_MODULE_2__['default'];
          var Api = _libs_api__WEBPACK_IMPORTED_MODULE_3__['default'];

          /***/
        },

      /***/ './src/libs/api.js':
        /*!*************************!*\
  !*** ./src/libs/api.js ***!
  \*************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es7.symbol.async-iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.symbol'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.reflect.construct'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.set-prototype-of'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ../constants */ './src/constants.js');
          /* harmony import */ var _components_cb_module__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../components/cb-module */ './src/components/cb-module.js'
            );
          /* harmony import */ var _helpers_rest_api_get_module__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../helpers/rest-api/get-module */ './src/helpers/rest-api/get-module.js'
            );
          /* harmony import */ var _helpers_rest_api_get_channel__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../helpers/rest-api/get-channel */ './src/helpers/rest-api/get-channel.js'
            );
          /* harmony import */ var _helpers_rest_api_get_channel_token__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../helpers/rest-api/get-channel-token */ './src/helpers/rest-api/get-channel-token.js'
            );
          /* harmony import */ var _helpers_rest_api_get_intent__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../helpers/rest-api/get-intent */ './src/helpers/rest-api/get-intent.js'
            );
          /* harmony import */ var _helpers_rest_api_get_chatbot_user__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ../helpers/rest-api/get-chatbot-user */ './src/helpers/rest-api/get-chatbot-user.js'
            );
          /* harmony import */ var _models_chatbot_user__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ../models/chatbot-user */ './src/models/chatbot-user.js'
            );
          /* harmony import */ var _components_session__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ../components/session */ './src/components/session.js'
            );
          /* harmony import */ var _chatbot__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! ../chatbot */ './src/chatbot.js');
          function _typeof(obj) {
            '@babel/helpers - typeof';
            return (
              (_typeof =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (obj) {
                      return typeof obj;
                    }
                  : function (obj) {
                      return obj &&
                        'function' == typeof Symbol &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? 'symbol'
                        : typeof obj;
                    }),
              _typeof(obj)
            );
          }

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            Object.defineProperty(subClass, 'prototype', { writable: false });
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
            return _setPrototypeOf(o, p);
          }

          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived),
                result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (_typeof(call) === 'object' || typeof call === 'function')
            ) {
              return call;
            } else if (call !== void 0) {
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            }
            return _assertThisInitialized(self);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }

          function _isNativeReflectConstruct() {
            if (typeof Reflect === 'undefined' || !Reflect.construct)
              return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === 'function') return true;
            try {
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
              return true;
            } catch (e) {
              return false;
            }
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          // import "idempotent-babel-polyfill";

          var _channels = /*#__PURE__*/ _classPrivateFieldLooseKey('channels');

          var _intent = /*#__PURE__*/ _classPrivateFieldLooseKey('intent');

          var _session = /*#__PURE__*/ _classPrivateFieldLooseKey('session');

          var _chatbotModule =
            /*#__PURE__*/ _classPrivateFieldLooseKey('chatbotModule');

          var _initGetModule =
            /*#__PURE__*/ _classPrivateFieldLooseKey('initGetModule');

          var _initGetChannels =
            /*#__PURE__*/ _classPrivateFieldLooseKey('initGetChannels');

          var _initGetIntent =
            /*#__PURE__*/ _classPrivateFieldLooseKey('initGetIntent');

          var _initGetChatbotUser =
            /*#__PURE__*/ _classPrivateFieldLooseKey('initGetChatbotUser');

          var Api = /*#__PURE__*/ (function (_Chatbot) {
            _inherits(Api, _Chatbot);

            var _super = _createSuper(Api);

            function Api() {
              var _this;

              _classCallCheck(this, Api);

              _this = _super.apply(this, arguments);
              Object.defineProperty(
                _assertThisInitialized(_this),
                _initGetChatbotUser,
                {
                  value: _initGetChatbotUser2,
                }
              );
              Object.defineProperty(
                _assertThisInitialized(_this),
                _initGetIntent,
                {
                  value: _initGetIntent2,
                }
              );
              Object.defineProperty(
                _assertThisInitialized(_this),
                _initGetChannels,
                {
                  value: _initGetChannels2,
                }
              );
              Object.defineProperty(
                _assertThisInitialized(_this),
                _initGetModule,
                {
                  value: _initGetModule2,
                }
              );
              Object.defineProperty(_assertThisInitialized(_this), _channels, {
                writable: true,
                value: [],
              });
              Object.defineProperty(_assertThisInitialized(_this), _intent, {
                writable: true,
                value: void 0,
              });
              Object.defineProperty(_assertThisInitialized(_this), _session, {
                writable: true,
                value: void 0,
              });
              Object.defineProperty(
                _assertThisInitialized(_this),
                _chatbotModule,
                {
                  writable: true,
                  value: void 0,
                }
              );

              try {
                _this.events = _this.PubSub;
                delete _this.events.emit;
                delete _this.events.off;
                delete _this.events.reset;
                delete _this.events.getEvents;

                _this.events.on('LOGOUT', function () {
                  // this.#session.reset();
                  // console.log(this.State.list());
                });
              } catch (ex) {
                console.dir(ex);
              }

              return _this;
            }

            _createClass(Api, [
              {
                key: 'boot',
                value: (function () {
                  var _boot = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
                      _chatbotUser
                    ) {
                      var rejection, amModule, conversation;
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this.setup();

                              case 3:
                                // Get the module
                                this.chatbotUser =
                                  _chatbotUser || this.chatbotUser;
                                this.State.set(
                                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ].STATES.IS_INITIALIZED,
                                  true
                                );
                                this.State.set(
                                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ].STATES.HAS_MODULE,
                                  this.module
                                );
                                this.State.set(
                                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ].STATES.HAS_CLIENT_USER_ID,
                                  this.chatbotUser
                                ); // If not logged waits for login to trigger before rendering and instanciating iframe

                                if (
                                  this.State.get(
                                    _constants__WEBPACK_IMPORTED_MODULE_2__[
                                      'default'
                                    ].STATES.IS_LOGGED_IN
                                  )
                                ) {
                                  _context.next = 10;
                                  break;
                                }

                                rejection = this.Response.ok({
                                  message:
                                    'Chatbot iframe init: Waiting for login',
                                });
                                return _context.abrupt(
                                  'return',
                                  Promise.reject(rejection)
                                );

                              case 10:
                                _context.next = 12;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _initGetModule
                                )[_initGetModule]();

                              case 12:
                                amModule = _context.sent;
                                _context.next = 15;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _initGetChannels
                                )[_initGetChannels](amModule);

                              case 15:
                                _context.next = 17;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _initGetIntent
                                )[_initGetIntent](amModule);

                              case 17:
                                _context.next = 19;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _initGetChatbotUser
                                )[_initGetChatbotUser]();

                              case 19:
                                _classPrivateFieldLooseBase(this, _session)[
                                  _session
                                ] =
                                  new _components_session__WEBPACK_IMPORTED_MODULE_10__[
                                    'default'
                                  ](
                                    amModule,
                                    _constants__WEBPACK_IMPORTED_MODULE_2__[
                                      'default'
                                    ].STATES.HAS_USER
                                  );
                                _context.next = 22;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _session
                                )[_session].getConversation();

                              case 22:
                                conversation = _context.sent;
                                this.State.set(
                                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ].STATES.API_READY,
                                  true
                                );
                                this.PubSub.emit(
                                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ].EVENTS.API_READY
                                );
                                return _context.abrupt(
                                  'return',
                                  Promise.resolve(conversation)
                                );

                              case 28:
                                _context.prev = 28;
                                _context.t0 = _context['catch'](0);
                                this.PubSub.emit(
                                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ].EVENTS.API_FAIL
                                ); // Return as promise

                                return _context.abrupt(
                                  'return',
                                  Promise.reject(
                                    this.Response.error({
                                      message: _context.t0,
                                    })
                                  )
                                );

                              case 32:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this,
                        [[0, 28]]
                      );
                    })
                  );

                  function boot(_x) {
                    return _boot.apply(this, arguments);
                  }

                  return boot;
                })(),
              },
              {
                key: 'getMeta',
                value: function getMeta() {
                  return _classPrivateFieldLooseBase(this, _chatbotModule)[
                    _chatbotModule
                  ].getMeta();
                },
              },
              {
                key: 'getConversation',
                value: function getConversation(data) {
                  return this.State.get(
                    _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                      .CONVERSATION
                  );
                },
              },
              {
                key: 'sendText',
                value: function sendText(data) {
                  return _classPrivateFieldLooseBase(this, _session)[
                    _session
                  ].sendText(data);
                },
              },
              {
                key: 'sendVoice',
                value: function sendVoice(data) {
                  return _classPrivateFieldLooseBase(this, _session)[
                    _session
                  ].sendVoice(data);
                },
              },
              {
                key: 'sendPostBack',
                value: function sendPostBack(data) {
                  return _classPrivateFieldLooseBase(this, _session)[
                    _session
                  ].sendPostBack(data);
                },
              },
              {
                key: 'startConversation',
                value: function startConversation() {
                  return _classPrivateFieldLooseBase(this, _session)[
                    _session
                  ].sendStartConversation();
                },
              },
              {
                key: 'resetConversation',
                value: function resetConversation() {
                  return _classPrivateFieldLooseBase(this, _session)[
                    _session
                  ].reset();
                },
              },
            ]);

            return Api;
          })(_chatbot__WEBPACK_IMPORTED_MODULE_11__['default']);

          function _initGetModule2() {
            return _initGetModule3.apply(this, arguments);
          }

          function _initGetModule3() {
            _initGetModule3 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
                var amModule;
                return regeneratorRuntime.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          _context2.prev = 0;
                          _context2.next = 3;
                          return Object(
                            _helpers_rest_api_get_module__WEBPACK_IMPORTED_MODULE_4__[
                              'default'
                            ]
                          )(this.module, this.Http, this.State);

                        case 3:
                          amModule = _context2.sent;

                          if (!(!amModule || amModule === 'item not found')) {
                            _context2.next = 6;
                            break;
                          }

                          throw 'ERROR.MODULE_NOT_FOUND';

                        case 6:
                          this.State.set(
                            _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                              .STATES.MODEL_MODULE,
                            amModule
                          );
                          this.State.set(
                            _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                              .STATES.HAS_PROJECT,
                            amModule.relationships.project &&
                              amModule.relationships.project.data &&
                              amModule.relationships.project.data.id
                              ? amModule.relationships.project.data.id
                              : undefined
                          );
                          _classPrivateFieldLooseBase(this, _chatbotModule)[
                            _chatbotModule
                          ] =
                            new _components_cb_module__WEBPACK_IMPORTED_MODULE_3__[
                              'default'
                            ](amModule);
                          return _context2.abrupt('return', amModule);

                        case 12:
                          _context2.prev = 12;
                          _context2.t0 = _context2['catch'](0);
                          throw _context2.t0;

                        case 15:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  this,
                  [[0, 12]]
                );
              })
            );
            return _initGetModule3.apply(this, arguments);
          }

          function _initGetChannels2(_x2) {
            return _initGetChannels3.apply(this, arguments);
          }

          function _initGetChannels3() {
            _initGetChannels3 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(
                amModule
              ) {
                var i, channelTokenId, channelToken, channel;
                return regeneratorRuntime.wrap(
                  function _callee3$(_context3) {
                    while (1) {
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          _context3.prev = 0;
                          i = 0;

                        case 2:
                          if (
                            !(
                              i <
                              amModule.relationships.am_channel_tokens.data
                                .length
                            )
                          ) {
                            _context3.next = 14;
                            break;
                          }

                          channelTokenId =
                            amModule.relationships.am_channel_tokens.data[i].id;
                          _context3.next = 6;
                          return Object(
                            _helpers_rest_api_get_channel_token__WEBPACK_IMPORTED_MODULE_6__[
                              'default'
                            ]
                          )(channelTokenId, this.Http);

                        case 6:
                          channelToken = _context3.sent;
                          _context3.next = 9;
                          return Object(
                            _helpers_rest_api_get_channel__WEBPACK_IMPORTED_MODULE_5__[
                              'default'
                            ]
                          )(channelToken.relationships.am_channel.data.id);

                        case 9:
                          channel = _context3.sent;

                          if (channel.attributes.label === 'BlueDarwin') {
                            _classPrivateFieldLooseBase(this, _channels)[
                              _channels
                            ].push(channel.attributes);

                            this.State.set(
                              _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                                .STATES.CHANNEL_TOKEN,
                              channelToken.attributes.token
                            );
                          }

                        case 11:
                          i++;
                          _context3.next = 2;
                          break;

                        case 14:
                          this.State.set(
                            _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                              .STATES.MODEL_CHANNELS,
                            _classPrivateFieldLooseBase(this, _channels)[
                              _channels
                            ]
                          );
                          _context3.next = 20;
                          break;

                        case 17:
                          _context3.prev = 17;
                          _context3.t0 = _context3['catch'](0);
                          throw _context3.t0;

                        case 20:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  },
                  _callee3,
                  this,
                  [[0, 17]]
                );
              })
            );
            return _initGetChannels3.apply(this, arguments);
          }

          function _initGetIntent2(_x3) {
            return _initGetIntent3.apply(this, arguments);
          }

          function _initGetIntent3() {
            _initGetIntent3 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(
                amModule
              ) {
                var intent;
                return regeneratorRuntime.wrap(
                  function _callee4$(_context4) {
                    while (1) {
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          _context4.prev = 0;
                          _context4.next = 3;
                          return Object(
                            _helpers_rest_api_get_intent__WEBPACK_IMPORTED_MODULE_7__[
                              'default'
                            ]
                          )(
                            amModule.relationships.am_intents.data.id,
                            this.Http
                          );

                        case 3:
                          intent = _context4.sent;
                          this.State.set(
                            _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                              .STATES.MODEL_INTENT,
                            intent
                          );
                          _classPrivateFieldLooseBase(this, _intent)[_intent] =
                            intent;
                          return _context4.abrupt('return', intent);

                        case 9:
                          _context4.prev = 9;
                          _context4.t0 = _context4['catch'](0);
                          throw _context4.t0;

                        case 12:
                        case 'end':
                          return _context4.stop();
                      }
                    }
                  },
                  _callee4,
                  this,
                  [[0, 9]]
                );
              })
            );
            return _initGetIntent3.apply(this, arguments);
          }

          function _initGetChatbotUser2() {
            return _initGetChatbotUser3.apply(this, arguments);
          }

          function _initGetChatbotUser3() {
            _initGetChatbotUser3 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
                var chatbotUser;
                return regeneratorRuntime.wrap(
                  function _callee5$(_context5) {
                    while (1) {
                      switch ((_context5.prev = _context5.next)) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return Object(
                            _helpers_rest_api_get_chatbot_user__WEBPACK_IMPORTED_MODULE_8__[
                              'default'
                            ]
                          )();

                        case 3:
                          chatbotUser = _context5.sent;

                          try {
                            this.State.set(
                              _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                                .STATES.HAS_CHATBOT_USER,
                              chatbotUser[0].relationships.am_users.data.id
                            );

                            _classPrivateFieldLooseBase(this, _chatbotModule)[
                              _chatbotModule
                            ].setMetaUser(chatbotUser[0].attributes);
                          } catch (_ex) {
                            _classPrivateFieldLooseBase(this, _chatbotModule)[
                              _chatbotModule
                            ].setMetaUser(
                              Object(
                                _models_chatbot_user__WEBPACK_IMPORTED_MODULE_9__[
                                  'default'
                                ]
                              )()
                            ); // Silence is golden....
                          }

                          return _context5.abrupt('return', chatbotUser);

                        case 8:
                          _context5.prev = 8;
                          _context5.t0 = _context5['catch'](0);
                          throw _context5.t0;

                        case 11:
                        case 'end':
                          return _context5.stop();
                      }
                    }
                  },
                  _callee5,
                  this,
                  [[0, 8]]
                );
              })
            );
            return _initGetChatbotUser3.apply(this, arguments);
          }

          /* harmony default export */ __webpack_exports__['default'] = Api;

          /***/
        },

      /***/ './src/libs/iframe.js':
        /*!****************************!*\
  !*** ./src/libs/iframe.js ***!
  \****************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es7.symbol.async-iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.symbol'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.reflect.construct'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.set-prototype-of'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ../constants */ './src/constants.js');
          /* harmony import */ var _chatbot__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! ../chatbot */ './src/chatbot.js');
          /* harmony import */ var _utils_iframe__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! ../utils/iframe */ './src/utils/iframe.js');
          /* harmony import */ var BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/post-message */ './node_modules/BlueDarwinJS/src/helpers/post-message.js'
            );
          /* harmony import */ var _dom_custom_elements_cognus_chatbot_button__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../dom/custom-elements/cognus-chatbot-button */ './src/dom/custom-elements/cognus-chatbot-button.js'
            );
          function _typeof(obj) {
            '@babel/helpers - typeof';
            return (
              (_typeof =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (obj) {
                      return typeof obj;
                    }
                  : function (obj) {
                      return obj &&
                        'function' == typeof Symbol &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? 'symbol'
                        : typeof obj;
                    }),
              _typeof(obj)
            );
          }

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            Object.defineProperty(subClass, 'prototype', { writable: false });
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
            return _setPrototypeOf(o, p);
          }

          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived),
                result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (_typeof(call) === 'object' || typeof call === 'function')
            ) {
              return call;
            } else if (call !== void 0) {
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            }
            return _assertThisInitialized(self);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }

          function _isNativeReflectConstruct() {
            if (typeof Reflect === 'undefined' || !Reflect.construct)
              return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === 'function') return true;
            try {
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
              return true;
            } catch (e) {
              return false;
            }
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          // import "idempotent-babel-polyfill";
          // import "../polyfills/web-components";

          var _options = /*#__PURE__*/ _classPrivateFieldLooseKey('options');

          var iFrame = /*#__PURE__*/ (function (_Chatbot) {
            _inherits(iFrame, _Chatbot);

            var _super = _createSuper(iFrame);

            function iFrame(project, apiKey, amModule) {
              var _this;

              var config =
                arguments.length > 3 && arguments[3] !== undefined
                  ? arguments[3]
                  : {
                      chatbotUser: undefined,
                    };

              _classCallCheck(this, iFrame);

              // Super constructor
              _this = _super.apply(this, arguments);
              Object.defineProperty(_assertThisInitialized(_this), _options, {
                writable: true,
                value: {},
              });
              _this.events = {
                on: BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ].recieve,
                emit: BlueDarwinJS_src_helpers_post_message__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ].send,
              };
              return _this;
            }

            _createClass(iFrame, [
              {
                key: 'render',
                value: (function () {
                  var _render = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                      var iframeSetup,
                        rejection,
                        _args = arguments;
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                iframeSetup =
                                  _args.length > 0 && _args[0] !== undefined
                                    ? _args[0]
                                    : {};
                                _context.prev = 1;
                                _context.next = 4;
                                return this.setup();

                              case 4:
                                _classPrivateFieldLooseBase(this, _options)[
                                  _options
                                ] =
                                  _classPrivateFieldLooseBase(this, _options)[
                                    _options
                                  ] || iframeSetup;
                                this.State.set(
                                  _constants__WEBPACK_IMPORTED_MODULE_2__[
                                    'default'
                                  ].STATES.IS_INITIALIZED,
                                  true
                                ); // If not logged waits for login to trigger before rendering and instanciating iframe

                                if (
                                  this.State.get(
                                    _constants__WEBPACK_IMPORTED_MODULE_2__[
                                      'default'
                                    ].STATES.IS_LOGGED_IN
                                  )
                                ) {
                                  _context.next = 9;
                                  break;
                                }

                                rejection = this.Response.ok({
                                  message:
                                    'Chatbot iframe init: Waiting for login',
                                });
                                return _context.abrupt(
                                  'return',
                                  Promise.reject(rejection)
                                );

                              case 9:
                                // Render the iframe
                                new _utils_iframe__WEBPACK_IMPORTED_MODULE_4__[
                                  'default'
                                ](this.config).render(iframeSetup);
                                return _context.abrupt(
                                  'return',
                                  Promise.resolve()
                                );

                              case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](1);
                                return _context.abrupt(
                                  'return',
                                  Promise.reject(
                                    this.Response.error({
                                      data: _context.t0,
                                    })
                                  )
                                );

                              case 16:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this,
                        [[1, 13]]
                      );
                    })
                  );

                  function render() {
                    return _render.apply(this, arguments);
                  }

                  return render;
                })(),
              },
              {
                key: 'listDefaultStyles',
                value: function listDefaultStyles() {
                  return _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                    .DEFAULTS.IFRAME_CSS;
                },
              },
              {
                key: 'getIframeElement',
                value: function getIframeElement() {
                  return this.State.get(
                    _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                      .ELEMENT_IFRAME
                  );
                },
              },
            ]);

            return iFrame;
          })(_chatbot__WEBPACK_IMPORTED_MODULE_3__['default']);

          /* harmony default export */ __webpack_exports__['default'] = iFrame;

          /***/
        },

      /***/ './src/models/chatbot-user.js':
        /*!************************************!*\
  !*** ./src/models/chatbot-user.js ***!
  \************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.assign'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();

          var ChatbotUserModel = function ChatbotUserModel() {
            // Parametros default deste modelo
            var model = {
              avatar: undefined,
              name: undefined,
            };
            return Object.assign({}, model);
          };

          /* harmony default export */ __webpack_exports__['default'] =
            ChatbotUserModel;

          /***/
        },

      /***/ './src/models/session.js':
        /*!*******************************!*\
  !*** ./src/models/session.js ***!
  \*******************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.assign'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();

          var SessionModel = function SessionModel() {
            // Parametros default deste modelo
            var model = {};
            return Object.assign({}, model);
          };

          /* harmony default export */ __webpack_exports__['default'] =
            SessionModel;

          /***/
        },

      /***/ './src/utils/communication.js':
        /*!************************************!*\
  !*** ./src/utils/communication.js ***!
  \************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ../constants */ './src/constants.js');
          /* harmony import */ var _helpers_rest_api_send_text__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../helpers/rest-api/send-text */ './src/helpers/rest-api/send-text.js'
            );
          /* harmony import */ var _helpers_rest_api_send_voice__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ../helpers/rest-api/send-voice */ './src/helpers/rest-api/send-voice.js'
            );
          /* harmony import */ var _helpers_rest_api_send_post_back__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ../helpers/rest-api/send-post-back */ './src/helpers/rest-api/send-post-back.js'
            );
          /* harmony import */ var _helpers_rest_api_send_reset__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ../helpers/rest-api/send-reset */ './src/helpers/rest-api/send-reset.js'
            );
          /* harmony import */ var _helpers_rest_api_send_start_conversation__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ../helpers/rest-api/send-start-conversation */ './src/helpers/rest-api/send-start-conversation.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/dependencies/inject-dependencies */ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/http */ './node_modules/BlueDarwinJS/src/services/http.js'
            );

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          var StateKey =
            _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
              .CONVERSATION;
          var instance;

          var _extractConversationFromResponse =
            /*#__PURE__*/ _classPrivateFieldLooseKey(
              'extractConversationFromResponse'
            );

          var _updateConversationEvent =
            /*#__PURE__*/ _classPrivateFieldLooseKey('updateConversationEvent');

          var _parseDataForConversation =
            /*#__PURE__*/ _classPrivateFieldLooseKey(
              'parseDataForConversation'
            );

          var _middlewareIsApiInitiated =
            /*#__PURE__*/ _classPrivateFieldLooseKey(
              'middlewareIsApiInitiated'
            );

          var _middlewareBefore =
            /*#__PURE__*/ _classPrivateFieldLooseKey('middlewareBefore');

          var _middleware =
            /*#__PURE__*/ _classPrivateFieldLooseKey('middleware');

          var Communication = /*#__PURE__*/ (function () {
            function Communication() {
              _classCallCheck(this, Communication);

              Object.defineProperty(this, _middleware, {
                value: _middleware2,
              });
              Object.defineProperty(this, _middlewareBefore, {
                value: _middlewareBefore2,
              });
              Object.defineProperty(this, _middlewareIsApiInitiated, {
                value: _middlewareIsApiInitiated2,
              });
              Object.defineProperty(this, _parseDataForConversation, {
                value: _parseDataForConversation2,
              });
              Object.defineProperty(this, _updateConversationEvent, {
                value: _updateConversationEvent2,
              });
              Object.defineProperty(this, _extractConversationFromResponse, {
                value: _extractConversationFromResponse2,
              });

              if (!instance) {
                Object(
                  BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_8__[
                    'default'
                  ]
                )(
                  [
                    BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_9__[
                      'default'
                    ],
                    BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_10__[
                      'default'
                    ],
                    BlueDarwinJS_src_services_http__WEBPACK_IMPORTED_MODULE_11__[
                      'default'
                    ],
                  ],
                  this
                );
                instance = this;
              }

              return instance;
            }
            /**
             * Gets the data that's important for this conversation
             * @param {OrchestratorResponse}
             * @return {ConverationOutput}
             */

            _createClass(Communication, [
              {
                key: 'sendText',
                value:
                  /**
                   * Sends text, voice or postback replys
                   * @param  {[type]}  data [description]
                   * @return {Promise}      [description]
                   */
                  (function () {
                    var _sendText = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
                        data
                      ) {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return _classPrivateFieldLooseBase(
                                    this,
                                    _middleware
                                  )[_middleware]('sendText', data);

                                case 2:
                                  return _context.abrupt(
                                    'return',
                                    _context.sent
                                  );

                                case 3:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      })
                    );

                    function sendText(_x) {
                      return _sendText.apply(this, arguments);
                    }

                    return sendText;
                  })(),
              },
              {
                key: 'sendVoice',
                value: (function () {
                  var _sendVoice = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(
                      data
                    ) {
                      return regeneratorRuntime.wrap(
                        function _callee2$(_context2) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                _context2.next = 2;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _middleware
                                )[_middleware]('sendVoice', data);

                              case 2:
                                return _context2.abrupt(
                                  'return',
                                  _context2.sent
                                );

                              case 3:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        },
                        _callee2,
                        this
                      );
                    })
                  );

                  function sendVoice(_x2) {
                    return _sendVoice.apply(this, arguments);
                  }

                  return sendVoice;
                })(),
              },
              {
                key: 'sendPostBack',
                value: (function () {
                  var _sendPostBack = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(
                      data
                    ) {
                      return regeneratorRuntime.wrap(
                        function _callee3$(_context3) {
                          while (1) {
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                _context3.next = 2;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _middleware
                                )[_middleware]('sendPostBack', data);

                              case 2:
                                return _context3.abrupt(
                                  'return',
                                  _context3.sent
                                );

                              case 3:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        },
                        _callee3,
                        this
                      );
                    })
                  );

                  function sendPostBack(_x3) {
                    return _sendPostBack.apply(this, arguments);
                  }

                  return sendPostBack;
                })(),
              },
              {
                key: 'sendStartConversation',
                value: (function () {
                  var _sendStartConversation = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
                      return regeneratorRuntime.wrap(
                        function _callee4$(_context4) {
                          while (1) {
                            switch ((_context4.prev = _context4.next)) {
                              case 0:
                                _context4.next = 2;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _middleware
                                )[_middleware]('sendStartConversation');

                              case 2:
                                return _context4.abrupt(
                                  'return',
                                  _context4.sent
                                );

                              case 3:
                              case 'end':
                                return _context4.stop();
                            }
                          }
                        },
                        _callee4,
                        this
                      );
                    })
                  );

                  function sendStartConversation() {
                    return _sendStartConversation.apply(this, arguments);
                  }

                  return sendStartConversation;
                })(),
              },
              {
                key: 'sendReset',
                value: (function () {
                  var _sendReset = _asyncToGenerator(
                    /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
                      return regeneratorRuntime.wrap(
                        function _callee5$(_context5) {
                          while (1) {
                            switch ((_context5.prev = _context5.next)) {
                              case 0:
                                _context5.next = 2;
                                return _classPrivateFieldLooseBase(
                                  this,
                                  _middleware
                                )[_middleware]('sendReset');

                              case 2:
                                return _context5.abrupt(
                                  'return',
                                  _context5.sent
                                );

                              case 3:
                              case 'end':
                                return _context5.stop();
                            }
                          }
                        },
                        _callee5,
                        this
                      );
                    })
                  );

                  function sendReset() {
                    return _sendReset.apply(this, arguments);
                  }

                  return sendReset;
                })(),
              },
            ]);

            return Communication;
          })();

          function _extractConversationFromResponse2(_response) {
            var data;

            try {
              if (_response.system) {
                data = _response;
              } else {
                data = _response.result.content;
              }
            } catch (ex) {
              data = {
                text: 'error',
                type: 'direct_message',
              };
            }

            return {
              type: 'output',
              data: data,
            };
          }

          function _updateConversationEvent2(data) {
            this.PubSub.emit(
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].EVENTS
                .CONVERSATION_UPDATE,
              data
            );
          }

          function _parseDataForConversation2(action, data) {
            data = {
              type: 'input',
              data: {
                type: '',
                content: data,
              },
            };

            switch (action) {
              case 'sendText':
                data.data.type = 'text';
                break;

              case 'sendPostBack':
                data.data.type = 'postback';
                break;

              case 'sendVoice':
                data.data.type = 'voice';
                break;
            }

            return data;
          }

          function _middlewareIsApiInitiated2() {
            return this.State.get(
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                .API_READY
            );
          }

          function _middlewareBefore2(data) {
            var conversation = this.State.get(StateKey) || []; // Use set orchestrator payload sff
            //Adds object to the conversation state

            conversation.push(data);
            this.State.set(StateKey, conversation); // Send a event to the pubsub

            _classPrivateFieldLooseBase(this, _updateConversationEvent)[
              _updateConversationEvent
            ](data);

            return {
              index: conversation.length - 1,
              conversation: conversation,
            };
          }

          function _middleware2(_x4, _x5) {
            return _middleware3.apply(this, arguments);
          }

          function _middleware3() {
            _middleware3 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee6(
                action,
                data
              ) {
                var conversation, conversationBefore, _response, _conversation;

                return regeneratorRuntime.wrap(
                  function _callee6$(_context6) {
                    while (1) {
                      switch ((_context6.prev = _context6.next)) {
                        case 0:
                          if (
                            _classPrivateFieldLooseBase(
                              this,
                              _middlewareIsApiInitiated
                            )[_middlewareIsApiInitiated]()
                          ) {
                            _context6.next = 2;
                            break;
                          }

                          return _context6.abrupt(
                            'return',
                            Promise.reject(
                              Response(1, {
                                message: 'API_NOT_READY',
                              })
                            )
                          );

                        case 2:
                          // Middleware add to conversdation
                          conversationBefore = _classPrivateFieldLooseBase(
                            this,
                            _middlewareBefore
                          )[_middlewareBefore](
                            _classPrivateFieldLooseBase(
                              this,
                              _parseDataForConversation
                            )[_parseDataForConversation](action, data)
                          );
                          _context6.prev = 3;

                          if (!(action === 'sendText')) {
                            _context6.next = 8;
                            break;
                          }

                          _context6.next = 7;
                          return Object(
                            _helpers_rest_api_send_text__WEBPACK_IMPORTED_MODULE_3__[
                              'default'
                            ]
                          )(data);

                        case 7:
                          _response = _context6.sent;

                        case 8:
                          if (!(action === 'sendVoice')) {
                            _context6.next = 12;
                            break;
                          }

                          _context6.next = 11;
                          return Object(
                            _helpers_rest_api_send_voice__WEBPACK_IMPORTED_MODULE_4__[
                              'default'
                            ]
                          )(data);

                        case 11:
                          _response = _context6.sent;

                        case 12:
                          if (!(action === 'sendPostBack')) {
                            _context6.next = 16;
                            break;
                          }

                          _context6.next = 15;
                          return Object(
                            _helpers_rest_api_send_post_back__WEBPACK_IMPORTED_MODULE_5__[
                              'default'
                            ]
                          )(data);

                        case 15:
                          _response = _context6.sent;

                        case 16:
                          if (!(action === 'sendReset')) {
                            _context6.next = 20;
                            break;
                          }

                          _context6.next = 19;
                          return Object(
                            _helpers_rest_api_send_reset__WEBPACK_IMPORTED_MODULE_6__[
                              'default'
                            ]
                          )();

                        case 19:
                          _response = _context6.sent;

                        case 20:
                          if (!(action === 'sendStartConversation')) {
                            _context6.next = 24;
                            break;
                          }

                          _context6.next = 23;
                          return Object(
                            _helpers_rest_api_send_start_conversation__WEBPACK_IMPORTED_MODULE_7__[
                              'default'
                            ]
                          )(data);

                        case 23:
                          _response = _context6.sent;

                        case 24:
                          // Get what matters from the payload
                          _response = _classPrivateFieldLooseBase(
                            this,
                            _extractConversationFromResponse
                          )[_extractConversationFromResponse](_response); // Success : update the conversation state

                          conversation = this.State.get(StateKey);
                          conversation.push(_response);
                          this.State.set(StateKey, conversation);

                          _classPrivateFieldLooseBase(
                            this,
                            _updateConversationEvent
                          )[_updateConversationEvent](_response); // Return the _response to the user

                          return _context6.abrupt(
                            'return',
                            Promise.resolve(_response)
                          );

                        case 32:
                          _context6.prev = 32;
                          _context6.t0 = _context6['catch'](3);
                          // Update conversation by index and say it didnt get there ,
                          // warn users that this request isn't successfull
                          _conversation = this.State.get(StateKey);
                          _conversation[conversationBefore.index].failed = true; // Update State

                          this.State.set(StateKey, _conversation); // Send info to developer so they can handle this failure

                          this.PubSub.emit(
                            _constants__WEBPACK_IMPORTED_MODULE_2__['default']
                              .EVENTS.CONVERSATION_REPLY_FAIL,
                            {
                              index: conversationBefore.index,
                              reply: _conversation[conversationBefore.index],
                            }
                          );
                          return _context6.abrupt(
                            'return',
                            Promise.reject(_context6.t0)
                          );

                        case 39:
                        case 'end':
                          return _context6.stop();
                      }
                    }
                  },
                  _callee6,
                  this,
                  [[3, 32]]
                );
              })
            );
            return _middleware3.apply(this, arguments);
          }

          /* harmony default export */ __webpack_exports__['default'] =
            Communication;

          /***/
        },

      /***/ './src/utils/iframe.js':
        /*!*****************************!*\
  !*** ./src/utils/iframe.js ***!
  \*****************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.promise'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.regexp.replace'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.regexp.constructor'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/web.dom.iterable'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.array.iterator'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.to-string'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          !(function webpackMissingModule() {
            var e = new Error(
              "Cannot find module 'core-js/modules/es6.object.keys'"
            );
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          })();
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js'
            );
          /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ../constants */ './src/constants.js');
          /* harmony import */ var BlueDarwinJS_src_helpers_post_message_iframe_setup_client__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/post-message/iframe-setup-client */ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-client.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_post_message_iframe_setup_user__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/post-message/iframe-setup-user */ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-setup-user.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_post_message_iframe_set_debug_mode__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/post-message/iframe-set-debug-mode */ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-debug-mode.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_post_message_iframe_set_module_by_id__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/post-message/iframe-set-module-by-id */ './node_modules/BlueDarwinJS/src/helpers/post-message/iframe-set-module-by-id.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_configuration__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/configuration */ './node_modules/BlueDarwinJS/src/services/configuration.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/state */ './node_modules/BlueDarwinJS/src/services/state.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/response */ './node_modules/BlueDarwinJS/src/services/response.js'
            );
          /* harmony import */ var BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/services/pub-sub */ './node_modules/BlueDarwinJS/src/services/pub-sub.js'
            );
          /* harmony import */ var BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! BlueDarwinJS/src/helpers/dependencies/inject-dependencies */ './node_modules/BlueDarwinJS/src/helpers/dependencies/inject-dependencies.js'
            );
          /* harmony import */ var _dom_custom_elements_cognus_chatbot_button__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! ../dom/custom-elements/cognus-chatbot-button */ './src/dom/custom-elements/cognus-chatbot-button.js'
            );

          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _classPrivateFieldLooseBase(receiver, privateKey) {
            if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
              throw new TypeError(
                'attempted to use private field on non-instance'
              );
            }
            return receiver;
          }

          var id = 0;

          function _classPrivateFieldLooseKey(name) {
            return '__private_' + id++ + '_' + name;
          }

          var instanciated;

          var _parseIframeStyles =
            /*#__PURE__*/ _classPrivateFieldLooseKey('parseIframeStyles');

          var _injectCustomElement = /*#__PURE__*/ _classPrivateFieldLooseKey(
            'injectCustomElement'
          );

          var _generateIframeUrl =
            /*#__PURE__*/ _classPrivateFieldLooseKey('generateIframeUrl');

          var _addIframeToDocument = /*#__PURE__*/ _classPrivateFieldLooseKey(
            'addIframeToDocument'
          );

          var Iframe = /*#__PURE__*/ (function () {
            function Iframe() {
              _classCallCheck(this, Iframe);

              Object.defineProperty(this, _addIframeToDocument, {
                value: _addIframeToDocument2,
              });
              Object.defineProperty(this, _generateIframeUrl, {
                value: _generateIframeUrl2,
              });
              Object.defineProperty(this, _injectCustomElement, {
                value: _injectCustomElement2,
              });
              Object.defineProperty(this, _parseIframeStyles, {
                value: _parseIframeStyles2,
              });
              Object(
                BlueDarwinJS_src_helpers_dependencies_inject_dependencies__WEBPACK_IMPORTED_MODULE_11__[
                  'default'
                ]
              )(
                [
                  BlueDarwinJS_src_services_configuration__WEBPACK_IMPORTED_MODULE_7__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_state__WEBPACK_IMPORTED_MODULE_8__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_response__WEBPACK_IMPORTED_MODULE_9__[
                    'default'
                  ],
                  BlueDarwinJS_src_services_pub_sub__WEBPACK_IMPORTED_MODULE_10__[
                    'default'
                  ],
                ],
                this
              );

              _classPrivateFieldLooseBase(this, _injectCustomElement)[
                _injectCustomElement
              ]();
            }

            _createClass(Iframe, [
              {
                key: 'render',
                // #sendPostbackEventsToIframe() {
                value:
                  //   iframeSetupClient(this.State);
                  //   iframeSetupUser(this.State);
                  //   iframeSetModuleById(this.State);
                  // }
                  (function () {
                    var _render = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                        var iframeSetup,
                          _args = arguments;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  iframeSetup =
                                    _args.length > 0 && _args[0] !== undefined
                                      ? _args[0]
                                      : {};
                                  _context.prev = 1;

                                  if (instanciated) {
                                    _context.next = 6;
                                    break;
                                  }

                                  _context.next = 5;
                                  return _classPrivateFieldLooseBase(
                                    this,
                                    _addIframeToDocument
                                  )[_addIframeToDocument](iframeSetup);

                                case 5:
                                  instanciated = true;

                                case 6:
                                  return _context.abrupt(
                                    'return',
                                    this.Response.ok({
                                      message: 'IFRAME_RENDER_SUCCESS',
                                    })
                                  );

                                case 9:
                                  _context.prev = 9;
                                  _context.t0 = _context['catch'](1);
                                  throw this.Response.error({
                                    message: 'IFRAME_RENDER_FAIL',
                                    data: _context.t0,
                                  });

                                case 12:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[1, 9]]
                        );
                      })
                    );

                    function render() {
                      return _render.apply(this, arguments);
                    }

                    return render;
                  })(),
              },
            ]);

            return Iframe;
          })();

          function _parseIframeStyles2() {
            var config =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            var iframe = arguments.length > 1 ? arguments[1] : undefined;
            var styles =
              _constants__WEBPACK_IMPORTED_MODULE_2__['default'].DEFAULTS
                .IFRAME_CSS; // Bind default styles

            Object.keys(styles).forEach(function (key) {
              iframe.style[key] = styles[key];
            });
            return styles;
          }

          function _injectCustomElement2() {
            if (
              !window.customElements.get(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].BUTTON_KEY
              )
            ) {
              window.customElements.define(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].BUTTON_KEY,
                _dom_custom_elements_cognus_chatbot_button__WEBPACK_IMPORTED_MODULE_12__[
                  'default'
                ]
              );
            }
          }

          function _generateIframeUrl2(iframe) {
            iframe.src = this.Configuration.url.iframe;

            if (
              this.State.get(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                  .APPLICATION_DISPLAY
              )
            ) {
              var find = '#';
              var regex = new RegExp(find, 'g');
              var displayUrl = JSON.stringify(
                this.State.get(
                  _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                    .APPLICATION_DISPLAY
                )
              ).replace(regex, '');
              iframe.src += '?display='.concat(displayUrl);
            } else if (
              this.State.get(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                  .APPLICATION_DISPLAY
              )
            ) {
              // TODO THEMES
            }
          }

          function _addIframeToDocument2() {
            var _this = this;

            var config =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            // Counter for iframe rerady state attempts
            var _counter = 0;
            var _limitAttempts = 100; // Return a promise

            return new Promise(function (res, rej) {
              var iframe = document.createElement('cognus-chatbot-button'); // iframe.allow = "microphone";

              _classPrivateFieldLooseBase(_this, _generateIframeUrl)[
                _generateIframeUrl
              ](iframe); // If no iframe throw error

              if (!iframe)
                return console.warn(
                  _this.Response.error({
                    message:
                      "Can't add a iframe to document because there's no element",
                  })
                );

              _classPrivateFieldLooseBase(_this, _parseIframeStyles)[
                _parseIframeStyles
              ](config, iframe); // // Update document and append iframe

              document.body.appendChild(iframe); // Append the iframe to the states so the PostMessage can do it's magic

              _this.State.set(
                _constants__WEBPACK_IMPORTED_MODULE_2__['default'].STATES
                  .ELEMENT_IFRAME,
                iframe.$iframe
              );
            });
          }

          /* harmony default export */ __webpack_exports__['default'] = Iframe;

          /***/
        },

      /******/
    }
  );
});
//# sourceMappingURL=index.development.js.map
