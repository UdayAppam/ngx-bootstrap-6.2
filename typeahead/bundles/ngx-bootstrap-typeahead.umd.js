(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/positioning'), require('@angular/animations'), require('@angular/forms'), require('rxjs'), require('ngx-bootstrap/component-loader'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/typeahead', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/positioning', '@angular/animations', '@angular/forms', 'rxjs', 'ngx-bootstrap/component-loader', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].typeahead = {}), global.ng.core, global.utils, global.positioning, global.ng.animations, global.ng.forms, global.rxjs, global.componentLoader, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, utils, positioning, animations, forms, rxjs, componentLoader, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    /** @type {?} */
    var latinMap = {
        '??': 'A',
        '??': 'A',
        '???': 'A',
        '???': 'A',
        '???': 'A',
        '???': 'A',
        '???': 'A',
        '??': 'A',
        '??': 'A',
        '???': 'A',
        '???': 'A',
        '???': 'A',
        '???': 'A',
        '???': 'A',
        '??': 'A',
        '??': 'A',
        '??': 'A',
        '??': 'A',
        '???': 'A',
        '??': 'A',
        '??': 'A',
        '???': 'A',
        '??': 'A',
        '??': 'A',
        '??': 'A',
        '??': 'A',
        '??': 'A',
        '???': 'A',
        '??': 'A',
        '??': 'A',
        '???': 'AA',
        '??': 'AE',
        '??': 'AE',
        '??': 'AE',
        '???': 'AO',
        '???': 'AU',
        '???': 'AV',
        '???': 'AV',
        '???': 'AY',
        '???': 'B',
        '???': 'B',
        '??': 'B',
        '???': 'B',
        '??': 'B',
        '??': 'B',
        '??': 'C',
        '??': 'C',
        '??': 'C',
        '???': 'C',
        '??': 'C',
        '??': 'C',
        '??': 'C',
        '??': 'C',
        '??': 'D',
        '???': 'D',
        '???': 'D',
        '???': 'D',
        '???': 'D',
        '??': 'D',
        '???': 'D',
        '??': 'D',
        '??': 'D',
        '??': 'D',
        '??': 'D',
        '??': 'DZ',
        '??': 'DZ',
        '??': 'E',
        '??': 'E',
        '??': 'E',
        '??': 'E',
        '???': 'E',
        '??': 'E',
        '???': 'E',
        '???': 'E',
        '???': 'E',
        '???': 'E',
        '???': 'E',
        '???': 'E',
        '??': 'E',
        '??': 'E',
        '???': 'E',
        '??': 'E',
        '??': 'E',
        '???': 'E',
        '??': 'E',
        '??': 'E',
        '???': 'E',
        '???': 'E',
        '??': 'E',
        '??': 'E',
        '???': 'E',
        '???': 'E',
        '???': 'ET',
        '???': 'F',
        '??': 'F',
        '??': 'G',
        '??': 'G',
        '??': 'G',
        '??': 'G',
        '??': 'G',
        '??': 'G',
        '??': 'G',
        '???': 'G',
        '??': 'G',
        '???': 'H',
        '??': 'H',
        '???': 'H',
        '??': 'H',
        '???': 'H',
        '???': 'H',
        '???': 'H',
        '???': 'H',
        '??': 'H',
        '??': 'I',
        '??': 'I',
        '??': 'I',
        '??': 'I',
        '??': 'I',
        '???': 'I',
        '??': 'I',
        '???': 'I',
        '??': 'I',
        '??': 'I',
        '???': 'I',
        '??': 'I',
        '??': 'I',
        '??': 'I',
        '??': 'I',
        '??': 'I',
        '???': 'I',
        '???': 'D',
        '???': 'F',
        '???': 'G',
        '???': 'R',
        '???': 'S',
        '???': 'T',
        '???': 'IS',
        '??': 'J',
        '??': 'J',
        '???': 'K',
        '??': 'K',
        '??': 'K',
        '???': 'K',
        '???': 'K',
        '???': 'K',
        '??': 'K',
        '???': 'K',
        '???': 'K',
        '???': 'K',
        '??': 'L',
        '??': 'L',
        '??': 'L',
        '??': 'L',
        '???': 'L',
        '???': 'L',
        '???': 'L',
        '???': 'L',
        '???': 'L',
        '???': 'L',
        '??': 'L',
        '???': 'L',
        '??': 'L',
        '??': 'L',
        '??': 'LJ',
        '???': 'M',
        '???': 'M',
        '???': 'M',
        '???': 'M',
        '??': 'N',
        '??': 'N',
        '??': 'N',
        '???': 'N',
        '???': 'N',
        '???': 'N',
        '??': 'N',
        '??': 'N',
        '???': 'N',
        '??': 'N',
        '??': 'N',
        '??': 'N',
        '??': 'NJ',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '???': 'O',
        '???': 'O',
        '???': 'O',
        '???': 'O',
        '???': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '???': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '???': 'O',
        '??': 'O',
        '???': 'O',
        '???': 'O',
        '???': 'O',
        '???': 'O',
        '???': 'O',
        '??': 'O',
        '???': 'O',
        '???': 'O',
        '??': 'O',
        '???': 'O',
        '???': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '??': 'O',
        '???': 'O',
        '???': 'O',
        '??': 'O',
        '??': 'OI',
        '???': 'OO',
        '??': 'E',
        '??': 'O',
        '??': 'OU',
        '???': 'P',
        '???': 'P',
        '???': 'P',
        '??': 'P',
        '???': 'P',
        '???': 'P',
        '???': 'P',
        '???': 'Q',
        '???': 'Q',
        '??': 'R',
        '??': 'R',
        '??': 'R',
        '???': 'R',
        '???': 'R',
        '???': 'R',
        '??': 'R',
        '??': 'R',
        '???': 'R',
        '??': 'R',
        '???': 'R',
        '???': 'C',
        '??': 'E',
        '??': 'S',
        '???': 'S',
        '??': 'S',
        '???': 'S',
        '??': 'S',
        '??': 'S',
        '??': 'S',
        '???': 'S',
        '???': 'S',
        '???': 'S',
        '??': 'T',
        '??': 'T',
        '???': 'T',
        '??': 'T',
        '??': 'T',
        '???': 'T',
        '???': 'T',
        '??': 'T',
        '???': 'T',
        '??': 'T',
        '??': 'T',
        '???': 'A',
        '???': 'L',
        '??': 'M',
        '??': 'V',
        '???': 'TZ',
        '??': 'U',
        '??': 'U',
        '??': 'U',
        '??': 'U',
        '???': 'U',
        '??': 'U',
        '??': 'U',
        '??': 'U',
        '??': 'U',
        '??': 'U',
        '???': 'U',
        '???': 'U',
        '??': 'U',
        '??': 'U',
        '??': 'U',
        '???': 'U',
        '??': 'U',
        '???': 'U',
        '???': 'U',
        '???': 'U',
        '???': 'U',
        '???': 'U',
        '??': 'U',
        '??': 'U',
        '???': 'U',
        '??': 'U',
        '??': 'U',
        '??': 'U',
        '???': 'U',
        '???': 'U',
        '???': 'V',
        '???': 'V',
        '??': 'V',
        '???': 'V',
        '???': 'VY',
        '???': 'W',
        '??': 'W',
        '???': 'W',
        '???': 'W',
        '???': 'W',
        '???': 'W',
        '???': 'W',
        '???': 'X',
        '???': 'X',
        '??': 'Y',
        '??': 'Y',
        '??': 'Y',
        '???': 'Y',
        '???': 'Y',
        '???': 'Y',
        '??': 'Y',
        '???': 'Y',
        '???': 'Y',
        '??': 'Y',
        '??': 'Y',
        '???': 'Y',
        '??': 'Z',
        '??': 'Z',
        '???': 'Z',
        '???': 'Z',
        '??': 'Z',
        '???': 'Z',
        '??': 'Z',
        '???': 'Z',
        '??': 'Z',
        '??': 'IJ',
        '??': 'OE',
        '???': 'A',
        '???': 'AE',
        '??': 'B',
        '???': 'B',
        '???': 'C',
        '???': 'D',
        '???': 'E',
        '???': 'F',
        '??': 'G',
        '??': 'G',
        '??': 'H',
        '??': 'I',
        '??': 'R',
        '???': 'J',
        '???': 'K',
        '??': 'L',
        '???': 'L',
        '???': 'M',
        '??': 'N',
        '???': 'O',
        '??': 'OE',
        '???': 'O',
        '???': 'OU',
        '???': 'P',
        '??': 'R',
        '???': 'N',
        '???': 'R',
        '???': 'S',
        '???': 'T',
        '???': 'E',
        '???': 'R',
        '???': 'U',
        '???': 'V',
        '???': 'W',
        '??': 'Y',
        '???': 'Z',
        '??': 'a',
        '??': 'a',
        '???': 'a',
        '???': 'a',
        '???': 'a',
        '???': 'a',
        '???': 'a',
        '??': 'a',
        '??': 'a',
        '???': 'a',
        '???': 'a',
        '???': 'a',
        '???': 'a',
        '???': 'a',
        '??': 'a',
        '??': 'a',
        '??': 'a',
        '??': 'a',
        '???': 'a',
        '??': 'a',
        '??': 'a',
        '???': 'a',
        '??': 'a',
        '??': 'a',
        '??': 'a',
        '???': 'a',
        '???': 'a',
        '??': 'a',
        '??': 'a',
        '???': 'a',
        '???': 'a',
        '??': 'a',
        '???': 'aa',
        '??': 'ae',
        '??': 'ae',
        '??': 'ae',
        '???': 'ao',
        '???': 'au',
        '???': 'av',
        '???': 'av',
        '???': 'ay',
        '???': 'b',
        '???': 'b',
        '??': 'b',
        '???': 'b',
        '???': 'b',
        '???': 'b',
        '??': 'b',
        '??': 'b',
        '??': 'o',
        '??': 'c',
        '??': 'c',
        '??': 'c',
        '???': 'c',
        '??': 'c',
        '??': 'c',
        '??': 'c',
        '??': 'c',
        '??': 'c',
        '??': 'd',
        '???': 'd',
        '???': 'd',
        '??': 'd',
        '???': 'd',
        '???': 'd',
        '??': 'd',
        '???': 'd',
        '???': 'd',
        '???': 'd',
        '???': 'd',
        '??': 'd',
        '??': 'd',
        '??': 'd',
        '??': 'i',
        '??': 'j',
        '??': 'j',
        '??': 'j',
        '??': 'dz',
        '??': 'dz',
        '??': 'e',
        '??': 'e',
        '??': 'e',
        '??': 'e',
        '???': 'e',
        '??': 'e',
        '???': 'e',
        '???': 'e',
        '???': 'e',
        '???': 'e',
        '???': 'e',
        '???': 'e',
        '??': 'e',
        '??': 'e',
        '???': 'e',
        '??': 'e',
        '??': 'e',
        '???': 'e',
        '??': 'e',
        '??': 'e',
        '???': 'e',
        '???': 'e',
        '???': 'e',
        '??': 'e',
        '???': 'e',
        '??': 'e',
        '???': 'e',
        '???': 'e',
        '???': 'et',
        '???': 'f',
        '??': 'f',
        '???': 'f',
        '???': 'f',
        '??': 'g',
        '??': 'g',
        '??': 'g',
        '??': 'g',
        '??': 'g',
        '??': 'g',
        '??': 'g',
        '???': 'g',
        '???': 'g',
        '??': 'g',
        '???': 'h',
        '??': 'h',
        '???': 'h',
        '??': 'h',
        '???': 'h',
        '???': 'h',
        '???': 'h',
        '???': 'h',
        '??': 'h',
        '???': 'h',
        '??': 'h',
        '??': 'hv',
        '??': 'i',
        '??': 'i',
        '??': 'i',
        '??': 'i',
        '??': 'i',
        '???': 'i',
        '???': 'i',
        '??': 'i',
        '??': 'i',
        '???': 'i',
        '??': 'i',
        '??': 'i',
        '??': 'i',
        '???': 'i',
        '??': 'i',
        '??': 'i',
        '???': 'i',
        '???': 'd',
        '???': 'f',
        '???': 'g',
        '???': 'r',
        '???': 's',
        '???': 't',
        '???': 'is',
        '??': 'j',
        '??': 'j',
        '??': 'j',
        '??': 'j',
        '???': 'k',
        '??': 'k',
        '??': 'k',
        '???': 'k',
        '???': 'k',
        '???': 'k',
        '??': 'k',
        '???': 'k',
        '???': 'k',
        '???': 'k',
        '???': 'k',
        '??': 'l',
        '??': 'l',
        '??': 'l',
        '??': 'l',
        '??': 'l',
        '???': 'l',
        '??': 'l',
        '???': 'l',
        '???': 'l',
        '???': 'l',
        '???': 'l',
        '???': 'l',
        '??': 'l',
        '??': 'l',
        '???': 'l',
        '??': 'l',
        '??': 'l',
        '??': 'lj',
        '??': 's',
        '???': 's',
        '???': 's',
        '???': 's',
        '???': 'm',
        '???': 'm',
        '???': 'm',
        '??': 'm',
        '???': 'm',
        '???': 'm',
        '??': 'n',
        '??': 'n',
        '??': 'n',
        '???': 'n',
        '??': 'n',
        '???': 'n',
        '???': 'n',
        '??': 'n',
        '??': 'n',
        '???': 'n',
        '??': 'n',
        '???': 'n',
        '???': 'n',
        '??': 'n',
        '??': 'n',
        '??': 'nj',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '???': 'o',
        '???': 'o',
        '???': 'o',
        '???': 'o',
        '???': 'o',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '???': 'o',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '???': 'o',
        '??': 'o',
        '???': 'o',
        '???': 'o',
        '???': 'o',
        '???': 'o',
        '???': 'o',
        '??': 'o',
        '???': 'o',
        '???': 'o',
        '???': 'o',
        '??': 'o',
        '???': 'o',
        '???': 'o',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '??': 'o',
        '???': 'o',
        '???': 'o',
        '??': 'o',
        '??': 'oi',
        '???': 'oo',
        '??': 'e',
        '???': 'e',
        '??': 'o',
        '???': 'o',
        '??': 'ou',
        '???': 'p',
        '???': 'p',
        '???': 'p',
        '??': 'p',
        '???': 'p',
        '???': 'p',
        '???': 'p',
        '???': 'p',
        '???': 'p',
        '???': 'q',
        '??': 'q',
        '??': 'q',
        '???': 'q',
        '??': 'r',
        '??': 'r',
        '??': 'r',
        '???': 'r',
        '???': 'r',
        '???': 'r',
        '??': 'r',
        '??': 'r',
        '???': 'r',
        '??': 'r',
        '???': 'r',
        '??': 'r',
        '???': 'r',
        '???': 'r',
        '??': 'r',
        '??': 'r',
        '???': 'c',
        '???': 'c',
        '??': 'e',
        '??': 'r',
        '??': 's',
        '???': 's',
        '??': 's',
        '???': 's',
        '??': 's',
        '??': 's',
        '??': 's',
        '???': 's',
        '???': 's',
        '???': 's',
        '??': 's',
        '???': 's',
        '???': 's',
        '??': 's',
        '??': 'g',
        '???': 'o',
        '???': 'o',
        '???': 'u',
        '??': 't',
        '??': 't',
        '???': 't',
        '??': 't',
        '??': 't',
        '???': 't',
        '???': 't',
        '???': 't',
        '???': 't',
        '??': 't',
        '???': 't',
        '???': 't',
        '??': 't',
        '??': 't',
        '??': 't',
        '???': 'th',
        '??': 'a',
        '???': 'ae',
        '??': 'e',
        '???': 'g',
        '??': 'h',
        '??': 'h',
        '??': 'h',
        '???': 'i',
        '??': 'k',
        '???': 'l',
        '??': 'm',
        '??': 'm',
        '???': 'oe',
        '??': 'r',
        '??': 'r',
        '??': 'r',
        '???': 'r',
        '??': 't',
        '??': 'v',
        '??': 'w',
        '??': 'y',
        '???': 'tz',
        '??': 'u',
        '??': 'u',
        '??': 'u',
        '??': 'u',
        '???': 'u',
        '??': 'u',
        '??': 'u',
        '??': 'u',
        '??': 'u',
        '??': 'u',
        '???': 'u',
        '???': 'u',
        '??': 'u',
        '??': 'u',
        '??': 'u',
        '???': 'u',
        '??': 'u',
        '???': 'u',
        '???': 'u',
        '???': 'u',
        '???': 'u',
        '???': 'u',
        '??': 'u',
        '??': 'u',
        '???': 'u',
        '??': 'u',
        '???': 'u',
        '??': 'u',
        '??': 'u',
        '???': 'u',
        '???': 'u',
        '???': 'ue',
        '???': 'um',
        '???': 'v',
        '???': 'v',
        '???': 'v',
        '??': 'v',
        '???': 'v',
        '???': 'v',
        '???': 'v',
        '???': 'vy',
        '???': 'w',
        '??': 'w',
        '???': 'w',
        '???': 'w',
        '???': 'w',
        '???': 'w',
        '???': 'w',
        '???': 'w',
        '???': 'x',
        '???': 'x',
        '???': 'x',
        '??': 'y',
        '??': 'y',
        '??': 'y',
        '???': 'y',
        '???': 'y',
        '???': 'y',
        '??': 'y',
        '???': 'y',
        '???': 'y',
        '??': 'y',
        '???': 'y',
        '??': 'y',
        '???': 'y',
        '??': 'z',
        '??': 'z',
        '???': 'z',
        '??': 'z',
        '???': 'z',
        '??': 'z',
        '???': 'z',
        '??': 'z',
        '???': 'z',
        '???': 'z',
        '???': 'z',
        '??': 'z',
        '??': 'z',
        '??': 'z',
        '???': 'ff',
        '???': 'ffi',
        '???': 'ffl',
        '???': 'fi',
        '???': 'fl',
        '??': 'ij',
        '??': 'oe',
        '???': 'st',
        '???': 'a',
        '???': 'e',
        '???': 'i',
        '???': 'j',
        '???': 'o',
        '???': 'r',
        '???': 'u',
        '???': 'v',
        '???': 'x'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeaheadOptions = /** @class */ (function () {
        function TypeaheadOptions(options) {
            Object.assign(this, options);
        }
        return TypeaheadOptions;
    }());
    if (false) {
        /** @type {?} */
        TypeaheadOptions.prototype.placement;
        /** @type {?} */
        TypeaheadOptions.prototype.animation;
        /** @type {?} */
        TypeaheadOptions.prototype.typeaheadRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeaheadMatch = /** @class */ (function () {
        // tslint:disable-next-line:no-any
        function TypeaheadMatch(item, value, header) {
            if (value === void 0) { value = item; }
            if (header === void 0) { header = false; }
            this.item = item;
            this.value = value;
            this.header = header;
        }
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.isHeader = /**
         * @return {?}
         */
        function () {
            return this.header;
        };
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.toString = /**
         * @return {?}
         */
        function () {
            return this.value;
        };
        return TypeaheadMatch;
    }());
    if (false) {
        /** @type {?} */
        TypeaheadMatch.prototype.value;
        /** @type {?} */
        TypeaheadMatch.prototype.item;
        /**
         * @type {?}
         * @protected
         */
        TypeaheadMatch.prototype.header;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeaheadOrder = /** @class */ (function () {
        function TypeaheadOrder() {
        }
        return TypeaheadOrder;
    }());
    if (false) {
        /**
         * field for sorting
         * @type {?}
         */
        TypeaheadOrder.prototype.field;
        /**
         * ordering direction, could be 'asc' or 'desc'
         * @type {?}
         */
        TypeaheadOrder.prototype.direction;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function latinize(str) {
        if (!str) {
            return '';
        }
        return str.replace(/[^A-Za-z0-9\[\] ]/g, (/**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            return latinMap[a] || a;
        }));
    }
    /**
     * @param {?} queryToEscape
     * @return {?}
     */
    function escapeRegexp(queryToEscape) {
        // Regex: capture the whole query string and replace it with the string
        // that will be used to match the results, for example if the capture is
        // 'a' the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /* tslint:disable */
    /**
     * @param {?} str
     * @param {?=} wordRegexDelimiters
     * @param {?=} phraseRegexDelimiters
     * @param {?=} delimitersForMultipleSearch
     * @return {?}
     */
    function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters, delimitersForMultipleSearch) {
        if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
        if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
        /** @type {?} */
        var result = [];
        if (!delimitersForMultipleSearch) {
            result = tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters);
        }
        else {
            /** @type {?} */
            var multipleSearchRegexStr = "([" + delimitersForMultipleSearch + "]+)";
            /** @type {?} */
            var delimitedTokens = str.split(new RegExp(multipleSearchRegexStr, 'g'));
            /** @type {?} */
            var lastToken = delimitedTokens[delimitedTokens.length - 1];
            if (lastToken > '') {
                if (wordRegexDelimiters && phraseRegexDelimiters) {
                    result = tokenizeWordsAndPhrases(lastToken, wordRegexDelimiters, phraseRegexDelimiters);
                }
                else {
                    result.push(lastToken);
                }
            }
        }
        return result;
    }
    /**
     * @param {?} str
     * @param {?} wordRegexDelimiters
     * @param {?} phraseRegexDelimiters
     * @return {?}
     */
    function tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters) {
        /** @type {?} */
        var result = [];
        /* tslint:enable */
        /** @type {?} */
        var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
            ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
        /** @type {?} */
        var preTokenized = str.split(new RegExp(regexStr, 'g'));
        /** @type {?} */
        var preTokenizedLength = preTokenized.length;
        /** @type {?} */
        var token;
        /** @type {?} */
        var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
        for (var i = 0; i < preTokenizedLength; i += 1) {
            token = preTokenized[i];
            if (token && token.length && token !== wordRegexDelimiters) {
                result.push(token.replace(replacePhraseDelimiters, ''));
            }
        }
        return result;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} object
     * @param {?} option
     * @return {?}
     */
    function getValueFromObject(object, option) {
        var e_1, _a;
        if (!option || typeof object !== 'object') {
            return object.toString();
        }
        if (option.endsWith('()')) {
            /** @type {?} */
            var functionName = option.slice(0, option.length - 2);
            return object[functionName]().toString();
        }
        /** @type {?} */
        var properties = option
            .replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '');
        /** @type {?} */
        var propertiesArray = properties.split('.');
        try {
            for (var propertiesArray_1 = __values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
                var property = propertiesArray_1_1.value;
                if (property in object) {
                    // tslint:disable-next-line
                    object = object[property];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!object) {
            return '';
        }
        return object.toString();
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TYPEAHEAD_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
    /** @type {?} */
    var typeaheadAnimation = animations.trigger('typeaheadAnimation', [
        animations.state('animated-down', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-down', [
            animations.style({ height: 0, overflow: 'hidden' }),
            animations.animate(TYPEAHEAD_ANIMATION_TIMING)
        ]),
        animations.state('animated-up', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-up', [
            animations.style({ height: '*', overflow: 'hidden' }),
            animations.animate(TYPEAHEAD_ANIMATION_TIMING)
        ]),
        animations.transition('* => unanimated', animations.animate('0s'))
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextWindowId = 0;
    var TypeaheadContainerComponent = /** @class */ (function () {
        function TypeaheadContainerComponent(positionService, renderer, element, changeDetectorRef) {
            var _this = this;
            this.positionService = positionService;
            this.renderer = renderer;
            this.element = element;
            this.changeDetectorRef = changeDetectorRef;
            // tslint:disable-next-line: no-output-rename
            this.activeChangeEvent = new core.EventEmitter();
            this.isFocused = false;
            this.height = 0;
            this.popupId = "ngb-typeahead-" + nextWindowId++;
            this._matches = [];
            this.isScrolledIntoView = (/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                /** @type {?} */
                var containerViewTop = this.ulElement.nativeElement.scrollTop;
                /** @type {?} */
                var containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
                /** @type {?} */
                var elemTop = elem.offsetTop;
                /** @type {?} */
                var elemBottom = elemTop + elem.offsetHeight;
                return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
            });
            this.renderer.setAttribute(this.element.nativeElement, 'id', this.popupId);
            this.positionServiceSubscription = this.positionService.event$.subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    _this.changeDetectorRef.detectChanges();
                    return;
                }
                _this.animationState = 'unanimated';
                _this.changeDetectorRef.detectChanges();
            }));
        }
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */
            function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadTemplateMethods", {
            get: /**
             * @return {?}
             */
            function () {
                /* tslint:disable:no-this-assignment */
                /** @type {?} */
                var _that = this;
                return {
                    selectMatch: this.selectMatch.bind(_that),
                    selectActive: this.selectActive.bind(_that),
                    isActive: this.isActive.bind(_that)
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
            get: /**
             * @return {?}
             */
            function () {
                return this._active;
            },
            set: /**
             * @param {?} active
             * @return {?}
             */
            function (active) {
                this._active = active;
                this.activeChanged();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
            get: /**
             * @return {?}
             */
            function () {
                return this._matches;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this.positionService.setOptions({
                    modifiers: { flip: { enabled: this.adaptivePosition } },
                    allowedPositions: ['top', 'bottom']
                });
                this._matches = value;
                this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
                if (this.typeaheadScrollable) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.setScrollableMode();
                    }));
                }
                if (this.typeaheadIsFirstItemActive && this._matches.length > 0) {
                    this.active = this._matches[0];
                    if (this._active.isHeader()) {
                        this.nextActiveMatch();
                    }
                }
                if (this._active && !this.typeaheadIsFirstItemActive) {
                    /** @type {?} */
                    var concurrency = this._matches.find((/**
                     * @param {?} match
                     * @return {?}
                     */
                    function (match) { return match.value === _this._active.value; }));
                    if (concurrency) {
                        this.selectActive(concurrency);
                        return;
                    }
                    this.active = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isTopPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this.element.nativeElement.classList.contains('top');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
            // tslint:disable-next-line:no-any
            get: 
            // tslint:disable-next-line:no-any
            /**
             * @return {?}
             */
            function () {
                return this.parent ? this.parent.optionsListTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isAnimated", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parent ? this.parent.isAnimated : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "adaptivePosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parent ? this.parent.adaptivePosition : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parent ? this.parent.typeaheadScrollable : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadIsFirstItemActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parent ? this.parent.typeaheadIsFirstItemActive : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
            // tslint:disable-next-line:no-any
            get: 
            // tslint:disable-next-line:no-any
            /**
             * @return {?}
             */
            function () {
                return this.parent ? this.parent.typeaheadItemTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} isActiveItemChanged
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActiveMatch = /**
         * @param {?=} isActiveItemChanged
         * @return {?}
         */
        function (isActiveItemChanged) {
            if (this._active && this.parent.typeaheadSelectFirstItem) {
                this.selectMatch(this._active);
            }
            if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
                this.selectMatch(this._active);
            }
        };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.activeChanged = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = this.matches.indexOf(this._active);
            this.activeChangeEvent.emit(this.popupId + "-" + index);
        };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.prevActiveMatch = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = this.matches.indexOf(this._active);
            this.active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
            if (this._active.isHeader()) {
                this.prevActiveMatch();
            }
            if (this.typeaheadScrollable) {
                this.scrollPrevious(index);
            }
        };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.nextActiveMatch = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = this.matches.indexOf(this._active);
            this.active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
            if (this._active.isHeader()) {
                this.nextActiveMatch();
            }
            if (this.typeaheadScrollable) {
                this.scrollNext(index);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActive = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isFocused = true;
            this.active = value;
        };
        /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.highlight = /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
        function (match, query) {
            /** @type {?} */
            var itemStr = match.value;
            /** @type {?} */
            var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
                ? latinize(itemStr)
                : itemStr).toLowerCase();
            /** @type {?} */
            var startIdx;
            /** @type {?} */
            var tokenLen;
            // Replaces the capture string with the same string inside of a "strong" tag
            if (typeof query === 'object') {
                /** @type {?} */
                var queryLen = query.length;
                for (var i = 0; i < queryLen; i += 1) {
                    // query[i] is already latinized and lower case
                    startIdx = itemStrHelper.indexOf(query[i]);
                    tokenLen = query[i].length;
                    if (startIdx >= 0 && tokenLen > 0) {
                        itemStr =
                            itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                ("" + itemStr.substring(startIdx + tokenLen));
                        itemStrHelper =
                            itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                                ("" + itemStrHelper.substring(startIdx + tokenLen));
                    }
                }
            }
            else if (query) {
                // query is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query);
                tokenLen = query.length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                }
            }
            return itemStr;
        };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.focusLost = /**
         * @return {?}
         */
        function () {
            this.isFocused = false;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.isActive = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return this.active === value;
        };
        /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectMatch = /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
        function (value, e) {
            var _this = this;
            if (e === void 0) { e = void 0; }
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
            this.parent.changeModel(value);
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.parent.typeaheadOnSelect.emit(value); }), 0);
            return false;
        };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.setScrollableMode = /**
         * @return {?}
         */
        function () {
            if (!this.ulElement) {
                this.ulElement = this.element;
            }
            if (this.liElements.first) {
                /** @type {?} */
                var ulStyles = utils.Utils.getStyles(this.ulElement.nativeElement);
                /** @type {?} */
                var liStyles = utils.Utils.getStyles(this.liElements.first.nativeElement);
                /** @type {?} */
                var ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                    .replace('px', ''));
                /** @type {?} */
                var ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                    .replace('px', ''));
                /** @type {?} */
                var optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                    .replace('px', ''));
                /** @type {?} */
                var height = this.typeaheadOptionsInScrollableView * optionHeight;
                this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
            }
            this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
        };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollPrevious = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index === 0) {
                this.scrollToBottom();
                return;
            }
            if (this.liElements) {
                /** @type {?} */
                var liElement = this.liElements.toArray()[index - 1];
                if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                    this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
                }
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollNext = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index + 1 > this.matches.length - 1) {
                this.scrollToTop();
                return;
            }
            if (this.liElements) {
                /** @type {?} */
                var liElement = this.liElements.toArray()[index + 1];
                if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                    this.ulElement.nativeElement.scrollTop =
                        liElement.nativeElement.offsetTop -
                            Number(this.ulElement.nativeElement.offsetHeight) +
                            Number(liElement.nativeElement.offsetHeight);
                }
            }
        };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.positionServiceSubscription.unsubscribe();
        };
        /**
         * @private
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToBottom = /**
         * @private
         * @return {?}
         */
        function () {
            this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
        };
        /**
         * @private
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToTop = /**
         * @private
         * @return {?}
         */
        function () {
            this.ulElement.nativeElement.scrollTop = 0;
        };
        TypeaheadContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'typeahead-container',
                        template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{\n               matches: matches,\n               itemTemplate: itemTemplate || bsItemTemplate,\n               query: query,\n               $implicit: typeaheadTemplateMethods\n             }\">\n</ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\">\n  <span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      role=\"listbox\"\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements\n          *ngIf=\"!match.isHeader()\"\n          [id]=\"popupId + '-' + i\"\n          role=\"option\"\n          [@typeaheadAnimation]=\"animationState\"\n          [class.active]=\"isActive(match)\"\n          (mouseenter)=\"selectActive(match)\">\n\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\n          </ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              [id]=\"popupId + '-' + i\"\n              role=\"option\"\n              [@typeaheadAnimation]=\"animationState\"\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\n        </ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                        host: {
                            class: 'dropdown open bottom',
                            '[class.dropdown-menu]': 'isBs4',
                            '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                            '[style.visibility]': "'inherit'",
                            '[class.dropup]': 'dropup',
                            style: 'position: absolute;display: block;',
                            '[attr.role]': "isBs4 ? 'listbox' : null "
                        },
                        animations: [typeaheadAnimation],
                        styles: ["\n    :host.dropdown {\n      z-index: 1000;\n    }\n\n    :host.dropdown-menu, .dropdown-menu {\n      overflow-y: auto;\n      height: 100px;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TypeaheadContainerComponent.ctorParameters = function () { return [
            { type: positioning.PositioningService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        TypeaheadContainerComponent.propDecorators = {
            activeChangeEvent: [{ type: core.Output, args: ['activeChange',] }],
            ulElement: [{ type: core.ViewChild, args: ['ulElement', { static: false },] }],
            liElements: [{ type: core.ViewChildren, args: ['liElements',] }],
            focusLost: [{ type: core.HostListener, args: ['mouseleave',] }, { type: core.HostListener, args: ['blur',] }]
        };
        return TypeaheadContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        TypeaheadContainerComponent.prototype.activeChangeEvent;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.parent;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.query;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.isFocused;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.top;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.left;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.display;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.placement;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.dropup;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.guiHeight;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.needScrollbar;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.animationState;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.positionServiceSubscription;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.height;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.popupId;
        /**
         * @type {?}
         * @protected
         */
        TypeaheadContainerComponent.prototype._active;
        /**
         * @type {?}
         * @protected
         */
        TypeaheadContainerComponent.prototype._matches;
        /**
         * @type {?}
         * @private
         */
        TypeaheadContainerComponent.prototype.ulElement;
        /**
         * @type {?}
         * @private
         */
        TypeaheadContainerComponent.prototype.liElements;
        /**
         * @type {?}
         * @private
         */
        TypeaheadContainerComponent.prototype.isScrolledIntoView;
        /**
         * @type {?}
         * @private
         */
        TypeaheadContainerComponent.prototype.positionService;
        /**
         * @type {?}
         * @private
         */
        TypeaheadContainerComponent.prototype.renderer;
        /** @type {?} */
        TypeaheadContainerComponent.prototype.element;
        /**
         * @type {?}
         * @private
         */
        TypeaheadContainerComponent.prototype.changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Default values provider for typeahead
     */
    var TypeaheadConfig = /** @class */ (function () {
        function TypeaheadConfig() {
            /**
             * sets use adaptive position
             */
            this.adaptivePosition = false;
            /**
             * turn on/off animation
             */
            this.isAnimated = false;
            /**
             * used to hide results on blur
             */
            this.hideResultsOnBlur = true;
            /**
             * if true, typeahead will cancel async request on blur
             */
            this.cancelRequestOnFocusLost = false;
            /**
             * used to choose the first item in typeahead container
             */
            this.selectFirstItem = true;
            /**
             * used to active/inactive the first item in typeahead container
             */
            this.isFirstItemActive = true;
            /**
             * used to choose set minimal no of characters that needs to
             * be entered before typeahead kicks-in
             */
            this.minLength = 1;
        }
        TypeaheadConfig.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ TypeaheadConfig.??prov = core["????defineInjectable"]({ factory: function TypeaheadConfig_Factory() { return new TypeaheadConfig(); }, token: TypeaheadConfig, providedIn: "root" });
        return TypeaheadConfig;
    }());
    if (false) {
        /**
         * sets use adaptive position
         * @type {?}
         */
        TypeaheadConfig.prototype.adaptivePosition;
        /**
         * turn on/off animation
         * @type {?}
         */
        TypeaheadConfig.prototype.isAnimated;
        /**
         * used to hide results on blur
         * @type {?}
         */
        TypeaheadConfig.prototype.hideResultsOnBlur;
        /**
         * if true, typeahead will cancel async request on blur
         * @type {?}
         */
        TypeaheadConfig.prototype.cancelRequestOnFocusLost;
        /**
         * used to choose the first item in typeahead container
         * @type {?}
         */
        TypeaheadConfig.prototype.selectFirstItem;
        /**
         * used to active/inactive the first item in typeahead container
         * @type {?}
         */
        TypeaheadConfig.prototype.isFirstItemActive;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         * @type {?}
         */
        TypeaheadConfig.prototype.minLength;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeaheadDirective = /** @class */ (function () {
        function TypeaheadDirective(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
            this.changeDetection = changeDetection;
            this.element = element;
            this.ngControl = ngControl;
            this.renderer = renderer;
            /**
             * minimal no of characters that needs to be entered before
             * typeahead kicks-in. When set to 0, typeahead shows on focus with full
             * list of options (limited as normal by typeaheadOptionsLimit)
             */
            this.typeaheadMinLength = void 0;
            /**
             * turn on/off animation
             */
            this.isAnimated = false;
            /**
             * should be used only in case of typeahead attribute is Observable of array.
             * If true - loading of options will be async, otherwise - sync.
             * true make sense if options array is large.
             */
            this.typeaheadAsync = void 0;
            /**
             * match latin symbols.
             * If true the word s??per would match super and vice versa.
             */
            this.typeaheadLatinize = true;
            /**
             * Can be use to search words by inserting a single white space between each characters
             *  for example 'C a l i f o r n i a' will match 'California'.
             */
            this.typeaheadSingleWords = true;
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to break words. Defaults to space.
             */
            this.typeaheadWordDelimiters = ' ';
            /**
             * Can be used to conduct a search of multiple items and have suggestion not for the
             * whole value of the input but for the value that comes after a delimiter provided via
             * typeaheadMultipleSearchDelimiters attribute. This option can only be used together with
             * typeaheadSingleWords option if typeaheadWordDelimiters and typeaheadPhraseDelimiters
             * are different from typeaheadMultipleSearchDelimiters to avoid conflict in determining
             * when to delimit multiple searches and when a single word.
             */
            this.typeaheadMultipleSearch = void 0;
            /**
             * should be used only in case typeaheadMultipleSearch attribute is true.
             * Sets the multiple search delimiter to know when to start a new search. Defaults to comma.
             * If space needs to be used, then explicitly set typeaheadWordDelimiters to something else than space
             * because space is used by default OR set typeaheadSingleWords attribute to false if you don't need
             * to use it together with multiple search.
             */
            this.typeaheadMultipleSearchDelimiters = ',';
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to match exact phrase.
             * Defaults to simple and double quotes.
             */
            this.typeaheadPhraseDelimiters = '\'"';
            /**
             * specifies if typeahead is scrollable
             */
            this.typeaheadScrollable = false;
            /**
             * specifies number of options to show in scroll view
             */
            this.typeaheadOptionsInScrollableView = 5;
            /**
             * fired when an options list was opened and the user clicked Tab
             * If a value equal true, it will be chosen first or active item in the list
             * If value equal false, it will be chosen an active item in the list or nothing
             */
            this.typeaheadSelectFirstItem = true;
            /**
             * makes active first item in a list
             */
            this.typeaheadIsFirstItemActive = true;
            /**
             * fired when 'busy' state of this component was changed,
             * fired on async mode only, returns boolean
             */
            this.typeaheadLoading = new core.EventEmitter();
            /**
             * fired on every key event and returns true
             * in case of matches are not detected
             */
            this.typeaheadNoResults = new core.EventEmitter();
            /**
             * fired when option was selected, return object with data of this option
             */
            this.typeaheadOnSelect = new core.EventEmitter();
            /**
             * fired when blur event occurs. returns the active item
             */
            this.typeaheadOnBlur = new core.EventEmitter();
            /**
             * This attribute indicates that the dropdown should be opened upwards
             */
            this.dropup = false;
            this.isOpen = false;
            this.list = 'list';
            this.isActiveItemChanged = false;
            this.isFocused = false;
            this.cancelRequestOnFocusLost = false;
            // tslint:disable-next-line:no-any
            this.keyUpEventEmitter = new core.EventEmitter();
            this._matches = [];
            this.placement = 'bottom left';
            this._subscriptions = [];
            this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
                .provide({ provide: TypeaheadConfig, useValue: config });
            Object.assign(this, {
                typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
                cancelRequestOnFocusLost: config.cancelRequestOnFocusLost,
                typeaheadSelectFirstItem: config.selectFirstItem,
                typeaheadIsFirstItemActive: config.isFirstItemActive,
                typeaheadMinLength: config.minLength,
                adaptivePosition: config.adaptivePosition,
                isAnimated: config.isAnimated
            });
        }
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
            this.typeaheadMinLength =
                this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
            this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
            // async should be false in case of array
            if (this.typeaheadAsync === undefined && !(rxjs.isObservable(this.typeahead))) {
                this.typeaheadAsync = false;
            }
            if (rxjs.isObservable(this.typeahead)) {
                this.typeaheadAsync = true;
            }
            if (this.typeaheadAsync) {
                this.asyncActions();
            }
            else {
                this.syncActions();
            }
            this.checkDelimitersConflict();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        TypeaheadDirective.prototype.onInput = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // For `<input>`s, use the `value` property. For others that don't have a
            // `value` (such as `<span contenteditable="true">`), use either
            // `textContent` or `innerText` (depending on which one is supported, i.e.
            // Firefox or IE).
            /** @type {?} */
            var value = e.target.value !== undefined
                ? e.target.value
                : e.target.textContent !== undefined
                    ? e.target.textContent
                    : e.target.innerText;
            if (value != null && value.trim().length >= this.typeaheadMinLength) {
                this.typeaheadLoading.emit(true);
                this.keyUpEventEmitter.emit(e.target.value);
            }
            else {
                this.typeaheadLoading.emit(false);
                this.typeaheadNoResults.emit(false);
                this.hide();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TypeaheadDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this._container) {
                // esc
                /* tslint:disable-next-line: deprecation */
                if (event.keyCode === 27 || event.key === 'Escape') {
                    this.hide();
                    return;
                }
                // up
                /* tslint:disable-next-line: deprecation */
                if (event.keyCode === 38 || event.key === 'ArrowUp') {
                    this.isActiveItemChanged = true;
                    this._container.prevActiveMatch();
                    return;
                }
                // down
                /* tslint:disable-next-line: deprecation */
                if (event.keyCode === 40 || event.key === 'ArrowDown') {
                    this.isActiveItemChanged = true;
                    this._container.nextActiveMatch();
                    return;
                }
                // enter
                /* tslint:disable-next-line: deprecation */
                if (event.keyCode === 13 || event.key === 'Enter') {
                    this._container.selectActiveMatch();
                    return;
                }
            }
        };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onFocus = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isFocused = true;
            // add setTimeout to fix issue #5251
            // to get and emit updated value if it's changed on focus
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.typeaheadMinLength === 0) {
                    _this.typeaheadLoading.emit(true);
                    _this.keyUpEventEmitter.emit(_this.element.nativeElement.value || '');
                }
            }), 0);
        };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onBlur = /**
         * @return {?}
         */
        function () {
            this.isFocused = false;
            if (this._container && !this._container.isFocused) {
                this.typeaheadOnBlur.emit(this._container.active);
            }
            if (!this.container && this._matches.length === 0) {
                this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TypeaheadDirective.prototype.onKeydown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // no container - no problems
            if (!this._container) {
                return;
            }
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 9 || event.key === 'Tab') {
                this.onBlur();
            }
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
                event.preventDefault();
                if (this.typeaheadSelectFirstItem) {
                    this._container.selectActiveMatch();
                    return;
                }
                if (!this.typeaheadSelectFirstItem) {
                    this._container.selectActiveMatch(this.isActiveItemChanged);
                    this.isActiveItemChanged = false;
                    this.hide();
                }
            }
        };
        /**
         * @param {?} match
         * @return {?}
         */
        TypeaheadDirective.prototype.changeModel = /**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            /** @type {?} */
            var valueStr;
            if (this.typeaheadMultipleSearch) {
                /** @type {?} */
                var tokens = this._allEnteredValue.split(new RegExp("([" + this.typeaheadMultipleSearchDelimiters + "]+)"));
                this._allEnteredValue = tokens.slice(0, tokens.length - 1).concat(match.value).join('');
                valueStr = this._allEnteredValue;
            }
            else {
                valueStr = match.value;
            }
            this.ngControl.viewToModelUpdate(valueStr);
            (this.ngControl.control).setValue(valueStr);
            this.changeDetection.markForCheck();
            this.hide();
        };
        Object.defineProperty(TypeaheadDirective.prototype, "matches", {
            get: /**
             * @return {?}
             */
            function () {
                return this._matches;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.show = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._typeahead
                .attach(TypeaheadContainerComponent)
                .to(this.container)
                .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
                .show({
                typeaheadRef: this,
                placement: this.placement,
                animation: false,
                dropup: this.dropup
            });
            this._outsideClickListener = this.renderer.listen('document', 'click', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                    return undefined;
                }
                if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(e.target)) {
                    return undefined;
                }
                _this.onOutsideClick();
            }));
            this._container = this._typeahead.instance;
            this._container.parent = this;
            // This improves the speed as it won't have to be done for each list item
            /** @type {?} */
            var normalizedQuery = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value)
                .toString()
                .toLowerCase();
            this._container.query = this.tokenizeQuery(normalizedQuery);
            this._container.matches = this._matches;
            this.element.nativeElement.focus();
            this._container.activeChangeEvent.subscribe((/**
             * @param {?} activeId
             * @return {?}
             */
            function (activeId) {
                _this.activeDescendant = activeId;
                _this.changeDetection.markForCheck();
            }));
            this.isOpen = true;
        };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.hide = /**
         * @return {?}
         */
        function () {
            if (this._typeahead.isShown) {
                this._typeahead.hide();
                this._outsideClickListener();
                this._container = null;
                this.isOpen = false;
                this.changeDetection.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onOutsideClick = /**
         * @return {?}
         */
        function () {
            if (this._container && !this._container.isFocused) {
                this.hide();
            }
        };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            try {
                // clean up subscriptions
                for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._typeahead.dispose();
        };
        /**
         * @protected
         * @return {?}
         */
        TypeaheadDirective.prototype.asyncActions = /**
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            this._subscriptions.push(this.keyUpEventEmitter
                .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.tap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._allEnteredValue = value;
            })), operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.typeahead; })))
                .subscribe((/**
             * @param {?} matches
             * @return {?}
             */
            function (matches) {
                _this.finalizeAsyncCall(matches);
            })));
        };
        /**
         * @protected
         * @return {?}
         */
        TypeaheadDirective.prototype.syncActions = /**
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            this._subscriptions.push(this.keyUpEventEmitter
                .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.mergeMap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._allEnteredValue = value;
                /** @type {?} */
                var normalizedQuery = _this.normalizeQuery(value);
                return rxjs.from(_this.typeahead)
                    .pipe(operators.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
                })), operators.toArray());
            })))
                .subscribe((/**
             * @param {?} matches
             * @return {?}
             */
            function (matches) {
                _this.finalizeAsyncCall(matches);
            })));
        };
        /**
         * @protected
         * @param {?} option
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeOption = /**
         * @protected
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var optionValue = getValueFromObject(option, this.typeaheadOptionField);
            /** @type {?} */
            var normalizedOption = this.typeaheadLatinize
                ? latinize(optionValue)
                : optionValue;
            return normalizedOption.toLowerCase();
        };
        /**
         * @protected
         * @param {?} currentQuery
         * @return {?}
         */
        TypeaheadDirective.prototype.tokenizeQuery = /**
         * @protected
         * @param {?} currentQuery
         * @return {?}
         */
        function (currentQuery) {
            /** @type {?} */
            var query = currentQuery;
            if (this.typeaheadMultipleSearch && this.typeaheadSingleWords) {
                if (!this.haveCommonCharacters("" + this.typeaheadPhraseDelimiters + this.typeaheadWordDelimiters, this.typeaheadMultipleSearchDelimiters)) {
                    // single words and multiple search delimiters are different, can be used together
                    query = tokenize((/** @type {?} */ (query)), this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters, this.typeaheadMultipleSearchDelimiters);
                }
            }
            else if (this.typeaheadSingleWords) {
                query = tokenize((/** @type {?} */ (query)), this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters);
            }
            else {
                // multiple searches
                query = tokenize((/** @type {?} */ (query)), null, null, this.typeaheadMultipleSearchDelimiters);
            }
            return query;
        };
        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeQuery = /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // If singleWords, break model here to not be doing extra work on each iteration
            /** @type {?} */
            var normalizedQuery = (this.typeaheadLatinize
                ? latinize(value)
                : value)
                .toString()
                .toLowerCase();
            normalizedQuery = this.tokenizeQuery(normalizedQuery);
            return normalizedQuery;
        };
        /**
         * @protected
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
        TypeaheadDirective.prototype.testMatch = /**
         * @protected
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
        function (match, test) {
            /** @type {?} */
            var spaceLength;
            if (typeof test === 'object') {
                spaceLength = test.length;
                for (var i = 0; i < spaceLength; i += 1) {
                    if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                        return false;
                    }
                }
                return true;
            }
            return match.indexOf(test) >= 0;
        };
        /**
         * @protected
         * @param {?} matches
         * @return {?}
         */
        TypeaheadDirective.prototype.finalizeAsyncCall = /**
         * @protected
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            this.prepareMatches(matches || []);
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(!this.hasMatches());
            if (!this.hasMatches()) {
                this.hide();
                return;
            }
            if (!this.isFocused && this.cancelRequestOnFocusLost) {
                return;
            }
            if (this._container) {
                // fix: remove usage of ngControl internals
                /** @type {?} */
                var _controlValue = (this.typeaheadLatinize
                    ? latinize(this.ngControl.control.value)
                    : this.ngControl.control.value) || '';
                // This improves the speed as it won't have to be done for each list item
                /** @type {?} */
                var normalizedQuery = _controlValue.toString().toLowerCase();
                this._container.query = this.tokenizeQuery(normalizedQuery);
                this._container.matches = this._matches;
            }
            else {
                this.show();
            }
        };
        /**
         * @protected
         * @param {?} options
         * @return {?}
         */
        TypeaheadDirective.prototype.prepareMatches = /**
         * @protected
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            /** @type {?} */
            var limited = options.slice(0, this.typeaheadOptionsLimit);
            /** @type {?} */
            var sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);
            if (this.typeaheadGroupField) {
                /** @type {?} */
                var matches_1 = [];
                // extract all group names
                /** @type {?} */
                var groups = sorted
                    .map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return getValueFromObject(option, _this.typeaheadGroupField);
                }))
                    .filter((/**
                 * @param {?} v
                 * @param {?} i
                 * @param {?} a
                 * @return {?}
                 */
                function (v, i, a) { return a.indexOf(v) === i; }));
                groups.forEach((/**
                 * @param {?} group
                 * @return {?}
                 */
                function (group) {
                    // add group header to array of matches
                    matches_1.push(new TypeaheadMatch(group, group, true));
                    // add each item of group to array of matches
                    matches_1 = matches_1.concat(sorted
                        .filter((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) {
                        return getValueFromObject(option, _this.typeaheadGroupField) === group;
                    }))
                        .map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) {
                        return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                    })));
                }));
                this._matches = matches_1;
            }
            else {
                this._matches = sorted.map((
                // tslint:disable-next-line:no-any
                // tslint:disable-next-line:no-any
                /**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                }));
            }
        };
        /**
         * @protected
         * @param {?} options
         * @return {?}
         */
        TypeaheadDirective.prototype.orderMatches = /**
         * @protected
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (!options.length) {
                return options;
            }
            if (this.typeaheadOrderBy !== null
                && this.typeaheadOrderBy !== undefined
                && typeof this.typeaheadOrderBy === 'object'
                && Object.keys(this.typeaheadOrderBy).length === 0) {
                // tslint:disable-next-line:no-console
                console.error('Field and direction properties for typeaheadOrderBy have to be set according to documentation!');
                return options;
            }
            var _a = this.typeaheadOrderBy, field = _a.field, direction = _a.direction;
            if (!direction || !(direction === 'asc' || direction === 'desc')) {
                // tslint:disable-next-line:no-console
                console.error('typeaheadOrderBy direction has to equal "asc" or "desc". Please follow the documentation.');
                return options;
            }
            if (typeof options[0] === 'string') {
                return direction === 'asc' ? options.sort() : options.sort().reverse();
            }
            if (!field || typeof field !== 'string') {
                // tslint:disable-next-line:no-console
                console.error('typeaheadOrderBy field has to set according to the documentation.');
                return options;
            }
            return options.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                /** @type {?} */
                var stringA = getValueFromObject(a, field);
                /** @type {?} */
                var stringB = getValueFromObject(b, field);
                if (stringA < stringB) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (stringA > stringB) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            }));
        };
        /**
         * @protected
         * @return {?}
         */
        TypeaheadDirective.prototype.hasMatches = /**
         * @protected
         * @return {?}
         */
        function () {
            return this._matches.length > 0;
        };
        /**
         * @protected
         * @return {?}
         */
        TypeaheadDirective.prototype.checkDelimitersConflict = /**
         * @protected
         * @return {?}
         */
        function () {
            if (this.typeaheadMultipleSearch && this.typeaheadSingleWords
                && (this.haveCommonCharacters("" + this.typeaheadPhraseDelimiters + this.typeaheadWordDelimiters, this.typeaheadMultipleSearchDelimiters))) {
                throw new Error("Delimiters used in typeaheadMultipleSearchDelimiters must be different\n          from delimiters used in typeaheadWordDelimiters (current value: " + this.typeaheadWordDelimiters + ") and\n          typeaheadPhraseDelimiters (current value: " + this.typeaheadPhraseDelimiters + ").\n          Please refer to the documentation");
            }
        };
        /**
         * @protected
         * @param {?} str1
         * @param {?} str2
         * @return {?}
         */
        TypeaheadDirective.prototype.haveCommonCharacters = /**
         * @protected
         * @param {?} str1
         * @param {?} str2
         * @return {?}
         */
        function (str1, str2) {
            for (var i = 0; i < str1.length; i++) {
                if (str1.charAt(i).indexOf(str2) > -1) {
                    return true;
                }
            }
            return false;
        };
        TypeaheadDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[typeahead]',
                        exportAs: 'bs-typeahead',
                        host: {
                            '[attr.aria-activedescendant]': 'activeDescendant',
                            '[attr.aria-owns]': 'isOpen ? this._container.popupId : null',
                            '[attr.aria-expanded]': 'isOpen',
                            '[attr.aria-autocomplete]': 'list'
                        }
                    },] }
        ];
        /** @nocollapse */
        TypeaheadDirective.ctorParameters = function () { return [
            { type: componentLoader.ComponentLoaderFactory },
            { type: TypeaheadConfig },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: forms.NgControl },
            { type: core.Renderer2 },
            { type: core.ViewContainerRef }
        ]; };
        TypeaheadDirective.propDecorators = {
            typeahead: [{ type: core.Input }],
            typeaheadMinLength: [{ type: core.Input }],
            adaptivePosition: [{ type: core.Input }],
            isAnimated: [{ type: core.Input }],
            typeaheadWaitMs: [{ type: core.Input }],
            typeaheadOptionsLimit: [{ type: core.Input }],
            typeaheadOptionField: [{ type: core.Input }],
            typeaheadGroupField: [{ type: core.Input }],
            typeaheadOrderBy: [{ type: core.Input }],
            typeaheadAsync: [{ type: core.Input }],
            typeaheadLatinize: [{ type: core.Input }],
            typeaheadSingleWords: [{ type: core.Input }],
            typeaheadWordDelimiters: [{ type: core.Input }],
            typeaheadMultipleSearch: [{ type: core.Input }],
            typeaheadMultipleSearchDelimiters: [{ type: core.Input }],
            typeaheadPhraseDelimiters: [{ type: core.Input }],
            typeaheadItemTemplate: [{ type: core.Input }],
            optionsListTemplate: [{ type: core.Input }],
            typeaheadScrollable: [{ type: core.Input }],
            typeaheadOptionsInScrollableView: [{ type: core.Input }],
            typeaheadHideResultsOnBlur: [{ type: core.Input }],
            typeaheadSelectFirstItem: [{ type: core.Input }],
            typeaheadIsFirstItemActive: [{ type: core.Input }],
            typeaheadLoading: [{ type: core.Output }],
            typeaheadNoResults: [{ type: core.Output }],
            typeaheadOnSelect: [{ type: core.Output }],
            typeaheadOnBlur: [{ type: core.Output }],
            container: [{ type: core.Input }],
            dropup: [{ type: core.Input }],
            onInput: [{ type: core.HostListener, args: ['input', ['$event'],] }],
            onChange: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
            onFocus: [{ type: core.HostListener, args: ['click',] }, { type: core.HostListener, args: ['focus',] }],
            onBlur: [{ type: core.HostListener, args: ['blur',] }],
            onKeydown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return TypeaheadDirective;
    }());
    if (false) {
        /**
         * options source, can be Array of strings, objects or
         * an Observable for external matching process
         * @type {?}
         */
        TypeaheadDirective.prototype.typeahead;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadMinLength;
        /**
         * sets use adaptive position
         * @type {?}
         */
        TypeaheadDirective.prototype.adaptivePosition;
        /**
         * turn on/off animation
         * @type {?}
         */
        TypeaheadDirective.prototype.isAnimated;
        /**
         * minimal wait time after last character typed before typeahead kicks-in
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadWaitMs;
        /**
         * maximum length of options items list. The default value is 20
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadOptionsLimit;
        /**
         * when options source is an array of objects, the name of field
         * that contains the options value, we use array item as option in case
         * of this field is missing. Supports nested properties and methods.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadOptionField;
        /**
         * when options source is an array of objects, the name of field that
         * contains the group value, matches are grouped by this field when set.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadGroupField;
        /**
         * Used to specify a custom order of matches. When options source is an array of objects
         * a field for sorting has to be set up. In case of options source is an array of string,
         * a field for sorting is absent. The ordering direction could be changed to ascending or descending.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadOrderBy;
        /**
         * should be used only in case of typeahead attribute is Observable of array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadAsync;
        /**
         * match latin symbols.
         * If true the word s??per would match super and vice versa.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadLatinize;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadSingleWords;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadWordDelimiters;
        /**
         * Can be used to conduct a search of multiple items and have suggestion not for the
         * whole value of the input but for the value that comes after a delimiter provided via
         * typeaheadMultipleSearchDelimiters attribute. This option can only be used together with
         * typeaheadSingleWords option if typeaheadWordDelimiters and typeaheadPhraseDelimiters
         * are different from typeaheadMultipleSearchDelimiters to avoid conflict in determining
         * when to delimit multiple searches and when a single word.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadMultipleSearch;
        /**
         * should be used only in case typeaheadMultipleSearch attribute is true.
         * Sets the multiple search delimiter to know when to start a new search. Defaults to comma.
         * If space needs to be used, then explicitly set typeaheadWordDelimiters to something else than space
         * because space is used by default OR set typeaheadSingleWords attribute to false if you don't need
         * to use it together with multiple search.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadMultipleSearchDelimiters;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadPhraseDelimiters;
        /**
         * used to specify a custom item template.
         * Template variables exposed are called item and index;
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadItemTemplate;
        /**
         * used to specify a custom options list template.
         * Template variables: matches, itemTemplate, query
         * @type {?}
         */
        TypeaheadDirective.prototype.optionsListTemplate;
        /**
         * specifies if typeahead is scrollable
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadScrollable;
        /**
         * specifies number of options to show in scroll view
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadOptionsInScrollableView;
        /**
         * used to hide result on blur
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadHideResultsOnBlur;
        /**
         * fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadSelectFirstItem;
        /**
         * makes active first item in a list
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadIsFirstItemActive;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadLoading;
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadNoResults;
        /**
         * fired when option was selected, return object with data of this option
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadOnSelect;
        /**
         * fired when blur event occurs. returns the active item
         * @type {?}
         */
        TypeaheadDirective.prototype.typeaheadOnBlur;
        /**
         * A selector specifying the element the typeahead should be appended to.
         * @type {?}
         */
        TypeaheadDirective.prototype.container;
        /**
         * This attribute indicates that the dropdown should be opened upwards
         * @type {?}
         */
        TypeaheadDirective.prototype.dropup;
        /**
         * if false don't focus the input element the typeahead directive is associated with on selection
         * @type {?}
         */
        TypeaheadDirective.prototype.activeDescendant;
        /** @type {?} */
        TypeaheadDirective.prototype.isOpen;
        /** @type {?} */
        TypeaheadDirective.prototype.list;
        /** @type {?} */
        TypeaheadDirective.prototype._container;
        /** @type {?} */
        TypeaheadDirective.prototype.isActiveItemChanged;
        /** @type {?} */
        TypeaheadDirective.prototype.isFocused;
        /** @type {?} */
        TypeaheadDirective.prototype.cancelRequestOnFocusLost;
        /**
         * @type {?}
         * @protected
         */
        TypeaheadDirective.prototype.keyUpEventEmitter;
        /**
         * @type {?}
         * @protected
         */
        TypeaheadDirective.prototype._matches;
        /**
         * @type {?}
         * @protected
         */
        TypeaheadDirective.prototype.placement;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype._typeahead;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype._subscriptions;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype._outsideClickListener;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype._allEnteredValue;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype.changeDetection;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype.element;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype.ngControl;
        /**
         * @type {?}
         * @private
         */
        TypeaheadDirective.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TypeaheadModule = /** @class */ (function () {
        function TypeaheadModule() {
        }
        /**
         * @return {?}
         */
        TypeaheadModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: TypeaheadModule,
                providers: [componentLoader.ComponentLoaderFactory, positioning.PositioningService]
            };
        };
        TypeaheadModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                        exports: [TypeaheadContainerComponent, TypeaheadDirective],
                        entryComponents: [TypeaheadContainerComponent]
                    },] }
        ];
        return TypeaheadModule;
    }());

    exports.TypeaheadConfig = TypeaheadConfig;
    exports.TypeaheadContainerComponent = TypeaheadContainerComponent;
    exports.TypeaheadDirective = TypeaheadDirective;
    exports.TypeaheadMatch = TypeaheadMatch;
    exports.TypeaheadModule = TypeaheadModule;
    exports.TypeaheadOptions = TypeaheadOptions;
    exports.TypeaheadOrder = TypeaheadOrder;
    exports.escapeRegexp = escapeRegexp;
    exports.getValueFromObject = getValueFromObject;
    exports.latinMap = latinMap;
    exports.latinize = latinize;
    exports.tokenize = tokenize;
    exports.??a = typeaheadAnimation;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-typeahead.umd.js.map
