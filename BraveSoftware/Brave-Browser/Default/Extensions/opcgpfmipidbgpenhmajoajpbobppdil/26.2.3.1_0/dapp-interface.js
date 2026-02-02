"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/process.js
  var process_exports = {};
  __export(process_exports, {
    _debugEnd: () => _debugEnd,
    _debugProcess: () => _debugProcess,
    _events: () => _events,
    _eventsCount: () => _eventsCount,
    _exiting: () => _exiting,
    _fatalExceptions: () => _fatalExceptions,
    _getActiveHandles: () => _getActiveHandles,
    _getActiveRequests: () => _getActiveRequests,
    _kill: () => _kill,
    _linkedBinding: () => _linkedBinding,
    _maxListeners: () => _maxListeners,
    _preload_modules: () => _preload_modules,
    _rawDebug: () => _rawDebug,
    _startProfilerIdleNotifier: () => _startProfilerIdleNotifier,
    _stopProfilerIdleNotifier: () => _stopProfilerIdleNotifier,
    _tickCallback: () => _tickCallback,
    abort: () => abort,
    addListener: () => addListener,
    allowedNodeEnvironmentFlags: () => allowedNodeEnvironmentFlags,
    arch: () => arch,
    argv: () => argv,
    argv0: () => argv0,
    assert: () => assert,
    binding: () => binding,
    browser: () => browser,
    chdir: () => chdir,
    config: () => config,
    cpuUsage: () => cpuUsage,
    cwd: () => cwd,
    debugPort: () => debugPort,
    default: () => process,
    dlopen: () => dlopen,
    domain: () => domain,
    emit: () => emit,
    emitWarning: () => emitWarning,
    env: () => env,
    execArgv: () => execArgv,
    execPath: () => execPath,
    exit: () => exit,
    features: () => features,
    hasUncaughtExceptionCaptureCallback: () => hasUncaughtExceptionCaptureCallback,
    hrtime: () => hrtime,
    kill: () => kill,
    listeners: () => listeners,
    memoryUsage: () => memoryUsage,
    moduleLoadList: () => moduleLoadList,
    nextTick: () => nextTick,
    off: () => off,
    on: () => on,
    once: () => once,
    openStdin: () => openStdin,
    pid: () => pid,
    platform: () => platform,
    ppid: () => ppid,
    prependListener: () => prependListener,
    prependOnceListener: () => prependOnceListener,
    reallyExit: () => reallyExit,
    release: () => release,
    removeAllListeners: () => removeAllListeners,
    removeListener: () => removeListener,
    resourceUsage: () => resourceUsage,
    setSourceMapsEnabled: () => setSourceMapsEnabled,
    setUncaughtExceptionCaptureCallback: () => setUncaughtExceptionCaptureCallback,
    stderr: () => stderr,
    stdin: () => stdin,
    stdout: () => stdout,
    title: () => title,
    umask: () => umask,
    uptime: () => uptime,
    version: () => version,
    versions: () => versions
  });
  function unimplemented(name) {
    throw new Error("Node.js process " + name + " is not supported by JSPM core outside of Node.js");
  }
  function cleanUpNextTick() {
    if (!draining || !currentQueue)
      return;
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length)
      drainQueue();
  }
  function drainQueue() {
    if (draining)
      return;
    var timeout = setTimeout(cleanUpNextTick, 0);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue)
          currentQueue[queueIndex].run();
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++)
        args[i - 1] = arguments[i];
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining)
      setTimeout(drainQueue, 0);
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function noop() {
  }
  function _linkedBinding(name) {
    unimplemented("_linkedBinding");
  }
  function dlopen(name) {
    unimplemented("dlopen");
  }
  function _getActiveRequests() {
    return [];
  }
  function _getActiveHandles() {
    return [];
  }
  function assert(condition, message) {
    if (!condition)
      throw new Error(message || "assertion error");
  }
  function hasUncaughtExceptionCaptureCallback() {
    return false;
  }
  function uptime() {
    return _performance.now() / 1e3;
  }
  function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
    var clocktime = _performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += nanoPerSec;
      }
    }
    return [seconds, nanoseconds];
  }
  function on() {
    return process;
  }
  function listeners(name) {
    return [];
  }
  var queue, draining, currentQueue, queueIndex, title, arch, platform, env, argv, execArgv, version, versions, emitWarning, binding, umask, cwd, chdir, release, browser, _rawDebug, moduleLoadList, domain, _exiting, config, reallyExit, _kill, cpuUsage, resourceUsage, memoryUsage, kill, exit, openStdin, allowedNodeEnvironmentFlags, features, _fatalExceptions, setUncaughtExceptionCaptureCallback, _tickCallback, _debugProcess, _debugEnd, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, stdout, stderr, stdin, abort, pid, ppid, execPath, debugPort, argv0, _preload_modules, setSourceMapsEnabled, _performance, nowOffset, nanoPerSec, _maxListeners, _events, _eventsCount, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, process;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      queue = [];
      draining = false;
      queueIndex = -1;
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      title = "browser";
      arch = "x64";
      platform = "browser";
      env = {
        PATH: "/usr/bin",
        LANG: typeof navigator !== "undefined" ? navigator.language + ".UTF-8" : void 0,
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      argv = ["/usr/bin/node"];
      execArgv = [];
      version = "v16.8.0";
      versions = {};
      emitWarning = function(message, type) {
        console.warn((type ? type + ": " : "") + message);
      };
      binding = function(name) {
        unimplemented("binding");
      };
      umask = function(mask) {
        return 0;
      };
      cwd = function() {
        return "/";
      };
      chdir = function(dir) {
      };
      release = {
        name: "node",
        sourceUrl: "",
        headersUrl: "",
        libUrl: ""
      };
      browser = true;
      _rawDebug = noop;
      moduleLoadList = [];
      domain = {};
      _exiting = false;
      config = {};
      reallyExit = noop;
      _kill = noop;
      cpuUsage = function() {
        return {};
      };
      resourceUsage = cpuUsage;
      memoryUsage = cpuUsage;
      kill = noop;
      exit = noop;
      openStdin = noop;
      allowedNodeEnvironmentFlags = {};
      features = {
        inspector: false,
        debug: false,
        uv: false,
        ipv6: false,
        tls_alpn: false,
        tls_sni: false,
        tls_ocsp: false,
        tls: false,
        cached_builtins: true
      };
      _fatalExceptions = noop;
      setUncaughtExceptionCaptureCallback = noop;
      _tickCallback = noop;
      _debugProcess = noop;
      _debugEnd = noop;
      _startProfilerIdleNotifier = noop;
      _stopProfilerIdleNotifier = noop;
      stdout = void 0;
      stderr = void 0;
      stdin = void 0;
      abort = noop;
      pid = 2;
      ppid = 1;
      execPath = "/bin/usr/node";
      debugPort = 9229;
      argv0 = "node";
      _preload_modules = [];
      setSourceMapsEnabled = noop;
      _performance = {
        now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
        timing: typeof performance !== "undefined" ? performance.timing : void 0
      };
      if (_performance.now === void 0) {
        nowOffset = Date.now();
        if (_performance.timing && _performance.timing.navigationStart) {
          nowOffset = _performance.timing.navigationStart;
        }
        _performance.now = () => Date.now() - nowOffset;
      }
      nanoPerSec = 1e9;
      hrtime.bigint = function(time) {
        var diff = hrtime(time);
        if (typeof BigInt === "undefined") {
          return diff[0] * nanoPerSec + diff[1];
        }
        return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
      };
      _maxListeners = 10;
      _events = {};
      _eventsCount = 0;
      addListener = on;
      once = on;
      off = on;
      removeListener = on;
      removeAllListeners = on;
      emit = noop;
      prependListener = on;
      prependOnceListener = on;
      process = {
        version,
        versions,
        arch,
        platform,
        browser,
        release,
        _rawDebug,
        moduleLoadList,
        binding,
        _linkedBinding,
        _events,
        _eventsCount,
        _maxListeners,
        on,
        addListener,
        once,
        off,
        removeListener,
        removeAllListeners,
        emit,
        prependListener,
        prependOnceListener,
        listeners,
        domain,
        _exiting,
        config,
        dlopen,
        uptime,
        _getActiveRequests,
        _getActiveHandles,
        reallyExit,
        _kill,
        cpuUsage,
        resourceUsage,
        memoryUsage,
        kill,
        exit,
        openStdin,
        allowedNodeEnvironmentFlags,
        assert,
        features,
        _fatalExceptions,
        setUncaughtExceptionCaptureCallback,
        hasUncaughtExceptionCaptureCallback,
        emitWarning,
        nextTick,
        _tickCallback,
        _debugProcess,
        _debugEnd,
        _startProfilerIdleNotifier,
        _stopProfilerIdleNotifier,
        stdout,
        stdin,
        stderr,
        abort,
        umask,
        chdir,
        cwd,
        env,
        title,
        argv,
        execArgv,
        pid,
        ppid,
        execPath,
        debugPort,
        hrtime,
        argv0,
        _preload_modules,
        setSourceMapsEnabled
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_process();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js
  function dew$2() {
    if (_dewExec$2)
      return exports$2;
    _dewExec$2 = true;
    exports$2.byteLength = byteLength;
    exports$2.toByteArray = toByteArray;
    exports$2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
    return exports$2;
  }
  function dew$1() {
    if (_dewExec$1)
      return exports$1;
    _dewExec$1 = true;
    exports$1.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports$1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
    return exports$1;
  }
  function dew() {
    if (_dewExec)
      return exports;
    _dewExec = true;
    const base64 = dew$2();
    const ieee754 = dew$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf))
              buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = function() {
      const alphabet2 = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet2[i] + alphabet2[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    return exports;
  }
  var exports$2, _dewExec$2, exports$1, _dewExec$1, exports, _dewExec;
  var init_chunk_DtuTasat = __esm({
    "node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      exports$2 = {};
      _dewExec$2 = false;
      exports$1 = {};
      _dewExec$1 = false;
      exports = {};
      _dewExec = false;
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/buffer.js
  var exports2, Buffer2, INSPECT_MAX_BYTES, kMaxLength;
  var init_buffer = __esm({
    "node_modules/@jspm/core/nodelibs/browser/buffer.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      init_chunk_DtuTasat();
      exports2 = dew();
      exports2["Buffer"];
      exports2["SlowBuffer"];
      exports2["INSPECT_MAX_BYTES"];
      exports2["kMaxLength"];
      Buffer2 = exports2.Buffer;
      INSPECT_MAX_BYTES = exports2.INSPECT_MAX_BYTES;
      kMaxLength = exports2.kMaxLength;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer();
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      (function() {
        function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              console.warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info[0],
                info[1]
              );
            }
          });
        }
        function getIteratorFn(maybeIterable) {
          if (null === maybeIterable || "object" !== typeof maybeIterable)
            return null;
          maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
          return "function" === typeof maybeIterable ? maybeIterable : null;
        }
        function warnNoop(publicInstance, callerName) {
          publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
          var warningKey = publicInstance + "." + callerName;
          didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function ComponentDummy() {
        }
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getComponentNameFromType(type) {
          if (null == type)
            return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
          if ("string" === typeof type)
            return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
              return "Activity";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE)
            return "<>";
          if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
            return "<...>";
          try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
          } catch (x) {
            return "<...>";
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error("react-stack-top-frame");
        }
        function hasValidKey(config2) {
          if (hasOwnProperty.call(config2, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
            if (getter && getter.isReactWarning)
              return false;
          }
          return void 0 !== config2.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
          self = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.defineProperty(type, "_debugStack", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugStack
          });
          Object.defineProperty(type, "_debugTask", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugTask
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          newKey = ReactElement(
            oldElement.type,
            newKey,
            void 0,
            void 0,
            oldElement._owner,
            oldElement.props,
            oldElement._debugStack,
            oldElement._debugTask
          );
          oldElement._store && (newKey._store.validated = oldElement._store.validated);
          return newKey;
        }
        function isValidElement(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function escape(key) {
          var escaperLookup = { "=": "=0", ":": "=2" };
          return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
          });
        }
        function getElementKey(element, index) {
          return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
        }
        function noop$1() {
        }
        function resolveThenable(thenable) {
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
            default:
              switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
                function(fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                },
                function(error) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              )), thenable.status) {
                case "fulfilled":
                  return thenable.value;
                case "rejected":
                  throw thenable.reason;
              }
          }
          throw thenable;
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if ("undefined" === type || "boolean" === type)
            children = null;
          var invokeCallback = false;
          if (null === children)
            invokeCallback = true;
          else
            switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    );
                }
            }
          if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
              return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
              callback,
              escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
                userProvidedKeyEscapeRegex,
                "$&/"
              ) + "/") + childKey
            ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
          }
          invokeCallback = 0;
          childKey = "" === nameSoFar ? "." : nameSoFar + ":";
          if (isArrayImpl(children))
            for (var i = 0; i < children.length; i++)
              nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if (i = getIteratorFn(children), "function" === typeof i)
            for (i === children.entries && (didWarnAboutMaps || console.warn(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
              nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if ("object" === type) {
            if ("function" === typeof children.then)
              return mapIntoArray(
                resolveThenable(children),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
            array = String(children);
            throw Error(
              "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
            );
          }
          return invokeCallback;
        }
        function mapChildren(children, func, context) {
          if (null == children)
            return children;
          var result = [], count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function lazyInitializer(payload) {
          if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(
              function(moduleObject) {
                if (0 === payload._status || -1 === payload._status)
                  payload._status = 1, payload._result = moduleObject;
              },
              function(error) {
                if (0 === payload._status || -1 === payload._status)
                  payload._status = 2, payload._result = error;
              }
            );
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
          }
          if (1 === payload._status)
            return ctor = payload._result, void 0 === ctor && console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ), "default" in ctor || console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ), ctor.default;
          throw payload._result;
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        function noop6() {
        }
        function enqueueTask(task) {
          if (null === enqueueTaskImpl)
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              enqueueTaskImpl = (module && module[requireString]).call(
                module,
                "timers"
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          return enqueueTaskImpl(task);
        }
        function aggregateErrors(errors) {
          return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
          prevActScopeDepth !== actScopeDepth - 1 && console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
          actScopeDepth = prevActScopeDepth;
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          var queue2 = ReactSharedInternals.actQueue;
          if (null !== queue2)
            if (0 !== queue2.length)
              try {
                flushActQueue(queue2);
                enqueueTask(function() {
                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
              } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
              }
            else
              ReactSharedInternals.actQueue = null;
          0 < ReactSharedInternals.thrownErrors.length ? (queue2 = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue2)) : resolve(returnValue);
        }
        function flushActQueue(queue2) {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (; i < queue2.length; i++) {
                var callback = queue2[i];
                do {
                  ReactSharedInternals.didUsePromise = false;
                  var continuation = callback(false);
                  if (null !== continuation) {
                    if (ReactSharedInternals.didUsePromise) {
                      queue2[i] = callback;
                      queue2.splice(0, i);
                      return;
                    }
                    callback = continuation;
                  } else
                    break;
                } while (1);
              }
              queue2.length = 0;
            } catch (error) {
              queue2.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally {
              isFlushing = false;
            }
          }
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
          }
        }, assign = Object.assign, emptyObject = {};
        Object.freeze(emptyObject);
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
          ]
        }, fnName;
        for (fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        ComponentDummy.prototype = Component.prototype;
        deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
        deprecatedAPIs.constructor = PureComponent;
        assign(deprecatedAPIs, Component.prototype);
        deprecatedAPIs.isPureReactComponent = true;
        var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          V: null,
          actQueue: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null,
          recentlyCreatedOwnerStacks: 0
        }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
          return null;
        };
        deprecatedAPIs = {
          "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
          }
        };
        var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
          if ("object" === typeof globalThis && "function" === typeof globalThis.ErrorEvent) {
            var event = new globalThis.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
              error
            });
            if (!globalThis.dispatchEvent(event))
              return;
          } else if ("object" === typeof process_exports && "function" === typeof process_exports.emit) {
            process_exports.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
          queueMicrotask(function() {
            return queueMicrotask(callback);
          });
        } : enqueueTask;
        deprecatedAPIs = Object.freeze({
          __proto__: null,
          c: function(size) {
            return resolveDispatcher().useMemoCache(size);
          }
        });
        exports3.Children = {
          map: mapChildren,
          forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function() {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          },
          count: function(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          },
          toArray: function(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          },
          only: function(children) {
            if (!isValidElement(children))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return children;
          }
        };
        exports3.Component = Component;
        exports3.Fragment = REACT_FRAGMENT_TYPE;
        exports3.Profiler = REACT_PROFILER_TYPE;
        exports3.PureComponent = PureComponent;
        exports3.StrictMode = REACT_STRICT_MODE_TYPE;
        exports3.Suspense = REACT_SUSPENSE_TYPE;
        exports3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
        exports3.__COMPILER_RUNTIME = deprecatedAPIs;
        exports3.act = function(callback) {
          var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          var queue2 = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
          try {
            var result = callback();
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
              didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
            });
            return {
              then: function(resolve, reject) {
                didAwaitActCall = true;
                thenable.then(
                  function(returnValue) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (0 === prevActScopeDepth) {
                      try {
                        flushActQueue(queue2), enqueueTask(function() {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        });
                      } catch (error$0) {
                        ReactSharedInternals.thrownErrors.push(error$0);
                      }
                      if (0 < ReactSharedInternals.thrownErrors.length) {
                        var _thrownError = aggregateErrors(
                          ReactSharedInternals.thrownErrors
                        );
                        ReactSharedInternals.thrownErrors.length = 0;
                        reject(_thrownError);
                      }
                    } else
                      resolve(returnValue);
                  },
                  function(error) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                  }
                );
              }
            };
          }
          var returnValue$jscomp$0 = result;
          popActScope(prevActQueue, prevActScopeDepth);
          0 === prevActScopeDepth && (flushActQueue(queue2), 0 !== queue2.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
            ));
          }), ReactSharedInternals.actQueue = null);
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue2, enqueueTask(function() {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              })) : resolve(returnValue$jscomp$0);
            }
          };
        };
        exports3.cache = function(fn) {
          return function() {
            return fn.apply(null, arguments);
          };
        };
        exports3.captureOwnerStack = function() {
          var getCurrentStack = ReactSharedInternals.getCurrentStack;
          return null === getCurrentStack ? null : getCurrentStack();
        };
        exports3.cloneElement = function(element, config2, children) {
          if (null === element || void 0 === element)
            throw Error(
              "The argument must be a React element, but you passed " + element + "."
            );
          var props = assign({}, element.props), key = element.key, owner = element._owner;
          if (null != config2) {
            var JSCompiler_inline_result;
            a: {
              if (hasOwnProperty.call(config2, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config2,
                "ref"
              ).get) && JSCompiler_inline_result.isReactWarning) {
                JSCompiler_inline_result = false;
                break a;
              }
              JSCompiler_inline_result = void 0 !== config2.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config2) && (checkKeyStringCoercion(config2.key), key = "" + config2.key);
            for (propName in config2)
              !hasOwnProperty.call(config2, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config2.ref || (props[propName] = config2[propName]);
          }
          var propName = arguments.length - 2;
          if (1 === propName)
            props.children = children;
          else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for (var i = 0; i < propName; i++)
              JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
          }
          props = ReactElement(
            element.type,
            key,
            void 0,
            void 0,
            owner,
            props,
            element._debugStack,
            element._debugTask
          );
          for (key = 2; key < arguments.length; key++)
            owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
          return props;
        };
        exports3.createContext = function(defaultValue) {
          defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          defaultValue.Provider = defaultValue;
          defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
          };
          defaultValue._currentRenderer = null;
          defaultValue._currentRenderer2 = null;
          return defaultValue;
        };
        exports3.createElement = function(type, config2, children) {
          for (var i = 2; i < arguments.length; i++) {
            var node = arguments[i];
            isValidElement(node) && node._store && (node._store.validated = 1);
          }
          i = {};
          node = null;
          if (null != config2)
            for (propName in didWarnAboutOldJSXRuntime || !("__self" in config2) || "key" in config2 || (didWarnAboutOldJSXRuntime = true, console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )), hasValidKey(config2) && (checkKeyStringCoercion(config2.key), node = "" + config2.key), config2)
              hasOwnProperty.call(config2, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config2[propName]);
          var childrenLength = arguments.length - 2;
          if (1 === childrenLength)
            i.children = children;
          else if (1 < childrenLength) {
            for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
              childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
          }
          if (type && type.defaultProps)
            for (propName in childrenLength = type.defaultProps, childrenLength)
              void 0 === i[propName] && (i[propName] = childrenLength[propName]);
          node && defineKeyPropWarningGetter(
            i,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          return ReactElement(
            type,
            node,
            void 0,
            void 0,
            getOwner(),
            i,
            propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
            propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
          );
        };
        exports3.createRef = function() {
          var refObject = { current: null };
          Object.seal(refObject);
          return refObject;
        };
        exports3.forwardRef = function(render) {
          null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          ) : "function" !== typeof render ? console.error(
            "forwardRef requires a render function but was given %s.",
            null === render ? "null" : typeof render
          ) : 0 !== render.length && 2 !== render.length && console.error(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
          );
          null != render && null != render.defaultProps && console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
          var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
            }
          });
          return elementType;
        };
        exports3.isValidElement = isValidElement;
        exports3.lazy = function(ctor) {
          return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: { _status: -1, _result: ctor },
            _init: lazyInitializer
          };
        };
        exports3.memo = function(type, compare) {
          null == type && console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
          compare = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: void 0 === compare ? null : compare
          };
          var ownName;
          Object.defineProperty(compare, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
            }
          });
          return compare;
        };
        exports3.startTransition = function(scope) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          ReactSharedInternals.T = currentTransition;
          currentTransition._updatedFibers = /* @__PURE__ */ new Set();
          try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop6, reportGlobalError);
          } catch (error) {
            reportGlobalError(error);
          } finally {
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )), ReactSharedInternals.T = prevTransition;
          }
        };
        exports3.unstable_useCacheRefresh = function() {
          return resolveDispatcher().useCacheRefresh();
        };
        exports3.use = function(usable) {
          return resolveDispatcher().use(usable);
        };
        exports3.useActionState = function(action, initialState, permalink) {
          return resolveDispatcher().useActionState(
            action,
            initialState,
            permalink
          );
        };
        exports3.useCallback = function(callback, deps) {
          return resolveDispatcher().useCallback(callback, deps);
        };
        exports3.useContext = function(Context) {
          var dispatcher = resolveDispatcher();
          Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
          return dispatcher.useContext(Context);
        };
        exports3.useDebugValue = function(value, formatterFn) {
          return resolveDispatcher().useDebugValue(value, formatterFn);
        };
        exports3.useDeferredValue = function(value, initialValue) {
          return resolveDispatcher().useDeferredValue(value, initialValue);
        };
        exports3.useEffect = function(create, createDeps, update) {
          null == create && console.warn(
            "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          var dispatcher = resolveDispatcher();
          if ("function" === typeof update)
            throw Error(
              "useEffect CRUD overload is not enabled in this build of React."
            );
          return dispatcher.useEffect(create, createDeps);
        };
        exports3.useId = function() {
          return resolveDispatcher().useId();
        };
        exports3.useImperativeHandle = function(ref, create, deps) {
          return resolveDispatcher().useImperativeHandle(ref, create, deps);
        };
        exports3.useInsertionEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useInsertionEffect(create, deps);
        };
        exports3.useLayoutEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useLayoutEffect(create, deps);
        };
        exports3.useMemo = function(create, deps) {
          return resolveDispatcher().useMemo(create, deps);
        };
        exports3.useOptimistic = function(passthrough, reducer) {
          return resolveDispatcher().useOptimistic(passthrough, reducer);
        };
        exports3.useReducer = function(reducer, initialArg, init) {
          return resolveDispatcher().useReducer(reducer, initialArg, init);
        };
        exports3.useRef = function(initialValue) {
          return resolveDispatcher().useRef(initialValue);
        };
        exports3.useState = function(initialState) {
          return resolveDispatcher().useState(initialState);
        };
        exports3.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
          return resolveDispatcher().useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        };
        exports3.useTransition = function() {
          return resolveDispatcher().useTransition();
        };
        exports3.version = "19.1.0";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      (function() {
        function getComponentNameFromType(type) {
          if (null == type)
            return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
          if ("string" === typeof type)
            return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
              return "Activity";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE)
            return "<>";
          if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
            return "<...>";
          try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
          } catch (x) {
            return "<...>";
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error("react-stack-top-frame");
        }
        function hasValidKey(config2) {
          if (hasOwnProperty.call(config2, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
            if (getter && getter.isReactWarning)
              return false;
          }
          return void 0 !== config2.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
          self = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.defineProperty(type, "_debugStack", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugStack
          });
          Object.defineProperty(type, "_debugTask", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugTask
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function jsxDEVImpl(type, config2, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
          var children = config2.children;
          if (void 0 !== children)
            if (isStaticChildren)
              if (isArrayImpl(children)) {
                for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                  validateChildKeys(children[isStaticChildren]);
                Object.freeze && Object.freeze(children);
              } else
                console.error(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                );
            else
              validateChildKeys(children);
          if (hasOwnProperty.call(config2, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config2).filter(function(k) {
              return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
              'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
              isStaticChildren,
              children,
              keys,
              children
            ), didWarnAboutKeySpread[children + isStaticChildren] = true);
          }
          children = null;
          void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
          hasValidKey(config2) && (checkKeyStringCoercion(config2.key), children = "" + config2.key);
          if ("key" in config2) {
            maybeKey = {};
            for (var propName in config2)
              "key" !== propName && (maybeKey[propName] = config2[propName]);
          } else
            maybeKey = config2;
          children && defineKeyPropWarningGetter(
            maybeKey,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          return ReactElement(
            type,
            children,
            self,
            source,
            getOwner(),
            maybeKey,
            debugStack,
            debugTask
          );
        }
        function validateChildKeys(node) {
          "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
        }
        var React10 = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React10.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
          return null;
        };
        React10 = {
          "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
          }
        };
        var specialPropKeyWarningShown;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = React10["react-stack-bottom-frame"].bind(
          React10,
          UnknownOwner
        )();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutKeySpread = {};
        exports3.Fragment = REACT_FRAGMENT_TYPE;
        exports3.jsx = function(type, config2, maybeKey, source, self) {
          var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          return jsxDEVImpl(
            type,
            config2,
            maybeKey,
            false,
            source,
            self,
            trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
            trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
          );
        };
        exports3.jsxs = function(type, config2, maybeKey, source, self) {
          var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          return jsxDEVImpl(
            type,
            config2,
            maybeKey,
            true,
            source,
            self,
            trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
            trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
          );
        };
      })();
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // src/dapp-interface/extension.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@wallet-standard/wallet/lib/esm/register.js
  init_dirname();
  init_buffer2();
  init_process2();
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var _RegisterWalletEvent_detail;
  function registerWallet(wallet) {
    const callback = ({ register }) => register(wallet);
    try {
      globalThis.dispatchEvent(new RegisterWalletEvent(callback));
    } catch (error) {
      console.error("wallet-standard:register-wallet event could not be dispatched\n", error);
    }
    try {
      globalThis.addEventListener("wallet-standard:app-ready", ({ detail: api }) => callback(api));
    } catch (error) {
      console.error("wallet-standard:app-ready event listener could not be added\n", error);
    }
  }
  var RegisterWalletEvent = class extends Event {
    get detail() {
      return __classPrivateFieldGet(this, _RegisterWalletEvent_detail, "f");
    }
    get type() {
      return "wallet-standard:register-wallet";
    }
    constructor(callback) {
      super("wallet-standard:register-wallet", {
        bubbles: false,
        cancelable: false,
        composed: false
      });
      _RegisterWalletEvent_detail.set(this, void 0);
      __classPrivateFieldSet(this, _RegisterWalletEvent_detail, callback, "f");
    }
    /** @deprecated */
    preventDefault() {
      throw new Error("preventDefault cannot be called");
    }
    /** @deprecated */
    stopImmediatePropagation() {
      throw new Error("stopImmediatePropagation cannot be called");
    }
    /** @deprecated */
    stopPropagation() {
      throw new Error("stopPropagation cannot be called");
    }
  };
  _RegisterWalletEvent_detail = /* @__PURE__ */ new WeakMap();

  // node_modules/@wallet-standard/wallet/lib/esm/util.js
  init_dirname();
  init_buffer2();
  init_process2();
  var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var _ReadonlyWalletAccount_address;
  var _ReadonlyWalletAccount_publicKey;
  var _ReadonlyWalletAccount_chains;
  var _ReadonlyWalletAccount_features;
  var _ReadonlyWalletAccount_label;
  var _ReadonlyWalletAccount_icon;
  var ReadonlyWalletAccount = class _ReadonlyWalletAccount {
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.address | WalletAccount::address} */
    get address() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_address, "f");
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.publicKey | WalletAccount::publicKey} */
    get publicKey() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_publicKey, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.chains | WalletAccount::chains} */
    get chains() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_chains, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.features | WalletAccount::features} */
    get features() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_features, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.label | WalletAccount::label} */
    get label() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_label, "f");
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.icon | WalletAccount::icon} */
    get icon() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_icon, "f");
    }
    /**
     * Create and freeze a read-only account.
     *
     * @param account Account to copy properties from.
     */
    constructor(account) {
      _ReadonlyWalletAccount_address.set(this, void 0);
      _ReadonlyWalletAccount_publicKey.set(this, void 0);
      _ReadonlyWalletAccount_chains.set(this, void 0);
      _ReadonlyWalletAccount_features.set(this, void 0);
      _ReadonlyWalletAccount_label.set(this, void 0);
      _ReadonlyWalletAccount_icon.set(this, void 0);
      if (new.target === _ReadonlyWalletAccount) {
        Object.freeze(this);
      }
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_address, account.address, "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_publicKey, account.publicKey.slice(), "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_chains, account.chains.slice(), "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_features, account.features.slice(), "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_label, account.label, "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_icon, account.icon, "f");
    }
  };
  _ReadonlyWalletAccount_address = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_publicKey = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_chains = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_features = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_label = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_icon = /* @__PURE__ */ new WeakMap();

  // node_modules/@mysten/sui/dist/esm/bcs/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/utils/dist/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/utils/dist/esm/b58.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@scure/base/lib/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
  }
  function isArrayOf(isString, arr) {
    if (!Array.isArray(arr))
      return false;
    if (arr.length === 0)
      return true;
    if (isString) {
      return arr.every((item) => typeof item === "string");
    } else {
      return arr.every((item) => Number.isSafeInteger(item));
    }
  }
  function astr(label, input) {
    if (typeof input !== "string")
      throw new Error(`${label}: string expected`);
    return true;
  }
  function anumber(n) {
    if (!Number.isSafeInteger(n))
      throw new Error(`invalid integer: ${n}`);
  }
  function aArr(input) {
    if (!Array.isArray(input))
      throw new Error("array expected");
  }
  function astrArr(label, input) {
    if (!isArrayOf(true, input))
      throw new Error(`${label}: array of strings expected`);
  }
  function anumArr(label, input) {
    if (!isArrayOf(false, input))
      throw new Error(`${label}: array of numbers expected`);
  }
  // @__NO_SIDE_EFFECTS__
  function chain(...args) {
    const id = (a) => a;
    const wrap = (a, b) => (c) => a(b(c));
    const encode = args.map((x) => x.encode).reduceRight(wrap, id);
    const decode = args.map((x) => x.decode).reduce(wrap, id);
    return { encode, decode };
  }
  // @__NO_SIDE_EFFECTS__
  function alphabet(letters) {
    const lettersA = typeof letters === "string" ? letters.split("") : letters;
    const len = lettersA.length;
    astrArr("alphabet", lettersA);
    const indexes = new Map(lettersA.map((l, i) => [l, i]));
    return {
      encode: (digits) => {
        aArr(digits);
        return digits.map((i) => {
          if (!Number.isSafeInteger(i) || i < 0 || i >= len)
            throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
          return lettersA[i];
        });
      },
      decode: (input) => {
        aArr(input);
        return input.map((letter) => {
          astr("alphabet.decode", letter);
          const i = indexes.get(letter);
          if (i === void 0)
            throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
          return i;
        });
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function join(separator = "") {
    astr("join", separator);
    return {
      encode: (from) => {
        astrArr("join.decode", from);
        return from.join(separator);
      },
      decode: (to) => {
        astr("join.decode", to);
        return to.split(separator);
      }
    };
  }
  function convertRadix(data, from, to) {
    if (from < 2)
      throw new Error(`convertRadix: invalid from=${from}, base cannot be less than 2`);
    if (to < 2)
      throw new Error(`convertRadix: invalid to=${to}, base cannot be less than 2`);
    aArr(data);
    if (!data.length)
      return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data, (d) => {
      anumber(d);
      if (d < 0 || d >= from)
        throw new Error(`invalid integer: ${d}`);
      return d;
    });
    const dlen = digits.length;
    while (true) {
      let carry = 0;
      let done = true;
      for (let i = pos; i < dlen; i++) {
        const digit = digits[i];
        const fromCarry = from * carry;
        const digitBase = fromCarry + digit;
        if (!Number.isSafeInteger(digitBase) || fromCarry / from !== carry || digitBase - digit !== fromCarry) {
          throw new Error("convertRadix: carry overflow");
        }
        const div = digitBase / to;
        carry = digitBase % to;
        const rounded = Math.floor(div);
        digits[i] = rounded;
        if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
          throw new Error("convertRadix: carry overflow");
        if (!done)
          continue;
        else if (!rounded)
          pos = i;
        else
          done = false;
      }
      res.push(carry);
      if (done)
        break;
    }
    for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
      res.push(0);
    return res.reverse();
  }
  // @__NO_SIDE_EFFECTS__
  function radix(num) {
    anumber(num);
    const _256 = 2 ** 8;
    return {
      encode: (bytes) => {
        if (!isBytes(bytes))
          throw new Error("radix.encode input should be Uint8Array");
        return convertRadix(Array.from(bytes), _256, num);
      },
      decode: (digits) => {
        anumArr("radix.decode", digits);
        return Uint8Array.from(convertRadix(digits, num, _256));
      }
    };
  }
  var genBase58 = /* @__NO_SIDE_EFFECTS__ */ (abc) => /* @__PURE__ */ chain(/* @__PURE__ */ radix(58), /* @__PURE__ */ alphabet(abc), /* @__PURE__ */ join(""));
  var base58 = /* @__PURE__ */ genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");

  // node_modules/@mysten/utils/dist/esm/b58.js
  var toBase58 = (buffer) => base58.encode(buffer);
  var fromBase58 = (str) => base58.decode(str);

  // node_modules/@mysten/utils/dist/esm/b64.js
  init_dirname();
  init_buffer2();
  init_process2();
  function fromBase64(base64String2) {
    return Uint8Array.from(atob(base64String2), (char) => char.charCodeAt(0));
  }
  var CHUNK_SIZE = 8192;
  function toBase64(bytes) {
    if (bytes.length < CHUNK_SIZE) {
      return btoa(String.fromCharCode(...bytes));
    }
    let output = "";
    for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {
      const chunk = bytes.slice(i, i + CHUNK_SIZE);
      output += String.fromCharCode(...chunk);
    }
    return btoa(output);
  }

  // node_modules/@mysten/utils/dist/esm/hex.js
  init_dirname();
  init_buffer2();
  init_process2();
  function fromHex(hexStr) {
    const normalized = hexStr.startsWith("0x") ? hexStr.slice(2) : hexStr;
    const padded = normalized.length % 2 === 0 ? normalized : `0${normalized}`;
    const intArr = padded.match(/[0-9a-fA-F]{2}/g)?.map((byte) => parseInt(byte, 16)) ?? [];
    if (intArr.length !== padded.length / 2) {
      throw new Error(`Invalid hex string ${hexStr}`);
    }
    return Uint8Array.from(intArr);
  }
  function toHex(bytes) {
    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
  }

  // node_modules/@mysten/bcs/dist/esm/bcs-type.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/reader.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/uleb.js
  init_dirname();
  init_buffer2();
  init_process2();
  function ulebEncode(num) {
    let bigNum = BigInt(num);
    const arr = [];
    let len = 0;
    if (bigNum === 0n) {
      return [0];
    }
    while (bigNum > 0) {
      arr[len] = Number(bigNum & 0x7fn);
      bigNum >>= 7n;
      if (bigNum > 0n) {
        arr[len] |= 128;
      }
      len += 1;
    }
    return arr;
  }
  function ulebDecode(arr) {
    let total = 0n;
    let shift = 0n;
    let len = 0;
    while (true) {
      if (len >= arr.length) {
        throw new Error("ULEB decode error: buffer overflow");
      }
      const byte = arr[len];
      len += 1;
      total += BigInt(byte & 127) << shift;
      if ((byte & 128) === 0) {
        break;
      }
      shift += 7n;
    }
    if (total > BigInt(Number.MAX_SAFE_INTEGER)) {
      throw new Error("ULEB decode error: value exceeds MAX_SAFE_INTEGER");
    }
    return {
      value: Number(total),
      length: len
    };
  }

  // node_modules/@mysten/bcs/dist/esm/reader.js
  var BcsReader = class {
    /**
     * @param {Uint8Array} data Data to use as a buffer.
     */
    constructor(data) {
      this.bytePosition = 0;
      this.dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
    }
    /**
     * Shift current cursor position by `bytes`.
     *
     * @param {Number} bytes Number of bytes to
     * @returns {this} Self for possible chaining.
     */
    shift(bytes) {
      this.bytePosition += bytes;
      return this;
    }
    /**
     * Read U8 value from the buffer and shift cursor by 1.
     * @returns
     */
    read8() {
      const value = this.dataView.getUint8(this.bytePosition);
      this.shift(1);
      return value;
    }
    /**
     * Read U16 value from the buffer and shift cursor by 2.
     * @returns
     */
    read16() {
      const value = this.dataView.getUint16(this.bytePosition, true);
      this.shift(2);
      return value;
    }
    /**
     * Read U32 value from the buffer and shift cursor by 4.
     * @returns
     */
    read32() {
      const value = this.dataView.getUint32(this.bytePosition, true);
      this.shift(4);
      return value;
    }
    /**
     * Read U64 value from the buffer and shift cursor by 8.
     * @returns
     */
    read64() {
      const value1 = this.read32();
      const value2 = this.read32();
      const result = value2.toString(16) + value1.toString(16).padStart(8, "0");
      return BigInt("0x" + result).toString(10);
    }
    /**
     * Read U128 value from the buffer and shift cursor by 16.
     */
    read128() {
      const value1 = BigInt(this.read64());
      const value2 = BigInt(this.read64());
      const result = value2.toString(16) + value1.toString(16).padStart(16, "0");
      return BigInt("0x" + result).toString(10);
    }
    /**
     * Read U128 value from the buffer and shift cursor by 32.
     * @returns
     */
    read256() {
      const value1 = BigInt(this.read128());
      const value2 = BigInt(this.read128());
      const result = value2.toString(16) + value1.toString(16).padStart(32, "0");
      return BigInt("0x" + result).toString(10);
    }
    /**
     * Read `num` number of bytes from the buffer and shift cursor by `num`.
     * @param num Number of bytes to read.
     */
    readBytes(num) {
      const start = this.bytePosition + this.dataView.byteOffset;
      const value = new Uint8Array(this.dataView.buffer, start, num);
      this.shift(num);
      return value;
    }
    /**
     * Read ULEB value - an integer of varying size. Used for enum indexes and
     * vector lengths.
     * @returns {Number} The ULEB value.
     */
    readULEB() {
      const start = this.bytePosition + this.dataView.byteOffset;
      const buffer = new Uint8Array(this.dataView.buffer, start);
      const { value, length } = ulebDecode(buffer);
      this.shift(length);
      return value;
    }
    /**
     * Read a BCS vector: read a length and then apply function `cb` X times
     * where X is the length of the vector, defined as ULEB in BCS bytes.
     * @param cb Callback to process elements of vector.
     * @returns {Array<Any>} Array of the resulting values, returned by callback.
     */
    readVec(cb) {
      const length = this.readULEB();
      const result = [];
      for (let i = 0; i < length; i++) {
        result.push(cb(this, i, length));
      }
      return result;
    }
  };

  // node_modules/@mysten/bcs/dist/esm/writer.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/utils.js
  init_dirname();
  init_buffer2();
  init_process2();
  function encodeStr(data, encoding) {
    switch (encoding) {
      case "base58":
        return toBase58(data);
      case "base64":
        return toBase64(data);
      case "hex":
        return toHex(data);
      default:
        throw new Error("Unsupported encoding, supported values are: base64, hex");
    }
  }
  function splitGenericParameters(str, genericSeparators = ["<", ">"]) {
    const [left, right] = genericSeparators;
    const tok = [];
    let word = "";
    let nestedAngleBrackets = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === left) {
        nestedAngleBrackets++;
      }
      if (char === right) {
        nestedAngleBrackets--;
      }
      if (nestedAngleBrackets === 0 && char === ",") {
        tok.push(word.trim());
        word = "";
        continue;
      }
      word += char;
    }
    tok.push(word.trim());
    return tok;
  }

  // node_modules/@mysten/bcs/dist/esm/writer.js
  var BcsWriter = class {
    constructor({
      initialSize = 1024,
      maxSize = Infinity,
      allocateSize = 1024
    } = {}) {
      this.bytePosition = 0;
      this.size = initialSize;
      this.maxSize = maxSize;
      this.allocateSize = allocateSize;
      this.dataView = new DataView(new ArrayBuffer(initialSize));
    }
    ensureSizeOrGrow(bytes) {
      const requiredSize = this.bytePosition + bytes;
      if (requiredSize > this.size) {
        const nextSize = Math.min(
          this.maxSize,
          Math.max(this.size + requiredSize, this.size + this.allocateSize)
        );
        if (requiredSize > nextSize) {
          throw new Error(
            `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${requiredSize}`
          );
        }
        this.size = nextSize;
        const nextBuffer = new ArrayBuffer(this.size);
        new Uint8Array(nextBuffer).set(new Uint8Array(this.dataView.buffer));
        this.dataView = new DataView(nextBuffer);
      }
    }
    /**
     * Shift current cursor position by `bytes`.
     *
     * @param {Number} bytes Number of bytes to
     * @returns {this} Self for possible chaining.
     */
    shift(bytes) {
      this.bytePosition += bytes;
      return this;
    }
    /**
     * Write a U8 value into a buffer and shift cursor position by 1.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    write8(value) {
      this.ensureSizeOrGrow(1);
      this.dataView.setUint8(this.bytePosition, Number(value));
      return this.shift(1);
    }
    /**
     * Write a U8 value into a buffer and shift cursor position by 1.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    writeBytes(bytes) {
      this.ensureSizeOrGrow(bytes.length);
      for (let i = 0; i < bytes.length; i++) {
        this.dataView.setUint8(this.bytePosition + i, bytes[i]);
      }
      return this.shift(bytes.length);
    }
    /**
     * Write a U16 value into a buffer and shift cursor position by 2.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    write16(value) {
      this.ensureSizeOrGrow(2);
      this.dataView.setUint16(this.bytePosition, Number(value), true);
      return this.shift(2);
    }
    /**
     * Write a U32 value into a buffer and shift cursor position by 4.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    write32(value) {
      this.ensureSizeOrGrow(4);
      this.dataView.setUint32(this.bytePosition, Number(value), true);
      return this.shift(4);
    }
    /**
     * Write a U64 value into a buffer and shift cursor position by 8.
     * @param {bigint} value Value to write.
     * @returns {this}
     */
    write64(value) {
      toLittleEndian(BigInt(value), 8).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a U128 value into a buffer and shift cursor position by 16.
     *
     * @param {bigint} value Value to write.
     * @returns {this}
     */
    write128(value) {
      toLittleEndian(BigInt(value), 16).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a U256 value into a buffer and shift cursor position by 16.
     *
     * @param {bigint} value Value to write.
     * @returns {this}
     */
    write256(value) {
      toLittleEndian(BigInt(value), 32).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a ULEB value into a buffer and shift cursor position by number of bytes
     * written.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    writeULEB(value) {
      ulebEncode(value).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a vector into a buffer by first writing the vector length and then calling
     * a callback on each passed value.
     *
     * @param {Array<Any>} vector Array of elements to write.
     * @param {WriteVecCb} cb Callback to call on each element of the vector.
     * @returns {this}
     */
    writeVec(vector2, cb) {
      this.writeULEB(vector2.length);
      Array.from(vector2).forEach((el, i) => cb(this, el, i, vector2.length));
      return this;
    }
    /**
     * Adds support for iterations over the object.
     * @returns {Uint8Array}
     */
    // oxlint-disable-next-line require-yields
    *[Symbol.iterator]() {
      for (let i = 0; i < this.bytePosition; i++) {
        yield this.dataView.getUint8(i);
      }
      return this.toBytes();
    }
    /**
     * Get underlying buffer taking only value bytes (in case initial buffer size was bigger).
     * @returns {Uint8Array} Resulting bcs.
     */
    toBytes() {
      return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
    }
    /**
     * Represent data as 'hex' or 'base64'
     * @param encoding Encoding to use: 'base64' or 'hex'
     */
    toString(encoding) {
      return encodeStr(this.toBytes(), encoding);
    }
  };
  function toLittleEndian(bigint, size) {
    const result = new Uint8Array(size);
    let i = 0;
    while (bigint > 0) {
      result[i] = Number(bigint % BigInt(256));
      bigint = bigint / BigInt(256);
      i += 1;
    }
    return result;
  }

  // node_modules/@mysten/bcs/dist/esm/bcs-type.js
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var _write;
  var _serialize;
  var _schema;
  var _bytes;
  var _BcsType = class _BcsType2 {
    constructor(options) {
      __privateAdd(this, _write);
      __privateAdd(this, _serialize);
      this.name = options.name;
      this.read = options.read;
      this.serializedSize = options.serializedSize ?? (() => null);
      __privateSet(this, _write, options.write);
      __privateSet(this, _serialize, options.serialize ?? ((value, options2) => {
        const writer = new BcsWriter({
          initialSize: this.serializedSize(value) ?? void 0,
          ...options2
        });
        __privateGet(this, _write).call(this, value, writer);
        return writer.toBytes();
      }));
      this.validate = options.validate ?? (() => {
      });
    }
    write(value, writer) {
      this.validate(value);
      __privateGet(this, _write).call(this, value, writer);
    }
    serialize(value, options) {
      this.validate(value);
      return new SerializedBcs(this, __privateGet(this, _serialize).call(this, value, options));
    }
    parse(bytes) {
      const reader = new BcsReader(bytes);
      return this.read(reader);
    }
    fromHex(hex) {
      return this.parse(fromHex(hex));
    }
    fromBase58(b64) {
      return this.parse(fromBase58(b64));
    }
    fromBase64(b64) {
      return this.parse(fromBase64(b64));
    }
    transform({
      name,
      input,
      output,
      validate
    }) {
      return new _BcsType2({
        name: name ?? this.name,
        read: (reader) => output ? output(this.read(reader)) : this.read(reader),
        write: (value, writer) => __privateGet(this, _write).call(this, input ? input(value) : value, writer),
        serializedSize: (value) => this.serializedSize(input ? input(value) : value),
        serialize: (value, options) => __privateGet(this, _serialize).call(this, input ? input(value) : value, options),
        validate: (value) => {
          validate?.(value);
          this.validate(input ? input(value) : value);
        }
      });
    }
  };
  _write = /* @__PURE__ */ new WeakMap();
  _serialize = /* @__PURE__ */ new WeakMap();
  var BcsType = _BcsType;
  var SERIALIZED_BCS_BRAND = Symbol.for("@mysten/serialized-bcs");
  var SerializedBcs = class {
    constructor(schema, bytes) {
      __privateAdd(this, _schema);
      __privateAdd(this, _bytes);
      __privateSet(this, _schema, schema);
      __privateSet(this, _bytes, bytes);
    }
    // Used to brand SerializedBcs so that they can be identified, even between multiple copies
    // of the @mysten/bcs package are installed
    get [SERIALIZED_BCS_BRAND]() {
      return true;
    }
    toBytes() {
      return __privateGet(this, _bytes);
    }
    toHex() {
      return toHex(__privateGet(this, _bytes));
    }
    toBase64() {
      return toBase64(__privateGet(this, _bytes));
    }
    toBase58() {
      return toBase58(__privateGet(this, _bytes));
    }
    parse() {
      return __privateGet(this, _schema).parse(__privateGet(this, _bytes));
    }
  };
  _schema = /* @__PURE__ */ new WeakMap();
  _bytes = /* @__PURE__ */ new WeakMap();
  function fixedSizeBcsType({
    size,
    ...options
  }) {
    return new BcsType({
      ...options,
      serializedSize: () => size
    });
  }
  function uIntBcsType({
    readMethod,
    writeMethod,
    ...options
  }) {
    return fixedSizeBcsType({
      ...options,
      read: (reader) => reader[readMethod](),
      write: (value, writer) => writer[writeMethod](value),
      validate: (value) => {
        if (value < 0 || value > options.maxValue) {
          throw new TypeError(
            `Invalid ${options.name} value: ${value}. Expected value in range 0-${options.maxValue}`
          );
        }
        options.validate?.(value);
      }
    });
  }
  function bigUIntBcsType({
    readMethod,
    writeMethod,
    ...options
  }) {
    return fixedSizeBcsType({
      ...options,
      read: (reader) => reader[readMethod](),
      write: (value, writer) => writer[writeMethod](BigInt(value)),
      validate: (val) => {
        const value = BigInt(val);
        if (value < 0 || value > options.maxValue) {
          throw new TypeError(
            `Invalid ${options.name} value: ${value}. Expected value in range 0-${options.maxValue}`
          );
        }
        options.validate?.(value);
      }
    });
  }
  function dynamicSizeBcsType({
    serialize,
    ...options
  }) {
    const type = new BcsType({
      ...options,
      serialize,
      write: (value, writer) => {
        for (const byte of type.serialize(value).toBytes()) {
          writer.write8(byte);
        }
      }
    });
    return type;
  }
  function stringLikeBcsType({
    toBytes,
    fromBytes,
    ...options
  }) {
    return new BcsType({
      ...options,
      read: (reader) => {
        const length = reader.readULEB();
        const bytes = reader.readBytes(length);
        return fromBytes(bytes);
      },
      write: (hex, writer) => {
        const bytes = toBytes(hex);
        writer.writeULEB(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
          writer.write8(bytes[i]);
        }
      },
      serialize: (value) => {
        const bytes = toBytes(value);
        const size = ulebEncode(bytes.length);
        const result = new Uint8Array(size.length + bytes.length);
        result.set(size, 0);
        result.set(bytes, size.length);
        return result;
      },
      validate: (value) => {
        if (typeof value !== "string") {
          throw new TypeError(`Invalid ${options.name} value: ${value}. Expected string`);
        }
        options.validate?.(value);
      }
    });
  }
  function lazyBcsType(cb) {
    let lazyType = null;
    function getType() {
      if (!lazyType) {
        lazyType = cb();
      }
      return lazyType;
    }
    return new BcsType({
      name: "lazy",
      read: (data) => getType().read(data),
      serializedSize: (value) => getType().serializedSize(value),
      write: (value, writer) => getType().write(value, writer),
      serialize: (value, options) => getType().serialize(value, options).toBytes()
    });
  }
  var BcsStruct = class extends BcsType {
    constructor({ name, fields, ...options }) {
      const canonicalOrder = Object.entries(fields);
      super({
        name,
        serializedSize: (values) => {
          let total = 0;
          for (const [field, type] of canonicalOrder) {
            const size = type.serializedSize(values[field]);
            if (size == null) {
              return null;
            }
            total += size;
          }
          return total;
        },
        read: (reader) => {
          const result = {};
          for (const [field, type] of canonicalOrder) {
            result[field] = type.read(reader);
          }
          return result;
        },
        write: (value, writer) => {
          for (const [field, type] of canonicalOrder) {
            type.write(value[field], writer);
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (typeof value !== "object" || value == null) {
            throw new TypeError(`Expected object, found ${typeof value}`);
          }
        }
      });
    }
  };
  var BcsEnum = class extends BcsType {
    constructor({ fields, ...options }) {
      const canonicalOrder = Object.entries(fields);
      super({
        read: (reader) => {
          const index = reader.readULEB();
          const enumEntry = canonicalOrder[index];
          if (!enumEntry) {
            throw new TypeError(`Unknown value ${index} for enum ${options.name}`);
          }
          const [kind, type] = enumEntry;
          return {
            [kind]: type?.read(reader) ?? true,
            $kind: kind
          };
        },
        write: (value, writer) => {
          const [name, val] = Object.entries(value).filter(
            ([name2]) => Object.hasOwn(fields, name2)
          )[0];
          for (let i = 0; i < canonicalOrder.length; i++) {
            const [optionName, optionType] = canonicalOrder[i];
            if (optionName === name) {
              writer.writeULEB(i);
              optionType?.write(val, writer);
              return;
            }
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (typeof value !== "object" || value == null) {
            throw new TypeError(`Expected object, found ${typeof value}`);
          }
          const keys = Object.keys(value).filter(
            (k) => value[k] !== void 0 && Object.hasOwn(fields, k)
          );
          if (keys.length !== 1) {
            throw new TypeError(
              `Expected object with one key, but found ${keys.length} for type ${options.name}}`
            );
          }
          const [variant] = keys;
          if (!Object.hasOwn(fields, variant)) {
            throw new TypeError(`Invalid enum variant ${variant}`);
          }
        }
      });
    }
  };
  var BcsTuple = class extends BcsType {
    constructor({ fields, name, ...options }) {
      super({
        name: name ?? `(${fields.map((t) => t.name).join(", ")})`,
        serializedSize: (values) => {
          let total = 0;
          for (let i = 0; i < fields.length; i++) {
            const size = fields[i].serializedSize(values[i]);
            if (size == null) {
              return null;
            }
            total += size;
          }
          return total;
        },
        read: (reader) => {
          const result = [];
          for (const field of fields) {
            result.push(field.read(reader));
          }
          return result;
        },
        write: (value, writer) => {
          for (let i = 0; i < fields.length; i++) {
            fields[i].write(value[i], writer);
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (!Array.isArray(value)) {
            throw new TypeError(`Expected array, found ${typeof value}`);
          }
          if (value.length !== fields.length) {
            throw new TypeError(`Expected array of length ${fields.length}, found ${value.length}`);
          }
        }
      });
    }
  };

  // node_modules/@mysten/bcs/dist/esm/bcs.js
  init_dirname();
  init_buffer2();
  init_process2();
  function fixedArray(size, type, options) {
    return new BcsType({
      read: (reader) => {
        const result = new Array(size);
        for (let i = 0; i < size; i++) {
          result[i] = type.read(reader);
        }
        return result;
      },
      write: (value, writer) => {
        for (const item of value) {
          type.write(item, writer);
        }
      },
      ...options,
      name: options?.name ?? `${type.name}[${size}]`,
      validate: (value) => {
        options?.validate?.(value);
        if (!value || typeof value !== "object" || !("length" in value)) {
          throw new TypeError(`Expected array, found ${typeof value}`);
        }
        if (value.length !== size) {
          throw new TypeError(`Expected array of length ${size}, found ${value.length}`);
        }
      }
    });
  }
  function option(type) {
    return bcs.enum(`Option<${type.name}>`, {
      None: null,
      Some: type
    }).transform({
      input: (value) => {
        if (value == null) {
          return { None: true };
        }
        return { Some: value };
      },
      output: (value) => {
        if (value.$kind === "Some") {
          return value.Some;
        }
        return null;
      }
    });
  }
  function vector(type, options) {
    return new BcsType({
      read: (reader) => {
        const length = reader.readULEB();
        const result = new Array(length);
        for (let i = 0; i < length; i++) {
          result[i] = type.read(reader);
        }
        return result;
      },
      write: (value, writer) => {
        writer.writeULEB(value.length);
        for (const item of value) {
          type.write(item, writer);
        }
      },
      ...options,
      name: options?.name ?? `vector<${type.name}>`,
      validate: (value) => {
        options?.validate?.(value);
        if (!value || typeof value !== "object" || !("length" in value)) {
          throw new TypeError(`Expected array, found ${typeof value}`);
        }
      }
    });
  }
  function map(keyType, valueType) {
    return bcs.vector(bcs.tuple([keyType, valueType])).transform({
      name: `Map<${keyType.name}, ${valueType.name}>`,
      input: (value) => {
        return [...value.entries()];
      },
      output: (value) => {
        const result = /* @__PURE__ */ new Map();
        for (const [key, val] of value) {
          result.set(key, val);
        }
        return result;
      }
    });
  }
  var bcs = {
    /**
     * Creates a BcsType that can be used to read and write an 8-bit unsigned integer.
     * @example
     * bcs.u8().serialize(255).toBytes() // Uint8Array [ 255 ]
     */
    u8(options) {
      return uIntBcsType({
        readMethod: "read8",
        writeMethod: "write8",
        size: 1,
        maxValue: 2 ** 8 - 1,
        ...options,
        name: options?.name ?? "u8"
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 16-bit unsigned integer.
     * @example
     * bcs.u16().serialize(65535).toBytes() // Uint8Array [ 255, 255 ]
     */
    u16(options) {
      return uIntBcsType({
        readMethod: "read16",
        writeMethod: "write16",
        size: 2,
        maxValue: 2 ** 16 - 1,
        ...options,
        name: options?.name ?? "u16"
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 32-bit unsigned integer.
     * @example
     * bcs.u32().serialize(4294967295).toBytes() // Uint8Array [ 255, 255, 255, 255 ]
     */
    u32(options) {
      return uIntBcsType({
        readMethod: "read32",
        writeMethod: "write32",
        size: 4,
        maxValue: 2 ** 32 - 1,
        ...options,
        name: options?.name ?? "u32"
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 64-bit unsigned integer.
     * @example
     * bcs.u64().serialize(1).toBytes() // Uint8Array [ 1, 0, 0, 0, 0, 0, 0, 0 ]
     */
    u64(options) {
      return bigUIntBcsType({
        readMethod: "read64",
        writeMethod: "write64",
        size: 8,
        maxValue: 2n ** 64n - 1n,
        ...options,
        name: options?.name ?? "u64"
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 128-bit unsigned integer.
     * @example
     * bcs.u128().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
     */
    u128(options) {
      return bigUIntBcsType({
        readMethod: "read128",
        writeMethod: "write128",
        size: 16,
        maxValue: 2n ** 128n - 1n,
        ...options,
        name: options?.name ?? "u128"
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 256-bit unsigned integer.
     * @example
     * bcs.u256().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
     */
    u256(options) {
      return bigUIntBcsType({
        readMethod: "read256",
        writeMethod: "write256",
        size: 32,
        maxValue: 2n ** 256n - 1n,
        ...options,
        name: options?.name ?? "u256"
      });
    },
    /**
     * Creates a BcsType that can be used to read and write boolean values.
     * @example
     * bcs.bool().serialize(true).toBytes() // Uint8Array [ 1 ]
     */
    bool(options) {
      return fixedSizeBcsType({
        size: 1,
        read: (reader) => reader.read8() === 1,
        write: (value, writer) => writer.write8(value ? 1 : 0),
        ...options,
        name: options?.name ?? "bool",
        validate: (value) => {
          options?.validate?.(value);
          if (typeof value !== "boolean") {
            throw new TypeError(`Expected boolean, found ${typeof value}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType that can be used to read and write unsigned LEB encoded integers
     * @example
     *
     */
    uleb128(options) {
      return dynamicSizeBcsType({
        read: (reader) => reader.readULEB(),
        serialize: (value) => {
          return Uint8Array.from(ulebEncode(value));
        },
        ...options,
        name: options?.name ?? "uleb128"
      });
    },
    /**
     * Creates a BcsType representing a fixed length byte array
     * @param size The number of bytes this types represents
     * @example
     * bcs.bytes(3).serialize(new Uint8Array([1, 2, 3])).toBytes() // Uint8Array [1, 2, 3]
     */
    bytes(size, options) {
      return fixedSizeBcsType({
        size,
        read: (reader) => reader.readBytes(size),
        write: (value, writer) => {
          writer.writeBytes(new Uint8Array(value));
        },
        ...options,
        name: options?.name ?? `bytes[${size}]`,
        validate: (value) => {
          options?.validate?.(value);
          if (!value || typeof value !== "object" || !("length" in value)) {
            throw new TypeError(`Expected array, found ${typeof value}`);
          }
          if (value.length !== size) {
            throw new TypeError(`Expected array of length ${size}, found ${value.length}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType representing a variable length byte array
     *
     * @example
     * bcs.byteVector().serialize([1, 2, 3]).toBytes() // Uint8Array [3, 1, 2, 3]
     */
    byteVector(options) {
      return new BcsType({
        read: (reader) => {
          const length = reader.readULEB();
          return reader.readBytes(length);
        },
        write: (value, writer) => {
          const array = new Uint8Array(value);
          writer.writeULEB(array.length);
          writer.writeBytes(array);
        },
        ...options,
        name: options?.name ?? "vector<u8>",
        serializedSize: (value) => {
          const length = "length" in value ? value.length : null;
          return length == null ? null : ulebEncode(length).length + length;
        },
        validate: (value) => {
          options?.validate?.(value);
          if (!value || typeof value !== "object" || !("length" in value)) {
            throw new TypeError(`Expected array, found ${typeof value}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType that can ser/de string values.  Strings will be UTF-8 encoded
     * @example
     * bcs.string().serialize('a').toBytes() // Uint8Array [ 1, 97 ]
     */
    string(options) {
      return stringLikeBcsType({
        toBytes: (value) => new TextEncoder().encode(value),
        fromBytes: (bytes) => new TextDecoder().decode(bytes),
        ...options,
        name: options?.name ?? "string"
      });
    },
    /**
     * Creates a BcsType that represents a fixed length array of a given type
     * @param size The number of elements in the array
     * @param type The BcsType of each element in the array
     * @example
     * bcs.fixedArray(3, bcs.u8()).serialize([1, 2, 3]).toBytes() // Uint8Array [ 1, 2, 3 ]
     */
    fixedArray,
    /**
     * Creates a BcsType representing an optional value
     * @param type The BcsType of the optional value
     * @example
     * bcs.option(bcs.u8()).serialize(null).toBytes() // Uint8Array [ 0 ]
     * bcs.option(bcs.u8()).serialize(1).toBytes() // Uint8Array [ 1, 1 ]
     */
    option,
    /**
     * Creates a BcsType representing a variable length vector of a given type
     * @param type The BcsType of each element in the vector
     *
     * @example
     * bcs.vector(bcs.u8()).toBytes([1, 2, 3]) // Uint8Array [ 3, 1, 2, 3 ]
     */
    vector,
    /**
     * Creates a BcsType representing a tuple of a given set of types
     * @param types The BcsTypes for each element in the tuple
     *
     * @example
     * const tuple = bcs.tuple([bcs.u8(), bcs.string(), bcs.bool()])
     * tuple.serialize([1, 'a', true]).toBytes() // Uint8Array [ 1, 1, 97, 1 ]
     */
    tuple(fields, options) {
      return new BcsTuple({
        fields,
        ...options
      });
    },
    /**
     * Creates a BcsType representing a struct of a given set of fields
     * @param name The name of the struct
     * @param fields The fields of the struct. The order of the fields affects how data is serialized and deserialized
     *
     * @example
     * const struct = bcs.struct('MyStruct', {
     *  a: bcs.u8(),
     *  b: bcs.string(),
     * })
     * struct.serialize({ a: 1, b: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
     */
    struct(name, fields, options) {
      return new BcsStruct({
        name,
        fields,
        ...options
      });
    },
    /**
     * Creates a BcsType representing an enum of a given set of options
     * @param name The name of the enum
     * @param values The values of the enum. The order of the values affects how data is serialized and deserialized.
     * null can be used to represent a variant with no data.
     *
     * @example
     * const enum = bcs.enum('MyEnum', {
     *   A: bcs.u8(),
     *   B: bcs.string(),
     *   C: null,
     * })
     * enum.serialize({ A: 1 }).toBytes() // Uint8Array [ 0, 1 ]
     * enum.serialize({ B: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
     * enum.serialize({ C: true }).toBytes() // Uint8Array [ 2 ]
     */
    enum(name, fields, options) {
      return new BcsEnum({
        name,
        fields,
        ...options
      });
    },
    /**
     * Creates a BcsType representing a map of a given key and value type
     * @param keyType The BcsType of the key
     * @param valueType The BcsType of the value
     * @example
     * const map = bcs.map(bcs.u8(), bcs.string())
     * map.serialize(new Map([[2, 'a']])).toBytes() // Uint8Array [ 1, 2, 1, 97 ]
     */
    map,
    /**
     * Creates a BcsType that wraps another BcsType which is lazily evaluated. This is useful for creating recursive types.
     * @param cb A callback that returns the BcsType
     */
    lazy(cb) {
      return lazyBcsType(cb);
    }
  };

  // node_modules/@mysten/bcs/dist/esm/index.js
  var toB64 = toBase64;
  var fromB64 = fromBase64;

  // node_modules/@mysten/sui/dist/esm/bcs/bcs.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/sui/dist/esm/utils/sui-types.js
  init_dirname();
  init_buffer2();
  init_process2();
  var SUI_ADDRESS_LENGTH = 32;
  function isValidSuiAddress(value) {
    return isHex(value) && getHexByteLength(value) === SUI_ADDRESS_LENGTH;
  }
  function normalizeSuiAddress(value, forceAdd0x = false) {
    let address = value.toLowerCase();
    if (!forceAdd0x && address.startsWith("0x")) {
      address = address.slice(2);
    }
    return `0x${address.padStart(SUI_ADDRESS_LENGTH * 2, "0")}`;
  }
  function isHex(value) {
    return /^(0x|0X)?[a-fA-F0-9]+$/.test(value) && value.length % 2 === 0;
  }
  function getHexByteLength(value) {
    return /^(0x|0X)/.test(value) ? (value.length - 2) / 2 : value.length / 2;
  }

  // node_modules/@mysten/sui/dist/esm/bcs/type-tag-serializer.js
  init_dirname();
  init_buffer2();
  init_process2();
  var VECTOR_REGEX = /^vector<(.+)>$/;
  var STRUCT_REGEX = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
  var TypeTagSerializer = class _TypeTagSerializer {
    static parseFromStr(str, normalizeAddress = false) {
      if (str === "address") {
        return { address: null };
      } else if (str === "bool") {
        return { bool: null };
      } else if (str === "u8") {
        return { u8: null };
      } else if (str === "u16") {
        return { u16: null };
      } else if (str === "u32") {
        return { u32: null };
      } else if (str === "u64") {
        return { u64: null };
      } else if (str === "u128") {
        return { u128: null };
      } else if (str === "u256") {
        return { u256: null };
      } else if (str === "signer") {
        return { signer: null };
      }
      const vectorMatch = str.match(VECTOR_REGEX);
      if (vectorMatch) {
        return {
          vector: _TypeTagSerializer.parseFromStr(vectorMatch[1], normalizeAddress)
        };
      }
      const structMatch = str.match(STRUCT_REGEX);
      if (structMatch) {
        const address = normalizeAddress ? normalizeSuiAddress(structMatch[1]) : structMatch[1];
        return {
          struct: {
            address,
            module: structMatch[2],
            name: structMatch[3],
            typeParams: structMatch[5] === void 0 ? [] : _TypeTagSerializer.parseStructTypeArgs(structMatch[5], normalizeAddress)
          }
        };
      }
      throw new Error(`Encountered unexpected token when parsing type args for ${str}`);
    }
    static parseStructTypeArgs(str, normalizeAddress = false) {
      return splitGenericParameters(str).map(
        (tok) => _TypeTagSerializer.parseFromStr(tok, normalizeAddress)
      );
    }
    static tagToString(tag) {
      if ("bool" in tag) {
        return "bool";
      }
      if ("u8" in tag) {
        return "u8";
      }
      if ("u16" in tag) {
        return "u16";
      }
      if ("u32" in tag) {
        return "u32";
      }
      if ("u64" in tag) {
        return "u64";
      }
      if ("u128" in tag) {
        return "u128";
      }
      if ("u256" in tag) {
        return "u256";
      }
      if ("address" in tag) {
        return "address";
      }
      if ("signer" in tag) {
        return "signer";
      }
      if ("vector" in tag) {
        return `vector<${_TypeTagSerializer.tagToString(tag.vector)}>`;
      }
      if ("struct" in tag) {
        const struct = tag.struct;
        const typeParams = struct.typeParams.map(_TypeTagSerializer.tagToString).join(", ");
        return `${struct.address}::${struct.module}::${struct.name}${typeParams ? `<${typeParams}>` : ""}`;
      }
      throw new Error("Invalid TypeTag");
    }
  };

  // node_modules/@mysten/sui/dist/esm/bcs/bcs.js
  function unsafe_u64(options) {
    return bcs.u64({
      name: "unsafe_u64",
      ...options
    }).transform({
      input: (val) => val,
      output: (val) => Number(val)
    });
  }
  function optionEnum(type) {
    return bcs.enum("Option", {
      None: null,
      Some: type
    });
  }
  var Address = bcs.bytes(SUI_ADDRESS_LENGTH).transform({
    validate: (val) => {
      const address = typeof val === "string" ? val : toHex(val);
      if (!address || !isValidSuiAddress(normalizeSuiAddress(address))) {
        throw new Error(`Invalid Sui address ${address}`);
      }
    },
    input: (val) => typeof val === "string" ? fromHex(normalizeSuiAddress(val)) : val,
    output: (val) => normalizeSuiAddress(toHex(val))
  });
  var ObjectDigest = bcs.byteVector().transform({
    name: "ObjectDigest",
    input: (value) => fromBase58(value),
    output: (value) => toBase58(new Uint8Array(value)),
    validate: (value) => {
      if (fromBase58(value).length !== 32) {
        throw new Error("ObjectDigest must be 32 bytes");
      }
    }
  });
  var SuiObjectRef = bcs.struct("SuiObjectRef", {
    objectId: Address,
    version: bcs.u64(),
    digest: ObjectDigest
  });
  var SharedObjectRef = bcs.struct("SharedObjectRef", {
    objectId: Address,
    initialSharedVersion: bcs.u64(),
    mutable: bcs.bool()
  });
  var ObjectArg = bcs.enum("ObjectArg", {
    ImmOrOwnedObject: SuiObjectRef,
    SharedObject: SharedObjectRef,
    Receiving: SuiObjectRef
  });
  var Owner = bcs.enum("Owner", {
    AddressOwner: Address,
    ObjectOwner: Address,
    Shared: bcs.struct("Shared", {
      initialSharedVersion: bcs.u64()
    }),
    Immutable: null,
    ConsensusAddressOwner: bcs.struct("ConsensusAddressOwner", {
      owner: Address,
      startVersion: bcs.u64()
    })
  });
  var CallArg = bcs.enum("CallArg", {
    Pure: bcs.struct("Pure", {
      bytes: bcs.byteVector().transform({
        input: (val) => typeof val === "string" ? fromBase64(val) : val,
        output: (val) => toBase64(new Uint8Array(val))
      })
    }),
    Object: ObjectArg
  });
  var InnerTypeTag = bcs.enum("TypeTag", {
    bool: null,
    u8: null,
    u64: null,
    u128: null,
    address: null,
    signer: null,
    vector: bcs.lazy(() => InnerTypeTag),
    struct: bcs.lazy(() => StructTag),
    u16: null,
    u32: null,
    u256: null
  });
  var TypeTag = InnerTypeTag.transform({
    input: (typeTag) => typeof typeTag === "string" ? TypeTagSerializer.parseFromStr(typeTag, true) : typeTag,
    output: (typeTag) => TypeTagSerializer.tagToString(typeTag)
  });
  var Argument = bcs.enum("Argument", {
    GasCoin: null,
    Input: bcs.u16(),
    Result: bcs.u16(),
    NestedResult: bcs.tuple([bcs.u16(), bcs.u16()])
  });
  var ProgrammableMoveCall = bcs.struct("ProgrammableMoveCall", {
    package: Address,
    module: bcs.string(),
    function: bcs.string(),
    typeArguments: bcs.vector(TypeTag),
    arguments: bcs.vector(Argument)
  });
  var Command = bcs.enum("Command", {
    /**
     * A Move Call - any public Move function can be called via
     * this transaction. The results can be used that instant to pass
     * into the next transaction.
     */
    MoveCall: ProgrammableMoveCall,
    /**
     * Transfer vector of objects to a receiver.
     */
    TransferObjects: bcs.struct("TransferObjects", {
      objects: bcs.vector(Argument),
      address: Argument
    }),
    // /**
    //  * Split `amount` from a `coin`.
    //  */
    SplitCoins: bcs.struct("SplitCoins", {
      coin: Argument,
      amounts: bcs.vector(Argument)
    }),
    // /**
    //  * Merge Vector of Coins (`sources`) into a `destination`.
    //  */
    MergeCoins: bcs.struct("MergeCoins", {
      destination: Argument,
      sources: bcs.vector(Argument)
    }),
    // /**
    //  * Publish a Move module.
    //  */
    Publish: bcs.struct("Publish", {
      modules: bcs.vector(
        bcs.byteVector().transform({
          input: (val) => typeof val === "string" ? fromBase64(val) : val,
          output: (val) => toBase64(new Uint8Array(val))
        })
      ),
      dependencies: bcs.vector(Address)
    }),
    // /**
    //  * Build a vector of objects using the input arguments.
    //  * It is impossible to export construct a `vector<T: key>` otherwise,
    //  * so this call serves a utility function.
    //  */
    MakeMoveVec: bcs.struct("MakeMoveVec", {
      type: optionEnum(TypeTag).transform({
        input: (val) => val === null ? {
          None: true
        } : {
          Some: val
        },
        output: (val) => val.Some ?? null
      }),
      elements: bcs.vector(Argument)
    }),
    Upgrade: bcs.struct("Upgrade", {
      modules: bcs.vector(
        bcs.byteVector().transform({
          input: (val) => typeof val === "string" ? fromBase64(val) : val,
          output: (val) => toBase64(new Uint8Array(val))
        })
      ),
      dependencies: bcs.vector(Address),
      package: Address,
      ticket: Argument
    })
  });
  var ProgrammableTransaction = bcs.struct("ProgrammableTransaction", {
    inputs: bcs.vector(CallArg),
    commands: bcs.vector(Command)
  });
  var TransactionKind = bcs.enum("TransactionKind", {
    ProgrammableTransaction,
    ChangeEpoch: null,
    Genesis: null,
    ConsensusCommitPrologue: null
  });
  var TransactionExpiration = bcs.enum("TransactionExpiration", {
    None: null,
    Epoch: unsafe_u64()
  });
  var StructTag = bcs.struct("StructTag", {
    address: Address,
    module: bcs.string(),
    name: bcs.string(),
    typeParams: bcs.vector(InnerTypeTag)
  });
  var GasData = bcs.struct("GasData", {
    payment: bcs.vector(SuiObjectRef),
    owner: Address,
    price: bcs.u64(),
    budget: bcs.u64()
  });
  var TransactionDataV1 = bcs.struct("TransactionDataV1", {
    kind: TransactionKind,
    sender: Address,
    gasData: GasData,
    expiration: TransactionExpiration
  });
  var TransactionData = bcs.enum("TransactionData", {
    V1: TransactionDataV1
  });
  var IntentScope = bcs.enum("IntentScope", {
    TransactionData: null,
    TransactionEffects: null,
    CheckpointSummary: null,
    PersonalMessage: null
  });
  var IntentVersion = bcs.enum("IntentVersion", {
    V0: null
  });
  var AppId = bcs.enum("AppId", {
    Sui: null
  });
  var Intent = bcs.struct("Intent", {
    scope: IntentScope,
    version: IntentVersion,
    appId: AppId
  });
  function IntentMessage(T) {
    return bcs.struct(`IntentMessage<${T.name}>`, {
      intent: Intent,
      value: T
    });
  }
  var CompressedSignature = bcs.enum("CompressedSignature", {
    ED25519: bcs.bytes(64),
    Secp256k1: bcs.bytes(64),
    Secp256r1: bcs.bytes(64),
    ZkLogin: bcs.byteVector(),
    Passkey: bcs.byteVector()
  });
  var PublicKey = bcs.enum("PublicKey", {
    ED25519: bcs.bytes(32),
    Secp256k1: bcs.bytes(33),
    Secp256r1: bcs.bytes(33),
    ZkLogin: bcs.byteVector(),
    Passkey: bcs.bytes(33)
  });
  var MultiSigPkMap = bcs.struct("MultiSigPkMap", {
    pubKey: PublicKey,
    weight: bcs.u8()
  });
  var MultiSigPublicKey = bcs.struct("MultiSigPublicKey", {
    pk_map: bcs.vector(MultiSigPkMap),
    threshold: bcs.u16()
  });
  var MultiSig = bcs.struct("MultiSig", {
    sigs: bcs.vector(CompressedSignature),
    bitmap: bcs.u16(),
    multisig_pk: MultiSigPublicKey
  });
  var base64String = bcs.byteVector().transform({
    input: (val) => typeof val === "string" ? fromBase64(val) : val,
    output: (val) => toBase64(new Uint8Array(val))
  });
  var SenderSignedTransaction = bcs.struct("SenderSignedTransaction", {
    intentMessage: IntentMessage(TransactionData),
    txSignatures: bcs.vector(base64String)
  });
  var SenderSignedData = bcs.vector(SenderSignedTransaction, {
    name: "SenderSignedData"
  });
  var PasskeyAuthenticator = bcs.struct("PasskeyAuthenticator", {
    authenticatorData: bcs.byteVector(),
    clientDataJson: bcs.string(),
    userSignature: bcs.byteVector()
  });

  // node_modules/@mysten/sui/dist/esm/bcs/effects.js
  init_dirname();
  init_buffer2();
  init_process2();
  var PackageUpgradeError = bcs.enum("PackageUpgradeError", {
    UnableToFetchPackage: bcs.struct("UnableToFetchPackage", { packageId: Address }),
    NotAPackage: bcs.struct("NotAPackage", { objectId: Address }),
    IncompatibleUpgrade: null,
    DigestDoesNotMatch: bcs.struct("DigestDoesNotMatch", { digest: bcs.byteVector() }),
    UnknownUpgradePolicy: bcs.struct("UnknownUpgradePolicy", { policy: bcs.u8() }),
    PackageIDDoesNotMatch: bcs.struct("PackageIDDoesNotMatch", {
      packageId: Address,
      ticketId: Address
    })
  });
  var ModuleId = bcs.struct("ModuleId", {
    address: Address,
    name: bcs.string()
  });
  var MoveLocation = bcs.struct("MoveLocation", {
    module: ModuleId,
    function: bcs.u16(),
    instruction: bcs.u16(),
    functionName: bcs.option(bcs.string())
  });
  var CommandArgumentError = bcs.enum("CommandArgumentError", {
    TypeMismatch: null,
    InvalidBCSBytes: null,
    InvalidUsageOfPureArg: null,
    InvalidArgumentToPrivateEntryFunction: null,
    IndexOutOfBounds: bcs.struct("IndexOutOfBounds", { idx: bcs.u16() }),
    SecondaryIndexOutOfBounds: bcs.struct("SecondaryIndexOutOfBounds", {
      resultIdx: bcs.u16(),
      secondaryIdx: bcs.u16()
    }),
    InvalidResultArity: bcs.struct("InvalidResultArity", { resultIdx: bcs.u16() }),
    InvalidGasCoinUsage: null,
    InvalidValueUsage: null,
    InvalidObjectByValue: null,
    InvalidObjectByMutRef: null,
    SharedObjectOperationNotAllowed: null
  });
  var TypeArgumentError = bcs.enum("TypeArgumentError", {
    TypeNotFound: null,
    ConstraintNotSatisfied: null
  });
  var ExecutionFailureStatus = bcs.enum("ExecutionFailureStatus", {
    InsufficientGas: null,
    InvalidGasObject: null,
    InvariantViolation: null,
    FeatureNotYetSupported: null,
    MoveObjectTooBig: bcs.struct("MoveObjectTooBig", {
      objectSize: bcs.u64(),
      maxObjectSize: bcs.u64()
    }),
    MovePackageTooBig: bcs.struct("MovePackageTooBig", {
      objectSize: bcs.u64(),
      maxObjectSize: bcs.u64()
    }),
    CircularObjectOwnership: bcs.struct("CircularObjectOwnership", { object: Address }),
    InsufficientCoinBalance: null,
    CoinBalanceOverflow: null,
    PublishErrorNonZeroAddress: null,
    SuiMoveVerificationError: null,
    MovePrimitiveRuntimeError: bcs.option(MoveLocation),
    MoveAbort: bcs.tuple([MoveLocation, bcs.u64()]),
    VMVerificationOrDeserializationError: null,
    VMInvariantViolation: null,
    FunctionNotFound: null,
    ArityMismatch: null,
    TypeArityMismatch: null,
    NonEntryFunctionInvoked: null,
    CommandArgumentError: bcs.struct("CommandArgumentError", {
      argIdx: bcs.u16(),
      kind: CommandArgumentError
    }),
    TypeArgumentError: bcs.struct("TypeArgumentError", {
      argumentIdx: bcs.u16(),
      kind: TypeArgumentError
    }),
    UnusedValueWithoutDrop: bcs.struct("UnusedValueWithoutDrop", {
      resultIdx: bcs.u16(),
      secondaryIdx: bcs.u16()
    }),
    InvalidPublicFunctionReturnType: bcs.struct("InvalidPublicFunctionReturnType", {
      idx: bcs.u16()
    }),
    InvalidTransferObject: null,
    EffectsTooLarge: bcs.struct("EffectsTooLarge", { currentSize: bcs.u64(), maxSize: bcs.u64() }),
    PublishUpgradeMissingDependency: null,
    PublishUpgradeDependencyDowngrade: null,
    PackageUpgradeError: bcs.struct("PackageUpgradeError", { upgradeError: PackageUpgradeError }),
    WrittenObjectsTooLarge: bcs.struct("WrittenObjectsTooLarge", {
      currentSize: bcs.u64(),
      maxSize: bcs.u64()
    }),
    CertificateDenied: null,
    SuiMoveVerificationTimedout: null,
    SharedObjectOperationNotAllowed: null,
    InputObjectDeleted: null,
    ExecutionCancelledDueToSharedObjectCongestion: bcs.struct(
      "ExecutionCancelledDueToSharedObjectCongestion",
      {
        congestedObjects: bcs.vector(Address)
      }
    ),
    AddressDeniedForCoin: bcs.struct("AddressDeniedForCoin", {
      address: Address,
      coinType: bcs.string()
    }),
    CoinTypeGlobalPause: bcs.struct("CoinTypeGlobalPause", { coinType: bcs.string() }),
    ExecutionCancelledDueToRandomnessUnavailable: null
  });
  var ExecutionStatus = bcs.enum("ExecutionStatus", {
    Success: null,
    Failed: bcs.struct("ExecutionFailed", {
      error: ExecutionFailureStatus,
      command: bcs.option(bcs.u64())
    })
  });
  var GasCostSummary = bcs.struct("GasCostSummary", {
    computationCost: bcs.u64(),
    storageCost: bcs.u64(),
    storageRebate: bcs.u64(),
    nonRefundableStorageFee: bcs.u64()
  });
  var TransactionEffectsV1 = bcs.struct("TransactionEffectsV1", {
    status: ExecutionStatus,
    executedEpoch: bcs.u64(),
    gasUsed: GasCostSummary,
    modifiedAtVersions: bcs.vector(bcs.tuple([Address, bcs.u64()])),
    sharedObjects: bcs.vector(SuiObjectRef),
    transactionDigest: ObjectDigest,
    created: bcs.vector(bcs.tuple([SuiObjectRef, Owner])),
    mutated: bcs.vector(bcs.tuple([SuiObjectRef, Owner])),
    unwrapped: bcs.vector(bcs.tuple([SuiObjectRef, Owner])),
    deleted: bcs.vector(SuiObjectRef),
    unwrappedThenDeleted: bcs.vector(SuiObjectRef),
    wrapped: bcs.vector(SuiObjectRef),
    gasObject: bcs.tuple([SuiObjectRef, Owner]),
    eventsDigest: bcs.option(ObjectDigest),
    dependencies: bcs.vector(ObjectDigest)
  });
  var VersionDigest = bcs.tuple([bcs.u64(), ObjectDigest]);
  var ObjectIn = bcs.enum("ObjectIn", {
    NotExist: null,
    Exist: bcs.tuple([VersionDigest, Owner])
  });
  var ObjectOut = bcs.enum("ObjectOut", {
    NotExist: null,
    ObjectWrite: bcs.tuple([ObjectDigest, Owner]),
    PackageWrite: VersionDigest
  });
  var IDOperation = bcs.enum("IDOperation", {
    None: null,
    Created: null,
    Deleted: null
  });
  var EffectsObjectChange = bcs.struct("EffectsObjectChange", {
    inputState: ObjectIn,
    outputState: ObjectOut,
    idOperation: IDOperation
  });
  var UnchangedSharedKind = bcs.enum("UnchangedSharedKind", {
    ReadOnlyRoot: VersionDigest,
    // TODO: these have been renamed to MutateConsensusStreamEnded and ReadConsensusStreamEnded
    MutateDeleted: bcs.u64(),
    ReadDeleted: bcs.u64(),
    Cancelled: bcs.u64(),
    PerEpochConfig: null
  });
  var TransactionEffectsV2 = bcs.struct("TransactionEffectsV2", {
    status: ExecutionStatus,
    executedEpoch: bcs.u64(),
    gasUsed: GasCostSummary,
    transactionDigest: ObjectDigest,
    gasObjectIndex: bcs.option(bcs.u32()),
    eventsDigest: bcs.option(ObjectDigest),
    dependencies: bcs.vector(ObjectDigest),
    lamportVersion: bcs.u64(),
    changedObjects: bcs.vector(bcs.tuple([Address, EffectsObjectChange])),
    unchangedSharedObjects: bcs.vector(bcs.tuple([Address, UnchangedSharedKind])),
    auxDataDigest: bcs.option(ObjectDigest)
  });
  var TransactionEffects = bcs.enum("TransactionEffects", {
    V1: TransactionEffectsV1,
    V2: TransactionEffectsV2
  });

  // node_modules/@mysten/sui/dist/esm/bcs/index.js
  var suiBcs = {
    ...bcs,
    U8: bcs.u8(),
    U16: bcs.u16(),
    U32: bcs.u32(),
    U64: bcs.u64(),
    U128: bcs.u128(),
    U256: bcs.u256(),
    ULEB128: bcs.uleb128(),
    Bool: bcs.bool(),
    String: bcs.string(),
    Address,
    AppId,
    Argument,
    CallArg,
    Command,
    CompressedSignature,
    GasData,
    Intent,
    IntentMessage,
    IntentScope,
    IntentVersion,
    MultiSig,
    MultiSigPkMap,
    MultiSigPublicKey,
    ObjectArg,
    ObjectDigest,
    Owner,
    PasskeyAuthenticator,
    ProgrammableMoveCall,
    ProgrammableTransaction,
    PublicKey,
    SenderSignedData,
    SenderSignedTransaction,
    SharedObjectRef,
    StructTag,
    SuiObjectRef,
    TransactionData,
    TransactionDataV1,
    TransactionEffects,
    TransactionExpiration,
    TransactionKind,
    TypeTag
  };

  // node_modules/@mysten/sui/dist/esm/utils/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/wallet-standard/dist/esm/chains.js
  init_dirname();
  init_buffer2();
  init_process2();
  var SUI_DEVNET_CHAIN = "sui:devnet";
  var SUI_TESTNET_CHAIN = "sui:testnet";
  var SUI_LOCALNET_CHAIN = "sui:localnet";
  var SUI_MAINNET_CHAIN = "sui:mainnet";
  var SUI_CHAINS = [
    SUI_DEVNET_CHAIN,
    SUI_TESTNET_CHAIN,
    SUI_LOCALNET_CHAIN,
    SUI_MAINNET_CHAIN
  ];
  function isSuiChain(chain2) {
    return SUI_CHAINS.includes(chain2);
  }

  // node_modules/@trpc/client/dist/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/objectSpread2-BvkFp-_Y.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __commonJS2 = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps2 = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames2(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, {
            get: ((k) => from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
          });
      }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod));
  var require_typeof = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports3, module) {
    function _typeof$2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
        return typeof o$1;
      } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof$2(o);
    }
    module.exports = _typeof$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_toPrimitive = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports3, module) {
    var _typeof$1 = require_typeof()["default"];
    function toPrimitive$1(t, r) {
      if ("object" != _typeof$1(t) || !t)
        return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof$1(i))
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_toPropertyKey = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports3, module) {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey$1(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_defineProperty = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports3, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_objectSpread2 = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports3, module) {
    var defineProperty = require_defineProperty();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
          return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r$1) {
          defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
          Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
      }
      return e;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });

  // node_modules/@trpc/client/dist/splitLink-B7Cuf2c_.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/observable/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/observable-UMO3vUa_.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function observable(subscribe) {
    const self = {
      subscribe(observer) {
        let teardownRef = null;
        let isDone = false;
        let unsubscribed = false;
        let teardownImmediately = false;
        function unsubscribe() {
          if (teardownRef === null) {
            teardownImmediately = true;
            return;
          }
          if (unsubscribed)
            return;
          unsubscribed = true;
          if (typeof teardownRef === "function")
            teardownRef();
          else if (teardownRef)
            teardownRef.unsubscribe();
        }
        teardownRef = subscribe({
          next(value) {
            var _observer$next;
            if (isDone)
              return;
            (_observer$next = observer.next) === null || _observer$next === void 0 || _observer$next.call(observer, value);
          },
          error(err) {
            var _observer$error;
            if (isDone)
              return;
            isDone = true;
            (_observer$error = observer.error) === null || _observer$error === void 0 || _observer$error.call(observer, err);
            unsubscribe();
          },
          complete() {
            var _observer$complete;
            if (isDone)
              return;
            isDone = true;
            (_observer$complete = observer.complete) === null || _observer$complete === void 0 || _observer$complete.call(observer);
            unsubscribe();
          }
        });
        if (teardownImmediately)
          unsubscribe();
        return { unsubscribe };
      },
      pipe(...operations) {
        return operations.reduce(pipeReducer, self);
      }
    };
    return self;
  }
  function pipeReducer(prev, fn) {
    return fn(prev);
  }
  function observableToPromise(observable$1) {
    const ac = new AbortController();
    const promise = new Promise((resolve, reject) => {
      let isDone = false;
      function onDone() {
        if (isDone)
          return;
        isDone = true;
        obs$.unsubscribe();
      }
      ac.signal.addEventListener("abort", () => {
        reject(ac.signal.reason);
      });
      const obs$ = observable$1.subscribe({
        next(data) {
          isDone = true;
          resolve(data);
          onDone();
        },
        error(data) {
          reject(data);
        },
        complete() {
          ac.abort();
          onDone();
        }
      });
    });
    return promise;
  }

  // node_modules/@trpc/server/dist/observable-CUiPknO-.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function share(_opts) {
    return (source) => {
      let refCount = 0;
      let subscription = null;
      const observers = [];
      function startIfNeeded() {
        if (subscription)
          return;
        subscription = source.subscribe({
          next(value) {
            for (const observer of observers) {
              var _observer$next;
              (_observer$next = observer.next) === null || _observer$next === void 0 || _observer$next.call(observer, value);
            }
          },
          error(error) {
            for (const observer of observers) {
              var _observer$error;
              (_observer$error = observer.error) === null || _observer$error === void 0 || _observer$error.call(observer, error);
            }
          },
          complete() {
            for (const observer of observers) {
              var _observer$complete;
              (_observer$complete = observer.complete) === null || _observer$complete === void 0 || _observer$complete.call(observer);
            }
          }
        });
      }
      function resetIfNeeded() {
        if (refCount === 0 && subscription) {
          const _sub = subscription;
          subscription = null;
          _sub.unsubscribe();
        }
      }
      return observable((subscriber) => {
        refCount++;
        observers.push(subscriber);
        startIfNeeded();
        return { unsubscribe() {
          refCount--;
          resetIfNeeded();
          const index = observers.findIndex((v) => v === subscriber);
          if (index > -1)
            observers.splice(index, 1);
        } };
      });
    };
  }
  function tap(observer) {
    return (source) => {
      return observable((destination) => {
        return source.subscribe({
          next(value) {
            var _observer$next2;
            (_observer$next2 = observer.next) === null || _observer$next2 === void 0 || _observer$next2.call(observer, value);
            destination.next(value);
          },
          error(error) {
            var _observer$error2;
            (_observer$error2 = observer.error) === null || _observer$error2 === void 0 || _observer$error2.call(observer, error);
            destination.error(error);
          },
          complete() {
            var _observer$complete2;
            (_observer$complete2 = observer.complete) === null || _observer$complete2 === void 0 || _observer$complete2.call(observer);
            destination.complete();
          }
        });
      });
    };
  }
  var distinctUnsetMarker = Symbol();
  function behaviorSubject(initialValue) {
    let value = initialValue;
    const observerList = [];
    const addObserver = (observer) => {
      if (value !== void 0)
        observer.next(value);
      observerList.push(observer);
    };
    const removeObserver = (observer) => {
      observerList.splice(observerList.indexOf(observer), 1);
    };
    const obs = observable((observer) => {
      addObserver(observer);
      return () => {
        removeObserver(observer);
      };
    });
    obs.next = (nextValue) => {
      if (value === nextValue)
        return;
      value = nextValue;
      for (const observer of observerList)
        observer.next(nextValue);
    };
    obs.get = () => value;
    return obs;
  }

  // node_modules/@trpc/client/dist/splitLink-B7Cuf2c_.mjs
  function createChain(opts) {
    return observable((observer) => {
      function execute(index = 0, op = opts.op) {
        const next = opts.links[index];
        if (!next)
          throw new Error("No more links to execute - did you forget to add an ending link?");
        const subscription = next({
          op,
          next(nextOp) {
            const nextObserver = execute(index + 1, nextOp);
            return nextObserver;
          }
        });
        return subscription;
      }
      const obs$ = execute();
      return obs$.subscribe(observer);
    });
  }

  // node_modules/@trpc/client/dist/TRPCClientError-CjKyS10w.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/getErrorShape-Uhlrl4Bk.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/utils-DdbbrDku.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var TRPC_ERROR_CODES_BY_KEY = {
    PARSE_ERROR: -32700,
    BAD_REQUEST: -32600,
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    BAD_GATEWAY: -32603,
    SERVICE_UNAVAILABLE: -32603,
    GATEWAY_TIMEOUT: -32603,
    UNAUTHORIZED: -32001,
    PAYMENT_REQUIRED: -32002,
    FORBIDDEN: -32003,
    NOT_FOUND: -32004,
    METHOD_NOT_SUPPORTED: -32005,
    TIMEOUT: -32008,
    CONFLICT: -32009,
    PRECONDITION_FAILED: -32012,
    PAYLOAD_TOO_LARGE: -32013,
    UNSUPPORTED_MEDIA_TYPE: -32015,
    UNPROCESSABLE_CONTENT: -32022,
    TOO_MANY_REQUESTS: -32029,
    CLIENT_CLOSED_REQUEST: -32099
  };
  var retryableRpcCodes = [
    TRPC_ERROR_CODES_BY_KEY.BAD_GATEWAY,
    TRPC_ERROR_CODES_BY_KEY.SERVICE_UNAVAILABLE,
    TRPC_ERROR_CODES_BY_KEY.GATEWAY_TIMEOUT,
    TRPC_ERROR_CODES_BY_KEY.INTERNAL_SERVER_ERROR
  ];
  function isObject(value) {
    return !!value && !Array.isArray(value) && typeof value === "object";
  }
  var asyncIteratorsSupported = typeof Symbol === "function" && !!Symbol.asyncIterator;
  function isAsyncIterable(value) {
    return asyncIteratorsSupported && isObject(value) && Symbol.asyncIterator in value;
  }

  // node_modules/@trpc/server/dist/getErrorShape-Uhlrl4Bk.mjs
  var __create3 = Object.create;
  var __defProp3 = Object.defineProperty;
  var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames3 = Object.getOwnPropertyNames;
  var __getProtoOf3 = Object.getPrototypeOf;
  var __hasOwnProp3 = Object.prototype.hasOwnProperty;
  var __commonJS3 = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames3(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps3 = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames3(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp3.call(to, key) && key !== except)
          __defProp3(to, key, {
            get: ((k) => from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable
          });
      }
    return to;
  };
  var __toESM3 = (mod, isNodeMode, target) => (target = mod != null ? __create3(__getProtoOf3(mod)) : {}, __copyProps3(isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod));
  var noop2 = () => {
  };
  var freezeIfAvailable = (obj) => {
    if (Object.freeze)
      Object.freeze(obj);
  };
  function createInnerProxy(callback, path, memo) {
    var _memo$cacheKey;
    const cacheKey = path.join(".");
    (_memo$cacheKey = memo[cacheKey]) !== null && _memo$cacheKey !== void 0 || (memo[cacheKey] = new Proxy(noop2, {
      get(_obj, key) {
        if (typeof key !== "string" || key === "then")
          return void 0;
        return createInnerProxy(callback, [...path, key], memo);
      },
      apply(_1, _2, args) {
        const lastOfPath = path[path.length - 1];
        let opts = {
          args,
          path
        };
        if (lastOfPath === "call")
          opts = {
            args: args.length >= 2 ? [args[1]] : [],
            path: path.slice(0, -1)
          };
        else if (lastOfPath === "apply")
          opts = {
            args: args.length >= 2 ? args[1] : [],
            path: path.slice(0, -1)
          };
        freezeIfAvailable(opts.args);
        freezeIfAvailable(opts.path);
        return callback(opts);
      }
    }));
    return memo[cacheKey];
  }
  var createRecursiveProxy = (callback) => createInnerProxy(callback, [], /* @__PURE__ */ Object.create(null));
  var createFlatProxy = (callback) => {
    return new Proxy(noop2, { get(_obj, name) {
      if (name === "then")
        return void 0;
      return callback(name);
    } });
  };
  var require_typeof2 = __commonJS3({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports3, module) {
    function _typeof$2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
        return typeof o$1;
      } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof$2(o);
    }
    module.exports = _typeof$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_toPrimitive2 = __commonJS3({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports3, module) {
    var _typeof$1 = require_typeof2()["default"];
    function toPrimitive$1(t, r) {
      if ("object" != _typeof$1(t) || !t)
        return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof$1(i))
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_toPropertyKey2 = __commonJS3({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports3, module) {
    var _typeof = require_typeof2()["default"];
    var toPrimitive = require_toPrimitive2();
    function toPropertyKey$1(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_defineProperty2 = __commonJS3({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports3, module) {
    var toPropertyKey = require_toPropertyKey2();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_objectSpread22 = __commonJS3({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports3, module) {
    var defineProperty = require_defineProperty2();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
          return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r$1) {
          defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
          Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
      }
      return e;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var import_objectSpread2 = __toESM3(require_objectSpread22(), 1);

  // node_modules/@trpc/server/dist/tracked-Bp72jHif.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var import_defineProperty = __toESM3(require_defineProperty2(), 1);
  var import_objectSpread2$1 = __toESM3(require_objectSpread22(), 1);
  function transformResultInner(response, transformer) {
    if ("error" in response) {
      const error = transformer.deserialize(response.error);
      return {
        ok: false,
        error: (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, response), {}, { error })
      };
    }
    const result = (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, response.result), (!response.result.type || response.result.type === "data") && {
      type: "data",
      data: transformer.deserialize(response.result.data)
    });
    return {
      ok: true,
      result
    };
  }
  var TransformResultError = class extends Error {
    constructor() {
      super("Unable to transform response from server");
    }
  };
  function transformResult(response, transformer) {
    let result;
    try {
      result = transformResultInner(response, transformer);
    } catch (_unused) {
      throw new TransformResultError();
    }
    if (!result.ok && (!isObject(result.error.error) || typeof result.error.error["code"] !== "number"))
      throw new TransformResultError();
    if (result.ok && !isObject(result.result))
      throw new TransformResultError();
    return result;
  }
  var import_objectSpread22 = __toESM3(require_objectSpread22(), 1);
  var trackedSymbol = Symbol();

  // node_modules/@trpc/client/dist/TRPCClientError-CjKyS10w.mjs
  var import_defineProperty2 = __toESM2(require_defineProperty(), 1);
  var import_objectSpread23 = __toESM2(require_objectSpread2(), 1);
  function isTRPCClientError(cause) {
    return cause instanceof TRPCClientError;
  }
  function isTRPCErrorResponse(obj) {
    return isObject(obj) && isObject(obj["error"]) && typeof obj["error"]["code"] === "number" && typeof obj["error"]["message"] === "string";
  }
  function getMessageFromUnknownError(err, fallback) {
    if (typeof err === "string")
      return err;
    if (isObject(err) && typeof err["message"] === "string")
      return err["message"];
    return fallback;
  }
  var TRPCClientError = class TRPCClientError2 extends Error {
    constructor(message, opts) {
      var _opts$result, _opts$result2;
      const cause = opts === null || opts === void 0 ? void 0 : opts.cause;
      super(message, { cause });
      (0, import_defineProperty2.default)(this, "cause", void 0);
      (0, import_defineProperty2.default)(this, "shape", void 0);
      (0, import_defineProperty2.default)(this, "data", void 0);
      (0, import_defineProperty2.default)(this, "meta", void 0);
      this.meta = opts === null || opts === void 0 ? void 0 : opts.meta;
      this.cause = cause;
      this.shape = opts === null || opts === void 0 || (_opts$result = opts.result) === null || _opts$result === void 0 ? void 0 : _opts$result.error;
      this.data = opts === null || opts === void 0 || (_opts$result2 = opts.result) === null || _opts$result2 === void 0 ? void 0 : _opts$result2.error.data;
      this.name = "TRPCClientError";
      Object.setPrototypeOf(this, TRPCClientError2.prototype);
    }
    static from(_cause, opts = {}) {
      const cause = _cause;
      if (isTRPCClientError(cause)) {
        if (opts.meta)
          cause.meta = (0, import_objectSpread23.default)((0, import_objectSpread23.default)({}, cause.meta), opts.meta);
        return cause;
      }
      if (isTRPCErrorResponse(cause))
        return new TRPCClientError2(cause.error.message, (0, import_objectSpread23.default)((0, import_objectSpread23.default)({}, opts), {}, { result: cause }));
      return new TRPCClientError2(getMessageFromUnknownError(cause, "Unknown error"), (0, import_objectSpread23.default)((0, import_objectSpread23.default)({}, opts), {}, { cause }));
    }
  };

  // node_modules/@trpc/client/dist/httpUtils-Bkv1johT.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/unstable-internals-Bg7n9BBj.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function getTransformer(transformer) {
    const _transformer = transformer;
    if (!_transformer)
      return {
        input: {
          serialize: (data) => data,
          deserialize: (data) => data
        },
        output: {
          serialize: (data) => data,
          deserialize: (data) => data
        }
      };
    if ("input" in _transformer)
      return _transformer;
    return {
      input: _transformer,
      output: _transformer
    };
  }

  // node_modules/@trpc/client/dist/httpUtils-Bkv1johT.mjs
  var import_objectSpread24 = __toESM2(require_objectSpread2(), 1);

  // node_modules/@trpc/client/dist/httpLink-CYOcG9kQ.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var import_objectSpread25 = __toESM2(require_objectSpread2(), 1);

  // node_modules/@trpc/client/dist/httpBatchLink-CA96-gnJ.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var import_objectSpread26 = __toESM2(require_objectSpread2(), 1);

  // node_modules/@trpc/client/dist/loggerLink-ineCN1PO.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var import_objectSpread27 = __toESM2(require_objectSpread2(), 1);
  function isFormData(value) {
    if (typeof FormData === "undefined")
      return false;
    return value instanceof FormData;
  }
  var palettes = {
    css: {
      query: ["72e3ff", "3fb0d8"],
      mutation: ["c5a3fc", "904dfc"],
      subscription: ["ff49e1", "d83fbe"]
    },
    ansi: {
      regular: {
        query: ["\x1B[30;46m", "\x1B[97;46m"],
        mutation: ["\x1B[30;45m", "\x1B[97;45m"],
        subscription: ["\x1B[30;42m", "\x1B[97;42m"]
      },
      bold: {
        query: ["\x1B[1;30;46m", "\x1B[1;97;46m"],
        mutation: ["\x1B[1;30;45m", "\x1B[1;97;45m"],
        subscription: ["\x1B[1;30;42m", "\x1B[1;97;42m"]
      }
    }
  };
  function constructPartsAndArgs(opts) {
    const { direction, type, withContext, path, id, input } = opts;
    const parts = [];
    const args = [];
    if (opts.colorMode === "none")
      parts.push(direction === "up" ? ">>" : "<<", type, `#${id}`, path);
    else if (opts.colorMode === "ansi") {
      const [lightRegular, darkRegular] = palettes.ansi.regular[type];
      const [lightBold, darkBold] = palettes.ansi.bold[type];
      const reset = "\x1B[0m";
      parts.push(direction === "up" ? lightRegular : darkRegular, direction === "up" ? ">>" : "<<", type, direction === "up" ? lightBold : darkBold, `#${id}`, path, reset);
    } else {
      const [light, dark] = palettes.css[type];
      const css = `
    background-color: #${direction === "up" ? light : dark};
    color: ${direction === "up" ? "black" : "white"};
    padding: 2px;
  `;
      parts.push("%c", direction === "up" ? ">>" : "<<", type, `#${id}`, `%c${path}%c`, "%O");
      args.push(css, `${css}; font-weight: bold;`, `${css}; font-weight: normal;`);
    }
    if (direction === "up")
      args.push(withContext ? {
        input,
        context: opts.context
      } : { input });
    else
      args.push((0, import_objectSpread27.default)({
        input,
        result: opts.result,
        elapsedMs: opts.elapsedMs
      }, withContext && { context: opts.context }));
    return {
      parts,
      args
    };
  }
  var defaultLogger = ({ c = console, colorMode = "css", withContext }) => (props) => {
    const rawInput = props.input;
    const input = isFormData(rawInput) ? Object.fromEntries(rawInput) : rawInput;
    const { parts, args } = constructPartsAndArgs((0, import_objectSpread27.default)((0, import_objectSpread27.default)({}, props), {}, {
      colorMode,
      input,
      withContext
    }));
    const fn = props.direction === "down" && props.result && (props.result instanceof Error || "error" in props.result.result && props.result.result.error) ? "error" : "log";
    c[fn].apply(null, [parts.join(" ")].concat(args));
  };
  function loggerLink(opts = {}) {
    var _opts$colorMode, _opts$withContext;
    const { enabled = () => true } = opts;
    const colorMode = (_opts$colorMode = opts.colorMode) !== null && _opts$colorMode !== void 0 ? _opts$colorMode : typeof globalThis === "undefined" ? "ansi" : "css";
    const withContext = (_opts$withContext = opts.withContext) !== null && _opts$withContext !== void 0 ? _opts$withContext : colorMode === "css";
    const { logger = defaultLogger({
      c: opts.console,
      colorMode,
      withContext
    }) } = opts;
    return () => {
      return ({ op, next }) => {
        return observable((observer) => {
          if (enabled((0, import_objectSpread27.default)((0, import_objectSpread27.default)({}, op), {}, { direction: "up" })))
            logger((0, import_objectSpread27.default)((0, import_objectSpread27.default)({}, op), {}, { direction: "up" }));
          const requestStartTime = Date.now();
          function logResult(result) {
            const elapsedMs = Date.now() - requestStartTime;
            if (enabled((0, import_objectSpread27.default)((0, import_objectSpread27.default)({}, op), {}, {
              direction: "down",
              result
            })))
              logger((0, import_objectSpread27.default)((0, import_objectSpread27.default)({}, op), {}, {
                direction: "down",
                elapsedMs,
                result
              }));
          }
          return next(op).pipe(tap({
            next(result) {
              logResult(result);
            },
            error(result) {
              logResult(result);
            }
          })).subscribe(observer);
        });
      };
    };
  }

  // node_modules/@trpc/client/dist/wsLink-H5IjZfJW.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var resultOf = (value, ...args) => {
    return typeof value === "function" ? value(...args) : value;
  };
  var import_defineProperty$3 = __toESM2(require_defineProperty(), 1);
  function withResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return {
      promise,
      resolve,
      reject
    };
  }
  async function prepareUrl(urlOptions) {
    const url = await resultOf(urlOptions.url);
    if (!urlOptions.connectionParams)
      return url;
    const prefix = url.includes("?") ? "&" : "?";
    const connectionParams = `${prefix}connectionParams=1`;
    return url + connectionParams;
  }
  async function buildConnectionMessage(connectionParams) {
    const message = {
      method: "connectionParams",
      data: await resultOf(connectionParams)
    };
    return JSON.stringify(message);
  }
  var import_defineProperty$2 = __toESM2(require_defineProperty(), 1);
  var import_defineProperty$1 = __toESM2(require_defineProperty(), 1);
  function asyncWsOpen(ws) {
    const { promise, resolve, reject } = withResolvers();
    ws.addEventListener("open", () => {
      ws.removeEventListener("error", reject);
      resolve();
    });
    ws.addEventListener("error", reject);
    return promise;
  }
  function setupPingInterval(ws, { intervalMs, pongTimeoutMs }) {
    let pingTimeout;
    let pongTimeout;
    function start() {
      pingTimeout = setTimeout(() => {
        ws.send("PING");
        pongTimeout = setTimeout(() => {
          ws.close();
        }, pongTimeoutMs);
      }, intervalMs);
    }
    function reset() {
      clearTimeout(pingTimeout);
      start();
    }
    function pong() {
      clearTimeout(pongTimeout);
      reset();
    }
    ws.addEventListener("open", start);
    ws.addEventListener("message", ({ data }) => {
      clearTimeout(pingTimeout);
      start();
      if (data === "PONG")
        pong();
    });
    ws.addEventListener("close", () => {
      clearTimeout(pingTimeout);
      clearTimeout(pongTimeout);
    });
  }
  var WsConnection = class WsConnection2 {
    constructor(opts) {
      var _opts$WebSocketPonyfi;
      (0, import_defineProperty$1.default)(this, "id", ++WsConnection2.connectCount);
      (0, import_defineProperty$1.default)(this, "WebSocketPonyfill", void 0);
      (0, import_defineProperty$1.default)(this, "urlOptions", void 0);
      (0, import_defineProperty$1.default)(this, "keepAliveOpts", void 0);
      (0, import_defineProperty$1.default)(this, "wsObservable", behaviorSubject(null));
      (0, import_defineProperty$1.default)(this, "openPromise", null);
      this.WebSocketPonyfill = (_opts$WebSocketPonyfi = opts.WebSocketPonyfill) !== null && _opts$WebSocketPonyfi !== void 0 ? _opts$WebSocketPonyfi : WebSocket;
      if (!this.WebSocketPonyfill)
        throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");
      this.urlOptions = opts.urlOptions;
      this.keepAliveOpts = opts.keepAlive;
    }
    get ws() {
      return this.wsObservable.get();
    }
    set ws(ws) {
      this.wsObservable.next(ws);
    }
    /**
    * Checks if the WebSocket connection is open and ready to communicate.
    */
    isOpen() {
      return !!this.ws && this.ws.readyState === this.WebSocketPonyfill.OPEN && !this.openPromise;
    }
    /**
    * Checks if the WebSocket connection is closed or in the process of closing.
    */
    isClosed() {
      return !!this.ws && (this.ws.readyState === this.WebSocketPonyfill.CLOSING || this.ws.readyState === this.WebSocketPonyfill.CLOSED);
    }
    async open() {
      var _this = this;
      if (_this.openPromise)
        return _this.openPromise;
      _this.id = ++WsConnection2.connectCount;
      const wsPromise = prepareUrl(_this.urlOptions).then((url) => new _this.WebSocketPonyfill(url));
      _this.openPromise = wsPromise.then(async (ws) => {
        _this.ws = ws;
        ws.addEventListener("message", function({ data }) {
          if (data === "PING")
            this.send("PONG");
        });
        if (_this.keepAliveOpts.enabled)
          setupPingInterval(ws, _this.keepAliveOpts);
        ws.addEventListener("close", () => {
          if (_this.ws === ws)
            _this.ws = null;
        });
        await asyncWsOpen(ws);
        if (_this.urlOptions.connectionParams)
          ws.send(await buildConnectionMessage(_this.urlOptions.connectionParams));
      });
      try {
        await _this.openPromise;
      } finally {
        _this.openPromise = null;
      }
    }
    /**
    * Closes the WebSocket connection gracefully.
    * Waits for any ongoing open operation to complete before closing.
    */
    async close() {
      var _this2 = this;
      try {
        await _this2.openPromise;
      } finally {
        var _this$ws;
        (_this$ws = _this2.ws) === null || _this$ws === void 0 || _this$ws.close();
      }
    }
  };
  (0, import_defineProperty$1.default)(WsConnection, "connectCount", 0);
  var import_defineProperty3 = __toESM2(require_defineProperty(), 1);
  var import_objectSpread28 = __toESM2(require_objectSpread2(), 1);

  // node_modules/@trpc/client/dist/index.mjs
  var import_defineProperty4 = __toESM2(require_defineProperty(), 1);
  var import_objectSpread2$4 = __toESM2(require_objectSpread2(), 1);
  var TRPCUntypedClient = class {
    constructor(opts) {
      (0, import_defineProperty4.default)(this, "links", void 0);
      (0, import_defineProperty4.default)(this, "runtime", void 0);
      (0, import_defineProperty4.default)(this, "requestId", void 0);
      this.requestId = 0;
      this.runtime = {};
      this.links = opts.links.map((link) => link(this.runtime));
    }
    $request(opts) {
      var _opts$context;
      const chain$ = createChain({
        links: this.links,
        op: (0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, opts), {}, {
          context: (_opts$context = opts.context) !== null && _opts$context !== void 0 ? _opts$context : {},
          id: ++this.requestId
        })
      });
      return chain$.pipe(share());
    }
    async requestAsPromise(opts) {
      var _this = this;
      try {
        const req$ = _this.$request(opts);
        const envelope = await observableToPromise(req$);
        const data = envelope.result.data;
        return data;
      } catch (err) {
        throw TRPCClientError.from(err);
      }
    }
    query(path, input, opts) {
      return this.requestAsPromise({
        type: "query",
        path,
        input,
        context: opts === null || opts === void 0 ? void 0 : opts.context,
        signal: opts === null || opts === void 0 ? void 0 : opts.signal
      });
    }
    mutation(path, input, opts) {
      return this.requestAsPromise({
        type: "mutation",
        path,
        input,
        context: opts === null || opts === void 0 ? void 0 : opts.context,
        signal: opts === null || opts === void 0 ? void 0 : opts.signal
      });
    }
    subscription(path, input, opts) {
      const observable$ = this.$request({
        type: "subscription",
        path,
        input,
        context: opts.context,
        signal: opts.signal
      });
      return observable$.subscribe({
        next(envelope) {
          switch (envelope.result.type) {
            case "state": {
              var _opts$onConnectionSta;
              (_opts$onConnectionSta = opts.onConnectionStateChange) === null || _opts$onConnectionSta === void 0 || _opts$onConnectionSta.call(opts, envelope.result);
              break;
            }
            case "started": {
              var _opts$onStarted;
              (_opts$onStarted = opts.onStarted) === null || _opts$onStarted === void 0 || _opts$onStarted.call(opts, { context: envelope.context });
              break;
            }
            case "stopped": {
              var _opts$onStopped;
              (_opts$onStopped = opts.onStopped) === null || _opts$onStopped === void 0 || _opts$onStopped.call(opts);
              break;
            }
            case "data":
            case void 0: {
              var _opts$onData;
              (_opts$onData = opts.onData) === null || _opts$onData === void 0 || _opts$onData.call(opts, envelope.result.data);
              break;
            }
          }
        },
        error(err) {
          var _opts$onError;
          (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, err);
        },
        complete() {
          var _opts$onComplete;
          (_opts$onComplete = opts.onComplete) === null || _opts$onComplete === void 0 || _opts$onComplete.call(opts);
        }
      });
    }
  };
  var untypedClientSymbol = Symbol.for("trpc_untypedClient");
  var clientCallTypeMap = {
    query: "query",
    mutate: "mutation",
    subscribe: "subscription"
  };
  var clientCallTypeToProcedureType = (clientCallType) => {
    return clientCallTypeMap[clientCallType];
  };
  function createTRPCClientProxy(client) {
    const proxy = createRecursiveProxy(({ path, args }) => {
      const pathCopy = [...path];
      const procedureType = clientCallTypeToProcedureType(pathCopy.pop());
      const fullPath = pathCopy.join(".");
      return client[procedureType](fullPath, ...args);
    });
    return createFlatProxy((key) => {
      if (key === untypedClientSymbol)
        return client;
      return proxy[key];
    });
  }
  function createTRPCClient(opts) {
    const client = new TRPCUntypedClient(opts);
    const proxy = createTRPCClientProxy(client);
    return proxy;
  }
  function getUntypedClient(client) {
    return client[untypedClientSymbol];
  }
  var import_objectSpread2$3 = __toESM2(require_objectSpread2(), 1);
  var import_objectSpread2$2 = __toESM2(require_objectSpread2(), 1);
  var require_asyncIterator = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(exports3, module) {
    function _asyncIterator$1(r) {
      var n, t, o, e = 2;
      for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
        if (t && null != (n = r[t]))
          return n.call(r);
        if (o && null != (n = r[o]))
          return new AsyncFromSyncIterator(n.call(r));
        t = "@@asyncIterator", o = "@@iterator";
      }
      throw new TypeError("Object is not async iterable");
    }
    function AsyncFromSyncIterator(r) {
      function AsyncFromSyncIteratorContinuation(r$1) {
        if (Object(r$1) !== r$1)
          return Promise.reject(new TypeError(r$1 + " is not an object."));
        var n = r$1.done;
        return Promise.resolve(r$1.value).then(function(r$2) {
          return {
            value: r$2,
            done: n
          };
        });
      }
      return AsyncFromSyncIterator = function AsyncFromSyncIterator$1(r$1) {
        this.s = r$1, this.n = r$1.next;
      }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function next() {
          return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        "return": function _return(r$1) {
          var n = this.s["return"];
          return void 0 === n ? Promise.resolve({
            value: r$1,
            done: true
          }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        },
        "throw": function _throw(r$1) {
          var n = this.s["return"];
          return void 0 === n ? Promise.reject(r$1) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        }
      }, new AsyncFromSyncIterator(r);
    }
    module.exports = _asyncIterator$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var import_asyncIterator = __toESM2(require_asyncIterator(), 1);
  var import_objectSpread2$12 = __toESM2(require_objectSpread2(), 1);
  var require_usingCtx = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(exports3, module) {
    function _usingCtx() {
      var r = "function" == typeof SuppressedError ? SuppressedError : function(r$1, e$1) {
        var n$1 = Error();
        return n$1.name = "SuppressedError", n$1.error = r$1, n$1.suppressed = e$1, n$1;
      }, e = {}, n = [];
      function using(r$1, e$1) {
        if (null != e$1) {
          if (Object(e$1) !== e$1)
            throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
          if (r$1)
            var o = e$1[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
          if (void 0 === o && (o = e$1[Symbol.dispose || Symbol["for"]("Symbol.dispose")], r$1))
            var t = o;
          if ("function" != typeof o)
            throw new TypeError("Object is not disposable.");
          t && (o = function o$1() {
            try {
              t.call(e$1);
            } catch (r$2) {
              return Promise.reject(r$2);
            }
          }), n.push({
            v: e$1,
            d: o,
            a: r$1
          });
        } else
          r$1 && n.push({
            d: e$1,
            a: r$1
          });
        return e$1;
      }
      return {
        e,
        u: using.bind(null, false),
        a: using.bind(null, true),
        d: function d() {
          var o, t = this.e, s = 0;
          function next() {
            for (; o = n.pop(); )
              try {
                if (!o.a && 1 === s)
                  return s = 0, n.push(o), Promise.resolve().then(next);
                if (o.d) {
                  var r$1 = o.d.call(o.v);
                  if (o.a)
                    return s |= 2, Promise.resolve(r$1).then(next, err);
                } else
                  s |= 1;
              } catch (r$2) {
                return err(r$2);
              }
            if (1 === s)
              return t !== e ? Promise.reject(t) : Promise.resolve();
            if (t !== e)
              throw t;
          }
          function err(n$1) {
            return t = t !== e ? new r(n$1, t) : n$1, next();
          }
          return next();
        }
      };
    }
    module.exports = _usingCtx, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_OverloadYield = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(exports3, module) {
    function _OverloadYield(e, d) {
      this.v = e, this.k = d;
    }
    module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_awaitAsyncGenerator = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(exports3, module) {
    var OverloadYield$1 = require_OverloadYield();
    function _awaitAsyncGenerator$1(e) {
      return new OverloadYield$1(e, 0);
    }
    module.exports = _awaitAsyncGenerator$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_wrapAsyncGenerator = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(exports3, module) {
    var OverloadYield = require_OverloadYield();
    function _wrapAsyncGenerator$1(e) {
      return function() {
        return new AsyncGenerator(e.apply(this, arguments));
      };
    }
    function AsyncGenerator(e) {
      var r, t;
      function resume(r$1, t$1) {
        try {
          var n = e[r$1](t$1), o = n.value, u = o instanceof OverloadYield;
          Promise.resolve(u ? o.v : o).then(function(t$2) {
            if (u) {
              var i = "return" === r$1 ? "return" : "next";
              if (!o.k || t$2.done)
                return resume(i, t$2);
              t$2 = e[i](t$2).value;
            }
            settle(n.done ? "return" : "normal", t$2);
          }, function(e$1) {
            resume("throw", e$1);
          });
        } catch (e$1) {
          settle("throw", e$1);
        }
      }
      function settle(e$1, n) {
        switch (e$1) {
          case "return":
            r.resolve({
              value: n,
              done: true
            });
            break;
          case "throw":
            r.reject(n);
            break;
          default:
            r.resolve({
              value: n,
              done: false
            });
        }
        (r = r.next) ? resume(r.key, r.arg) : t = null;
      }
      this._invoke = function(e$1, n) {
        return new Promise(function(o, u) {
          var i = {
            key: e$1,
            arg: n,
            resolve: o,
            reject: u,
            next: null
          };
          t ? t = t.next = i : (r = t = i, resume(e$1, n));
        });
      }, "function" != typeof e["return"] && (this["return"] = void 0);
    }
    AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
      return this;
    }, AsyncGenerator.prototype.next = function(e) {
      return this._invoke("next", e);
    }, AsyncGenerator.prototype["throw"] = function(e) {
      return this._invoke("throw", e);
    }, AsyncGenerator.prototype["return"] = function(e) {
      return this._invoke("return", e);
    };
    module.exports = _wrapAsyncGenerator$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var import_usingCtx = __toESM2(require_usingCtx(), 1);
  var import_awaitAsyncGenerator = __toESM2(require_awaitAsyncGenerator(), 1);
  var import_wrapAsyncGenerator = __toESM2(require_wrapAsyncGenerator(), 1);
  var import_objectSpread29 = __toESM2(require_objectSpread2(), 1);

  // src/utils/events/constants.ts
  init_dirname();
  init_buffer2();
  init_process2();
  var TRPC_REQUEST = "@trpc/request";
  var TRPC_RESPONSE = "@trpc/response";
  var WALLET_STATE_CHANGED = "@apps/wallet-state-changed";

  // src/utils/events/emitters/window.ts
  init_dirname();
  init_buffer2();
  init_process2();
  function createWindowEmitter() {
    const handlers = /* @__PURE__ */ new Map();
    return {
      on(eventName, handler) {
        const onEventFired = (event) => {
          if (!(event instanceof CustomEvent))
            return;
          handler(event.detail);
        };
        globalThis.addEventListener(eventName, onEventFired);
        if (!handlers.has(eventName)) {
          handlers.set(eventName, /* @__PURE__ */ new Map());
        }
        handlers.get(eventName).set(handler, onEventFired);
      },
      off(eventName, handler) {
        const onEventFired = handlers.get(eventName)?.get(handler);
        if (onEventFired) {
          globalThis.removeEventListener(eventName, onEventFired);
        }
      },
      emit(eventName, data) {
        globalThis.dispatchEvent(
          new CustomEvent(eventName, {
            detail: data
          })
        );
      }
    };
  }

  // src/utils/trpc/index.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/react-query/dist/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/react-query/dist/getQueryKey-BY58RNzP.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/react-query/build/modern/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/retryer.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/focusManager.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/subscribable.js
  init_dirname();
  init_buffer2();
  init_process2();
  var Subscribable = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set();
      this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
      this.listeners.add(listener);
      this.onSubscribe();
      return () => {
        this.listeners.delete(listener);
        this.onUnsubscribe();
      };
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {
    }
    onUnsubscribe() {
    }
  };

  // node_modules/@tanstack/query-core/build/modern/utils.js
  init_dirname();
  init_buffer2();
  init_process2();
  var isServer = typeof globalThis === "undefined" || "Deno" in globalThis;
  function noop4() {
    return void 0;
  }
  function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
  }
  function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
  }
  function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
  }
  function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
  }
  function hashKey(queryKey) {
    return JSON.stringify(
      queryKey,
      (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
        result[key] = val[key];
        return result;
      }, {}) : val
    );
  }
  function replaceEqualDeep(a, b) {
    if (a === b) {
      return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (array || isPlainObject(a) && isPlainObject(b)) {
      const aItems = array ? a : Object.keys(a);
      const aSize = aItems.length;
      const bItems = array ? b : Object.keys(b);
      const bSize = bItems.length;
      const copy = array ? [] : {};
      let equalItems = 0;
      for (let i = 0; i < bSize; i++) {
        const key = array ? i : bItems[i];
        if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b[key] === void 0) {
          copy[key] = void 0;
          equalItems++;
        } else {
          copy[key] = replaceEqualDeep(a[key], b[key]);
          if (copy[key] === a[key] && a[key] !== void 0) {
            equalItems++;
          }
        }
      }
      return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b;
  }
  function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (const key in a) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
  function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
  }
  function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
      return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
      return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
      return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
      return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
      return false;
    }
    return true;
  }
  function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  }
  function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
      return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
      if (true) {
        try {
          return replaceEqualDeep(prevData, data);
        } catch (error) {
          console.error(
            `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
          );
        }
      }
      return replaceEqualDeep(prevData, data);
    }
    return data;
  }
  function addToEnd(items, item, max = 0) {
    const newItems = [...items, item];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
  }
  function addToStart(items, item, max = 0) {
    const newItems = [item, ...items];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
  }
  var skipToken = Symbol();
  function ensureQueryFn(options, fetchOptions) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error(
          `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`
        );
      }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
      return () => fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
      return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
  }

  // node_modules/@tanstack/query-core/build/modern/focusManager.js
  var FocusManager = class extends Subscribable {
    #focused;
    #cleanup;
    #setup;
    constructor() {
      super();
      this.#setup = (onFocus) => {
        if (!isServer && globalThis.addEventListener) {
          const listener = () => onFocus();
          globalThis.addEventListener("visibilitychange", listener, false);
          return () => {
            globalThis.removeEventListener("visibilitychange", listener);
          };
        }
        return;
      };
    }
    onSubscribe() {
      if (!this.#cleanup) {
        this.setEventListener(this.#setup);
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.#cleanup?.();
        this.#cleanup = void 0;
      }
    }
    setEventListener(setup) {
      this.#setup = setup;
      this.#cleanup?.();
      this.#cleanup = setup((focused) => {
        if (typeof focused === "boolean") {
          this.setFocused(focused);
        } else {
          this.onFocus();
        }
      });
    }
    setFocused(focused) {
      const changed = this.#focused !== focused;
      if (changed) {
        this.#focused = focused;
        this.onFocus();
      }
    }
    onFocus() {
      const isFocused = this.isFocused();
      this.listeners.forEach((listener) => {
        listener(isFocused);
      });
    }
    isFocused() {
      if (typeof this.#focused === "boolean") {
        return this.#focused;
      }
      return globalThis.document?.visibilityState !== "hidden";
    }
  };
  var focusManager = new FocusManager();

  // node_modules/@tanstack/query-core/build/modern/onlineManager.js
  init_dirname();
  init_buffer2();
  init_process2();
  var OnlineManager = class extends Subscribable {
    #online = true;
    #cleanup;
    #setup;
    constructor() {
      super();
      this.#setup = (onOnline) => {
        if (!isServer && globalThis.addEventListener) {
          const onlineListener = () => onOnline(true);
          const offlineListener = () => onOnline(false);
          globalThis.addEventListener("online", onlineListener, false);
          globalThis.addEventListener("offline", offlineListener, false);
          return () => {
            globalThis.removeEventListener("online", onlineListener);
            globalThis.removeEventListener("offline", offlineListener);
          };
        }
        return;
      };
    }
    onSubscribe() {
      if (!this.#cleanup) {
        this.setEventListener(this.#setup);
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.#cleanup?.();
        this.#cleanup = void 0;
      }
    }
    setEventListener(setup) {
      this.#setup = setup;
      this.#cleanup?.();
      this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
      const changed = this.#online !== online;
      if (changed) {
        this.#online = online;
        this.listeners.forEach((listener) => {
          listener(online);
        });
      }
    }
    isOnline() {
      return this.#online;
    }
  };
  var onlineManager = new OnlineManager();

  // node_modules/@tanstack/query-core/build/modern/thenable.js
  init_dirname();
  init_buffer2();
  init_process2();
  function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(() => {
    });
    function finalize(data) {
      Object.assign(thenable, data);
      delete thenable.resolve;
      delete thenable.reject;
    }
    thenable.resolve = (value) => {
      finalize({
        status: "fulfilled",
        value
      });
      resolve(value);
    };
    thenable.reject = (reason) => {
      finalize({
        status: "rejected",
        reason
      });
      reject(reason);
    };
    return thenable;
  }

  // node_modules/@tanstack/query-core/build/modern/retryer.js
  function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
  }

  // node_modules/@tanstack/query-core/build/modern/query.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/notifyManager.js
  init_dirname();
  init_buffer2();
  init_process2();
  function createNotifyManager() {
    let queue2 = [];
    let transactions = 0;
    let notifyFn = (callback) => {
      callback();
    };
    let batchNotifyFn = (callback) => {
      callback();
    };
    let scheduleFn = (cb) => setTimeout(cb, 0);
    const schedule = (callback) => {
      if (transactions) {
        queue2.push(callback);
      } else {
        scheduleFn(() => {
          notifyFn(callback);
        });
      }
    };
    const flush = () => {
      const originalQueue = queue2;
      queue2 = [];
      if (originalQueue.length) {
        scheduleFn(() => {
          batchNotifyFn(() => {
            originalQueue.forEach((callback) => {
              notifyFn(callback);
            });
          });
        });
      }
    };
    return {
      batch: (callback) => {
        let result;
        transactions++;
        try {
          result = callback();
        } finally {
          transactions--;
          if (!transactions) {
            flush();
          }
        }
        return result;
      },
      /**
       * All calls to the wrapped function will be batched.
       */
      batchCalls: (callback) => {
        return (...args) => {
          schedule(() => {
            callback(...args);
          });
        };
      },
      schedule,
      /**
       * Use this method to set a custom notify function.
       * This can be used to for example wrap notifications with `React.act` while running tests.
       */
      setNotifyFunction: (fn) => {
        notifyFn = fn;
      },
      /**
       * Use this method to set a custom function to batch notifications together into a single tick.
       * By default React Query will use the batch function provided by ReactDOM or React Native.
       */
      setBatchNotifyFunction: (fn) => {
        batchNotifyFn = fn;
      },
      setScheduler: (fn) => {
        scheduleFn = fn;
      }
    };
  }
  var notifyManager = createNotifyManager();

  // node_modules/@tanstack/query-core/build/modern/query.js
  function fetchState(data, options) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
      ...data === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }

  // node_modules/@tanstack/query-core/build/modern/mutation.js
  init_dirname();
  init_buffer2();
  init_process2();
  function getDefaultState() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  }

  // node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
  init_dirname();
  init_buffer2();
  init_process2();
  function infiniteQueryBehavior(pages) {
    return {
      onFetch: (context, query) => {
        const options = context.options;
        const direction = context.fetchOptions?.meta?.fetchMore?.direction;
        const oldPages = context.state.data?.pages || [];
        const oldPageParams = context.state.data?.pageParams || [];
        let result = { pages: [], pageParams: [] };
        let currentPage = 0;
        const fetchFn = async () => {
          let cancelled = false;
          const addSignalProperty = (object) => {
            Object.defineProperty(object, "signal", {
              enumerable: true,
              get: () => {
                if (context.signal.aborted) {
                  cancelled = true;
                } else {
                  context.signal.addEventListener("abort", () => {
                    cancelled = true;
                  });
                }
                return context.signal;
              }
            });
          };
          const queryFn = ensureQueryFn(context.options, context.fetchOptions);
          const fetchPage = async (data, param, previous) => {
            if (cancelled) {
              return Promise.reject();
            }
            if (param == null && data.pages.length) {
              return Promise.resolve(data);
            }
            const queryFnContext = {
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext);
            const page = await queryFn(
              queryFnContext
            );
            const { maxPages } = context.options;
            const addTo = previous ? addToStart : addToEnd;
            return {
              pages: addTo(data.pages, page, maxPages),
              pageParams: addTo(data.pageParams, param, maxPages)
            };
          };
          if (direction && oldPages.length) {
            const previous = direction === "backward";
            const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
            const oldData = {
              pages: oldPages,
              pageParams: oldPageParams
            };
            const param = pageParamFn(options, oldData);
            result = await fetchPage(oldData, param, previous);
          } else {
            const remainingPages = pages ?? oldPages.length;
            do {
              const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
              if (currentPage > 0 && param == null) {
                break;
              }
              result = await fetchPage(result, param);
              currentPage++;
            } while (currentPage < remainingPages);
          }
          return result;
        };
        if (context.options.persister) {
          context.fetchFn = () => {
            return context.options.persister?.(
              fetchFn,
              {
                queryKey: context.queryKey,
                meta: context.options.meta,
                signal: context.signal
              },
              query
            );
          };
        } else {
          context.fetchFn = fetchFn;
        }
      }
    };
  }
  function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(
      pages[lastIndex],
      pages,
      pageParams[lastIndex],
      pageParams
    ) : void 0;
  }
  function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
  }
  function hasNextPage(options, data) {
    if (!data)
      return false;
    return getNextPageParam(options, data) != null;
  }
  function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam)
      return false;
    return getPreviousPageParam(options, data) != null;
  }

  // node_modules/@tanstack/query-core/build/modern/queryObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  var QueryObserver = class extends Subscribable {
    constructor(client, options) {
      super();
      this.options = options;
      this.#client = client;
      this.#selectError = null;
      this.#currentThenable = pendingThenable();
      if (!this.options.experimental_prefetchInRender) {
        this.#currentThenable.reject(
          new Error("experimental_prefetchInRender feature flag is not enabled")
        );
      }
      this.bindMethods();
      this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      if (this.listeners.size === 1) {
        this.#currentQuery.addObserver(this);
        if (shouldFetchOnMount(this.#currentQuery, this.options)) {
          this.#executeFetch();
        } else {
          this.updateResult();
        }
        this.#updateTimers();
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.destroy();
      }
    }
    shouldFetchOnReconnect() {
      return shouldFetchOn(
        this.#currentQuery,
        this.options,
        this.options.refetchOnReconnect
      );
    }
    shouldFetchOnWindowFocus() {
      return shouldFetchOn(
        this.#currentQuery,
        this.options,
        this.options.refetchOnWindowFocus
      );
    }
    destroy() {
      this.listeners = /* @__PURE__ */ new Set();
      this.#clearStaleTimeout();
      this.#clearRefetchInterval();
      this.#currentQuery.removeObserver(this);
    }
    setOptions(options, notifyOptions) {
      const prevOptions = this.options;
      const prevQuery = this.#currentQuery;
      this.options = this.#client.defaultQueryOptions(options);
      if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") {
        throw new Error(
          "Expected enabled to be a boolean or a callback that returns a boolean"
        );
      }
      this.#updateQuery();
      this.#currentQuery.setOptions(this.options);
      if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
        this.#client.getQueryCache().notify({
          type: "observerOptionsUpdated",
          query: this.#currentQuery,
          observer: this
        });
      }
      const mounted = this.hasListeners();
      if (mounted && shouldFetchOptionally(
        this.#currentQuery,
        prevQuery,
        this.options,
        prevOptions
      )) {
        this.#executeFetch();
      }
      this.updateResult(notifyOptions);
      if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) {
        this.#updateStaleTimeout();
      }
      const nextRefetchInterval = this.#computeRefetchInterval();
      if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
        this.#updateRefetchInterval(nextRefetchInterval);
      }
    }
    getOptimisticResult(options) {
      const query = this.#client.getQueryCache().build(this.#client, options);
      const result = this.createResult(query, options);
      if (shouldAssignObserverCurrentProperties(this, result)) {
        this.#currentResult = result;
        this.#currentResultOptions = this.options;
        this.#currentResultState = this.#currentQuery.state;
      }
      return result;
    }
    getCurrentResult() {
      return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
      const trackedResult = {};
      Object.keys(result).forEach((key) => {
        Object.defineProperty(trackedResult, key, {
          configurable: false,
          enumerable: true,
          get: () => {
            this.trackProp(key);
            onPropTracked?.(key);
            return result[key];
          }
        });
      });
      return trackedResult;
    }
    trackProp(key) {
      this.#trackedProps.add(key);
    }
    getCurrentQuery() {
      return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
      return this.fetch({
        ...options
      });
    }
    fetchOptimistic(options) {
      const defaultedOptions = this.#client.defaultQueryOptions(options);
      const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
      return query.fetch().then(() => this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
      return this.#executeFetch({
        ...fetchOptions,
        cancelRefetch: fetchOptions.cancelRefetch ?? true
      }).then(() => {
        this.updateResult();
        return this.#currentResult;
      });
    }
    #executeFetch(fetchOptions) {
      this.#updateQuery();
      let promise = this.#currentQuery.fetch(
        this.options,
        fetchOptions
      );
      if (!fetchOptions?.throwOnError) {
        promise = promise.catch(noop4);
      }
      return promise;
    }
    #updateStaleTimeout() {
      this.#clearStaleTimeout();
      const staleTime = resolveStaleTime(
        this.options.staleTime,
        this.#currentQuery
      );
      if (isServer || this.#currentResult.isStale || !isValidTimeout(staleTime)) {
        return;
      }
      const time = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime);
      const timeout = time + 1;
      this.#staleTimeoutId = setTimeout(() => {
        if (!this.#currentResult.isStale) {
          this.updateResult();
        }
      }, timeout);
    }
    #computeRefetchInterval() {
      return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
      this.#clearRefetchInterval();
      this.#currentRefetchInterval = nextInterval;
      if (isServer || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
        return;
      }
      this.#refetchIntervalId = setInterval(() => {
        if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
          this.#executeFetch();
        }
      }, this.#currentRefetchInterval);
    }
    #updateTimers() {
      this.#updateStaleTimeout();
      this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
      if (this.#staleTimeoutId) {
        clearTimeout(this.#staleTimeoutId);
        this.#staleTimeoutId = void 0;
      }
    }
    #clearRefetchInterval() {
      if (this.#refetchIntervalId) {
        clearInterval(this.#refetchIntervalId);
        this.#refetchIntervalId = void 0;
      }
    }
    createResult(query, options) {
      const prevQuery = this.#currentQuery;
      const prevOptions = this.options;
      const prevResult = this.#currentResult;
      const prevResultState = this.#currentResultState;
      const prevResultOptions = this.#currentResultOptions;
      const queryChange = query !== prevQuery;
      const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
      const { state } = query;
      let newState = { ...state };
      let isPlaceholderData = false;
      let data;
      if (options._optimisticResults) {
        const mounted = this.hasListeners();
        const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
        const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
        if (fetchOnMount || fetchOptionally) {
          newState = {
            ...newState,
            ...fetchState(state.data, query.options)
          };
        }
        if (options._optimisticResults === "isRestoring") {
          newState.fetchStatus = "idle";
        }
      }
      let { error, errorUpdatedAt, status } = newState;
      if (options.select && newState.data !== void 0) {
        if (prevResult && newState.data === prevResultState?.data && options.select === this.#selectFn) {
          data = this.#selectResult;
        } else {
          try {
            this.#selectFn = options.select;
            data = options.select(newState.data);
            data = replaceData(prevResult?.data, data, options);
            this.#selectResult = data;
            this.#selectError = null;
          } catch (selectError) {
            this.#selectError = selectError;
          }
        }
      } else {
        data = newState.data;
      }
      if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
        let placeholderData;
        if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
          placeholderData = prevResult.data;
        } else {
          placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
            this.#lastQueryWithDefinedData?.state.data,
            this.#lastQueryWithDefinedData
          ) : options.placeholderData;
          if (options.select && placeholderData !== void 0) {
            try {
              placeholderData = options.select(placeholderData);
              this.#selectError = null;
            } catch (selectError) {
              this.#selectError = selectError;
            }
          }
        }
        if (placeholderData !== void 0) {
          status = "success";
          data = replaceData(
            prevResult?.data,
            placeholderData,
            options
          );
          isPlaceholderData = true;
        }
      }
      if (this.#selectError) {
        error = this.#selectError;
        data = this.#selectResult;
        errorUpdatedAt = Date.now();
        status = "error";
      }
      const isFetching = newState.fetchStatus === "fetching";
      const isPending = status === "pending";
      const isError = status === "error";
      const isLoading = isPending && isFetching;
      const hasData = data !== void 0;
      const result = {
        status,
        fetchStatus: newState.fetchStatus,
        isPending,
        isSuccess: status === "success",
        isError,
        isInitialLoading: isLoading,
        isLoading,
        data,
        dataUpdatedAt: newState.dataUpdatedAt,
        error,
        errorUpdatedAt,
        failureCount: newState.fetchFailureCount,
        failureReason: newState.fetchFailureReason,
        errorUpdateCount: newState.errorUpdateCount,
        isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
        isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
        isFetching,
        isRefetching: isFetching && !isPending,
        isLoadingError: isError && !hasData,
        isPaused: newState.fetchStatus === "paused",
        isPlaceholderData,
        isRefetchError: isError && hasData,
        isStale: isStale(query, options),
        refetch: this.refetch,
        promise: this.#currentThenable
      };
      const nextResult = result;
      if (this.options.experimental_prefetchInRender) {
        const finalizeThenableIfPossible = (thenable) => {
          if (nextResult.status === "error") {
            thenable.reject(nextResult.error);
          } else if (nextResult.data !== void 0) {
            thenable.resolve(nextResult.data);
          }
        };
        const recreateThenable = () => {
          const pending = this.#currentThenable = nextResult.promise = pendingThenable();
          finalizeThenableIfPossible(pending);
        };
        const prevThenable = this.#currentThenable;
        switch (prevThenable.status) {
          case "pending":
            if (query.queryHash === prevQuery.queryHash) {
              finalizeThenableIfPossible(prevThenable);
            }
            break;
          case "fulfilled":
            if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
              recreateThenable();
            }
            break;
          case "rejected":
            if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
              recreateThenable();
            }
            break;
        }
      }
      return nextResult;
    }
    updateResult(notifyOptions) {
      const prevResult = this.#currentResult;
      const nextResult = this.createResult(this.#currentQuery, this.options);
      this.#currentResultState = this.#currentQuery.state;
      this.#currentResultOptions = this.options;
      if (this.#currentResultState.data !== void 0) {
        this.#lastQueryWithDefinedData = this.#currentQuery;
      }
      if (shallowEqualObjects(nextResult, prevResult)) {
        return;
      }
      this.#currentResult = nextResult;
      const defaultNotifyOptions = {};
      const shouldNotifyListeners = () => {
        if (!prevResult) {
          return true;
        }
        const { notifyOnChangeProps } = this.options;
        const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
        if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
          return true;
        }
        const includedProps = new Set(
          notifyOnChangePropsValue ?? this.#trackedProps
        );
        if (this.options.throwOnError) {
          includedProps.add("error");
        }
        return Object.keys(this.#currentResult).some((key) => {
          const typedKey = key;
          const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
          return changed && includedProps.has(typedKey);
        });
      };
      if (notifyOptions?.listeners !== false && shouldNotifyListeners()) {
        defaultNotifyOptions.listeners = true;
      }
      this.#notify({ ...defaultNotifyOptions, ...notifyOptions });
    }
    #updateQuery() {
      const query = this.#client.getQueryCache().build(this.#client, this.options);
      if (query === this.#currentQuery) {
        return;
      }
      const prevQuery = this.#currentQuery;
      this.#currentQuery = query;
      this.#currentQueryInitialState = query.state;
      if (this.hasListeners()) {
        prevQuery?.removeObserver(this);
        query.addObserver(this);
      }
    }
    onQueryUpdate() {
      this.updateResult();
      if (this.hasListeners()) {
        this.#updateTimers();
      }
    }
    #notify(notifyOptions) {
      notifyManager.batch(() => {
        if (notifyOptions.listeners) {
          this.listeners.forEach((listener) => {
            listener(this.#currentResult);
          });
        }
        this.#client.getQueryCache().notify({
          query: this.#currentQuery,
          type: "observerResultsUpdated"
        });
      });
    }
  };
  function shouldLoadOnMount(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
  }
  function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
  }
  function shouldFetchOn(query, options, field) {
    if (resolveEnabled(options.enabled, query) !== false) {
      const value = typeof field === "function" ? field(query) : field;
      return value === "always" || value !== false && isStale(query, options);
    }
    return false;
  }
  function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
  }
  function isStale(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
  }
  function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
      return true;
    }
    return false;
  }

  // node_modules/@tanstack/query-core/build/modern/queriesObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  function difference(array1, array2) {
    return array1.filter((x) => !array2.includes(x));
  }
  function replaceAt(array, index, value) {
    const copy = array.slice(0);
    copy[index] = value;
    return copy;
  }
  var QueriesObserver = class extends Subscribable {
    #client;
    #result;
    #queries;
    #options;
    #observers;
    #combinedResult;
    #lastCombine;
    #lastResult;
    constructor(client, queries, options) {
      super();
      this.#client = client;
      this.#options = options;
      this.#queries = [];
      this.#observers = [];
      this.#result = [];
      this.setQueries(queries);
    }
    onSubscribe() {
      if (this.listeners.size === 1) {
        this.#observers.forEach((observer) => {
          observer.subscribe((result) => {
            this.#onUpdate(observer, result);
          });
        });
      }
    }
    onUnsubscribe() {
      if (!this.listeners.size) {
        this.destroy();
      }
    }
    destroy() {
      this.listeners = /* @__PURE__ */ new Set();
      this.#observers.forEach((observer) => {
        observer.destroy();
      });
    }
    setQueries(queries, options, notifyOptions) {
      this.#queries = queries;
      this.#options = options;
      notifyManager.batch(() => {
        const prevObservers = this.#observers;
        const newObserverMatches = this.#findMatchingObservers(this.#queries);
        newObserverMatches.forEach(
          (match) => match.observer.setOptions(match.defaultedQueryOptions, notifyOptions)
        );
        const newObservers = newObserverMatches.map((match) => match.observer);
        const newResult = newObservers.map(
          (observer) => observer.getCurrentResult()
        );
        const hasIndexChange = newObservers.some(
          (observer, index) => observer !== prevObservers[index]
        );
        if (prevObservers.length === newObservers.length && !hasIndexChange) {
          return;
        }
        this.#observers = newObservers;
        this.#result = newResult;
        if (!this.hasListeners()) {
          return;
        }
        difference(prevObservers, newObservers).forEach((observer) => {
          observer.destroy();
        });
        difference(newObservers, prevObservers).forEach((observer) => {
          observer.subscribe((result) => {
            this.#onUpdate(observer, result);
          });
        });
        this.#notify();
      });
    }
    getCurrentResult() {
      return this.#result;
    }
    getQueries() {
      return this.#observers.map((observer) => observer.getCurrentQuery());
    }
    getObservers() {
      return this.#observers;
    }
    getOptimisticResult(queries, combine) {
      const matches = this.#findMatchingObservers(queries);
      const result = matches.map(
        (match) => match.observer.getOptimisticResult(match.defaultedQueryOptions)
      );
      return [
        result,
        (r) => {
          return this.#combineResult(r ?? result, combine);
        },
        () => {
          return matches.map((match, index) => {
            const observerResult = result[index];
            return !match.defaultedQueryOptions.notifyOnChangeProps ? match.observer.trackResult(observerResult, (accessedProp) => {
              matches.forEach((m) => {
                m.observer.trackProp(accessedProp);
              });
            }) : observerResult;
          });
        }
      ];
    }
    #combineResult(input, combine) {
      if (combine) {
        if (!this.#combinedResult || this.#result !== this.#lastResult || combine !== this.#lastCombine) {
          this.#lastCombine = combine;
          this.#lastResult = this.#result;
          this.#combinedResult = replaceEqualDeep(
            this.#combinedResult,
            combine(input)
          );
        }
        return this.#combinedResult;
      }
      return input;
    }
    #findMatchingObservers(queries) {
      const prevObserversMap = new Map(
        this.#observers.map((observer) => [observer.options.queryHash, observer])
      );
      const observers = [];
      queries.forEach((options) => {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const match = prevObserversMap.get(defaultedOptions.queryHash);
        if (match) {
          observers.push({
            defaultedQueryOptions: defaultedOptions,
            observer: match
          });
        } else {
          const existingObserver = this.#observers.find(
            (o) => o.options.queryHash === defaultedOptions.queryHash
          );
          observers.push({
            defaultedQueryOptions: defaultedOptions,
            observer: existingObserver ?? new QueryObserver(this.#client, defaultedOptions)
          });
        }
      });
      return observers.sort((a, b) => {
        return queries.findIndex(
          (q) => q.queryHash === a.defaultedQueryOptions.queryHash
        ) - queries.findIndex(
          (q) => q.queryHash === b.defaultedQueryOptions.queryHash
        );
      });
    }
    #onUpdate(observer, result) {
      const index = this.#observers.indexOf(observer);
      if (index !== -1) {
        this.#result = replaceAt(this.#result, index, result);
        this.#notify();
      }
    }
    #notify() {
      if (this.hasListeners()) {
        const previousResult = this.#combinedResult;
        const newResult = this.#combineResult(
          this.#result,
          this.#options?.combine
        );
        if (previousResult !== newResult) {
          notifyManager.batch(() => {
            this.listeners.forEach((listener) => {
              listener(this.#result);
            });
          });
        }
      }
    }
  };

  // node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  var InfiniteQueryObserver = class extends QueryObserver {
    constructor(client, options) {
      super(client, options);
    }
    bindMethods() {
      super.bindMethods();
      this.fetchNextPage = this.fetchNextPage.bind(this);
      this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    }
    setOptions(options, notifyOptions) {
      super.setOptions(
        {
          ...options,
          behavior: infiniteQueryBehavior()
        },
        notifyOptions
      );
    }
    getOptimisticResult(options) {
      options.behavior = infiniteQueryBehavior();
      return super.getOptimisticResult(options);
    }
    fetchNextPage(options) {
      return this.fetch({
        ...options,
        meta: {
          fetchMore: { direction: "forward" }
        }
      });
    }
    fetchPreviousPage(options) {
      return this.fetch({
        ...options,
        meta: {
          fetchMore: { direction: "backward" }
        }
      });
    }
    createResult(query, options) {
      const { state } = query;
      const parentResult = super.createResult(query, options);
      const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
      const fetchDirection = state.fetchMeta?.fetchMore?.direction;
      const isFetchNextPageError = isError && fetchDirection === "forward";
      const isFetchingNextPage = isFetching && fetchDirection === "forward";
      const isFetchPreviousPageError = isError && fetchDirection === "backward";
      const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
      const result = {
        ...parentResult,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: hasNextPage(options, state.data),
        hasPreviousPage: hasPreviousPage(options, state.data),
        isFetchNextPageError,
        isFetchingNextPage,
        isFetchPreviousPageError,
        isFetchingPreviousPage,
        isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
        isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
      };
      return result;
    }
  };

  // node_modules/@tanstack/query-core/build/modern/mutationObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  var MutationObserver = class extends Subscribable {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options) {
      super();
      this.#client = client;
      this.setOptions(options);
      this.bindMethods();
      this.#updateResult();
    }
    bindMethods() {
      this.mutate = this.mutate.bind(this);
      this.reset = this.reset.bind(this);
    }
    setOptions(options) {
      const prevOptions = this.options;
      this.options = this.#client.defaultMutationOptions(options);
      if (!shallowEqualObjects(this.options, prevOptions)) {
        this.#client.getMutationCache().notify({
          type: "observerOptionsUpdated",
          mutation: this.#currentMutation,
          observer: this
        });
      }
      if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
        this.reset();
      } else if (this.#currentMutation?.state.status === "pending") {
        this.#currentMutation.setOptions(this.options);
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.#currentMutation?.removeObserver(this);
      }
    }
    onMutationUpdate(action) {
      this.#updateResult();
      this.#notify(action);
    }
    getCurrentResult() {
      return this.#currentResult;
    }
    reset() {
      this.#currentMutation?.removeObserver(this);
      this.#currentMutation = void 0;
      this.#updateResult();
      this.#notify();
    }
    mutate(variables, options) {
      this.#mutateOptions = options;
      this.#currentMutation?.removeObserver(this);
      this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
      this.#currentMutation.addObserver(this);
      return this.#currentMutation.execute(variables);
    }
    #updateResult() {
      const state = this.#currentMutation?.state ?? getDefaultState();
      this.#currentResult = {
        ...state,
        isPending: state.status === "pending",
        isSuccess: state.status === "success",
        isError: state.status === "error",
        isIdle: state.status === "idle",
        mutate: this.mutate,
        reset: this.reset
      };
    }
    #notify(action) {
      notifyManager.batch(() => {
        if (this.#mutateOptions && this.hasListeners()) {
          const variables = this.#currentResult.variables;
          const context = this.#currentResult.context;
          if (action?.type === "success") {
            this.#mutateOptions.onSuccess?.(action.data, variables, context);
            this.#mutateOptions.onSettled?.(action.data, null, variables, context);
          } else if (action?.type === "error") {
            this.#mutateOptions.onError?.(action.error, variables, context);
            this.#mutateOptions.onSettled?.(
              void 0,
              action.error,
              variables,
              context
            );
          }
        }
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      });
    }
  };

  // node_modules/@tanstack/react-query/build/modern/useQueries.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React5 = __toESM(require_react(), 1);

  // node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var QueryClientContext = React.createContext(
    void 0
  );
  var useQueryClient = (queryClient) => {
    const client = React.useContext(QueryClientContext);
    if (queryClient) {
      return queryClient;
    }
    if (!client) {
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
  };

  // node_modules/@tanstack/react-query/build/modern/isRestoring.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React2 = __toESM(require_react(), 1);
  var IsRestoringContext = React2.createContext(false);
  var useIsRestoring = () => React2.useContext(IsRestoringContext);
  var IsRestoringProvider = IsRestoringContext.Provider;

  // node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React3 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function createValue() {
    let isReset = false;
    return {
      clearReset: () => {
        isReset = false;
      },
      reset: () => {
        isReset = true;
      },
      isReset: () => {
        return isReset;
      }
    };
  }
  var QueryErrorResetBoundaryContext = React3.createContext(createValue());
  var useQueryErrorResetBoundary = () => React3.useContext(QueryErrorResetBoundaryContext);

  // node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React4 = __toESM(require_react(), 1);

  // node_modules/@tanstack/react-query/build/modern/utils.js
  init_dirname();
  init_buffer2();
  init_process2();
  function shouldThrowError(throwError, params) {
    if (typeof throwError === "function") {
      return throwError(...params);
    }
    return !!throwError;
  }
  function noop5() {
  }

  // node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
  var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
    if (options.suspense || options.throwOnError) {
      if (!errorResetBoundary.isReset()) {
        options.retryOnMount = false;
      }
    }
  };
  var useClearResetErrorBoundary = (errorResetBoundary) => {
    React4.useEffect(() => {
      errorResetBoundary.clearReset();
    }, [errorResetBoundary]);
  };
  var getHasError = ({
    result,
    errorResetBoundary,
    throwOnError,
    query
  }) => {
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && shouldThrowError(throwOnError, [result.error, query]);
  };

  // node_modules/@tanstack/react-query/build/modern/suspense.js
  init_dirname();
  init_buffer2();
  init_process2();
  var defaultThrowOnError = (_error, query) => query.state.data === void 0;
  var ensureSuspenseTimers = (defaultedOptions) => {
    if (defaultedOptions.suspense) {
      if (defaultedOptions.staleTime === void 0) {
        defaultedOptions.staleTime = 1e3;
      }
      if (typeof defaultedOptions.gcTime === "number") {
        defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, 1e3);
      }
    }
  };
  var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
  var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
  var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
    errorResetBoundary.clearReset();
  });

  // node_modules/@tanstack/react-query/build/modern/useQueries.js
  function useQueries({
    queries,
    ...options
  }, queryClient) {
    const client = useQueryClient(queryClient);
    const isRestoring = useIsRestoring();
    const errorResetBoundary = useQueryErrorResetBoundary();
    const defaultedQueries = React5.useMemo(
      () => queries.map((opts) => {
        const defaultedOptions = client.defaultQueryOptions(
          opts
        );
        defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
        return defaultedOptions;
      }),
      [queries, client, isRestoring]
    );
    defaultedQueries.forEach((query) => {
      ensureSuspenseTimers(query);
      ensurePreventErrorBoundaryRetry(query, errorResetBoundary);
    });
    useClearResetErrorBoundary(errorResetBoundary);
    const [observer] = React5.useState(
      () => new QueriesObserver(
        client,
        defaultedQueries,
        options
      )
    );
    const [optimisticResult, getCombinedResult, trackResult2] = observer.getOptimisticResult(
      defaultedQueries,
      options.combine
    );
    React5.useSyncExternalStore(
      React5.useCallback(
        (onStoreChange) => isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange)),
        [observer, isRestoring]
      ),
      () => observer.getCurrentResult(),
      () => observer.getCurrentResult()
    );
    React5.useEffect(() => {
      observer.setQueries(
        defaultedQueries,
        options,
        {
          listeners: false
        }
      );
    }, [defaultedQueries, options, observer]);
    const shouldAtLeastOneSuspend = optimisticResult.some(
      (result, index) => shouldSuspend(defaultedQueries[index], result)
    );
    const suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap((result, index) => {
      const opts = defaultedQueries[index];
      if (opts) {
        const queryObserver = new QueryObserver(client, opts);
        if (shouldSuspend(opts, result)) {
          return fetchOptimistic(opts, queryObserver, errorResetBoundary);
        } else if (willFetch(result, isRestoring)) {
          void fetchOptimistic(opts, queryObserver, errorResetBoundary);
        }
      }
      return [];
    }) : [];
    if (suspensePromises.length > 0) {
      throw Promise.all(suspensePromises);
    }
    const firstSingleResultWhichShouldThrow = optimisticResult.find(
      (result, index) => {
        const query = defaultedQueries[index];
        return query && getHasError({
          result,
          errorResetBoundary,
          throwOnError: query.throwOnError,
          query: client.getQueryCache().get(query.queryHash)
        });
      }
    );
    if (firstSingleResultWhichShouldThrow?.error) {
      throw firstSingleResultWhichShouldThrow.error;
    }
    return getCombinedResult(trackResult2());
  }

  // node_modules/@tanstack/react-query/build/modern/useQuery.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React6 = __toESM(require_react(), 1);
  function useBaseQuery(options, Observer, queryClient) {
    if (true) {
      if (typeof options !== "object" || Array.isArray(options)) {
        throw new Error(
          'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
        );
      }
    }
    const client = useQueryClient(queryClient);
    const isRestoring = useIsRestoring();
    const errorResetBoundary = useQueryErrorResetBoundary();
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(
      defaultedOptions
    );
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    ensureSuspenseTimers(defaultedOptions);
    ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
    useClearResetErrorBoundary(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = React6.useState(
      () => new Observer(
        client,
        defaultedOptions
      )
    );
    const result = observer.getOptimisticResult(defaultedOptions);
    React6.useSyncExternalStore(
      React6.useCallback(
        (onStoreChange) => {
          const unsubscribe = isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange));
          observer.updateResult();
          return unsubscribe;
        },
        [observer, isRestoring]
      ),
      () => observer.getCurrentResult(),
      () => observer.getCurrentResult()
    );
    React6.useEffect(() => {
      observer.setOptions(defaultedOptions, { listeners: false });
    }, [defaultedOptions, observer]);
    if (shouldSuspend(defaultedOptions, result)) {
      throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
    }
    if (getHasError({
      result,
      errorResetBoundary,
      throwOnError: defaultedOptions.throwOnError,
      query: client.getQueryCache().get(defaultedOptions.queryHash)
    })) {
      throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(
      defaultedOptions,
      result
    );
    if (defaultedOptions.experimental_prefetchInRender && !isServer && willFetch(result, isRestoring)) {
      const promise = isNewCacheEntry ? (
        // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
      ) : (
        // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise
      );
      promise?.catch(noop5).finally(() => {
        if (!observer.hasListeners()) {
          observer.updateResult();
        }
      });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
  }

  // node_modules/@tanstack/react-query/build/modern/useQuery.js
  function useQuery(options, queryClient) {
    return useBaseQuery(options, QueryObserver, queryClient);
  }

  // node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useSuspenseQuery(options, queryClient) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error("skipToken is not allowed for useSuspenseQuery");
      }
    }
    return useBaseQuery(
      {
        ...options,
        enabled: true,
        suspense: true,
        throwOnError: defaultThrowOnError,
        placeholderData: void 0
      },
      QueryObserver,
      queryClient
    );
  }

  // node_modules/@tanstack/react-query/build/modern/useSuspenseInfiniteQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useSuspenseInfiniteQuery(options, queryClient) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error("skipToken is not allowed for useSuspenseInfiniteQuery");
      }
    }
    return useBaseQuery(
      {
        ...options,
        enabled: true,
        suspense: true,
        throwOnError: defaultThrowOnError
      },
      InfiniteQueryObserver,
      queryClient
    );
  }

  // node_modules/@tanstack/react-query/build/modern/useSuspenseQueries.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useSuspenseQueries(options, queryClient) {
    return useQueries(
      {
        ...options,
        queries: options.queries.map((query) => {
          if (true) {
            if (query.queryFn === skipToken) {
              console.error("skipToken is not allowed for useSuspenseQueries");
            }
          }
          return {
            ...query,
            suspense: true,
            throwOnError: defaultThrowOnError,
            enabled: true,
            placeholderData: void 0
          };
        })
      },
      queryClient
    );
  }

  // node_modules/@tanstack/react-query/build/modern/usePrefetchQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function usePrefetchQuery(options, queryClient) {
    const client = useQueryClient(queryClient);
    if (!client.getQueryState(options.queryKey)) {
      client.prefetchQuery(options);
    }
  }

  // node_modules/@tanstack/react-query/build/modern/usePrefetchInfiniteQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function usePrefetchInfiniteQuery(options, queryClient) {
    const client = useQueryClient(queryClient);
    if (!client.getQueryState(options.queryKey)) {
      client.prefetchInfiniteQuery(options);
    }
  }

  // node_modules/@tanstack/react-query/build/modern/queryOptions.js
  init_dirname();
  init_buffer2();
  init_process2();
  function queryOptions(options) {
    return options;
  }

  // node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.js
  init_dirname();
  init_buffer2();
  init_process2();
  function infiniteQueryOptions(options) {
    return options;
  }

  // node_modules/@tanstack/react-query/build/modern/useMutation.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React7 = __toESM(require_react(), 1);
  function useMutation(options, queryClient) {
    const client = useQueryClient(queryClient);
    const [observer] = React7.useState(
      () => new MutationObserver(
        client,
        options
      )
    );
    React7.useEffect(() => {
      observer.setOptions(options);
    }, [observer, options]);
    const result = React7.useSyncExternalStore(
      React7.useCallback(
        (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
        [observer]
      ),
      () => observer.getCurrentResult(),
      () => observer.getCurrentResult()
    );
    const mutate = React7.useCallback(
      (variables, mutateOptions) => {
        observer.mutate(variables, mutateOptions).catch(noop5);
      },
      [observer]
    );
    if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
      throw result.error;
    }
    return { ...result, mutate, mutateAsync: result.mutate };
  }

  // node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useInfiniteQuery(options, queryClient) {
    return useBaseQuery(
      options,
      InfiniteQueryObserver,
      queryClient
    );
  }

  // node_modules/@trpc/react-query/dist/getQueryKey-BY58RNzP.mjs
  var __create4 = Object.create;
  var __defProp4 = Object.defineProperty;
  var __getOwnPropDesc4 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames4 = Object.getOwnPropertyNames;
  var __getProtoOf4 = Object.getPrototypeOf;
  var __hasOwnProp4 = Object.prototype.hasOwnProperty;
  var __commonJS4 = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames4(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps4 = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames4(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp4.call(to, key) && key !== except)
          __defProp4(to, key, {
            get: ((k) => from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc4(from, key)) || desc.enumerable
          });
      }
    return to;
  };
  var __toESM4 = (mod, isNodeMode, target) => (target = mod != null ? __create4(__getProtoOf4(mod)) : {}, __copyProps4(isNodeMode || !mod || !mod.__esModule ? __defProp4(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod));
  var require_objectWithoutPropertiesLoose = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(exports3, module) {
    function _objectWithoutPropertiesLoose(r, e) {
      if (null == r)
        return {};
      var t = {};
      for (var n in r)
        if ({}.hasOwnProperty.call(r, n)) {
          if (e.includes(n))
            continue;
          t[n] = r[n];
        }
      return t;
    }
    module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_objectWithoutProperties = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(exports3, module) {
    var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
    function _objectWithoutProperties$1(e, t) {
      if (null == e)
        return {};
      var o, r, i = objectWithoutPropertiesLoose(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++)
          o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
      }
      return i;
    }
    module.exports = _objectWithoutProperties$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_typeof3 = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports3, module) {
    function _typeof$2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
        return typeof o$1;
      } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof$2(o);
    }
    module.exports = _typeof$2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_toPrimitive3 = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports3, module) {
    var _typeof$1 = require_typeof3()["default"];
    function toPrimitive$1(t, r) {
      if ("object" != _typeof$1(t) || !t)
        return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof$1(i))
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_toPropertyKey3 = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports3, module) {
    var _typeof = require_typeof3()["default"];
    var toPrimitive = require_toPrimitive3();
    function toPropertyKey$1(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_defineProperty3 = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports3, module) {
    var toPropertyKey = require_toPropertyKey3();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var require_objectSpread23 = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports3, module) {
    var defineProperty = require_defineProperty3();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
          return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r$1) {
          defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
          Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
      }
      return e;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var import_objectWithoutProperties = __toESM4(require_objectWithoutProperties(), 1);
  var import_objectSpread210 = __toESM4(require_objectSpread23(), 1);
  var _excluded = ["cursor", "direction"];
  function getQueryKeyInternal(path, input, type) {
    const splitPath = path.flatMap((part) => part.split("."));
    if (!input && (!type || type === "any"))
      return splitPath.length ? [splitPath] : [];
    if (type === "infinite" && isObject(input) && ("direction" in input || "cursor" in input)) {
      const { cursor: _, direction: __ } = input, inputWithoutCursorAndDirection = (0, import_objectWithoutProperties.default)(input, _excluded);
      return [splitPath, {
        input: inputWithoutCursorAndDirection,
        type: "infinite"
      }];
    }
    return [splitPath, (0, import_objectSpread210.default)((0, import_objectSpread210.default)({}, typeof input !== "undefined" && input !== skipToken && { input }), type && type !== "any" && { type })];
  }
  function getMutationKeyInternal(path) {
    return getQueryKeyInternal(path, void 0, "any");
  }

  // node_modules/@trpc/react-query/dist/shared-JtnEvJvB.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var React$2 = __toESM(require_react(), 1);
  var React$1 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function createReactDecoration(hooks) {
    return createRecursiveProxy(({ path, args }) => {
      var _rest$;
      const pathCopy = [...path];
      const lastArg = pathCopy.pop();
      if (lastArg === "useMutation")
        return hooks[lastArg](pathCopy, ...args);
      if (lastArg === "_def")
        return { path: pathCopy };
      const [input, ...rest] = args;
      const opts = (_rest$ = rest[0]) !== null && _rest$ !== void 0 ? _rest$ : {};
      return hooks[lastArg](pathCopy, input, opts);
    });
  }
  var _React$createContext;
  var contextProps = [
    "client",
    "ssrContext",
    "ssrState",
    "abortOnUnmount"
  ];
  var TRPCContext = (_React$createContext = React$2.createContext) === null || _React$createContext === void 0 ? void 0 : _React$createContext.call(React$2, null);
  var getQueryType = (utilName) => {
    switch (utilName) {
      case "queryOptions":
      case "fetch":
      case "ensureData":
      case "prefetch":
      case "getData":
      case "setData":
      case "setQueriesData":
        return "query";
      case "infiniteQueryOptions":
      case "fetchInfinite":
      case "prefetchInfinite":
      case "getInfiniteData":
      case "setInfiniteData":
        return "infinite";
      case "setMutationDefaults":
      case "getMutationDefaults":
      case "isMutating":
      case "cancel":
      case "invalidate":
      case "refetch":
      case "reset":
        return "any";
    }
  };
  function createRecursiveUtilsProxy(context) {
    return createRecursiveProxy((opts) => {
      const path = [...opts.path];
      const utilName = path.pop();
      const args = [...opts.args];
      const input = args.shift();
      const queryType = getQueryType(utilName);
      const queryKey = getQueryKeyInternal(path, input, queryType);
      const contextMap = {
        infiniteQueryOptions: () => context.infiniteQueryOptions(path, queryKey, args[0]),
        queryOptions: () => context.queryOptions(path, queryKey, ...args),
        fetch: () => context.fetchQuery(queryKey, ...args),
        fetchInfinite: () => context.fetchInfiniteQuery(queryKey, args[0]),
        prefetch: () => context.prefetchQuery(queryKey, ...args),
        prefetchInfinite: () => context.prefetchInfiniteQuery(queryKey, args[0]),
        ensureData: () => context.ensureQueryData(queryKey, ...args),
        invalidate: () => context.invalidateQueries(queryKey, ...args),
        reset: () => context.resetQueries(queryKey, ...args),
        refetch: () => context.refetchQueries(queryKey, ...args),
        cancel: () => context.cancelQuery(queryKey, ...args),
        setData: () => {
          context.setQueryData(queryKey, args[0], args[1]);
        },
        setQueriesData: () => context.setQueriesData(queryKey, args[0], args[1], args[2]),
        setInfiniteData: () => {
          context.setInfiniteQueryData(queryKey, args[0], args[1]);
        },
        getData: () => context.getQueryData(queryKey),
        getInfiniteData: () => context.getInfiniteQueryData(queryKey),
        setMutationDefaults: () => context.setMutationDefaults(getMutationKeyInternal(path), input),
        getMutationDefaults: () => context.getMutationDefaults(getMutationKeyInternal(path)),
        isMutating: () => context.isMutating({ mutationKey: getMutationKeyInternal(path) })
      };
      return contextMap[utilName]();
    });
  }
  function createReactQueryUtils(context) {
    const clientProxy = createTRPCClientProxy(context.client);
    const proxy = createRecursiveUtilsProxy(context);
    return createFlatProxy((key) => {
      const contextName = key;
      if (contextName === "client")
        return clientProxy;
      if (contextProps.includes(contextName))
        return context[contextName];
      return proxy[key];
    });
  }
  var import_objectSpread2$32 = __toESM4(require_objectSpread23(), 1);
  function createUseQueries(client) {
    const untypedClient = client instanceof TRPCUntypedClient ? client : getUntypedClient(client);
    return createRecursiveProxy((opts) => {
      const arrayPath = opts.path;
      const dotPath = arrayPath.join(".");
      const [input, _opts] = opts.args;
      const options = (0, import_objectSpread2$32.default)({
        queryKey: getQueryKeyInternal(arrayPath, input, "query"),
        queryFn: () => {
          return untypedClient.query(dotPath, input, _opts === null || _opts === void 0 ? void 0 : _opts.trpc);
        }
      }, _opts);
      return options;
    });
  }
  var import_objectSpread2$22 = __toESM4(require_objectSpread23(), 1);
  function getClientArgs(queryKey, opts, infiniteParams) {
    var _queryKey$;
    const path = queryKey[0];
    let input = (_queryKey$ = queryKey[1]) === null || _queryKey$ === void 0 ? void 0 : _queryKey$.input;
    if (infiniteParams) {
      var _input;
      input = (0, import_objectSpread2$22.default)((0, import_objectSpread2$22.default)((0, import_objectSpread2$22.default)({}, (_input = input) !== null && _input !== void 0 ? _input : {}), infiniteParams.pageParam ? { cursor: infiniteParams.pageParam } : {}), {}, { direction: infiniteParams.direction });
    }
    return [
      path.join("."),
      input,
      opts === null || opts === void 0 ? void 0 : opts.trpc
    ];
  }
  var require_asyncIterator2 = __commonJS4({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(exports3, module) {
    function _asyncIterator$1(r) {
      var n, t, o, e = 2;
      for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
        if (t && null != (n = r[t]))
          return n.call(r);
        if (o && null != (n = r[o]))
          return new AsyncFromSyncIterator(n.call(r));
        t = "@@asyncIterator", o = "@@iterator";
      }
      throw new TypeError("Object is not async iterable");
    }
    function AsyncFromSyncIterator(r) {
      function AsyncFromSyncIteratorContinuation(r$1) {
        if (Object(r$1) !== r$1)
          return Promise.reject(new TypeError(r$1 + " is not an object."));
        var n = r$1.done;
        return Promise.resolve(r$1.value).then(function(r$2) {
          return {
            value: r$2,
            done: n
          };
        });
      }
      return AsyncFromSyncIterator = function AsyncFromSyncIterator$1(r$1) {
        this.s = r$1, this.n = r$1.next;
      }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function next() {
          return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        "return": function _return(r$1) {
          var n = this.s["return"];
          return void 0 === n ? Promise.resolve({
            value: r$1,
            done: true
          }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        },
        "throw": function _throw(r$1) {
          var n = this.s["return"];
          return void 0 === n ? Promise.reject(r$1) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        }
      }, new AsyncFromSyncIterator(r);
    }
    module.exports = _asyncIterator$1, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } });
  var import_asyncIterator2 = __toESM4(require_asyncIterator2(), 1);
  function createTRPCOptionsResult(value) {
    const path = value.path.join(".");
    return { path };
  }
  function useHookResult(value) {
    const result = createTRPCOptionsResult(value);
    return React$1.useMemo(() => result, [result]);
  }
  async function buildQueryFromAsyncIterable(asyncIterable, queryClient, queryKey) {
    const queryCache = queryClient.getQueryCache();
    const query = queryCache.build(queryClient, { queryKey });
    query.setState({
      data: [],
      status: "success"
    });
    const aggregate = [];
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = (0, import_asyncIterator2.default)(asyncIterable), _step; _iteratorAbruptCompletion = !(_step = await _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const value = _step.value;
        {
          aggregate.push(value);
          query.setState({ data: [...aggregate] });
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null)
          await _iterator.return();
      } finally {
        if (_didIteratorError)
          throw _iteratorError;
      }
    }
    return aggregate;
  }
  var import_objectSpread2$13 = __toESM4(require_objectSpread23(), 1);
  function createUtilityFunctions(opts) {
    const { client, queryClient } = opts;
    const untypedClient = client instanceof TRPCUntypedClient ? client : getUntypedClient(client);
    return {
      infiniteQueryOptions: (path, queryKey, opts$1) => {
        var _queryKey$, _ref;
        const inputIsSkipToken = ((_queryKey$ = queryKey[1]) === null || _queryKey$ === void 0 ? void 0 : _queryKey$.input) === skipToken;
        const queryFn = async (queryFnContext) => {
          var _opts$trpc;
          const actualOpts = (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, { trpc: (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1 === null || opts$1 === void 0 ? void 0 : opts$1.trpc), (opts$1 === null || opts$1 === void 0 || (_opts$trpc = opts$1.trpc) === null || _opts$trpc === void 0 ? void 0 : _opts$trpc.abortOnUnmount) ? { signal: queryFnContext.signal } : { signal: null }) });
          const result = await untypedClient.query(...getClientArgs(queryKey, actualOpts, {
            direction: queryFnContext.direction,
            pageParam: queryFnContext.pageParam
          }));
          return result;
        };
        return Object.assign(infiniteQueryOptions((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, {
          initialData: opts$1 === null || opts$1 === void 0 ? void 0 : opts$1.initialData,
          queryKey,
          queryFn: inputIsSkipToken ? skipToken : queryFn,
          initialPageParam: (_ref = opts$1 === null || opts$1 === void 0 ? void 0 : opts$1.initialCursor) !== null && _ref !== void 0 ? _ref : null
        })), { trpc: createTRPCOptionsResult({ path }) });
      },
      queryOptions: (path, queryKey, opts$1) => {
        var _queryKey$2;
        const inputIsSkipToken = ((_queryKey$2 = queryKey[1]) === null || _queryKey$2 === void 0 ? void 0 : _queryKey$2.input) === skipToken;
        const queryFn = async (queryFnContext) => {
          var _opts$trpc2;
          const actualOpts = (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, { trpc: (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1 === null || opts$1 === void 0 ? void 0 : opts$1.trpc), (opts$1 === null || opts$1 === void 0 || (_opts$trpc2 = opts$1.trpc) === null || _opts$trpc2 === void 0 ? void 0 : _opts$trpc2.abortOnUnmount) ? { signal: queryFnContext.signal } : { signal: null }) });
          const result = await untypedClient.query(...getClientArgs(queryKey, actualOpts));
          if (isAsyncIterable(result))
            return buildQueryFromAsyncIterable(result, queryClient, queryKey);
          return result;
        };
        return Object.assign(queryOptions((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, {
          initialData: opts$1 === null || opts$1 === void 0 ? void 0 : opts$1.initialData,
          queryKey,
          queryFn: inputIsSkipToken ? skipToken : queryFn
        })), { trpc: createTRPCOptionsResult({ path }) });
      },
      fetchQuery: (queryKey, opts$1) => {
        return queryClient.fetchQuery((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, {
          queryKey,
          queryFn: () => untypedClient.query(...getClientArgs(queryKey, opts$1))
        }));
      },
      fetchInfiniteQuery: (queryKey, opts$1) => {
        var _opts$initialCursor;
        return queryClient.fetchInfiniteQuery((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, {
          queryKey,
          queryFn: ({ pageParam, direction }) => {
            return untypedClient.query(...getClientArgs(queryKey, opts$1, {
              pageParam,
              direction
            }));
          },
          initialPageParam: (_opts$initialCursor = opts$1 === null || opts$1 === void 0 ? void 0 : opts$1.initialCursor) !== null && _opts$initialCursor !== void 0 ? _opts$initialCursor : null
        }));
      },
      prefetchQuery: (queryKey, opts$1) => {
        return queryClient.prefetchQuery((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, {
          queryKey,
          queryFn: () => untypedClient.query(...getClientArgs(queryKey, opts$1))
        }));
      },
      prefetchInfiniteQuery: (queryKey, opts$1) => {
        var _opts$initialCursor2;
        return queryClient.prefetchInfiniteQuery((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, {
          queryKey,
          queryFn: ({ pageParam, direction }) => {
            return untypedClient.query(...getClientArgs(queryKey, opts$1, {
              pageParam,
              direction
            }));
          },
          initialPageParam: (_opts$initialCursor2 = opts$1 === null || opts$1 === void 0 ? void 0 : opts$1.initialCursor) !== null && _opts$initialCursor2 !== void 0 ? _opts$initialCursor2 : null
        }));
      },
      ensureQueryData: (queryKey, opts$1) => {
        return queryClient.ensureQueryData((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts$1), {}, {
          queryKey,
          queryFn: () => untypedClient.query(...getClientArgs(queryKey, opts$1))
        }));
      },
      invalidateQueries: (queryKey, filters, options) => {
        return queryClient.invalidateQueries((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, filters), {}, { queryKey }), options);
      },
      resetQueries: (queryKey, filters, options) => {
        return queryClient.resetQueries((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, filters), {}, { queryKey }), options);
      },
      refetchQueries: (queryKey, filters, options) => {
        return queryClient.refetchQueries((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, filters), {}, { queryKey }), options);
      },
      cancelQuery: (queryKey, options) => {
        return queryClient.cancelQueries({ queryKey }, options);
      },
      setQueryData: (queryKey, updater, options) => {
        return queryClient.setQueryData(queryKey, updater, options);
      },
      setQueriesData: (queryKey, filters, updater, options) => {
        return queryClient.setQueriesData((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, filters), {}, { queryKey }), updater, options);
      },
      getQueryData: (queryKey) => {
        return queryClient.getQueryData(queryKey);
      },
      setInfiniteQueryData: (queryKey, updater, options) => {
        return queryClient.setQueryData(queryKey, updater, options);
      },
      getInfiniteQueryData: (queryKey) => {
        return queryClient.getQueryData(queryKey);
      },
      setMutationDefaults: (mutationKey, options) => {
        const path = mutationKey[0];
        const canonicalMutationFn = (input) => {
          return untypedClient.mutation(...getClientArgs([path, { input }], opts));
        };
        return queryClient.setMutationDefaults(mutationKey, typeof options === "function" ? options({ canonicalMutationFn }) : options);
      },
      getMutationDefaults: (mutationKey) => {
        return queryClient.getMutationDefaults(mutationKey);
      },
      isMutating: (filters) => {
        return queryClient.isMutating((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, filters), {}, { exact: true }));
      }
    };
  }
  var import_objectSpread211 = __toESM4(require_objectSpread23());
  var trackResult = (result, onTrackResult) => {
    const trackedResult = new Proxy(result, { get(target, prop) {
      onTrackResult(prop);
      return target[prop];
    } });
    return trackedResult;
  };
  function createRootHooks(config2) {
    var _config$overrides$use, _config$overrides, _config$context;
    const mutationSuccessOverride = (_config$overrides$use = config2 === null || config2 === void 0 || (_config$overrides = config2.overrides) === null || _config$overrides === void 0 || (_config$overrides = _config$overrides.useMutation) === null || _config$overrides === void 0 ? void 0 : _config$overrides.onSuccess) !== null && _config$overrides$use !== void 0 ? _config$overrides$use : (options) => options.originalFn();
    const Context = (_config$context = config2 === null || config2 === void 0 ? void 0 : config2.context) !== null && _config$context !== void 0 ? _config$context : TRPCContext;
    const createClient = createTRPCClient;
    const TRPCProvider = (props) => {
      var _props$ssrState;
      const { abortOnUnmount = false, queryClient, ssrContext } = props;
      const [ssrState, setSSRState] = React8.useState((_props$ssrState = props.ssrState) !== null && _props$ssrState !== void 0 ? _props$ssrState : false);
      const client = props.client instanceof TRPCUntypedClient ? props.client : getUntypedClient(props.client);
      const fns = React8.useMemo(() => createUtilityFunctions({
        client,
        queryClient
      }), [client, queryClient]);
      const contextValue = React8.useMemo(() => (0, import_objectSpread211.default)({
        abortOnUnmount,
        queryClient,
        client,
        ssrContext: ssrContext !== null && ssrContext !== void 0 ? ssrContext : null,
        ssrState
      }, fns), [
        abortOnUnmount,
        client,
        fns,
        queryClient,
        ssrContext,
        ssrState
      ]);
      React8.useEffect(() => {
        setSSRState((state) => state ? "mounted" : false);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Context.Provider, {
        value: contextValue,
        children: props.children
      });
    };
    function useContext5() {
      const context = React8.useContext(Context);
      if (!context)
        throw new Error("Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?");
      return context;
    }
    function useSSRQueryOptionsIfNeeded(queryKey, opts) {
      var _queryClient$getQuery;
      const { queryClient, ssrState } = useContext5();
      return ssrState && ssrState !== "mounted" && ((_queryClient$getQuery = queryClient.getQueryCache().find({ queryKey })) === null || _queryClient$getQuery === void 0 ? void 0 : _queryClient$getQuery.state.status) === "error" ? (0, import_objectSpread211.default)({ retryOnMount: false }, opts) : opts;
    }
    function useQuery$1(path, input, opts) {
      var _opts$trpc, _opts$enabled, _ref, _opts$trpc$abortOnUnm, _opts$trpc2;
      const context = useContext5();
      const { abortOnUnmount, client, ssrState, queryClient, prefetchQuery } = context;
      const queryKey = getQueryKeyInternal(path, input, "query");
      const defaultOpts = queryClient.getQueryDefaults(queryKey);
      const isInputSkipToken = input === skipToken;
      if (typeof globalThis === "undefined" && ssrState === "prepass" && (opts === null || opts === void 0 || (_opts$trpc = opts.trpc) === null || _opts$trpc === void 0 ? void 0 : _opts$trpc.ssr) !== false && ((_opts$enabled = opts === null || opts === void 0 ? void 0 : opts.enabled) !== null && _opts$enabled !== void 0 ? _opts$enabled : defaultOpts === null || defaultOpts === void 0 ? void 0 : defaultOpts.enabled) !== false && !isInputSkipToken && !queryClient.getQueryCache().find({ queryKey }))
        prefetchQuery(queryKey, opts);
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, defaultOpts), opts));
      const shouldAbortOnUnmount = (_ref = (_opts$trpc$abortOnUnm = opts === null || opts === void 0 || (_opts$trpc2 = opts.trpc) === null || _opts$trpc2 === void 0 ? void 0 : _opts$trpc2.abortOnUnmount) !== null && _opts$trpc$abortOnUnm !== void 0 ? _opts$trpc$abortOnUnm : config2 === null || config2 === void 0 ? void 0 : config2.abortOnUnmount) !== null && _ref !== void 0 ? _ref : abortOnUnmount;
      const hook = useQuery((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts), {}, {
        queryKey,
        queryFn: isInputSkipToken ? input : async (queryFunctionContext) => {
          const actualOpts = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts), {}, { trpc: (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts === null || ssrOpts === void 0 ? void 0 : ssrOpts.trpc), shouldAbortOnUnmount ? { signal: queryFunctionContext.signal } : { signal: null }) });
          const result = await client.query(...getClientArgs(queryKey, actualOpts));
          if (isAsyncIterable(result))
            return buildQueryFromAsyncIterable(result, queryClient, queryKey);
          return result;
        }
      }), queryClient);
      hook.trpc = useHookResult({ path });
      return hook;
    }
    function usePrefetchQuery$1(path, input, opts) {
      var _ref2, _opts$trpc$abortOnUnm2, _opts$trpc3;
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "query");
      const isInputSkipToken = input === skipToken;
      const shouldAbortOnUnmount = (_ref2 = (_opts$trpc$abortOnUnm2 = opts === null || opts === void 0 || (_opts$trpc3 = opts.trpc) === null || _opts$trpc3 === void 0 ? void 0 : _opts$trpc3.abortOnUnmount) !== null && _opts$trpc$abortOnUnm2 !== void 0 ? _opts$trpc$abortOnUnm2 : config2 === null || config2 === void 0 ? void 0 : config2.abortOnUnmount) !== null && _ref2 !== void 0 ? _ref2 : context.abortOnUnmount;
      usePrefetchQuery((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts), {}, {
        queryKey,
        queryFn: isInputSkipToken ? input : (queryFunctionContext) => {
          const actualOpts = { trpc: (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts === null || opts === void 0 ? void 0 : opts.trpc), shouldAbortOnUnmount ? { signal: queryFunctionContext.signal } : {}) };
          return context.client.query(...getClientArgs(queryKey, actualOpts));
        }
      }));
    }
    function useSuspenseQuery$1(path, input, opts) {
      var _ref3, _opts$trpc$abortOnUnm3, _opts$trpc4;
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "query");
      const shouldAbortOnUnmount = (_ref3 = (_opts$trpc$abortOnUnm3 = opts === null || opts === void 0 || (_opts$trpc4 = opts.trpc) === null || _opts$trpc4 === void 0 ? void 0 : _opts$trpc4.abortOnUnmount) !== null && _opts$trpc$abortOnUnm3 !== void 0 ? _opts$trpc$abortOnUnm3 : config2 === null || config2 === void 0 ? void 0 : config2.abortOnUnmount) !== null && _ref3 !== void 0 ? _ref3 : context.abortOnUnmount;
      const hook = useSuspenseQuery((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts), {}, {
        queryKey,
        queryFn: (queryFunctionContext) => {
          const actualOpts = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts), {}, { trpc: (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts === null || opts === void 0 ? void 0 : opts.trpc), shouldAbortOnUnmount ? { signal: queryFunctionContext.signal } : { signal: null }) });
          return context.client.query(...getClientArgs(queryKey, actualOpts));
        }
      }), context.queryClient);
      hook.trpc = useHookResult({ path });
      return [hook.data, hook];
    }
    function useMutation$1(path, opts) {
      const { client, queryClient } = useContext5();
      const mutationKey = getMutationKeyInternal(path);
      const defaultOpts = queryClient.defaultMutationOptions(queryClient.getMutationDefaults(mutationKey));
      const hook = useMutation((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts), {}, {
        mutationKey,
        mutationFn: (input) => {
          return client.mutation(...getClientArgs([path, { input }], opts));
        },
        onSuccess(...args) {
          var _ref4, _opts$meta;
          const originalFn = () => {
            var _opts$onSuccess, _opts$onSuccess2, _defaultOpts$onSucces;
            return (_opts$onSuccess = opts === null || opts === void 0 || (_opts$onSuccess2 = opts.onSuccess) === null || _opts$onSuccess2 === void 0 ? void 0 : _opts$onSuccess2.call(opts, ...args)) !== null && _opts$onSuccess !== void 0 ? _opts$onSuccess : defaultOpts === null || defaultOpts === void 0 || (_defaultOpts$onSucces = defaultOpts.onSuccess) === null || _defaultOpts$onSucces === void 0 ? void 0 : _defaultOpts$onSucces.call(defaultOpts, ...args);
          };
          return mutationSuccessOverride({
            originalFn,
            queryClient,
            meta: (_ref4 = (_opts$meta = opts === null || opts === void 0 ? void 0 : opts.meta) !== null && _opts$meta !== void 0 ? _opts$meta : defaultOpts === null || defaultOpts === void 0 ? void 0 : defaultOpts.meta) !== null && _ref4 !== void 0 ? _ref4 : {}
          });
        }
      }), queryClient);
      hook.trpc = useHookResult({ path });
      return hook;
    }
    const initialStateIdle = {
      data: void 0,
      error: null,
      status: "idle"
    };
    const initialStateConnecting = {
      data: void 0,
      error: null,
      status: "connecting"
    };
    function useSubscription(path, input, opts) {
      var _opts$enabled2;
      const enabled = (_opts$enabled2 = opts === null || opts === void 0 ? void 0 : opts.enabled) !== null && _opts$enabled2 !== void 0 ? _opts$enabled2 : input !== skipToken;
      const queryKey = hashKey(getQueryKeyInternal(path, input, "any"));
      const { client } = useContext5();
      const optsRef = React8.useRef(opts);
      React8.useEffect(() => {
        optsRef.current = opts;
      });
      const [trackedProps] = React8.useState(/* @__PURE__ */ new Set([]));
      const addTrackedProp = React8.useCallback((key) => {
        trackedProps.add(key);
      }, [trackedProps]);
      const currentSubscriptionRef = React8.useRef(null);
      const updateState = React8.useCallback((callback) => {
        const prev = resultRef.current;
        const next = resultRef.current = callback(prev);
        let shouldUpdate = false;
        for (const key of trackedProps)
          if (prev[key] !== next[key]) {
            shouldUpdate = true;
            break;
          }
        if (shouldUpdate)
          setState(trackResult(next, addTrackedProp));
      }, [addTrackedProp, trackedProps]);
      const reset = React8.useCallback(() => {
        var _currentSubscriptionR;
        (_currentSubscriptionR = currentSubscriptionRef.current) === null || _currentSubscriptionR === void 0 || _currentSubscriptionR.unsubscribe();
        if (!enabled) {
          updateState(() => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, initialStateIdle), {}, { reset }));
          return;
        }
        updateState(() => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, initialStateConnecting), {}, { reset }));
        const subscription = client.subscription(path.join("."), input !== null && input !== void 0 ? input : void 0, {
          onStarted: () => {
            var _optsRef$current$onSt, _optsRef$current;
            (_optsRef$current$onSt = (_optsRef$current = optsRef.current).onStarted) === null || _optsRef$current$onSt === void 0 || _optsRef$current$onSt.call(_optsRef$current);
            updateState((prev) => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, prev), {}, {
              status: "pending",
              error: null
            }));
          },
          onData: (data) => {
            var _optsRef$current$onDa, _optsRef$current2;
            (_optsRef$current$onDa = (_optsRef$current2 = optsRef.current).onData) === null || _optsRef$current$onDa === void 0 || _optsRef$current$onDa.call(_optsRef$current2, data);
            updateState((prev) => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, prev), {}, {
              status: "pending",
              data,
              error: null
            }));
          },
          onError: (error) => {
            var _optsRef$current$onEr, _optsRef$current3;
            (_optsRef$current$onEr = (_optsRef$current3 = optsRef.current).onError) === null || _optsRef$current$onEr === void 0 || _optsRef$current$onEr.call(_optsRef$current3, error);
            updateState((prev) => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, prev), {}, {
              status: "error",
              error
            }));
          },
          onConnectionStateChange: (result) => {
            updateState((prev) => {
              switch (result.state) {
                case "idle":
                  return (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, prev), {}, {
                    status: result.state,
                    error: null,
                    data: void 0
                  });
                case "connecting":
                  return (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, prev), {}, {
                    error: result.error,
                    status: result.state
                  });
                case "pending":
                  return prev;
              }
            });
          },
          onComplete: () => {
            var _optsRef$current$onCo, _optsRef$current4;
            (_optsRef$current$onCo = (_optsRef$current4 = optsRef.current).onComplete) === null || _optsRef$current$onCo === void 0 || _optsRef$current$onCo.call(_optsRef$current4);
            updateState((prev) => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, prev), {}, {
              status: "idle",
              error: null,
              data: void 0
            }));
          }
        });
        currentSubscriptionRef.current = subscription;
      }, [
        client,
        queryKey,
        enabled,
        updateState
      ]);
      React8.useEffect(() => {
        reset();
        return () => {
          var _currentSubscriptionR2;
          (_currentSubscriptionR2 = currentSubscriptionRef.current) === null || _currentSubscriptionR2 === void 0 || _currentSubscriptionR2.unsubscribe();
        };
      }, [reset]);
      const resultRef = React8.useRef(enabled ? (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, initialStateConnecting), {}, { reset }) : (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, initialStateIdle), {}, { reset }));
      const [state, setState] = React8.useState(trackResult(resultRef.current, addTrackedProp));
      return state;
    }
    function useInfiniteQuery$1(path, input, opts) {
      var _opts$trpc5, _opts$enabled3, _opts$trpc$abortOnUnm4, _opts$trpc6, _opts$initialCursor;
      const { client, ssrState, prefetchInfiniteQuery, queryClient, abortOnUnmount } = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "infinite");
      const defaultOpts = queryClient.getQueryDefaults(queryKey);
      const isInputSkipToken = input === skipToken;
      if (typeof globalThis === "undefined" && ssrState === "prepass" && (opts === null || opts === void 0 || (_opts$trpc5 = opts.trpc) === null || _opts$trpc5 === void 0 ? void 0 : _opts$trpc5.ssr) !== false && ((_opts$enabled3 = opts === null || opts === void 0 ? void 0 : opts.enabled) !== null && _opts$enabled3 !== void 0 ? _opts$enabled3 : defaultOpts === null || defaultOpts === void 0 ? void 0 : defaultOpts.enabled) !== false && !isInputSkipToken && !queryClient.getQueryCache().find({ queryKey }))
        prefetchInfiniteQuery(queryKey, (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, defaultOpts), opts));
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, defaultOpts), opts));
      const shouldAbortOnUnmount = (_opts$trpc$abortOnUnm4 = opts === null || opts === void 0 || (_opts$trpc6 = opts.trpc) === null || _opts$trpc6 === void 0 ? void 0 : _opts$trpc6.abortOnUnmount) !== null && _opts$trpc$abortOnUnm4 !== void 0 ? _opts$trpc$abortOnUnm4 : abortOnUnmount;
      const hook = useInfiniteQuery((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts), {}, {
        initialPageParam: (_opts$initialCursor = opts.initialCursor) !== null && _opts$initialCursor !== void 0 ? _opts$initialCursor : null,
        persister: opts.persister,
        queryKey,
        queryFn: isInputSkipToken ? input : (queryFunctionContext) => {
          var _queryFunctionContext;
          const actualOpts = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts), {}, { trpc: (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts === null || ssrOpts === void 0 ? void 0 : ssrOpts.trpc), shouldAbortOnUnmount ? { signal: queryFunctionContext.signal } : { signal: null }) });
          return client.query(...getClientArgs(queryKey, actualOpts, {
            pageParam: (_queryFunctionContext = queryFunctionContext.pageParam) !== null && _queryFunctionContext !== void 0 ? _queryFunctionContext : opts.initialCursor,
            direction: queryFunctionContext.direction
          }));
        }
      }), queryClient);
      hook.trpc = useHookResult({ path });
      return hook;
    }
    function usePrefetchInfiniteQuery$1(path, input, opts) {
      var _opts$trpc$abortOnUnm5, _opts$trpc7, _opts$initialCursor2;
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "infinite");
      const defaultOpts = context.queryClient.getQueryDefaults(queryKey);
      const isInputSkipToken = input === skipToken;
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, defaultOpts), opts));
      const shouldAbortOnUnmount = (_opts$trpc$abortOnUnm5 = opts === null || opts === void 0 || (_opts$trpc7 = opts.trpc) === null || _opts$trpc7 === void 0 ? void 0 : _opts$trpc7.abortOnUnmount) !== null && _opts$trpc$abortOnUnm5 !== void 0 ? _opts$trpc$abortOnUnm5 : context.abortOnUnmount;
      usePrefetchInfiniteQuery((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts), {}, {
        initialPageParam: (_opts$initialCursor2 = opts.initialCursor) !== null && _opts$initialCursor2 !== void 0 ? _opts$initialCursor2 : null,
        queryKey,
        queryFn: isInputSkipToken ? input : (queryFunctionContext) => {
          var _queryFunctionContext2;
          const actualOpts = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts), {}, { trpc: (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts === null || ssrOpts === void 0 ? void 0 : ssrOpts.trpc), shouldAbortOnUnmount ? { signal: queryFunctionContext.signal } : {}) });
          return context.client.query(...getClientArgs(queryKey, actualOpts, {
            pageParam: (_queryFunctionContext2 = queryFunctionContext.pageParam) !== null && _queryFunctionContext2 !== void 0 ? _queryFunctionContext2 : opts.initialCursor,
            direction: queryFunctionContext.direction
          }));
        }
      }));
    }
    function useSuspenseInfiniteQuery$1(path, input, opts) {
      var _opts$trpc$abortOnUnm6, _opts$trpc8, _opts$initialCursor3;
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "infinite");
      const defaultOpts = context.queryClient.getQueryDefaults(queryKey);
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, defaultOpts), opts));
      const shouldAbortOnUnmount = (_opts$trpc$abortOnUnm6 = opts === null || opts === void 0 || (_opts$trpc8 = opts.trpc) === null || _opts$trpc8 === void 0 ? void 0 : _opts$trpc8.abortOnUnmount) !== null && _opts$trpc$abortOnUnm6 !== void 0 ? _opts$trpc$abortOnUnm6 : context.abortOnUnmount;
      const hook = useSuspenseInfiniteQuery((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, opts), {}, {
        initialPageParam: (_opts$initialCursor3 = opts.initialCursor) !== null && _opts$initialCursor3 !== void 0 ? _opts$initialCursor3 : null,
        queryKey,
        queryFn: (queryFunctionContext) => {
          var _queryFunctionContext3;
          const actualOpts = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts), {}, { trpc: (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, ssrOpts === null || ssrOpts === void 0 ? void 0 : ssrOpts.trpc), shouldAbortOnUnmount ? { signal: queryFunctionContext.signal } : {}) });
          return context.client.query(...getClientArgs(queryKey, actualOpts, {
            pageParam: (_queryFunctionContext3 = queryFunctionContext.pageParam) !== null && _queryFunctionContext3 !== void 0 ? _queryFunctionContext3 : opts.initialCursor,
            direction: queryFunctionContext.direction
          }));
        }
      }), context.queryClient);
      hook.trpc = useHookResult({ path });
      return [hook.data, hook];
    }
    const useQueries$1 = (queriesCallback, options) => {
      const { ssrState, queryClient, prefetchQuery, client } = useContext5();
      const proxy = createUseQueries(client);
      const queries = queriesCallback(proxy);
      if (typeof globalThis === "undefined" && ssrState === "prepass")
        for (const query of queries) {
          var _queryOption$trpc;
          const queryOption = query;
          if (((_queryOption$trpc = queryOption.trpc) === null || _queryOption$trpc === void 0 ? void 0 : _queryOption$trpc.ssr) !== false && !queryClient.getQueryCache().find({ queryKey: queryOption.queryKey }))
            prefetchQuery(queryOption.queryKey, queryOption);
        }
      return useQueries({
        queries: queries.map((query) => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, query), {}, { queryKey: query.queryKey })),
        combine: options === null || options === void 0 ? void 0 : options.combine
      }, queryClient);
    };
    const useSuspenseQueries$1 = (queriesCallback) => {
      const { queryClient, client } = useContext5();
      const proxy = createUseQueries(client);
      const queries = queriesCallback(proxy);
      const hook = useSuspenseQueries({ queries: queries.map((query) => (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, query), {}, {
        queryFn: query.queryFn,
        queryKey: query.queryKey
      })) }, queryClient);
      return [hook.map((h) => h.data), hook];
    };
    return {
      Provider: TRPCProvider,
      createClient,
      useContext: useContext5,
      useUtils: useContext5,
      useQuery: useQuery$1,
      usePrefetchQuery: usePrefetchQuery$1,
      useSuspenseQuery: useSuspenseQuery$1,
      useQueries: useQueries$1,
      useSuspenseQueries: useSuspenseQueries$1,
      useMutation: useMutation$1,
      useSubscription,
      useInfiniteQuery: useInfiniteQuery$1,
      usePrefetchInfiniteQuery: usePrefetchInfiniteQuery$1,
      useSuspenseInfiniteQuery: useSuspenseInfiniteQuery$1
    };
  }

  // node_modules/@trpc/react-query/dist/index.mjs
  var React9 = __toESM(require_react(), 1);
  function createHooksInternal(trpc2) {
    const proxy = createReactDecoration(trpc2);
    return createFlatProxy((key) => {
      if (key === "useContext" || key === "useUtils")
        return () => {
          const context = trpc2.useUtils();
          return React9.useMemo(() => {
            return createReactQueryUtils(context);
          }, [context]);
        };
      if (trpc2.hasOwnProperty(key))
        return trpc2[key];
      return proxy[key];
    });
  }
  function createTRPCReact(opts) {
    const hooks = createRootHooks(opts);
    const proxy = createHooksInternal(hooks);
    return proxy;
  }

  // src/utils/trpc/link/index.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/unstable-internals.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // src/utils/trpc/link/index.ts
  function eventsLink({
    emitter: emitter2,
    ...opts
  }) {
    const transformer = getTransformer(opts.transformer);
    return () => {
      return ({ op }) => {
        return observable((observer) => {
          const listeners2 = [];
          const { id, type, path } = op;
          if (type === "subscription") {
            throw new Error("Subscriptions are unsupported by `eventsLink`.");
          }
          try {
            const input = transformer.input.serialize(op.input);
            const onMessage = (response) => {
              if (!response)
                return;
              if (!("id" in response) || response.id === null || response.id === void 0)
                return;
              if (id !== response.id)
                return;
              const transformedResult = transformResult(response, transformer.output);
              if (!transformedResult.ok) {
                observer.error(TRPCClientError.from(transformedResult.error));
                return;
              }
              observer.next({
                result: transformedResult.result
              });
              observer.complete();
            };
            emitter2.on(TRPC_RESPONSE, onMessage);
            listeners2.push(() => emitter2.off(TRPC_RESPONSE, onMessage));
            emitter2.emit(TRPC_REQUEST, {
              id,
              jsonrpc: void 0,
              method: type,
              params: { path, input }
            });
          } catch (cause) {
            observer.error(
              new TRPCClientError(cause instanceof Error ? cause.message : "Unknown error")
            );
          }
          return () => {
            listeners2.forEach((unsub) => unsub());
          };
        });
      };
    };
  }

  // src/utils/trpc/index.ts
  var trpc = createTRPCReact();

  // src/dapp-interface/slushWallet.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/mitt/dist/mitt.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function mitt_default(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
      var i = n.get(t);
      i ? i.push(e) : n.set(t, [e]);
    }, off: function(t, e) {
      var i = n.get(t);
      i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
    }, emit: function(t, e) {
      var i = n.get(t);
      i && i.slice().map(function(n2) {
        n2(e);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(t, e);
      });
    } };
  }

  // src/dapp-interface/utils.ts
  init_dirname();
  init_buffer2();
  init_process2();
  var suiNetworkToChain = {
    devnet: "sui:devnet",
    testnet: "sui:testnet",
    localnet: "sui:localnet",
    mainnet: "sui:mainnet"
  };

  // src/dapp-interface/slushWallet.ts
  var INVALID_CHAIN = `A valid Sui chain identifier was not provided in the request. Please report this issue to the dApp developer.

Examples of valid Sui chain identifiers are 'sui:testnet' and 'sui:mainnet'. Consider using the '@mysten/dapp-kit' package, which provides this value automatically.`;
  var SlushWallet = class {
    #client;
    #events;
    #accounts;
    constructor(client) {
      this.#client = client;
      this.#events = mitt_default();
      this.#accounts = [];
      this.#client.onWalletStateChanged((updatedAccounts) => {
        this.#accounts = updatedAccounts.map(this.#mapAccountInfoToWalletAccount);
        this.#events.emit("change", { accounts: this.#accounts });
      });
    }
    get version() {
      return "1.0.0";
    }
    get id() {
      return "com.mystenlabs.suiwallet";
    }
    get name() {
      return "Slush";
    }
    get icon() {
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzBDMEExRiIvPgo8cGF0aCBkPSJNMTMuMTM1OCAzMi4xMDg1QzE0LjE3MDEgMzUuOTY4MyAxOC4wMzMxIDM5LjQ2MjQgMjYuMDI1NSAzNy4zMjA4QzMzLjY1MTUgMzUuMjc3NCAzOC40MzA5IDI5LjAwNCAzNy4xOTE2IDI0LjM3ODlDMzYuNzYzNiAyMi43ODE3IDM1LjQ3NDYgMjEuNzAwNiAzMy40ODcyIDIxLjg3NjVMMTUuNzE2NSAyMy4zNTcyQzE0LjU5NzMgMjMuNDQzIDE0LjA4NDIgMjMuMjU5NiAxMy43ODgxIDIyLjU1NDNDMTMuNTAxIDIxLjg4MjMgMTMuNjY0NiAyMS4xNjA5IDE1LjAxNjMgMjAuNDc3N0wyOC41NDAxIDEzLjUzNzRDMjkuNTc2NyAxMy4wMSAzMC4yNjcxIDEyLjc4OTMgMzAuODk4IDEzLjAxMjZDMzEuMjkzNCAxMy4xNTYzIDMxLjU1MzggMTMuNzI4NCAzMS4zMTQ3IDE0LjQzNDRMMzAuNDM3OCAxNy4wMjMyQzI5LjM2MTcgMjAuMjAwMiAzMS42NjUzIDIwLjkzODIgMzIuOTY0MSAyMC41OTAyQzM0LjkyODkgMjAuMDYzNyAzNS4zOTExIDE4LjE5MjMgMzQuNzU4MSAxNS44Mjk5QzMzLjE1MzMgOS44NDA1NCAyNi43OTkgOC45MDQxMSAyMS4wMzc4IDEwLjQ0NzhDMTUuMTc2NyAxMi4wMTgzIDEwLjA5NiAxNi43Njc2IDExLjY0NzQgMjIuNTU3M0MxMi4wMTI5IDIzLjkyMTYgMTMuMjY4NyAyNS4wMTE2IDE0LjcyMzIgMjQuOTc4NUwxNi45NDM4IDI0Ljk3MzFDMTcuNDAwNCAyNC45NjI1IDE3LjIzNiAyNSAxOC4xMTcgMjQuOTI3MUMxOC45OTggMjQuODU0MSAyMS4zNTA5IDI0LjU2NDYgMjEuMzUwOSAyNC41NjQ2TDMyLjg5NjIgMjMuMjU4TDMzLjE5MzcgMjMuMjE0OEMzMy44Njg5IDIzLjA5OTcgMzQuMzc5MiAyMy4yNzUgMzQuODEwNiAyNC4wMTgzQzM1LjQ1NjMgMjUuMTMwNCAzNC40NzEyIDI1Ljk2OTEgMzMuMjkyIDI2Ljk3MzFDMzMuMjYwNSAyNyAzMy4yMjg4IDI3LjAyNyAzMy4xOTcgMjcuMDU0MUwyMy4wNDgyIDM1LjgwMDVDMjEuMzA4NyAzNy4zMDA4IDIwLjA4NjcgMzYuNzM2NyAxOS42NTg4IDM1LjEzOTVMMTguMTQzMSAyOS40ODI5QzE3Ljc2ODcgMjguMDg1NCAxNi40MDQxIDI2Ljk4ODkgMTQuODA1NiAyNy40MTcyQzEyLjgwNzUgMjcuOTUyNiAxMi42NDU1IDMwLjI3ODQgMTMuMTM1OCAzMi4xMDg1WiIgZmlsbD0iI0ZCRkFGRiIvPgo8L3N2Zz4K";
    }
    get chains() {
      return SUI_CHAINS;
    }
    get features() {
      return {
        "standard:connect": {
          version: "1.0.0",
          connect: this.#connect
        },
        "standard:disconnect": {
          version: "1.0.0",
          disconnect: this.#disconnect
        },
        "standard:events": {
          version: "1.0.0",
          on: this.#on
        },
        "sui:signAndExecuteTransactionBlock": {
          version: "1.0.0",
          signAndExecuteTransactionBlock: this.#signAndExecuteTransactionBlock
        },
        "sui:signTransactionBlock": {
          version: "1.0.0",
          signTransactionBlock: this.#signTransactionBlock
        },
        "sui:signPersonalMessage": {
          version: "1.1.0",
          signPersonalMessage: this.#signPersonalMessage
        },
        "sui:signAndExecuteTransaction": {
          version: "2.0.0",
          signAndExecuteTransaction: this.#signAndExecuteTransaction
        },
        "sui:signTransaction": {
          version: "2.0.0",
          signTransaction: this.#signTransaction
        }
      };
    }
    get accounts() {
      return this.#accounts;
    }
    #connect = async (input) => {
      const connectedAccounts = await this.#client.connect({ silent: input?.silent ?? false });
      this.#accounts = connectedAccounts.map(this.#mapAccountInfoToWalletAccount);
      if (this.#accounts.length > 0) {
        this.#events.emit("change", { accounts: this.accounts });
      }
      return { accounts: this.#accounts };
    };
    #disconnect = async () => {
      this.#accounts = [];
      this.#events.emit("change", { accounts: this.accounts });
      await this.#client.disconnect();
    };
    #on = (event, listener) => {
      this.#events.on(event, listener);
      return () => this.#events.off(event, listener);
    };
    #signAndExecuteTransactionBlock = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      return await this.#client.signAndExecuteTransactionBlock({
        serializedBytes: input.transactionBlock.serialize(),
        accountAddress: input.account.address,
        requestType: input.requestType,
        options: input.options,
        chain: input.chain
      });
    };
    #signTransactionBlock = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      const result = await this.#client.signTransactionBlock({
        serializedBytes: input.transactionBlock.serialize(),
        accountAddress: input.account.address,
        chain: input.chain
      });
      return { signature: result.signature, transactionBlockBytes: result.bytes };
    };
    #signAndExecuteTransaction = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      const { digest, rawEffects, rawTransaction } = await this.#client.signAndExecuteTransactionBlock({
        serializedBytes: await input.transaction.toJSON(),
        accountAddress: input.account.address,
        chain: input.chain,
        options: {
          showRawEffects: true,
          showRawInput: true
        }
      });
      const [
        {
          txSignatures: [signature],
          intentMessage: { value: bcsTransaction }
        }
      ] = suiBcs.SenderSignedData.parse(fromB64(rawTransaction));
      const bytes = suiBcs.TransactionData.serialize(bcsTransaction).toBase64();
      return {
        digest,
        effects: toB64(new Uint8Array(rawEffects)),
        signature,
        bytes
      };
    };
    #signTransaction = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      const result = await this.#client.signTransactionBlock({
        serializedBytes: await input.transaction.toJSON(),
        accountAddress: input.account.address,
        chain: input.chain
      });
      return { signature: result.signature, bytes: result.bytes };
    };
    #signPersonalMessage = async (input) => {
      const chain2 = input.chain ?? suiNetworkToChain["mainnet"];
      if (!isSuiChain(chain2))
        throw new Error(INVALID_CHAIN);
      return await this.#client.signPersonalMessage({
        serializedBytes: toB64(input.message),
        accountAddress: input.account.address,
        chain: chain2
      });
    };
    #mapAccountInfoToWalletAccount({
      address,
      nickname,
      publicKey,
      chains
    }) {
      return new ReadonlyWalletAccount({
        address,
        label: nickname || void 0,
        publicKey: publicKey ? fromB64(publicKey) : new Uint8Array(),
        chains,
        features: [
          "sui:signTransaction",
          "sui:signAndExecuteTransaction",
          "sui:signTransactionBlock",
          "sui:signAndExecuteTransactionBlock",
          "sui:signPersonalMessage"
        ]
      });
    }
  };

  // src/dapp-interface/extension.ts
  var emitter = createWindowEmitter();
  var trpcClient = createTRPCClient({
    links: [
      loggerLink({
        enabled: (options) => {
          const isErrorResponse = options.direction === "down" && options.result instanceof Error;
          return isErrorResponse || false;
        }
      }),
      eventsLink({
        emitter
      })
    ]
  });
  registerWallet(
    new SlushWallet({
      disconnect: trpcClient.dApp.disconnect.mutate,
      connect: trpcClient.dApp.connect.query,
      signAndExecuteTransactionBlock: trpcClient.dApp.signAndExecuteTransactionBlock.mutate,
      signTransactionBlock: trpcClient.dApp.signTransactionBlock.mutate,
      signPersonalMessage: trpcClient.dApp.signPersonalMessage.mutate,
      onWalletStateChanged: (onData) => {
        emitter.on(WALLET_STATE_CHANGED, async () => {
          const connectedAccounts = await trpcClient.dApp.connect.query({ silent: true });
          return onData(connectedAccounts);
        });
      }
    })
  );
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-DtuTasat.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@trpc/react-query/dist/shared-JtnEvJvB.mjs:
  (* istanbul ignore next -- @preserve *)
*/
