
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuthorProfile
 * 
 */
export type AuthorProfile = $Result.DefaultSelection<Prisma.$AuthorProfilePayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PeopleMessages
 * 
 */
export type PeopleMessages = $Result.DefaultSelection<Prisma.$PeopleMessagesPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model Follows
 * 
 */
export type Follows = $Result.DefaultSelection<Prisma.$FollowsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  AUTHER: 'AUTHER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VoteType: {
  UP: 'UP',
  DOWN: 'DOWN'
};

export type VoteType = (typeof VoteType)[keyof typeof VoteType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VoteType = $Enums.VoteType

export const VoteType: typeof $Enums.VoteType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.authorProfile`: Exposes CRUD operations for the **AuthorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorProfiles
    * const authorProfiles = await prisma.authorProfile.findMany()
    * ```
    */
  get authorProfile(): Prisma.AuthorProfileDelegate<ExtArgs>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.peopleMessages`: Exposes CRUD operations for the **PeopleMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeopleMessages
    * const peopleMessages = await prisma.peopleMessages.findMany()
    * ```
    */
  get peopleMessages(): Prisma.PeopleMessagesDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **Follows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follows.findMany()
    * ```
    */
  get follows(): Prisma.FollowsDelegate<ExtArgs>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Account: 'Account',
    User: 'User',
    AuthorProfile: 'AuthorProfile',
    Experience: 'Experience',
    Education: 'Education',
    Category: 'Category',
    Post: 'Post',
    PeopleMessages: 'PeopleMessages',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Comment: 'Comment',
    Vote: 'Vote',
    Follows: 'Follows'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'user' | 'authorProfile' | 'experience' | 'education' | 'category' | 'post' | 'peopleMessages' | 'session' | 'verificationToken' | 'comment' | 'vote' | 'follows'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuthorProfile: {
        payload: Prisma.$AuthorProfilePayload<ExtArgs>
        fields: Prisma.AuthorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload>
          }
          findFirst: {
            args: Prisma.AuthorProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload>
          }
          findMany: {
            args: Prisma.AuthorProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload>[]
          }
          create: {
            args: Prisma.AuthorProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload>
          }
          createMany: {
            args: Prisma.AuthorProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuthorProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload>
          }
          update: {
            args: Prisma.AuthorProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload>
          }
          deleteMany: {
            args: Prisma.AuthorProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuthorProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthorProfilePayload>
          }
          aggregate: {
            args: Prisma.AuthorProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthorProfile>
          }
          groupBy: {
            args: Prisma.AuthorProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthorProfileCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>,
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>,
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PeopleMessages: {
        payload: Prisma.$PeopleMessagesPayload<ExtArgs>
        fields: Prisma.PeopleMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeopleMessagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeopleMessagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload>
          }
          findFirst: {
            args: Prisma.PeopleMessagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeopleMessagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload>
          }
          findMany: {
            args: Prisma.PeopleMessagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload>[]
          }
          create: {
            args: Prisma.PeopleMessagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload>
          }
          createMany: {
            args: Prisma.PeopleMessagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PeopleMessagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload>
          }
          update: {
            args: Prisma.PeopleMessagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload>
          }
          deleteMany: {
            args: Prisma.PeopleMessagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PeopleMessagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PeopleMessagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeopleMessagesPayload>
          }
          aggregate: {
            args: Prisma.PeopleMessagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePeopleMessages>
          }
          groupBy: {
            args: Prisma.PeopleMessagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PeopleMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeopleMessagesCountArgs<ExtArgs>,
            result: $Utils.Optional<PeopleMessagesCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>,
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      Follows: {
        payload: Prisma.$FollowsPayload<ExtArgs>
        fields: Prisma.FollowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findFirst: {
            args: Prisma.FollowsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findMany: {
            args: Prisma.FollowsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[]
          }
          create: {
            args: Prisma.FollowsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          createMany: {
            args: Prisma.FollowsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          update: {
            args: Prisma.FollowsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          deleteMany: {
            args: Prisma.FollowsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollows>
          }
          groupBy: {
            args: Prisma.FollowsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowsCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    following: number
    posts: number
    messages: number
    comments: number
    votes: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeopleMessagesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type AuthorProfileCountOutputType
   */

  export type AuthorProfileCountOutputType = {
    followers: number
    education: number
    experience: number
  }

  export type AuthorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | AuthorProfileCountOutputTypeCountFollowersArgs
    education?: boolean | AuthorProfileCountOutputTypeCountEducationArgs
    experience?: boolean | AuthorProfileCountOutputTypeCountExperienceArgs
  }

  // Custom InputTypes

  /**
   * AuthorProfileCountOutputType without action
   */
  export type AuthorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfileCountOutputType
     */
    select?: AuthorProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AuthorProfileCountOutputType without action
   */
  export type AuthorProfileCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }


  /**
   * AuthorProfileCountOutputType without action
   */
  export type AuthorProfileCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }


  /**
   * AuthorProfileCountOutputType without action
   */
  export type AuthorProfileCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
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
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    category: number
    comments: number
    votes: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PostCountOutputTypeCountCategoryArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    votes?: boolean | PostCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    username: string | null
    image: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    username: string | null
    image: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    username: number
    image: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    username?: true
    image?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    username?: true
    image?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    username?: true
    image?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    username: string | null
    image: string | null
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    username?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    following?: boolean | User$followingArgs<ExtArgs>
    autherProfile?: boolean | User$autherProfileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    username?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | User$followingArgs<ExtArgs>
    autherProfile?: boolean | User$autherProfileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      following: Prisma.$FollowsPayload<ExtArgs>[]
      autherProfile: Prisma.$AuthorProfilePayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      messages: Prisma.$PeopleMessagesPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      username: string | null
      image: string | null
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'findMany'> | Null>;

    autherProfile<T extends User$autherProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$autherProfileArgs<ExtArgs>>): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'findMany'> | Null>;

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * User.autherProfile
   */
  export type User$autherProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    where?: AuthorProfileWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    where?: PeopleMessagesWhereInput
    orderBy?: PeopleMessagesOrderByWithRelationInput | PeopleMessagesOrderByWithRelationInput[]
    cursor?: PeopleMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeopleMessagesScalarFieldEnum | PeopleMessagesScalarFieldEnum[]
  }


  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model AuthorProfile
   */

  export type AggregateAuthorProfile = {
    _count: AuthorProfileCountAggregateOutputType | null
    _min: AuthorProfileMinAggregateOutputType | null
    _max: AuthorProfileMaxAggregateOutputType | null
  }

  export type AuthorProfileMinAggregateOutputType = {
    id: string | null
    bio: string | null
    idcard: string | null
    phone: string | null
    website: string | null
    location: string | null
    birthDate: string | null
    specialization: string | null
    userId: string | null
  }

  export type AuthorProfileMaxAggregateOutputType = {
    id: string | null
    bio: string | null
    idcard: string | null
    phone: string | null
    website: string | null
    location: string | null
    birthDate: string | null
    specialization: string | null
    userId: string | null
  }

  export type AuthorProfileCountAggregateOutputType = {
    id: number
    bio: number
    idcard: number
    phone: number
    website: number
    socialLinks: number
    location: number
    birthDate: number
    specialization: number
    skills: number
    userId: number
    _all: number
  }


  export type AuthorProfileMinAggregateInputType = {
    id?: true
    bio?: true
    idcard?: true
    phone?: true
    website?: true
    location?: true
    birthDate?: true
    specialization?: true
    userId?: true
  }

  export type AuthorProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    idcard?: true
    phone?: true
    website?: true
    location?: true
    birthDate?: true
    specialization?: true
    userId?: true
  }

  export type AuthorProfileCountAggregateInputType = {
    id?: true
    bio?: true
    idcard?: true
    phone?: true
    website?: true
    socialLinks?: true
    location?: true
    birthDate?: true
    specialization?: true
    skills?: true
    userId?: true
    _all?: true
  }

  export type AuthorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorProfile to aggregate.
     */
    where?: AuthorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorProfiles to fetch.
     */
    orderBy?: AuthorProfileOrderByWithRelationInput | AuthorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorProfiles
    **/
    _count?: true | AuthorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorProfileMaxAggregateInputType
  }

  export type GetAuthorProfileAggregateType<T extends AuthorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorProfile[P]>
      : GetScalarType<T[P], AggregateAuthorProfile[P]>
  }




  export type AuthorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorProfileWhereInput
    orderBy?: AuthorProfileOrderByWithAggregationInput | AuthorProfileOrderByWithAggregationInput[]
    by: AuthorProfileScalarFieldEnum[] | AuthorProfileScalarFieldEnum
    having?: AuthorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorProfileCountAggregateInputType | true
    _min?: AuthorProfileMinAggregateInputType
    _max?: AuthorProfileMaxAggregateInputType
  }

  export type AuthorProfileGroupByOutputType = {
    id: string
    bio: string
    idcard: string | null
    phone: string | null
    website: string | null
    socialLinks: JsonValue | null
    location: string
    birthDate: string | null
    specialization: string | null
    skills: string[]
    userId: string
    _count: AuthorProfileCountAggregateOutputType | null
    _min: AuthorProfileMinAggregateOutputType | null
    _max: AuthorProfileMaxAggregateOutputType | null
  }

  type GetAuthorProfileGroupByPayload<T extends AuthorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorProfileGroupByOutputType[P]>
        }
      >
    >


  export type AuthorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    idcard?: boolean
    phone?: boolean
    website?: boolean
    socialLinks?: boolean
    location?: boolean
    birthDate?: boolean
    specialization?: boolean
    skills?: boolean
    userId?: boolean
    followers?: boolean | AuthorProfile$followersArgs<ExtArgs>
    education?: boolean | AuthorProfile$educationArgs<ExtArgs>
    experience?: boolean | AuthorProfile$experienceArgs<ExtArgs>
    user?: boolean | AuthorProfile$userArgs<ExtArgs>
    _count?: boolean | AuthorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorProfile"]>

  export type AuthorProfileSelectScalar = {
    id?: boolean
    bio?: boolean
    idcard?: boolean
    phone?: boolean
    website?: boolean
    socialLinks?: boolean
    location?: boolean
    birthDate?: boolean
    specialization?: boolean
    skills?: boolean
    userId?: boolean
  }

  export type AuthorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | AuthorProfile$followersArgs<ExtArgs>
    education?: boolean | AuthorProfile$educationArgs<ExtArgs>
    experience?: boolean | AuthorProfile$experienceArgs<ExtArgs>
    user?: boolean | AuthorProfile$userArgs<ExtArgs>
    _count?: boolean | AuthorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AuthorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorProfile"
    objects: {
      followers: Prisma.$FollowsPayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bio: string
      idcard: string | null
      phone: string | null
      website: string | null
      socialLinks: Prisma.JsonValue | null
      location: string
      birthDate: string | null
      specialization: string | null
      skills: string[]
      userId: string
    }, ExtArgs["result"]["authorProfile"]>
    composites: {}
  }


  type AuthorProfileGetPayload<S extends boolean | null | undefined | AuthorProfileDefaultArgs> = $Result.GetResult<Prisma.$AuthorProfilePayload, S>

  type AuthorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorProfileFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AuthorProfileCountAggregateInputType | true
    }

  export interface AuthorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorProfile'], meta: { name: 'AuthorProfile' } }
    /**
     * Find zero or one AuthorProfile that matches the filter.
     * @param {AuthorProfileFindUniqueArgs} args - Arguments to find a AuthorProfile
     * @example
     * // Get one AuthorProfile
     * const authorProfile = await prisma.authorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuthorProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthorProfileFindUniqueOrThrowArgs} args - Arguments to find a AuthorProfile
     * @example
     * // Get one AuthorProfile
     * const authorProfile = await prisma.authorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuthorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorProfileFindFirstArgs} args - Arguments to find a AuthorProfile
     * @example
     * // Get one AuthorProfile
     * const authorProfile = await prisma.authorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorProfileFindFirstArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuthorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorProfileFindFirstOrThrowArgs} args - Arguments to find a AuthorProfile
     * @example
     * // Get one AuthorProfile
     * const authorProfile = await prisma.authorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuthorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorProfiles
     * const authorProfiles = await prisma.authorProfile.findMany()
     * 
     * // Get first 10 AuthorProfiles
     * const authorProfiles = await prisma.authorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorProfileWithIdOnly = await prisma.authorProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthorProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuthorProfile.
     * @param {AuthorProfileCreateArgs} args - Arguments to create a AuthorProfile.
     * @example
     * // Create one AuthorProfile
     * const AuthorProfile = await prisma.authorProfile.create({
     *   data: {
     *     // ... data to create a AuthorProfile
     *   }
     * })
     * 
    **/
    create<T extends AuthorProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorProfileCreateArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuthorProfiles.
     *     @param {AuthorProfileCreateManyArgs} args - Arguments to create many AuthorProfiles.
     *     @example
     *     // Create many AuthorProfiles
     *     const authorProfile = await prisma.authorProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuthorProfile.
     * @param {AuthorProfileDeleteArgs} args - Arguments to delete one AuthorProfile.
     * @example
     * // Delete one AuthorProfile
     * const AuthorProfile = await prisma.authorProfile.delete({
     *   where: {
     *     // ... filter to delete one AuthorProfile
     *   }
     * })
     * 
    **/
    delete<T extends AuthorProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorProfileDeleteArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuthorProfile.
     * @param {AuthorProfileUpdateArgs} args - Arguments to update one AuthorProfile.
     * @example
     * // Update one AuthorProfile
     * const authorProfile = await prisma.authorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorProfileUpdateArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuthorProfiles.
     * @param {AuthorProfileDeleteManyArgs} args - Arguments to filter AuthorProfiles to delete.
     * @example
     * // Delete a few AuthorProfiles
     * const { count } = await prisma.authorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthorProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorProfiles
     * const authorProfile = await prisma.authorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthorProfile.
     * @param {AuthorProfileUpsertArgs} args - Arguments to update or create a AuthorProfile.
     * @example
     * // Update or create a AuthorProfile
     * const authorProfile = await prisma.authorProfile.upsert({
     *   create: {
     *     // ... data to create a AuthorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorProfile we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthorProfileUpsertArgs<ExtArgs>>
    ): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AuthorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorProfileCountArgs} args - Arguments to filter AuthorProfiles to count.
     * @example
     * // Count the number of AuthorProfiles
     * const count = await prisma.authorProfile.count({
     *   where: {
     *     // ... the filter for the AuthorProfiles we want to count
     *   }
     * })
    **/
    count<T extends AuthorProfileCountArgs>(
      args?: Subset<T, AuthorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorProfileAggregateArgs>(args: Subset<T, AuthorProfileAggregateArgs>): Prisma.PrismaPromise<GetAuthorProfileAggregateType<T>>

    /**
     * Group by AuthorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorProfileGroupByArgs} args - Group by arguments.
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
      T extends AuthorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorProfileGroupByArgs['orderBy'] }
        : { orderBy?: AuthorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorProfile model
   */
  readonly fields: AuthorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    followers<T extends AuthorProfile$followersArgs<ExtArgs> = {}>(args?: Subset<T, AuthorProfile$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'findMany'> | Null>;

    education<T extends AuthorProfile$educationArgs<ExtArgs> = {}>(args?: Subset<T, AuthorProfile$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'findMany'> | Null>;

    experience<T extends AuthorProfile$experienceArgs<ExtArgs> = {}>(args?: Subset<T, AuthorProfile$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends AuthorProfile$userArgs<ExtArgs> = {}>(args?: Subset<T, AuthorProfile$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AuthorProfile model
   */ 
  interface AuthorProfileFieldRefs {
    readonly id: FieldRef<"AuthorProfile", 'String'>
    readonly bio: FieldRef<"AuthorProfile", 'String'>
    readonly idcard: FieldRef<"AuthorProfile", 'String'>
    readonly phone: FieldRef<"AuthorProfile", 'String'>
    readonly website: FieldRef<"AuthorProfile", 'String'>
    readonly socialLinks: FieldRef<"AuthorProfile", 'Json'>
    readonly location: FieldRef<"AuthorProfile", 'String'>
    readonly birthDate: FieldRef<"AuthorProfile", 'String'>
    readonly specialization: FieldRef<"AuthorProfile", 'String'>
    readonly skills: FieldRef<"AuthorProfile", 'String[]'>
    readonly userId: FieldRef<"AuthorProfile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AuthorProfile findUnique
   */
  export type AuthorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * Filter, which AuthorProfile to fetch.
     */
    where: AuthorProfileWhereUniqueInput
  }


  /**
   * AuthorProfile findUniqueOrThrow
   */
  export type AuthorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * Filter, which AuthorProfile to fetch.
     */
    where: AuthorProfileWhereUniqueInput
  }


  /**
   * AuthorProfile findFirst
   */
  export type AuthorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * Filter, which AuthorProfile to fetch.
     */
    where?: AuthorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorProfiles to fetch.
     */
    orderBy?: AuthorProfileOrderByWithRelationInput | AuthorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorProfiles.
     */
    cursor?: AuthorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorProfiles.
     */
    distinct?: AuthorProfileScalarFieldEnum | AuthorProfileScalarFieldEnum[]
  }


  /**
   * AuthorProfile findFirstOrThrow
   */
  export type AuthorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * Filter, which AuthorProfile to fetch.
     */
    where?: AuthorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorProfiles to fetch.
     */
    orderBy?: AuthorProfileOrderByWithRelationInput | AuthorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorProfiles.
     */
    cursor?: AuthorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorProfiles.
     */
    distinct?: AuthorProfileScalarFieldEnum | AuthorProfileScalarFieldEnum[]
  }


  /**
   * AuthorProfile findMany
   */
  export type AuthorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * Filter, which AuthorProfiles to fetch.
     */
    where?: AuthorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorProfiles to fetch.
     */
    orderBy?: AuthorProfileOrderByWithRelationInput | AuthorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorProfiles.
     */
    cursor?: AuthorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorProfiles.
     */
    skip?: number
    distinct?: AuthorProfileScalarFieldEnum | AuthorProfileScalarFieldEnum[]
  }


  /**
   * AuthorProfile create
   */
  export type AuthorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorProfile.
     */
    data: XOR<AuthorProfileCreateInput, AuthorProfileUncheckedCreateInput>
  }


  /**
   * AuthorProfile createMany
   */
  export type AuthorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorProfiles.
     */
    data: AuthorProfileCreateManyInput | AuthorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AuthorProfile update
   */
  export type AuthorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorProfile.
     */
    data: XOR<AuthorProfileUpdateInput, AuthorProfileUncheckedUpdateInput>
    /**
     * Choose, which AuthorProfile to update.
     */
    where: AuthorProfileWhereUniqueInput
  }


  /**
   * AuthorProfile updateMany
   */
  export type AuthorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorProfiles.
     */
    data: XOR<AuthorProfileUpdateManyMutationInput, AuthorProfileUncheckedUpdateManyInput>
    /**
     * Filter which AuthorProfiles to update
     */
    where?: AuthorProfileWhereInput
  }


  /**
   * AuthorProfile upsert
   */
  export type AuthorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorProfile to update in case it exists.
     */
    where: AuthorProfileWhereUniqueInput
    /**
     * In case the AuthorProfile found by the `where` argument doesn't exist, create a new AuthorProfile with this data.
     */
    create: XOR<AuthorProfileCreateInput, AuthorProfileUncheckedCreateInput>
    /**
     * In case the AuthorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorProfileUpdateInput, AuthorProfileUncheckedUpdateInput>
  }


  /**
   * AuthorProfile delete
   */
  export type AuthorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    /**
     * Filter which AuthorProfile to delete.
     */
    where: AuthorProfileWhereUniqueInput
  }


  /**
   * AuthorProfile deleteMany
   */
  export type AuthorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorProfiles to delete
     */
    where?: AuthorProfileWhereInput
  }


  /**
   * AuthorProfile.followers
   */
  export type AuthorProfile$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * AuthorProfile.education
   */
  export type AuthorProfile$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }


  /**
   * AuthorProfile.experience
   */
  export type AuthorProfile$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * AuthorProfile.user
   */
  export type AuthorProfile$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * AuthorProfile without action
   */
  export type AuthorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
  }



  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    position: string | null
    company: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    authorProfileId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    position: string | null
    company: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    authorProfileId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    position: number
    company: number
    startDate: number
    endDate: number
    description: number
    authorProfileId: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    position?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    authorProfileId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    position?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    authorProfileId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    position?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    authorProfileId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    position: string
    company: string
    startDate: string
    endDate: string | null
    description: string
    authorProfileId: string
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    authorProfileId?: boolean
    authorProfile?: boolean | AuthorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    position?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    authorProfileId?: boolean
  }

  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorProfile?: boolean | AuthorProfileDefaultArgs<ExtArgs>
  }


  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      authorProfile: Prisma.$AuthorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      position: string
      company: string
      startDate: string
      endDate: string | null
      description: string
      authorProfileId: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }


  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExperienceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Experience that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExperienceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExperienceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
    **/
    create<T extends ExperienceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Experiences.
     *     @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     *     @example
     *     // Create many Experiences
     *     const experience = await prisma.experience.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExperienceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
    **/
    delete<T extends ExperienceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExperienceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExperienceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExperienceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
    **/
    upsert<T extends ExperienceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    authorProfile<T extends AuthorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorProfileDefaultArgs<ExtArgs>>): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Experience model
   */ 
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly position: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'String'>
    readonly endDate: FieldRef<"Experience", 'String'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly authorProfileId: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }


  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
  }


  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }


  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
  }


  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
  }



  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    field: string | null
    startYear: string | null
    endYear: string | null
    authorProfileId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    field: string | null
    startYear: string | null
    endYear: string | null
    authorProfileId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    institution: number
    degree: number
    field: number
    startYear: number
    endYear: number
    authorProfileId: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    field?: true
    startYear?: true
    endYear?: true
    authorProfileId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    field?: true
    startYear?: true
    endYear?: true
    authorProfileId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    field?: true
    startYear?: true
    endYear?: true
    authorProfileId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear: string | null
    authorProfileId: string
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startYear?: boolean
    endYear?: boolean
    authorProfileId?: boolean
    authorProfile?: boolean | AuthorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startYear?: boolean
    endYear?: boolean
    authorProfileId?: boolean
  }

  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorProfile?: boolean | AuthorProfileDefaultArgs<ExtArgs>
  }


  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      authorProfile: Prisma.$AuthorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institution: string
      degree: string
      field: string
      startYear: string
      endYear: string | null
      authorProfileId: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }


  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EducationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Education that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EducationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EducationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
    **/
    create<T extends EducationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EducationCreateArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Educations.
     *     @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     *     @example
     *     // Create many Educations
     *     const education = await prisma.education.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EducationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
    **/
    delete<T extends EducationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EducationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EducationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EducationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
    **/
    upsert<T extends EducationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>
    ): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    authorProfile<T extends AuthorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorProfileDefaultArgs<ExtArgs>>): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Education model
   */ 
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly institution: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly field: FieldRef<"Education", 'String'>
    readonly startYear: FieldRef<"Education", 'String'>
    readonly endYear: FieldRef<"Education", 'String'>
    readonly authorProfileId: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }


  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }


  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }


  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }


  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }


  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }


  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }


  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
  }


  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }


  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }


  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
  }


  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EducationInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
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




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
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


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
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
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
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
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
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
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    briefdescription: string | null
    image: string | null
    published: boolean | null
    featured: boolean | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    briefdescription: string | null
    image: string | null
    published: boolean | null
    featured: boolean | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    briefdescription: number
    image: number
    published: number
    featured: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    briefdescription?: true
    image?: true
    published?: true
    featured?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    briefdescription?: true
    image?: true
    published?: true
    featured?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    briefdescription?: true
    image?: true
    published?: true
    featured?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: JsonValue
    briefdescription: string | null
    image: string
    published: boolean
    featured: boolean
    authorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    briefdescription?: boolean
    image?: boolean
    published?: boolean
    featured?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
    category?: boolean | Post$categoryArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    votes?: boolean | Post$votesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    briefdescription?: boolean
    image?: boolean
    published?: boolean
    featured?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
    category?: boolean | Post$categoryArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    votes?: boolean | Post$votesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: Prisma.JsonValue
      briefdescription: string | null
      image: string
      published: boolean
      featured: boolean
      authorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends Post$authorArgs<ExtArgs> = {}>(args?: Subset<T, Post$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    category<T extends Post$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    votes<T extends Post$votesArgs<ExtArgs> = {}>(args?: Subset<T, Post$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'Json'>
    readonly briefdescription: FieldRef<"Post", 'String'>
    readonly image: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly featured: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.author
   */
  export type Post$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Post.category
   */
  export type Post$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Post.votes
   */
  export type Post$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model PeopleMessages
   */

  export type AggregatePeopleMessages = {
    _count: PeopleMessagesCountAggregateOutputType | null
    _min: PeopleMessagesMinAggregateOutputType | null
    _max: PeopleMessagesMaxAggregateOutputType | null
  }

  export type PeopleMessagesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeopleMessagesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeopleMessagesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeopleMessagesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeopleMessagesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeopleMessagesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeopleMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeopleMessages to aggregate.
     */
    where?: PeopleMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeopleMessages to fetch.
     */
    orderBy?: PeopleMessagesOrderByWithRelationInput | PeopleMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeopleMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeopleMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeopleMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeopleMessages
    **/
    _count?: true | PeopleMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeopleMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeopleMessagesMaxAggregateInputType
  }

  export type GetPeopleMessagesAggregateType<T extends PeopleMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePeopleMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeopleMessages[P]>
      : GetScalarType<T[P], AggregatePeopleMessages[P]>
  }




  export type PeopleMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeopleMessagesWhereInput
    orderBy?: PeopleMessagesOrderByWithAggregationInput | PeopleMessagesOrderByWithAggregationInput[]
    by: PeopleMessagesScalarFieldEnum[] | PeopleMessagesScalarFieldEnum
    having?: PeopleMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeopleMessagesCountAggregateInputType | true
    _min?: PeopleMessagesMinAggregateInputType
    _max?: PeopleMessagesMaxAggregateInputType
  }

  export type PeopleMessagesGroupByOutputType = {
    id: string
    name: string
    email: string | null
    message: string
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PeopleMessagesCountAggregateOutputType | null
    _min: PeopleMessagesMinAggregateOutputType | null
    _max: PeopleMessagesMaxAggregateOutputType | null
  }

  type GetPeopleMessagesGroupByPayload<T extends PeopleMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeopleMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeopleMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeopleMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], PeopleMessagesGroupByOutputType[P]>
        }
      >
    >


  export type PeopleMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDetails?: boolean | PeopleMessages$userDetailsArgs<ExtArgs>
  }, ExtArgs["result"]["peopleMessages"]>

  export type PeopleMessagesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeopleMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | PeopleMessages$userDetailsArgs<ExtArgs>
  }


  export type $PeopleMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeopleMessages"
    objects: {
      userDetails: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      message: string
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peopleMessages"]>
    composites: {}
  }


  type PeopleMessagesGetPayload<S extends boolean | null | undefined | PeopleMessagesDefaultArgs> = $Result.GetResult<Prisma.$PeopleMessagesPayload, S>

  type PeopleMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeopleMessagesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PeopleMessagesCountAggregateInputType | true
    }

  export interface PeopleMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeopleMessages'], meta: { name: 'PeopleMessages' } }
    /**
     * Find zero or one PeopleMessages that matches the filter.
     * @param {PeopleMessagesFindUniqueArgs} args - Arguments to find a PeopleMessages
     * @example
     * // Get one PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PeopleMessagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PeopleMessagesFindUniqueArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PeopleMessages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PeopleMessagesFindUniqueOrThrowArgs} args - Arguments to find a PeopleMessages
     * @example
     * // Get one PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PeopleMessagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeopleMessagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PeopleMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleMessagesFindFirstArgs} args - Arguments to find a PeopleMessages
     * @example
     * // Get one PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PeopleMessagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PeopleMessagesFindFirstArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PeopleMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleMessagesFindFirstOrThrowArgs} args - Arguments to find a PeopleMessages
     * @example
     * // Get one PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PeopleMessagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeopleMessagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PeopleMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleMessagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.findMany()
     * 
     * // Get first 10 PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peopleMessagesWithIdOnly = await prisma.peopleMessages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PeopleMessagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeopleMessagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PeopleMessages.
     * @param {PeopleMessagesCreateArgs} args - Arguments to create a PeopleMessages.
     * @example
     * // Create one PeopleMessages
     * const PeopleMessages = await prisma.peopleMessages.create({
     *   data: {
     *     // ... data to create a PeopleMessages
     *   }
     * })
     * 
    **/
    create<T extends PeopleMessagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PeopleMessagesCreateArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PeopleMessages.
     *     @param {PeopleMessagesCreateManyArgs} args - Arguments to create many PeopleMessages.
     *     @example
     *     // Create many PeopleMessages
     *     const peopleMessages = await prisma.peopleMessages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PeopleMessagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeopleMessagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PeopleMessages.
     * @param {PeopleMessagesDeleteArgs} args - Arguments to delete one PeopleMessages.
     * @example
     * // Delete one PeopleMessages
     * const PeopleMessages = await prisma.peopleMessages.delete({
     *   where: {
     *     // ... filter to delete one PeopleMessages
     *   }
     * })
     * 
    **/
    delete<T extends PeopleMessagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PeopleMessagesDeleteArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PeopleMessages.
     * @param {PeopleMessagesUpdateArgs} args - Arguments to update one PeopleMessages.
     * @example
     * // Update one PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PeopleMessagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PeopleMessagesUpdateArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PeopleMessages.
     * @param {PeopleMessagesDeleteManyArgs} args - Arguments to filter PeopleMessages to delete.
     * @example
     * // Delete a few PeopleMessages
     * const { count } = await prisma.peopleMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PeopleMessagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeopleMessagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeopleMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PeopleMessagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PeopleMessagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PeopleMessages.
     * @param {PeopleMessagesUpsertArgs} args - Arguments to update or create a PeopleMessages.
     * @example
     * // Update or create a PeopleMessages
     * const peopleMessages = await prisma.peopleMessages.upsert({
     *   create: {
     *     // ... data to create a PeopleMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeopleMessages we want to update
     *   }
     * })
    **/
    upsert<T extends PeopleMessagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PeopleMessagesUpsertArgs<ExtArgs>>
    ): Prisma__PeopleMessagesClient<$Result.GetResult<Prisma.$PeopleMessagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PeopleMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleMessagesCountArgs} args - Arguments to filter PeopleMessages to count.
     * @example
     * // Count the number of PeopleMessages
     * const count = await prisma.peopleMessages.count({
     *   where: {
     *     // ... the filter for the PeopleMessages we want to count
     *   }
     * })
    **/
    count<T extends PeopleMessagesCountArgs>(
      args?: Subset<T, PeopleMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeopleMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeopleMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeopleMessagesAggregateArgs>(args: Subset<T, PeopleMessagesAggregateArgs>): Prisma.PrismaPromise<GetPeopleMessagesAggregateType<T>>

    /**
     * Group by PeopleMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeopleMessagesGroupByArgs} args - Group by arguments.
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
      T extends PeopleMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeopleMessagesGroupByArgs['orderBy'] }
        : { orderBy?: PeopleMessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeopleMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeopleMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeopleMessages model
   */
  readonly fields: PeopleMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeopleMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeopleMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userDetails<T extends PeopleMessages$userDetailsArgs<ExtArgs> = {}>(args?: Subset<T, PeopleMessages$userDetailsArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PeopleMessages model
   */ 
  interface PeopleMessagesFieldRefs {
    readonly id: FieldRef<"PeopleMessages", 'String'>
    readonly name: FieldRef<"PeopleMessages", 'String'>
    readonly email: FieldRef<"PeopleMessages", 'String'>
    readonly message: FieldRef<"PeopleMessages", 'String'>
    readonly userId: FieldRef<"PeopleMessages", 'String'>
    readonly createdAt: FieldRef<"PeopleMessages", 'DateTime'>
    readonly updatedAt: FieldRef<"PeopleMessages", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PeopleMessages findUnique
   */
  export type PeopleMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * Filter, which PeopleMessages to fetch.
     */
    where: PeopleMessagesWhereUniqueInput
  }


  /**
   * PeopleMessages findUniqueOrThrow
   */
  export type PeopleMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * Filter, which PeopleMessages to fetch.
     */
    where: PeopleMessagesWhereUniqueInput
  }


  /**
   * PeopleMessages findFirst
   */
  export type PeopleMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * Filter, which PeopleMessages to fetch.
     */
    where?: PeopleMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeopleMessages to fetch.
     */
    orderBy?: PeopleMessagesOrderByWithRelationInput | PeopleMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeopleMessages.
     */
    cursor?: PeopleMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeopleMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeopleMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeopleMessages.
     */
    distinct?: PeopleMessagesScalarFieldEnum | PeopleMessagesScalarFieldEnum[]
  }


  /**
   * PeopleMessages findFirstOrThrow
   */
  export type PeopleMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * Filter, which PeopleMessages to fetch.
     */
    where?: PeopleMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeopleMessages to fetch.
     */
    orderBy?: PeopleMessagesOrderByWithRelationInput | PeopleMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeopleMessages.
     */
    cursor?: PeopleMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeopleMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeopleMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeopleMessages.
     */
    distinct?: PeopleMessagesScalarFieldEnum | PeopleMessagesScalarFieldEnum[]
  }


  /**
   * PeopleMessages findMany
   */
  export type PeopleMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * Filter, which PeopleMessages to fetch.
     */
    where?: PeopleMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeopleMessages to fetch.
     */
    orderBy?: PeopleMessagesOrderByWithRelationInput | PeopleMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeopleMessages.
     */
    cursor?: PeopleMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeopleMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeopleMessages.
     */
    skip?: number
    distinct?: PeopleMessagesScalarFieldEnum | PeopleMessagesScalarFieldEnum[]
  }


  /**
   * PeopleMessages create
   */
  export type PeopleMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a PeopleMessages.
     */
    data: XOR<PeopleMessagesCreateInput, PeopleMessagesUncheckedCreateInput>
  }


  /**
   * PeopleMessages createMany
   */
  export type PeopleMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeopleMessages.
     */
    data: PeopleMessagesCreateManyInput | PeopleMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PeopleMessages update
   */
  export type PeopleMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a PeopleMessages.
     */
    data: XOR<PeopleMessagesUpdateInput, PeopleMessagesUncheckedUpdateInput>
    /**
     * Choose, which PeopleMessages to update.
     */
    where: PeopleMessagesWhereUniqueInput
  }


  /**
   * PeopleMessages updateMany
   */
  export type PeopleMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeopleMessages.
     */
    data: XOR<PeopleMessagesUpdateManyMutationInput, PeopleMessagesUncheckedUpdateManyInput>
    /**
     * Filter which PeopleMessages to update
     */
    where?: PeopleMessagesWhereInput
  }


  /**
   * PeopleMessages upsert
   */
  export type PeopleMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the PeopleMessages to update in case it exists.
     */
    where: PeopleMessagesWhereUniqueInput
    /**
     * In case the PeopleMessages found by the `where` argument doesn't exist, create a new PeopleMessages with this data.
     */
    create: XOR<PeopleMessagesCreateInput, PeopleMessagesUncheckedCreateInput>
    /**
     * In case the PeopleMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeopleMessagesUpdateInput, PeopleMessagesUncheckedUpdateInput>
  }


  /**
   * PeopleMessages delete
   */
  export type PeopleMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
    /**
     * Filter which PeopleMessages to delete.
     */
    where: PeopleMessagesWhereUniqueInput
  }


  /**
   * PeopleMessages deleteMany
   */
  export type PeopleMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeopleMessages to delete
     */
    where?: PeopleMessagesWhereInput
  }


  /**
   * PeopleMessages.userDetails
   */
  export type PeopleMessages$userDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * PeopleMessages without action
   */
  export type PeopleMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeopleMessages
     */
    select?: PeopleMessagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeopleMessagesInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    message: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    message: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    message: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    message: string
    postId: string
    userId: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    message?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      postId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly message: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    userId: string | null
    postId: string | null
    type: $Enums.VoteType | null
  }

  export type VoteMaxAggregateOutputType = {
    userId: string | null
    postId: string | null
    type: $Enums.VoteType | null
  }

  export type VoteCountAggregateOutputType = {
    userId: number
    postId: number
    type: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    userId?: true
    postId?: true
    type?: true
  }

  export type VoteMaxAggregateInputType = {
    userId?: true
    postId?: true
    type?: true
  }

  export type VoteCountAggregateInputType = {
    userId?: true
    postId?: true
    type?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    userId: string
    postId: string
    type: $Enums.VoteType
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postId?: boolean
    type?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    userId?: boolean
    postId?: boolean
    type?: boolean
  }

  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      postId: string
      type: $Enums.VoteType
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }


  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vote that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const voteWithUserIdOnly = await prisma.vote.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends VoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
    **/
    create<T extends VoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VoteCreateArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Votes.
     *     @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     *     @example
     *     // Create many Votes
     *     const vote = await prisma.vote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
    **/
    delete<T extends VoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
    **/
    upsert<T extends VoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>
    ): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
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
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vote model
   */ 
  interface VoteFieldRefs {
    readonly userId: FieldRef<"Vote", 'String'>
    readonly postId: FieldRef<"Vote", 'String'>
    readonly type: FieldRef<"Vote", 'VoteType'>
  }
    

  // Custom InputTypes

  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }


  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }


  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }


  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }


  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }


  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }


  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }


  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
  }


  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }


  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }


  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
  }


  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteInclude<ExtArgs> | null
  }



  /**
   * Model Follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  export type FollowsMinAggregateOutputType = {
    followerId: string | null
    followingId: string | null
  }

  export type FollowsMaxAggregateOutputType = {
    followerId: string | null
    followingId: string | null
  }

  export type FollowsCountAggregateOutputType = {
    followerId: number
    followingId: number
    _all: number
  }


  export type FollowsMinAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowsMaxAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowsCountAggregateInputType = {
    followerId?: true
    followingId?: true
    _all?: true
  }

  export type FollowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to aggregate.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowsMaxAggregateInputType
  }

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>
  }




  export type FollowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithAggregationInput | FollowsOrderByWithAggregationInput[]
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum
    having?: FollowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowsCountAggregateInputType | true
    _min?: FollowsMinAggregateInputType
    _max?: FollowsMaxAggregateInputType
  }

  export type FollowsGroupByOutputType = {
    followerId: string
    followingId: string
    _count: FollowsCountAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  type GetFollowsGroupByPayload<T extends FollowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>
        }
      >
    >


  export type FollowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    followerId?: boolean
    followingId?: boolean
    followers?: boolean | Follows$followersArgs<ExtArgs>
    following?: boolean | Follows$followingArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type FollowsSelectScalar = {
    followerId?: boolean
    followingId?: boolean
  }

  export type FollowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | Follows$followersArgs<ExtArgs>
    following?: boolean | Follows$followingArgs<ExtArgs>
  }


  export type $FollowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follows"
    objects: {
      followers: Prisma.$AuthorProfilePayload<ExtArgs> | null
      following: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      followerId: string
      followingId: string
    }, ExtArgs["result"]["follows"]>
    composites: {}
  }


  type FollowsGetPayload<S extends boolean | null | undefined | FollowsDefaultArgs> = $Result.GetResult<Prisma.$FollowsPayload, S>

  type FollowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FollowsCountAggregateInputType | true
    }

  export interface FollowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follows'], meta: { name: 'Follows' } }
    /**
     * Find zero or one Follows that matches the filter.
     * @param {FollowsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowsFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Follows that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowsFindFirstArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     * 
     * // Only select the `followerId`
     * const followsWithFollowerIdOnly = await prisma.follows.findMany({ select: { followerId: true } })
     * 
    **/
    findMany<T extends FollowsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Follows.
     * @param {FollowsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     * 
    **/
    create<T extends FollowsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowsCreateArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Follows.
     *     @param {FollowsCreateManyArgs} args - Arguments to create many Follows.
     *     @example
     *     // Create many Follows
     *     const follows = await prisma.follows.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follows.
     * @param {FollowsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     * 
    **/
    delete<T extends FollowsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowsDeleteArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Follows.
     * @param {FollowsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowsUpdateArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Follows.
     * @param {FollowsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follows.
     * @param {FollowsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
    **/
    upsert<T extends FollowsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowsUpsertArgs<ExtArgs>>
    ): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowsCountArgs>(
      args?: Subset<T, FollowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowsAggregateArgs>(args: Subset<T, FollowsAggregateArgs>): Prisma.PrismaPromise<GetFollowsAggregateType<T>>

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsGroupByArgs} args - Group by arguments.
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
      T extends FollowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowsGroupByArgs['orderBy'] }
        : { orderBy?: FollowsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follows model
   */
  readonly fields: FollowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    followers<T extends Follows$followersArgs<ExtArgs> = {}>(args?: Subset<T, Follows$followersArgs<ExtArgs>>): Prisma__AuthorProfileClient<$Result.GetResult<Prisma.$AuthorProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    following<T extends Follows$followingArgs<ExtArgs> = {}>(args?: Subset<T, Follows$followingArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Follows model
   */ 
  interface FollowsFieldRefs {
    readonly followerId: FieldRef<"Follows", 'String'>
    readonly followingId: FieldRef<"Follows", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Follows findUnique
   */
  export type FollowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }


  /**
   * Follows findUniqueOrThrow
   */
  export type FollowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }


  /**
   * Follows findFirst
   */
  export type FollowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * Follows findFirstOrThrow
   */
  export type FollowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * Follows findMany
   */
  export type FollowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * Follows create
   */
  export type FollowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Follows.
     */
    data: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
  }


  /**
   * Follows createMany
   */
  export type FollowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Follows update
   */
  export type FollowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Follows.
     */
    data: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
    /**
     * Choose, which Follows to update.
     */
    where: FollowsWhereUniqueInput
  }


  /**
   * Follows updateMany
   */
  export type FollowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput
  }


  /**
   * Follows upsert
   */
  export type FollowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Follows to update in case it exists.
     */
    where: FollowsWhereUniqueInput
    /**
     * In case the Follows found by the `where` argument doesn't exist, create a new Follows with this data.
     */
    create: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
    /**
     * In case the Follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
  }


  /**
   * Follows delete
   */
  export type FollowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter which Follows to delete.
     */
    where: FollowsWhereUniqueInput
  }


  /**
   * Follows deleteMany
   */
  export type FollowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowsWhereInput
  }


  /**
   * Follows.followers
   */
  export type Follows$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorProfile
     */
    select?: AuthorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthorProfileInclude<ExtArgs> | null
    where?: AuthorProfileWhereInput
  }


  /**
   * Follows.following
   */
  export type Follows$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Follows without action
   */
  export type FollowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowsInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    username: 'username',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthorProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    idcard: 'idcard',
    phone: 'phone',
    website: 'website',
    socialLinks: 'socialLinks',
    location: 'location',
    birthDate: 'birthDate',
    specialization: 'specialization',
    skills: 'skills',
    userId: 'userId'
  };

  export type AuthorProfileScalarFieldEnum = (typeof AuthorProfileScalarFieldEnum)[keyof typeof AuthorProfileScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    position: 'position',
    company: 'company',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    authorProfileId: 'authorProfileId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    degree: 'degree',
    field: 'field',
    startYear: 'startYear',
    endYear: 'endYear',
    authorProfileId: 'authorProfileId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    briefdescription: 'briefdescription',
    image: 'image',
    published: 'published',
    featured: 'featured',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PeopleMessagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeopleMessagesScalarFieldEnum = (typeof PeopleMessagesScalarFieldEnum)[keyof typeof PeopleMessagesScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    message: 'message',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    userId: 'userId',
    postId: 'postId',
    type: 'type'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const FollowsScalarFieldEnum: {
    followerId: 'followerId',
    followingId: 'followingId'
  };

  export type FollowsScalarFieldEnum = (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VoteType'
   */
  export type EnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoteType'>
    


  /**
   * Reference to a field of type 'VoteType[]'
   */
  export type ListEnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoteType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    username?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    following?: FollowsListRelationFilter
    autherProfile?: XOR<AuthorProfileNullableRelationFilter, AuthorProfileWhereInput> | null
    posts?: PostListRelationFilter
    messages?: PeopleMessagesListRelationFilter
    comments?: CommentListRelationFilter
    votes?: VoteListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    following?: FollowsOrderByRelationAggregateInput
    autherProfile?: AuthorProfileOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    messages?: PeopleMessagesOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    username?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    following?: FollowsListRelationFilter
    autherProfile?: XOR<AuthorProfileNullableRelationFilter, AuthorProfileWhereInput> | null
    posts?: PostListRelationFilter
    messages?: PeopleMessagesListRelationFilter
    comments?: CommentListRelationFilter
    votes?: VoteListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AuthorProfileWhereInput = {
    AND?: AuthorProfileWhereInput | AuthorProfileWhereInput[]
    OR?: AuthorProfileWhereInput[]
    NOT?: AuthorProfileWhereInput | AuthorProfileWhereInput[]
    id?: StringFilter<"AuthorProfile"> | string
    bio?: StringFilter<"AuthorProfile"> | string
    idcard?: StringNullableFilter<"AuthorProfile"> | string | null
    phone?: StringNullableFilter<"AuthorProfile"> | string | null
    website?: StringNullableFilter<"AuthorProfile"> | string | null
    socialLinks?: JsonNullableFilter<"AuthorProfile">
    location?: StringFilter<"AuthorProfile"> | string
    birthDate?: StringNullableFilter<"AuthorProfile"> | string | null
    specialization?: StringNullableFilter<"AuthorProfile"> | string | null
    skills?: StringNullableListFilter<"AuthorProfile">
    userId?: StringFilter<"AuthorProfile"> | string
    followers?: FollowsListRelationFilter
    education?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AuthorProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    idcard?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    location?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    skills?: SortOrder
    userId?: SortOrder
    followers?: FollowsOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    experience?: ExperienceOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type AuthorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AuthorProfileWhereInput | AuthorProfileWhereInput[]
    OR?: AuthorProfileWhereInput[]
    NOT?: AuthorProfileWhereInput | AuthorProfileWhereInput[]
    bio?: StringFilter<"AuthorProfile"> | string
    idcard?: StringNullableFilter<"AuthorProfile"> | string | null
    phone?: StringNullableFilter<"AuthorProfile"> | string | null
    website?: StringNullableFilter<"AuthorProfile"> | string | null
    socialLinks?: JsonNullableFilter<"AuthorProfile">
    location?: StringFilter<"AuthorProfile"> | string
    birthDate?: StringNullableFilter<"AuthorProfile"> | string | null
    specialization?: StringNullableFilter<"AuthorProfile"> | string | null
    skills?: StringNullableListFilter<"AuthorProfile">
    followers?: FollowsListRelationFilter
    education?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type AuthorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    idcard?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    location?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    skills?: SortOrder
    userId?: SortOrder
    _count?: AuthorProfileCountOrderByAggregateInput
    _max?: AuthorProfileMaxOrderByAggregateInput
    _min?: AuthorProfileMinOrderByAggregateInput
  }

  export type AuthorProfileScalarWhereWithAggregatesInput = {
    AND?: AuthorProfileScalarWhereWithAggregatesInput | AuthorProfileScalarWhereWithAggregatesInput[]
    OR?: AuthorProfileScalarWhereWithAggregatesInput[]
    NOT?: AuthorProfileScalarWhereWithAggregatesInput | AuthorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthorProfile"> | string
    bio?: StringWithAggregatesFilter<"AuthorProfile"> | string
    idcard?: StringNullableWithAggregatesFilter<"AuthorProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"AuthorProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"AuthorProfile"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"AuthorProfile">
    location?: StringWithAggregatesFilter<"AuthorProfile"> | string
    birthDate?: StringNullableWithAggregatesFilter<"AuthorProfile"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"AuthorProfile"> | string | null
    skills?: StringNullableListFilter<"AuthorProfile">
    userId?: StringWithAggregatesFilter<"AuthorProfile"> | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: StringFilter<"Experience"> | string
    endDate?: StringNullableFilter<"Experience"> | string | null
    description?: StringFilter<"Experience"> | string
    authorProfileId?: StringFilter<"Experience"> | string
    authorProfile?: XOR<AuthorProfileRelationFilter, AuthorProfileWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    authorProfileId?: SortOrder
    authorProfile?: AuthorProfileOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    position?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: StringFilter<"Experience"> | string
    endDate?: StringNullableFilter<"Experience"> | string | null
    description?: StringFilter<"Experience"> | string
    authorProfileId?: StringFilter<"Experience"> | string
    authorProfile?: XOR<AuthorProfileRelationFilter, AuthorProfileWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    authorProfileId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    position?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    startDate?: StringWithAggregatesFilter<"Experience"> | string
    endDate?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    description?: StringWithAggregatesFilter<"Experience"> | string
    authorProfileId?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startYear?: StringFilter<"Education"> | string
    endYear?: StringNullableFilter<"Education"> | string | null
    authorProfileId?: StringFilter<"Education"> | string
    authorProfile?: XOR<AuthorProfileRelationFilter, AuthorProfileWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrderInput | SortOrder
    authorProfileId?: SortOrder
    authorProfile?: AuthorProfileOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startYear?: StringFilter<"Education"> | string
    endYear?: StringNullableFilter<"Education"> | string | null
    authorProfileId?: StringFilter<"Education"> | string
    authorProfile?: XOR<AuthorProfileRelationFilter, AuthorProfileWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrderInput | SortOrder
    authorProfileId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    institution?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    field?: StringWithAggregatesFilter<"Education"> | string
    startYear?: StringWithAggregatesFilter<"Education"> | string
    endYear?: StringNullableWithAggregatesFilter<"Education"> | string | null
    authorProfileId?: StringWithAggregatesFilter<"Education"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    posts?: PostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    posts?: PostListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: JsonFilter<"Post">
    briefdescription?: StringNullableFilter<"Post"> | string | null
    image?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    featured?: BoolFilter<"Post"> | boolean
    authorId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    category?: CategoryListRelationFilter
    comments?: CommentListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    briefdescription?: SortOrderInput | SortOrder
    image?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    category?: CategoryOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: JsonFilter<"Post">
    briefdescription?: StringNullableFilter<"Post"> | string | null
    image?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    featured?: BoolFilter<"Post"> | boolean
    authorId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    category?: CategoryListRelationFilter
    comments?: CommentListRelationFilter
    votes?: VoteListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    briefdescription?: SortOrderInput | SortOrder
    image?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: JsonWithAggregatesFilter<"Post">
    briefdescription?: StringNullableWithAggregatesFilter<"Post"> | string | null
    image?: StringWithAggregatesFilter<"Post"> | string
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    featured?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PeopleMessagesWhereInput = {
    AND?: PeopleMessagesWhereInput | PeopleMessagesWhereInput[]
    OR?: PeopleMessagesWhereInput[]
    NOT?: PeopleMessagesWhereInput | PeopleMessagesWhereInput[]
    id?: StringFilter<"PeopleMessages"> | string
    name?: StringFilter<"PeopleMessages"> | string
    email?: StringNullableFilter<"PeopleMessages"> | string | null
    message?: StringFilter<"PeopleMessages"> | string
    userId?: StringNullableFilter<"PeopleMessages"> | string | null
    createdAt?: DateTimeFilter<"PeopleMessages"> | Date | string
    updatedAt?: DateTimeFilter<"PeopleMessages"> | Date | string
    userDetails?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type PeopleMessagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    message?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userDetails?: UserOrderByWithRelationInput
  }

  export type PeopleMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PeopleMessagesWhereInput | PeopleMessagesWhereInput[]
    OR?: PeopleMessagesWhereInput[]
    NOT?: PeopleMessagesWhereInput | PeopleMessagesWhereInput[]
    name?: StringFilter<"PeopleMessages"> | string
    email?: StringNullableFilter<"PeopleMessages"> | string | null
    message?: StringFilter<"PeopleMessages"> | string
    userId?: StringNullableFilter<"PeopleMessages"> | string | null
    createdAt?: DateTimeFilter<"PeopleMessages"> | Date | string
    updatedAt?: DateTimeFilter<"PeopleMessages"> | Date | string
    userDetails?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type PeopleMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    message?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeopleMessagesCountOrderByAggregateInput
    _max?: PeopleMessagesMaxOrderByAggregateInput
    _min?: PeopleMessagesMinOrderByAggregateInput
  }

  export type PeopleMessagesScalarWhereWithAggregatesInput = {
    AND?: PeopleMessagesScalarWhereWithAggregatesInput | PeopleMessagesScalarWhereWithAggregatesInput[]
    OR?: PeopleMessagesScalarWhereWithAggregatesInput[]
    NOT?: PeopleMessagesScalarWhereWithAggregatesInput | PeopleMessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PeopleMessages"> | string
    name?: StringWithAggregatesFilter<"PeopleMessages"> | string
    email?: StringNullableWithAggregatesFilter<"PeopleMessages"> | string | null
    message?: StringWithAggregatesFilter<"PeopleMessages"> | string
    userId?: StringNullableWithAggregatesFilter<"PeopleMessages"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PeopleMessages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PeopleMessages"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    message?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    message?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    userId?: StringFilter<"Vote"> | string
    postId?: StringFilter<"Vote"> | string
    type?: EnumVoteTypeFilter<"Vote"> | $Enums.VoteType
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    userId_postId?: VoteUserIdPostIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    userId?: StringFilter<"Vote"> | string
    postId?: StringFilter<"Vote"> | string
    type?: EnumVoteTypeFilter<"Vote"> | $Enums.VoteType
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId_postId">

  export type VoteOrderByWithAggregationInput = {
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Vote"> | string
    postId?: StringWithAggregatesFilter<"Vote"> | string
    type?: EnumVoteTypeWithAggregatesFilter<"Vote"> | $Enums.VoteType
  }

  export type FollowsWhereInput = {
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    followerId?: StringFilter<"Follows"> | string
    followingId?: StringFilter<"Follows"> | string
    followers?: XOR<AuthorProfileNullableRelationFilter, AuthorProfileWhereInput> | null
    following?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type FollowsOrderByWithRelationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    followers?: AuthorProfileOrderByWithRelationInput
    following?: UserOrderByWithRelationInput
  }

  export type FollowsWhereUniqueInput = Prisma.AtLeast<{
    followerId_followingId?: FollowsFollowerIdFollowingIdCompoundUniqueInput
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    followerId?: StringFilter<"Follows"> | string
    followingId?: StringFilter<"Follows"> | string
    followers?: XOR<AuthorProfileNullableRelationFilter, AuthorProfileWhereInput> | null
    following?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "followerId_followingId">

  export type FollowsOrderByWithAggregationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    _count?: FollowsCountOrderByAggregateInput
    _max?: FollowsMaxOrderByAggregateInput
    _min?: FollowsMinOrderByAggregateInput
  }

  export type FollowsScalarWhereWithAggregatesInput = {
    AND?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    OR?: FollowsScalarWhereWithAggregatesInput[]
    NOT?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    followerId?: StringWithAggregatesFilter<"Follows"> | string
    followingId?: StringWithAggregatesFilter<"Follows"> | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorProfileCreateInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    followers?: FollowsCreateNestedManyWithoutFollowersInput
    education?: EducationCreateNestedManyWithoutAuthorProfileInput
    experience?: ExperienceCreateNestedManyWithoutAuthorProfileInput
    user?: UserCreateNestedOneWithoutAutherProfileInput
  }

  export type AuthorProfileUncheckedCreateInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    userId: string
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowersInput
    education?: EducationUncheckedCreateNestedManyWithoutAuthorProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutAuthorProfileInput
  }

  export type AuthorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    followers?: FollowsUpdateManyWithoutFollowersNestedInput
    education?: EducationUpdateManyWithoutAuthorProfileNestedInput
    experience?: ExperienceUpdateManyWithoutAuthorProfileNestedInput
    user?: UserUpdateOneWithoutAutherProfileNestedInput
  }

  export type AuthorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    followers?: FollowsUncheckedUpdateManyWithoutFollowersNestedInput
    education?: EducationUncheckedUpdateManyWithoutAuthorProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutAuthorProfileNestedInput
  }

  export type AuthorProfileCreateManyInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    userId: string
  }

  export type AuthorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
  }

  export type AuthorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    id?: string
    position: string
    company: string
    startDate: string
    endDate?: string | null
    description: string
    authorProfile: AuthorProfileCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    position: string
    company: string
    startDate: string
    endDate?: string | null
    description: string
    authorProfileId: string
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    authorProfile?: AuthorProfileUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    authorProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    position: string
    company: string
    startDate: string
    endDate?: string | null
    description: string
    authorProfileId: string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    authorProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear?: string | null
    authorProfile: AuthorProfileCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear?: string | null
    authorProfileId: string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startYear?: StringFieldUpdateOperationsInput | string
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    authorProfile?: AuthorProfileUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startYear?: StringFieldUpdateOperationsInput | string
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    authorProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear?: string | null
    authorProfileId: string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startYear?: StringFieldUpdateOperationsInput | string
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startYear?: StringFieldUpdateOperationsInput | string
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    authorProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    posts?: PostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeopleMessagesCreateInput = {
    id?: string
    name: string
    email?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userDetails?: UserCreateNestedOneWithoutMessagesInput
  }

  export type PeopleMessagesUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    message: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeopleMessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserUpdateOneWithoutMessagesNestedInput
  }

  export type PeopleMessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeopleMessagesCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    message: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeopleMessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeopleMessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    message: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    message: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    type: $Enums.VoteType
    post: PostCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    userId: string
    postId: string
    type: $Enums.VoteType
  }

  export type VoteUpdateInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    post?: PostUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteCreateManyInput = {
    userId: string
    postId: string
    type: $Enums.VoteType
  }

  export type VoteUpdateManyMutationInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type FollowsCreateInput = {
    followers?: AuthorProfileCreateNestedOneWithoutFollowersInput
    following?: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowsUncheckedCreateInput = {
    followerId: string
    followingId: string
  }

  export type FollowsUpdateInput = {
    followers?: AuthorProfileUpdateOneWithoutFollowersNestedInput
    following?: UserUpdateOneWithoutFollowingNestedInput
  }

  export type FollowsUncheckedUpdateInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowsCreateManyInput = {
    followerId: string
    followingId: string
  }

  export type FollowsUpdateManyMutationInput = {

  }

  export type FollowsUncheckedUpdateManyInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FollowsListRelationFilter = {
    every?: FollowsWhereInput
    some?: FollowsWhereInput
    none?: FollowsWhereInput
  }

  export type AuthorProfileNullableRelationFilter = {
    is?: AuthorProfileWhereInput | null
    isNot?: AuthorProfileWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PeopleMessagesListRelationFilter = {
    every?: PeopleMessagesWhereInput
    some?: PeopleMessagesWhereInput
    none?: PeopleMessagesWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FollowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeopleMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    username?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    idcard?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    socialLinks?: SortOrder
    location?: SortOrder
    birthDate?: SortOrder
    specialization?: SortOrder
    skills?: SortOrder
    userId?: SortOrder
  }

  export type AuthorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    idcard?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    location?: SortOrder
    birthDate?: SortOrder
    specialization?: SortOrder
    userId?: SortOrder
  }

  export type AuthorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    idcard?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    location?: SortOrder
    birthDate?: SortOrder
    specialization?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AuthorProfileRelationFilter = {
    is?: AuthorProfileWhereInput
    isNot?: AuthorProfileWhereInput
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    authorProfileId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    authorProfileId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    authorProfileId?: SortOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    authorProfileId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    authorProfileId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    authorProfileId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    briefdescription?: SortOrder
    image?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    briefdescription?: SortOrder
    image?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    briefdescription?: SortOrder
    image?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PeopleMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeopleMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeopleMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType
  }

  export type VoteUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type VoteCountOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
  }

  export type EnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>
  }

  export type FollowsFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: string
    followingId: string
  }

  export type FollowsCountOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowsMaxOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowsMinOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type FollowsCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type AuthorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<AuthorProfileCreateWithoutUserInput, AuthorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutUserInput
    connect?: AuthorProfileWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PeopleMessagesCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<PeopleMessagesCreateWithoutUserDetailsInput, PeopleMessagesUncheckedCreateWithoutUserDetailsInput> | PeopleMessagesCreateWithoutUserDetailsInput[] | PeopleMessagesUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PeopleMessagesCreateOrConnectWithoutUserDetailsInput | PeopleMessagesCreateOrConnectWithoutUserDetailsInput[]
    createMany?: PeopleMessagesCreateManyUserDetailsInputEnvelope
    connect?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type AuthorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AuthorProfileCreateWithoutUserInput, AuthorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutUserInput
    connect?: AuthorProfileWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<PeopleMessagesCreateWithoutUserDetailsInput, PeopleMessagesUncheckedCreateWithoutUserDetailsInput> | PeopleMessagesCreateWithoutUserDetailsInput[] | PeopleMessagesUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PeopleMessagesCreateOrConnectWithoutUserDetailsInput | PeopleMessagesCreateOrConnectWithoutUserDetailsInput[]
    createMany?: PeopleMessagesCreateManyUserDetailsInputEnvelope
    connect?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FollowsUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type AuthorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuthorProfileCreateWithoutUserInput, AuthorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutUserInput
    upsert?: AuthorProfileUpsertWithoutUserInput
    disconnect?: AuthorProfileWhereInput | boolean
    delete?: AuthorProfileWhereInput | boolean
    connect?: AuthorProfileWhereUniqueInput
    update?: XOR<XOR<AuthorProfileUpdateToOneWithWhereWithoutUserInput, AuthorProfileUpdateWithoutUserInput>, AuthorProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PeopleMessagesUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<PeopleMessagesCreateWithoutUserDetailsInput, PeopleMessagesUncheckedCreateWithoutUserDetailsInput> | PeopleMessagesCreateWithoutUserDetailsInput[] | PeopleMessagesUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PeopleMessagesCreateOrConnectWithoutUserDetailsInput | PeopleMessagesCreateOrConnectWithoutUserDetailsInput[]
    upsert?: PeopleMessagesUpsertWithWhereUniqueWithoutUserDetailsInput | PeopleMessagesUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: PeopleMessagesCreateManyUserDetailsInputEnvelope
    set?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    disconnect?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    delete?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    connect?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    update?: PeopleMessagesUpdateWithWhereUniqueWithoutUserDetailsInput | PeopleMessagesUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: PeopleMessagesUpdateManyWithWhereWithoutUserDetailsInput | PeopleMessagesUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: PeopleMessagesScalarWhereInput | PeopleMessagesScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type AuthorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuthorProfileCreateWithoutUserInput, AuthorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutUserInput
    upsert?: AuthorProfileUpsertWithoutUserInput
    disconnect?: AuthorProfileWhereInput | boolean
    delete?: AuthorProfileWhereInput | boolean
    connect?: AuthorProfileWhereUniqueInput
    update?: XOR<XOR<AuthorProfileUpdateToOneWithWhereWithoutUserInput, AuthorProfileUpdateWithoutUserInput>, AuthorProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<PeopleMessagesCreateWithoutUserDetailsInput, PeopleMessagesUncheckedCreateWithoutUserDetailsInput> | PeopleMessagesCreateWithoutUserDetailsInput[] | PeopleMessagesUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PeopleMessagesCreateOrConnectWithoutUserDetailsInput | PeopleMessagesCreateOrConnectWithoutUserDetailsInput[]
    upsert?: PeopleMessagesUpsertWithWhereUniqueWithoutUserDetailsInput | PeopleMessagesUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: PeopleMessagesCreateManyUserDetailsInputEnvelope
    set?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    disconnect?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    delete?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    connect?: PeopleMessagesWhereUniqueInput | PeopleMessagesWhereUniqueInput[]
    update?: PeopleMessagesUpdateWithWhereUniqueWithoutUserDetailsInput | PeopleMessagesUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: PeopleMessagesUpdateManyWithWhereWithoutUserDetailsInput | PeopleMessagesUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: PeopleMessagesScalarWhereInput | PeopleMessagesScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthorProfileCreateskillsInput = {
    set: string[]
  }

  export type FollowsCreateNestedManyWithoutFollowersInput = {
    create?: XOR<FollowsCreateWithoutFollowersInput, FollowsUncheckedCreateWithoutFollowersInput> | FollowsCreateWithoutFollowersInput[] | FollowsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowersInput | FollowsCreateOrConnectWithoutFollowersInput[]
    createMany?: FollowsCreateManyFollowersInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutAuthorProfileInput = {
    create?: XOR<EducationCreateWithoutAuthorProfileInput, EducationUncheckedCreateWithoutAuthorProfileInput> | EducationCreateWithoutAuthorProfileInput[] | EducationUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutAuthorProfileInput | EducationCreateOrConnectWithoutAuthorProfileInput[]
    createMany?: EducationCreateManyAuthorProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutAuthorProfileInput = {
    create?: XOR<ExperienceCreateWithoutAuthorProfileInput, ExperienceUncheckedCreateWithoutAuthorProfileInput> | ExperienceCreateWithoutAuthorProfileInput[] | ExperienceUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutAuthorProfileInput | ExperienceCreateOrConnectWithoutAuthorProfileInput[]
    createMany?: ExperienceCreateManyAuthorProfileInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAutherProfileInput = {
    create?: XOR<UserCreateWithoutAutherProfileInput, UserUncheckedCreateWithoutAutherProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutherProfileInput
    connect?: UserWhereUniqueInput
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<FollowsCreateWithoutFollowersInput, FollowsUncheckedCreateWithoutFollowersInput> | FollowsCreateWithoutFollowersInput[] | FollowsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowersInput | FollowsCreateOrConnectWithoutFollowersInput[]
    createMany?: FollowsCreateManyFollowersInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutAuthorProfileInput = {
    create?: XOR<EducationCreateWithoutAuthorProfileInput, EducationUncheckedCreateWithoutAuthorProfileInput> | EducationCreateWithoutAuthorProfileInput[] | EducationUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutAuthorProfileInput | EducationCreateOrConnectWithoutAuthorProfileInput[]
    createMany?: EducationCreateManyAuthorProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutAuthorProfileInput = {
    create?: XOR<ExperienceCreateWithoutAuthorProfileInput, ExperienceUncheckedCreateWithoutAuthorProfileInput> | ExperienceCreateWithoutAuthorProfileInput[] | ExperienceUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutAuthorProfileInput | ExperienceCreateOrConnectWithoutAuthorProfileInput[]
    createMany?: ExperienceCreateManyAuthorProfileInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type AuthorProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FollowsUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowersInput, FollowsUncheckedCreateWithoutFollowersInput> | FollowsCreateWithoutFollowersInput[] | FollowsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowersInput | FollowsCreateOrConnectWithoutFollowersInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowersInput | FollowsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: FollowsCreateManyFollowersInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowersInput | FollowsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowersInput | FollowsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutAuthorProfileNestedInput = {
    create?: XOR<EducationCreateWithoutAuthorProfileInput, EducationUncheckedCreateWithoutAuthorProfileInput> | EducationCreateWithoutAuthorProfileInput[] | EducationUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutAuthorProfileInput | EducationCreateOrConnectWithoutAuthorProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutAuthorProfileInput | EducationUpsertWithWhereUniqueWithoutAuthorProfileInput[]
    createMany?: EducationCreateManyAuthorProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutAuthorProfileInput | EducationUpdateWithWhereUniqueWithoutAuthorProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutAuthorProfileInput | EducationUpdateManyWithWhereWithoutAuthorProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutAuthorProfileNestedInput = {
    create?: XOR<ExperienceCreateWithoutAuthorProfileInput, ExperienceUncheckedCreateWithoutAuthorProfileInput> | ExperienceCreateWithoutAuthorProfileInput[] | ExperienceUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutAuthorProfileInput | ExperienceCreateOrConnectWithoutAuthorProfileInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutAuthorProfileInput | ExperienceUpsertWithWhereUniqueWithoutAuthorProfileInput[]
    createMany?: ExperienceCreateManyAuthorProfileInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutAuthorProfileInput | ExperienceUpdateWithWhereUniqueWithoutAuthorProfileInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutAuthorProfileInput | ExperienceUpdateManyWithWhereWithoutAuthorProfileInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAutherProfileNestedInput = {
    create?: XOR<UserCreateWithoutAutherProfileInput, UserUncheckedCreateWithoutAutherProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutherProfileInput
    upsert?: UserUpsertWithoutAutherProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAutherProfileInput, UserUpdateWithoutAutherProfileInput>, UserUncheckedUpdateWithoutAutherProfileInput>
  }

  export type FollowsUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowersInput, FollowsUncheckedCreateWithoutFollowersInput> | FollowsCreateWithoutFollowersInput[] | FollowsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowersInput | FollowsCreateOrConnectWithoutFollowersInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowersInput | FollowsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: FollowsCreateManyFollowersInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowersInput | FollowsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowersInput | FollowsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutAuthorProfileNestedInput = {
    create?: XOR<EducationCreateWithoutAuthorProfileInput, EducationUncheckedCreateWithoutAuthorProfileInput> | EducationCreateWithoutAuthorProfileInput[] | EducationUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutAuthorProfileInput | EducationCreateOrConnectWithoutAuthorProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutAuthorProfileInput | EducationUpsertWithWhereUniqueWithoutAuthorProfileInput[]
    createMany?: EducationCreateManyAuthorProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutAuthorProfileInput | EducationUpdateWithWhereUniqueWithoutAuthorProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutAuthorProfileInput | EducationUpdateManyWithWhereWithoutAuthorProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutAuthorProfileNestedInput = {
    create?: XOR<ExperienceCreateWithoutAuthorProfileInput, ExperienceUncheckedCreateWithoutAuthorProfileInput> | ExperienceCreateWithoutAuthorProfileInput[] | ExperienceUncheckedCreateWithoutAuthorProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutAuthorProfileInput | ExperienceCreateOrConnectWithoutAuthorProfileInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutAuthorProfileInput | ExperienceUpsertWithWhereUniqueWithoutAuthorProfileInput[]
    createMany?: ExperienceCreateManyAuthorProfileInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutAuthorProfileInput | ExperienceUpdateWithWhereUniqueWithoutAuthorProfileInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutAuthorProfileInput | ExperienceUpdateManyWithWhereWithoutAuthorProfileInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type AuthorProfileCreateNestedOneWithoutExperienceInput = {
    create?: XOR<AuthorProfileCreateWithoutExperienceInput, AuthorProfileUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutExperienceInput
    connect?: AuthorProfileWhereUniqueInput
  }

  export type AuthorProfileUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<AuthorProfileCreateWithoutExperienceInput, AuthorProfileUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutExperienceInput
    upsert?: AuthorProfileUpsertWithoutExperienceInput
    connect?: AuthorProfileWhereUniqueInput
    update?: XOR<XOR<AuthorProfileUpdateToOneWithWhereWithoutExperienceInput, AuthorProfileUpdateWithoutExperienceInput>, AuthorProfileUncheckedUpdateWithoutExperienceInput>
  }

  export type AuthorProfileCreateNestedOneWithoutEducationInput = {
    create?: XOR<AuthorProfileCreateWithoutEducationInput, AuthorProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutEducationInput
    connect?: AuthorProfileWhereUniqueInput
  }

  export type AuthorProfileUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<AuthorProfileCreateWithoutEducationInput, AuthorProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutEducationInput
    upsert?: AuthorProfileUpsertWithoutEducationInput
    connect?: AuthorProfileWhereUniqueInput
    update?: XOR<XOR<AuthorProfileUpdateToOneWithWhereWithoutEducationInput, AuthorProfileUpdateWithoutEducationInput>, AuthorProfileUncheckedUpdateWithoutEducationInput>
  }

  export type PostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutPostInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostsInput | CategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostsInput | CategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostsInput | CategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutPostNestedInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPostInput | VoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPostInput | VoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPostInput | VoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostsInput | CategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostsInput | CategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostsInput | CategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPostInput | VoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPostInput | VoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPostInput | VoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostCreateNestedOneWithoutVotesInput = {
    create?: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.VoteType
  }

  export type PostUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput
    upsert?: PostUpsertWithoutVotesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutVotesInput, PostUpdateWithoutVotesInput>, PostUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type AuthorProfileCreateNestedOneWithoutFollowersInput = {
    create?: XOR<AuthorProfileCreateWithoutFollowersInput, AuthorProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutFollowersInput
    connect?: AuthorProfileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type AuthorProfileUpdateOneWithoutFollowersNestedInput = {
    create?: XOR<AuthorProfileCreateWithoutFollowersInput, AuthorProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: AuthorProfileCreateOrConnectWithoutFollowersInput
    upsert?: AuthorProfileUpsertWithoutFollowersInput
    disconnect?: AuthorProfileWhereInput | boolean
    delete?: AuthorProfileWhereInput | boolean
    connect?: AuthorProfileWhereUniqueInput
    update?: XOR<XOR<AuthorProfileUpdateToOneWithWhereWithoutFollowersInput, AuthorProfileUpdateWithoutFollowersInput>, AuthorProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateOneWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType
  }

  export type NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FollowsCreateWithoutFollowingInput = {
    followers?: AuthorProfileCreateNestedOneWithoutFollowersInput
  }

  export type FollowsUncheckedCreateWithoutFollowingInput = {
    followerId: string
  }

  export type FollowsCreateOrConnectWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsCreateManyFollowingInputEnvelope = {
    data: FollowsCreateManyFollowingInput | FollowsCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type AuthorProfileCreateWithoutUserInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    followers?: FollowsCreateNestedManyWithoutFollowersInput
    education?: EducationCreateNestedManyWithoutAuthorProfileInput
    experience?: ExperienceCreateNestedManyWithoutAuthorProfileInput
  }

  export type AuthorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowersInput
    education?: EducationUncheckedCreateNestedManyWithoutAuthorProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutAuthorProfileInput
  }

  export type AuthorProfileCreateOrConnectWithoutUserInput = {
    where: AuthorProfileWhereUniqueInput
    create: XOR<AuthorProfileCreateWithoutUserInput, AuthorProfileUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PeopleMessagesCreateWithoutUserDetailsInput = {
    id?: string
    name: string
    email?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeopleMessagesUncheckedCreateWithoutUserDetailsInput = {
    id?: string
    name: string
    email?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeopleMessagesCreateOrConnectWithoutUserDetailsInput = {
    where: PeopleMessagesWhereUniqueInput
    create: XOR<PeopleMessagesCreateWithoutUserDetailsInput, PeopleMessagesUncheckedCreateWithoutUserDetailsInput>
  }

  export type PeopleMessagesCreateManyUserDetailsInputEnvelope = {
    data: PeopleMessagesCreateManyUserDetailsInput | PeopleMessagesCreateManyUserDetailsInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    postId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutUserInput = {
    type: $Enums.VoteType
    post: PostCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    postId: string
    type: $Enums.VoteType
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowingInput>
  }

  export type FollowsScalarWhereInput = {
    AND?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    OR?: FollowsScalarWhereInput[]
    NOT?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    followerId?: StringFilter<"Follows"> | string
    followingId?: StringFilter<"Follows"> | string
  }

  export type AuthorProfileUpsertWithoutUserInput = {
    update: XOR<AuthorProfileUpdateWithoutUserInput, AuthorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<AuthorProfileCreateWithoutUserInput, AuthorProfileUncheckedCreateWithoutUserInput>
    where?: AuthorProfileWhereInput
  }

  export type AuthorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: AuthorProfileWhereInput
    data: XOR<AuthorProfileUpdateWithoutUserInput, AuthorProfileUncheckedUpdateWithoutUserInput>
  }

  export type AuthorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    followers?: FollowsUpdateManyWithoutFollowersNestedInput
    education?: EducationUpdateManyWithoutAuthorProfileNestedInput
    experience?: ExperienceUpdateManyWithoutAuthorProfileNestedInput
  }

  export type AuthorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    followers?: FollowsUncheckedUpdateManyWithoutFollowersNestedInput
    education?: EducationUncheckedUpdateManyWithoutAuthorProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutAuthorProfileNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: JsonFilter<"Post">
    briefdescription?: StringNullableFilter<"Post"> | string | null
    image?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    featured?: BoolFilter<"Post"> | boolean
    authorId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PeopleMessagesUpsertWithWhereUniqueWithoutUserDetailsInput = {
    where: PeopleMessagesWhereUniqueInput
    update: XOR<PeopleMessagesUpdateWithoutUserDetailsInput, PeopleMessagesUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<PeopleMessagesCreateWithoutUserDetailsInput, PeopleMessagesUncheckedCreateWithoutUserDetailsInput>
  }

  export type PeopleMessagesUpdateWithWhereUniqueWithoutUserDetailsInput = {
    where: PeopleMessagesWhereUniqueInput
    data: XOR<PeopleMessagesUpdateWithoutUserDetailsInput, PeopleMessagesUncheckedUpdateWithoutUserDetailsInput>
  }

  export type PeopleMessagesUpdateManyWithWhereWithoutUserDetailsInput = {
    where: PeopleMessagesScalarWhereInput
    data: XOR<PeopleMessagesUpdateManyMutationInput, PeopleMessagesUncheckedUpdateManyWithoutUserDetailsInput>
  }

  export type PeopleMessagesScalarWhereInput = {
    AND?: PeopleMessagesScalarWhereInput | PeopleMessagesScalarWhereInput[]
    OR?: PeopleMessagesScalarWhereInput[]
    NOT?: PeopleMessagesScalarWhereInput | PeopleMessagesScalarWhereInput[]
    id?: StringFilter<"PeopleMessages"> | string
    name?: StringFilter<"PeopleMessages"> | string
    email?: StringNullableFilter<"PeopleMessages"> | string | null
    message?: StringFilter<"PeopleMessages"> | string
    userId?: StringNullableFilter<"PeopleMessages"> | string | null
    createdAt?: DateTimeFilter<"PeopleMessages"> | Date | string
    updatedAt?: DateTimeFilter<"PeopleMessages"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    userId?: StringFilter<"Vote"> | string
    postId?: StringFilter<"Vote"> | string
    type?: EnumVoteTypeFilter<"Vote"> | $Enums.VoteType
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type FollowsCreateWithoutFollowersInput = {
    following?: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowsUncheckedCreateWithoutFollowersInput = {
    followingId: string
  }

  export type FollowsCreateOrConnectWithoutFollowersInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowersInput, FollowsUncheckedCreateWithoutFollowersInput>
  }

  export type FollowsCreateManyFollowersInputEnvelope = {
    data: FollowsCreateManyFollowersInput | FollowsCreateManyFollowersInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutAuthorProfileInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear?: string | null
  }

  export type EducationUncheckedCreateWithoutAuthorProfileInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear?: string | null
  }

  export type EducationCreateOrConnectWithoutAuthorProfileInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutAuthorProfileInput, EducationUncheckedCreateWithoutAuthorProfileInput>
  }

  export type EducationCreateManyAuthorProfileInputEnvelope = {
    data: EducationCreateManyAuthorProfileInput | EducationCreateManyAuthorProfileInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutAuthorProfileInput = {
    id?: string
    position: string
    company: string
    startDate: string
    endDate?: string | null
    description: string
  }

  export type ExperienceUncheckedCreateWithoutAuthorProfileInput = {
    id?: string
    position: string
    company: string
    startDate: string
    endDate?: string | null
    description: string
  }

  export type ExperienceCreateOrConnectWithoutAuthorProfileInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutAuthorProfileInput, ExperienceUncheckedCreateWithoutAuthorProfileInput>
  }

  export type ExperienceCreateManyAuthorProfileInputEnvelope = {
    data: ExperienceCreateManyAuthorProfileInput | ExperienceCreateManyAuthorProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAutherProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAutherProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAutherProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAutherProfileInput, UserUncheckedCreateWithoutAutherProfileInput>
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowersInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowersInput, FollowsUncheckedUpdateWithoutFollowersInput>
    create: XOR<FollowsCreateWithoutFollowersInput, FollowsUncheckedCreateWithoutFollowersInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowersInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowersInput, FollowsUncheckedUpdateWithoutFollowersInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowersInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowersInput>
  }

  export type EducationUpsertWithWhereUniqueWithoutAuthorProfileInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutAuthorProfileInput, EducationUncheckedUpdateWithoutAuthorProfileInput>
    create: XOR<EducationCreateWithoutAuthorProfileInput, EducationUncheckedCreateWithoutAuthorProfileInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutAuthorProfileInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutAuthorProfileInput, EducationUncheckedUpdateWithoutAuthorProfileInput>
  }

  export type EducationUpdateManyWithWhereWithoutAuthorProfileInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutAuthorProfileInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startYear?: StringFilter<"Education"> | string
    endYear?: StringNullableFilter<"Education"> | string | null
    authorProfileId?: StringFilter<"Education"> | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutAuthorProfileInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutAuthorProfileInput, ExperienceUncheckedUpdateWithoutAuthorProfileInput>
    create: XOR<ExperienceCreateWithoutAuthorProfileInput, ExperienceUncheckedCreateWithoutAuthorProfileInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutAuthorProfileInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutAuthorProfileInput, ExperienceUncheckedUpdateWithoutAuthorProfileInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutAuthorProfileInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutAuthorProfileInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: StringFilter<"Experience"> | string
    endDate?: StringNullableFilter<"Experience"> | string | null
    description?: StringFilter<"Experience"> | string
    authorProfileId?: StringFilter<"Experience"> | string
  }

  export type UserUpsertWithoutAutherProfileInput = {
    update: XOR<UserUpdateWithoutAutherProfileInput, UserUncheckedUpdateWithoutAutherProfileInput>
    create: XOR<UserCreateWithoutAutherProfileInput, UserUncheckedCreateWithoutAutherProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAutherProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAutherProfileInput, UserUncheckedUpdateWithoutAutherProfileInput>
  }

  export type UserUpdateWithoutAutherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAutherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthorProfileCreateWithoutExperienceInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    followers?: FollowsCreateNestedManyWithoutFollowersInput
    education?: EducationCreateNestedManyWithoutAuthorProfileInput
    user?: UserCreateNestedOneWithoutAutherProfileInput
  }

  export type AuthorProfileUncheckedCreateWithoutExperienceInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    userId: string
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowersInput
    education?: EducationUncheckedCreateNestedManyWithoutAuthorProfileInput
  }

  export type AuthorProfileCreateOrConnectWithoutExperienceInput = {
    where: AuthorProfileWhereUniqueInput
    create: XOR<AuthorProfileCreateWithoutExperienceInput, AuthorProfileUncheckedCreateWithoutExperienceInput>
  }

  export type AuthorProfileUpsertWithoutExperienceInput = {
    update: XOR<AuthorProfileUpdateWithoutExperienceInput, AuthorProfileUncheckedUpdateWithoutExperienceInput>
    create: XOR<AuthorProfileCreateWithoutExperienceInput, AuthorProfileUncheckedCreateWithoutExperienceInput>
    where?: AuthorProfileWhereInput
  }

  export type AuthorProfileUpdateToOneWithWhereWithoutExperienceInput = {
    where?: AuthorProfileWhereInput
    data: XOR<AuthorProfileUpdateWithoutExperienceInput, AuthorProfileUncheckedUpdateWithoutExperienceInput>
  }

  export type AuthorProfileUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    followers?: FollowsUpdateManyWithoutFollowersNestedInput
    education?: EducationUpdateManyWithoutAuthorProfileNestedInput
    user?: UserUpdateOneWithoutAutherProfileNestedInput
  }

  export type AuthorProfileUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    followers?: FollowsUncheckedUpdateManyWithoutFollowersNestedInput
    education?: EducationUncheckedUpdateManyWithoutAuthorProfileNestedInput
  }

  export type AuthorProfileCreateWithoutEducationInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    followers?: FollowsCreateNestedManyWithoutFollowersInput
    experience?: ExperienceCreateNestedManyWithoutAuthorProfileInput
    user?: UserCreateNestedOneWithoutAutherProfileInput
  }

  export type AuthorProfileUncheckedCreateWithoutEducationInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    userId: string
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowersInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutAuthorProfileInput
  }

  export type AuthorProfileCreateOrConnectWithoutEducationInput = {
    where: AuthorProfileWhereUniqueInput
    create: XOR<AuthorProfileCreateWithoutEducationInput, AuthorProfileUncheckedCreateWithoutEducationInput>
  }

  export type AuthorProfileUpsertWithoutEducationInput = {
    update: XOR<AuthorProfileUpdateWithoutEducationInput, AuthorProfileUncheckedUpdateWithoutEducationInput>
    create: XOR<AuthorProfileCreateWithoutEducationInput, AuthorProfileUncheckedCreateWithoutEducationInput>
    where?: AuthorProfileWhereInput
  }

  export type AuthorProfileUpdateToOneWithWhereWithoutEducationInput = {
    where?: AuthorProfileWhereInput
    data: XOR<AuthorProfileUpdateWithoutEducationInput, AuthorProfileUncheckedUpdateWithoutEducationInput>
  }

  export type AuthorProfileUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    followers?: FollowsUpdateManyWithoutFollowersNestedInput
    experience?: ExperienceUpdateManyWithoutAuthorProfileNestedInput
    user?: UserUpdateOneWithoutAutherProfileNestedInput
  }

  export type AuthorProfileUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    followers?: FollowsUncheckedUpdateManyWithoutFollowersNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutAuthorProfileNestedInput
  }

  export type PostCreateWithoutCategoryInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoryInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoryInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    message: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutPostInput = {
    type: $Enums.VoteType
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutPostInput = {
    userId: string
    type: $Enums.VoteType
  }

  export type VoteCreateOrConnectWithoutPostInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput>
  }

  export type VoteCreateManyPostInputEnvelope = {
    data: VoteCreateManyPostInput | VoteCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutPostsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutPostsInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutPostInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutPostInput, VoteUncheckedUpdateWithoutPostInput>
    create: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutPostInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutPostInput, VoteUncheckedUpdateWithoutPostInput>
  }

  export type VoteUpdateManyWithWhereWithoutPostInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedManyWithoutPostsInput
    votes?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryUncheckedCreateNestedManyWithoutPostsInput
    votes?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    votes?: VoteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateManyWithoutPostsNestedInput
    votes?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutVotesInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutVotesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    comments?: CommentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type PostUpsertWithoutVotesInput = {
    update: XOR<PostUpdateWithoutVotesInput, PostUncheckedUpdateWithoutVotesInput>
    create: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutVotesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutVotesInput, PostUncheckedUpdateWithoutVotesInput>
  }

  export type PostUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthorProfileCreateWithoutFollowersInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    education?: EducationCreateNestedManyWithoutAuthorProfileInput
    experience?: ExperienceCreateNestedManyWithoutAuthorProfileInput
    user?: UserCreateNestedOneWithoutAutherProfileInput
  }

  export type AuthorProfileUncheckedCreateWithoutFollowersInput = {
    id?: string
    bio: string
    idcard?: string | null
    phone?: string | null
    website?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location: string
    birthDate?: string | null
    specialization?: string | null
    skills?: AuthorProfileCreateskillsInput | string[]
    userId: string
    education?: EducationUncheckedCreateNestedManyWithoutAuthorProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutAuthorProfileInput
  }

  export type AuthorProfileCreateOrConnectWithoutFollowersInput = {
    where: AuthorProfileWhereUniqueInput
    create: XOR<AuthorProfileCreateWithoutFollowersInput, AuthorProfileUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    autherProfile?: AuthorProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesCreateNestedManyWithoutUserDetailsInput
    comments?: CommentCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    username?: string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    autherProfile?: AuthorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    messages?: PeopleMessagesUncheckedCreateNestedManyWithoutUserDetailsInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type AuthorProfileUpsertWithoutFollowersInput = {
    update: XOR<AuthorProfileUpdateWithoutFollowersInput, AuthorProfileUncheckedUpdateWithoutFollowersInput>
    create: XOR<AuthorProfileCreateWithoutFollowersInput, AuthorProfileUncheckedCreateWithoutFollowersInput>
    where?: AuthorProfileWhereInput
  }

  export type AuthorProfileUpdateToOneWithWhereWithoutFollowersInput = {
    where?: AuthorProfileWhereInput
    data: XOR<AuthorProfileUpdateWithoutFollowersInput, AuthorProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type AuthorProfileUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    education?: EducationUpdateManyWithoutAuthorProfileNestedInput
    experience?: ExperienceUpdateManyWithoutAuthorProfileNestedInput
    user?: UserUpdateOneWithoutAutherProfileNestedInput
  }

  export type AuthorProfileUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: AuthorProfileUpdateskillsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    education?: EducationUncheckedUpdateManyWithoutAuthorProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutAuthorProfileNestedInput
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autherProfile?: AuthorProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autherProfile?: AuthorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    messages?: PeopleMessagesUncheckedUpdateManyWithoutUserDetailsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FollowsCreateManyFollowingInput = {
    followerId: string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    briefdescription?: string | null
    image: string
    published?: boolean
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeopleMessagesCreateManyUserDetailsInput = {
    id?: string
    name: string
    email?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    message: string
    postId: string
    createdAt?: Date | string
  }

  export type VoteCreateManyUserInput = {
    postId: string
    type: $Enums.VoteType
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type FollowsUpdateWithoutFollowingInput = {
    followers?: AuthorProfileUpdateOneWithoutFollowersNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowingInput = {
    followerId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingInput = {
    followerId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeopleMessagesUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeopleMessagesUncheckedUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeopleMessagesUncheckedUpdateManyWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutUserInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    post?: PostUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowsCreateManyFollowersInput = {
    followingId: string
  }

  export type EducationCreateManyAuthorProfileInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startYear: string
    endYear?: string | null
  }

  export type ExperienceCreateManyAuthorProfileInput = {
    id?: string
    position: string
    company: string
    startDate: string
    endDate?: string | null
    description: string
  }

  export type FollowsUpdateWithoutFollowersInput = {
    following?: UserUpdateOneWithoutFollowingNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowersInput = {
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowsUncheckedUpdateManyWithoutFollowersInput = {
    followingId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUpdateWithoutAuthorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startYear?: StringFieldUpdateOperationsInput | string
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutAuthorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startYear?: StringFieldUpdateOperationsInput | string
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutAuthorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startYear?: StringFieldUpdateOperationsInput | string
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUpdateWithoutAuthorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutAuthorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutAuthorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    briefdescription?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    message: string
    userId: string
    createdAt?: Date | string
  }

  export type VoteCreateManyPostInput = {
    userId: string
    type: $Enums.VoteType
  }

  export type CategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutPostInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorProfileCountOutputTypeDefaultArgs instead
     */
    export type AuthorProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorProfileDefaultArgs instead
     */
    export type AuthorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExperienceDefaultArgs instead
     */
    export type ExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExperienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EducationDefaultArgs instead
     */
    export type EducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EducationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeopleMessagesDefaultArgs instead
     */
    export type PeopleMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeopleMessagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VoteDefaultArgs instead
     */
    export type VoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowsDefaultArgs instead
     */
    export type FollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowsDefaultArgs<ExtArgs>

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