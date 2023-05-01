/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
  /** The double value. */
  value: number;
}

/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
  /** The float value. */
  value: number;
}

/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
  /** The int64 value. */
  value: string;
}

/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
  /** The uint64 value. */
  value: string;
}

/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
  /** The int32 value. */
  value: number;
}

/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
  /** The uint32 value. */
  value: number;
}

/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
  /** The bool value. */
  value: boolean;
}

/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
  /** The string value. */
  value: string;
}

/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
  /** The bytes value. */
  value: Uint8Array;
}

function createBaseDoubleValue(): DoubleValue {
  return { value: 0 };
}

export namespace DoubleValue {
  export function encode(message: DoubleValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): DoubleValue {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  }

  export function toJSON(message: DoubleValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<DoubleValue>, I>>(base?: I): DoubleValue {
    return DoubleValue.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<DoubleValue>, I>>(object: I): DoubleValue {
    const message = createBaseDoubleValue();
    message.value = object.value ?? 0;
    return message;
  }
}

function createBaseFloatValue(): FloatValue {
  return { value: 0 };
}

export namespace FloatValue {
  export function encode(message: FloatValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): FloatValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.value = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): FloatValue {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  }

  export function toJSON(message: FloatValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<FloatValue>, I>>(base?: I): FloatValue {
    return FloatValue.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<FloatValue>, I>>(object: I): FloatValue {
    const message = createBaseFloatValue();
    message.value = object.value ?? 0;
    return message;
  }
}

function createBaseInt64Value(): Int64Value {
  return { value: "0" };
}

export namespace Int64Value {
  export function encode(message: Int64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "0") {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Int64Value {
    return { value: isSet(object.value) ? String(object.value) : "0" };
  }

  export function toJSON(message: Int64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Int64Value>, I>>(base?: I): Int64Value {
    return Int64Value.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Int64Value>, I>>(object: I): Int64Value {
    const message = createBaseInt64Value();
    message.value = object.value ?? "0";
    return message;
  }
}

function createBaseUInt64Value(): UInt64Value {
  return { value: "0" };
}

export namespace UInt64Value {
  export function encode(message: UInt64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "0") {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): UInt64Value {
    return { value: isSet(object.value) ? String(object.value) : "0" };
  }

  export function toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<UInt64Value>, I>>(base?: I): UInt64Value {
    return UInt64Value.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<UInt64Value>, I>>(object: I): UInt64Value {
    const message = createBaseUInt64Value();
    message.value = object.value ?? "0";
    return message;
  }
}

function createBaseInt32Value(): Int32Value {
  return { value: 0 };
}

export namespace Int32Value {
  export function encode(message: Int32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Int32Value {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  }

  export function toJSON(message: Int32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Int32Value>, I>>(base?: I): Int32Value {
    return Int32Value.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Int32Value>, I>>(object: I): Int32Value {
    const message = createBaseInt32Value();
    message.value = object.value ?? 0;
    return message;
  }
}

function createBaseUInt32Value(): UInt32Value {
  return { value: 0 };
}

export namespace UInt32Value {
  export function encode(message: UInt32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): UInt32Value {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  }

  export function toJSON(message: UInt32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  }

  export function create<I extends Exact<DeepPartial<UInt32Value>, I>>(base?: I): UInt32Value {
    return UInt32Value.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<UInt32Value>, I>>(object: I): UInt32Value {
    const message = createBaseUInt32Value();
    message.value = object.value ?? 0;
    return message;
  }
}

function createBaseBoolValue(): BoolValue {
  return { value: false };
}

export namespace BoolValue {
  export function encode(message: BoolValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): BoolValue {
    return { value: isSet(object.value) ? Boolean(object.value) : false };
  }

  export function toJSON(message: BoolValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<BoolValue>, I>>(base?: I): BoolValue {
    return BoolValue.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<BoolValue>, I>>(object: I): BoolValue {
    const message = createBaseBoolValue();
    message.value = object.value ?? false;
    return message;
  }
}

function createBaseStringValue(): StringValue {
  return { value: "" };
}

export namespace StringValue {
  export function encode(message: StringValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): StringValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): StringValue {
    return { value: isSet(object.value) ? String(object.value) : "" };
  }

  export function toJSON(message: StringValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<StringValue>, I>>(base?: I): StringValue {
    return StringValue.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<StringValue>, I>>(object: I): StringValue {
    const message = createBaseStringValue();
    message.value = object.value ?? "";
    return message;
  }
}

function createBaseBytesValue(): BytesValue {
  return { value: new Uint8Array() };
}

export namespace BytesValue {
  export function encode(message: BytesValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): BytesValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): BytesValue {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array() };
  }

  export function toJSON(message: BytesValue): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  }

  export function create<I extends Exact<DeepPartial<BytesValue>, I>>(base?: I): BytesValue {
    return BytesValue.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<BytesValue>, I>>(object: I): BytesValue {
    const message = createBaseBytesValue();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
