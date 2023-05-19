
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model carts
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type carts = {
  quantity: number
  user_id: string
  product_id: string
  cart_id: string
}

/**
 * Model developers
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type developers = {
  developer_id: string
  username: string
  password: string
  email: string
  full_name: string
  display_name: string
  status: number
  balance: number
}

/**
 * Model order_items
 * 
 */
export type order_items = {
  id: number
  quantity: number
  order_id: string
  product_id: string
}

/**
 * Model orders
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type orders = {
  order_id: string
  invoice: string
  date: Date
  total: number
  status: number
  user_id: string
  bank: string
  va_number: string | null
}

/**
 * Model products
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type products = {
  product_id: string
  name: string
  description: string
  price: number
  stock: number
  status: number
  developer_id: string
  image: string
}

/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type users = {
  user_id: string
  status: number
  customer_id: string
  developer_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carts
 * const carts = await prisma.carts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Carts
   * const carts = await prisma.carts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<GlobalReject>;

  /**
   * `prisma.developers`: Exposes CRUD operations for the **developers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developers
    * const developers = await prisma.developers.findMany()
    * ```
    */
  get developers(): Prisma.developersDelegate<GlobalReject>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<GlobalReject>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<GlobalReject>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    carts: 'carts',
    developers: 'developers',
    order_items: 'order_items',
    orders: 'orders',
    products: 'products',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DevelopersCountOutputType
   */


  export type DevelopersCountOutputType = {
    products: number
    users: number
  }

  export type DevelopersCountOutputTypeSelect = {
    products?: boolean
    users?: boolean
  }

  export type DevelopersCountOutputTypeGetPayload<S extends boolean | null | undefined | DevelopersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DevelopersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DevelopersCountOutputTypeArgs)
    ? DevelopersCountOutputType 
    : S extends { select: any } & (DevelopersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DevelopersCountOutputType ? DevelopersCountOutputType[P] : never
  } 
      : DevelopersCountOutputType




  // Custom InputTypes

  /**
   * DevelopersCountOutputType without action
   */
  export type DevelopersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DevelopersCountOutputType
     */
    select?: DevelopersCountOutputTypeSelect | null
  }



  /**
   * Count Type OrdersCountOutputType
   */


  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect = {
    order_items?: boolean
  }

  export type OrdersCountOutputTypeGetPayload<S extends boolean | null | undefined | OrdersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrdersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrdersCountOutputTypeArgs)
    ? OrdersCountOutputType 
    : S extends { select: any } & (OrdersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrdersCountOutputType ? OrdersCountOutputType[P] : never
  } 
      : OrdersCountOutputType




  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductsCountOutputType
   */


  export type ProductsCountOutputType = {
    carts: number
    order_items: number
  }

  export type ProductsCountOutputTypeSelect = {
    carts?: boolean
    order_items?: boolean
  }

  export type ProductsCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductsCountOutputTypeArgs)
    ? ProductsCountOutputType 
    : S extends { select: any } & (ProductsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductsCountOutputType ? ProductsCountOutputType[P] : never
  } 
      : ProductsCountOutputType




  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    carts: number
    orders: number
  }

  export type UsersCountOutputTypeSelect = {
    carts?: boolean
    orders?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model carts
   */


  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartsSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartsMinAggregateOutputType = {
    quantity: number | null
    user_id: string | null
    product_id: string | null
    cart_id: string | null
  }

  export type CartsMaxAggregateOutputType = {
    quantity: number | null
    user_id: string | null
    product_id: string | null
    cart_id: string | null
  }

  export type CartsCountAggregateOutputType = {
    quantity: number
    user_id: number
    product_id: number
    cart_id: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    quantity?: true
  }

  export type CartsSumAggregateInputType = {
    quantity?: true
  }

  export type CartsMinAggregateInputType = {
    quantity?: true
    user_id?: true
    product_id?: true
    cart_id?: true
  }

  export type CartsMaxAggregateInputType = {
    quantity?: true
    user_id?: true
    product_id?: true
    cart_id?: true
  }

  export type CartsCountAggregateInputType = {
    quantity?: true
    user_id?: true
    product_id?: true
    cart_id?: true
    _all?: true
  }

  export type CartsAggregateArgs = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: Enumerable<cartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type CartsGroupByArgs = {
    where?: cartsWhereInput
    orderBy?: Enumerable<cartsOrderByWithAggregationInput>
    by: CartsScalarFieldEnum[]
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }


  export type CartsGroupByOutputType = {
    quantity: number
    user_id: string
    product_id: string
    cart_id: string
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect = {
    quantity?: boolean
    user_id?: boolean
    product_id?: boolean
    cart_id?: boolean
    users?: boolean | usersArgs
    products?: boolean | productsArgs
  }


  export type cartsInclude = {
    users?: boolean | usersArgs
    products?: boolean | productsArgs
  }

  export type cartsGetPayload<S extends boolean | null | undefined | cartsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? carts :
    S extends undefined ? never :
    S extends { include: any } & (cartsArgs | cartsFindManyArgs)
    ? carts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? usersGetPayload<S['include'][P]> :
        P extends 'products' ? productsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (cartsArgs | cartsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? usersGetPayload<S['select'][P]> :
        P extends 'products' ? productsGetPayload<S['select'][P]> :  P extends keyof carts ? carts[P] : never
  } 
      : carts


  type cartsCountArgs = 
    Omit<cartsFindManyArgs, 'select' | 'include'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cartsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cartsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'carts'> extends True ? Prisma__cartsClient<cartsGetPayload<T>> : Prisma__cartsClient<cartsGetPayload<T> | null, null>

    /**
     * Find one Carts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cartsFindUniqueOrThrowArgs>
    ): Prisma__cartsClient<cartsGetPayload<T>>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cartsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cartsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'carts'> extends True ? Prisma__cartsClient<cartsGetPayload<T>> : Prisma__cartsClient<cartsGetPayload<T> | null, null>

    /**
     * Find the first Carts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cartsFindFirstOrThrowArgs>
    ): Prisma__cartsClient<cartsGetPayload<T>>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `quantity`
     * const cartsWithQuantityOnly = await prisma.carts.findMany({ select: { quantity: true } })
     * 
    **/
    findMany<T extends cartsFindManyArgs>(
      args?: SelectSubset<T, cartsFindManyArgs>
    ): Prisma.PrismaPromise<Array<cartsGetPayload<T>>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
    **/
    create<T extends cartsCreateArgs>(
      args: SelectSubset<T, cartsCreateArgs>
    ): Prisma__cartsClient<cartsGetPayload<T>>

    /**
     * Create many Carts.
     *     @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     *     @example
     *     // Create many Carts
     *     const carts = await prisma.carts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cartsCreateManyArgs>(
      args?: SelectSubset<T, cartsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
    **/
    delete<T extends cartsDeleteArgs>(
      args: SelectSubset<T, cartsDeleteArgs>
    ): Prisma__cartsClient<cartsGetPayload<T>>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cartsUpdateArgs>(
      args: SelectSubset<T, cartsUpdateArgs>
    ): Prisma__cartsClient<cartsGetPayload<T>>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cartsDeleteManyArgs>(
      args?: SelectSubset<T, cartsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cartsUpdateManyArgs>(
      args: SelectSubset<T, cartsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
    **/
    upsert<T extends cartsUpsertArgs>(
      args: SelectSubset<T, cartsUpsertArgs>
    ): Prisma__cartsClient<cartsGetPayload<T>>

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
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
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cartsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    products<T extends productsArgs= {}>(args?: Subset<T, productsArgs>): Prisma__productsClient<productsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * carts base type for findUnique actions
   */
  export type cartsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUnique
   */
  export interface cartsFindUniqueArgs extends cartsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }


  /**
   * carts base type for findFirst actions
   */
  export type cartsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: Enumerable<cartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: Enumerable<CartsScalarFieldEnum>
  }

  /**
   * carts findFirst
   */
  export interface cartsFindFirstArgs extends cartsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: Enumerable<cartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: Enumerable<CartsScalarFieldEnum>
  }


  /**
   * carts findMany
   */
  export type cartsFindManyArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: Enumerable<cartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: Enumerable<CartsScalarFieldEnum>
  }


  /**
   * carts create
   */
  export type cartsCreateArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * The data needed to create a carts.
     */
    data: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }


  /**
   * carts createMany
   */
  export type cartsCreateManyArgs = {
    /**
     * The data used to create many carts.
     */
    data: Enumerable<cartsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * carts update
   */
  export type cartsUpdateArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }


  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
  }


  /**
   * carts upsert
   */
  export type cartsUpsertArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }


  /**
   * carts delete
   */
  export type cartsDeleteArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }


  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
  }


  /**
   * carts without action
   */
  export type cartsArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
  }



  /**
   * Model developers
   */


  export type AggregateDevelopers = {
    _count: DevelopersCountAggregateOutputType | null
    _avg: DevelopersAvgAggregateOutputType | null
    _sum: DevelopersSumAggregateOutputType | null
    _min: DevelopersMinAggregateOutputType | null
    _max: DevelopersMaxAggregateOutputType | null
  }

  export type DevelopersAvgAggregateOutputType = {
    status: number | null
    balance: number | null
  }

  export type DevelopersSumAggregateOutputType = {
    status: number | null
    balance: number | null
  }

  export type DevelopersMinAggregateOutputType = {
    developer_id: string | null
    username: string | null
    password: string | null
    email: string | null
    full_name: string | null
    display_name: string | null
    status: number | null
    balance: number | null
  }

  export type DevelopersMaxAggregateOutputType = {
    developer_id: string | null
    username: string | null
    password: string | null
    email: string | null
    full_name: string | null
    display_name: string | null
    status: number | null
    balance: number | null
  }

  export type DevelopersCountAggregateOutputType = {
    developer_id: number
    username: number
    password: number
    email: number
    full_name: number
    display_name: number
    status: number
    balance: number
    _all: number
  }


  export type DevelopersAvgAggregateInputType = {
    status?: true
    balance?: true
  }

  export type DevelopersSumAggregateInputType = {
    status?: true
    balance?: true
  }

  export type DevelopersMinAggregateInputType = {
    developer_id?: true
    username?: true
    password?: true
    email?: true
    full_name?: true
    display_name?: true
    status?: true
    balance?: true
  }

  export type DevelopersMaxAggregateInputType = {
    developer_id?: true
    username?: true
    password?: true
    email?: true
    full_name?: true
    display_name?: true
    status?: true
    balance?: true
  }

  export type DevelopersCountAggregateInputType = {
    developer_id?: true
    username?: true
    password?: true
    email?: true
    full_name?: true
    display_name?: true
    status?: true
    balance?: true
    _all?: true
  }

  export type DevelopersAggregateArgs = {
    /**
     * Filter which developers to aggregate.
     */
    where?: developersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of developers to fetch.
     */
    orderBy?: Enumerable<developersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: developersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned developers
    **/
    _count?: true | DevelopersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevelopersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevelopersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevelopersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevelopersMaxAggregateInputType
  }

  export type GetDevelopersAggregateType<T extends DevelopersAggregateArgs> = {
        [P in keyof T & keyof AggregateDevelopers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevelopers[P]>
      : GetScalarType<T[P], AggregateDevelopers[P]>
  }




  export type DevelopersGroupByArgs = {
    where?: developersWhereInput
    orderBy?: Enumerable<developersOrderByWithAggregationInput>
    by: DevelopersScalarFieldEnum[]
    having?: developersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevelopersCountAggregateInputType | true
    _avg?: DevelopersAvgAggregateInputType
    _sum?: DevelopersSumAggregateInputType
    _min?: DevelopersMinAggregateInputType
    _max?: DevelopersMaxAggregateInputType
  }


  export type DevelopersGroupByOutputType = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status: number
    balance: number
    _count: DevelopersCountAggregateOutputType | null
    _avg: DevelopersAvgAggregateOutputType | null
    _sum: DevelopersSumAggregateOutputType | null
    _min: DevelopersMinAggregateOutputType | null
    _max: DevelopersMaxAggregateOutputType | null
  }

  type GetDevelopersGroupByPayload<T extends DevelopersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DevelopersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevelopersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevelopersGroupByOutputType[P]>
            : GetScalarType<T[P], DevelopersGroupByOutputType[P]>
        }
      >
    >


  export type developersSelect = {
    developer_id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    full_name?: boolean
    display_name?: boolean
    status?: boolean
    balance?: boolean
    products?: boolean | developers$productsArgs
    users?: boolean | developers$usersArgs
    _count?: boolean | DevelopersCountOutputTypeArgs
  }


  export type developersInclude = {
    products?: boolean | developers$productsArgs
    users?: boolean | developers$usersArgs
    _count?: boolean | DevelopersCountOutputTypeArgs
  }

  export type developersGetPayload<S extends boolean | null | undefined | developersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? developers :
    S extends undefined ? never :
    S extends { include: any } & (developersArgs | developersFindManyArgs)
    ? developers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'products' ? Array < productsGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? DevelopersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (developersArgs | developersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'products' ? Array < productsGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? DevelopersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof developers ? developers[P] : never
  } 
      : developers


  type developersCountArgs = 
    Omit<developersFindManyArgs, 'select' | 'include'> & {
      select?: DevelopersCountAggregateInputType | true
    }

  export interface developersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Developers that matches the filter.
     * @param {developersFindUniqueArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends developersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, developersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'developers'> extends True ? Prisma__developersClient<developersGetPayload<T>> : Prisma__developersClient<developersGetPayload<T> | null, null>

    /**
     * Find one Developers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {developersFindUniqueOrThrowArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends developersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, developersFindUniqueOrThrowArgs>
    ): Prisma__developersClient<developersGetPayload<T>>

    /**
     * Find the first Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developersFindFirstArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends developersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, developersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'developers'> extends True ? Prisma__developersClient<developersGetPayload<T>> : Prisma__developersClient<developersGetPayload<T> | null, null>

    /**
     * Find the first Developers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developersFindFirstOrThrowArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends developersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, developersFindFirstOrThrowArgs>
    ): Prisma__developersClient<developersGetPayload<T>>

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developers.findMany()
     * 
     * // Get first 10 Developers
     * const developers = await prisma.developers.findMany({ take: 10 })
     * 
     * // Only select the `developer_id`
     * const developersWithDeveloper_idOnly = await prisma.developers.findMany({ select: { developer_id: true } })
     * 
    **/
    findMany<T extends developersFindManyArgs>(
      args?: SelectSubset<T, developersFindManyArgs>
    ): Prisma.PrismaPromise<Array<developersGetPayload<T>>>

    /**
     * Create a Developers.
     * @param {developersCreateArgs} args - Arguments to create a Developers.
     * @example
     * // Create one Developers
     * const Developers = await prisma.developers.create({
     *   data: {
     *     // ... data to create a Developers
     *   }
     * })
     * 
    **/
    create<T extends developersCreateArgs>(
      args: SelectSubset<T, developersCreateArgs>
    ): Prisma__developersClient<developersGetPayload<T>>

    /**
     * Create many Developers.
     *     @param {developersCreateManyArgs} args - Arguments to create many Developers.
     *     @example
     *     // Create many Developers
     *     const developers = await prisma.developers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends developersCreateManyArgs>(
      args?: SelectSubset<T, developersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Developers.
     * @param {developersDeleteArgs} args - Arguments to delete one Developers.
     * @example
     * // Delete one Developers
     * const Developers = await prisma.developers.delete({
     *   where: {
     *     // ... filter to delete one Developers
     *   }
     * })
     * 
    **/
    delete<T extends developersDeleteArgs>(
      args: SelectSubset<T, developersDeleteArgs>
    ): Prisma__developersClient<developersGetPayload<T>>

    /**
     * Update one Developers.
     * @param {developersUpdateArgs} args - Arguments to update one Developers.
     * @example
     * // Update one Developers
     * const developers = await prisma.developers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends developersUpdateArgs>(
      args: SelectSubset<T, developersUpdateArgs>
    ): Prisma__developersClient<developersGetPayload<T>>

    /**
     * Delete zero or more Developers.
     * @param {developersDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends developersDeleteManyArgs>(
      args?: SelectSubset<T, developersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developers = await prisma.developers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends developersUpdateManyArgs>(
      args: SelectSubset<T, developersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Developers.
     * @param {developersUpsertArgs} args - Arguments to update or create a Developers.
     * @example
     * // Update or create a Developers
     * const developers = await prisma.developers.upsert({
     *   create: {
     *     // ... data to create a Developers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developers we want to update
     *   }
     * })
    **/
    upsert<T extends developersUpsertArgs>(
      args: SelectSubset<T, developersUpsertArgs>
    ): Prisma__developersClient<developersGetPayload<T>>

    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developersCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developers.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
    **/
    count<T extends developersCountArgs>(
      args?: Subset<T, developersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevelopersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevelopersAggregateArgs>(args: Subset<T, DevelopersAggregateArgs>): Prisma.PrismaPromise<GetDevelopersAggregateType<T>>

    /**
     * Group by Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersGroupByArgs} args - Group by arguments.
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
      T extends DevelopersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevelopersGroupByArgs['orderBy'] }
        : { orderBy?: DevelopersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DevelopersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevelopersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for developers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__developersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    products<T extends developers$productsArgs= {}>(args?: Subset<T, developers$productsArgs>): Prisma.PrismaPromise<Array<productsGetPayload<T>>| Null>;

    users<T extends developers$usersArgs= {}>(args?: Subset<T, developers$usersArgs>): Prisma.PrismaPromise<Array<usersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * developers base type for findUnique actions
   */
  export type developersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * Filter, which developers to fetch.
     */
    where: developersWhereUniqueInput
  }

  /**
   * developers findUnique
   */
  export interface developersFindUniqueArgs extends developersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * developers findUniqueOrThrow
   */
  export type developersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * Filter, which developers to fetch.
     */
    where: developersWhereUniqueInput
  }


  /**
   * developers base type for findFirst actions
   */
  export type developersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * Filter, which developers to fetch.
     */
    where?: developersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of developers to fetch.
     */
    orderBy?: Enumerable<developersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for developers.
     */
    cursor?: developersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of developers.
     */
    distinct?: Enumerable<DevelopersScalarFieldEnum>
  }

  /**
   * developers findFirst
   */
  export interface developersFindFirstArgs extends developersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * developers findFirstOrThrow
   */
  export type developersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * Filter, which developers to fetch.
     */
    where?: developersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of developers to fetch.
     */
    orderBy?: Enumerable<developersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for developers.
     */
    cursor?: developersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of developers.
     */
    distinct?: Enumerable<DevelopersScalarFieldEnum>
  }


  /**
   * developers findMany
   */
  export type developersFindManyArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * Filter, which developers to fetch.
     */
    where?: developersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of developers to fetch.
     */
    orderBy?: Enumerable<developersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing developers.
     */
    cursor?: developersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` developers.
     */
    skip?: number
    distinct?: Enumerable<DevelopersScalarFieldEnum>
  }


  /**
   * developers create
   */
  export type developersCreateArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * The data needed to create a developers.
     */
    data: XOR<developersCreateInput, developersUncheckedCreateInput>
  }


  /**
   * developers createMany
   */
  export type developersCreateManyArgs = {
    /**
     * The data used to create many developers.
     */
    data: Enumerable<developersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * developers update
   */
  export type developersUpdateArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * The data needed to update a developers.
     */
    data: XOR<developersUpdateInput, developersUncheckedUpdateInput>
    /**
     * Choose, which developers to update.
     */
    where: developersWhereUniqueInput
  }


  /**
   * developers updateMany
   */
  export type developersUpdateManyArgs = {
    /**
     * The data used to update developers.
     */
    data: XOR<developersUpdateManyMutationInput, developersUncheckedUpdateManyInput>
    /**
     * Filter which developers to update
     */
    where?: developersWhereInput
  }


  /**
   * developers upsert
   */
  export type developersUpsertArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * The filter to search for the developers to update in case it exists.
     */
    where: developersWhereUniqueInput
    /**
     * In case the developers found by the `where` argument doesn't exist, create a new developers with this data.
     */
    create: XOR<developersCreateInput, developersUncheckedCreateInput>
    /**
     * In case the developers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<developersUpdateInput, developersUncheckedUpdateInput>
  }


  /**
   * developers delete
   */
  export type developersDeleteArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
    /**
     * Filter which developers to delete.
     */
    where: developersWhereUniqueInput
  }


  /**
   * developers deleteMany
   */
  export type developersDeleteManyArgs = {
    /**
     * Filter which developers to delete
     */
    where?: developersWhereInput
  }


  /**
   * developers.products
   */
  export type developers$productsArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    where?: productsWhereInput
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * developers.users
   */
  export type developers$usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * developers without action
   */
  export type developersArgs = {
    /**
     * Select specific fields to fetch from the developers
     */
    select?: developersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developersInclude | null
  }



  /**
   * Model order_items
   */


  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    order_id: string | null
    product_id: string | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    order_id: string | null
    product_id: string | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    quantity: number
    order_id: number
    product_id: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    quantity?: true
    order_id?: true
    product_id?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    quantity?: true
    order_id?: true
    product_id?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    quantity?: true
    order_id?: true
    product_id?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: Enumerable<order_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type Order_itemsGroupByArgs = {
    where?: order_itemsWhereInput
    orderBy?: Enumerable<order_itemsOrderByWithAggregationInput>
    by: Order_itemsScalarFieldEnum[]
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }


  export type Order_itemsGroupByOutputType = {
    id: number
    quantity: number
    order_id: string
    product_id: string
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends Order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect = {
    id?: boolean
    quantity?: boolean
    order_id?: boolean
    product_id?: boolean
    orders?: boolean | ordersArgs
    products?: boolean | productsArgs
  }


  export type order_itemsInclude = {
    orders?: boolean | ordersArgs
    products?: boolean | productsArgs
  }

  export type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? order_items :
    S extends undefined ? never :
    S extends { include: any } & (order_itemsArgs | order_itemsFindManyArgs)
    ? order_items  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'orders' ? ordersGetPayload<S['include'][P]> :
        P extends 'products' ? productsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (order_itemsArgs | order_itemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'orders' ? ordersGetPayload<S['select'][P]> :
        P extends 'products' ? productsGetPayload<S['select'][P]> :  P extends keyof order_items ? order_items[P] : never
  } 
      : order_items


  type order_itemsCountArgs = 
    Omit<order_itemsFindManyArgs, 'select' | 'include'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_itemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, order_itemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'order_items'> extends True ? Prisma__order_itemsClient<order_itemsGetPayload<T>> : Prisma__order_itemsClient<order_itemsGetPayload<T> | null, null>

    /**
     * Find one Order_items that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, order_itemsFindUniqueOrThrowArgs>
    ): Prisma__order_itemsClient<order_itemsGetPayload<T>>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_itemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, order_itemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'order_items'> extends True ? Prisma__order_itemsClient<order_itemsGetPayload<T>> : Prisma__order_itemsClient<order_itemsGetPayload<T> | null, null>

    /**
     * Find the first Order_items that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs>
    ): Prisma__order_itemsClient<order_itemsGetPayload<T>>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends order_itemsFindManyArgs>(
      args?: SelectSubset<T, order_itemsFindManyArgs>
    ): Prisma.PrismaPromise<Array<order_itemsGetPayload<T>>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
    **/
    create<T extends order_itemsCreateArgs>(
      args: SelectSubset<T, order_itemsCreateArgs>
    ): Prisma__order_itemsClient<order_itemsGetPayload<T>>

    /**
     * Create many Order_items.
     *     @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     *     @example
     *     // Create many Order_items
     *     const order_items = await prisma.order_items.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_itemsCreateManyArgs>(
      args?: SelectSubset<T, order_itemsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
    **/
    delete<T extends order_itemsDeleteArgs>(
      args: SelectSubset<T, order_itemsDeleteArgs>
    ): Prisma__order_itemsClient<order_itemsGetPayload<T>>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_itemsUpdateArgs>(
      args: SelectSubset<T, order_itemsUpdateArgs>
    ): Prisma__order_itemsClient<order_itemsGetPayload<T>>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_itemsDeleteManyArgs>(
      args?: SelectSubset<T, order_itemsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_itemsUpdateManyArgs>(
      args: SelectSubset<T, order_itemsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
    **/
    upsert<T extends order_itemsUpsertArgs>(
      args: SelectSubset<T, order_itemsUpsertArgs>
    ): Prisma__order_itemsClient<order_itemsGetPayload<T>>

    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsGroupByArgs} args - Group by arguments.
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
      T extends Order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: Order_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__order_itemsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    orders<T extends ordersArgs= {}>(args?: Subset<T, ordersArgs>): Prisma__ordersClient<ordersGetPayload<T> | Null>;

    products<T extends productsArgs= {}>(args?: Subset<T, productsArgs>): Prisma__productsClient<productsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * order_items base type for findUnique actions
   */
  export type order_itemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUnique
   */
  export interface order_itemsFindUniqueArgs extends order_itemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }


  /**
   * order_items base type for findFirst actions
   */
  export type order_itemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: Enumerable<order_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Enumerable<Order_itemsScalarFieldEnum>
  }

  /**
   * order_items findFirst
   */
  export interface order_itemsFindFirstArgs extends order_itemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: Enumerable<order_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Enumerable<Order_itemsScalarFieldEnum>
  }


  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: Enumerable<order_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Enumerable<Order_itemsScalarFieldEnum>
  }


  /**
   * order_items create
   */
  export type order_itemsCreateArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }


  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs = {
    /**
     * The data used to create many order_items.
     */
    data: Enumerable<order_itemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * order_items update
   */
  export type order_itemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }


  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
  }


  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }


  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }


  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
  }


  /**
   * order_items without action
   */
  export type order_itemsArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
  }



  /**
   * Model orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    total: number | null
    status: number | null
  }

  export type OrdersSumAggregateOutputType = {
    total: number | null
    status: number | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: string | null
    invoice: string | null
    date: Date | null
    total: number | null
    status: number | null
    user_id: string | null
    bank: string | null
    va_number: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: string | null
    invoice: string | null
    date: Date | null
    total: number | null
    status: number | null
    user_id: string | null
    bank: string | null
    va_number: string | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    invoice: number
    date: number
    total: number
    status: number
    user_id: number
    bank: number
    va_number: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    total?: true
    status?: true
  }

  export type OrdersSumAggregateInputType = {
    total?: true
    status?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    invoice?: true
    date?: true
    total?: true
    status?: true
    user_id?: true
    bank?: true
    va_number?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    invoice?: true
    date?: true
    total?: true
    status?: true
    user_id?: true
    bank?: true
    va_number?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    invoice?: true
    date?: true
    total?: true
    status?: true
    user_id?: true
    bank?: true
    va_number?: true
    _all?: true
  }

  export type OrdersAggregateArgs = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs = {
    where?: ordersWhereInput
    orderBy?: Enumerable<ordersOrderByWithAggregationInput>
    by: OrdersScalarFieldEnum[]
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    order_id: string
    invoice: string
    date: Date
    total: number
    status: number
    user_id: string
    bank: string
    va_number: string | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect = {
    order_id?: boolean
    invoice?: boolean
    date?: boolean
    total?: boolean
    status?: boolean
    user_id?: boolean
    bank?: boolean
    va_number?: boolean
    order_items?: boolean | orders$order_itemsArgs
    users?: boolean | usersArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  }


  export type ordersInclude = {
    order_items?: boolean | orders$order_itemsArgs
    users?: boolean | usersArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  }

  export type ordersGetPayload<S extends boolean | null | undefined | ordersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? orders :
    S extends undefined ? never :
    S extends { include: any } & (ordersArgs | ordersFindManyArgs)
    ? orders  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'order_items' ? Array < order_itemsGetPayload<S['include'][P]>>  :
        P extends 'users' ? usersGetPayload<S['include'][P]> :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ordersArgs | ordersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'order_items' ? Array < order_itemsGetPayload<S['select'][P]>>  :
        P extends 'users' ? usersGetPayload<S['select'][P]> :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof orders ? orders[P] : never
  } 
      : orders


  type ordersCountArgs = 
    Omit<ordersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ordersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'orders'> extends True ? Prisma__ordersClient<ordersGetPayload<T>> : Prisma__ordersClient<ordersGetPayload<T> | null, null>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ordersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'orders'> extends True ? Prisma__ordersClient<ordersGetPayload<T>> : Prisma__ordersClient<ordersGetPayload<T> | null, null>

    /**
     * Find the first Orders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs>(
      args?: SelectSubset<T, ordersFindManyArgs>
    ): Prisma.PrismaPromise<Array<ordersGetPayload<T>>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs>(
      args: SelectSubset<T, ordersCreateArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs>(
      args?: SelectSubset<T, ordersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs>(
      args: SelectSubset<T, ordersDeleteArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs>(
      args: SelectSubset<T, ordersUpdateArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs>(
      args?: SelectSubset<T, ordersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs>(
      args: SelectSubset<T, ordersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs>(
      args: SelectSubset<T, ordersUpsertArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ordersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    order_items<T extends orders$order_itemsArgs= {}>(args?: Subset<T, orders$order_itemsArgs>): Prisma.PrismaPromise<Array<order_itemsGetPayload<T>>| Null>;

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * orders base type for findUnique actions
   */
  export type ordersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUnique
   */
  export interface ordersFindUniqueArgs extends ordersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders base type for findFirst actions
   */
  export type ordersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }

  /**
   * orders findFirst
   */
  export interface ordersFindFirstArgs extends ordersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * orders create
   */
  export type ordersCreateArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs = {
    /**
     * The data used to create many orders.
     */
    data: Enumerable<ordersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }


  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    where?: order_itemsWhereInput
    orderBy?: Enumerable<order_itemsOrderByWithRelationInput>
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Order_itemsScalarFieldEnum>
  }


  /**
   * orders without action
   */
  export type ordersArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
  }



  /**
   * Model products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    stock: number | null
    status: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    stock: number | null
    status: number | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: string | null
    name: string | null
    description: string | null
    price: number | null
    stock: number | null
    status: number | null
    developer_id: string | null
    image: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: string | null
    name: string | null
    description: string | null
    price: number | null
    stock: number | null
    status: number | null
    developer_id: string | null
    image: string | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    name: number
    description: number
    price: number
    stock: number
    status: number
    developer_id: number
    image: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    stock?: true
    status?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    stock?: true
    status?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    developer_id?: true
    image?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    developer_id?: true
    image?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    status?: true
    developer_id?: true
    image?: true
    _all?: true
  }

  export type ProductsAggregateArgs = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
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
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs = {
    where?: productsWhereInput
    orderBy?: Enumerable<productsOrderByWithAggregationInput>
    by: ProductsScalarFieldEnum[]
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status: number
    developer_id: string
    image: string
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect = {
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    status?: boolean
    developer_id?: boolean
    image?: boolean
    carts?: boolean | products$cartsArgs
    order_items?: boolean | products$order_itemsArgs
    developers?: boolean | developersArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }


  export type productsInclude = {
    carts?: boolean | products$cartsArgs
    order_items?: boolean | products$order_itemsArgs
    developers?: boolean | developersArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }

  export type productsGetPayload<S extends boolean | null | undefined | productsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? products :
    S extends undefined ? never :
    S extends { include: any } & (productsArgs | productsFindManyArgs)
    ? products  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'carts' ? Array < cartsGetPayload<S['include'][P]>>  :
        P extends 'order_items' ? Array < order_itemsGetPayload<S['include'][P]>>  :
        P extends 'developers' ? developersGetPayload<S['include'][P]> :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (productsArgs | productsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'carts' ? Array < cartsGetPayload<S['select'][P]>>  :
        P extends 'order_items' ? Array < order_itemsGetPayload<S['select'][P]>>  :
        P extends 'developers' ? developersGetPayload<S['select'][P]> :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof products ? products[P] : never
  } 
      : products


  type productsCountArgs = 
    Omit<productsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'products'> extends True ? Prisma__productsClient<productsGetPayload<T>> : Prisma__productsClient<productsGetPayload<T> | null, null>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, productsFindUniqueOrThrowArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'products'> extends True ? Prisma__productsClient<productsGetPayload<T>> : Prisma__productsClient<productsGetPayload<T> | null, null>

    /**
     * Find the first Products that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs>(
      args?: SelectSubset<T, productsFindManyArgs>
    ): Prisma.PrismaPromise<Array<productsGetPayload<T>>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs>(
      args: SelectSubset<T, productsCreateArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productsCreateManyArgs>(
      args?: SelectSubset<T, productsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs>(
      args: SelectSubset<T, productsDeleteArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs>(
      args: SelectSubset<T, productsUpdateArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs>(
      args?: SelectSubset<T, productsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs>(
      args: SelectSubset<T, productsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs>(
      args: SelectSubset<T, productsUpsertArgs>
    ): Prisma__productsClient<productsGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    carts<T extends products$cartsArgs= {}>(args?: Subset<T, products$cartsArgs>): Prisma.PrismaPromise<Array<cartsGetPayload<T>>| Null>;

    order_items<T extends products$order_itemsArgs= {}>(args?: Subset<T, products$order_itemsArgs>): Prisma.PrismaPromise<Array<order_itemsGetPayload<T>>| Null>;

    developers<T extends developersArgs= {}>(args?: Subset<T, developersArgs>): Prisma__developersClient<developersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * products base type for findUnique actions
   */
  export type productsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUnique
   */
  export interface productsFindUniqueArgs extends productsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products base type for findFirst actions
   */
  export type productsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
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
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }

  /**
   * products findFirst
   */
  export interface productsFindFirstArgs extends productsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
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
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
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
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products create
   */
  export type productsCreateArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products createMany
   */
  export type productsCreateManyArgs = {
    /**
     * The data used to create many products.
     */
    data: Enumerable<productsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * products update
   */
  export type productsUpdateArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }


  /**
   * products.carts
   */
  export type products$cartsArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    where?: cartsWhereInput
    orderBy?: Enumerable<cartsOrderByWithRelationInput>
    cursor?: cartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartsScalarFieldEnum>
  }


  /**
   * products.order_items
   */
  export type products$order_itemsArgs = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemsInclude | null
    where?: order_itemsWhereInput
    orderBy?: Enumerable<order_itemsOrderByWithRelationInput>
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Order_itemsScalarFieldEnum>
  }


  /**
   * products without action
   */
  export type productsArgs = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude | null
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
    status: number | null
  }

  export type UsersSumAggregateOutputType = {
    status: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    status: number | null
    customer_id: string | null
    developer_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    status: number | null
    customer_id: string | null
    developer_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    status: number
    customer_id: number
    developer_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    status?: true
  }

  export type UsersSumAggregateInputType = {
    status?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    status?: true
    customer_id?: true
    developer_id?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    status?: true
    customer_id?: true
    developer_id?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    status?: true
    customer_id?: true
    developer_id?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
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




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
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
    user_id: string
    status: number
    customer_id: string
    developer_id: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    user_id?: boolean
    status?: boolean
    customer_id?: boolean
    developer_id?: boolean
    carts?: boolean | users$cartsArgs
    orders?: boolean | users$ordersArgs
    developers?: boolean | developersArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type usersInclude = {
    carts?: boolean | users$cartsArgs
    orders?: boolean | users$ordersArgs
    developers?: boolean | developersArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'carts' ? Array < cartsGetPayload<S['include'][P]>>  :
        P extends 'orders' ? Array < ordersGetPayload<S['include'][P]>>  :
        P extends 'developers' ? developersGetPayload<S['include'][P]> :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'carts' ? Array < cartsGetPayload<S['select'][P]>>  :
        P extends 'orders' ? Array < ordersGetPayload<S['select'][P]>>  :
        P extends 'developers' ? developersGetPayload<S['select'][P]> :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

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
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): Prisma.PrismaPromise<Array<usersGetPayload<T>>>

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
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

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
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

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
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

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
      T extends _Record<'select', any>
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    carts<T extends users$cartsArgs= {}>(args?: Subset<T, users$cartsArgs>): Prisma.PrismaPromise<Array<cartsGetPayload<T>>| Null>;

    orders<T extends users$ordersArgs= {}>(args?: Subset<T, users$ordersArgs>): Prisma.PrismaPromise<Array<ordersGetPayload<T>>| Null>;

    developers<T extends developersArgs= {}>(args?: Subset<T, developersArgs>): Prisma__developersClient<developersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
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
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
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
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
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
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
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
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
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
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.carts
   */
  export type users$cartsArgs = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartsInclude | null
    where?: cartsWhereInput
    orderBy?: Enumerable<cartsOrderByWithRelationInput>
    cursor?: cartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CartsScalarFieldEnum>
  }


  /**
   * users.orders
   */
  export type users$ordersArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    where?: ordersWhereInput
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CartsScalarFieldEnum: {
    quantity: 'quantity',
    user_id: 'user_id',
    product_id: 'product_id',
    cart_id: 'cart_id'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const DevelopersScalarFieldEnum: {
    developer_id: 'developer_id',
    username: 'username',
    password: 'password',
    email: 'email',
    full_name: 'full_name',
    display_name: 'display_name',
    status: 'status',
    balance: 'balance'
  };

  export type DevelopersScalarFieldEnum = (typeof DevelopersScalarFieldEnum)[keyof typeof DevelopersScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    order_id: 'order_id',
    product_id: 'product_id'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    invoice: 'invoice',
    date: 'date',
    total: 'total',
    status: 'status',
    user_id: 'user_id',
    bank: 'bank',
    va_number: 'va_number'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    status: 'status',
    developer_id: 'developer_id',
    image: 'image'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    status: 'status',
    customer_id: 'customer_id',
    developer_id: 'developer_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type cartsWhereInput = {
    AND?: Enumerable<cartsWhereInput>
    OR?: Enumerable<cartsWhereInput>
    NOT?: Enumerable<cartsWhereInput>
    quantity?: IntFilter | number
    user_id?: StringFilter | string
    product_id?: StringFilter | string
    cart_id?: StringFilter | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
    products?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type cartsOrderByWithRelationInput = {
    quantity?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    users?: usersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type cartsWhereUniqueInput = {
    cart_id?: string
  }

  export type cartsOrderByWithAggregationInput = {
    quantity?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
    _count?: cartsCountOrderByAggregateInput
    _avg?: cartsAvgOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
    _sum?: cartsSumOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cartsScalarWhereWithAggregatesInput>
    OR?: Enumerable<cartsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cartsScalarWhereWithAggregatesInput>
    quantity?: IntWithAggregatesFilter | number
    user_id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
    cart_id?: StringWithAggregatesFilter | string
  }

  export type developersWhereInput = {
    AND?: Enumerable<developersWhereInput>
    OR?: Enumerable<developersWhereInput>
    NOT?: Enumerable<developersWhereInput>
    developer_id?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    email?: StringFilter | string
    full_name?: StringFilter | string
    display_name?: StringFilter | string
    status?: IntFilter | number
    balance?: IntFilter | number
    products?: ProductsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type developersOrderByWithRelationInput = {
    developer_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    display_name?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    products?: productsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type developersWhereUniqueInput = {
    developer_id?: string
  }

  export type developersOrderByWithAggregationInput = {
    developer_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    display_name?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    _count?: developersCountOrderByAggregateInput
    _avg?: developersAvgOrderByAggregateInput
    _max?: developersMaxOrderByAggregateInput
    _min?: developersMinOrderByAggregateInput
    _sum?: developersSumOrderByAggregateInput
  }

  export type developersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<developersScalarWhereWithAggregatesInput>
    OR?: Enumerable<developersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<developersScalarWhereWithAggregatesInput>
    developer_id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    full_name?: StringWithAggregatesFilter | string
    display_name?: StringWithAggregatesFilter | string
    status?: IntWithAggregatesFilter | number
    balance?: IntWithAggregatesFilter | number
  }

  export type order_itemsWhereInput = {
    AND?: Enumerable<order_itemsWhereInput>
    OR?: Enumerable<order_itemsWhereInput>
    NOT?: Enumerable<order_itemsWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    order_id?: StringFilter | string
    product_id?: StringFilter | string
    orders?: XOR<OrdersRelationFilter, ordersWhereInput>
    products?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = {
    id?: number
  }

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<order_itemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<order_itemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<order_itemsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    order_id?: StringWithAggregatesFilter | string
    product_id?: StringWithAggregatesFilter | string
  }

  export type ordersWhereInput = {
    AND?: Enumerable<ordersWhereInput>
    OR?: Enumerable<ordersWhereInput>
    NOT?: Enumerable<ordersWhereInput>
    order_id?: StringFilter | string
    invoice?: StringFilter | string
    date?: DateTimeFilter | Date | string
    total?: IntFilter | number
    status?: IntFilter | number
    user_id?: StringFilter | string
    bank?: StringFilter | string
    va_number?: StringNullableFilter | string | null
    order_items?: Order_itemsListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder
    invoice?: SortOrder
    date?: SortOrder
    total?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    bank?: SortOrder
    va_number?: SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = {
    order_id?: string
  }

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder
    invoice?: SortOrder
    date?: SortOrder
    total?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    bank?: SortOrder
    va_number?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ordersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ordersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ordersScalarWhereWithAggregatesInput>
    order_id?: StringWithAggregatesFilter | string
    invoice?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    total?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    user_id?: StringWithAggregatesFilter | string
    bank?: StringWithAggregatesFilter | string
    va_number?: StringNullableWithAggregatesFilter | string | null
  }

  export type productsWhereInput = {
    AND?: Enumerable<productsWhereInput>
    OR?: Enumerable<productsWhereInput>
    NOT?: Enumerable<productsWhereInput>
    product_id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    price?: IntFilter | number
    stock?: IntFilter | number
    status?: IntFilter | number
    developer_id?: StringFilter | string
    image?: StringFilter | string
    carts?: CartsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    developers?: XOR<DevelopersRelationFilter, developersWhereInput>
  }

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    developer_id?: SortOrder
    image?: SortOrder
    carts?: cartsOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    developers?: developersOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = {
    product_id?: string
  }

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    developer_id?: SortOrder
    image?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productsScalarWhereWithAggregatesInput>
    OR?: Enumerable<productsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productsScalarWhereWithAggregatesInput>
    product_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    stock?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    developer_id?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    user_id?: StringFilter | string
    status?: IntFilter | number
    customer_id?: StringFilter | string
    developer_id?: StringFilter | string
    carts?: CartsListRelationFilter
    orders?: OrdersListRelationFilter
    developers?: XOR<DevelopersRelationFilter, developersWhereInput>
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    developer_id?: SortOrder
    carts?: cartsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    developers?: developersOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = {
    user_id?: string
  }

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    developer_id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    user_id?: StringWithAggregatesFilter | string
    status?: IntWithAggregatesFilter | number
    customer_id?: StringWithAggregatesFilter | string
    developer_id?: StringWithAggregatesFilter | string
  }

  export type cartsCreateInput = {
    quantity: number
    cart_id: string
    users: usersCreateNestedOneWithoutCartsInput
    products: productsCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateInput = {
    quantity: number
    user_id: string
    product_id: string
    cart_id: string
  }

  export type cartsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart_id?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutCartsNestedInput
    products?: productsUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type cartsCreateManyInput = {
    quantity: number
    user_id: string
    product_id: string
    cart_id: string
  }

  export type cartsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type cartsUncheckedUpdateManyInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type developersCreateInput = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status?: number
    balance?: number
    products?: productsCreateNestedManyWithoutDevelopersInput
    users?: usersCreateNestedManyWithoutDevelopersInput
  }

  export type developersUncheckedCreateInput = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status?: number
    balance?: number
    products?: productsUncheckedCreateNestedManyWithoutDevelopersInput
    users?: usersUncheckedCreateNestedManyWithoutDevelopersInput
  }

  export type developersUpdateInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateManyWithoutDevelopersNestedInput
    users?: usersUpdateManyWithoutDevelopersNestedInput
  }

  export type developersUncheckedUpdateInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutDevelopersNestedInput
    users?: usersUncheckedUpdateManyWithoutDevelopersNestedInput
  }

  export type developersCreateManyInput = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status?: number
    balance?: number
  }

  export type developersUpdateManyMutationInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type developersUncheckedUpdateManyInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsCreateInput = {
    quantity: number
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    quantity: number
    order_id: string
    product_id: string
  }

  export type order_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsCreateManyInput = {
    id?: number
    quantity: number
    order_id: string
    product_id: string
  }

  export type order_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type ordersCreateInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    bank: string
    va_number?: string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    user_id: string
    bank: string
    va_number?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    user_id: string
    bank: string
    va_number?: string | null
  }

  export type ordersUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    image: string
    carts?: cartsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    developers: developersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    developer_id: string
    image: string
    carts?: cartsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    developers?: developersUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    developer_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    developer_id: string
    image: string
  }

  export type productsUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type productsUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    developer_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    user_id: string
    status?: number
    customer_id: string
    carts?: cartsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    developers: developersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id: string
    status?: number
    customer_id: string
    developer_id: string
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    developers?: developersUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    developer_id?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id: string
    status?: number
    customer_id: string
    developer_id: string
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    developer_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type cartsCountOrderByAggregateInput = {
    quantity?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
  }

  export type cartsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    quantity?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    quantity?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    cart_id?: SortOrder
  }

  export type cartsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type developersCountOrderByAggregateInput = {
    developer_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    display_name?: SortOrder
    status?: SortOrder
    balance?: SortOrder
  }

  export type developersAvgOrderByAggregateInput = {
    status?: SortOrder
    balance?: SortOrder
  }

  export type developersMaxOrderByAggregateInput = {
    developer_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    display_name?: SortOrder
    status?: SortOrder
    balance?: SortOrder
  }

  export type developersMinOrderByAggregateInput = {
    developer_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    display_name?: SortOrder
    status?: SortOrder
    balance?: SortOrder
  }

  export type developersSumOrderByAggregateInput = {
    status?: SortOrder
    balance?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder
    invoice?: SortOrder
    date?: SortOrder
    total?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    bank?: SortOrder
    va_number?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    total?: SortOrder
    status?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    invoice?: SortOrder
    date?: SortOrder
    total?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    bank?: SortOrder
    va_number?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder
    invoice?: SortOrder
    date?: SortOrder
    total?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    bank?: SortOrder
    va_number?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    total?: SortOrder
    status?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type CartsListRelationFilter = {
    every?: cartsWhereInput
    some?: cartsWhereInput
    none?: cartsWhereInput
  }

  export type DevelopersRelationFilter = {
    is?: developersWhereInput
    isNot?: developersWhereInput
  }

  export type cartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    developer_id?: SortOrder
    image?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    developer_id?: SortOrder
    image?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    developer_id?: SortOrder
    image?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
    status?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    developer_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    developer_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    developer_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type usersCreateNestedOneWithoutCartsInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    connect?: usersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutCartsInput = {
    create?: XOR<productsCreateWithoutCartsInput, productsUncheckedCreateWithoutCartsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCartsInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    upsert?: usersUpsertWithoutCartsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
  }

  export type productsUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<productsCreateWithoutCartsInput, productsUncheckedCreateWithoutCartsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCartsInput
    upsert?: productsUpsertWithoutCartsInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutCartsInput, productsUncheckedUpdateWithoutCartsInput>
  }

  export type productsCreateNestedManyWithoutDevelopersInput = {
    create?: XOR<Enumerable<productsCreateWithoutDevelopersInput>, Enumerable<productsUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutDevelopersInput>
    createMany?: productsCreateManyDevelopersInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type usersCreateNestedManyWithoutDevelopersInput = {
    create?: XOR<Enumerable<usersCreateWithoutDevelopersInput>, Enumerable<usersUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutDevelopersInput>
    createMany?: usersCreateManyDevelopersInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type productsUncheckedCreateNestedManyWithoutDevelopersInput = {
    create?: XOR<Enumerable<productsCreateWithoutDevelopersInput>, Enumerable<productsUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutDevelopersInput>
    createMany?: productsCreateManyDevelopersInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutDevelopersInput = {
    create?: XOR<Enumerable<usersCreateWithoutDevelopersInput>, Enumerable<usersUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutDevelopersInput>
    createMany?: usersCreateManyDevelopersInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type productsUpdateManyWithoutDevelopersNestedInput = {
    create?: XOR<Enumerable<productsCreateWithoutDevelopersInput>, Enumerable<productsUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutDevelopersInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutDevelopersInput>
    createMany?: productsCreateManyDevelopersInputEnvelope
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    connect?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutDevelopersInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutDevelopersInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type usersUpdateManyWithoutDevelopersNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutDevelopersInput>, Enumerable<usersUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutDevelopersInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutDevelopersInput>
    createMany?: usersCreateManyDevelopersInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutDevelopersInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutDevelopersInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type productsUncheckedUpdateManyWithoutDevelopersNestedInput = {
    create?: XOR<Enumerable<productsCreateWithoutDevelopersInput>, Enumerable<productsUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutDevelopersInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutDevelopersInput>
    createMany?: productsCreateManyDevelopersInputEnvelope
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    connect?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutDevelopersInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutDevelopersInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutDevelopersNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutDevelopersInput>, Enumerable<usersUncheckedCreateWithoutDevelopersInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutDevelopersInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutDevelopersInput>
    createMany?: usersCreateManyDevelopersInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutDevelopersInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutDevelopersInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutOrdersInput>, Enumerable<order_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutOrdersInput>
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: Enumerable<order_itemsWhereUniqueInput>
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutOrdersInput>, Enumerable<order_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutOrdersInput>
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: Enumerable<order_itemsWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutOrdersInput>, Enumerable<order_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutOrdersInput>
    upsert?: Enumerable<order_itemsUpsertWithWhereUniqueWithoutOrdersInput>
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: Enumerable<order_itemsWhereUniqueInput>
    disconnect?: Enumerable<order_itemsWhereUniqueInput>
    delete?: Enumerable<order_itemsWhereUniqueInput>
    connect?: Enumerable<order_itemsWhereUniqueInput>
    update?: Enumerable<order_itemsUpdateWithWhereUniqueWithoutOrdersInput>
    updateMany?: Enumerable<order_itemsUpdateManyWithWhereWithoutOrdersInput>
    deleteMany?: Enumerable<order_itemsScalarWhereInput>
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutOrdersInput>, Enumerable<order_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutOrdersInput>
    upsert?: Enumerable<order_itemsUpsertWithWhereUniqueWithoutOrdersInput>
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: Enumerable<order_itemsWhereUniqueInput>
    disconnect?: Enumerable<order_itemsWhereUniqueInput>
    delete?: Enumerable<order_itemsWhereUniqueInput>
    connect?: Enumerable<order_itemsWhereUniqueInput>
    update?: Enumerable<order_itemsUpdateWithWhereUniqueWithoutOrdersInput>
    updateMany?: Enumerable<order_itemsUpdateManyWithWhereWithoutOrdersInput>
    deleteMany?: Enumerable<order_itemsScalarWhereInput>
  }

  export type cartsCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<cartsCreateWithoutProductsInput>, Enumerable<cartsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutProductsInput>
    createMany?: cartsCreateManyProductsInputEnvelope
    connect?: Enumerable<cartsWhereUniqueInput>
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutProductsInput>, Enumerable<order_itemsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutProductsInput>
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: Enumerable<order_itemsWhereUniqueInput>
  }

  export type developersCreateNestedOneWithoutProductsInput = {
    create?: XOR<developersCreateWithoutProductsInput, developersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: developersCreateOrConnectWithoutProductsInput
    connect?: developersWhereUniqueInput
  }

  export type cartsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<cartsCreateWithoutProductsInput>, Enumerable<cartsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutProductsInput>
    createMany?: cartsCreateManyProductsInputEnvelope
    connect?: Enumerable<cartsWhereUniqueInput>
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutProductsInput>, Enumerable<order_itemsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutProductsInput>
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: Enumerable<order_itemsWhereUniqueInput>
  }

  export type cartsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<cartsCreateWithoutProductsInput>, Enumerable<cartsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<cartsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: cartsCreateManyProductsInputEnvelope
    set?: Enumerable<cartsWhereUniqueInput>
    disconnect?: Enumerable<cartsWhereUniqueInput>
    delete?: Enumerable<cartsWhereUniqueInput>
    connect?: Enumerable<cartsWhereUniqueInput>
    update?: Enumerable<cartsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<cartsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<cartsScalarWhereInput>
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutProductsInput>, Enumerable<order_itemsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<order_itemsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: Enumerable<order_itemsWhereUniqueInput>
    disconnect?: Enumerable<order_itemsWhereUniqueInput>
    delete?: Enumerable<order_itemsWhereUniqueInput>
    connect?: Enumerable<order_itemsWhereUniqueInput>
    update?: Enumerable<order_itemsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<order_itemsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<order_itemsScalarWhereInput>
  }

  export type developersUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<developersCreateWithoutProductsInput, developersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: developersCreateOrConnectWithoutProductsInput
    upsert?: developersUpsertWithoutProductsInput
    connect?: developersWhereUniqueInput
    update?: XOR<developersUpdateWithoutProductsInput, developersUncheckedUpdateWithoutProductsInput>
  }

  export type cartsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<cartsCreateWithoutProductsInput>, Enumerable<cartsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<cartsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: cartsCreateManyProductsInputEnvelope
    set?: Enumerable<cartsWhereUniqueInput>
    disconnect?: Enumerable<cartsWhereUniqueInput>
    delete?: Enumerable<cartsWhereUniqueInput>
    connect?: Enumerable<cartsWhereUniqueInput>
    update?: Enumerable<cartsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<cartsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<cartsScalarWhereInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<order_itemsCreateWithoutProductsInput>, Enumerable<order_itemsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<order_itemsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<order_itemsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: Enumerable<order_itemsWhereUniqueInput>
    disconnect?: Enumerable<order_itemsWhereUniqueInput>
    delete?: Enumerable<order_itemsWhereUniqueInput>
    connect?: Enumerable<order_itemsWhereUniqueInput>
    update?: Enumerable<order_itemsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<order_itemsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<order_itemsScalarWhereInput>
  }

  export type cartsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<cartsCreateWithoutUsersInput>, Enumerable<cartsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutUsersInput>
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: Enumerable<cartsWhereUniqueInput>
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type developersCreateNestedOneWithoutUsersInput = {
    create?: XOR<developersCreateWithoutUsersInput, developersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: developersCreateOrConnectWithoutUsersInput
    connect?: developersWhereUniqueInput
  }

  export type cartsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<cartsCreateWithoutUsersInput>, Enumerable<cartsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutUsersInput>
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: Enumerable<cartsWhereUniqueInput>
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type cartsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<cartsCreateWithoutUsersInput>, Enumerable<cartsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<cartsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: Enumerable<cartsWhereUniqueInput>
    disconnect?: Enumerable<cartsWhereUniqueInput>
    delete?: Enumerable<cartsWhereUniqueInput>
    connect?: Enumerable<cartsWhereUniqueInput>
    update?: Enumerable<cartsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<cartsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<cartsScalarWhereInput>
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    connect?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type developersUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<developersCreateWithoutUsersInput, developersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: developersCreateOrConnectWithoutUsersInput
    upsert?: developersUpsertWithoutUsersInput
    connect?: developersWhereUniqueInput
    update?: XOR<developersUpdateWithoutUsersInput, developersUncheckedUpdateWithoutUsersInput>
  }

  export type cartsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<cartsCreateWithoutUsersInput>, Enumerable<cartsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<cartsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<cartsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: Enumerable<cartsWhereUniqueInput>
    disconnect?: Enumerable<cartsWhereUniqueInput>
    delete?: Enumerable<cartsWhereUniqueInput>
    connect?: Enumerable<cartsWhereUniqueInput>
    update?: Enumerable<cartsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<cartsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<cartsScalarWhereInput>
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    connect?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type usersCreateWithoutCartsInput = {
    user_id: string
    status?: number
    customer_id: string
    orders?: ordersCreateNestedManyWithoutUsersInput
    developers: developersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCartsInput = {
    user_id: string
    status?: number
    customer_id: string
    developer_id: string
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCartsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
  }

  export type productsCreateWithoutCartsInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    image: string
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    developers: developersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCartsInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    developer_id: string
    image: string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCartsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCartsInput, productsUncheckedCreateWithoutCartsInput>
  }

  export type usersUpsertWithoutCartsInput = {
    update: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
  }

  export type usersUpdateWithoutCartsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    orders?: ordersUpdateManyWithoutUsersNestedInput
    developers?: developersUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCartsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    developer_id?: StringFieldUpdateOperationsInput | string
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type productsUpsertWithoutCartsInput = {
    update: XOR<productsUpdateWithoutCartsInput, productsUncheckedUpdateWithoutCartsInput>
    create: XOR<productsCreateWithoutCartsInput, productsUncheckedCreateWithoutCartsInput>
  }

  export type productsUpdateWithoutCartsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    developers?: developersUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCartsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    developer_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateWithoutDevelopersInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    image: string
    carts?: cartsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutDevelopersInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    image: string
    carts?: cartsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutDevelopersInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutDevelopersInput, productsUncheckedCreateWithoutDevelopersInput>
  }

  export type productsCreateManyDevelopersInputEnvelope = {
    data: Enumerable<productsCreateManyDevelopersInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutDevelopersInput = {
    user_id: string
    status?: number
    customer_id: string
    carts?: cartsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDevelopersInput = {
    user_id: string
    status?: number
    customer_id: string
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDevelopersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDevelopersInput, usersUncheckedCreateWithoutDevelopersInput>
  }

  export type usersCreateManyDevelopersInputEnvelope = {
    data: Enumerable<usersCreateManyDevelopersInput>
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutDevelopersInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutDevelopersInput, productsUncheckedUpdateWithoutDevelopersInput>
    create: XOR<productsCreateWithoutDevelopersInput, productsUncheckedCreateWithoutDevelopersInput>
  }

  export type productsUpdateWithWhereUniqueWithoutDevelopersInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutDevelopersInput, productsUncheckedUpdateWithoutDevelopersInput>
  }

  export type productsUpdateManyWithWhereWithoutDevelopersInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type productsScalarWhereInput = {
    AND?: Enumerable<productsScalarWhereInput>
    OR?: Enumerable<productsScalarWhereInput>
    NOT?: Enumerable<productsScalarWhereInput>
    product_id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    price?: IntFilter | number
    stock?: IntFilter | number
    status?: IntFilter | number
    developer_id?: StringFilter | string
    image?: StringFilter | string
  }

  export type usersUpsertWithWhereUniqueWithoutDevelopersInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutDevelopersInput, usersUncheckedUpdateWithoutDevelopersInput>
    create: XOR<usersCreateWithoutDevelopersInput, usersUncheckedCreateWithoutDevelopersInput>
  }

  export type usersUpdateWithWhereUniqueWithoutDevelopersInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutDevelopersInput, usersUncheckedUpdateWithoutDevelopersInput>
  }

  export type usersUpdateManyWithWhereWithoutDevelopersInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    user_id?: StringFilter | string
    status?: IntFilter | number
    customer_id?: StringFilter | string
    developer_id?: StringFilter | string
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    bank: string
    va_number?: string | null
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    user_id: string
    bank: string
    va_number?: string | null
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    image: string
    carts?: cartsCreateNestedManyWithoutProductsInput
    developers: developersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    developer_id: string
    image: string
    carts?: cartsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutProductsNestedInput
    developers?: developersUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    developer_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type order_itemsCreateWithoutOrdersInput = {
    quantity: number
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number
    quantity: number
    product_id: string
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: Enumerable<order_itemsCreateManyOrdersInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrdersInput = {
    user_id: string
    status?: number
    customer_id: string
    carts?: cartsCreateNestedManyWithoutUsersInput
    developers: developersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    user_id: string
    status?: number
    customer_id: string
    developer_id: string
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrder_itemsInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: Enumerable<order_itemsScalarWhereInput>
    OR?: Enumerable<order_itemsScalarWhereInput>
    NOT?: Enumerable<order_itemsScalarWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    order_id?: StringFilter | string
    product_id?: StringFilter | string
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutUsersNestedInput
    developers?: developersUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    developer_id?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type cartsCreateWithoutProductsInput = {
    quantity: number
    cart_id: string
    users: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutProductsInput = {
    quantity: number
    user_id: string
    cart_id: string
  }

  export type cartsCreateOrConnectWithoutProductsInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutProductsInput, cartsUncheckedCreateWithoutProductsInput>
  }

  export type cartsCreateManyProductsInputEnvelope = {
    data: Enumerable<cartsCreateManyProductsInput>
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutProductsInput = {
    quantity: number
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    quantity: number
    order_id: string
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: Enumerable<order_itemsCreateManyProductsInput>
    skipDuplicates?: boolean
  }

  export type developersCreateWithoutProductsInput = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status?: number
    balance?: number
    users?: usersCreateNestedManyWithoutDevelopersInput
  }

  export type developersUncheckedCreateWithoutProductsInput = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status?: number
    balance?: number
    users?: usersUncheckedCreateNestedManyWithoutDevelopersInput
  }

  export type developersCreateOrConnectWithoutProductsInput = {
    where: developersWhereUniqueInput
    create: XOR<developersCreateWithoutProductsInput, developersUncheckedCreateWithoutProductsInput>
  }

  export type cartsUpsertWithWhereUniqueWithoutProductsInput = {
    where: cartsWhereUniqueInput
    update: XOR<cartsUpdateWithoutProductsInput, cartsUncheckedUpdateWithoutProductsInput>
    create: XOR<cartsCreateWithoutProductsInput, cartsUncheckedCreateWithoutProductsInput>
  }

  export type cartsUpdateWithWhereUniqueWithoutProductsInput = {
    where: cartsWhereUniqueInput
    data: XOR<cartsUpdateWithoutProductsInput, cartsUncheckedUpdateWithoutProductsInput>
  }

  export type cartsUpdateManyWithWhereWithoutProductsInput = {
    where: cartsScalarWhereInput
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyWithoutCartsInput>
  }

  export type cartsScalarWhereInput = {
    AND?: Enumerable<cartsScalarWhereInput>
    OR?: Enumerable<cartsScalarWhereInput>
    NOT?: Enumerable<cartsScalarWhereInput>
    quantity?: IntFilter | number
    user_id?: StringFilter | string
    product_id?: StringFilter | string
    cart_id?: StringFilter | string
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrder_itemsInput>
  }

  export type developersUpsertWithoutProductsInput = {
    update: XOR<developersUpdateWithoutProductsInput, developersUncheckedUpdateWithoutProductsInput>
    create: XOR<developersCreateWithoutProductsInput, developersUncheckedCreateWithoutProductsInput>
  }

  export type developersUpdateWithoutProductsInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateManyWithoutDevelopersNestedInput
  }

  export type developersUncheckedUpdateWithoutProductsInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    users?: usersUncheckedUpdateManyWithoutDevelopersNestedInput
  }

  export type cartsCreateWithoutUsersInput = {
    quantity: number
    cart_id: string
    products: productsCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutUsersInput = {
    quantity: number
    product_id: string
    cart_id: string
  }

  export type cartsCreateOrConnectWithoutUsersInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsCreateManyUsersInputEnvelope = {
    data: Enumerable<cartsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    bank: string
    va_number?: string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    bank: string
    va_number?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: Enumerable<ordersCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type developersCreateWithoutUsersInput = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status?: number
    balance?: number
    products?: productsCreateNestedManyWithoutDevelopersInput
  }

  export type developersUncheckedCreateWithoutUsersInput = {
    developer_id: string
    username: string
    password: string
    email: string
    full_name: string
    display_name: string
    status?: number
    balance?: number
    products?: productsUncheckedCreateNestedManyWithoutDevelopersInput
  }

  export type developersCreateOrConnectWithoutUsersInput = {
    where: developersWhereUniqueInput
    create: XOR<developersCreateWithoutUsersInput, developersUncheckedCreateWithoutUsersInput>
  }

  export type cartsUpsertWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    update: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsUpdateWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    data: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
  }

  export type cartsUpdateManyWithWhereWithoutUsersInput = {
    where: cartsScalarWhereInput
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyWithoutCartsInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: Enumerable<ordersScalarWhereInput>
    OR?: Enumerable<ordersScalarWhereInput>
    NOT?: Enumerable<ordersScalarWhereInput>
    order_id?: StringFilter | string
    invoice?: StringFilter | string
    date?: DateTimeFilter | Date | string
    total?: IntFilter | number
    status?: IntFilter | number
    user_id?: StringFilter | string
    bank?: StringFilter | string
    va_number?: StringNullableFilter | string | null
  }

  export type developersUpsertWithoutUsersInput = {
    update: XOR<developersUpdateWithoutUsersInput, developersUncheckedUpdateWithoutUsersInput>
    create: XOR<developersCreateWithoutUsersInput, developersUncheckedCreateWithoutUsersInput>
  }

  export type developersUpdateWithoutUsersInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateManyWithoutDevelopersNestedInput
  }

  export type developersUncheckedUpdateWithoutUsersInput = {
    developer_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutDevelopersNestedInput
  }

  export type productsCreateManyDevelopersInput = {
    product_id: string
    name: string
    description: string
    price: number
    stock: number
    status?: number
    image: string
  }

  export type usersCreateManyDevelopersInput = {
    user_id: string
    status?: number
    customer_id: string
  }

  export type productsUpdateWithoutDevelopersInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutDevelopersInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutProductsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpdateWithoutDevelopersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDevelopersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsCreateManyOrdersInput = {
    id?: number
    quantity: number
    product_id: string
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsUncheckedUpdateManyWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type cartsCreateManyProductsInput = {
    quantity: number
    user_id: string
    cart_id: string
  }

  export type order_itemsCreateManyProductsInput = {
    id?: number
    quantity: number
    order_id: string
  }

  export type cartsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart_id?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type cartsUncheckedUpdateManyWithoutCartsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
  }

  export type cartsCreateManyUsersInput = {
    quantity: number
    product_id: string
    cart_id: string
  }

  export type ordersCreateManyUsersInput = {
    order_id: string
    invoice: string
    date: Date | string
    total: number
    status?: number
    bank: string
    va_number?: string | null
  }

  export type cartsUpdateWithoutUsersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    cart_id?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutUsersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type ordersUpdateWithoutUsersInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutOrdersInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    va_number?: NullableStringFieldUpdateOperationsInput | string | null
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