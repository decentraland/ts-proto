/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "simple";

export interface Object {
  name: string;
}

export interface Error {
  name: string;
}

function createBaseObject(): Object {
  return { name: "" };
}

export namespace Object {
  export function encode(message: Object, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  }
  export function decode(input: _m0.Reader | Uint8Array, length?: number): Object {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }
  export function fromJSON(object: any): Object {
    return { name: isSet(object.name) ? String(object.name) : "" };
  }
  export function toJSON(message: Object): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  }
  export function create<I extends Exact<DeepPartial<Object>, I>>(base?: I): Object {
    return Object.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Object>, I>>(object: I): Object {
    const message = createBaseObject();
    message.name = object.name ?? "";
    return message;
  }
}

function createBaseError(): Error {
  return { name: "" };
}

export namespace Error {
  export function encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  }
  export function decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }
  export function fromJSON(object: any): Error {
    return { name: isSet(object.name) ? String(object.name) : "" };
  }
  export function toJSON(message: Error): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  }
  export function create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.name = object.name ?? "";
    return message;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
