"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.str2Bits = exports.str2BitsBE = exports.int2Bits = exports.AESCBCDecrypt = exports.AESCBCEncrypt = exports.sleep = exports.pad = exports.bits2U8Array = exports.xor = exports.splitArray = exports.u8Array2Int = exports.parsePem = exports.int2U8Array = exports.concatArray = exports.assert = exports.AESCTRencrypt = exports.cryptoSha256 = exports.getRandom = exports.u32ToU8 = exports.u8ToU32 = exports.u8Array2BitsBE = exports.u8Array2Bits = exports.str2U8Array = exports.u8Array2Str = void 0;
exports.bytes2Hex = bytes2Hex;
exports.hex2Bytes = hex2Bytes;
exports.pickUpValues = pickUpValues;
exports.bytes2uintBE = bytes2uintBE;
exports.loadRes = loadRes;
exports.b64decode = b64decode;
exports.verifySignature = verifySignature;
exports.uint2bytesBE = uint2bytesBE;
exports.loadLocalFile = loadLocalFile;
exports.isFloatNumber = isFloatNumber;
exports.isNumber = isNumber;
exports.buffer2bits = buffer2bits;
exports.xorBytesToHex = xorBytesToHex;
exports.recoverStr = recoverStr;
exports.formatSchema = formatSchema;
exports.getRandomBytes = getRandomBytes;
exports.uint8ArrayToBigInt = uint8ArrayToBigInt;
exports.encryptData = encryptData;
const aes_js_1 = __importDefault(require("aes-js"));
const bigint_crypto_utils_1 = require("bigint-crypto-utils");
const buffer_1 = require("buffer");
const u8Array2Str = (arr) => {
    let s = "";
    for (const a of arr) {
        s += String.fromCharCode(a);
    }
    return s;
};
exports.u8Array2Str = u8Array2Str;
const str2U8Array = (s) => {
    const arr = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) {
        arr[i] = s.charCodeAt(i);
    }
    return arr;
};
exports.str2U8Array = str2U8Array;
const u8Array2Bits = (n) => {
    const bits = Array(n.length * 8); // little endian
    let index = 0;
    for (let i = n.length - 1; i >= 0; i--) {
        for (let j = 0; j < 8; j++) {
            bits[index] = (n[i] >> j) & 0x01;
            index++;
        }
    }
    return bits;
};
exports.u8Array2Bits = u8Array2Bits;
const u8Array2BitsBE = (n) => {
    return (0, exports.u8Array2Bits)(n).reverse();
};
exports.u8Array2BitsBE = u8Array2BitsBE;
const u8ToU32 = (data) => {
    const state = new Uint32Array(8);
    for (let i = 0; i < 8; i++) {
        const hex = bytes2Hex(data).slice(i * 8, (i + 1) * 8);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        state[i] = `0x${hex}`;
    }
    return state;
};
exports.u8ToU32 = u8ToU32;
const u32ToU8 = (data) => {
    let stateU8Array = new Uint8Array();
    for (let i = 0; i < data.length; i++) {
        const v = BigInt(data[i]);
        const u32 = parseInt(BigInt.asUintN(32, v).toString());
        stateU8Array = (0, exports.concatArray)(stateU8Array, (0, exports.int2U8Array)(u32, 4));
    }
    return stateU8Array;
};
exports.u32ToU8 = u32ToU8;
function bytes2Hex(bytes) {
    return Array.from(bytes, (byte) => {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
    }).join("");
}
function hex2Bytes(hex) {
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substring(c, c + 2), 16));
    return new Uint8Array(bytes);
}
const getRandom = (n) => {
    const rand = (0, bigint_crypto_utils_1.randBytesSync)(n);
    return new Uint8Array(rand);
};
exports.getRandom = getRandom;
const cryptoSha256 = async (ba) => {
    const result = await crypto.subtle.digest("SHA-256", ba.buffer);
    return new Uint8Array(result);
};
exports.cryptoSha256 = cryptoSha256;
const AESCTRencrypt = (key, data) => {
    const aesCtr = new aes_js_1.default.ModeOfOperation.ctr(key, new aes_js_1.default.Counter(0));
    return aesCtr.encrypt(data);
};
exports.AESCTRencrypt = AESCTRencrypt;
const assert = (condition, message) => {
    if (!condition) {
        console.trace();
        throw message || "Failed";
    }
};
exports.assert = assert;
const concatArray = (...args) => {
    let arr = [];
    for (const a of args) {
        arr = arr.concat(Array.from(a));
    }
    return new Uint8Array(arr);
};
exports.concatArray = concatArray;
const int2U8Array = (i, size) => {
    let str = i.toString(16);
    if (str.length % 2 === 1) {
        str = `0${str}`;
    }
    const arr = [];
    for (let i = 0; i < str.length / 2; i++) {
        arr.push(parseInt(str.slice(2 * i, 2 * i + 2), 16));
    }
    const len = arr.length;
    if (size && len < size) {
        return (0, exports.concatArray)(new Uint8Array(size - len).fill(0), new Uint8Array(arr));
    }
    else if (size && len > size) {
        return new Uint8Array(arr.splice(0, size));
    }
    return new Uint8Array(arr);
};
exports.int2U8Array = int2U8Array;
const parsePem = (pem) => {
    const code_arr = pem
        .split("\n")
        .map((item) => {
        if (item.trim().length > 0 &&
            item.indexOf("-BEGIN CERTIFICATE-") < 0 &&
            item.indexOf("-BEGIN PUBLIC KEY-") < 0 &&
            item.indexOf("-END PUBLIC KEY-") < 0 &&
            item.indexOf("-END CERTIFICATE-") < 0) {
            return item.trim();
        }
        return undefined;
    })
        .filter((v) => v !== undefined)
        .join("");
    const dec = atob(code_arr)
        .split("")
        .map((c) => c.charCodeAt(0));
    return new Uint8Array(dec).slice(26);
};
exports.parsePem = parsePem;
function pickUpValues(data) {
    const values = [];
    let len = 0;
    let start = 0;
    let end = 0;
    while (end < data.length) {
        len = (0, exports.u8Array2Int)(data.subarray(end, 2 + end));
        start = end + 2;
        end = len + start;
        values.push(data.subarray(start, end));
    }
    return values;
}
const u8Array2Int = (n) => {
    if (n.length < 7)
        return bytes2uintBE(n);
    const str = Array.from(n)
        .map((b) => {
        let strNum = b.toString(16);
        if (strNum.length == 1)
            strNum = `0${strNum}`;
        return strNum;
    })
        .join("");
    return BigInt(`0x${str}`);
};
exports.u8Array2Int = u8Array2Int;
function bytes2uintBE(bytes) {
    let byteLength = bytes.length;
    let val = bytes[--byteLength];
    let mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
        val += bytes[--byteLength] * mul;
    }
    return val;
}
const splitArray = (ba, size) => {
    (0, exports.assert)(ba.length % size === 0);
    const result = [];
    const arr = Array.from(ba);
    for (let i = 0, len = arr.length / size; i < len; i++) {
        result.push(new Uint8Array(arr.splice(0, size)));
    }
    return result;
};
exports.splitArray = splitArray;
const xor = (a, b) => a.map((v, i) => {
    return v ^ b[i];
});
exports.xor = xor;
const bits2U8Array = (bits) => {
    const ba = new Uint8Array(bits.length / 8);
    for (let i = 0; i < ba.length; i++) {
        let sum = 0;
        for (let j = 0; j < 8; j++) {
            sum += bits[i * 8 + j] * 2 ** j;
        }
        ba[ba.length - 1 - i] = sum;
    }
    return ba;
};
exports.bits2U8Array = bits2U8Array;
const pad = (s) => (s.length % 2 === 0 ? s : `0${s}`);
exports.pad = pad;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.sleep = sleep;
async function loadRes(filePath) {
    try {
        const pem = await fetch(filePath);
        return pem.text();
    }
    catch (error) {
        console.log("load pem file failed", error);
        throw "load pem file failed";
    }
}
function b64decode(str) {
    const dec = atob(str)
        .split("")
        .map(function (c) {
        return c.charCodeAt(0);
    });
    return new Uint8Array(dec);
}
/**
 * verify server public key signature
 *
 * @param pubKey
 * @param signature
 * @param content
 * @returns
 */
async function verifySignature(pubKey, signature, content) {
    const crypto_key = await crypto.subtle.importKey("spki", pubKey, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, true, ["verify"]);
    const result = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", crypto_key, signature, content);
    return result;
}
const AESCBCEncrypt = (key, iv, data) => {
    const aesCBC = new aes_js_1.default.ModeOfOperation.cbc(key, iv);
    return aesCBC.encrypt(data);
};
exports.AESCBCEncrypt = AESCBCEncrypt;
const AESCBCDecrypt = (key, iv, ciphertext) => {
    const aesCBC = new aes_js_1.default.ModeOfOperation.cbc(key, iv);
    return aesCBC.decrypt(ciphertext);
};
exports.AESCBCDecrypt = AESCBCDecrypt;
function uint2bytesBE(value, byteLength) {
    value = +value;
    byteLength = byteLength >>> 0;
    const bytes = new Uint8Array(byteLength);
    let i = byteLength - 1;
    let mul = 1;
    bytes[i] = value & 0xff;
    while (--i >= 0 && (mul *= 0x100)) {
        bytes[i] = (value / mul) & 0xff;
    }
    return bytes;
}
const int2Bits = (i) => i
    .toString(2)
    .split("")
    .map((i) => +i);
exports.int2Bits = int2Bits;
const str2BitsBE = (s) => {
    let result = [];
    const len = s.length;
    for (let i = 0; i < len; i += 1000) {
        const str = s.substring(i, i + 1000);
        const b = buffer_1.Buffer.from(str);
        const sliceArr = Array.from(b.entries()).map(([, byte]) => byte
            .toString(2)
            .padStart(8, "0")
            .split("")
            .map((bit) => (bit == "1" ? 1 : 0)));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        result = result.concat([].concat(...sliceArr));
    }
    return result;
};
exports.str2BitsBE = str2BitsBE;
const str2Bits = (s) => {
    const result = (0, exports.str2BitsBE)(s);
    return result.reverse();
};
exports.str2Bits = str2Bits;
async function loadLocalFile(path) {
    if (!path)
        return "";
    const file = await fetch(path);
    return file.text();
}
function isFloatNumber(value) {
    try {
        const reg = /^(-?\d+)(\.\d+)$/;
        return reg.test(value);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function isNumber(value) {
    try {
        const reg = /^-?\d+(\.\d+)?$/;
        return reg.test(value);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function buffer2bits(buff) {
    const res = [];
    for (let i = 0; i < buff.length; i++) {
        for (let j = 0; j < 8; j++) {
            if ((buff[i] >> (7 - j)) & 1) {
                res.push(1);
            }
            else {
                res.push(0);
            }
        }
    }
    return res;
}
function xorBytesToHex(bytesArray) {
    const intBytes = new Uint8Array(bytesArray[0].length).fill(48);
    const xor_res = bytesArray.reduce((a1, a2) => (0, exports.xor)(a1, a2), intBytes);
    return bytes2Hex(xor_res);
}
function recoverStr(str) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    let s = "";
    for (const a of Array.from(bytes)) {
        s += String.fromCharCode(a);
    }
    return s;
}
function formatSchema(schema) {
    schema.APIs.forEach((api) => {
        if (api.assert) {
            api.assert.forEach((assert) => {
                if (typeof assert.value == "string") {
                    assert.value = recoverStr(assert.value);
                }
            });
        }
    });
    return schema;
}
function getRandomBytes(byteLength) {
    const array = new Uint8Array(byteLength);
    return crypto.getRandomValues(array);
}
function uint8ArrayToBigInt(uint8Array) {
    let result = BigInt(0);
    for (let i = 0; i < uint8Array.length; i++) {
        result = (result << BigInt(8)) + BigInt(uint8Array[i]);
    }
    return result;
}
async function encryptData(enckey, data) {
    try {
        const IV = getRandomBytes(12);
        const enc = await crypto.subtle.encrypt({ name: "AES-GCM", iv: IV.buffer }, enckey, data.buffer);
        return new Uint8Array([...Array.from(IV), ...Array.from(new Uint8Array(enc))]);
    }
    catch (err) {
        console.error("encrypt error", err);
        throw "Encrypting data Error";
    }
}
