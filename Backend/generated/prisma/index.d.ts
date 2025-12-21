
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model receipt
 * 
 */
export type receipt = $Result.DefaultSelection<Prisma.$receiptPayload>
/**
 * Model store
 * 
 */
export type store = $Result.DefaultSelection<Prisma.$storePayload>
/**
 * Model unit
 * 
 */
export type unit = $Result.DefaultSelection<Prisma.$unitPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model budget
 * 
 */
export type budget = $Result.DefaultSelection<Prisma.$budgetPayload>
/**
 * Model receiptitems
 * 
 */
export type receiptitems = $Result.DefaultSelection<Prisma.$receiptitemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receipt`: Exposes CRUD operations for the **receipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receipts
    * const receipts = await prisma.receipt.findMany()
    * ```
    */
  get receipt(): Prisma.receiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.storeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.unitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.budgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receiptitems`: Exposes CRUD operations for the **receiptitems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receiptitems
    * const receiptitems = await prisma.receiptitems.findMany()
    * ```
    */
  get receiptitems(): Prisma.receiptitemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    category: 'category',
    product: 'product',
    receipt: 'receipt',
    store: 'store',
    unit: 'unit',
    users: 'users',
    budget: 'budget',
    receiptitems: 'receiptitems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "product" | "receipt" | "store" | "unit" | "users" | "budget" | "receiptitems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      receipt: {
        payload: Prisma.$receiptPayload<ExtArgs>
        fields: Prisma.receiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          findFirst: {
            args: Prisma.receiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          findMany: {
            args: Prisma.receiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>[]
          }
          create: {
            args: Prisma.receiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          createMany: {
            args: Prisma.receiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.receiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          update: {
            args: Prisma.receiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          deleteMany: {
            args: Prisma.receiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptPayload>
          }
          aggregate: {
            args: Prisma.ReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceipt>
          }
          groupBy: {
            args: Prisma.receiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCountAggregateOutputType> | number
          }
        }
      }
      store: {
        payload: Prisma.$storePayload<ExtArgs>
        fields: Prisma.storeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findFirst: {
            args: Prisma.storeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findMany: {
            args: Prisma.storeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          create: {
            args: Prisma.storeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          createMany: {
            args: Prisma.storeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.storeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          update: {
            args: Prisma.storeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          deleteMany: {
            args: Prisma.storeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.storeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.storeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.storeCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      unit: {
        payload: Prisma.$unitPayload<ExtArgs>
        fields: Prisma.unitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload>
          }
          findFirst: {
            args: Prisma.unitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload>
          }
          findMany: {
            args: Prisma.unitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload>[]
          }
          create: {
            args: Prisma.unitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload>
          }
          createMany: {
            args: Prisma.unitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.unitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload>
          }
          update: {
            args: Prisma.unitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload>
          }
          deleteMany: {
            args: Prisma.unitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.unitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.unitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.unitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      budget: {
        payload: Prisma.$budgetPayload<ExtArgs>
        fields: Prisma.budgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.budgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.budgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload>
          }
          findFirst: {
            args: Prisma.budgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.budgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload>
          }
          findMany: {
            args: Prisma.budgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload>[]
          }
          create: {
            args: Prisma.budgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload>
          }
          createMany: {
            args: Prisma.budgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.budgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload>
          }
          update: {
            args: Prisma.budgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload>
          }
          deleteMany: {
            args: Prisma.budgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.budgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.budgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$budgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.budgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.budgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      receiptitems: {
        payload: Prisma.$receiptitemsPayload<ExtArgs>
        fields: Prisma.receiptitemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receiptitemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receiptitemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload>
          }
          findFirst: {
            args: Prisma.receiptitemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receiptitemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload>
          }
          findMany: {
            args: Prisma.receiptitemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload>[]
          }
          create: {
            args: Prisma.receiptitemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload>
          }
          createMany: {
            args: Prisma.receiptitemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.receiptitemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload>
          }
          update: {
            args: Prisma.receiptitemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload>
          }
          deleteMany: {
            args: Prisma.receiptitemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receiptitemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receiptitemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receiptitemsPayload>
          }
          aggregate: {
            args: Prisma.ReceiptitemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiptitems>
          }
          groupBy: {
            args: Prisma.receiptitemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptitemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.receiptitemsCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptitemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: categoryOmit
    product?: productOmit
    receipt?: receiptOmit
    store?: storeOmit
    unit?: unitOmit
    users?: usersOmit
    budget?: budgetOmit
    receiptitems?: receiptitemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    receiptitems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiptitems?: boolean | ProductCountOutputTypeCountReceiptitemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReceiptitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptitemsWhereInput
  }


  /**
   * Count Type ReceiptCountOutputType
   */

  export type ReceiptCountOutputType = {
    receiptitems: number
  }

  export type ReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiptitems?: boolean | ReceiptCountOutputTypeCountReceiptitemsArgs
  }

  // Custom InputTypes
  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCountOutputType
     */
    select?: ReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeCountReceiptitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptitemsWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    receipt: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | StoreCountOutputTypeCountReceiptArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountReceiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    receiptitems: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiptitems?: boolean | UnitCountOutputTypeCountReceiptitemsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountReceiptitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptitemsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    receipt: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | UsersCountOutputTypeCountReceiptArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReceiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptWhereInput
  }


  /**
   * Count Type BudgetCountOutputType
   */

  export type BudgetCountOutputType = {
    receipt: number
  }

  export type BudgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | BudgetCountOutputTypeCountReceiptArgs
  }

  // Custom InputTypes
  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCountOutputType
     */
    select?: BudgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeCountReceiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    categoryID: number | null
  }

  export type CategorySumAggregateOutputType = {
    categoryID: number | null
  }

  export type CategoryMinAggregateOutputType = {
    categoryID: number | null
    categoryname: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    categoryID: number | null
    categoryname: string | null
  }

  export type CategoryCountAggregateOutputType = {
    categoryID: number
    categoryname: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    categoryID?: true
  }

  export type CategorySumAggregateInputType = {
    categoryID?: true
  }

  export type CategoryMinAggregateInputType = {
    categoryID?: true
    categoryname?: true
  }

  export type CategoryMaxAggregateInputType = {
    categoryID?: true
    categoryname?: true
  }

  export type CategoryCountAggregateInputType = {
    categoryID?: true
    categoryname?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    categoryID: number
    categoryname: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryID?: boolean
    categoryname?: boolean
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type categorySelectScalar = {
    categoryID?: boolean
    categoryname?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categoryID" | "categoryname", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      product: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryID: number
      categoryname: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `categoryID`
     * const categoryWithCategoryIDOnly = await prisma.category.findMany({ select: { categoryID: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends category$productArgs<ExtArgs> = {}>(args?: Subset<T, category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly categoryID: FieldRef<"category", 'Int'>
    readonly categoryname: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.product
   */
  export type category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productID: number | null
    categoryID: number | null
  }

  export type ProductSumAggregateOutputType = {
    productID: number | null
    categoryID: number | null
  }

  export type ProductMinAggregateOutputType = {
    productID: number | null
    productname: string | null
    categoryID: number | null
  }

  export type ProductMaxAggregateOutputType = {
    productID: number | null
    productname: string | null
    categoryID: number | null
  }

  export type ProductCountAggregateOutputType = {
    productID: number
    productname: number
    categoryID: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    productID?: true
    categoryID?: true
  }

  export type ProductSumAggregateInputType = {
    productID?: true
    categoryID?: true
  }

  export type ProductMinAggregateInputType = {
    productID?: true
    productname?: true
    categoryID?: true
  }

  export type ProductMaxAggregateInputType = {
    productID?: true
    productname?: true
    categoryID?: true
  }

  export type ProductCountAggregateInputType = {
    productID?: true
    productname?: true
    categoryID?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productID: number
    productname: string | null
    categoryID: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productID?: boolean
    productname?: boolean
    categoryID?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    receiptitems?: boolean | product$receiptitemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type productSelectScalar = {
    productID?: boolean
    productname?: boolean
    categoryID?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productID" | "productname" | "categoryID", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    receiptitems?: boolean | product$receiptitemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      receiptitems: Prisma.$receiptitemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productID: number
      productname: string | null
      categoryID: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productID`
     * const productWithProductIDOnly = await prisma.product.findMany({ select: { productID: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiptitems<T extends product$receiptitemsArgs<ExtArgs> = {}>(args?: Subset<T, product$receiptitemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly productID: FieldRef<"product", 'Int'>
    readonly productname: FieldRef<"product", 'String'>
    readonly categoryID: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.receiptitems
   */
  export type product$receiptitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    where?: receiptitemsWhereInput
    orderBy?: receiptitemsOrderByWithRelationInput | receiptitemsOrderByWithRelationInput[]
    cursor?: receiptitemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptitemsScalarFieldEnum | ReceiptitemsScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model receipt
   */

  export type AggregateReceipt = {
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  export type ReceiptAvgAggregateOutputType = {
    receiptID: number | null
    usersID: number | null
    storeID: number | null
    budgetID: number | null
  }

  export type ReceiptSumAggregateOutputType = {
    receiptID: number | null
    usersID: number | null
    storeID: number | null
    budgetID: number | null
  }

  export type ReceiptMinAggregateOutputType = {
    receiptID: number | null
    usersID: number | null
    receiptname: string | null
    receiptdate: Date | null
    futurepurchase: boolean | null
    storeID: number | null
    budgetID: number | null
  }

  export type ReceiptMaxAggregateOutputType = {
    receiptID: number | null
    usersID: number | null
    receiptname: string | null
    receiptdate: Date | null
    futurepurchase: boolean | null
    storeID: number | null
    budgetID: number | null
  }

  export type ReceiptCountAggregateOutputType = {
    receiptID: number
    usersID: number
    receiptname: number
    receiptdate: number
    futurepurchase: number
    storeID: number
    budgetID: number
    _all: number
  }


  export type ReceiptAvgAggregateInputType = {
    receiptID?: true
    usersID?: true
    storeID?: true
    budgetID?: true
  }

  export type ReceiptSumAggregateInputType = {
    receiptID?: true
    usersID?: true
    storeID?: true
    budgetID?: true
  }

  export type ReceiptMinAggregateInputType = {
    receiptID?: true
    usersID?: true
    receiptname?: true
    receiptdate?: true
    futurepurchase?: true
    storeID?: true
    budgetID?: true
  }

  export type ReceiptMaxAggregateInputType = {
    receiptID?: true
    usersID?: true
    receiptname?: true
    receiptdate?: true
    futurepurchase?: true
    storeID?: true
    budgetID?: true
  }

  export type ReceiptCountAggregateInputType = {
    receiptID?: true
    usersID?: true
    receiptname?: true
    receiptdate?: true
    futurepurchase?: true
    storeID?: true
    budgetID?: true
    _all?: true
  }

  export type ReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipt to aggregate.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receipts
    **/
    _count?: true | ReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptMaxAggregateInputType
  }

  export type GetReceiptAggregateType<T extends ReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceipt[P]>
      : GetScalarType<T[P], AggregateReceipt[P]>
  }




  export type receiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptWhereInput
    orderBy?: receiptOrderByWithAggregationInput | receiptOrderByWithAggregationInput[]
    by: ReceiptScalarFieldEnum[] | ReceiptScalarFieldEnum
    having?: receiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCountAggregateInputType | true
    _avg?: ReceiptAvgAggregateInputType
    _sum?: ReceiptSumAggregateInputType
    _min?: ReceiptMinAggregateInputType
    _max?: ReceiptMaxAggregateInputType
  }

  export type ReceiptGroupByOutputType = {
    receiptID: number
    usersID: number
    receiptname: string | null
    receiptdate: Date | null
    futurepurchase: boolean | null
    storeID: number
    budgetID: number | null
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  type GetReceiptGroupByPayload<T extends receiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
        }
      >
    >


  export type receiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receiptID?: boolean
    usersID?: boolean
    receiptname?: boolean
    receiptdate?: boolean
    futurepurchase?: boolean
    storeID?: boolean
    budgetID?: boolean
    budget?: boolean | receipt$budgetArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    receiptitems?: boolean | receipt$receiptitemsArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt"]>



  export type receiptSelectScalar = {
    receiptID?: boolean
    usersID?: boolean
    receiptname?: boolean
    receiptdate?: boolean
    futurepurchase?: boolean
    storeID?: boolean
    budgetID?: boolean
  }

  export type receiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receiptID" | "usersID" | "receiptname" | "receiptdate" | "futurepurchase" | "storeID" | "budgetID", ExtArgs["result"]["receipt"]>
  export type receiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budget?: boolean | receipt$budgetArgs<ExtArgs>
    store?: boolean | storeDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    receiptitems?: boolean | receipt$receiptitemsArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $receiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receipt"
    objects: {
      budget: Prisma.$budgetPayload<ExtArgs> | null
      store: Prisma.$storePayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      receiptitems: Prisma.$receiptitemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      receiptID: number
      usersID: number
      receiptname: string | null
      receiptdate: Date | null
      futurepurchase: boolean | null
      storeID: number
      budgetID: number | null
    }, ExtArgs["result"]["receipt"]>
    composites: {}
  }

  type receiptGetPayload<S extends boolean | null | undefined | receiptDefaultArgs> = $Result.GetResult<Prisma.$receiptPayload, S>

  type receiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptCountAggregateInputType | true
    }

  export interface receiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receipt'], meta: { name: 'receipt' } }
    /**
     * Find zero or one Receipt that matches the filter.
     * @param {receiptFindUniqueArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptFindUniqueArgs>(args: SelectSubset<T, receiptFindUniqueArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receiptFindUniqueOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindFirstArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptFindFirstArgs>(args?: SelectSubset<T, receiptFindFirstArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindFirstOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receipts
     * const receipts = await prisma.receipt.findMany()
     * 
     * // Get first 10 Receipts
     * const receipts = await prisma.receipt.findMany({ take: 10 })
     * 
     * // Only select the `receiptID`
     * const receiptWithReceiptIDOnly = await prisma.receipt.findMany({ select: { receiptID: true } })
     * 
     */
    findMany<T extends receiptFindManyArgs>(args?: SelectSubset<T, receiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receipt.
     * @param {receiptCreateArgs} args - Arguments to create a Receipt.
     * @example
     * // Create one Receipt
     * const Receipt = await prisma.receipt.create({
     *   data: {
     *     // ... data to create a Receipt
     *   }
     * })
     * 
     */
    create<T extends receiptCreateArgs>(args: SelectSubset<T, receiptCreateArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receipts.
     * @param {receiptCreateManyArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipt = await prisma.receipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptCreateManyArgs>(args?: SelectSubset<T, receiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Receipt.
     * @param {receiptDeleteArgs} args - Arguments to delete one Receipt.
     * @example
     * // Delete one Receipt
     * const Receipt = await prisma.receipt.delete({
     *   where: {
     *     // ... filter to delete one Receipt
     *   }
     * })
     * 
     */
    delete<T extends receiptDeleteArgs>(args: SelectSubset<T, receiptDeleteArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receipt.
     * @param {receiptUpdateArgs} args - Arguments to update one Receipt.
     * @example
     * // Update one Receipt
     * const receipt = await prisma.receipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptUpdateArgs>(args: SelectSubset<T, receiptUpdateArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receipts.
     * @param {receiptDeleteManyArgs} args - Arguments to filter Receipts to delete.
     * @example
     * // Delete a few Receipts
     * const { count } = await prisma.receipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptDeleteManyArgs>(args?: SelectSubset<T, receiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receipts
     * const receipt = await prisma.receipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptUpdateManyArgs>(args: SelectSubset<T, receiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receipt.
     * @param {receiptUpsertArgs} args - Arguments to update or create a Receipt.
     * @example
     * // Update or create a Receipt
     * const receipt = await prisma.receipt.upsert({
     *   create: {
     *     // ... data to create a Receipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receipt we want to update
     *   }
     * })
     */
    upsert<T extends receiptUpsertArgs>(args: SelectSubset<T, receiptUpsertArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptCountArgs} args - Arguments to filter Receipts to count.
     * @example
     * // Count the number of Receipts
     * const count = await prisma.receipt.count({
     *   where: {
     *     // ... the filter for the Receipts we want to count
     *   }
     * })
    **/
    count<T extends receiptCountArgs>(
      args?: Subset<T, receiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptAggregateArgs>(args: Subset<T, ReceiptAggregateArgs>): Prisma.PrismaPromise<GetReceiptAggregateType<T>>

    /**
     * Group by Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptGroupByArgs['orderBy'] }
        : { orderBy?: receiptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receipt model
   */
  readonly fields: receiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budget<T extends receipt$budgetArgs<ExtArgs> = {}>(args?: Subset<T, receipt$budgetArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    store<T extends storeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storeDefaultArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiptitems<T extends receipt$receiptitemsArgs<ExtArgs> = {}>(args?: Subset<T, receipt$receiptitemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receipt model
   */
  interface receiptFieldRefs {
    readonly receiptID: FieldRef<"receipt", 'Int'>
    readonly usersID: FieldRef<"receipt", 'Int'>
    readonly receiptname: FieldRef<"receipt", 'String'>
    readonly receiptdate: FieldRef<"receipt", 'DateTime'>
    readonly futurepurchase: FieldRef<"receipt", 'Boolean'>
    readonly storeID: FieldRef<"receipt", 'Int'>
    readonly budgetID: FieldRef<"receipt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * receipt findUnique
   */
  export type receiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt findUniqueOrThrow
   */
  export type receiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt findFirst
   */
  export type receiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt findFirstOrThrow
   */
  export type receiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipt to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt findMany
   */
  export type receiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter, which receipts to fetch.
     */
    where?: receiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receipts to fetch.
     */
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receipts.
     */
    cursor?: receiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receipts.
     */
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * receipt create
   */
  export type receiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * The data needed to create a receipt.
     */
    data: XOR<receiptCreateInput, receiptUncheckedCreateInput>
  }

  /**
   * receipt createMany
   */
  export type receiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receipts.
     */
    data: receiptCreateManyInput | receiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receipt update
   */
  export type receiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * The data needed to update a receipt.
     */
    data: XOR<receiptUpdateInput, receiptUncheckedUpdateInput>
    /**
     * Choose, which receipt to update.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt updateMany
   */
  export type receiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receipts.
     */
    data: XOR<receiptUpdateManyMutationInput, receiptUncheckedUpdateManyInput>
    /**
     * Filter which receipts to update
     */
    where?: receiptWhereInput
    /**
     * Limit how many receipts to update.
     */
    limit?: number
  }

  /**
   * receipt upsert
   */
  export type receiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * The filter to search for the receipt to update in case it exists.
     */
    where: receiptWhereUniqueInput
    /**
     * In case the receipt found by the `where` argument doesn't exist, create a new receipt with this data.
     */
    create: XOR<receiptCreateInput, receiptUncheckedCreateInput>
    /**
     * In case the receipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptUpdateInput, receiptUncheckedUpdateInput>
  }

  /**
   * receipt delete
   */
  export type receiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    /**
     * Filter which receipt to delete.
     */
    where: receiptWhereUniqueInput
  }

  /**
   * receipt deleteMany
   */
  export type receiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receipts to delete
     */
    where?: receiptWhereInput
    /**
     * Limit how many receipts to delete.
     */
    limit?: number
  }

  /**
   * receipt.budget
   */
  export type receipt$budgetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    where?: budgetWhereInput
  }

  /**
   * receipt.receiptitems
   */
  export type receipt$receiptitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    where?: receiptitemsWhereInput
    orderBy?: receiptitemsOrderByWithRelationInput | receiptitemsOrderByWithRelationInput[]
    cursor?: receiptitemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptitemsScalarFieldEnum | ReceiptitemsScalarFieldEnum[]
  }

  /**
   * receipt without action
   */
  export type receiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
  }


  /**
   * Model store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    storeID: number | null
  }

  export type StoreSumAggregateOutputType = {
    storeID: number | null
  }

  export type StoreMinAggregateOutputType = {
    storeID: number | null
    storename: string | null
  }

  export type StoreMaxAggregateOutputType = {
    storeID: number | null
    storename: string | null
  }

  export type StoreCountAggregateOutputType = {
    storeID: number
    storename: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    storeID?: true
  }

  export type StoreSumAggregateInputType = {
    storeID?: true
  }

  export type StoreMinAggregateInputType = {
    storeID?: true
    storename?: true
  }

  export type StoreMaxAggregateInputType = {
    storeID?: true
    storename?: true
  }

  export type StoreCountAggregateInputType = {
    storeID?: true
    storename?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store to aggregate.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type storeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storeWhereInput
    orderBy?: storeOrderByWithAggregationInput | storeOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: storeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    storeID: number
    storename: string | null
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends storeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type storeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeID?: boolean
    storename?: boolean
    receipt?: boolean | store$receiptArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type storeSelectScalar = {
    storeID?: boolean
    storename?: boolean
  }

  export type storeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"storeID" | "storename", ExtArgs["result"]["store"]>
  export type storeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | store$receiptArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $storePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "store"
    objects: {
      receipt: Prisma.$receiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      storeID: number
      storename: string | null
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type storeGetPayload<S extends boolean | null | undefined | storeDefaultArgs> = $Result.GetResult<Prisma.$storePayload, S>

  type storeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface storeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store'], meta: { name: 'store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storeFindUniqueArgs>(args: SelectSubset<T, storeFindUniqueArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storeFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs>(args: SelectSubset<T, storeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storeFindFirstArgs>(args?: SelectSubset<T, storeFindFirstArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs>(args?: SelectSubset<T, storeFindFirstOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `storeID`
     * const storeWithStoreIDOnly = await prisma.store.findMany({ select: { storeID: true } })
     * 
     */
    findMany<T extends storeFindManyArgs>(args?: SelectSubset<T, storeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends storeCreateArgs>(args: SelectSubset<T, storeCreateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storeCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storeCreateManyArgs>(args?: SelectSubset<T, storeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends storeDeleteArgs>(args: SelectSubset<T, storeDeleteArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storeUpdateArgs>(args: SelectSubset<T, storeUpdateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storeDeleteManyArgs>(args?: SelectSubset<T, storeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storeUpdateManyArgs>(args: SelectSubset<T, storeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends storeUpsertArgs>(args: SelectSubset<T, storeUpsertArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storeGroupByArgs['orderBy'] }
        : { orderBy?: storeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the store model
   */
  readonly fields: storeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends store$receiptArgs<ExtArgs> = {}>(args?: Subset<T, store$receiptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the store model
   */
  interface storeFieldRefs {
    readonly storeID: FieldRef<"store", 'Int'>
    readonly storename: FieldRef<"store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * store findUnique
   */
  export type storeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findUniqueOrThrow
   */
  export type storeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findFirst
   */
  export type storeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findFirstOrThrow
   */
  export type storeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findMany
   */
  export type storeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store create
   */
  export type storeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to create a store.
     */
    data?: XOR<storeCreateInput, storeUncheckedCreateInput>
  }

  /**
   * store createMany
   */
  export type storeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store update
   */
  export type storeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to update a store.
     */
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>
    /**
     * Choose, which store to update.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store updateMany
   */
  export type storeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * store upsert
   */
  export type storeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The filter to search for the store to update in case it exists.
     */
    where: storeWhereUniqueInput
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     */
    create: XOR<storeCreateInput, storeUncheckedCreateInput>
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>
  }

  /**
   * store delete
   */
  export type storeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter which store to delete.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * store.receipt
   */
  export type store$receiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    where?: receiptWhereInput
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    cursor?: receiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * store without action
   */
  export type storeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
  }


  /**
   * Model unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    unitID: number | null
  }

  export type UnitSumAggregateOutputType = {
    unitID: number | null
  }

  export type UnitMinAggregateOutputType = {
    unitID: number | null
    unitname: string | null
  }

  export type UnitMaxAggregateOutputType = {
    unitID: number | null
    unitname: string | null
  }

  export type UnitCountAggregateOutputType = {
    unitID: number
    unitname: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    unitID?: true
  }

  export type UnitSumAggregateInputType = {
    unitID?: true
  }

  export type UnitMinAggregateInputType = {
    unitID?: true
    unitname?: true
  }

  export type UnitMaxAggregateInputType = {
    unitID?: true
    unitname?: true
  }

  export type UnitCountAggregateInputType = {
    unitID?: true
    unitname?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unit to aggregate.
     */
    where?: unitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitOrderByWithRelationInput | unitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type unitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unitWhereInput
    orderBy?: unitOrderByWithAggregationInput | unitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: unitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    unitID: number
    unitname: string
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends unitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type unitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitID?: boolean
    unitname?: boolean
    receiptitems?: boolean | unit$receiptitemsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>



  export type unitSelectScalar = {
    unitID?: boolean
    unitname?: boolean
  }

  export type unitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"unitID" | "unitname", ExtArgs["result"]["unit"]>
  export type unitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiptitems?: boolean | unit$receiptitemsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $unitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "unit"
    objects: {
      receiptitems: Prisma.$receiptitemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      unitID: number
      unitname: string
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type unitGetPayload<S extends boolean | null | undefined | unitDefaultArgs> = $Result.GetResult<Prisma.$unitPayload, S>

  type unitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface unitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['unit'], meta: { name: 'unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {unitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unitFindUniqueArgs>(args: SelectSubset<T, unitFindUniqueArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unitFindUniqueOrThrowArgs>(args: SelectSubset<T, unitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unitFindFirstArgs>(args?: SelectSubset<T, unitFindFirstArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unitFindFirstOrThrowArgs>(args?: SelectSubset<T, unitFindFirstOrThrowArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `unitID`
     * const unitWithUnitIDOnly = await prisma.unit.findMany({ select: { unitID: true } })
     * 
     */
    findMany<T extends unitFindManyArgs>(args?: SelectSubset<T, unitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {unitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends unitCreateArgs>(args: SelectSubset<T, unitCreateArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {unitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unitCreateManyArgs>(args?: SelectSubset<T, unitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unit.
     * @param {unitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends unitDeleteArgs>(args: SelectSubset<T, unitDeleteArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {unitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unitUpdateArgs>(args: SelectSubset<T, unitUpdateArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {unitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unitDeleteManyArgs>(args?: SelectSubset<T, unitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unitUpdateManyArgs>(args: SelectSubset<T, unitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {unitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends unitUpsertArgs>(args: SelectSubset<T, unitUpsertArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends unitCountArgs>(
      args?: Subset<T, unitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends unitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unitGroupByArgs['orderBy'] }
        : { orderBy?: unitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, unitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the unit model
   */
  readonly fields: unitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiptitems<T extends unit$receiptitemsArgs<ExtArgs> = {}>(args?: Subset<T, unit$receiptitemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the unit model
   */
  interface unitFieldRefs {
    readonly unitID: FieldRef<"unit", 'Int'>
    readonly unitname: FieldRef<"unit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * unit findUnique
   */
  export type unitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * Filter, which unit to fetch.
     */
    where: unitWhereUniqueInput
  }

  /**
   * unit findUniqueOrThrow
   */
  export type unitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * Filter, which unit to fetch.
     */
    where: unitWhereUniqueInput
  }

  /**
   * unit findFirst
   */
  export type unitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * Filter, which unit to fetch.
     */
    where?: unitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitOrderByWithRelationInput | unitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * unit findFirstOrThrow
   */
  export type unitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * Filter, which unit to fetch.
     */
    where?: unitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitOrderByWithRelationInput | unitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * unit findMany
   */
  export type unitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitOrderByWithRelationInput | unitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing units.
     */
    cursor?: unitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * unit create
   */
  export type unitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * The data needed to create a unit.
     */
    data: XOR<unitCreateInput, unitUncheckedCreateInput>
  }

  /**
   * unit createMany
   */
  export type unitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many units.
     */
    data: unitCreateManyInput | unitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * unit update
   */
  export type unitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * The data needed to update a unit.
     */
    data: XOR<unitUpdateInput, unitUncheckedUpdateInput>
    /**
     * Choose, which unit to update.
     */
    where: unitWhereUniqueInput
  }

  /**
   * unit updateMany
   */
  export type unitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update units.
     */
    data: XOR<unitUpdateManyMutationInput, unitUncheckedUpdateManyInput>
    /**
     * Filter which units to update
     */
    where?: unitWhereInput
    /**
     * Limit how many units to update.
     */
    limit?: number
  }

  /**
   * unit upsert
   */
  export type unitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * The filter to search for the unit to update in case it exists.
     */
    where: unitWhereUniqueInput
    /**
     * In case the unit found by the `where` argument doesn't exist, create a new unit with this data.
     */
    create: XOR<unitCreateInput, unitUncheckedCreateInput>
    /**
     * In case the unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unitUpdateInput, unitUncheckedUpdateInput>
  }

  /**
   * unit delete
   */
  export type unitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
    /**
     * Filter which unit to delete.
     */
    where: unitWhereUniqueInput
  }

  /**
   * unit deleteMany
   */
  export type unitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units to delete
     */
    where?: unitWhereInput
    /**
     * Limit how many units to delete.
     */
    limit?: number
  }

  /**
   * unit.receiptitems
   */
  export type unit$receiptitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    where?: receiptitemsWhereInput
    orderBy?: receiptitemsOrderByWithRelationInput | receiptitemsOrderByWithRelationInput[]
    cursor?: receiptitemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptitemsScalarFieldEnum | ReceiptitemsScalarFieldEnum[]
  }

  /**
   * unit without action
   */
  export type unitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit
     */
    select?: unitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit
     */
    omit?: unitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    usersID: number | null
    permission: number | null
  }

  export type UsersSumAggregateOutputType = {
    usersID: number | null
    permission: number | null
  }

  export type UsersMinAggregateOutputType = {
    usersID: number | null
    username: string | null
    userpassword: string | null
    gmail: string | null
    permission: number | null
  }

  export type UsersMaxAggregateOutputType = {
    usersID: number | null
    username: string | null
    userpassword: string | null
    gmail: string | null
    permission: number | null
  }

  export type UsersCountAggregateOutputType = {
    usersID: number
    username: number
    userpassword: number
    gmail: number
    permission: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    usersID?: true
    permission?: true
  }

  export type UsersSumAggregateInputType = {
    usersID?: true
    permission?: true
  }

  export type UsersMinAggregateInputType = {
    usersID?: true
    username?: true
    userpassword?: true
    gmail?: true
    permission?: true
  }

  export type UsersMaxAggregateInputType = {
    usersID?: true
    username?: true
    userpassword?: true
    gmail?: true
    permission?: true
  }

  export type UsersCountAggregateInputType = {
    usersID?: true
    username?: true
    userpassword?: true
    gmail?: true
    permission?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    usersID: number
    username: string
    userpassword: string
    gmail: string
    permission: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usersID?: boolean
    username?: boolean
    userpassword?: boolean
    gmail?: boolean
    permission?: boolean
    receipt?: boolean | users$receiptArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    usersID?: boolean
    username?: boolean
    userpassword?: boolean
    gmail?: boolean
    permission?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usersID" | "username" | "userpassword" | "gmail" | "permission", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | users$receiptArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      receipt: Prisma.$receiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usersID: number
      username: string
      userpassword: string
      gmail: string
      permission: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `usersID`
     * const usersWithUsersIDOnly = await prisma.users.findMany({ select: { usersID: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends users$receiptArgs<ExtArgs> = {}>(args?: Subset<T, users$receiptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly usersID: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly userpassword: FieldRef<"users", 'String'>
    readonly gmail: FieldRef<"users", 'String'>
    readonly permission: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.receipt
   */
  export type users$receiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    where?: receiptWhereInput
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    cursor?: receiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    budgetID: number | null
    usersID: number | null
    budgetamount: Decimal | null
  }

  export type BudgetSumAggregateOutputType = {
    budgetID: number | null
    usersID: number | null
    budgetamount: Decimal | null
  }

  export type BudgetMinAggregateOutputType = {
    budgetID: number | null
    usersID: number | null
    budgetamount: Decimal | null
    startdate: Date | null
    enddate: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    budgetID: number | null
    usersID: number | null
    budgetamount: Decimal | null
    startdate: Date | null
    enddate: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    budgetID: number
    usersID: number
    budgetamount: number
    startdate: number
    enddate: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    budgetID?: true
    usersID?: true
    budgetamount?: true
  }

  export type BudgetSumAggregateInputType = {
    budgetID?: true
    usersID?: true
    budgetamount?: true
  }

  export type BudgetMinAggregateInputType = {
    budgetID?: true
    usersID?: true
    budgetamount?: true
    startdate?: true
    enddate?: true
  }

  export type BudgetMaxAggregateInputType = {
    budgetID?: true
    usersID?: true
    budgetamount?: true
    startdate?: true
    enddate?: true
  }

  export type BudgetCountAggregateInputType = {
    budgetID?: true
    usersID?: true
    budgetamount?: true
    startdate?: true
    enddate?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which budget to aggregate.
     */
    where?: budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetOrderByWithRelationInput | budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type budgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: budgetWhereInput
    orderBy?: budgetOrderByWithAggregationInput | budgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: budgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    budgetID: number
    usersID: number
    budgetamount: Decimal | null
    startdate: Date | null
    enddate: Date | null
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends budgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type budgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    budgetID?: boolean
    usersID?: boolean
    budgetamount?: boolean
    startdate?: boolean
    enddate?: boolean
    receipt?: boolean | budget$receiptArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>



  export type budgetSelectScalar = {
    budgetID?: boolean
    usersID?: boolean
    budgetamount?: boolean
    startdate?: boolean
    enddate?: boolean
  }

  export type budgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"budgetID" | "usersID" | "budgetamount" | "startdate" | "enddate", ExtArgs["result"]["budget"]>
  export type budgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | budget$receiptArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $budgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "budget"
    objects: {
      receipt: Prisma.$receiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      budgetID: number
      usersID: number
      budgetamount: Prisma.Decimal | null
      startdate: Date | null
      enddate: Date | null
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type budgetGetPayload<S extends boolean | null | undefined | budgetDefaultArgs> = $Result.GetResult<Prisma.$budgetPayload, S>

  type budgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<budgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface budgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['budget'], meta: { name: 'budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {budgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends budgetFindUniqueArgs>(args: SelectSubset<T, budgetFindUniqueArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {budgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends budgetFindUniqueOrThrowArgs>(args: SelectSubset<T, budgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends budgetFindFirstArgs>(args?: SelectSubset<T, budgetFindFirstArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends budgetFindFirstOrThrowArgs>(args?: SelectSubset<T, budgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `budgetID`
     * const budgetWithBudgetIDOnly = await prisma.budget.findMany({ select: { budgetID: true } })
     * 
     */
    findMany<T extends budgetFindManyArgs>(args?: SelectSubset<T, budgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {budgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends budgetCreateArgs>(args: SelectSubset<T, budgetCreateArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {budgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends budgetCreateManyArgs>(args?: SelectSubset<T, budgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Budget.
     * @param {budgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends budgetDeleteArgs>(args: SelectSubset<T, budgetDeleteArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {budgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends budgetUpdateArgs>(args: SelectSubset<T, budgetUpdateArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {budgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends budgetDeleteManyArgs>(args?: SelectSubset<T, budgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends budgetUpdateManyArgs>(args: SelectSubset<T, budgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Budget.
     * @param {budgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends budgetUpsertArgs>(args: SelectSubset<T, budgetUpsertArgs<ExtArgs>>): Prisma__budgetClient<$Result.GetResult<Prisma.$budgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends budgetCountArgs>(
      args?: Subset<T, budgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends budgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: budgetGroupByArgs['orderBy'] }
        : { orderBy?: budgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, budgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the budget model
   */
  readonly fields: budgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__budgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends budget$receiptArgs<ExtArgs> = {}>(args?: Subset<T, budget$receiptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the budget model
   */
  interface budgetFieldRefs {
    readonly budgetID: FieldRef<"budget", 'Int'>
    readonly usersID: FieldRef<"budget", 'Int'>
    readonly budgetamount: FieldRef<"budget", 'Decimal'>
    readonly startdate: FieldRef<"budget", 'DateTime'>
    readonly enddate: FieldRef<"budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * budget findUnique
   */
  export type budgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * Filter, which budget to fetch.
     */
    where: budgetWhereUniqueInput
  }

  /**
   * budget findUniqueOrThrow
   */
  export type budgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * Filter, which budget to fetch.
     */
    where: budgetWhereUniqueInput
  }

  /**
   * budget findFirst
   */
  export type budgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * Filter, which budget to fetch.
     */
    where?: budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetOrderByWithRelationInput | budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for budgets.
     */
    cursor?: budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * budget findFirstOrThrow
   */
  export type budgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * Filter, which budget to fetch.
     */
    where?: budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetOrderByWithRelationInput | budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for budgets.
     */
    cursor?: budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * budget findMany
   */
  export type budgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * Filter, which budgets to fetch.
     */
    where?: budgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of budgets to fetch.
     */
    orderBy?: budgetOrderByWithRelationInput | budgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing budgets.
     */
    cursor?: budgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * budget create
   */
  export type budgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * The data needed to create a budget.
     */
    data: XOR<budgetCreateInput, budgetUncheckedCreateInput>
  }

  /**
   * budget createMany
   */
  export type budgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many budgets.
     */
    data: budgetCreateManyInput | budgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * budget update
   */
  export type budgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * The data needed to update a budget.
     */
    data: XOR<budgetUpdateInput, budgetUncheckedUpdateInput>
    /**
     * Choose, which budget to update.
     */
    where: budgetWhereUniqueInput
  }

  /**
   * budget updateMany
   */
  export type budgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update budgets.
     */
    data: XOR<budgetUpdateManyMutationInput, budgetUncheckedUpdateManyInput>
    /**
     * Filter which budgets to update
     */
    where?: budgetWhereInput
    /**
     * Limit how many budgets to update.
     */
    limit?: number
  }

  /**
   * budget upsert
   */
  export type budgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * The filter to search for the budget to update in case it exists.
     */
    where: budgetWhereUniqueInput
    /**
     * In case the budget found by the `where` argument doesn't exist, create a new budget with this data.
     */
    create: XOR<budgetCreateInput, budgetUncheckedCreateInput>
    /**
     * In case the budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<budgetUpdateInput, budgetUncheckedUpdateInput>
  }

  /**
   * budget delete
   */
  export type budgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
    /**
     * Filter which budget to delete.
     */
    where: budgetWhereUniqueInput
  }

  /**
   * budget deleteMany
   */
  export type budgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which budgets to delete
     */
    where?: budgetWhereInput
    /**
     * Limit how many budgets to delete.
     */
    limit?: number
  }

  /**
   * budget.receipt
   */
  export type budget$receiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receipt
     */
    select?: receiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receipt
     */
    omit?: receiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptInclude<ExtArgs> | null
    where?: receiptWhereInput
    orderBy?: receiptOrderByWithRelationInput | receiptOrderByWithRelationInput[]
    cursor?: receiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * budget without action
   */
  export type budgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the budget
     */
    select?: budgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the budget
     */
    omit?: budgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetInclude<ExtArgs> | null
  }


  /**
   * Model receiptitems
   */

  export type AggregateReceiptitems = {
    _count: ReceiptitemsCountAggregateOutputType | null
    _avg: ReceiptitemsAvgAggregateOutputType | null
    _sum: ReceiptitemsSumAggregateOutputType | null
    _min: ReceiptitemsMinAggregateOutputType | null
    _max: ReceiptitemsMaxAggregateOutputType | null
  }

  export type ReceiptitemsAvgAggregateOutputType = {
    receiptitemsID: number | null
    productID: number | null
    unitID: number | null
    receiptID: number | null
    price: Decimal | null
    quantity: number | null
    amount: number | null
  }

  export type ReceiptitemsSumAggregateOutputType = {
    receiptitemsID: number | null
    productID: number | null
    unitID: number | null
    receiptID: number | null
    price: Decimal | null
    quantity: number | null
    amount: number | null
  }

  export type ReceiptitemsMinAggregateOutputType = {
    receiptitemsID: number | null
    productID: number | null
    unitID: number | null
    receiptID: number | null
    price: Decimal | null
    quantity: number | null
    amount: number | null
  }

  export type ReceiptitemsMaxAggregateOutputType = {
    receiptitemsID: number | null
    productID: number | null
    unitID: number | null
    receiptID: number | null
    price: Decimal | null
    quantity: number | null
    amount: number | null
  }

  export type ReceiptitemsCountAggregateOutputType = {
    receiptitemsID: number
    productID: number
    unitID: number
    receiptID: number
    price: number
    quantity: number
    amount: number
    _all: number
  }


  export type ReceiptitemsAvgAggregateInputType = {
    receiptitemsID?: true
    productID?: true
    unitID?: true
    receiptID?: true
    price?: true
    quantity?: true
    amount?: true
  }

  export type ReceiptitemsSumAggregateInputType = {
    receiptitemsID?: true
    productID?: true
    unitID?: true
    receiptID?: true
    price?: true
    quantity?: true
    amount?: true
  }

  export type ReceiptitemsMinAggregateInputType = {
    receiptitemsID?: true
    productID?: true
    unitID?: true
    receiptID?: true
    price?: true
    quantity?: true
    amount?: true
  }

  export type ReceiptitemsMaxAggregateInputType = {
    receiptitemsID?: true
    productID?: true
    unitID?: true
    receiptID?: true
    price?: true
    quantity?: true
    amount?: true
  }

  export type ReceiptitemsCountAggregateInputType = {
    receiptitemsID?: true
    productID?: true
    unitID?: true
    receiptID?: true
    price?: true
    quantity?: true
    amount?: true
    _all?: true
  }

  export type ReceiptitemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptitems to aggregate.
     */
    where?: receiptitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptitems to fetch.
     */
    orderBy?: receiptitemsOrderByWithRelationInput | receiptitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receiptitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receiptitems
    **/
    _count?: true | ReceiptitemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptitemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptitemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptitemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptitemsMaxAggregateInputType
  }

  export type GetReceiptitemsAggregateType<T extends ReceiptitemsAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiptitems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiptitems[P]>
      : GetScalarType<T[P], AggregateReceiptitems[P]>
  }




  export type receiptitemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receiptitemsWhereInput
    orderBy?: receiptitemsOrderByWithAggregationInput | receiptitemsOrderByWithAggregationInput[]
    by: ReceiptitemsScalarFieldEnum[] | ReceiptitemsScalarFieldEnum
    having?: receiptitemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptitemsCountAggregateInputType | true
    _avg?: ReceiptitemsAvgAggregateInputType
    _sum?: ReceiptitemsSumAggregateInputType
    _min?: ReceiptitemsMinAggregateInputType
    _max?: ReceiptitemsMaxAggregateInputType
  }

  export type ReceiptitemsGroupByOutputType = {
    receiptitemsID: number
    productID: number
    unitID: number
    receiptID: number
    price: Decimal | null
    quantity: number | null
    amount: number | null
    _count: ReceiptitemsCountAggregateOutputType | null
    _avg: ReceiptitemsAvgAggregateOutputType | null
    _sum: ReceiptitemsSumAggregateOutputType | null
    _min: ReceiptitemsMinAggregateOutputType | null
    _max: ReceiptitemsMaxAggregateOutputType | null
  }

  type GetReceiptitemsGroupByPayload<T extends receiptitemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptitemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptitemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptitemsGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptitemsGroupByOutputType[P]>
        }
      >
    >


  export type receiptitemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receiptitemsID?: boolean
    productID?: boolean
    unitID?: boolean
    receiptID?: boolean
    price?: boolean
    quantity?: boolean
    amount?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    unit?: boolean | unitDefaultArgs<ExtArgs>
    receipt?: boolean | receiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiptitems"]>



  export type receiptitemsSelectScalar = {
    receiptitemsID?: boolean
    productID?: boolean
    unitID?: boolean
    receiptID?: boolean
    price?: boolean
    quantity?: boolean
    amount?: boolean
  }

  export type receiptitemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receiptitemsID" | "productID" | "unitID" | "receiptID" | "price" | "quantity" | "amount", ExtArgs["result"]["receiptitems"]>
  export type receiptitemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    unit?: boolean | unitDefaultArgs<ExtArgs>
    receipt?: boolean | receiptDefaultArgs<ExtArgs>
  }

  export type $receiptitemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receiptitems"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      unit: Prisma.$unitPayload<ExtArgs>
      receipt: Prisma.$receiptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      receiptitemsID: number
      productID: number
      unitID: number
      receiptID: number
      price: Prisma.Decimal | null
      quantity: number | null
      amount: number | null
    }, ExtArgs["result"]["receiptitems"]>
    composites: {}
  }

  type receiptitemsGetPayload<S extends boolean | null | undefined | receiptitemsDefaultArgs> = $Result.GetResult<Prisma.$receiptitemsPayload, S>

  type receiptitemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receiptitemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptitemsCountAggregateInputType | true
    }

  export interface receiptitemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receiptitems'], meta: { name: 'receiptitems' } }
    /**
     * Find zero or one Receiptitems that matches the filter.
     * @param {receiptitemsFindUniqueArgs} args - Arguments to find a Receiptitems
     * @example
     * // Get one Receiptitems
     * const receiptitems = await prisma.receiptitems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receiptitemsFindUniqueArgs>(args: SelectSubset<T, receiptitemsFindUniqueArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receiptitems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receiptitemsFindUniqueOrThrowArgs} args - Arguments to find a Receiptitems
     * @example
     * // Get one Receiptitems
     * const receiptitems = await prisma.receiptitems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receiptitemsFindUniqueOrThrowArgs>(args: SelectSubset<T, receiptitemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiptitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptitemsFindFirstArgs} args - Arguments to find a Receiptitems
     * @example
     * // Get one Receiptitems
     * const receiptitems = await prisma.receiptitems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receiptitemsFindFirstArgs>(args?: SelectSubset<T, receiptitemsFindFirstArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receiptitems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptitemsFindFirstOrThrowArgs} args - Arguments to find a Receiptitems
     * @example
     * // Get one Receiptitems
     * const receiptitems = await prisma.receiptitems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receiptitemsFindFirstOrThrowArgs>(args?: SelectSubset<T, receiptitemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receiptitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptitemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receiptitems
     * const receiptitems = await prisma.receiptitems.findMany()
     * 
     * // Get first 10 Receiptitems
     * const receiptitems = await prisma.receiptitems.findMany({ take: 10 })
     * 
     * // Only select the `receiptitemsID`
     * const receiptitemsWithReceiptitemsIDOnly = await prisma.receiptitems.findMany({ select: { receiptitemsID: true } })
     * 
     */
    findMany<T extends receiptitemsFindManyArgs>(args?: SelectSubset<T, receiptitemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receiptitems.
     * @param {receiptitemsCreateArgs} args - Arguments to create a Receiptitems.
     * @example
     * // Create one Receiptitems
     * const Receiptitems = await prisma.receiptitems.create({
     *   data: {
     *     // ... data to create a Receiptitems
     *   }
     * })
     * 
     */
    create<T extends receiptitemsCreateArgs>(args: SelectSubset<T, receiptitemsCreateArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receiptitems.
     * @param {receiptitemsCreateManyArgs} args - Arguments to create many Receiptitems.
     * @example
     * // Create many Receiptitems
     * const receiptitems = await prisma.receiptitems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receiptitemsCreateManyArgs>(args?: SelectSubset<T, receiptitemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Receiptitems.
     * @param {receiptitemsDeleteArgs} args - Arguments to delete one Receiptitems.
     * @example
     * // Delete one Receiptitems
     * const Receiptitems = await prisma.receiptitems.delete({
     *   where: {
     *     // ... filter to delete one Receiptitems
     *   }
     * })
     * 
     */
    delete<T extends receiptitemsDeleteArgs>(args: SelectSubset<T, receiptitemsDeleteArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receiptitems.
     * @param {receiptitemsUpdateArgs} args - Arguments to update one Receiptitems.
     * @example
     * // Update one Receiptitems
     * const receiptitems = await prisma.receiptitems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receiptitemsUpdateArgs>(args: SelectSubset<T, receiptitemsUpdateArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receiptitems.
     * @param {receiptitemsDeleteManyArgs} args - Arguments to filter Receiptitems to delete.
     * @example
     * // Delete a few Receiptitems
     * const { count } = await prisma.receiptitems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receiptitemsDeleteManyArgs>(args?: SelectSubset<T, receiptitemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receiptitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptitemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receiptitems
     * const receiptitems = await prisma.receiptitems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receiptitemsUpdateManyArgs>(args: SelectSubset<T, receiptitemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receiptitems.
     * @param {receiptitemsUpsertArgs} args - Arguments to update or create a Receiptitems.
     * @example
     * // Update or create a Receiptitems
     * const receiptitems = await prisma.receiptitems.upsert({
     *   create: {
     *     // ... data to create a Receiptitems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receiptitems we want to update
     *   }
     * })
     */
    upsert<T extends receiptitemsUpsertArgs>(args: SelectSubset<T, receiptitemsUpsertArgs<ExtArgs>>): Prisma__receiptitemsClient<$Result.GetResult<Prisma.$receiptitemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receiptitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptitemsCountArgs} args - Arguments to filter Receiptitems to count.
     * @example
     * // Count the number of Receiptitems
     * const count = await prisma.receiptitems.count({
     *   where: {
     *     // ... the filter for the Receiptitems we want to count
     *   }
     * })
    **/
    count<T extends receiptitemsCountArgs>(
      args?: Subset<T, receiptitemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptitemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receiptitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptitemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiptitemsAggregateArgs>(args: Subset<T, ReceiptitemsAggregateArgs>): Prisma.PrismaPromise<GetReceiptitemsAggregateType<T>>

    /**
     * Group by Receiptitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receiptitemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends receiptitemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receiptitemsGroupByArgs['orderBy'] }
        : { orderBy?: receiptitemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, receiptitemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptitemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receiptitems model
   */
  readonly fields: receiptitemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receiptitems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receiptitemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends unitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unitDefaultArgs<ExtArgs>>): Prisma__unitClient<$Result.GetResult<Prisma.$unitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receipt<T extends receiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, receiptDefaultArgs<ExtArgs>>): Prisma__receiptClient<$Result.GetResult<Prisma.$receiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the receiptitems model
   */
  interface receiptitemsFieldRefs {
    readonly receiptitemsID: FieldRef<"receiptitems", 'Int'>
    readonly productID: FieldRef<"receiptitems", 'Int'>
    readonly unitID: FieldRef<"receiptitems", 'Int'>
    readonly receiptID: FieldRef<"receiptitems", 'Int'>
    readonly price: FieldRef<"receiptitems", 'Decimal'>
    readonly quantity: FieldRef<"receiptitems", 'Int'>
    readonly amount: FieldRef<"receiptitems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * receiptitems findUnique
   */
  export type receiptitemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptitems to fetch.
     */
    where: receiptitemsWhereUniqueInput
  }

  /**
   * receiptitems findUniqueOrThrow
   */
  export type receiptitemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptitems to fetch.
     */
    where: receiptitemsWhereUniqueInput
  }

  /**
   * receiptitems findFirst
   */
  export type receiptitemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptitems to fetch.
     */
    where?: receiptitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptitems to fetch.
     */
    orderBy?: receiptitemsOrderByWithRelationInput | receiptitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptitems.
     */
    cursor?: receiptitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptitems.
     */
    distinct?: ReceiptitemsScalarFieldEnum | ReceiptitemsScalarFieldEnum[]
  }

  /**
   * receiptitems findFirstOrThrow
   */
  export type receiptitemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptitems to fetch.
     */
    where?: receiptitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptitems to fetch.
     */
    orderBy?: receiptitemsOrderByWithRelationInput | receiptitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receiptitems.
     */
    cursor?: receiptitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receiptitems.
     */
    distinct?: ReceiptitemsScalarFieldEnum | ReceiptitemsScalarFieldEnum[]
  }

  /**
   * receiptitems findMany
   */
  export type receiptitemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * Filter, which receiptitems to fetch.
     */
    where?: receiptitemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receiptitems to fetch.
     */
    orderBy?: receiptitemsOrderByWithRelationInput | receiptitemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receiptitems.
     */
    cursor?: receiptitemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receiptitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receiptitems.
     */
    skip?: number
    distinct?: ReceiptitemsScalarFieldEnum | ReceiptitemsScalarFieldEnum[]
  }

  /**
   * receiptitems create
   */
  export type receiptitemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * The data needed to create a receiptitems.
     */
    data: XOR<receiptitemsCreateInput, receiptitemsUncheckedCreateInput>
  }

  /**
   * receiptitems createMany
   */
  export type receiptitemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receiptitems.
     */
    data: receiptitemsCreateManyInput | receiptitemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receiptitems update
   */
  export type receiptitemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * The data needed to update a receiptitems.
     */
    data: XOR<receiptitemsUpdateInput, receiptitemsUncheckedUpdateInput>
    /**
     * Choose, which receiptitems to update.
     */
    where: receiptitemsWhereUniqueInput
  }

  /**
   * receiptitems updateMany
   */
  export type receiptitemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receiptitems.
     */
    data: XOR<receiptitemsUpdateManyMutationInput, receiptitemsUncheckedUpdateManyInput>
    /**
     * Filter which receiptitems to update
     */
    where?: receiptitemsWhereInput
    /**
     * Limit how many receiptitems to update.
     */
    limit?: number
  }

  /**
   * receiptitems upsert
   */
  export type receiptitemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * The filter to search for the receiptitems to update in case it exists.
     */
    where: receiptitemsWhereUniqueInput
    /**
     * In case the receiptitems found by the `where` argument doesn't exist, create a new receiptitems with this data.
     */
    create: XOR<receiptitemsCreateInput, receiptitemsUncheckedCreateInput>
    /**
     * In case the receiptitems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receiptitemsUpdateInput, receiptitemsUncheckedUpdateInput>
  }

  /**
   * receiptitems delete
   */
  export type receiptitemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
    /**
     * Filter which receiptitems to delete.
     */
    where: receiptitemsWhereUniqueInput
  }

  /**
   * receiptitems deleteMany
   */
  export type receiptitemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receiptitems to delete
     */
    where?: receiptitemsWhereInput
    /**
     * Limit how many receiptitems to delete.
     */
    limit?: number
  }

  /**
   * receiptitems without action
   */
  export type receiptitemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receiptitems
     */
    select?: receiptitemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receiptitems
     */
    omit?: receiptitemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receiptitemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    categoryID: 'categoryID',
    categoryname: 'categoryname'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productID: 'productID',
    productname: 'productname',
    categoryID: 'categoryID'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ReceiptScalarFieldEnum: {
    receiptID: 'receiptID',
    usersID: 'usersID',
    receiptname: 'receiptname',
    receiptdate: 'receiptdate',
    futurepurchase: 'futurepurchase',
    storeID: 'storeID',
    budgetID: 'budgetID'
  };

  export type ReceiptScalarFieldEnum = (typeof ReceiptScalarFieldEnum)[keyof typeof ReceiptScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    storeID: 'storeID',
    storename: 'storename'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    unitID: 'unitID',
    unitname: 'unitname'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    usersID: 'usersID',
    username: 'username',
    userpassword: 'userpassword',
    gmail: 'gmail',
    permission: 'permission'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    budgetID: 'budgetID',
    usersID: 'usersID',
    budgetamount: 'budgetamount',
    startdate: 'startdate',
    enddate: 'enddate'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const ReceiptitemsScalarFieldEnum: {
    receiptitemsID: 'receiptitemsID',
    productID: 'productID',
    unitID: 'unitID',
    receiptID: 'receiptID',
    price: 'price',
    quantity: 'quantity',
    amount: 'amount'
  };

  export type ReceiptitemsScalarFieldEnum = (typeof ReceiptitemsScalarFieldEnum)[keyof typeof ReceiptitemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const categoryOrderByRelevanceFieldEnum: {
    categoryname: 'categoryname'
  };

  export type categoryOrderByRelevanceFieldEnum = (typeof categoryOrderByRelevanceFieldEnum)[keyof typeof categoryOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const productOrderByRelevanceFieldEnum: {
    productname: 'productname'
  };

  export type productOrderByRelevanceFieldEnum = (typeof productOrderByRelevanceFieldEnum)[keyof typeof productOrderByRelevanceFieldEnum]


  export const receiptOrderByRelevanceFieldEnum: {
    receiptname: 'receiptname'
  };

  export type receiptOrderByRelevanceFieldEnum = (typeof receiptOrderByRelevanceFieldEnum)[keyof typeof receiptOrderByRelevanceFieldEnum]


  export const storeOrderByRelevanceFieldEnum: {
    storename: 'storename'
  };

  export type storeOrderByRelevanceFieldEnum = (typeof storeOrderByRelevanceFieldEnum)[keyof typeof storeOrderByRelevanceFieldEnum]


  export const unitOrderByRelevanceFieldEnum: {
    unitname: 'unitname'
  };

  export type unitOrderByRelevanceFieldEnum = (typeof unitOrderByRelevanceFieldEnum)[keyof typeof unitOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    userpassword: 'userpassword',
    gmail: 'gmail'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    categoryID?: IntFilter<"category"> | number
    categoryname?: StringFilter<"category"> | string
    product?: ProductListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    categoryID?: SortOrder
    categoryname?: SortOrder
    product?: productOrderByRelationAggregateInput
    _relevance?: categoryOrderByRelevanceInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    categoryID?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    categoryname?: StringFilter<"category"> | string
    product?: ProductListRelationFilter
  }, "categoryID">

  export type categoryOrderByWithAggregationInput = {
    categoryID?: SortOrder
    categoryname?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    categoryID?: IntWithAggregatesFilter<"category"> | number
    categoryname?: StringWithAggregatesFilter<"category"> | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    productID?: IntFilter<"product"> | number
    productname?: StringNullableFilter<"product"> | string | null
    categoryID?: IntFilter<"product"> | number
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    receiptitems?: ReceiptitemsListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    productID?: SortOrder
    productname?: SortOrderInput | SortOrder
    categoryID?: SortOrder
    category?: categoryOrderByWithRelationInput
    receiptitems?: receiptitemsOrderByRelationAggregateInput
    _relevance?: productOrderByRelevanceInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    productID?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    productname?: StringNullableFilter<"product"> | string | null
    categoryID?: IntFilter<"product"> | number
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    receiptitems?: ReceiptitemsListRelationFilter
  }, "productID">

  export type productOrderByWithAggregationInput = {
    productID?: SortOrder
    productname?: SortOrderInput | SortOrder
    categoryID?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    productID?: IntWithAggregatesFilter<"product"> | number
    productname?: StringNullableWithAggregatesFilter<"product"> | string | null
    categoryID?: IntWithAggregatesFilter<"product"> | number
  }

  export type receiptWhereInput = {
    AND?: receiptWhereInput | receiptWhereInput[]
    OR?: receiptWhereInput[]
    NOT?: receiptWhereInput | receiptWhereInput[]
    receiptID?: IntFilter<"receipt"> | number
    usersID?: IntFilter<"receipt"> | number
    receiptname?: StringNullableFilter<"receipt"> | string | null
    receiptdate?: DateTimeNullableFilter<"receipt"> | Date | string | null
    futurepurchase?: BoolNullableFilter<"receipt"> | boolean | null
    storeID?: IntFilter<"receipt"> | number
    budgetID?: IntNullableFilter<"receipt"> | number | null
    budget?: XOR<BudgetNullableScalarRelationFilter, budgetWhereInput> | null
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    receiptitems?: ReceiptitemsListRelationFilter
  }

  export type receiptOrderByWithRelationInput = {
    receiptID?: SortOrder
    usersID?: SortOrder
    receiptname?: SortOrderInput | SortOrder
    receiptdate?: SortOrderInput | SortOrder
    futurepurchase?: SortOrderInput | SortOrder
    storeID?: SortOrder
    budgetID?: SortOrderInput | SortOrder
    budget?: budgetOrderByWithRelationInput
    store?: storeOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    receiptitems?: receiptitemsOrderByRelationAggregateInput
    _relevance?: receiptOrderByRelevanceInput
  }

  export type receiptWhereUniqueInput = Prisma.AtLeast<{
    receiptID?: number
    AND?: receiptWhereInput | receiptWhereInput[]
    OR?: receiptWhereInput[]
    NOT?: receiptWhereInput | receiptWhereInput[]
    usersID?: IntFilter<"receipt"> | number
    receiptname?: StringNullableFilter<"receipt"> | string | null
    receiptdate?: DateTimeNullableFilter<"receipt"> | Date | string | null
    futurepurchase?: BoolNullableFilter<"receipt"> | boolean | null
    storeID?: IntFilter<"receipt"> | number
    budgetID?: IntNullableFilter<"receipt"> | number | null
    budget?: XOR<BudgetNullableScalarRelationFilter, budgetWhereInput> | null
    store?: XOR<StoreScalarRelationFilter, storeWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    receiptitems?: ReceiptitemsListRelationFilter
  }, "receiptID">

  export type receiptOrderByWithAggregationInput = {
    receiptID?: SortOrder
    usersID?: SortOrder
    receiptname?: SortOrderInput | SortOrder
    receiptdate?: SortOrderInput | SortOrder
    futurepurchase?: SortOrderInput | SortOrder
    storeID?: SortOrder
    budgetID?: SortOrderInput | SortOrder
    _count?: receiptCountOrderByAggregateInput
    _avg?: receiptAvgOrderByAggregateInput
    _max?: receiptMaxOrderByAggregateInput
    _min?: receiptMinOrderByAggregateInput
    _sum?: receiptSumOrderByAggregateInput
  }

  export type receiptScalarWhereWithAggregatesInput = {
    AND?: receiptScalarWhereWithAggregatesInput | receiptScalarWhereWithAggregatesInput[]
    OR?: receiptScalarWhereWithAggregatesInput[]
    NOT?: receiptScalarWhereWithAggregatesInput | receiptScalarWhereWithAggregatesInput[]
    receiptID?: IntWithAggregatesFilter<"receipt"> | number
    usersID?: IntWithAggregatesFilter<"receipt"> | number
    receiptname?: StringNullableWithAggregatesFilter<"receipt"> | string | null
    receiptdate?: DateTimeNullableWithAggregatesFilter<"receipt"> | Date | string | null
    futurepurchase?: BoolNullableWithAggregatesFilter<"receipt"> | boolean | null
    storeID?: IntWithAggregatesFilter<"receipt"> | number
    budgetID?: IntNullableWithAggregatesFilter<"receipt"> | number | null
  }

  export type storeWhereInput = {
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    storeID?: IntFilter<"store"> | number
    storename?: StringNullableFilter<"store"> | string | null
    receipt?: ReceiptListRelationFilter
  }

  export type storeOrderByWithRelationInput = {
    storeID?: SortOrder
    storename?: SortOrderInput | SortOrder
    receipt?: receiptOrderByRelationAggregateInput
    _relevance?: storeOrderByRelevanceInput
  }

  export type storeWhereUniqueInput = Prisma.AtLeast<{
    storeID?: number
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    storename?: StringNullableFilter<"store"> | string | null
    receipt?: ReceiptListRelationFilter
  }, "storeID">

  export type storeOrderByWithAggregationInput = {
    storeID?: SortOrder
    storename?: SortOrderInput | SortOrder
    _count?: storeCountOrderByAggregateInput
    _avg?: storeAvgOrderByAggregateInput
    _max?: storeMaxOrderByAggregateInput
    _min?: storeMinOrderByAggregateInput
    _sum?: storeSumOrderByAggregateInput
  }

  export type storeScalarWhereWithAggregatesInput = {
    AND?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    OR?: storeScalarWhereWithAggregatesInput[]
    NOT?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    storeID?: IntWithAggregatesFilter<"store"> | number
    storename?: StringNullableWithAggregatesFilter<"store"> | string | null
  }

  export type unitWhereInput = {
    AND?: unitWhereInput | unitWhereInput[]
    OR?: unitWhereInput[]
    NOT?: unitWhereInput | unitWhereInput[]
    unitID?: IntFilter<"unit"> | number
    unitname?: StringFilter<"unit"> | string
    receiptitems?: ReceiptitemsListRelationFilter
  }

  export type unitOrderByWithRelationInput = {
    unitID?: SortOrder
    unitname?: SortOrder
    receiptitems?: receiptitemsOrderByRelationAggregateInput
    _relevance?: unitOrderByRelevanceInput
  }

  export type unitWhereUniqueInput = Prisma.AtLeast<{
    unitID?: number
    AND?: unitWhereInput | unitWhereInput[]
    OR?: unitWhereInput[]
    NOT?: unitWhereInput | unitWhereInput[]
    unitname?: StringFilter<"unit"> | string
    receiptitems?: ReceiptitemsListRelationFilter
  }, "unitID">

  export type unitOrderByWithAggregationInput = {
    unitID?: SortOrder
    unitname?: SortOrder
    _count?: unitCountOrderByAggregateInput
    _avg?: unitAvgOrderByAggregateInput
    _max?: unitMaxOrderByAggregateInput
    _min?: unitMinOrderByAggregateInput
    _sum?: unitSumOrderByAggregateInput
  }

  export type unitScalarWhereWithAggregatesInput = {
    AND?: unitScalarWhereWithAggregatesInput | unitScalarWhereWithAggregatesInput[]
    OR?: unitScalarWhereWithAggregatesInput[]
    NOT?: unitScalarWhereWithAggregatesInput | unitScalarWhereWithAggregatesInput[]
    unitID?: IntWithAggregatesFilter<"unit"> | number
    unitname?: StringWithAggregatesFilter<"unit"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    usersID?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    userpassword?: StringFilter<"users"> | string
    gmail?: StringFilter<"users"> | string
    permission?: IntFilter<"users"> | number
    receipt?: ReceiptListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    usersID?: SortOrder
    username?: SortOrder
    userpassword?: SortOrder
    gmail?: SortOrder
    permission?: SortOrder
    receipt?: receiptOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    usersID?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    userpassword?: StringFilter<"users"> | string
    gmail?: StringFilter<"users"> | string
    permission?: IntFilter<"users"> | number
    receipt?: ReceiptListRelationFilter
  }, "usersID">

  export type usersOrderByWithAggregationInput = {
    usersID?: SortOrder
    username?: SortOrder
    userpassword?: SortOrder
    gmail?: SortOrder
    permission?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    usersID?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    userpassword?: StringWithAggregatesFilter<"users"> | string
    gmail?: StringWithAggregatesFilter<"users"> | string
    permission?: IntWithAggregatesFilter<"users"> | number
  }

  export type budgetWhereInput = {
    AND?: budgetWhereInput | budgetWhereInput[]
    OR?: budgetWhereInput[]
    NOT?: budgetWhereInput | budgetWhereInput[]
    budgetID?: IntFilter<"budget"> | number
    usersID?: IntFilter<"budget"> | number
    budgetamount?: DecimalNullableFilter<"budget"> | Decimal | DecimalJsLike | number | string | null
    startdate?: DateTimeNullableFilter<"budget"> | Date | string | null
    enddate?: DateTimeNullableFilter<"budget"> | Date | string | null
    receipt?: ReceiptListRelationFilter
  }

  export type budgetOrderByWithRelationInput = {
    budgetID?: SortOrder
    usersID?: SortOrder
    budgetamount?: SortOrderInput | SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    receipt?: receiptOrderByRelationAggregateInput
  }

  export type budgetWhereUniqueInput = Prisma.AtLeast<{
    budgetID?: number
    AND?: budgetWhereInput | budgetWhereInput[]
    OR?: budgetWhereInput[]
    NOT?: budgetWhereInput | budgetWhereInput[]
    usersID?: IntFilter<"budget"> | number
    budgetamount?: DecimalNullableFilter<"budget"> | Decimal | DecimalJsLike | number | string | null
    startdate?: DateTimeNullableFilter<"budget"> | Date | string | null
    enddate?: DateTimeNullableFilter<"budget"> | Date | string | null
    receipt?: ReceiptListRelationFilter
  }, "budgetID">

  export type budgetOrderByWithAggregationInput = {
    budgetID?: SortOrder
    usersID?: SortOrder
    budgetamount?: SortOrderInput | SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    _count?: budgetCountOrderByAggregateInput
    _avg?: budgetAvgOrderByAggregateInput
    _max?: budgetMaxOrderByAggregateInput
    _min?: budgetMinOrderByAggregateInput
    _sum?: budgetSumOrderByAggregateInput
  }

  export type budgetScalarWhereWithAggregatesInput = {
    AND?: budgetScalarWhereWithAggregatesInput | budgetScalarWhereWithAggregatesInput[]
    OR?: budgetScalarWhereWithAggregatesInput[]
    NOT?: budgetScalarWhereWithAggregatesInput | budgetScalarWhereWithAggregatesInput[]
    budgetID?: IntWithAggregatesFilter<"budget"> | number
    usersID?: IntWithAggregatesFilter<"budget"> | number
    budgetamount?: DecimalNullableWithAggregatesFilter<"budget"> | Decimal | DecimalJsLike | number | string | null
    startdate?: DateTimeNullableWithAggregatesFilter<"budget"> | Date | string | null
    enddate?: DateTimeNullableWithAggregatesFilter<"budget"> | Date | string | null
  }

  export type receiptitemsWhereInput = {
    AND?: receiptitemsWhereInput | receiptitemsWhereInput[]
    OR?: receiptitemsWhereInput[]
    NOT?: receiptitemsWhereInput | receiptitemsWhereInput[]
    receiptitemsID?: IntFilter<"receiptitems"> | number
    productID?: IntFilter<"receiptitems"> | number
    unitID?: IntFilter<"receiptitems"> | number
    receiptID?: IntFilter<"receiptitems"> | number
    price?: DecimalNullableFilter<"receiptitems"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"receiptitems"> | number | null
    amount?: IntNullableFilter<"receiptitems"> | number | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    unit?: XOR<UnitScalarRelationFilter, unitWhereInput>
    receipt?: XOR<ReceiptScalarRelationFilter, receiptWhereInput>
  }

  export type receiptitemsOrderByWithRelationInput = {
    receiptitemsID?: SortOrder
    productID?: SortOrder
    unitID?: SortOrder
    receiptID?: SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    product?: productOrderByWithRelationInput
    unit?: unitOrderByWithRelationInput
    receipt?: receiptOrderByWithRelationInput
  }

  export type receiptitemsWhereUniqueInput = Prisma.AtLeast<{
    receiptitemsID?: number
    AND?: receiptitemsWhereInput | receiptitemsWhereInput[]
    OR?: receiptitemsWhereInput[]
    NOT?: receiptitemsWhereInput | receiptitemsWhereInput[]
    productID?: IntFilter<"receiptitems"> | number
    unitID?: IntFilter<"receiptitems"> | number
    receiptID?: IntFilter<"receiptitems"> | number
    price?: DecimalNullableFilter<"receiptitems"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"receiptitems"> | number | null
    amount?: IntNullableFilter<"receiptitems"> | number | null
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    unit?: XOR<UnitScalarRelationFilter, unitWhereInput>
    receipt?: XOR<ReceiptScalarRelationFilter, receiptWhereInput>
  }, "receiptitemsID">

  export type receiptitemsOrderByWithAggregationInput = {
    receiptitemsID?: SortOrder
    productID?: SortOrder
    unitID?: SortOrder
    receiptID?: SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    _count?: receiptitemsCountOrderByAggregateInput
    _avg?: receiptitemsAvgOrderByAggregateInput
    _max?: receiptitemsMaxOrderByAggregateInput
    _min?: receiptitemsMinOrderByAggregateInput
    _sum?: receiptitemsSumOrderByAggregateInput
  }

  export type receiptitemsScalarWhereWithAggregatesInput = {
    AND?: receiptitemsScalarWhereWithAggregatesInput | receiptitemsScalarWhereWithAggregatesInput[]
    OR?: receiptitemsScalarWhereWithAggregatesInput[]
    NOT?: receiptitemsScalarWhereWithAggregatesInput | receiptitemsScalarWhereWithAggregatesInput[]
    receiptitemsID?: IntWithAggregatesFilter<"receiptitems"> | number
    productID?: IntWithAggregatesFilter<"receiptitems"> | number
    unitID?: IntWithAggregatesFilter<"receiptitems"> | number
    receiptID?: IntWithAggregatesFilter<"receiptitems"> | number
    price?: DecimalNullableWithAggregatesFilter<"receiptitems"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableWithAggregatesFilter<"receiptitems"> | number | null
    amount?: IntNullableWithAggregatesFilter<"receiptitems"> | number | null
  }

  export type categoryCreateInput = {
    categoryname: string
    product?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    categoryID?: number
    categoryname: string
    product?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    categoryname?: StringFieldUpdateOperationsInput | string
    product?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    categoryID?: IntFieldUpdateOperationsInput | number
    categoryname?: StringFieldUpdateOperationsInput | string
    product?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    categoryID?: number
    categoryname: string
  }

  export type categoryUpdateManyMutationInput = {
    categoryname?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    categoryID?: IntFieldUpdateOperationsInput | number
    categoryname?: StringFieldUpdateOperationsInput | string
  }

  export type productCreateInput = {
    productname?: string | null
    category: categoryCreateNestedOneWithoutProductInput
    receiptitems?: receiptitemsCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    productID?: number
    productname?: string | null
    categoryID: number
    receiptitems?: receiptitemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    productname?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutProductNestedInput
    receiptitems?: receiptitemsUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    productID?: IntFieldUpdateOperationsInput | number
    productname?: NullableStringFieldUpdateOperationsInput | string | null
    categoryID?: IntFieldUpdateOperationsInput | number
    receiptitems?: receiptitemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    productID?: number
    productname?: string | null
    categoryID: number
  }

  export type productUpdateManyMutationInput = {
    productname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productUncheckedUpdateManyInput = {
    productID?: IntFieldUpdateOperationsInput | number
    productname?: NullableStringFieldUpdateOperationsInput | string | null
    categoryID?: IntFieldUpdateOperationsInput | number
  }

  export type receiptCreateInput = {
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    budget?: budgetCreateNestedOneWithoutReceiptInput
    store: storeCreateNestedOneWithoutReceiptInput
    users: usersCreateNestedOneWithoutReceiptInput
    receiptitems?: receiptitemsCreateNestedManyWithoutReceiptInput
  }

  export type receiptUncheckedCreateInput = {
    receiptID?: number
    usersID: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    storeID: number
    budgetID?: number | null
    receiptitems?: receiptitemsUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptUpdateInput = {
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    budget?: budgetUpdateOneWithoutReceiptNestedInput
    store?: storeUpdateOneRequiredWithoutReceiptNestedInput
    users?: usersUpdateOneRequiredWithoutReceiptNestedInput
    receiptitems?: receiptitemsUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storeID?: IntFieldUpdateOperationsInput | number
    budgetID?: NullableIntFieldUpdateOperationsInput | number | null
    receiptitems?: receiptitemsUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptCreateManyInput = {
    receiptID?: number
    usersID: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    storeID: number
    budgetID?: number | null
  }

  export type receiptUpdateManyMutationInput = {
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type receiptUncheckedUpdateManyInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storeID?: IntFieldUpdateOperationsInput | number
    budgetID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type storeCreateInput = {
    storename?: string | null
    receipt?: receiptCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateInput = {
    storeID?: number
    storename?: string | null
    receipt?: receiptUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeUpdateInput = {
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: receiptUpdateManyWithoutStoreNestedInput
  }

  export type storeUncheckedUpdateInput = {
    storeID?: IntFieldUpdateOperationsInput | number
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: receiptUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type storeCreateManyInput = {
    storeID?: number
    storename?: string | null
  }

  export type storeUpdateManyMutationInput = {
    storename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storeUncheckedUpdateManyInput = {
    storeID?: IntFieldUpdateOperationsInput | number
    storename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type unitCreateInput = {
    unitname: string
    receiptitems?: receiptitemsCreateNestedManyWithoutUnitInput
  }

  export type unitUncheckedCreateInput = {
    unitID?: number
    unitname: string
    receiptitems?: receiptitemsUncheckedCreateNestedManyWithoutUnitInput
  }

  export type unitUpdateInput = {
    unitname?: StringFieldUpdateOperationsInput | string
    receiptitems?: receiptitemsUpdateManyWithoutUnitNestedInput
  }

  export type unitUncheckedUpdateInput = {
    unitID?: IntFieldUpdateOperationsInput | number
    unitname?: StringFieldUpdateOperationsInput | string
    receiptitems?: receiptitemsUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type unitCreateManyInput = {
    unitID?: number
    unitname: string
  }

  export type unitUpdateManyMutationInput = {
    unitname?: StringFieldUpdateOperationsInput | string
  }

  export type unitUncheckedUpdateManyInput = {
    unitID?: IntFieldUpdateOperationsInput | number
    unitname?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    username: string
    userpassword: string
    gmail: string
    permission: number
    receipt?: receiptCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    usersID?: number
    username: string
    userpassword: string
    gmail: string
    permission: number
    receipt?: receiptUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    userpassword?: StringFieldUpdateOperationsInput | string
    gmail?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
    receipt?: receiptUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    usersID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userpassword?: StringFieldUpdateOperationsInput | string
    gmail?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
    receipt?: receiptUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    usersID?: number
    username: string
    userpassword: string
    gmail: string
    permission: number
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    userpassword?: StringFieldUpdateOperationsInput | string
    gmail?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateManyInput = {
    usersID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userpassword?: StringFieldUpdateOperationsInput | string
    gmail?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
  }

  export type budgetCreateInput = {
    usersID: number
    budgetamount?: Decimal | DecimalJsLike | number | string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    receipt?: receiptCreateNestedManyWithoutBudgetInput
  }

  export type budgetUncheckedCreateInput = {
    budgetID?: number
    usersID: number
    budgetamount?: Decimal | DecimalJsLike | number | string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
    receipt?: receiptUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type budgetUpdateInput = {
    usersID?: IntFieldUpdateOperationsInput | number
    budgetamount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: receiptUpdateManyWithoutBudgetNestedInput
  }

  export type budgetUncheckedUpdateInput = {
    budgetID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    budgetamount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: receiptUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type budgetCreateManyInput = {
    budgetID?: number
    usersID: number
    budgetamount?: Decimal | DecimalJsLike | number | string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
  }

  export type budgetUpdateManyMutationInput = {
    usersID?: IntFieldUpdateOperationsInput | number
    budgetamount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type budgetUncheckedUpdateManyInput = {
    budgetID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    budgetamount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type receiptitemsCreateInput = {
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
    product: productCreateNestedOneWithoutReceiptitemsInput
    unit: unitCreateNestedOneWithoutReceiptitemsInput
    receipt: receiptCreateNestedOneWithoutReceiptitemsInput
  }

  export type receiptitemsUncheckedCreateInput = {
    receiptitemsID?: number
    productID: number
    unitID: number
    receiptID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsUpdateInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    product?: productUpdateOneRequiredWithoutReceiptitemsNestedInput
    unit?: unitUpdateOneRequiredWithoutReceiptitemsNestedInput
    receipt?: receiptUpdateOneRequiredWithoutReceiptitemsNestedInput
  }

  export type receiptitemsUncheckedUpdateInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    unitID?: IntFieldUpdateOperationsInput | number
    receiptID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptitemsCreateManyInput = {
    receiptitemsID?: number
    productID: number
    unitID: number
    receiptID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsUpdateManyMutationInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptitemsUncheckedUpdateManyInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    unitID?: IntFieldUpdateOperationsInput | number
    receiptID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryOrderByRelevanceInput = {
    fields: categoryOrderByRelevanceFieldEnum | categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoryCountOrderByAggregateInput = {
    categoryID?: SortOrder
    categoryname?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    categoryID?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    categoryID?: SortOrder
    categoryname?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    categoryID?: SortOrder
    categoryname?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    categoryID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type ReceiptitemsListRelationFilter = {
    every?: receiptitemsWhereInput
    some?: receiptitemsWhereInput
    none?: receiptitemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type receiptitemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productOrderByRelevanceInput = {
    fields: productOrderByRelevanceFieldEnum | productOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productCountOrderByAggregateInput = {
    productID?: SortOrder
    productname?: SortOrder
    categoryID?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    productID?: SortOrder
    categoryID?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    productID?: SortOrder
    productname?: SortOrder
    categoryID?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    productID?: SortOrder
    productname?: SortOrder
    categoryID?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    productID?: SortOrder
    categoryID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BudgetNullableScalarRelationFilter = {
    is?: budgetWhereInput | null
    isNot?: budgetWhereInput | null
  }

  export type StoreScalarRelationFilter = {
    is?: storeWhereInput
    isNot?: storeWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type receiptOrderByRelevanceInput = {
    fields: receiptOrderByRelevanceFieldEnum | receiptOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type receiptCountOrderByAggregateInput = {
    receiptID?: SortOrder
    usersID?: SortOrder
    receiptname?: SortOrder
    receiptdate?: SortOrder
    futurepurchase?: SortOrder
    storeID?: SortOrder
    budgetID?: SortOrder
  }

  export type receiptAvgOrderByAggregateInput = {
    receiptID?: SortOrder
    usersID?: SortOrder
    storeID?: SortOrder
    budgetID?: SortOrder
  }

  export type receiptMaxOrderByAggregateInput = {
    receiptID?: SortOrder
    usersID?: SortOrder
    receiptname?: SortOrder
    receiptdate?: SortOrder
    futurepurchase?: SortOrder
    storeID?: SortOrder
    budgetID?: SortOrder
  }

  export type receiptMinOrderByAggregateInput = {
    receiptID?: SortOrder
    usersID?: SortOrder
    receiptname?: SortOrder
    receiptdate?: SortOrder
    futurepurchase?: SortOrder
    storeID?: SortOrder
    budgetID?: SortOrder
  }

  export type receiptSumOrderByAggregateInput = {
    receiptID?: SortOrder
    usersID?: SortOrder
    storeID?: SortOrder
    budgetID?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReceiptListRelationFilter = {
    every?: receiptWhereInput
    some?: receiptWhereInput
    none?: receiptWhereInput
  }

  export type receiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storeOrderByRelevanceInput = {
    fields: storeOrderByRelevanceFieldEnum | storeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type storeCountOrderByAggregateInput = {
    storeID?: SortOrder
    storename?: SortOrder
  }

  export type storeAvgOrderByAggregateInput = {
    storeID?: SortOrder
  }

  export type storeMaxOrderByAggregateInput = {
    storeID?: SortOrder
    storename?: SortOrder
  }

  export type storeMinOrderByAggregateInput = {
    storeID?: SortOrder
    storename?: SortOrder
  }

  export type storeSumOrderByAggregateInput = {
    storeID?: SortOrder
  }

  export type unitOrderByRelevanceInput = {
    fields: unitOrderByRelevanceFieldEnum | unitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type unitCountOrderByAggregateInput = {
    unitID?: SortOrder
    unitname?: SortOrder
  }

  export type unitAvgOrderByAggregateInput = {
    unitID?: SortOrder
  }

  export type unitMaxOrderByAggregateInput = {
    unitID?: SortOrder
    unitname?: SortOrder
  }

  export type unitMinOrderByAggregateInput = {
    unitID?: SortOrder
    unitname?: SortOrder
  }

  export type unitSumOrderByAggregateInput = {
    unitID?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    usersID?: SortOrder
    username?: SortOrder
    userpassword?: SortOrder
    gmail?: SortOrder
    permission?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    usersID?: SortOrder
    permission?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    usersID?: SortOrder
    username?: SortOrder
    userpassword?: SortOrder
    gmail?: SortOrder
    permission?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    usersID?: SortOrder
    username?: SortOrder
    userpassword?: SortOrder
    gmail?: SortOrder
    permission?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    usersID?: SortOrder
    permission?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type budgetCountOrderByAggregateInput = {
    budgetID?: SortOrder
    usersID?: SortOrder
    budgetamount?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
  }

  export type budgetAvgOrderByAggregateInput = {
    budgetID?: SortOrder
    usersID?: SortOrder
    budgetamount?: SortOrder
  }

  export type budgetMaxOrderByAggregateInput = {
    budgetID?: SortOrder
    usersID?: SortOrder
    budgetamount?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
  }

  export type budgetMinOrderByAggregateInput = {
    budgetID?: SortOrder
    usersID?: SortOrder
    budgetamount?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
  }

  export type budgetSumOrderByAggregateInput = {
    budgetID?: SortOrder
    usersID?: SortOrder
    budgetamount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: unitWhereInput
    isNot?: unitWhereInput
  }

  export type ReceiptScalarRelationFilter = {
    is?: receiptWhereInput
    isNot?: receiptWhereInput
  }

  export type receiptitemsCountOrderByAggregateInput = {
    receiptitemsID?: SortOrder
    productID?: SortOrder
    unitID?: SortOrder
    receiptID?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type receiptitemsAvgOrderByAggregateInput = {
    receiptitemsID?: SortOrder
    productID?: SortOrder
    unitID?: SortOrder
    receiptID?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type receiptitemsMaxOrderByAggregateInput = {
    receiptitemsID?: SortOrder
    productID?: SortOrder
    unitID?: SortOrder
    receiptID?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type receiptitemsMinOrderByAggregateInput = {
    receiptitemsID?: SortOrder
    productID?: SortOrder
    unitID?: SortOrder
    receiptID?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type receiptitemsSumOrderByAggregateInput = {
    receiptitemsID?: SortOrder
    productID?: SortOrder
    unitID?: SortOrder
    receiptID?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type productCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutProductInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    connect?: categoryWhereUniqueInput
  }

  export type receiptitemsCreateNestedManyWithoutProductInput = {
    create?: XOR<receiptitemsCreateWithoutProductInput, receiptitemsUncheckedCreateWithoutProductInput> | receiptitemsCreateWithoutProductInput[] | receiptitemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutProductInput | receiptitemsCreateOrConnectWithoutProductInput[]
    createMany?: receiptitemsCreateManyProductInputEnvelope
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
  }

  export type receiptitemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<receiptitemsCreateWithoutProductInput, receiptitemsUncheckedCreateWithoutProductInput> | receiptitemsCreateWithoutProductInput[] | receiptitemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutProductInput | receiptitemsCreateOrConnectWithoutProductInput[]
    createMany?: receiptitemsCreateManyProductInputEnvelope
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type categoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    upsert?: categoryUpsertWithoutProductInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProductInput, categoryUpdateWithoutProductInput>, categoryUncheckedUpdateWithoutProductInput>
  }

  export type receiptitemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<receiptitemsCreateWithoutProductInput, receiptitemsUncheckedCreateWithoutProductInput> | receiptitemsCreateWithoutProductInput[] | receiptitemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutProductInput | receiptitemsCreateOrConnectWithoutProductInput[]
    upsert?: receiptitemsUpsertWithWhereUniqueWithoutProductInput | receiptitemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: receiptitemsCreateManyProductInputEnvelope
    set?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    disconnect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    delete?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    update?: receiptitemsUpdateWithWhereUniqueWithoutProductInput | receiptitemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: receiptitemsUpdateManyWithWhereWithoutProductInput | receiptitemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
  }

  export type receiptitemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<receiptitemsCreateWithoutProductInput, receiptitemsUncheckedCreateWithoutProductInput> | receiptitemsCreateWithoutProductInput[] | receiptitemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutProductInput | receiptitemsCreateOrConnectWithoutProductInput[]
    upsert?: receiptitemsUpsertWithWhereUniqueWithoutProductInput | receiptitemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: receiptitemsCreateManyProductInputEnvelope
    set?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    disconnect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    delete?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    update?: receiptitemsUpdateWithWhereUniqueWithoutProductInput | receiptitemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: receiptitemsUpdateManyWithWhereWithoutProductInput | receiptitemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
  }

  export type budgetCreateNestedOneWithoutReceiptInput = {
    create?: XOR<budgetCreateWithoutReceiptInput, budgetUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: budgetCreateOrConnectWithoutReceiptInput
    connect?: budgetWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutReceiptInput = {
    create?: XOR<storeCreateWithoutReceiptInput, storeUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: storeCreateOrConnectWithoutReceiptInput
    connect?: storeWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReceiptInput = {
    create?: XOR<usersCreateWithoutReceiptInput, usersUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceiptInput
    connect?: usersWhereUniqueInput
  }

  export type receiptitemsCreateNestedManyWithoutReceiptInput = {
    create?: XOR<receiptitemsCreateWithoutReceiptInput, receiptitemsUncheckedCreateWithoutReceiptInput> | receiptitemsCreateWithoutReceiptInput[] | receiptitemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutReceiptInput | receiptitemsCreateOrConnectWithoutReceiptInput[]
    createMany?: receiptitemsCreateManyReceiptInputEnvelope
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
  }

  export type receiptitemsUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: XOR<receiptitemsCreateWithoutReceiptInput, receiptitemsUncheckedCreateWithoutReceiptInput> | receiptitemsCreateWithoutReceiptInput[] | receiptitemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutReceiptInput | receiptitemsCreateOrConnectWithoutReceiptInput[]
    createMany?: receiptitemsCreateManyReceiptInputEnvelope
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type budgetUpdateOneWithoutReceiptNestedInput = {
    create?: XOR<budgetCreateWithoutReceiptInput, budgetUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: budgetCreateOrConnectWithoutReceiptInput
    upsert?: budgetUpsertWithoutReceiptInput
    disconnect?: budgetWhereInput | boolean
    delete?: budgetWhereInput | boolean
    connect?: budgetWhereUniqueInput
    update?: XOR<XOR<budgetUpdateToOneWithWhereWithoutReceiptInput, budgetUpdateWithoutReceiptInput>, budgetUncheckedUpdateWithoutReceiptInput>
  }

  export type storeUpdateOneRequiredWithoutReceiptNestedInput = {
    create?: XOR<storeCreateWithoutReceiptInput, storeUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: storeCreateOrConnectWithoutReceiptInput
    upsert?: storeUpsertWithoutReceiptInput
    connect?: storeWhereUniqueInput
    update?: XOR<XOR<storeUpdateToOneWithWhereWithoutReceiptInput, storeUpdateWithoutReceiptInput>, storeUncheckedUpdateWithoutReceiptInput>
  }

  export type usersUpdateOneRequiredWithoutReceiptNestedInput = {
    create?: XOR<usersCreateWithoutReceiptInput, usersUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceiptInput
    upsert?: usersUpsertWithoutReceiptInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReceiptInput, usersUpdateWithoutReceiptInput>, usersUncheckedUpdateWithoutReceiptInput>
  }

  export type receiptitemsUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<receiptitemsCreateWithoutReceiptInput, receiptitemsUncheckedCreateWithoutReceiptInput> | receiptitemsCreateWithoutReceiptInput[] | receiptitemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutReceiptInput | receiptitemsCreateOrConnectWithoutReceiptInput[]
    upsert?: receiptitemsUpsertWithWhereUniqueWithoutReceiptInput | receiptitemsUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: receiptitemsCreateManyReceiptInputEnvelope
    set?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    disconnect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    delete?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    update?: receiptitemsUpdateWithWhereUniqueWithoutReceiptInput | receiptitemsUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: receiptitemsUpdateManyWithWhereWithoutReceiptInput | receiptitemsUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type receiptitemsUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<receiptitemsCreateWithoutReceiptInput, receiptitemsUncheckedCreateWithoutReceiptInput> | receiptitemsCreateWithoutReceiptInput[] | receiptitemsUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutReceiptInput | receiptitemsCreateOrConnectWithoutReceiptInput[]
    upsert?: receiptitemsUpsertWithWhereUniqueWithoutReceiptInput | receiptitemsUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: receiptitemsCreateManyReceiptInputEnvelope
    set?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    disconnect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    delete?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    update?: receiptitemsUpdateWithWhereUniqueWithoutReceiptInput | receiptitemsUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: receiptitemsUpdateManyWithWhereWithoutReceiptInput | receiptitemsUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
  }

  export type receiptCreateNestedManyWithoutStoreInput = {
    create?: XOR<receiptCreateWithoutStoreInput, receiptUncheckedCreateWithoutStoreInput> | receiptCreateWithoutStoreInput[] | receiptUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutStoreInput | receiptCreateOrConnectWithoutStoreInput[]
    createMany?: receiptCreateManyStoreInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type receiptUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<receiptCreateWithoutStoreInput, receiptUncheckedCreateWithoutStoreInput> | receiptCreateWithoutStoreInput[] | receiptUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutStoreInput | receiptCreateOrConnectWithoutStoreInput[]
    createMany?: receiptCreateManyStoreInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type receiptUpdateManyWithoutStoreNestedInput = {
    create?: XOR<receiptCreateWithoutStoreInput, receiptUncheckedCreateWithoutStoreInput> | receiptCreateWithoutStoreInput[] | receiptUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutStoreInput | receiptCreateOrConnectWithoutStoreInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutStoreInput | receiptUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: receiptCreateManyStoreInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutStoreInput | receiptUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutStoreInput | receiptUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type receiptUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<receiptCreateWithoutStoreInput, receiptUncheckedCreateWithoutStoreInput> | receiptCreateWithoutStoreInput[] | receiptUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutStoreInput | receiptCreateOrConnectWithoutStoreInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutStoreInput | receiptUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: receiptCreateManyStoreInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutStoreInput | receiptUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutStoreInput | receiptUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type receiptitemsCreateNestedManyWithoutUnitInput = {
    create?: XOR<receiptitemsCreateWithoutUnitInput, receiptitemsUncheckedCreateWithoutUnitInput> | receiptitemsCreateWithoutUnitInput[] | receiptitemsUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutUnitInput | receiptitemsCreateOrConnectWithoutUnitInput[]
    createMany?: receiptitemsCreateManyUnitInputEnvelope
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
  }

  export type receiptitemsUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<receiptitemsCreateWithoutUnitInput, receiptitemsUncheckedCreateWithoutUnitInput> | receiptitemsCreateWithoutUnitInput[] | receiptitemsUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutUnitInput | receiptitemsCreateOrConnectWithoutUnitInput[]
    createMany?: receiptitemsCreateManyUnitInputEnvelope
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
  }

  export type receiptitemsUpdateManyWithoutUnitNestedInput = {
    create?: XOR<receiptitemsCreateWithoutUnitInput, receiptitemsUncheckedCreateWithoutUnitInput> | receiptitemsCreateWithoutUnitInput[] | receiptitemsUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutUnitInput | receiptitemsCreateOrConnectWithoutUnitInput[]
    upsert?: receiptitemsUpsertWithWhereUniqueWithoutUnitInput | receiptitemsUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: receiptitemsCreateManyUnitInputEnvelope
    set?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    disconnect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    delete?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    update?: receiptitemsUpdateWithWhereUniqueWithoutUnitInput | receiptitemsUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: receiptitemsUpdateManyWithWhereWithoutUnitInput | receiptitemsUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
  }

  export type receiptitemsUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<receiptitemsCreateWithoutUnitInput, receiptitemsUncheckedCreateWithoutUnitInput> | receiptitemsCreateWithoutUnitInput[] | receiptitemsUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: receiptitemsCreateOrConnectWithoutUnitInput | receiptitemsCreateOrConnectWithoutUnitInput[]
    upsert?: receiptitemsUpsertWithWhereUniqueWithoutUnitInput | receiptitemsUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: receiptitemsCreateManyUnitInputEnvelope
    set?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    disconnect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    delete?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    connect?: receiptitemsWhereUniqueInput | receiptitemsWhereUniqueInput[]
    update?: receiptitemsUpdateWithWhereUniqueWithoutUnitInput | receiptitemsUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: receiptitemsUpdateManyWithWhereWithoutUnitInput | receiptitemsUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
  }

  export type receiptCreateNestedManyWithoutUsersInput = {
    create?: XOR<receiptCreateWithoutUsersInput, receiptUncheckedCreateWithoutUsersInput> | receiptCreateWithoutUsersInput[] | receiptUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutUsersInput | receiptCreateOrConnectWithoutUsersInput[]
    createMany?: receiptCreateManyUsersInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type receiptUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<receiptCreateWithoutUsersInput, receiptUncheckedCreateWithoutUsersInput> | receiptCreateWithoutUsersInput[] | receiptUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutUsersInput | receiptCreateOrConnectWithoutUsersInput[]
    createMany?: receiptCreateManyUsersInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type receiptUpdateManyWithoutUsersNestedInput = {
    create?: XOR<receiptCreateWithoutUsersInput, receiptUncheckedCreateWithoutUsersInput> | receiptCreateWithoutUsersInput[] | receiptUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutUsersInput | receiptCreateOrConnectWithoutUsersInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutUsersInput | receiptUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: receiptCreateManyUsersInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutUsersInput | receiptUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutUsersInput | receiptUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type receiptUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<receiptCreateWithoutUsersInput, receiptUncheckedCreateWithoutUsersInput> | receiptCreateWithoutUsersInput[] | receiptUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutUsersInput | receiptCreateOrConnectWithoutUsersInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutUsersInput | receiptUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: receiptCreateManyUsersInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutUsersInput | receiptUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutUsersInput | receiptUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type receiptCreateNestedManyWithoutBudgetInput = {
    create?: XOR<receiptCreateWithoutBudgetInput, receiptUncheckedCreateWithoutBudgetInput> | receiptCreateWithoutBudgetInput[] | receiptUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutBudgetInput | receiptCreateOrConnectWithoutBudgetInput[]
    createMany?: receiptCreateManyBudgetInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type receiptUncheckedCreateNestedManyWithoutBudgetInput = {
    create?: XOR<receiptCreateWithoutBudgetInput, receiptUncheckedCreateWithoutBudgetInput> | receiptCreateWithoutBudgetInput[] | receiptUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutBudgetInput | receiptCreateOrConnectWithoutBudgetInput[]
    createMany?: receiptCreateManyBudgetInputEnvelope
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type receiptUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<receiptCreateWithoutBudgetInput, receiptUncheckedCreateWithoutBudgetInput> | receiptCreateWithoutBudgetInput[] | receiptUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutBudgetInput | receiptCreateOrConnectWithoutBudgetInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutBudgetInput | receiptUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: receiptCreateManyBudgetInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutBudgetInput | receiptUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutBudgetInput | receiptUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type receiptUncheckedUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<receiptCreateWithoutBudgetInput, receiptUncheckedCreateWithoutBudgetInput> | receiptCreateWithoutBudgetInput[] | receiptUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: receiptCreateOrConnectWithoutBudgetInput | receiptCreateOrConnectWithoutBudgetInput[]
    upsert?: receiptUpsertWithWhereUniqueWithoutBudgetInput | receiptUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: receiptCreateManyBudgetInputEnvelope
    set?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    disconnect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    delete?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    connect?: receiptWhereUniqueInput | receiptWhereUniqueInput[]
    update?: receiptUpdateWithWhereUniqueWithoutBudgetInput | receiptUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: receiptUpdateManyWithWhereWithoutBudgetInput | receiptUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: receiptScalarWhereInput | receiptScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutReceiptitemsInput = {
    create?: XOR<productCreateWithoutReceiptitemsInput, productUncheckedCreateWithoutReceiptitemsInput>
    connectOrCreate?: productCreateOrConnectWithoutReceiptitemsInput
    connect?: productWhereUniqueInput
  }

  export type unitCreateNestedOneWithoutReceiptitemsInput = {
    create?: XOR<unitCreateWithoutReceiptitemsInput, unitUncheckedCreateWithoutReceiptitemsInput>
    connectOrCreate?: unitCreateOrConnectWithoutReceiptitemsInput
    connect?: unitWhereUniqueInput
  }

  export type receiptCreateNestedOneWithoutReceiptitemsInput = {
    create?: XOR<receiptCreateWithoutReceiptitemsInput, receiptUncheckedCreateWithoutReceiptitemsInput>
    connectOrCreate?: receiptCreateOrConnectWithoutReceiptitemsInput
    connect?: receiptWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutReceiptitemsNestedInput = {
    create?: XOR<productCreateWithoutReceiptitemsInput, productUncheckedCreateWithoutReceiptitemsInput>
    connectOrCreate?: productCreateOrConnectWithoutReceiptitemsInput
    upsert?: productUpsertWithoutReceiptitemsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutReceiptitemsInput, productUpdateWithoutReceiptitemsInput>, productUncheckedUpdateWithoutReceiptitemsInput>
  }

  export type unitUpdateOneRequiredWithoutReceiptitemsNestedInput = {
    create?: XOR<unitCreateWithoutReceiptitemsInput, unitUncheckedCreateWithoutReceiptitemsInput>
    connectOrCreate?: unitCreateOrConnectWithoutReceiptitemsInput
    upsert?: unitUpsertWithoutReceiptitemsInput
    connect?: unitWhereUniqueInput
    update?: XOR<XOR<unitUpdateToOneWithWhereWithoutReceiptitemsInput, unitUpdateWithoutReceiptitemsInput>, unitUncheckedUpdateWithoutReceiptitemsInput>
  }

  export type receiptUpdateOneRequiredWithoutReceiptitemsNestedInput = {
    create?: XOR<receiptCreateWithoutReceiptitemsInput, receiptUncheckedCreateWithoutReceiptitemsInput>
    connectOrCreate?: receiptCreateOrConnectWithoutReceiptitemsInput
    upsert?: receiptUpsertWithoutReceiptitemsInput
    connect?: receiptWhereUniqueInput
    update?: XOR<XOR<receiptUpdateToOneWithWhereWithoutReceiptitemsInput, receiptUpdateWithoutReceiptitemsInput>, receiptUncheckedUpdateWithoutReceiptitemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type productCreateWithoutCategoryInput = {
    productname?: string | null
    receiptitems?: receiptitemsCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCategoryInput = {
    productID?: number
    productname?: string | null
    receiptitems?: receiptitemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCategoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productCreateManyCategoryInputEnvelope = {
    data: productCreateManyCategoryInput | productCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
  }

  export type productUpdateManyWithWhereWithoutCategoryInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    productID?: IntFilter<"product"> | number
    productname?: StringNullableFilter<"product"> | string | null
    categoryID?: IntFilter<"product"> | number
  }

  export type categoryCreateWithoutProductInput = {
    categoryname: string
  }

  export type categoryUncheckedCreateWithoutProductInput = {
    categoryID?: number
    categoryname: string
  }

  export type categoryCreateOrConnectWithoutProductInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
  }

  export type receiptitemsCreateWithoutProductInput = {
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
    unit: unitCreateNestedOneWithoutReceiptitemsInput
    receipt: receiptCreateNestedOneWithoutReceiptitemsInput
  }

  export type receiptitemsUncheckedCreateWithoutProductInput = {
    receiptitemsID?: number
    unitID: number
    receiptID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsCreateOrConnectWithoutProductInput = {
    where: receiptitemsWhereUniqueInput
    create: XOR<receiptitemsCreateWithoutProductInput, receiptitemsUncheckedCreateWithoutProductInput>
  }

  export type receiptitemsCreateManyProductInputEnvelope = {
    data: receiptitemsCreateManyProductInput | receiptitemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutProductInput = {
    update: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProductInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
  }

  export type categoryUpdateWithoutProductInput = {
    categoryname?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutProductInput = {
    categoryID?: IntFieldUpdateOperationsInput | number
    categoryname?: StringFieldUpdateOperationsInput | string
  }

  export type receiptitemsUpsertWithWhereUniqueWithoutProductInput = {
    where: receiptitemsWhereUniqueInput
    update: XOR<receiptitemsUpdateWithoutProductInput, receiptitemsUncheckedUpdateWithoutProductInput>
    create: XOR<receiptitemsCreateWithoutProductInput, receiptitemsUncheckedCreateWithoutProductInput>
  }

  export type receiptitemsUpdateWithWhereUniqueWithoutProductInput = {
    where: receiptitemsWhereUniqueInput
    data: XOR<receiptitemsUpdateWithoutProductInput, receiptitemsUncheckedUpdateWithoutProductInput>
  }

  export type receiptitemsUpdateManyWithWhereWithoutProductInput = {
    where: receiptitemsScalarWhereInput
    data: XOR<receiptitemsUpdateManyMutationInput, receiptitemsUncheckedUpdateManyWithoutProductInput>
  }

  export type receiptitemsScalarWhereInput = {
    AND?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
    OR?: receiptitemsScalarWhereInput[]
    NOT?: receiptitemsScalarWhereInput | receiptitemsScalarWhereInput[]
    receiptitemsID?: IntFilter<"receiptitems"> | number
    productID?: IntFilter<"receiptitems"> | number
    unitID?: IntFilter<"receiptitems"> | number
    receiptID?: IntFilter<"receiptitems"> | number
    price?: DecimalNullableFilter<"receiptitems"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"receiptitems"> | number | null
    amount?: IntNullableFilter<"receiptitems"> | number | null
  }

  export type budgetCreateWithoutReceiptInput = {
    usersID: number
    budgetamount?: Decimal | DecimalJsLike | number | string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
  }

  export type budgetUncheckedCreateWithoutReceiptInput = {
    budgetID?: number
    usersID: number
    budgetamount?: Decimal | DecimalJsLike | number | string | null
    startdate?: Date | string | null
    enddate?: Date | string | null
  }

  export type budgetCreateOrConnectWithoutReceiptInput = {
    where: budgetWhereUniqueInput
    create: XOR<budgetCreateWithoutReceiptInput, budgetUncheckedCreateWithoutReceiptInput>
  }

  export type storeCreateWithoutReceiptInput = {
    storename?: string | null
  }

  export type storeUncheckedCreateWithoutReceiptInput = {
    storeID?: number
    storename?: string | null
  }

  export type storeCreateOrConnectWithoutReceiptInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutReceiptInput, storeUncheckedCreateWithoutReceiptInput>
  }

  export type usersCreateWithoutReceiptInput = {
    username: string
    userpassword: string
    gmail: string
    permission: number
  }

  export type usersUncheckedCreateWithoutReceiptInput = {
    usersID?: number
    username: string
    userpassword: string
    gmail: string
    permission: number
  }

  export type usersCreateOrConnectWithoutReceiptInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReceiptInput, usersUncheckedCreateWithoutReceiptInput>
  }

  export type receiptitemsCreateWithoutReceiptInput = {
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
    product: productCreateNestedOneWithoutReceiptitemsInput
    unit: unitCreateNestedOneWithoutReceiptitemsInput
  }

  export type receiptitemsUncheckedCreateWithoutReceiptInput = {
    receiptitemsID?: number
    productID: number
    unitID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsCreateOrConnectWithoutReceiptInput = {
    where: receiptitemsWhereUniqueInput
    create: XOR<receiptitemsCreateWithoutReceiptInput, receiptitemsUncheckedCreateWithoutReceiptInput>
  }

  export type receiptitemsCreateManyReceiptInputEnvelope = {
    data: receiptitemsCreateManyReceiptInput | receiptitemsCreateManyReceiptInput[]
    skipDuplicates?: boolean
  }

  export type budgetUpsertWithoutReceiptInput = {
    update: XOR<budgetUpdateWithoutReceiptInput, budgetUncheckedUpdateWithoutReceiptInput>
    create: XOR<budgetCreateWithoutReceiptInput, budgetUncheckedCreateWithoutReceiptInput>
    where?: budgetWhereInput
  }

  export type budgetUpdateToOneWithWhereWithoutReceiptInput = {
    where?: budgetWhereInput
    data: XOR<budgetUpdateWithoutReceiptInput, budgetUncheckedUpdateWithoutReceiptInput>
  }

  export type budgetUpdateWithoutReceiptInput = {
    usersID?: IntFieldUpdateOperationsInput | number
    budgetamount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type budgetUncheckedUpdateWithoutReceiptInput = {
    budgetID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    budgetamount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storeUpsertWithoutReceiptInput = {
    update: XOR<storeUpdateWithoutReceiptInput, storeUncheckedUpdateWithoutReceiptInput>
    create: XOR<storeCreateWithoutReceiptInput, storeUncheckedCreateWithoutReceiptInput>
    where?: storeWhereInput
  }

  export type storeUpdateToOneWithWhereWithoutReceiptInput = {
    where?: storeWhereInput
    data: XOR<storeUpdateWithoutReceiptInput, storeUncheckedUpdateWithoutReceiptInput>
  }

  export type storeUpdateWithoutReceiptInput = {
    storename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storeUncheckedUpdateWithoutReceiptInput = {
    storeID?: IntFieldUpdateOperationsInput | number
    storename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpsertWithoutReceiptInput = {
    update: XOR<usersUpdateWithoutReceiptInput, usersUncheckedUpdateWithoutReceiptInput>
    create: XOR<usersCreateWithoutReceiptInput, usersUncheckedCreateWithoutReceiptInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReceiptInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReceiptInput, usersUncheckedUpdateWithoutReceiptInput>
  }

  export type usersUpdateWithoutReceiptInput = {
    username?: StringFieldUpdateOperationsInput | string
    userpassword?: StringFieldUpdateOperationsInput | string
    gmail?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateWithoutReceiptInput = {
    usersID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    userpassword?: StringFieldUpdateOperationsInput | string
    gmail?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
  }

  export type receiptitemsUpsertWithWhereUniqueWithoutReceiptInput = {
    where: receiptitemsWhereUniqueInput
    update: XOR<receiptitemsUpdateWithoutReceiptInput, receiptitemsUncheckedUpdateWithoutReceiptInput>
    create: XOR<receiptitemsCreateWithoutReceiptInput, receiptitemsUncheckedCreateWithoutReceiptInput>
  }

  export type receiptitemsUpdateWithWhereUniqueWithoutReceiptInput = {
    where: receiptitemsWhereUniqueInput
    data: XOR<receiptitemsUpdateWithoutReceiptInput, receiptitemsUncheckedUpdateWithoutReceiptInput>
  }

  export type receiptitemsUpdateManyWithWhereWithoutReceiptInput = {
    where: receiptitemsScalarWhereInput
    data: XOR<receiptitemsUpdateManyMutationInput, receiptitemsUncheckedUpdateManyWithoutReceiptInput>
  }

  export type receiptCreateWithoutStoreInput = {
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    budget?: budgetCreateNestedOneWithoutReceiptInput
    users: usersCreateNestedOneWithoutReceiptInput
    receiptitems?: receiptitemsCreateNestedManyWithoutReceiptInput
  }

  export type receiptUncheckedCreateWithoutStoreInput = {
    receiptID?: number
    usersID: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    budgetID?: number | null
    receiptitems?: receiptitemsUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptCreateOrConnectWithoutStoreInput = {
    where: receiptWhereUniqueInput
    create: XOR<receiptCreateWithoutStoreInput, receiptUncheckedCreateWithoutStoreInput>
  }

  export type receiptCreateManyStoreInputEnvelope = {
    data: receiptCreateManyStoreInput | receiptCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type receiptUpsertWithWhereUniqueWithoutStoreInput = {
    where: receiptWhereUniqueInput
    update: XOR<receiptUpdateWithoutStoreInput, receiptUncheckedUpdateWithoutStoreInput>
    create: XOR<receiptCreateWithoutStoreInput, receiptUncheckedCreateWithoutStoreInput>
  }

  export type receiptUpdateWithWhereUniqueWithoutStoreInput = {
    where: receiptWhereUniqueInput
    data: XOR<receiptUpdateWithoutStoreInput, receiptUncheckedUpdateWithoutStoreInput>
  }

  export type receiptUpdateManyWithWhereWithoutStoreInput = {
    where: receiptScalarWhereInput
    data: XOR<receiptUpdateManyMutationInput, receiptUncheckedUpdateManyWithoutStoreInput>
  }

  export type receiptScalarWhereInput = {
    AND?: receiptScalarWhereInput | receiptScalarWhereInput[]
    OR?: receiptScalarWhereInput[]
    NOT?: receiptScalarWhereInput | receiptScalarWhereInput[]
    receiptID?: IntFilter<"receipt"> | number
    usersID?: IntFilter<"receipt"> | number
    receiptname?: StringNullableFilter<"receipt"> | string | null
    receiptdate?: DateTimeNullableFilter<"receipt"> | Date | string | null
    futurepurchase?: BoolNullableFilter<"receipt"> | boolean | null
    storeID?: IntFilter<"receipt"> | number
    budgetID?: IntNullableFilter<"receipt"> | number | null
  }

  export type receiptitemsCreateWithoutUnitInput = {
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
    product: productCreateNestedOneWithoutReceiptitemsInput
    receipt: receiptCreateNestedOneWithoutReceiptitemsInput
  }

  export type receiptitemsUncheckedCreateWithoutUnitInput = {
    receiptitemsID?: number
    productID: number
    receiptID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsCreateOrConnectWithoutUnitInput = {
    where: receiptitemsWhereUniqueInput
    create: XOR<receiptitemsCreateWithoutUnitInput, receiptitemsUncheckedCreateWithoutUnitInput>
  }

  export type receiptitemsCreateManyUnitInputEnvelope = {
    data: receiptitemsCreateManyUnitInput | receiptitemsCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type receiptitemsUpsertWithWhereUniqueWithoutUnitInput = {
    where: receiptitemsWhereUniqueInput
    update: XOR<receiptitemsUpdateWithoutUnitInput, receiptitemsUncheckedUpdateWithoutUnitInput>
    create: XOR<receiptitemsCreateWithoutUnitInput, receiptitemsUncheckedCreateWithoutUnitInput>
  }

  export type receiptitemsUpdateWithWhereUniqueWithoutUnitInput = {
    where: receiptitemsWhereUniqueInput
    data: XOR<receiptitemsUpdateWithoutUnitInput, receiptitemsUncheckedUpdateWithoutUnitInput>
  }

  export type receiptitemsUpdateManyWithWhereWithoutUnitInput = {
    where: receiptitemsScalarWhereInput
    data: XOR<receiptitemsUpdateManyMutationInput, receiptitemsUncheckedUpdateManyWithoutUnitInput>
  }

  export type receiptCreateWithoutUsersInput = {
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    budget?: budgetCreateNestedOneWithoutReceiptInput
    store: storeCreateNestedOneWithoutReceiptInput
    receiptitems?: receiptitemsCreateNestedManyWithoutReceiptInput
  }

  export type receiptUncheckedCreateWithoutUsersInput = {
    receiptID?: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    storeID: number
    budgetID?: number | null
    receiptitems?: receiptitemsUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptCreateOrConnectWithoutUsersInput = {
    where: receiptWhereUniqueInput
    create: XOR<receiptCreateWithoutUsersInput, receiptUncheckedCreateWithoutUsersInput>
  }

  export type receiptCreateManyUsersInputEnvelope = {
    data: receiptCreateManyUsersInput | receiptCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type receiptUpsertWithWhereUniqueWithoutUsersInput = {
    where: receiptWhereUniqueInput
    update: XOR<receiptUpdateWithoutUsersInput, receiptUncheckedUpdateWithoutUsersInput>
    create: XOR<receiptCreateWithoutUsersInput, receiptUncheckedCreateWithoutUsersInput>
  }

  export type receiptUpdateWithWhereUniqueWithoutUsersInput = {
    where: receiptWhereUniqueInput
    data: XOR<receiptUpdateWithoutUsersInput, receiptUncheckedUpdateWithoutUsersInput>
  }

  export type receiptUpdateManyWithWhereWithoutUsersInput = {
    where: receiptScalarWhereInput
    data: XOR<receiptUpdateManyMutationInput, receiptUncheckedUpdateManyWithoutUsersInput>
  }

  export type receiptCreateWithoutBudgetInput = {
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    store: storeCreateNestedOneWithoutReceiptInput
    users: usersCreateNestedOneWithoutReceiptInput
    receiptitems?: receiptitemsCreateNestedManyWithoutReceiptInput
  }

  export type receiptUncheckedCreateWithoutBudgetInput = {
    receiptID?: number
    usersID: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    storeID: number
    receiptitems?: receiptitemsUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type receiptCreateOrConnectWithoutBudgetInput = {
    where: receiptWhereUniqueInput
    create: XOR<receiptCreateWithoutBudgetInput, receiptUncheckedCreateWithoutBudgetInput>
  }

  export type receiptCreateManyBudgetInputEnvelope = {
    data: receiptCreateManyBudgetInput | receiptCreateManyBudgetInput[]
    skipDuplicates?: boolean
  }

  export type receiptUpsertWithWhereUniqueWithoutBudgetInput = {
    where: receiptWhereUniqueInput
    update: XOR<receiptUpdateWithoutBudgetInput, receiptUncheckedUpdateWithoutBudgetInput>
    create: XOR<receiptCreateWithoutBudgetInput, receiptUncheckedCreateWithoutBudgetInput>
  }

  export type receiptUpdateWithWhereUniqueWithoutBudgetInput = {
    where: receiptWhereUniqueInput
    data: XOR<receiptUpdateWithoutBudgetInput, receiptUncheckedUpdateWithoutBudgetInput>
  }

  export type receiptUpdateManyWithWhereWithoutBudgetInput = {
    where: receiptScalarWhereInput
    data: XOR<receiptUpdateManyMutationInput, receiptUncheckedUpdateManyWithoutBudgetInput>
  }

  export type productCreateWithoutReceiptitemsInput = {
    productname?: string | null
    category: categoryCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutReceiptitemsInput = {
    productID?: number
    productname?: string | null
    categoryID: number
  }

  export type productCreateOrConnectWithoutReceiptitemsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutReceiptitemsInput, productUncheckedCreateWithoutReceiptitemsInput>
  }

  export type unitCreateWithoutReceiptitemsInput = {
    unitname: string
  }

  export type unitUncheckedCreateWithoutReceiptitemsInput = {
    unitID?: number
    unitname: string
  }

  export type unitCreateOrConnectWithoutReceiptitemsInput = {
    where: unitWhereUniqueInput
    create: XOR<unitCreateWithoutReceiptitemsInput, unitUncheckedCreateWithoutReceiptitemsInput>
  }

  export type receiptCreateWithoutReceiptitemsInput = {
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    budget?: budgetCreateNestedOneWithoutReceiptInput
    store: storeCreateNestedOneWithoutReceiptInput
    users: usersCreateNestedOneWithoutReceiptInput
  }

  export type receiptUncheckedCreateWithoutReceiptitemsInput = {
    receiptID?: number
    usersID: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    storeID: number
    budgetID?: number | null
  }

  export type receiptCreateOrConnectWithoutReceiptitemsInput = {
    where: receiptWhereUniqueInput
    create: XOR<receiptCreateWithoutReceiptitemsInput, receiptUncheckedCreateWithoutReceiptitemsInput>
  }

  export type productUpsertWithoutReceiptitemsInput = {
    update: XOR<productUpdateWithoutReceiptitemsInput, productUncheckedUpdateWithoutReceiptitemsInput>
    create: XOR<productCreateWithoutReceiptitemsInput, productUncheckedCreateWithoutReceiptitemsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutReceiptitemsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutReceiptitemsInput, productUncheckedUpdateWithoutReceiptitemsInput>
  }

  export type productUpdateWithoutReceiptitemsInput = {
    productname?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutReceiptitemsInput = {
    productID?: IntFieldUpdateOperationsInput | number
    productname?: NullableStringFieldUpdateOperationsInput | string | null
    categoryID?: IntFieldUpdateOperationsInput | number
  }

  export type unitUpsertWithoutReceiptitemsInput = {
    update: XOR<unitUpdateWithoutReceiptitemsInput, unitUncheckedUpdateWithoutReceiptitemsInput>
    create: XOR<unitCreateWithoutReceiptitemsInput, unitUncheckedCreateWithoutReceiptitemsInput>
    where?: unitWhereInput
  }

  export type unitUpdateToOneWithWhereWithoutReceiptitemsInput = {
    where?: unitWhereInput
    data: XOR<unitUpdateWithoutReceiptitemsInput, unitUncheckedUpdateWithoutReceiptitemsInput>
  }

  export type unitUpdateWithoutReceiptitemsInput = {
    unitname?: StringFieldUpdateOperationsInput | string
  }

  export type unitUncheckedUpdateWithoutReceiptitemsInput = {
    unitID?: IntFieldUpdateOperationsInput | number
    unitname?: StringFieldUpdateOperationsInput | string
  }

  export type receiptUpsertWithoutReceiptitemsInput = {
    update: XOR<receiptUpdateWithoutReceiptitemsInput, receiptUncheckedUpdateWithoutReceiptitemsInput>
    create: XOR<receiptCreateWithoutReceiptitemsInput, receiptUncheckedCreateWithoutReceiptitemsInput>
    where?: receiptWhereInput
  }

  export type receiptUpdateToOneWithWhereWithoutReceiptitemsInput = {
    where?: receiptWhereInput
    data: XOR<receiptUpdateWithoutReceiptitemsInput, receiptUncheckedUpdateWithoutReceiptitemsInput>
  }

  export type receiptUpdateWithoutReceiptitemsInput = {
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    budget?: budgetUpdateOneWithoutReceiptNestedInput
    store?: storeUpdateOneRequiredWithoutReceiptNestedInput
    users?: usersUpdateOneRequiredWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateWithoutReceiptitemsInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storeID?: IntFieldUpdateOperationsInput | number
    budgetID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productCreateManyCategoryInput = {
    productID?: number
    productname?: string | null
  }

  export type productUpdateWithoutCategoryInput = {
    productname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptitems?: receiptitemsUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCategoryInput = {
    productID?: IntFieldUpdateOperationsInput | number
    productname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptitems?: receiptitemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutCategoryInput = {
    productID?: IntFieldUpdateOperationsInput | number
    productname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receiptitemsCreateManyProductInput = {
    receiptitemsID?: number
    unitID: number
    receiptID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsUpdateWithoutProductInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: unitUpdateOneRequiredWithoutReceiptitemsNestedInput
    receipt?: receiptUpdateOneRequiredWithoutReceiptitemsNestedInput
  }

  export type receiptitemsUncheckedUpdateWithoutProductInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    unitID?: IntFieldUpdateOperationsInput | number
    receiptID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptitemsUncheckedUpdateManyWithoutProductInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    unitID?: IntFieldUpdateOperationsInput | number
    receiptID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptitemsCreateManyReceiptInput = {
    receiptitemsID?: number
    productID: number
    unitID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsUpdateWithoutReceiptInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    product?: productUpdateOneRequiredWithoutReceiptitemsNestedInput
    unit?: unitUpdateOneRequiredWithoutReceiptitemsNestedInput
  }

  export type receiptitemsUncheckedUpdateWithoutReceiptInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    unitID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptitemsUncheckedUpdateManyWithoutReceiptInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    unitID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptCreateManyStoreInput = {
    receiptID?: number
    usersID: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    budgetID?: number | null
  }

  export type receiptUpdateWithoutStoreInput = {
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    budget?: budgetUpdateOneWithoutReceiptNestedInput
    users?: usersUpdateOneRequiredWithoutReceiptNestedInput
    receiptitems?: receiptitemsUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateWithoutStoreInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    budgetID?: NullableIntFieldUpdateOperationsInput | number | null
    receiptitems?: receiptitemsUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateManyWithoutStoreInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    budgetID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptitemsCreateManyUnitInput = {
    receiptitemsID?: number
    productID: number
    receiptID: number
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    amount?: number | null
  }

  export type receiptitemsUpdateWithoutUnitInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    product?: productUpdateOneRequiredWithoutReceiptitemsNestedInput
    receipt?: receiptUpdateOneRequiredWithoutReceiptitemsNestedInput
  }

  export type receiptitemsUncheckedUpdateWithoutUnitInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    receiptID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptitemsUncheckedUpdateManyWithoutUnitInput = {
    receiptitemsID?: IntFieldUpdateOperationsInput | number
    productID?: IntFieldUpdateOperationsInput | number
    receiptID?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptCreateManyUsersInput = {
    receiptID?: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    storeID: number
    budgetID?: number | null
  }

  export type receiptUpdateWithoutUsersInput = {
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    budget?: budgetUpdateOneWithoutReceiptNestedInput
    store?: storeUpdateOneRequiredWithoutReceiptNestedInput
    receiptitems?: receiptitemsUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateWithoutUsersInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storeID?: IntFieldUpdateOperationsInput | number
    budgetID?: NullableIntFieldUpdateOperationsInput | number | null
    receiptitems?: receiptitemsUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateManyWithoutUsersInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storeID?: IntFieldUpdateOperationsInput | number
    budgetID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type receiptCreateManyBudgetInput = {
    receiptID?: number
    usersID: number
    receiptname?: string | null
    receiptdate?: Date | string | null
    futurepurchase?: boolean | null
    storeID: number
  }

  export type receiptUpdateWithoutBudgetInput = {
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    store?: storeUpdateOneRequiredWithoutReceiptNestedInput
    users?: usersUpdateOneRequiredWithoutReceiptNestedInput
    receiptitems?: receiptitemsUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateWithoutBudgetInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storeID?: IntFieldUpdateOperationsInput | number
    receiptitems?: receiptitemsUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type receiptUncheckedUpdateManyWithoutBudgetInput = {
    receiptID?: IntFieldUpdateOperationsInput | number
    usersID?: IntFieldUpdateOperationsInput | number
    receiptname?: NullableStringFieldUpdateOperationsInput | string | null
    receiptdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    futurepurchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storeID?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}