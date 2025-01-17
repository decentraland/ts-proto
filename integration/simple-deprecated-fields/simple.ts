/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "simple";

export interface Simple {
  /**
   * Name field
   *
   * @deprecated
   */
  name: string;
  /**
   * Age field
   *
   * @deprecated
   */
  age: number;
  /**
   * This comment will also attach;
   *
   * @deprecated
   */
  child:
    | Child
    | undefined;
  /** @deprecated */
  testField: string;
  testNotDeprecated: string;
}

export interface Child {
  name: string;
}

function createBaseSimple(): Simple {
  return { name: "", age: 0, child: undefined, testField: "", testNotDeprecated: "" };
}

export namespace Simple {
  export function encode(message: Simple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(16).int32(message.age);
    }
    if (message.child !== undefined) {
      Child.encode(message.child, writer.uint32(26).fork()).ldelim();
    }
    if (message.testField !== "") {
      writer.uint32(34).string(message.testField);
    }
    if (message.testNotDeprecated !== "") {
      writer.uint32(42).string(message.testNotDeprecated);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Simple {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.age = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.child = Child.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.testField = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.testNotDeprecated = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Simple {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      child: isSet(object.child) ? Child.fromJSON(object.child) : undefined,
      testField: isSet(object.testField) ? String(object.testField) : "",
      testNotDeprecated: isSet(object.testNotDeprecated) ? String(object.testNotDeprecated) : "",
    };
  }

  export function toJSON(message: Simple): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.child !== undefined && (obj.child = message.child ? Child.toJSON(message.child) : undefined);
    message.testField !== undefined && (obj.testField = message.testField);
    message.testNotDeprecated !== undefined && (obj.testNotDeprecated = message.testNotDeprecated);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Simple>, I>>(base?: I): Simple {
    return Simple.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Simple>, I>>(object: I): Simple {
    const message = createBaseSimple();
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    message.child = (object.child !== undefined && object.child !== null) ? Child.fromPartial(object.child) : undefined;
    message.testField = object.testField ?? "";
    message.testNotDeprecated = object.testNotDeprecated ?? "";
    return message;
  }
}

function createBaseChild(): Child {
  return { name: "" };
}

export namespace Child {
  export function encode(message: Child, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Child {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
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

  export function fromJSON(object: any): Child {
    return { name: isSet(object.name) ? String(object.name) : "" };
  }

  export function toJSON(message: Child): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Child>, I>>(base?: I): Child {
    return Child.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Child>, I>>(object: I): Child {
    const message = createBaseChild();
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
