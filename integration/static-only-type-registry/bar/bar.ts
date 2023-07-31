/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Foo } from "../foo";
import { messageTypeRegistry } from "../typeRegistry";

export const protobufPackage = "foo.bar";

export interface Bar {
  foo: Foo | undefined;
}

function createBaseBar(): Bar {
  return { foo: undefined };
}

export namespace Bar {
  export const $type = "foo.bar.Bar";

  export function encode(message: Bar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.foo !== undefined) {
      Foo.encode(message.foo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  }

  export function decode(input: _m0.Reader | Uint8Array, length?: number): Bar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.foo = Foo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  }

  export function fromJSON(object: any): Bar {
    return { foo: isSet(object.foo) ? Foo.fromJSON(object.foo) : undefined };
  }

  export function toJSON(message: Bar): unknown {
    const obj: any = {};
    message.foo !== undefined && (obj.foo = message.foo ? Foo.toJSON(message.foo) : undefined);
    return obj;
  }

  export function create<I extends Exact<DeepPartial<Bar>, I>>(base?: I): Bar {
    return Bar.fromPartial(base ?? {});
  }

  export function fromPartial<I extends Exact<DeepPartial<Bar>, I>>(object: I): Bar {
    const message = createBaseBar();
    message.foo = (object.foo !== undefined && object.foo !== null) ? Foo.fromPartial(object.foo) : undefined;
    return message;
  }
}

messageTypeRegistry.set(Bar.$type, Bar);

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