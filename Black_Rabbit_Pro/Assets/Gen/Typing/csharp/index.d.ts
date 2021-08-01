
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    interface $Task<T> {}
    
    namespace System.IO {
        
        class DirectoryInfo extends System.IO.FileSystemInfo {
            
            public get Exists(): boolean;
            
            public get Name(): string;
            
            public get Parent(): System.IO.DirectoryInfo;
            
            public get Root(): System.IO.DirectoryInfo;
            
            public constructor($path: string);
            
            public Create():void;
            
            public CreateSubdirectory($path: string):System.IO.DirectoryInfo;
            
            public GetFiles():System.Array$1<System.IO.FileInfo>;
            
            public GetFiles($searchPattern: string):System.Array$1<System.IO.FileInfo>;
            
            public GetDirectories():System.Array$1<System.IO.DirectoryInfo>;
            
            public GetDirectories($searchPattern: string):System.Array$1<System.IO.DirectoryInfo>;
            
            public GetFileSystemInfos():System.Array$1<System.IO.FileSystemInfo>;
            
            public GetFileSystemInfos($searchPattern: string):System.Array$1<System.IO.FileSystemInfo>;
            
            public GetFileSystemInfos($searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<System.IO.FileSystemInfo>;
            
            public Delete():void;
            
            public Delete($recursive: boolean):void;
            
            public MoveTo($destDirName: string):void;
            
            public GetDirectories($searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<System.IO.DirectoryInfo>;
            
            public GetFiles($searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<System.IO.FileInfo>;
            
            public Create($directorySecurity: System.Security.AccessControl.DirectorySecurity):void;
            
            public CreateSubdirectory($path: string, $directorySecurity: System.Security.AccessControl.DirectorySecurity):System.IO.DirectoryInfo;
            
            public GetAccessControl():System.Security.AccessControl.DirectorySecurity;
            
            public GetAccessControl($includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.DirectorySecurity;
            
            public SetAccessControl($directorySecurity: System.Security.AccessControl.DirectorySecurity):void;
            
            public EnumerateDirectories():System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>;
            
            public EnumerateDirectories($searchPattern: string):System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>;
            
            public EnumerateDirectories($searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>;
            
            public EnumerateFiles():System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>;
            
            public EnumerateFiles($searchPattern: string):System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>;
            
            public EnumerateFiles($searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>;
            
            public EnumerateFileSystemInfos():System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>;
            
            public EnumerateFileSystemInfos($searchPattern: string):System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>;
            
            public EnumerateFileSystemInfos($searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>;
            
            public constructor();
            
        }
        
        class FileSystemInfo extends System.MarshalByRefObject {
            
            public get FullName(): string;
            
            public get Extension(): string;
            
            public get Name(): string;
            
            public get Exists(): boolean;
            
            public get CreationTime(): Date;
            public set CreationTime(value: Date);
            
            public get CreationTimeUtc(): Date;
            public set CreationTimeUtc(value: Date);
            
            public get LastAccessTime(): Date;
            public set LastAccessTime(value: Date);
            
            public get LastAccessTimeUtc(): Date;
            public set LastAccessTimeUtc(value: Date);
            
            public get LastWriteTime(): Date;
            public set LastWriteTime(value: Date);
            
            public get LastWriteTimeUtc(): Date;
            public set LastWriteTimeUtc(value: Date);
            
            public get Attributes(): System.IO.FileAttributes;
            public set Attributes(value: System.IO.FileAttributes);
            
            public Delete():void;
            
            public Refresh():void;
            
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            
        }
        
        class FileInfo extends System.IO.FileSystemInfo {
            
            public get Name(): string;
            
            public get Length(): bigint;
            
            public get DirectoryName(): string;
            
            public get Directory(): System.IO.DirectoryInfo;
            
            public get IsReadOnly(): boolean;
            public set IsReadOnly(value: boolean);
            
            public get Exists(): boolean;
            
            public constructor($fileName: string);
            
            public GetAccessControl():System.Security.AccessControl.FileSecurity;
            
            public GetAccessControl($includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.FileSecurity;
            
            public SetAccessControl($fileSecurity: System.Security.AccessControl.FileSecurity):void;
            
            public OpenText():System.IO.StreamReader;
            
            public CreateText():System.IO.StreamWriter;
            
            public AppendText():System.IO.StreamWriter;
            
            public CopyTo($destFileName: string):System.IO.FileInfo;
            
            public CopyTo($destFileName: string, $overwrite: boolean):System.IO.FileInfo;
            
            public Create():System.IO.FileStream;
            
            public Decrypt():void;
            
            public Encrypt():void;
            
            public Open($mode: System.IO.FileMode):System.IO.FileStream;
            
            public Open($mode: System.IO.FileMode, $access: System.IO.FileAccess):System.IO.FileStream;
            
            public Open($mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare):System.IO.FileStream;
            
            public OpenRead():System.IO.FileStream;
            
            public OpenWrite():System.IO.FileStream;
            
            public MoveTo($destFileName: string):void;
            
            public Replace($destinationFileName: string, $destinationBackupFileName: string):System.IO.FileInfo;
            
            public Replace($destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean):System.IO.FileInfo;
            
            public constructor();
            
        }
        
        enum SearchOption { TopDirectoryOnly = 0, AllDirectories = 1 }
        
        class File extends System.Object {
            
            public static AppendAllText($path: string, $contents: string):void;
            
            public static AppendAllText($path: string, $contents: string, $encoding: System.Text.Encoding):void;
            
            public static AppendText($path: string):System.IO.StreamWriter;
            
            public static Copy($sourceFileName: string, $destFileName: string):void;
            
            public static Copy($sourceFileName: string, $destFileName: string, $overwrite: boolean):void;
            
            public static Create($path: string):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number, $options: System.IO.FileOptions):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number, $options: System.IO.FileOptions, $fileSecurity: System.Security.AccessControl.FileSecurity):System.IO.FileStream;
            
            public static CreateText($path: string):System.IO.StreamWriter;
            
            public static Delete($path: string):void;
            
            public static Exists($path: string):boolean;
            
            public static GetAccessControl($path: string):System.Security.AccessControl.FileSecurity;
            
            public static GetAccessControl($path: string, $includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.FileSecurity;
            
            public static GetAttributes($path: string):System.IO.FileAttributes;
            
            public static GetCreationTime($path: string):Date;
            
            public static GetCreationTimeUtc($path: string):Date;
            
            public static GetLastAccessTime($path: string):Date;
            
            public static GetLastAccessTimeUtc($path: string):Date;
            
            public static GetLastWriteTime($path: string):Date;
            
            public static GetLastWriteTimeUtc($path: string):Date;
            
            public static Move($sourceFileName: string, $destFileName: string):void;
            
            public static Open($path: string, $mode: System.IO.FileMode):System.IO.FileStream;
            
            public static Open($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess):System.IO.FileStream;
            
            public static Open($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare):System.IO.FileStream;
            
            public static OpenRead($path: string):System.IO.FileStream;
            
            public static OpenText($path: string):System.IO.StreamReader;
            
            public static OpenWrite($path: string):System.IO.FileStream;
            
            public static Replace($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string):void;
            
            public static Replace($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean):void;
            
            public static SetAccessControl($path: string, $fileSecurity: System.Security.AccessControl.FileSecurity):void;
            
            public static SetAttributes($path: string, $fileAttributes: System.IO.FileAttributes):void;
            
            public static SetCreationTime($path: string, $creationTime: Date):void;
            
            public static SetCreationTimeUtc($path: string, $creationTimeUtc: Date):void;
            
            public static SetLastAccessTime($path: string, $lastAccessTime: Date):void;
            
            public static SetLastAccessTimeUtc($path: string, $lastAccessTimeUtc: Date):void;
            
            public static SetLastWriteTime($path: string, $lastWriteTime: Date):void;
            
            public static SetLastWriteTimeUtc($path: string, $lastWriteTimeUtc: Date):void;
            
            public static ReadAllBytes($path: string):System.Array$1<number>;
            
            public static ReadAllLines($path: string):System.Array$1<string>;
            
            public static ReadAllLines($path: string, $encoding: System.Text.Encoding):System.Array$1<string>;
            
            public static ReadAllText($path: string):string;
            
            public static ReadAllText($path: string, $encoding: System.Text.Encoding):string;
            
            public static WriteAllBytes($path: string, $bytes: System.Array$1<number>):void;
            
            public static WriteAllLines($path: string, $contents: System.Array$1<string>):void;
            
            public static WriteAllLines($path: string, $contents: System.Array$1<string>, $encoding: System.Text.Encoding):void;
            
            public static WriteAllText($path: string, $contents: string):void;
            
            public static WriteAllText($path: string, $contents: string, $encoding: System.Text.Encoding):void;
            
            public static Encrypt($path: string):void;
            
            public static Decrypt($path: string):void;
            
            public static ReadLines($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static ReadLines($path: string, $encoding: System.Text.Encoding):System.Collections.Generic.IEnumerable$1<string>;
            
            public static AppendAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>):void;
            
            public static AppendAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding):void;
            
            public static WriteAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>):void;
            
            public static WriteAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding):void;
            
        }
        
        class StreamWriter extends System.IO.TextWriter {
            
            public static Null: System.IO.StreamWriter;
            
            public get AutoFlush(): boolean;
            public set AutoFlush(value: boolean);
            
            public get BaseStream(): System.IO.Stream;
            
            public get Encoding(): System.Text.Encoding;
            
            public constructor($stream: System.IO.Stream);
            
            public constructor($stream: System.IO.Stream, $encoding: System.Text.Encoding);
            
            public constructor($stream: System.IO.Stream, $encoding: System.Text.Encoding, $bufferSize: number);
            
            public constructor($stream: System.IO.Stream, $encoding: System.Text.Encoding, $bufferSize: number, $leaveOpen: boolean);
            
            public constructor($path: string);
            
            public constructor($path: string, $append: boolean);
            
            public constructor($path: string, $append: boolean, $encoding: System.Text.Encoding);
            
            public constructor($path: string, $append: boolean, $encoding: System.Text.Encoding, $bufferSize: number);
            
            public Close():void;
            
            public Flush():void;
            
            public Write($value: number):void;
            
            public Write($buffer: System.Array$1<number>):void;
            
            public Write($buffer: System.Array$1<number>, $index: number, $count: number):void;
            
            public Write($value: string):void;
            
            public WriteAsync($value: number):System.Threading.Tasks.Task;
            
            public WriteAsync($value: string):System.Threading.Tasks.Task;
            
            public WriteAsync($buffer: System.Array$1<number>, $index: number, $count: number):System.Threading.Tasks.Task;
            
            public WriteLineAsync():System.Threading.Tasks.Task;
            
            public WriteLineAsync($value: number):System.Threading.Tasks.Task;
            
            public WriteLineAsync($value: string):System.Threading.Tasks.Task;
            
            public WriteLineAsync($buffer: System.Array$1<number>, $index: number, $count: number):System.Threading.Tasks.Task;
            
            public FlushAsync():System.Threading.Tasks.Task;
            
            public constructor();
            
        }
        
        class TextWriter extends System.MarshalByRefObject {
            
        }
        
        class FileStream extends System.IO.Stream {
            
        }
        
        class Stream extends System.MarshalByRefObject {
            
        }
        
        enum FileOptions { None = 0, Encrypted = 16384, DeleteOnClose = 67108864, SequentialScan = 134217728, RandomAccess = 268435456, Asynchronous = 1073741824, WriteThrough = -2147483648 }
        
        enum FileAttributes { Archive = 32, Compressed = 2048, Device = 64, Directory = 16, Encrypted = 16384, Hidden = 2, Normal = 128, NotContentIndexed = 8192, Offline = 4096, ReadOnly = 1, ReparsePoint = 1024, SparseFile = 512, System = 4, Temporary = 256, IntegrityStream = 32768, NoScrubData = 131072 }
        
        enum FileMode { CreateNew = 1, Create = 2, Open = 3, OpenOrCreate = 4, Truncate = 5, Append = 6 }
        
        enum FileAccess { Read = 1, Write = 2, ReadWrite = 3 }
        
        enum FileShare { None = 0, Read = 1, Write = 2, ReadWrite = 3, Delete = 4, Inheritable = 16 }
        
        class StreamReader extends System.IO.TextReader {
            
        }
        
        class TextReader extends System.MarshalByRefObject {
            
        }
        
        class Path extends System.Object {
            
            public static AltDirectorySeparatorChar: number;
            
            public static DirectorySeparatorChar: number;
            
            public static PathSeparator: number;
            
            public static VolumeSeparatorChar: number;
            
            public static ChangeExtension($path: string, $extension: string):string;
            
            public static Combine($path1: string, $path2: string):string;
            
            public static GetDirectoryName($path: string):string;
            
            public static GetExtension($path: string):string;
            
            public static GetFileName($path: string):string;
            
            public static GetFileNameWithoutExtension($path: string):string;
            
            public static GetFullPath($path: string):string;
            
            public static GetPathRoot($path: string):string;
            
            public static GetTempFileName():string;
            
            public static GetTempPath():string;
            
            public static HasExtension($path: string):boolean;
            
            public static IsPathRooted($path: string):boolean;
            
            public static GetInvalidFileNameChars():System.Array$1<number>;
            
            public static GetInvalidPathChars():System.Array$1<number>;
            
            public static GetRandomFileName():string;
            
            public static Combine(...paths: string[]):string;
            
            public static Combine($path1: string, $path2: string, $path3: string):string;
            
            public static Combine($path1: string, $path2: string, $path3: string, $path4: string):string;
            
        }
        
    }
    namespace System {
        
        class MarshalByRefObject extends System.Object {
            
        }
        
        class Object {
            
            public constructor();
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public GetHashCode():number;
            
            public GetType():System.Type;
            
            public ToString():string;
            
            public static ReferenceEquals($objA: any, $objB: any):boolean;
            
        }
        
        class Boolean extends System.ValueType {
            
        }
        
        class ValueType extends System.Object {
            
        }
        
        class String extends System.Object {
            
        }
        
        class Void extends System.ValueType {
            
        }
        
        class Array extends System.Object {
            
            public get LongLength(): bigint;
            
            public get IsFixedSize(): boolean;
            
            public get IsReadOnly(): boolean;
            
            public get IsSynchronized(): boolean;
            
            public get SyncRoot(): any;
            
            public get Length(): number;
            
            public get Rank(): number;
            
            public static CreateInstance($elementType: System.Type, ...lengths: bigint[]):System.Array;
            
            public CopyTo($array: System.Array, $index: number):void;
            
            public Clone():any;
            
            public static BinarySearch($array: System.Array, $value: any):number;
            
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint):void;
            
            public static Copy($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint):void;
            
            public CopyTo($array: System.Array, $index: bigint):void;
            
            public GetLongLength($dimension: number):bigint;
            
            public GetValue($index: bigint):any;
            
            public GetValue($index1: bigint, $index2: bigint):any;
            
            public GetValue($index1: bigint, $index2: bigint, $index3: bigint):any;
            
            public GetValue(...indices: bigint[]):any;
            
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any):number;
            
            public static BinarySearch($array: System.Array, $value: any, $comparer: System.Collections.IComparer):number;
            
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer):number;
            
            public static IndexOf($array: System.Array, $value: any):number;
            
            public static IndexOf($array: System.Array, $value: any, $startIndex: number):number;
            
            public static IndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            
            public static LastIndexOf($array: System.Array, $value: any):number;
            
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number):number;
            
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            
            public static Reverse($array: System.Array):void;
            
            public static Reverse($array: System.Array, $index: number, $length: number):void;
            
            public SetValue($value: any, $index: bigint):void;
            
            public SetValue($value: any, $index1: bigint, $index2: bigint):void;
            
            public SetValue($value: any, $index1: bigint, $index2: bigint, $index3: bigint):void;
            
            public SetValue($value: any, ...indices: bigint[]):void;
            
            public static Sort($array: System.Array):void;
            
            public static Sort($array: System.Array, $index: number, $length: number):void;
            
            public static Sort($array: System.Array, $comparer: System.Collections.IComparer):void;
            
            public static Sort($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            
            public static Sort($keys: System.Array, $items: System.Array):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            
            public GetEnumerator():System.Collections.IEnumerator;
            
            public GetLength($dimension: number):number;
            
            public GetLowerBound($dimension: number):number;
            
            public GetValue(...indices: number[]):any;
            
            public SetValue($value: any, ...indices: number[]):void;
            
            public GetUpperBound($dimension: number):number;
            
            public GetValue($index: number):any;
            
            public GetValue($index1: number, $index2: number):any;
            
            public GetValue($index1: number, $index2: number, $index3: number):any;
            
            public SetValue($value: any, $index: number):void;
            
            public SetValue($value: any, $index1: number, $index2: number):void;
            
            public SetValue($value: any, $index1: number, $index2: number, $index3: number):void;
            
            public static CreateInstance($elementType: System.Type, $length: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number, $length3: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, ...lengths: number[]):System.Array;
            
            public static CreateInstance($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>):System.Array;
            
            public static Clear($array: System.Array, $index: number, $length: number):void;
            
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: number):void;
            
            public static Copy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            
            public static ConstrainedCopy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            
            public Initialize():void;
            
        }
        
        class Enum extends System.ValueType {
            
        }
        
        class Int32 extends System.ValueType {
            
        }
        
        class DateTime extends System.ValueType {
            
        }
        
        class Byte extends System.ValueType {
            
        }
        
        type Action$1<T> = (obj: T) => void;
        
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        
        class Delegate extends System.Object {
            
            public get Method(): System.Reflection.MethodInfo;
            
            public get Target(): any;
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean):Function;
            
            public DynamicInvoke(...args: any[]):any;
            
            public Clone():any;
            
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            
            public GetInvocationList():System.Array$1<Function>;
            
            public static Combine($a: Function, $b: Function):Function;
            
            public static Combine(...delegates: Function[]):Function;
            
            public static Remove($source: Function, $value: Function):Function;
            
            public static RemoveAll($source: Function, $value: Function):Function;
            
            public static op_Equality($d1: Function, $d2: Function):boolean;
            
            public static op_Inequality($d1: Function, $d2: Function):boolean;
            
        }
        
        class Type extends System.Reflection.MemberInfo {
            
            public static FilterAttribute: System.Reflection.MemberFilter;
            
            public static FilterName: System.Reflection.MemberFilter;
            
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            
            public static Missing: any;
            
            public static Delimiter: number;
            
            public static EmptyTypes: System.Array$1<System.Type>;
            
            public get MemberType(): System.Reflection.MemberTypes;
            
            public get DeclaringType(): System.Type;
            
            public get DeclaringMethod(): System.Reflection.MethodBase;
            
            public get ReflectedType(): System.Type;
            
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            
            public get GUID(): System.Guid;
            
            public static get DefaultBinder(): System.Reflection.Binder;
            
            public get Module(): System.Reflection.Module;
            
            public get Assembly(): System.Reflection.Assembly;
            
            public get TypeHandle(): System.RuntimeTypeHandle;
            
            public get FullName(): string;
            
            public get Namespace(): string;
            
            public get AssemblyQualifiedName(): string;
            
            public get BaseType(): System.Type;
            
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            
            public get IsNested(): boolean;
            
            public get Attributes(): System.Reflection.TypeAttributes;
            
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            
            public get IsVisible(): boolean;
            
            public get IsNotPublic(): boolean;
            
            public get IsPublic(): boolean;
            
            public get IsNestedPublic(): boolean;
            
            public get IsNestedPrivate(): boolean;
            
            public get IsNestedFamily(): boolean;
            
            public get IsNestedAssembly(): boolean;
            
            public get IsNestedFamANDAssem(): boolean;
            
            public get IsNestedFamORAssem(): boolean;
            
            public get IsAutoLayout(): boolean;
            
            public get IsLayoutSequential(): boolean;
            
            public get IsExplicitLayout(): boolean;
            
            public get IsClass(): boolean;
            
            public get IsInterface(): boolean;
            
            public get IsValueType(): boolean;
            
            public get IsAbstract(): boolean;
            
            public get IsSealed(): boolean;
            
            public get IsEnum(): boolean;
            
            public get IsSpecialName(): boolean;
            
            public get IsImport(): boolean;
            
            public get IsSerializable(): boolean;
            
            public get IsAnsiClass(): boolean;
            
            public get IsUnicodeClass(): boolean;
            
            public get IsAutoClass(): boolean;
            
            public get IsArray(): boolean;
            
            public get IsGenericType(): boolean;
            
            public get IsGenericTypeDefinition(): boolean;
            
            public get IsConstructedGenericType(): boolean;
            
            public get IsGenericParameter(): boolean;
            
            public get GenericParameterPosition(): number;
            
            public get ContainsGenericParameters(): boolean;
            
            public get IsByRef(): boolean;
            
            public get IsPointer(): boolean;
            
            public get IsPrimitive(): boolean;
            
            public get IsCOMObject(): boolean;
            
            public get HasElementType(): boolean;
            
            public get IsContextful(): boolean;
            
            public get IsMarshalByRef(): boolean;
            
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            
            public get IsSecurityCritical(): boolean;
            
            public get IsSecuritySafeCritical(): boolean;
            
            public get IsSecurityTransparent(): boolean;
            
            public get UnderlyingSystemType(): System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public MakePointerType():System.Type;
            
            public MakeByRefType():System.Type;
            
            public MakeArrayType():System.Type;
            
            public MakeArrayType($rank: number):System.Type;
            
            public static GetTypeFromProgID($progID: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeCode($type: System.Type):System.TypeCode;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>):any;
            
            public static GetTypeHandle($o: any):System.RuntimeTypeHandle;
            
            public GetArrayRank():number;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetConstructors($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            
            public GetMethod($name: string):System.Reflection.MethodInfo;
            
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            
            public GetMethods($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            
            public GetField($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            
            public GetField($name: string):System.Reflection.FieldInfo;
            
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            
            public GetFields($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            
            public GetInterface($name: string):System.Type;
            
            public GetInterface($name: string, $ignoreCase: boolean):System.Type;
            
            public GetInterfaces():System.Array$1<System.Type>;
            
            public FindInterfaces($filter: System.Reflection.TypeFilter, $filterCriteria: any):System.Array$1<System.Type>;
            
            public GetEvent($name: string):System.Reflection.EventInfo;
            
            public GetEvent($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            
            public GetEvents($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string):System.Reflection.PropertyInfo;
            
            public GetProperties($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetNestedTypes():System.Array$1<System.Type>;
            
            public GetNestedTypes($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            
            public GetNestedType($name: string):System.Type;
            
            public GetNestedType($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Type;
            
            public GetMember($name: string):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public FindMembers($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            
            public GetElementType():System.Type;
            
            public GetGenericArguments():System.Array$1<System.Type>;
            
            public GetGenericTypeDefinition():System.Type;
            
            public GetEnumNames():System.Array$1<string>;
            
            public GetEnumValues():System.Array;
            
            public GetEnumUnderlyingType():System.Type;
            
            public IsEnumDefined($value: any):boolean;
            
            public GetEnumName($value: any):string;
            
            public IsSubclassOf($c: System.Type):boolean;
            
            public IsInstanceOfType($o: any):boolean;
            
            public IsAssignableFrom($c: System.Type):boolean;
            
            public IsEquivalentTo($other: System.Type):boolean;
            
            public static GetTypeArray($args: System.Array$1<any>):System.Array$1<System.Type>;
            
            public Equals($o: any):boolean;
            
            public Equals($o: System.Type):boolean;
            
            public static op_Equality($left: System.Type, $right: System.Type):boolean;
            
            public static op_Inequality($left: System.Type, $right: System.Type):boolean;
            
            public GetInterfaceMap($interfaceType: System.Type):System.Reflection.InterfaceMapping;
            
            public GetType():System.Type;
            
            public static GetType($typeName: string):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public static ReflectionOnlyGetType($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean):System.Type;
            
            public static GetTypeFromHandle($handle: System.RuntimeTypeHandle):System.Type;
            
            public GetType():System.Type;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        class Int64 extends System.ValueType {
            
        }
        
        class UInt32 extends System.ValueType {
            
        }
        
        class UInt16 extends System.ValueType {
            
        }
        
        class UInt64 extends System.ValueType {
            
        }
        
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        
        class Char extends System.ValueType {
            
        }
        
        class Single extends System.ValueType {
            
        }
        
        type Func$1<TResult> = () => TResult;
        
        class Exception extends System.Object {
            
        }
        
        interface IFormatProvider {
            
        }
        
        type Converter$2<TInput,TOutput> = (input: TInput) => TOutput;
        
        type Predicate$1<T> = (obj: T) => boolean;
        
        type Comparison$1<T> = (x: T, y: T) => number;
        
        class Double extends System.ValueType {
            
        }
        
        interface Double {
            
            ApproxEquals($b: number):boolean;
            
            ApproxEquals($b: number):boolean;
            
        }
        
        
        type Func$2<T,TResult> = (arg: T) => TResult;
        
        type Func$4<T1,T2,T3,TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult;
        
        class Attribute extends System.Object {
            
        }
        
        class Guid extends System.ValueType {
            
        }
        
        enum TypeCode { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        
        class RuntimeTypeHandle extends System.ValueType {
            
        }
        
        class Random extends System.Object {
            
        }
        
    }
    namespace System.Security.AccessControl {
        
        class DirectorySecurity extends System.Security.AccessControl.FileSystemSecurity {
            
        }
        
        class FileSystemSecurity extends System.Security.AccessControl.NativeObjectSecurity {
            
        }
        
        class NativeObjectSecurity extends System.Security.AccessControl.CommonObjectSecurity {
            
        }
        
        class CommonObjectSecurity extends System.Security.AccessControl.ObjectSecurity {
            
        }
        
        class ObjectSecurity extends System.Object {
            
        }
        
        enum AccessControlSections { None = 0, Audit = 1, Access = 2, Owner = 4, Group = 8, All = 15 }
        
        class FileSecurity extends System.Security.AccessControl.FileSystemSecurity {
            
        }
        
    }
    namespace System.Collections.Generic {
        
        interface IEnumerable$1<T> {
            
        }
        
        class List$1<T> extends System.Object {
            
            public get Capacity(): number;
            public set Capacity(value: number);
            
            public get Count(): number;
            
            public constructor();
            
            public constructor($capacity: number);
            
            public constructor($collection: System.Collections.Generic.IEnumerable$1<T>);
            
            public get_Item($index: number):T;
            
            public set_Item($index: number, $value: T):void;
            
            public Add($item: T):void;
            
            public AddRange($collection: System.Collections.Generic.IEnumerable$1<T>):void;
            
            public AsReadOnly():System.Collections.ObjectModel.ReadOnlyCollection$1<T>;
            
            public BinarySearch($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>):number;
            
            public BinarySearch($item: T):number;
            
            public BinarySearch($item: T, $comparer: System.Collections.Generic.IComparer$1<T>):number;
            
            public Clear():void;
            
            public Contains($item: T):boolean;
            
            public CopyTo($array: System.Array$1<T>):void;
            
            public CopyTo($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number):void;
            
            public CopyTo($array: System.Array$1<T>, $arrayIndex: number):void;
            
            public Exists($match: System.Predicate$1<T>):boolean;
            
            public Find($match: System.Predicate$1<T>):T;
            
            public FindAll($match: System.Predicate$1<T>):System.Collections.Generic.List$1<T>;
            
            public FindIndex($match: System.Predicate$1<T>):number;
            
            public FindIndex($startIndex: number, $match: System.Predicate$1<T>):number;
            
            public FindIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
            
            public FindLast($match: System.Predicate$1<T>):T;
            
            public FindLastIndex($match: System.Predicate$1<T>):number;
            
            public FindLastIndex($startIndex: number, $match: System.Predicate$1<T>):number;
            
            public FindLastIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
            
            public ForEach($action: System.Action$1<T>):void;
            
            public GetEnumerator():System.Collections.Generic.List$1.Enumerator<T>;
            
            public GetRange($index: number, $count: number):System.Collections.Generic.List$1<T>;
            
            public IndexOf($item: T):number;
            
            public IndexOf($item: T, $index: number):number;
            
            public IndexOf($item: T, $index: number, $count: number):number;
            
            public Insert($index: number, $item: T):void;
            
            public InsertRange($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>):void;
            
            public LastIndexOf($item: T):number;
            
            public LastIndexOf($item: T, $index: number):number;
            
            public LastIndexOf($item: T, $index: number, $count: number):number;
            
            public Remove($item: T):boolean;
            
            public RemoveAll($match: System.Predicate$1<T>):number;
            
            public RemoveAt($index: number):void;
            
            public RemoveRange($index: number, $count: number):void;
            
            public Reverse():void;
            
            public Reverse($index: number, $count: number):void;
            
            public Sort():void;
            
            public Sort($comparer: System.Collections.Generic.IComparer$1<T>):void;
            
            public Sort($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>):void;
            
            public Sort($comparison: System.Comparison$1<T>):void;
            
            public ToArray():System.Array$1<T>;
            
            public TrimExcess():void;
            
            public TrueForAll($match: System.Predicate$1<T>):boolean;
            
        }
        
        class Dictionary$2<TKey,TValue> extends System.Object {
            
            public get Comparer(): System.Collections.Generic.IEqualityComparer$1<TKey>;
            
            public get Count(): number;
            
            public get Keys(): System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
            
            public get Values(): System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
            
            public constructor();
            
            public constructor($capacity: number);
            
            public constructor($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>);
            
            public constructor($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>);
            
            public get_Item($key: TKey):TValue;
            
            public set_Item($key: TKey, $value: TValue):void;
            
            public Add($key: TKey, $value: TValue):void;
            
            public Clear():void;
            
            public ContainsKey($key: TKey):boolean;
            
            public ContainsValue($value: TValue):boolean;
            
            public GetEnumerator():System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>;
            
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            
            public OnDeserialization($sender: any):void;
            
            public Remove($key: TKey):boolean;
            
            public TryGetValue($key: TKey, $value: $Ref<TValue>):boolean;
            
        }
        
        interface IComparer$1<T> {
            
        }
        
        interface IEqualityComparer$1<T> {
            
        }
        
        interface IDictionary$2<TKey,TValue> {
            
        }
        
        class KeyValuePair$2<TKey,TValue> extends System.ValueType {
            
        }
        
    }
    namespace System.Text {
        
        class Encoding extends System.Object {
            
        }
        
        class StringBuilder extends System.Object {
            
        }
        
    }
    namespace UnityEditor {
        /** An Interface for accessing assets and performing operations on assets. */
        class AssetDatabase extends System.Object {
            /** Callback raised whenever a package import successfully completes that lists the items selected to be imported. */
            public static onImportPackageItemsCompleted: System.Action$1<System.Array$1<string>>;
            /** Changes during Refresh if anything has changed that can invalidate any artifact. */
            public static get GlobalArtifactDependencyVersion(): number;
            /** Changes whenever a new artifact is added to the artifact database. */
            public static get GlobalArtifactProcessedVersion(): number;
            
            public constructor();
            
            public static add_importPackageStarted($value: UnityEditor.AssetDatabase.ImportPackageCallback):void;
            
            public static remove_importPackageStarted($value: UnityEditor.AssetDatabase.ImportPackageCallback):void;
            
            public static add_importPackageCompleted($value: UnityEditor.AssetDatabase.ImportPackageCallback):void;
            
            public static remove_importPackageCompleted($value: UnityEditor.AssetDatabase.ImportPackageCallback):void;
            
            public static add_importPackageCancelled($value: UnityEditor.AssetDatabase.ImportPackageCallback):void;
            
            public static remove_importPackageCancelled($value: UnityEditor.AssetDatabase.ImportPackageCallback):void;
            
            public static add_importPackageFailed($value: UnityEditor.AssetDatabase.ImportPackageFailedCallback):void;
            
            public static remove_importPackageFailed($value: UnityEditor.AssetDatabase.ImportPackageFailedCallback):void;
            
            public static CanOpenForEdit($assetOrMetaFilePaths: System.Array$1<string>, $outNotEditablePaths: System.Collections.Generic.List$1<string>, $statusQueryOptions?: UnityEditor.StatusQueryOptions):void;
            
            public static IsOpenForEdit($assetOrMetaFilePaths: System.Array$1<string>, $outNotEditablePaths: System.Collections.Generic.List$1<string>, $statusQueryOptions?: UnityEditor.StatusQueryOptions):void;
            /** Makes a file open for editing in version control.
             * @param path Specifies the path to a file relative to the project root.
             * @returns true if Unity successfully made the file editable in the version control system. Otherwise, returns false. 
             */
            public static MakeEditable($path: string):boolean;
            
            public static MakeEditable($paths: System.Array$1<string>, $prompt?: string, $outNotEditablePaths?: System.Collections.Generic.List$1<string>):boolean;
            /** Search the asset database using the search filter string.
             * @param filter The filter string can contain search data.  See below for details about this string.
             * @param searchInFolders The folders where the search will start.
             * @returns Array of matching asset. Note that GUIDs will be returned. 
             */
            public static FindAssets($filter: string):System.Array$1<string>;
            /** Search the asset database using the search filter string.
             * @param filter The filter string can contain search data.  See below for details about this string.
             * @param searchInFolders The folders where the search will start.
             * @returns Array of matching asset. Note that GUIDs will be returned. 
             */
            public static FindAssets($filter: string, $searchInFolders: System.Array$1<string>):System.Array$1<string>;
            /** Is object an asset? */
            public static Contains($obj: UnityEngine.Object):boolean;
            /** Is object an asset? */
            public static Contains($instanceID: number):boolean;
            /** Creates a new folder, in the specified parent folder.
            The parent folder string must start with the "Assets" folder, and all folders within the parent folder string must already exist. For example, when specifying "AssetsParentFolder1Parentfolder2/", the new folder will be created in "ParentFolder2" only if ParentFolder1 and ParentFolder2 already exist.
             * @param parentFolder The path to the parent folder. Must start with "Assets/".
             * @param newFolderName The name of the new folder.
             * @returns The GUID of the newly created folder, if the folder was created successfully. Otherwise returns an empty string. 
             */
            public static CreateFolder($parentFolder: string, $newFolderName: string):string;
            /** Is asset a main asset in the project window? */
            public static IsMainAsset($obj: UnityEngine.Object):boolean;
            /** Is asset a main asset in the project window? */
            public static IsMainAsset($instanceID: number):boolean;
            /** Does the asset form part of another asset? * @param obj The asset Object to query.
             * @param instanceID Instance ID of the asset Object to query.
             */
            public static IsSubAsset($obj: UnityEngine.Object):boolean;
            /** Does the asset form part of another asset? * @param obj The asset Object to query.
             * @param instanceID Instance ID of the asset Object to query.
             */
            public static IsSubAsset($instanceID: number):boolean;
            /** Determines whether the Asset is a foreign Asset. */
            public static IsForeignAsset($obj: UnityEngine.Object):boolean;
            /** Determines whether the Asset is a foreign Asset. */
            public static IsForeignAsset($instanceID: number):boolean;
            /** Determines whether the Asset is a native Asset. */
            public static IsNativeAsset($obj: UnityEngine.Object):boolean;
            /** Determines whether the Asset is a native Asset. */
            public static IsNativeAsset($instanceID: number):boolean;
            
            public static GetCurrentCacheServerIp():string;
            /** Creates a new unique path for an asset. */
            public static GenerateUniqueAssetPath($path: string):string;
            
            public static StartAssetEditing():void;
            
            public static StopAssetEditing():void;
            
            public static ReleaseCachedFileHandles():void;
            /** Checks if an asset file can be moved from one folder to another. (Without actually moving the file).
             * @param oldPath The path where the asset currently resides.
             * @param newPath The path which the asset should be moved to.
             * @returns An empty string if the asset can be moved, otherwise an error message. 
             */
            public static ValidateMoveAsset($oldPath: string, $newPath: string):string;
            /** Move an asset file (or folder) from one folder to another.
             * @param oldPath The path where the asset currently resides.
             * @param newPath The path which the asset should be moved to.
             * @returns An empty string if the asset has been successfully moved, otherwise an error message. 
             */
            public static MoveAsset($oldPath: string, $newPath: string):string;
            /** Creates an external Asset from an object (such as a Material) by extracting it from within an imported asset (such as an FBX file).
             * @param asset The sub-asset to extract.
             * @param newPath The file path of the new Asset.
             * @returns An empty string if Unity has successfully extracted the Asset, or an error message if not. 
             */
            public static ExtractAsset($asset: UnityEngine.Object, $newPath: string):string;
            /** Rename an asset file.
             * @param pathName The path where the asset currently resides.
             * @param newName The new name which should be given to the asset.
             * @returns An empty string, if the asset has been successfully renamed, otherwise an error message. 
             */
            public static RenameAsset($pathName: string, $newName: string):string;
            /** Moves the specified asset  or folder to the OS trash.
             * @param path Project relative path of the asset or folder to be deleted.
             * @returns Returns true if the asset has been successfully removed, false if it doesn't exist or couldn't be removed. 
             */
            public static MoveAssetToTrash($path: string):boolean;
            
            public static MoveAssetsToTrash($paths: System.Array$1<string>, $outFailedPaths: System.Collections.Generic.List$1<string>):boolean;
            /** Deletes the specified asset or folder.
             * @param path Project relative path of the asset or folder to be deleted.
             * @returns Returns true if the asset has been successfully removed, false if it doesn't exist or couldn't be removed. 
             */
            public static DeleteAsset($path: string):boolean;
            
            public static DeleteAssets($paths: System.Array$1<string>, $outFailedPaths: System.Collections.Generic.List$1<string>):boolean;
            /** Import asset at path. */
            public static ImportAsset($path: string):void;
            /** Import asset at path. */
            public static ImportAsset($path: string, $options: UnityEditor.ImportAssetOptions):void;
            /** Duplicates the asset at path and stores it at newPath.
             * @param path Filesystem path of the source asset.
             * @param newPath Filesystem path of the new asset to create.
             * @returns Returns true if the copy operation is successful or false if part of the process fails. 
             */
            public static CopyAsset($path: string, $newPath: string):boolean;
            /** Writes the import settings to disk. */
            public static WriteImportSettingsIfDirty($path: string):boolean;
            /** Given a path to a directory in the Assets folder, relative to the project folder, this method will return an array of all its subdirectories. */
            public static GetSubFolders($path: string):System.Array$1<string>;
            /** Given a path to a folder, returns true if it exists, false otherwise.
             * @param path The path to the folder.
             * @returns Returns true if the folder exists. 
             */
            public static IsValidFolder($path: string):boolean;
            /** Creates a new asset at path. * @param asset Object to use in creating the asset.
             * @param path Filesystem path for the new asset.
             */
            public static CreateAsset($asset: UnityEngine.Object, $path: string):void;
            /** Adds objectToAdd to an existing asset at path. * @param objectToAdd Object to add to the existing asset.
             * @param path Filesystem path to the asset.
             */
            public static AddObjectToAsset($objectToAdd: UnityEngine.Object, $path: string):void;
            /** Adds objectToAdd to an existing asset identified by assetObject. */
            public static AddObjectToAsset($objectToAdd: UnityEngine.Object, $assetObject: UnityEngine.Object):void;
            /** Specifies which object in the asset file should become the main object after the next import. * @param mainObject The object to become the main object.
             * @param assetPath Path to the asset file.
             */
            public static SetMainObject($mainObject: UnityEngine.Object, $assetPath: string):void;
            /** Returns the path name relative to the project folder where the asset is stored.
             * @param instanceID The instance ID of the asset.
             * @param assetObject A reference to the asset.
             * @returns The asset path name, or null, or an empty string if the asset does not exist. 
             */
            public static GetAssetPath($assetObject: UnityEngine.Object):string;
            /** Returns the path name relative to the project folder where the asset is stored.
             * @param instanceID The instance ID of the asset.
             * @param assetObject A reference to the asset.
             * @returns The asset path name, or null, or an empty string if the asset does not exist. 
             */
            public static GetAssetPath($instanceID: number):string;
            /** Returns the path name relative to the project folder where the asset is stored. */
            public static GetAssetOrScenePath($assetObject: UnityEngine.Object):string;
            /** Gets the path to the text .meta file associated with an asset.
             * @param path The path to the asset.
             * @returns The path to the .meta text file or empty string if the file does not exist. 
             */
            public static GetTextMetaFilePathFromAssetPath($path: string):string;
            /** Gets the path to the asset file associated with a text .meta file. */
            public static GetAssetPathFromTextMetaFilePath($path: string):string;
            /** Returns the first asset object of type type at given path assetPath.
             * @param assetPath Path of the asset to load.
             * @param type Data type of the asset.
             * @returns The asset matching the parameters. 
             */
            public static LoadAssetAtPath($assetPath: string, $type: System.Type):UnityEngine.Object;
            /** Returns the main asset object at assetPath.
            The "main" Asset is the Asset at the root of a hierarchy (such as a Maya file which may contain multiples meshes and GameObjects). * @param assetPath Filesystem path of the asset to load.
             */
            public static LoadMainAssetAtPath($assetPath: string):UnityEngine.Object;
            /** Returns the type of the main asset object at assetPath. * @param assetPath Filesystem path of the asset to load.
             */
            public static GetMainAssetTypeAtPath($assetPath: string):System.Type;
            /** Gets an object's type from an Asset path and a local file identifier.
             * @param assetPath The Asset's path.
             * @param localIdentifierInFile The object's local file identifier.
             * @returns The object's type. 
             */
            public static GetTypeFromPathAndFileID($assetPath: string, $localIdentifierInFile: bigint):System.Type;
            /** Returns true if the main asset object at assetPath is loaded in memory. * @param assetPath Filesystem path of the asset to load.
             */
            public static IsMainAssetAtPathLoaded($assetPath: string):boolean;
            /** Returns all sub Assets at assetPath. */
            public static LoadAllAssetRepresentationsAtPath($assetPath: string):System.Array$1<UnityEngine.Object>;
            /** Returns an array of all Assets at assetPath. * @param assetPath Filesystem path to the asset.
             */
            public static LoadAllAssetsAtPath($assetPath: string):System.Array$1<UnityEngine.Object>;
            
            public static GetAllAssetPaths():System.Array$1<string>;
            /** Import any changed assets. */
            public static Refresh():void;
            /** Import any changed assets. */
            public static Refresh($options: UnityEditor.ImportAssetOptions):void;
            /** Opens the asset with associated application. */
            public static OpenAsset($instanceID: number):boolean;
            /** Opens the asset with associated application. */
            public static OpenAsset($instanceID: number, $lineNumber: number):boolean;
            /** Opens the asset with associated application. */
            public static OpenAsset($instanceID: number, $lineNumber: number, $columnNumber: number):boolean;
            /** Opens the asset with associated application. */
            public static OpenAsset($target: UnityEngine.Object):boolean;
            /** Opens the asset with associated application. */
            public static OpenAsset($target: UnityEngine.Object, $lineNumber: number):boolean;
            /** Opens the asset with associated application. */
            public static OpenAsset($target: UnityEngine.Object, $lineNumber: number, $columnNumber: number):boolean;
            /** Opens the asset(s) with associated application(s). */
            public static OpenAsset($objects: System.Array$1<UnityEngine.Object>):boolean;
            /** Gets the corresponding asset path for the supplied GUID, or an empty string if the GUID can't be found.
             * @param guid The GUID of an asset.
             * @returns Path of the asset relative to the project folder. 
             */
            public static GUIDToAssetPath($guid: string):string;
            /** Gets the corresponding asset path for the supplied GUID, or an empty string if the GUID can't be found.
             * @param guid The GUID of an asset.
             * @returns Path of the asset relative to the project folder. 
             */
            public static GUIDToAssetPath($guid: UnityEditor.GUID):string;
            /** Get the GUID for the asset at path.
             * @param path Filesystem path for the asset. All paths are relative to the project folder.
             * @returns The GUID of the asset. An all-zero GUID denotes an invalid asset path. 
             */
            public static GUIDFromAssetPath($path: string):UnityEditor.GUID;
            /** Get the GUID for the asset at path.
             * @param path Filesystem path for the asset.
             * @returns GUID. 
             */
            public static AssetPathToGUID($path: string):string;
            /** Returns the hash of all the dependencies of an asset.
             * @param path Path to the asset.
             * @param guid GUID of the asset.
             * @returns Aggregate hash. 
             */
            public static GetAssetDependencyHash($guid: UnityEditor.GUID):UnityEngine.Hash128;
            /** Returns the hash of all the dependencies of an asset.
             * @param path Path to the asset.
             * @param guid GUID of the asset.
             * @returns Aggregate hash. 
             */
            public static GetAssetDependencyHash($path: string):UnityEngine.Hash128;
            
            public static SaveAssets():void;
            /** Retrieves an icon for the asset at the given asset path. */
            public static GetCachedIcon($path: string):UnityEngine.Texture;
            /** Replaces that list of labels on an asset. */
            public static SetLabels($obj: UnityEngine.Object, $labels: System.Array$1<string>):void;
            
            public static GetLabels($guid: UnityEditor.GUID):System.Array$1<string>;
            /** Returns all labels attached to a given asset. */
            public static GetLabels($obj: UnityEngine.Object):System.Array$1<string>;
            /** Removes all labels attached to an asset. */
            public static ClearLabels($obj: UnityEngine.Object):void;
            
            public static GetAllAssetBundleNames():System.Array$1<string>;
            
            public static GetUnusedAssetBundleNames():System.Array$1<string>;
            /** Remove the assetBundle name from the asset database. The forceRemove flag is used to indicate if you want to remove it even it's in use. * @param assetBundleName The assetBundle name you want to remove.
             * @param forceRemove Flag to indicate if you want to remove the assetBundle name even it's in use.
             */
            public static RemoveAssetBundleName($assetBundleName: string, $forceRemove: boolean):boolean;
            
            public static RemoveUnusedAssetBundleNames():void;
            /** Returns an array containing the paths of all assets marked with the specified Asset Bundle name. */
            public static GetAssetPathsFromAssetBundle($assetBundleName: string):System.Array$1<string>;
            /** Get the Asset paths for all Assets tagged with assetBundleName and
                            named assetName. */
            public static GetAssetPathsFromAssetBundleAndAssetName($assetBundleName: string, $assetName: string):System.Array$1<string>;
            /** Returns the name of the AssetBundle that a given asset belongs to.
             * @param assetPath The asset's path.
             * @returns Returns the name of the AssetBundle that a given asset belongs to. See the method description for more details. 
             */
            public static GetImplicitAssetBundleName($assetPath: string):string;
            /** Returns the name of the AssetBundle Variant that a given asset belongs to.
             * @param assetPath The asset's path.
             * @returns Returns the name of the AssetBundle Variant that a given asset belongs to. See the method description for more details. 
             */
            public static GetImplicitAssetBundleVariantName($assetPath: string):string;
            /** Given an assetBundleName, returns the list of AssetBundles that it depends on.
             * @param assetBundleName The name of the AssetBundle for which dependencies are required.
             * @param recursive If false, returns only AssetBundles which are direct dependencies of the input; if true, includes all indirect dependencies of the input.
             * @returns The names of all AssetBundles that the input depends on. 
             */
            public static GetAssetBundleDependencies($assetBundleName: string, $recursive: boolean):System.Array$1<string>;
            /** Returns an array of all the assets that are dependencies of the asset at the specified pathName.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
             * @param pathName The path to the asset for which dependencies are required.
             * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
             * @returns The paths of all assets that the input depends on. 
             */
            public static GetDependencies($pathName: string):System.Array$1<string>;
            /** Returns an array of all the assets that are dependencies of the asset at the specified pathName.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
             * @param pathName The path to the asset for which dependencies are required.
             * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
             * @returns The paths of all assets that the input depends on. 
             */
            public static GetDependencies($pathName: string, $recursive: boolean):System.Array$1<string>;
            /** Returns an array of the paths of assets that are dependencies of all the assets in the list of pathNames that you provide.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
             * @param pathNames The path to the assets for which dependencies are required.
             * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
             * @returns The paths of all assets that the input depends on. 
             */
            public static GetDependencies($pathNames: System.Array$1<string>):System.Array$1<string>;
            /** Returns an array of the paths of assets that are dependencies of all the assets in the list of pathNames that you provide.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
             * @param pathNames The path to the assets for which dependencies are required.
             * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
             * @returns The paths of all assets that the input depends on. 
             */
            public static GetDependencies($pathNames: System.Array$1<string>, $recursive: boolean):System.Array$1<string>;
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage($assetPathName: string, $fileName: string):void;
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage($assetPathName: string, $fileName: string, $flags: UnityEditor.ExportPackageOptions):void;
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage($assetPathNames: System.Array$1<string>, $fileName: string):void;
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage($assetPathNames: System.Array$1<string>, $fileName: string, $flags: UnityEditor.ExportPackageOptions):void;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetObject: UnityEngine.Object):boolean;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetObject: UnityEngine.Object, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetOrMetaFilePath: string):boolean;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetOrMetaFilePath: string, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetObject: UnityEngine.Object, $message: $Ref<string>):boolean;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetObject: UnityEngine.Object, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetOrMetaFilePath: string, $message: $Ref<string>):boolean;
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being available for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered available for edit by the selected version control system. 
             */
            public static CanOpenForEdit($assetOrMetaFilePath: string, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetObject: UnityEngine.Object):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetObject: UnityEngine.Object, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetOrMetaFilePath: string):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetOrMetaFilePath: string, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetObject: UnityEngine.Object, $message: $Ref<string>):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetObject: UnityEngine.Object, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetOrMetaFilePath: string, $message: $Ref<string>):boolean;
            /** Query whether an Asset file is open for editing in version control.
             * @param assetObject Object representing the asset whose status you wish to query.
             * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
             * @param message Returns a reason for the asset not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset is considered open for edit by the selected version control system. 
             */
            public static IsOpenForEdit($assetOrMetaFilePath: string, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
             * @param assetObject Object representing the asset whose metadata status you wish to query.
             * @param message Returns a reason for the asset metadata not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
             */
            public static IsMetaFileOpenForEdit($assetObject: UnityEngine.Object):boolean;
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
             * @param assetObject Object representing the asset whose metadata status you wish to query.
             * @param message Returns a reason for the asset metadata not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
             */
            public static IsMetaFileOpenForEdit($assetObject: UnityEngine.Object, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
             * @param assetObject Object representing the asset whose metadata status you wish to query.
             * @param message Returns a reason for the asset metadata not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
             */
            public static IsMetaFileOpenForEdit($assetObject: UnityEngine.Object, $message: $Ref<string>):boolean;
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
             * @param assetObject Object representing the asset whose metadata status you wish to query.
             * @param message Returns a reason for the asset metadata not being open for edit.
             * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
             * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
             */
            public static IsMetaFileOpenForEdit($assetObject: UnityEngine.Object, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions):boolean;
            
            public static GetBuiltinExtraResource($type: System.Type, $path: string):UnityEngine.Object;
            
            public static ForceReserializeAssets($assetPaths: System.Collections.Generic.IEnumerable$1<string>, $options?: UnityEditor.ForceReserializeAssetsOptions):void;
            /** Get the GUID and local file id from an object instance id.
             * @param instanceID InstanceID of the object to retrieve information for.
             * @param obj The object to retrieve GUID and File Id for.
             * @param assetRef The asset reference to retrieve GUID and File Id for.
             * @param guid The GUID of an asset.
             * @param localId The local file identifier of this asset.
             * @returns True if the guid and file id were successfully found, false if not. 
             */
            public static TryGetGUIDAndLocalFileIdentifier($obj: UnityEngine.Object, $guid: $Ref<string>, $localId: $Ref<bigint>):boolean;
            /** Get the GUID and local file id from an object instance id.
             * @param instanceID InstanceID of the object to retrieve information for.
             * @param obj The object to retrieve GUID and File Id for.
             * @param assetRef The asset reference to retrieve GUID and File Id for.
             * @param guid The GUID of an asset.
             * @param localId The local file identifier of this asset.
             * @returns True if the guid and file id were successfully found, false if not. 
             */
            public static TryGetGUIDAndLocalFileIdentifier($instanceID: number, $guid: $Ref<string>, $localId: $Ref<bigint>):boolean;
            
            public static ForceReserializeAssets():void;
            /** Removes object from its asset (See Also: AssetDatabase.AddObjectToAsset). */
            public static RemoveObjectFromAsset($objectToRemove: UnityEngine.Object):void;
            /** Imports package at packagePath into the current project. */
            public static ImportPackage($packagePath: string, $interactive: boolean):void;
            
            public static DisallowAutoRefresh():void;
            
            public static AllowAutoRefresh():void;
            /** Clears the importer override for the asset. * @param path Asset path.
             */
            public static ClearImporterOverride($path: string):void;
            
            public static IsCacheServerEnabled():boolean;
            /** Returns the type of the override importer.
             * @param path Asset path.
             * @returns Importer type. 
             */
            public static GetImporterOverride($path: string):System.Type;
            /** Gets the importer types associated with a given Asset type.
             * @param path The Asset path.
             * @returns Returns an array of importer types that can handle the specified Asset. 
             */
            public static GetAvailableImporterTypes($path: string):System.Array$1<System.Type>;
            /** Checks the availability of the Cache Server.
             * @param ip The IP address of the Cache Server.
             * @param port The Port number of the Cache Server.
             * @returns Returns true when Editor can connect to the Cache Server. Returns false otherwise. 
             */
            public static CanConnectToCacheServer($ip: string, $port: number):boolean;
            
            public static RefreshSettings():void;
            
            public static add_cacheServerConnectionChanged($value: System.Action$1<UnityEditor.CacheServerConnectionChangedParameters>):void;
            
            public static remove_cacheServerConnectionChanged($value: System.Action$1<UnityEditor.CacheServerConnectionChangedParameters>):void;
            
            public static IsConnectedToCacheServer():boolean;
            
            public static ResetCacheServerReconnectTimer():void;
            
            public static CloseCacheServerConnection():void;
            
            public static GetCacheServerAddress():string;
            
            public static GetCacheServerPort():number;
            
            public static GetCacheServerNamespacePrefix():string;
            
            public static GetCacheServerEnableDownload():boolean;
            
            public static GetCacheServerEnableUpload():boolean;
            
            public static IsDirectoryMonitoringEnabled():boolean;
            /** Allows you to register a custom dependency that Assets can be dependent on. If you register a custom dependency, and specify that an Asset is dependent on it, then the Asset will get re-imported if the custom dependency changes. * @param dependency Name of dependency. You can use any name you like, but because these names are global across all your Assets, it can be useful to use a naming convention (eg a path-based naming system) to avoid clashes with other custom dependency names.
             * @param hashOfValue A Hash128 value of the dependency.
             */
            public static RegisterCustomDependency($dependency: string, $hashOfValue: UnityEngine.Hash128):void;
            /** Removes custom dependencies that match the prefixFilter.
             * @param prefixFilter Prefix filter for the custom dependencies to unregister.
             * @returns Number of custom dependencies removed. 
             */
            public static UnregisterCustomDependencyPrefixFilter($prefixFilter: string):number;
            
            public static IsAssetImportWorkerProcess():boolean;
            
        }
        /** Options for querying the version control system status of a file. */
        enum StatusQueryOptions { ForceUpdate = 0, UseCachedIfPossible = 1, UseCachedAsync = 2 }
        /** Asset importing options. */
        enum ImportAssetOptions { Default = 0, ForceUpdate = 1, ForceSynchronousImport = 8, ImportRecursive = 256, DontDownloadFromCacheServer = 8192, ForceUncompressedImport = 16384 }
        
        class GUID extends System.ValueType {
            
        }
        /** Export package option. Multiple options can be combined together using the | operator. */
        enum ExportPackageOptions { Default = 0, Interactive = 1, Recurse = 2, IncludeDependencies = 4, IncludeLibraryAssets = 8 }
        /** Options for AssetDatabase.ForceReserializeAssets. */
        enum ForceReserializeAssetsOptions { ReserializeAssets = 1, ReserializeMetadata = 2, ReserializeAssetsAndMetadata = 3 }
        
        class CacheServerConnectionChangedParameters extends System.ValueType {
            
        }
        /** Base class from which asset importers for specific asset types derive. */
        class AssetImporter extends UnityEngine.Object {
            /** The path name of the asset for this importer. (Read Only) */
            public get assetPath(): string;
            /** The value is true when no meta file is provided with the imported asset. */
            public get importSettingsMissing(): boolean;
            
            public get assetTimeStamp(): bigint;
            /** Get or set any user data. */
            public get userData(): string;
            public set userData(value: string);
            /** Get or set the AssetBundle name. */
            public get assetBundleName(): string;
            public set assetBundleName(value: string);
            /** Get or set the AssetBundle variant. */
            public get assetBundleVariant(): string;
            public set assetBundleVariant(value: string);
            
            public constructor();
            /** Set the AssetBundle name and variant. * @param assetBundleName AssetBundle name.
             * @param assetBundleVariant AssetBundle variant.
             */
            public SetAssetBundleNameAndVariant($assetBundleName: string, $assetBundleVariant: string):void;
            /** Retrieves the asset importer for the asset at path. */
            public static GetAtPath($path: string):UnityEditor.AssetImporter;
            
            public SaveAndReimport():void;
            
            public AddRemap($identifier: UnityEditor.AssetImporter.SourceAssetIdentifier, $externalObject: UnityEngine.Object):void;
            
            public RemoveRemap($identifier: UnityEditor.AssetImporter.SourceAssetIdentifier):boolean;
            
            public GetExternalObjectMap():System.Collections.Generic.Dictionary$2<UnityEditor.AssetImporter.SourceAssetIdentifier, UnityEngine.Object>;
            /** Checks if the AssetImporter supports remapping the given asset type.
             * @param type The type of asset to check.
             * @returns Returns true if the importer supports remapping the given type. Otherwise, returns false. 
             */
            public SupportsRemappedAssetType($type: System.Type):boolean;
            
        }
        /** AssetBundle building map entry. */
        class AssetBundleBuild extends System.ValueType {
            /** AssetBundle name. */
            public assetBundleName: string;
            /** AssetBundle variant. */
            public assetBundleVariant: string;
            /** Asset names which belong to the given AssetBundle. */
            public assetNames: System.Array$1<string>;
            /** Addressable name used to load an asset. */
            public addressableNames: System.Array$1<string>;
            
        }
        /** Lets you programmatically build players or AssetBundles which can be loaded from the web. */
        class BuildPipeline extends System.Object {
            /** Is a player currently being built? */
            public static get isBuildingPlayer(): boolean;
            
            public constructor();
            
            public static GetBuildTargetGroup($platform: UnityEditor.BuildTarget):UnityEditor.BuildTargetGroup;
            /** Given a BuildTarget will return the well known string representation for the build target platform.
             * @param targetPlatform An instance of the BuildTarget enum.
             * @returns Target platform name represented by the passed in BuildTarget. 
             */
            public static GetBuildTargetName($targetPlatform: UnityEditor.BuildTarget):string;
            /** Checks if Unity can append the build.
             * @param target The BuildTarget to build.
             * @param location The path where Unity builds the application.
             * @returns Returns a UnityEditor.CanAppendBuild enum that indicates whether Unity can append the build. 
             */
            public static BuildCanBeAppended($target: UnityEditor.BuildTarget, $location: string):UnityEditor.CanAppendBuild;
            /** Builds a player. These overloads are still supported, but will be replaced. Please use BuildPlayer (BuildPlayerOptions buildPlayerOptions)  instead.
             * @param scenes The Scenes to include in the build. If empty, the build only includes the currently open Scene. Paths are relative to the project folder (AssetsMyLevelsMyScene.unity).
             * @param locationPathName The path where the application will be built.
             * @param target The BuildTarget to build.
             * @param options Additional BuildOptions, like whether to run the built player.
             * @returns An error message if an error occurred. 
             */
            public static BuildPlayer($levels: System.Array$1<UnityEditor.EditorBuildSettingsScene>, $locationPathName: string, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions):UnityEditor.Build.Reporting.BuildReport;
            /** Builds a player. These overloads are still supported, but will be replaced. Please use BuildPlayer (BuildPlayerOptions buildPlayerOptions)  instead.
             * @param scenes The Scenes to include in the build. If empty, the build only includes the currently open Scene. Paths are relative to the project folder (AssetsMyLevelsMyScene.unity).
             * @param locationPathName The path where the application will be built.
             * @param target The BuildTarget to build.
             * @param options Additional BuildOptions, like whether to run the built player.
             * @returns An error message if an error occurred. 
             */
            public static BuildPlayer($levels: System.Array$1<string>, $locationPathName: string, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions):UnityEditor.Build.Reporting.BuildReport;
            /** Builds a player.
             * @param buildPlayerOptions Provide various options to control the behavior of BuildPipeline.BuildPlayer.
             * @returns A BuildReport giving build process information. 
             */
            public static BuildPlayer($buildPlayerOptions: UnityEditor.BuildPlayerOptions):UnityEditor.Build.Reporting.BuildReport;
            /** Writes out a "boot.config" file that contains configuration information for the very early stages of engine startup. * @param outputFile The location to write the file to.
             * @param target The platform to target for this build.
             * @param options Options for this build.
             */
            public static WriteBootConfig($outputFile: string, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions):void;
            /** Build all AssetBundles specified in the editor.
             * @param outputPath Output path for the AssetBundles.
             * @param assetBundleOptions AssetBundle building options.
             * @param targetPlatform Chosen target build platform.
             * @returns The manifest listing all AssetBundles included in this build. 
             */
            public static BuildAssetBundles($outputPath: string, $assetBundleOptions: UnityEditor.BuildAssetBundleOptions, $targetPlatform: UnityEditor.BuildTarget):UnityEngine.AssetBundleManifest;
            /** Build AssetBundles from a building map.
             * @param outputPath Output path for the AssetBundles.
             * @param builds AssetBundle building map.
             * @param assetBundleOptions AssetBundle building options.
             * @param targetPlatform Target build platform.
             * @returns The manifest listing all AssetBundles included in this build. 
             */
            public static BuildAssetBundles($outputPath: string, $builds: System.Array$1<UnityEditor.AssetBundleBuild>, $assetBundleOptions: UnityEditor.BuildAssetBundleOptions, $targetPlatform: UnityEditor.BuildTarget):UnityEngine.AssetBundleManifest;
            /** Extract the crc checksum for the given AssetBundle. */
            public static GetCRCForAssetBundle($targetPath: string, $crc: $Ref<number>):boolean;
            /** Extract the hash for the given AssetBundle. */
            public static GetHashForAssetBundle($targetPath: string, $hash: $Ref<UnityEngine.Hash128>):boolean;
            /** Returns true if the specified build target is currently available in the Editor. * @param buildTargetGroup build target group
             * @param target build target
             */
            public static IsBuildTargetSupported($buildTargetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget):boolean;
            /** Returns the path of a player directory. For ex., Editor\Data\PlaybackEngines\AndroidPlayer.
            In some cases the player directory path can be affected by BuildOptions.Development. * @param target Build target.
             * @param options Build options.
             * @param buildTargetGroup Build target group.
             */
            public static GetPlaybackEngineDirectory($target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions):string;
            /** Returns the path of a player directory. For ex., Editor\Data\PlaybackEngines\AndroidPlayer.
            In some cases the player directory path can be affected by BuildOptions.Development. * @param target Build target.
             * @param options Build options.
             * @param buildTargetGroup Build target group.
             */
            public static GetPlaybackEngineDirectory($buildTargetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions):string;
            /** Returns the mode currently used by players to initiate a connect to the host. */
            public static GetPlayerConnectionInitiateMode($targetPlatform: UnityEditor.BuildTarget, $buildOptions: UnityEditor.BuildOptions):UnityEditor.PlayerConnectionInitiateMode;
            
        }
        /** Build target group. */
        enum BuildTargetGroup { Unknown = 0, Standalone = 1, WebPlayer = 2, iPhone = 4, iOS = 4, PS3 = 5, XBOX360 = 6, Android = 7, WebGL = 13, WSA = 14, Metro = 14, WP8 = 15, BlackBerry = 16, Tizen = 17, PSP2 = 18, PS4 = 19, PSM = 20, XboxOne = 21, SamsungTV = 22, N3DS = 23, WiiU = 24, tvOS = 25, Facebook = 26, Switch = 27, Lumin = 28, Stadia = 29, CloudRendering = 30, GameCoreScarlett = 31, GameCoreXboxSeries = 31, GameCoreXboxOne = 32, PS5 = 33 }
        /** Target build platform. */
        enum BuildTarget { StandaloneOSX = 2, StandaloneOSXUniversal = 3, StandaloneOSXIntel = 4, StandaloneWindows = 5, WebPlayer = 6, WebPlayerStreamed = 7, iOS = 9, PS3 = 10, XBOX360 = 11, Android = 13, StandaloneLinux = 17, StandaloneWindows64 = 19, WebGL = 20, WSAPlayer = 21, StandaloneLinux64 = 24, StandaloneLinuxUniversal = 25, WP8Player = 26, StandaloneOSXIntel64 = 27, BlackBerry = 28, Tizen = 29, PSP2 = 30, PS4 = 31, PSM = 32, XboxOne = 33, SamsungTV = 34, N3DS = 35, WiiU = 36, tvOS = 37, Switch = 38, Lumin = 39, Stadia = 40, CloudRendering = 41, GameCoreScarlett = 42, GameCoreXboxSeries = 42, GameCoreXboxOne = 43, PS5 = 44, iPhone = -1, BB10 = -1, MetroPlayer = -1, NoTarget = -2 }
        /** Whether you can append an existing build using BuildOptions.AcceptExternalModificationsToPlayer. */
        enum CanAppendBuild { Unsupported = 0, Yes = 1, No = 2 }
        /** This class is used for entries in the Scenes list, as displayed in the window. This class contains the Scene path of a Scene and an enabled flag that indicates wether the Scene is enabled in the BuildSettings window or not.
        You can use this class in combination with EditorBuildSettings.scenes to populate the list of Scenes included in the build via script. This is useful when creating custom editor scripts to automate your build pipeline.
        See EditorBuildSettings.scenes for an example script. */
        class EditorBuildSettingsScene extends System.Object {
            
        }
        /** Building options. Multiple options can be combined together. */
        enum BuildOptions { None = 0, Development = 1, AutoRunPlayer = 4, ShowBuiltPlayer = 8, BuildAdditionalStreamedScenes = 16, AcceptExternalModificationsToPlayer = 32, InstallInBuildFolder = 64, WebPlayerOfflineDeployment = 128, ConnectWithProfiler = 256, AllowDebugging = 512, SymlinkLibraries = 1024, UncompressedAssetBundle = 2048, StripDebugSymbols = 0, CompressTextures = 0, ConnectToHost = 4096, EnableHeadlessMode = 16384, BuildScriptsOnly = 32768, PatchPackage = 65536, Il2CPP = 0, ForceEnableAssertions = 131072, CompressWithLz4 = 262144, CompressWithLz4HC = 524288, ForceOptimizeScriptCompilation = 0, ComputeCRC = 1048576, StrictMode = 2097152, IncludeTestAssemblies = 4194304, NoUniqueIdentifier = 8388608, WaitForPlayerConnection = 33554432, EnableCodeCoverage = 67108864, EnableDeepProfilingSupport = 268435456, DetailedBuildReport = 536870912, ShaderLivelinkSupport = 1073741824 }
        /** Provide various options to control the behavior of BuildPipeline.BuildPlayer. */
        class BuildPlayerOptions extends System.ValueType {
            
        }
        /** Asset Bundle building options. */
        enum BuildAssetBundleOptions { None = 0, UncompressedAssetBundle = 1, CollectDependencies = 2, CompleteAssets = 4, DisableWriteTypeTree = 8, DeterministicAssetBundle = 16, ForceRebuildAssetBundle = 32, IgnoreTypeTreeChanges = 64, AppendHashToAssetBundleName = 128, ChunkBasedCompression = 256, StrictMode = 512, DryRunBuild = 1024, DisableLoadAssetByFileName = 4096, DisableLoadAssetByFileNameWithExtension = 8192, AssetBundleStripUnityVersion = 32768 }
        /** Describes how the player connects to the Editor. */
        enum PlayerConnectionInitiateMode { None = 0, PlayerConnectsToHost = 1, PlayerListens = 2 }
        /** User build settings for the Editor */
        class EditorUserBuildSettings extends UnityEngine.Object {
            /** The currently selected build target group. */
            public static get selectedBuildTargetGroup(): UnityEditor.BuildTargetGroup;
            public static set selectedBuildTargetGroup(value: UnityEditor.BuildTargetGroup);
            /** The currently selected target for a standalone build. */
            public static get selectedStandaloneTarget(): UnityEditor.BuildTarget;
            public static set selectedStandaloneTarget(value: UnityEditor.BuildTarget);
            /** PS4 Build Subtarget. */
            public static get ps4BuildSubtarget(): UnityEditor.PS4BuildSubtarget;
            public static set ps4BuildSubtarget(value: UnityEditor.PS4BuildSubtarget);
            /** Specifies which version of PS4 hardware to target. */
            public static get ps4HardwareTarget(): UnityEditor.PS4HardwareTarget;
            public static set ps4HardwareTarget(value: UnityEditor.PS4HardwareTarget);
            /** Are null references actively validated? */
            public static get explicitNullChecks(): boolean;
            public static set explicitNullChecks(value: boolean);
            /** Are divide by zero's actively validated? */
            public static get explicitDivideByZeroChecks(): boolean;
            public static set explicitDivideByZeroChecks(value: boolean);
            /** Are array bounds actively validated? */
            public static get explicitArrayBoundsChecks(): boolean;
            public static set explicitArrayBoundsChecks(value: boolean);
            /** Build submission materials. */
            public static get needSubmissionMaterials(): boolean;
            public static set needSubmissionMaterials(value: boolean);
            /** Build data compressed with PSArc. */
            public static get compressWithPsArc(): boolean;
            public static set compressWithPsArc(value: boolean);
            /** Force installation of package, even if error. */
            public static get forceInstallation(): boolean;
            public static set forceInstallation(value: boolean);
            /** Places the package on the outer edge of the disk. */
            public static get movePackageToDiscOuterEdge(): boolean;
            public static set movePackageToDiscOuterEdge(value: boolean);
            /** Compress files in package. */
            public static get compressFilesInPackage(): boolean;
            public static set compressFilesInPackage(value: boolean);
            /** Whether the standalone player is built in headless mode. */
            public static get enableHeadlessMode(): boolean;
            public static set enableHeadlessMode(value: boolean);
            /** Is build script only enabled. */
            public static get buildScriptsOnly(): boolean;
            public static set buildScriptsOnly(value: boolean);
            /** Xbox Build subtarget. */
            public static get xboxBuildSubtarget(): UnityEditor.XboxBuildSubtarget;
            public static set xboxBuildSubtarget(value: UnityEditor.XboxBuildSubtarget);
            /** When building an Xbox One Streaming Install package (makepkg.exe) The layout generation code in Unity will assign each Scene and associated assets to individual chunks. Unity will mark Scene 0 as being part of the launch range, IE the set of chunks required to launch the game, you may include additional Scenes in this launch range if you desire, this specifies a range of Scenes (starting at 0) to be included in the launch set.  */
            public static get streamingInstallLaunchRange(): number;
            public static set streamingInstallLaunchRange(value: number);
            /** The currently selected Xbox One Deploy Method. */
            public static get xboxOneDeployMethod(): UnityEditor.XboxOneDeployMethod;
            public static set xboxOneDeployMethod(value: UnityEditor.XboxOneDeployMethod);
            /** The currently selected Xbox One Deploy Drive. */
            public static get xboxOneDeployDrive(): UnityEditor.XboxOneDeployDrive;
            public static set xboxOneDeployDrive(value: UnityEditor.XboxOneDeployDrive);
            
            public static get xboxOneAdditionalDebugPorts(): string;
            public static set xboxOneAdditionalDebugPorts(value: string);
            /** Sets the XBox to reboot and redeploy when the deployment fails. */
            public static get xboxOneRebootIfDeployFailsAndRetry(): boolean;
            public static set xboxOneRebootIfDeployFailsAndRetry(value: boolean);
            /** Android platform options. */
            public static get androidBuildSubtarget(): UnityEditor.MobileTextureSubtarget;
            public static set androidBuildSubtarget(value: UnityEditor.MobileTextureSubtarget);
            /** ETC2 texture decompression fallback on Android devices that don't support ETC2. */
            public static get androidETC2Fallback(): UnityEditor.AndroidETC2Fallback;
            public static set androidETC2Fallback(value: UnityEditor.AndroidETC2Fallback);
            
            public static get androidBuildSystem(): UnityEditor.AndroidBuildSystem;
            public static set androidBuildSystem(value: UnityEditor.AndroidBuildSystem);
            
            public static get androidBuildType(): UnityEditor.AndroidBuildType;
            public static set androidBuildType(value: UnityEditor.AndroidBuildType);
            /** Set to true to create a symbols.zip file in the same location as the .apk or .aab file. */
            public static get androidCreateSymbolsZip(): boolean;
            public static set androidCreateSymbolsZip(value: boolean);
            /** Sets and gets target device type for the application to run on when building to Windows Store platform. */
            public static get wsaSubtarget(): UnityEditor.WSASubtarget;
            public static set wsaSubtarget(value: UnityEditor.WSASubtarget);
            /** The build type for the Universal Windows Platform. */
            public static get wsaUWPBuildType(): UnityEditor.WSAUWPBuildType;
            public static set wsaUWPBuildType(value: UnityEditor.WSAUWPBuildType);
            /** Sets and gets target UWP SDK to build Windows Store application against. */
            public static get wsaUWPSDK(): string;
            public static set wsaUWPSDK(value: string);
            
            public static get wsaMinUWPSDK(): string;
            public static set wsaMinUWPSDK(value: string);
            
            public static get wsaArchitecture(): string;
            public static set wsaArchitecture(value: string);
            /** Sets and gets Visual Studio version to build Windows Store application with. */
            public static get wsaUWPVisualStudioVersion(): string;
            public static set wsaUWPVisualStudioVersion(value: string);
            /** Specifies the Windows DevicePortal connection address of the device to deploy and launch the UWP app on when using Build and Run. */
            public static get windowsDevicePortalAddress(): string;
            public static set windowsDevicePortalAddress(value: string);
            /** Specifies the Windows DevicePortal username for the device to deploy and launch the UWP app on when using Build and Run. */
            public static get windowsDevicePortalUsername(): string;
            public static set windowsDevicePortalUsername(value: string);
            /** Specifies the Windows DevicePortal password for the device to deploy and launch the UWP app on when using Build and Run. */
            public static get windowsDevicePortalPassword(): string;
            public static set windowsDevicePortalPassword(value: string);
            /** Sets and gets the Windows device to launch the UWP app when using Build and Run. */
            public static get wsaBuildAndRunDeployTarget(): UnityEditor.WSABuildAndRunDeployTarget;
            public static set wsaBuildAndRunDeployTarget(value: UnityEditor.WSABuildAndRunDeployTarget);
            /** The currently active build target. */
            public static get activeBuildTarget(): UnityEditor.BuildTarget;
            /** DEFINE directives for the compiler. */
            public static get activeScriptCompilationDefines(): System.Array$1<string>;
            /** Enables a development build. */
            public static get development(): boolean;
            public static set development(value: boolean);
            /** Start the player with a connection to the profiler. */
            public static get connectProfiler(): boolean;
            public static set connectProfiler(value: boolean);
            /** Enables Deep Profiling support in the player. */
            public static get buildWithDeepProfilingSupport(): boolean;
            public static set buildWithDeepProfilingSupport(value: boolean);
            /** Enable source-level debuggers to connect. */
            public static get allowDebugging(): boolean;
            public static set allowDebugging(value: boolean);
            /** Sets the Player to wait for player connection on player start. */
            public static get waitForPlayerConnection(): boolean;
            public static set waitForPlayerConnection(value: boolean);
            /** Export Android Project for use with Android Studio/Gradle. */
            public static get exportAsGoogleAndroidProject(): boolean;
            public static set exportAsGoogleAndroidProject(value: boolean);
            /** Set to true to build an Android App Bundle (aab file) instead of an apk. The default value is false. */
            public static get buildAppBundle(): boolean;
            public static set buildAppBundle(value: boolean);
            /** Symlink runtime libraries with an iOS Xcode project. */
            public static get symlinkLibraries(): boolean;
            public static set symlinkLibraries(value: boolean);
            /** Scheme with which the project will be run in Xcode. */
            public static get iOSBuildConfigType(): UnityEditor.iOSBuildType;
            public static set iOSBuildConfigType(value: UnityEditor.iOSBuildType);
            
            public static get switchCreateRomFile(): boolean;
            public static set switchCreateRomFile(value: boolean);
            
            public static get switchNVNGraphicsDebugger(): boolean;
            public static set switchNVNGraphicsDebugger(value: boolean);
            
            public static get generateNintendoSwitchShaderInfo(): boolean;
            public static set generateNintendoSwitchShaderInfo(value: boolean);
            
            public static get switchNVNShaderDebugging(): boolean;
            public static set switchNVNShaderDebugging(value: boolean);
            
            public static get switchNVNDrawValidation_Light(): boolean;
            public static set switchNVNDrawValidation_Light(value: boolean);
            
            public static get switchNVNDrawValidation_Heavy(): boolean;
            public static set switchNVNDrawValidation_Heavy(value: boolean);
            
            public static get switchEnableHeapInspector(): boolean;
            public static set switchEnableHeapInspector(value: boolean);
            
            public static get switchEnableDebugPad(): boolean;
            public static set switchEnableDebugPad(value: boolean);
            
            public static get switchRedirectWritesToHostMount(): boolean;
            public static set switchRedirectWritesToHostMount(value: boolean);
            
            public static get switchHTCSScriptDebugging(): boolean;
            public static set switchHTCSScriptDebugging(value: boolean);
            
            public static get switchUseLegacyNvnPoolAllocator(): boolean;
            public static set switchUseLegacyNvnPoolAllocator(value: boolean);
            /** Place the built player in the build folder. */
            public static get installInBuildFolder(): boolean;
            public static set installInBuildFolder(value: boolean);
            /** Instructs the player to wait for managed debugger to attach before executing any script code. */
            public static get waitForManagedDebugger(): boolean;
            public static set waitForManagedDebugger(value: boolean);
            /** Select a new build target to be active.
             * @param target Target build platform.
             * @param targetGroup Build target group.
             * @returns True if the build target was successfully switched, false otherwise (for example, if license checks fail, files are missing, or if the user has cancelled the operation via the UI). 
             */
            public static SwitchActiveBuildTarget($targetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget):boolean;
            /** Select a new build target to be active during the next Editor update.
             * @param targetGroup Target build platform.
             * @param target Build target group.
             * @returns True if the build target was successfully switched, false otherwise (for example, if license checks fail, files are missing, or if the user has cancelled the operation via the UI). 
             */
            public static SwitchActiveBuildTargetAsync($targetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget):boolean;
            /** Get the current location for the build. */
            public static GetBuildLocation($target: UnityEditor.BuildTarget):string;
            /** Set a new location for the build. */
            public static SetBuildLocation($target: UnityEditor.BuildTarget, $location: string):void;
            /** Set platform specifc Editor setting. * @param platformName The name of the platform.
             * @param name The name of the setting.
             * @param value Setting value.
             */
            public static SetPlatformSettings($platformName: string, $name: string, $value: string):void;
            
            public static SetPlatformSettings($buildTargetGroup: string, $buildTarget: string, $name: string, $value: string):void;
            /** Returns value for platform specifc Editor setting. * @param platformName The name of the platform.
             * @param name The name of the setting.
             */
            public static GetPlatformSettings($platformName: string, $name: string):string;
            
            public static GetPlatformSettings($buildTargetGroup: string, $platformName: string, $name: string):string;
            
        }
        /** Type of build to generate. */
        enum PS4BuildSubtarget { PCHosted = 0, Package = 1, Iso = 2 }
        
        enum PS4HardwareTarget { BaseOnly = 0, NeoAndBase = 1, ProAndBase = 1 }
        /** Target Xbox build type. */
        enum XboxBuildSubtarget { Development = 0, Master = 1, Debug = 2 }
        
        enum XboxOneDeployMethod { Push = 0, RunFromPC = 2, Package = 3, PackageStreaming = 4 }
        
        enum XboxOneDeployDrive { Default = 0, Retail = 1, Development = 2, Ext1 = 3, Ext2 = 4, Ext3 = 5, Ext4 = 6, Ext5 = 7, Ext6 = 8, Ext7 = 9 }
        /** Compressed texture format for target build platform. */
        enum MobileTextureSubtarget { Generic = 0, DXT = 1, PVRTC = 2, ATC = 3, ETC = 4, ETC2 = 5, ASTC = 6 }
        /** This enumeration has values for different qualities to decompress ETC2 textures on Android devices that don't support the ETC2 texture format. */
        enum AndroidETC2Fallback { Quality32Bit = 0, Quality16Bit = 1, Quality32BitDownscaled = 2 }
        /** Type of Android build system. */
        enum AndroidBuildSystem { Internal = 0, Gradle = 1, ADT = 2, VisualStudio = 3 }
        /** Build configurations for the generated project. */
        enum AndroidBuildType { Debug = 0, Development = 1, Release = 2 }
        /** Target device type for a Windows Store application to run on. */
        enum WSASubtarget { AnyDevice = 0, PC = 1, Mobile = 2, HoloLens = 3 }
        
        enum WSASDK { SDK80 = 0, SDK81 = 1, PhoneSDK81 = 2, UniversalSDK81 = 3, UWP = 4 }
        /** Determines the output build type when building to Universal Windows Platform. */
        enum WSAUWPBuildType { XAML = 0, D3D = 1, ExecutableOnly = 2 }
        /** Specifies the Windows device to deploy and launch the UWP app on when using Build and Run from the Editor. */
        enum WSABuildAndRunDeployTarget { LocalMachine = 0, WindowsPhone = 1, DevicePortal = 2 }
        /** Build configurations for the generated Xcode project. */
        enum iOSBuildType { Debug = 0, Release = 1 }
        /** How to minify the java code of your binary. */
        enum AndroidMinification { None = 0, Proguard = 1, Gradle = 2 }
        /** SceneAsset is used to reference Scene objects in the Editor. */
        class SceneAsset extends UnityEngine.Object {
            
        }
        
    }
    namespace UnityEditor.AssetDatabase {
        
        type ImportPackageCallback = (packageName: string) => void;
        var ImportPackageCallback: {new (func: (packageName: string) => void): ImportPackageCallback;}
        
        type ImportPackageFailedCallback = (packageName: string, errorMessage: string) => void;
        var ImportPackageFailedCallback: {new (func: (packageName: string, errorMessage: string) => void): ImportPackageFailedCallback;}
        
    }
    namespace UnityEngine {
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object {
            /** The name of the object. */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user? */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            
            public constructor();
            
            public GetInstanceID():number;
            
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean):UnityEngine.Object;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object, $t: number):void;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object, $allowDestroyingAssets: boolean):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object):void;
            /** Gets a list of all loaded objects of Type type.
             * @param type The type of object to find.
             * @param includeInactive If true, components attached to inactive GameObjects are also included.
             * @returns The array of objects found matching the type specified. 
             */
            public static FindObjectsOfType($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Gets a list of all loaded objects of Type type.
             * @param type The type of object to find.
             * @param includeInactive If true, components attached to inactive GameObjects are also included.
             * @returns The array of objects found matching the type specified. 
             */
            public static FindObjectsOfType($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Object>;
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
             */
            public static DontDestroyOnLoad($target: UnityEngine.Object):void;
            /** Returns the first active loaded object of Type type.
             * @param type The type of object to find.
             * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
             */
            public static FindObjectOfType($type: System.Type):UnityEngine.Object;
            /** Returns the first active loaded object of Type type.
             * @param type The type of object to find.
             * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
             */
            public static FindObjectOfType($type: System.Type, $includeInactive: boolean):UnityEngine.Object;
            
            public static op_Equality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public static op_Inequality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
        }
        /** Represents  a 128-bit hash value. */
        class Hash128 extends System.ValueType {
            
        }
        /** Base class for Texture handling. */
        class Texture extends UnityEngine.Object {
            
        }
        
        class LazyLoadReference$1<T> extends System.ValueType {
            
        }
        /** Manifest for all the AssetBundles in the build. */
        class AssetBundleManifest extends UnityEngine.Object {
            
        }
        /** A class you can derive from if you want to create objects that don't need to be attached to game objects. */
        class ScriptableObject extends UnityEngine.Object {
            
            public constructor();
            /** Creates an instance of a scriptable object.
             * @param className The type of the ScriptableObject to create, as the name of the type.
             * @param type The type of the ScriptableObject to create, as a System.Type instance.
             * @returns The created ScriptableObject. 
             */
            public static CreateInstance($className: string):UnityEngine.ScriptableObject;
            /** Creates an instance of a scriptable object.
             * @param className The type of the ScriptableObject to create, as the name of the type.
             * @param type The type of the ScriptableObject to create, as a System.Type instance.
             * @returns The created ScriptableObject. 
             */
            public static CreateInstance($type: System.Type):UnityEngine.ScriptableObject;
            
        }
        /** Access to application run-time data. */
        class Application extends System.Object {
            /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only). */
            public static get isPlaying(): boolean;
            /** Whether the player currently has focus. Read-only. */
            public static get isFocused(): boolean;
            /** Returns a GUID for this build (Read Only). */
            public static get buildGUID(): string;
            /** Should the player be running when the application is in the background? */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only). */
            public static get isBatchMode(): boolean;
            /** Contains the path to the game data folder on the target device (Read Only). */
            public static get dataPath(): string;
            /** The path to the StreamingAssets folder (Read Only). */
            public static get streamingAssetsPath(): string;
            /** (Read Only) Contains the path to a persistent data directory. */
            public static get persistentDataPath(): string;
            /** Contains the path to a temporary data / cache directory (Read Only). */
            public static get temporaryCachePath(): string;
            /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only) */
            public static get absoluteURL(): string;
            /** The version of the Unity runtime used to play the content. */
            public static get unityVersion(): string;
            /** Returns application version number  (Read Only). */
            public static get version(): string;
            /** Returns the name of the store or package that installed the application (Read Only). */
            public static get installerName(): string;
            /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml.  */
            public static get identifier(): string;
            /** Returns application install mode (Read Only). */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            /** Returns application running in sandbox (Read Only). */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            /** Returns application product name (Read Only). */
            public static get productName(): string;
            /** Return application company name (Read Only). */
            public static get companyName(): string;
            /** A unique cloud project identifier. It is unique for every project (Read Only). */
            public static get cloudProjectId(): string;
            /** Instructs the game to try to render at a specified frame rate. */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files. */
            public static get consoleLogPath(): string;
            /** Priority of background loading thread. */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built. */
            public static get genuine(): boolean;
            /** Returns true if application integrity can be confirmed. */
            public static get genuineCheckAvailable(): boolean;
            /** Returns the platform the game is running on (Read Only). */
            public static get platform(): UnityEngine.RuntimePlatform;
            /** Is the current Runtime platform a known mobile platform. */
            public static get isMobilePlatform(): boolean;
            /** Is the current Runtime platform a known console platform. */
            public static get isConsolePlatform(): boolean;
            /** The language the user's operating system is running in. */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            /** Returns the type of Internet reachability currently possible on the device. */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            /** Are we running inside the Unity editor? (Read Only) */
            public static get isEditor(): boolean;
            
            public constructor();
            
            public static Quit($exitCode: number):void;
            
            public static Quit():void;
            
            public static Unload():void;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelIndex: number):boolean;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelName: string):boolean;
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
             * @param obj The object to test.
             * @returns True if the object is part of the playing world. 
             */
            public static IsPlaying($obj: UnityEngine.Object):boolean;
            
            public static GetBuildTags():System.Array$1<string>;
            /** Set an array of feature tags for this build. */
            public static SetBuildTags($buildTags: System.Array$1<string>):void;
            
            public static HasProLicense():boolean;
            
            public static RequestAdvertisingIdentifierAsync($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback):boolean;
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform. * @param url The URL to open.
             */
            public static OpenURL($url: string):void;
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static GetStackTraceLogType($logType: UnityEngine.LogType):UnityEngine.StackTraceLogType;
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static SetStackTraceLogType($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType):void;
            /** Request authorization to use the webcam or microphone on iOS. */
            public static RequestUserAuthorization($mode: UnityEngine.UserAuthorization):UnityEngine.AsyncOperation;
            /** Check if the user has authorized use of the webcam or microphone in the Web Player. */
            public static HasUserAuthorization($mode: UnityEngine.UserAuthorization):boolean;
            
            public static add_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static remove_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static add_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static add_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static add_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static remove_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static add_focusChanged($value: System.Action$1<boolean>):void;
            
            public static remove_focusChanged($value: System.Action$1<boolean>):void;
            
            public static add_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static remove_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static add_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static remove_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static add_quitting($value: System.Action):void;
            
            public static remove_quitting($value: System.Action):void;
            
            public static add_unloading($value: System.Action):void;
            
            public static remove_unloading($value: System.Action):void;
            
        }
        /** Application installation mode (Read Only). */
        enum ApplicationInstallMode { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        /** Application sandbox type. */
        enum ApplicationSandboxType { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        /** Stack trace logging options. */
        enum StackTraceLogType { None = 0, ScriptOnly = 1, Full = 2 }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Priority of a thread. */
        enum ThreadPriority { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction {
            
        }
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object {
            
        }
        /** Constants to pass to Application.RequestUserAuthorization. */
        enum UserAuthorization { WebCam = 1, Microphone = 2 }
        /** The platform application is running. Returned by Application.platform. */
        enum RuntimePlatform { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = 36, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38 }
        /** The language the user's operating system is running in. Returned by Application.systemLanguage. */
        enum SystemLanguage { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        /** Describes network reachability options. */
        enum NetworkReachability { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        /** Access to display information. */
        class Screen extends System.Object {
            /** The current width of the screen window in pixels (Read Only). */
            public static get width(): number;
            /** The current height of the screen window in pixels (Read Only). */
            public static get height(): number;
            /** The current DPI of the screen / device (Read Only). */
            public static get dpi(): number;
            /** The current screen resolution (Read Only). */
            public static get currentResolution(): UnityEngine.Resolution;
            /** All full-screen resolutions supported by the monitor (Read Only). */
            public static get resolutions(): System.Array$1<UnityEngine.Resolution>;
            /** Is the game running full-screen? */
            public static get fullScreen(): boolean;
            public static set fullScreen(value: boolean);
            /** Set this property to one of the values in FullScreenMode to change the display mode of your application. */
            public static get fullScreenMode(): UnityEngine.FullScreenMode;
            public static set fullScreenMode(value: UnityEngine.FullScreenMode);
            /** Returns the safe area of the screen in pixels (Read Only). */
            public static get safeArea(): UnityEngine.Rect;
            /** Returns a list of screen areas that are not functional for displaying content (Read Only). */
            public static get cutouts(): System.Array$1<UnityEngine.Rect>;
            /** Allow auto-rotation to portrait? */
            public static get autorotateToPortrait(): boolean;
            public static set autorotateToPortrait(value: boolean);
            /** Allow auto-rotation to portrait, upside down? */
            public static get autorotateToPortraitUpsideDown(): boolean;
            public static set autorotateToPortraitUpsideDown(value: boolean);
            /** Allow auto-rotation to landscape left? */
            public static get autorotateToLandscapeLeft(): boolean;
            public static set autorotateToLandscapeLeft(value: boolean);
            /** Allow auto-rotation to landscape right? */
            public static get autorotateToLandscapeRight(): boolean;
            public static set autorotateToLandscapeRight(value: boolean);
            /** Specifies logical orientation of the screen. */
            public static get orientation(): UnityEngine.ScreenOrientation;
            public static set orientation(value: UnityEngine.ScreenOrientation);
            /** A power saving setting, allowing the screen to dim some time after the last active user interaction. */
            public static get sleepTimeout(): number;
            public static set sleepTimeout(value: number);
            /** The current brightness of the screen. */
            public static get brightness(): number;
            public static set brightness(value: number);
            
            public constructor();
            /** Switches the screen resolution. */
            public static SetResolution($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode, $preferredRefreshRate: number):void;
            
            public static SetResolution($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode):void;
            /** Switches the screen resolution. */
            public static SetResolution($width: number, $height: number, $fullscreen: boolean, $preferredRefreshRate: number):void;
            /** Switches the screen resolution. */
            public static SetResolution($width: number, $height: number, $fullscreen: boolean):void;
            
        }
        /** Represents a display resolution. */
        class Resolution extends System.ValueType {
            
        }
        /** Platform agnostic fullscreen mode. Not all platforms support all modes. */
        enum FullScreenMode { ExclusiveFullScreen = 0, FullScreenWindow = 1, MaximizedWindow = 2, Windowed = 3 }
        /** A 2D Rectangle defined by X and Y position, width and height. */
        class Rect extends System.ValueType {
            
        }
        /** Describes screen orientation. */
        enum ScreenOrientation { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, AutoRotation = 5, Landscape = 3 }
        /** Class containing methods to ease debugging while developing a game. */
        class Debug extends System.Object {
            /** Get default debug logger. */
            public static get unityLogger(): UnityEngine.ILogger;
            /** Reports whether the development console is visible. The development console cannot be made to appear using: */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build". */
            public static get isDebugBuild(): boolean;
            
            public constructor();
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            
            public static Break():void;
            
            public static DebugBreak():void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any):void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($format: string, ...args: any[]):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
            public static ClearDeveloperConsole():void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception, $context: UnityEngine.Object):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($format: string, ...args: any[]):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $context: UnityEngine.Object):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any):void;
            
            public static Assert($condition: boolean, $message: string):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any, $context: UnityEngine.Object):void;
            
            public static Assert($condition: boolean, $message: string, $context: UnityEngine.Object):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $format: string, ...args: any[]):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($format: string, ...args: any[]):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
        }
        
        interface ILogger {
            
        }
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType {
            
            public static kEpsilon: number;
            
            public static kEpsilonNormalSqrt: number;
            /** X component of the vector. */
            public x: number;
            /** Y component of the vector. */
            public y: number;
            /** Z component of the vector. */
            public z: number;
            /** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0). */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1). */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1). */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1). */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0). */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0). */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0). */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0). */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector3;
            
            public constructor($x: number, $y: number, $z: number);
            
            public constructor($x: number, $y: number);
            /** Spherically interpolates between two vectors. */
            public static Slerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Spherically interpolates between two vectors. */
            public static SlerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>):void;
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>):void;
            /** Rotates a vector current towards target.
             * @param current The vector being managed.
             * @param target The vector.
             * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
             * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
             * @returns The location that RotateTowards generates. 
             */
            public static RotateTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number):UnityEngine.Vector3;
            /** Linearly interpolates between two points.
             * @param a Start value, returned when t = 0.
             * @param b End value, returned when t = 1.
             * @param t Value used to interpolate between a and b.
             * @returns Interpolated value, equals to a + (b - a) * t. 
             */
            public static Lerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Linearly interpolates between two vectors. */
            public static LerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
             * @param current The position to move from.
             * @param target The position to move towards.
             * @param maxDistanceDelta Distance to move current per call.
             * @returns The new position. 
             */
            public static MoveTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):UnityEngine.Vector3;
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            /** Set x, y and z components of an existing Vector3. */
            public Set($newX: number, $newY: number, $newZ: number):void;
            /** Multiplies two vectors component-wise. */
            public static Scale($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale($scale: UnityEngine.Vector3):void;
            /** Cross Product of two vectors. */
            public static Cross($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals($other: any):boolean;
            
            public Equals($other: UnityEngine.Vector3):boolean;
            /** Reflects a vector off the plane defined by a normal. */
            public static Reflect($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Makes this vector have a magnitude of 1. */
            public static Normalize($value: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public Normalize():void;
            /** Dot Product of two vectors. */
            public static Dot($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):number;
            /** Projects a vector onto another vector. */
            public static Project($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
             * @param planeNormal The direction from the vector towards the plane.
             * @param vector The location of the vector above the plane.
             * @returns The location of the vector on the plane. 
             */
            public static ProjectOnPlane($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns the angle in degrees between from and to.
             * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             * @returns The angle in degrees between the two vectors. 
             */
            public static Angle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3):number;
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             * @param axis A vector around which the other vectors are rotated.
             */
            public static SignedAngle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3):number;
            /** Returns the distance between a and b. */
            public static Distance($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):number;
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude($vector: UnityEngine.Vector3, $maxLength: number):UnityEngine.Vector3;
            
            public static Magnitude($vector: UnityEngine.Vector3):number;
            
            public static SqrMagnitude($vector: UnityEngine.Vector3):number;
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Addition($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Subtraction($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_UnaryNegation($a: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Multiply($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            
            public static op_Multiply($d: number, $a: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Division($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            
            public static op_Equality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            
            public static op_Inequality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            
            public ToString():string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string):string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string, $formatProvider: System.IFormatProvider):string;
            
            public constructor();
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        /** Representation of RGBA colors. */
        class Color extends System.ValueType {
            
        }
        /** Option flags for specifying special treatment of a log message. */
        enum LogOption { None = 0, NoStacktrace = 1 }
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType {
            /** X component of the vector. */
            public x: number;
            /** Y component of the vector. */
            public y: number;
            
            public static kEpsilon: number;
            
            public static kEpsilonNormalSqrt: number;
            /** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector2;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector2(0, 0). */
            public static get zero(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 1). */
            public static get one(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, 1). */
            public static get up(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, -1). */
            public static get down(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(-1, 0). */
            public static get left(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 0). */
            public static get right(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector2;
            
            public constructor($x: number, $y: number);
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            /** Set x and y components of an existing Vector2. */
            public Set($newX: number, $newY: number):void;
            /** Linearly interpolates between vectors a and b by t. */
            public static Lerp($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number):UnityEngine.Vector2;
            /** Linearly interpolates between vectors a and b by t. */
            public static LerpUnclamped($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number):UnityEngine.Vector2;
            /** Moves a point current towards target. */
            public static MoveTowards($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number):UnityEngine.Vector2;
            /** Multiplies two vectors component-wise. */
            public static Scale($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale($scale: UnityEngine.Vector2):void;
            
            public Normalize():void;
            
            public ToString():string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string):string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string, $formatProvider: System.IFormatProvider):string;
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals($other: any):boolean;
            
            public Equals($other: UnityEngine.Vector2):boolean;
            /** Reflects a vector off the vector defined by a normal. */
            public static Reflect($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
             * @param inDirection The input direction.
             * @returns The perpendicular direction. 
             */
            public static Perpendicular($inDirection: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Dot Product of two vectors. */
            public static Dot($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):number;
            /** Returns the unsigned angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             */
            public static Angle($from: UnityEngine.Vector2, $to: UnityEngine.Vector2):number;
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             */
            public static SignedAngle($from: UnityEngine.Vector2, $to: UnityEngine.Vector2):number;
            /** Returns the distance between a and b. */
            public static Distance($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):number;
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude($vector: UnityEngine.Vector2, $maxLength: number):UnityEngine.Vector2;
            
            public static SqrMagnitude($a: UnityEngine.Vector2):number;
            
            public SqrMagnitude():number;
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):UnityEngine.Vector2;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number):UnityEngine.Vector2;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number):UnityEngine.Vector2;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):UnityEngine.Vector2;
            
            public static op_Addition($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Subtraction($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Multiply($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Division($a: UnityEngine.Vector2, $b: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_UnaryNegation($a: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Multiply($a: UnityEngine.Vector2, $d: number):UnityEngine.Vector2;
            
            public static op_Multiply($d: number, $a: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public static op_Division($a: UnityEngine.Vector2, $d: number):UnityEngine.Vector2;
            
            public static op_Equality($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):boolean;
            
            public static op_Inequality($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2):boolean;
            
            public static op_Implicit($v: UnityEngine.Vector3):UnityEngine.Vector2;
            
            public static op_Implicit($v: UnityEngine.Vector2):UnityEngine.Vector3;
            
            public constructor();
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        /** Provides an interface to get time information from Unity. */
        class Time extends System.Object {
            /** The time at the beginning of this frame (Read Only). */
            public static get time(): number;
            /** The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get timeAsDouble(): number;
            /** The time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
            public static get timeSinceLevelLoad(): number;
            /** The double precision time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
            public static get timeSinceLevelLoadAsDouble(): number;
            /** The interval in seconds from the last frame to the current one (Read Only). */
            public static get deltaTime(): number;
            /** The time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTime(): number;
            /** The double precision time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTimeAsDouble(): number;
            /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTime(): number;
            /** The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTimeAsDouble(): number;
            /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTime(): number;
            /** The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTimeAsDouble(): number;
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
            public static get unscaledDeltaTime(): number;
            /** The timeScale-independent interval in seconds from the last MonoBehaviour.FixedUpdate phase to the current one (Read Only). */
            public static get fixedUnscaledDeltaTime(): number;
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames. */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only). */
            public static get smoothDeltaTime(): number;
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes. */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames since the start of the game (Read Only). */
            public static get frameCount(): number;
            
            public static get renderedFrameCount(): number;
            /** The real time in seconds since the game started (Read Only). */
            public static get realtimeSinceStartup(): number;
            /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup.  */
            public static get realtimeSinceStartupAsDouble(): number;
            /** Slows your application’s playback time to allow Unity to save screenshots in between frames. */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime. */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
            public static get inFixedTimeStep(): boolean;
            
            public constructor();
            
        }
        /** Position, rotation and scale of an object. */
        class Transform extends UnityEngine.Component {
            /** The world space position of the Transform. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform. */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space. */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space. */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space. */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent. */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent. */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform. */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy. */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has. */
            public get childCount(): number;
            /** The global scale of the object (Read Only). */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'? */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure. */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure. */
            public get hierarchyCount(): number;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($p: UnityEngine.Transform):void;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($parent: UnityEngine.Transform, $worldPositionStays: boolean):void;
            /** Sets the world space position and rotation of the Transform component. */
            public SetPositionAndRotation($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
             */
            public Rotate($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             */
            public Rotate($eulers: UnityEngine.Vector3):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
             * @param axis The axis to apply rotation to.
             * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
             * @param angle The degrees of rotation to apply.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
            public RotateAround($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3):void;
            /** Transforms direction from local space to world space. */
            public TransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms direction x, y, z from local space to world space. */
            public TransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms vector from local space to world space. */
            public TransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms vector x, y, z from local space to world space. */
            public TransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from local space to world space. */
            public TransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from local space to world space. */
            public TransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from world space to local space. */
            public InverseTransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
            public InverseTransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            
            public DetachChildren():void;
            
            public SetAsFirstSibling():void;
            
            public SetAsLastSibling():void;
            /** Sets the sibling index. * @param index Index to set.
             */
            public SetSiblingIndex($index: number):void;
            
            public GetSiblingIndex():number;
            /** Finds a child by n and returns it.
             * @param n Name of child to be found.
             * @returns The returned child transform or null if no child is found. 
             */
            public Find($n: string):UnityEngine.Transform;
            /** Is this transform a child of parent? */
            public IsChildOf($parent: UnityEngine.Transform):boolean;
            
            public GetEnumerator():System.Collections.IEnumerator;
            /** Returns a transform child by index.
             * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
             * @returns Transform child by index. 
             */
            public GetChild($index: number):UnityEngine.Transform;
            
        }
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object {
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The game object this component is attached to. A component is always attached to a game object. */
            public get gameObject(): UnityEngine.GameObject;
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            
            public constructor();
            /** Returns the component of Type type if the GameObject has one attached, null if it doesn't. Will also return disabled components. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of the component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't. */
            public GetComponent($type: string):UnityEngine.Component;
            
            public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its children. Works recursively. * @param t The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
             */
            public GetComponentsInChildren($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInChildren($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns the component of Type type in the GameObject or any of its parents.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInParent($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
        }
        /** Quaternions are used to represent rotations. */
        class Quaternion extends System.ValueType {
            
        }
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType {
            
        }
        /** The coordinate space in which to operate. */
        enum Space { World = 0, Self = 1 }
        /** A representation of audio sources in 3D. */
        class AudioSource extends UnityEngine.AudioBehaviour {
            /** The volume of the audio source (0.0 to 1.0). */
            public get volume(): number;
            public set volume(value: number);
            /** The pitch of the audio source. */
            public get pitch(): number;
            public set pitch(value: number);
            /** Playback position in seconds. */
            public get time(): number;
            public set time(value: number);
            /** Playback position in PCM samples. */
            public get timeSamples(): number;
            public set timeSamples(value: number);
            /** The default AudioClip to play. */
            public get clip(): UnityEngine.AudioClip;
            public set clip(value: UnityEngine.AudioClip);
            /** The target group to which the AudioSource should route its signal. */
            public get outputAudioMixerGroup(): UnityEngine.Audio.AudioMixerGroup;
            public set outputAudioMixerGroup(value: UnityEngine.Audio.AudioMixerGroup);
            /** Is the clip playing right now (Read Only)? */
            public get isPlaying(): boolean;
            /** True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system. */
            public get isVirtual(): boolean;
            /** Is the audio clip looping? */
            public get loop(): boolean;
            public set loop(value: boolean);
            /** This makes the audio source not take into account the volume of the audio listener. */
            public get ignoreListenerVolume(): boolean;
            public set ignoreListenerVolume(value: boolean);
            /** If set to true, the audio source will automatically start playing on awake. */
            public get playOnAwake(): boolean;
            public set playOnAwake(value: boolean);
            /** Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus. */
            public get ignoreListenerPause(): boolean;
            public set ignoreListenerPause(value: boolean);
            /** Whether the Audio Source should be updated in the fixed or dynamic update. */
            public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
            public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
            /** Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo. */
            public get panStereo(): number;
            public set panStereo(value: number);
            /** Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D. */
            public get spatialBlend(): number;
            public set spatialBlend(value: number);
            /** Enables or disables spatialization. */
            public get spatialize(): boolean;
            public set spatialize(value: boolean);
            /** Determines if the spatializer effect is inserted before or after the effect filters. */
            public get spatializePostEffects(): boolean;
            public set spatializePostEffects(value: boolean);
            /** The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones. */
            public get reverbZoneMix(): number;
            public set reverbZoneMix(value: number);
            /** Bypass effects (Applied from filter components or global listener filters). */
            public get bypassEffects(): boolean;
            public set bypassEffects(value: boolean);
            /** When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group. */
            public get bypassListenerEffects(): boolean;
            public set bypassListenerEffects(value: boolean);
            /** When set doesn't route the signal from an AudioSource into the global reverb associated with reverb zones. */
            public get bypassReverbZones(): boolean;
            public set bypassReverbZones(value: boolean);
            /** Sets the Doppler scale for this AudioSource. */
            public get dopplerLevel(): number;
            public set dopplerLevel(value: number);
            /** Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space. */
            public get spread(): number;
            public set spread(value: number);
            /** Sets the priority of the AudioSource. */
            public get priority(): number;
            public set priority(value: number);
            /** Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume. */
            public get mute(): boolean;
            public set mute(value: boolean);
            /** Within the Min distance the AudioSource will cease to grow louder in volume. */
            public get minDistance(): number;
            public set minDistance(value: number);
            /** (Logarithmic rolloff) MaxDistance is the distance a sound stops attenuating at. */
            public get maxDistance(): number;
            public set maxDistance(value: number);
            /** Sets/Gets how the AudioSource attenuates over distance. */
            public get rolloffMode(): UnityEngine.AudioRolloffMode;
            public set rolloffMode(value: UnityEngine.AudioRolloffMode);
            
            public constructor();
            /** Plays the clip. * @param delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
             */
            public Play():void;
            /** Plays the clip. * @param delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
             */
            public Play($delay: bigint):void;
            /** Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument. * @param delay Delay time specified in seconds.
             */
            public PlayDelayed($delay: number):void;
            /** Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from. * @param time Time in seconds on the absolute time-line that AudioSettings.dspTime refers to for when the sound should start playing.
             */
            public PlayScheduled($time: number):void;
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale. * @param clip The clip being played.
             * @param volumeScale The scale of the volume (0-1).
             */
            public PlayOneShot($clip: UnityEngine.AudioClip):void;
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale. * @param clip The clip being played.
             * @param volumeScale The scale of the volume (0-1).
             */
            public PlayOneShot($clip: UnityEngine.AudioClip, $volumeScale: number):void;
            /** Changes the time at which a sound that has already been scheduled to play will start. * @param time Time in seconds.
             */
            public SetScheduledStartTime($time: number):void;
            /** Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled. * @param time Time in seconds.
             */
            public SetScheduledEndTime($time: number):void;
            
            public Stop():void;
            
            public Pause():void;
            
            public UnPause():void;
            /** Plays an AudioClip at a given position in world space. * @param clip Audio data to play.
             * @param position Position in world space from which sound originates.
             * @param volume Playback volume.
             */
            public static PlayClipAtPoint($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3):void;
            /** Plays an AudioClip at a given position in world space. * @param clip Audio data to play.
             * @param position Position in world space from which sound originates.
             * @param volume Playback volume.
             */
            public static PlayClipAtPoint($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3, $volume: number):void;
            /** Set the custom curve for the given AudioSourceCurveType. * @param type The curve type that should be set.
             * @param curve The curve that should be applied to the given curve type.
             */
            public SetCustomCurve($type: UnityEngine.AudioSourceCurveType, $curve: UnityEngine.AnimationCurve):void;
            /** Get the current custom curve for the given AudioSourceCurveType.
             * @param type The curve type to get.
             * @returns The custom AnimationCurve corresponding to the given curve type. 
             */
            public GetCustomCurve($type: UnityEngine.AudioSourceCurveType):UnityEngine.AnimationCurve;
            /** Provides a block of the currently playing source's output data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
             * @param channel The channel to sample from.
             */
            public GetOutputData($samples: System.Array$1<number>, $channel: number):void;
            /** Provides a block of the currently playing audio source's spectrum data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
             * @param channel The channel to sample from.
             * @param window The FFTWindow type to use when sampling.
             */
            public GetSpectrumData($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow):void;
            /** Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
             * @param index Zero-based index of user-defined parameter to be set.
             * @param value New value of the user-defined parameter.
             * @returns True, if the parameter could be set. 
             */
            public SetSpatializerFloat($index: number, $value: number):boolean;
            /** Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
             * @param index Zero-based index of user-defined parameter to be read.
             * @param value Return value of the user-defined parameter that is read.
             * @returns True, if the parameter could be read. 
             */
            public GetSpatializerFloat($index: number, $value: $Ref<number>):boolean;
            /** Reads a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
             * @param index Zero-based index of user-defined parameter to be read.
             * @param value Return value of the user-defined parameter that is read.
             * @returns True, if the parameter could be read. 
             */
            public GetAmbisonicDecoderFloat($index: number, $value: $Ref<number>):boolean;
            /** Sets a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
             * @param index Zero-based index of user-defined parameter to be set.
             * @param value New value of the user-defined parameter.
             * @returns True, if the parameter could be set. 
             */
            public SetAmbisonicDecoderFloat($index: number, $value: number):boolean;
            
        }
        
        class AudioBehaviour extends UnityEngine.Behaviour {
            
        }
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component {
            /** Enabled Behaviours are Updated, disabled Behaviours are not. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Has the Behaviour had active and enabled called? */
            public get isActiveAndEnabled(): boolean;
            
            public constructor();
            
        }
        /** A container for audio data. */
        class AudioClip extends UnityEngine.Object {
            /** The length of the audio clip in seconds. (Read Only) */
            public get length(): number;
            /** The length of the audio clip in samples. (Read Only) */
            public get samples(): number;
            /** The number of channels in the audio clip. (Read Only) */
            public get channels(): number;
            /** The sample frequency of the clip in Hertz. (Read Only) */
            public get frequency(): number;
            /** The load type of the clip (read-only). */
            public get loadType(): UnityEngine.AudioClipLoadType;
            /** Preloads audio data of the clip when the clip asset is loaded. When this flag is off, scripts have to call AudioClip.LoadAudioData() to load the data before the clip can be played. Properties like length, channels and format are available before the audio data has been loaded. */
            public get preloadAudioData(): boolean;
            /** Returns true if this audio clip is ambisonic (read-only). */
            public get ambisonic(): boolean;
            /** Corresponding to the "Load In Background" flag in the inspector, when this flag is set, the loading will happen delayed without blocking the main thread. */
            public get loadInBackground(): boolean;
            /** Returns the current load state of the audio data associated with an AudioClip. */
            public get loadState(): UnityEngine.AudioDataLoadState;
            
            public LoadAudioData():boolean;
            
            public UnloadAudioData():boolean;
            /** Fills an array with sample data from the clip. */
            public GetData($data: System.Array$1<number>, $offsetSamples: number):boolean;
            /** Set sample data in a clip. */
            public SetData($data: System.Array$1<number>, $offsetSamples: number):boolean;
            /** Creates a user AudioClip with a name and with the given length in samples, channels and frequency.
             * @param name Name of clip.
             * @param lengthSamples Number of sample frames.
             * @param channels Number of channels per frame.
             * @param frequency Sample frequency of clip.
             * @param _3D Audio clip is played back in 3D.
             * @param stream True if clip is streamed, that is if the pcmreadercallback generates data on the fly.
             * @param pcmreadercallback This callback is invoked to generate a block of sample data. Non-streamed clips call this only once at creation time while streamed clips call this continuously.
             * @param pcmsetpositioncallback This callback is invoked whenever the clip loops or changes playback position.
             * @returns A reference to the created AudioClip. 
             */
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean):UnityEngine.AudioClip;
            
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback):UnityEngine.AudioClip;
            
            public static Create($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, $pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback):UnityEngine.AudioClip;
            
        }
        /** Describes when an AudioSource or AudioListener is updated. */
        enum AudioVelocityUpdateMode { Auto = 0, Fixed = 1, Dynamic = 2 }
        /** This defines the curve type of the different custom curves that can be queried and set within the AudioSource. */
        enum AudioSourceCurveType { CustomRolloff = 0, SpatialBlend = 1, ReverbZoneMix = 2, Spread = 3 }
        /** Store a collection of Keyframes that can be evaluated over time. */
        class AnimationCurve extends System.Object {
            
        }
        /** Rolloff modes that a 3D sound can have in an audio source. */
        enum AudioRolloffMode { Logarithmic = 0, Linear = 1, Custom = 2 }
        /** Spectrum analysis windowing types. */
        enum FFTWindow { Rectangular = 0, Triangle = 1, Hamming = 2, Hanning = 3, Blackman = 4, BlackmanHarris = 5 }
        /** Base class for all entities in Unity Scenes. */
        class GameObject extends UnityEngine.Object {
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The layer the game object is in. */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only) */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene. */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags. */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
            public get sceneCullingMask(): bigint;
            
            public get gameObject(): UnityEngine.GameObject;
            
            public constructor($name: string);
            
            public constructor();
            
            public constructor($name: string, ...components: System.Type[]);
            /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
             */
            public static CreatePrimitive($type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: string):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
             */
            public static FindWithTag($tag: string):UnityEngine.GameObject;
            
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
            public AddComponent($componentType: System.Type):UnityEngine.Component;
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
             */
            public SetActive($value: boolean):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            
            public static FindGameObjectWithTag($tag: string):UnityEngine.GameObject;
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
             */
            public static FindGameObjectsWithTag($tag: string):System.Array$1<UnityEngine.GameObject>;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string):void;
            /** Finds a GameObject by name and returns it. */
            public static Find($name: string):UnityEngine.GameObject;
            
        }
        /** Options for how to send a message. */
        enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
        enum PrimitiveType { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Bit mask that controls object destruction, saving and visibility in inspectors. */
        enum HideFlags { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        /** Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation. */
        class ParticleSystem extends UnityEngine.Component {
            /** Determines whether the Particle System is playing. */
            public get isPlaying(): boolean;
            /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play. */
            public get isEmitting(): boolean;
            /** Determines whether the Particle System is in the stopped state. */
            public get isStopped(): boolean;
            /** Determines whether the Particle System is paused. */
            public get isPaused(): boolean;
            /** The current number of particles (Read Only). */
            public get particleCount(): number;
            /** Playback position in seconds. */
            public get time(): number;
            public set time(value: number);
            /** Override the random seed used for the Particle System emission. */
            public get randomSeed(): number;
            public set randomSeed(value: number);
            /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator. */
            public get useAutoRandomSeed(): boolean;
            public set useAutoRandomSeed(value: boolean);
            /** Does this system support Procedural Simulation? */
            public get proceduralSimulationSupported(): boolean;
            /** Access the main Particle System settings. */
            public get main(): UnityEngine.ParticleSystem.MainModule;
            /** Script interface for the EmissionModule of a Particle System. */
            public get emission(): UnityEngine.ParticleSystem.EmissionModule;
            /** Script interface for the ShapeModule of a Particle System.  */
            public get shape(): UnityEngine.ParticleSystem.ShapeModule;
            /** Script interface for the VelocityOverLifetimeModule of a Particle System. */
            public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. . */
            public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            /** Script interface for the InheritVelocityModule of a Particle System. */
            public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
            /** Script interface for the Particle System Lifetime By Emitter Speed module. */
            public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
            /** Script interface for the ForceOverLifetimeModule of a Particle System. */
            public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            /** Script interface for the ColorOverLifetimeModule of a Particle System. */
            public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            /** Script interface for the ColorByLifetimeModule of a Particle System. */
            public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
            /** Script interface for the SizeOverLifetimeModule of a Particle System.  */
            public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            /** Script interface for the SizeBySpeedModule of a Particle System. */
            public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
            /** Script interface for the RotationOverLifetimeModule of a Particle System. */
            public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            /** Script interface for the RotationBySpeedModule of a Particle System. */
            public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
            /** Script interface for the ExternalForcesModule of a Particle System. */
            public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
            /** Script interface for the NoiseModule of a Particle System. */
            public get noise(): UnityEngine.ParticleSystem.NoiseModule;
            /** Script interface for the CollisionModule of a Particle System. */
            public get collision(): UnityEngine.ParticleSystem.CollisionModule;
            /** Script interface for the TriggerModule of a Particle System. */
            public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
            /** Script interface for the SubEmittersModule of a Particle System. */
            public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
            /** Script interface for the TextureSheetAnimationModule of a Particle System. */
            public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            /** Script interface for the LightsModule of a Particle System. */
            public get lights(): UnityEngine.ParticleSystem.LightsModule;
            /** Script interface for the TrailsModule of a Particle System. */
            public get trails(): UnityEngine.ParticleSystem.TrailModule;
            /** Script interface for the CustomDataModule of a Particle System. */
            public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
            
            public constructor();
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):void;
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):void;
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):number;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):number;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):number;
            
            public SetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):void;
            
            public GetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):number;
            
            public GetPlaybackState():UnityEngine.ParticleSystem.PlaybackState;
            
            public SetPlaybackState($playbackState: UnityEngine.ParticleSystem.PlaybackState):void;
            
            public GetTrails():UnityEngine.ParticleSystem.Trails;
            
            public SetTrails($trailData: UnityEngine.ParticleSystem.Trails):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean, $restart: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number):void;
            /** Starts the Particle System. * @param withChildren Play all child Particle Systems as well.
             */
            public Play($withChildren: boolean):void;
            
            public Play():void;
            /** Pauses the system so no new particles are emitted and the existing particles are not updated. * @param withChildren Pause all child Particle Systems as well.
             */
            public Pause($withChildren: boolean):void;
            
            public Pause():void;
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
             * @param stopBehavior Stop emitting or stop emitting and clear the system.
             */
            public Stop($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior):void;
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
             * @param stopBehavior Stop emitting or stop emitting and clear the system.
             */
            public Stop($withChildren: boolean):void;
            
            public Stop():void;
            /** Remove all particles in the Particle System. * @param withChildren Clear all child Particle Systems as well.
             */
            public Clear($withChildren: boolean):void;
            
            public Clear():void;
            /** Does the Particle System contain any live particles, or will it produce more?
             * @param withChildren Check all child Particle Systems as well.
             * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
             */
            public IsAlive($withChildren: boolean):boolean;
            
            public IsAlive():boolean;
            /** Emit count particles immediately. * @param count Number of particles to emit.
             */
            public Emit($count: number):void;
            
            public Emit($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number):void;
            /** Triggers the specified sub emitter on all particles of the Particle System. * @param subEmitterIndex Index of the sub emitter to trigger.
             */
            public TriggerSubEmitter($subEmitterIndex: number):void;
            
            public TriggerSubEmitter($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>):void;
            
            public TriggerSubEmitter($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public static ResetPreMappedBufferMemory():void;
            /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems. * @param vertexBuffersCount The maximum number of cached vertex buffers.
             * @param indexBuffersCount The maximum number of cached index buffers.
             */
            public static SetMaximumPreMappedBufferCounts($vertexBuffersCount: number, $indexBuffersCount: number):void;
            
            public AllocateAxisOfRotationAttribute():void;
            
            public AllocateMeshIndexAttribute():void;
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated. * @param stream The custom data stream to allocate.
             */
            public AllocateCustomDataAttribute($stream: UnityEngine.ParticleSystemCustomData):void;
            
        }
        /** Representation of RGBA colors in 32 bit format. */
        class Color32 extends System.ValueType {
            
        }
        /** The space to simulate particles in. */
        enum ParticleSystemSimulationSpace { Local = 0, World = 1, Custom = 2 }
        /** Control how particle systems apply transform scale. */
        enum ParticleSystemScalingMode { Hierarchy = 0, Local = 1, Shape = 2 }
        /** Representation of four-dimensional vectors. */
        class Vector4 extends System.ValueType {
            
        }
        /** Which stream of custom particle data to set. */
        enum ParticleSystemCustomData { Custom1 = 0, Custom2 = 1 }
        /** The behavior to apply when calling ParticleSystem.Stop|Stop. */
        enum ParticleSystemStopBehavior { StopEmittingAndClear = 0, StopEmitting = 1 }
        /** Element that can be used for screen rendering. */
        class Canvas extends UnityEngine.Behaviour {
            /** Is the Canvas in World or Overlay mode? */
            public get renderMode(): UnityEngine.RenderMode;
            public set renderMode(value: UnityEngine.RenderMode);
            /** Is this the root Canvas? */
            public get isRootCanvas(): boolean;
            /** Get the render rect for the Canvas. */
            public get pixelRect(): UnityEngine.Rect;
            /** Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space. */
            public get scaleFactor(): number;
            public set scaleFactor(value: number);
            /** The number of pixels per unit that is considered the default. */
            public get referencePixelsPerUnit(): number;
            public set referencePixelsPerUnit(value: number);
            /** Allows for nested canvases to override pixelPerfect settings inherited from parent canvases. */
            public get overridePixelPerfect(): boolean;
            public set overridePixelPerfect(value: boolean);
            /** Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space. */
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            /** How far away from the camera is the Canvas generated. */
            public get planeDistance(): number;
            public set planeDistance(value: number);
            /** The render order in which the canvas is being emitted to the Scene. (Read Only) */
            public get renderOrder(): number;
            /** Override the sorting of canvas. */
            public get overrideSorting(): boolean;
            public set overrideSorting(value: boolean);
            /** Canvas' order within a sorting layer. */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** For Overlay mode, display index on which the UI canvas will appear. */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Unique ID of the Canvas' sorting layer. */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Cached calculated value based upon SortingLayerID. */
            public get cachedSortingLayerValue(): number;
            /** Get or set the mask of additional shader channels to be used when creating the Canvas mesh. */
            public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
            public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
            /** Name of the Canvas' sorting layer. */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself. */
            public get rootCanvas(): UnityEngine.Canvas;
            /** Returns the canvas display size based on the selected render mode and target display. */
            public get renderingDisplaySize(): UnityEngine.Vector2;
            /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas]. */
            public get worldCamera(): UnityEngine.Camera;
            public set worldCamera(value: UnityEngine.Camera);
            /** The normalized grid size that the canvas will split the renderable area into. */
            public get normalizedSortingGridSize(): number;
            public set normalizedSortingGridSize(value: number);
            
            public constructor();
            
            public static add_preWillRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static remove_preWillRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static add_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static remove_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static GetDefaultCanvasMaterial():UnityEngine.Material;
            
            public static GetETC1SupportedCanvasMaterial():UnityEngine.Material;
            
            public static ForceUpdateCanvases():void;
            
        }
        /** RenderMode for the Canvas. */
        enum RenderMode { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        /** Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created. */
        enum AdditionalCanvasShaderChannels { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        /** A Camera is a device through which the player views the world. */
        class Camera extends UnityEngine.Behaviour {
            
        }
        /** The material class. */
        class Material extends UnityEngine.Object {
            
        }
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour {
            /** Disabling this lets you skip the GUI layout phase. */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            
            public constructor();
            
            public IsInvoking():boolean;
            
            public CancelInvoke():void;
            /** Invokes the method methodName in time seconds. */
            public Invoke($methodName: string, $time: number):void;
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
            public InvokeRepeating($methodName: string, $time: number, $repeatRate: number):void;
            /** Cancels all Invoke calls with name methodName on this behaviour. */
            public CancelInvoke($methodName: string):void;
            /** Is any invoke on methodName pending? */
            public IsInvoking($methodName: string):boolean;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string):UnityEngine.Coroutine;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string, $value: any):UnityEngine.Coroutine;
            /** Starts a Coroutine. */
            public StartCoroutine($routine: System.Collections.IEnumerator):UnityEngine.Coroutine;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: System.Collections.IEnumerator):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: UnityEngine.Coroutine):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($methodName: string):void;
            
            public StopAllCoroutines():void;
            /** Logs message to the Unity Console (identical to Debug.Log). */
            public static print($message: any):void;
            
        }
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
        class Coroutine extends UnityEngine.YieldInstruction {
            
        }
        /** The Resources class allows you to find and access Objects including assets. */
        class Resources extends System.Object {
            
            public constructor();
            /** Returns a list of all objects of Type type. */
            public static FindObjectsOfTypeAll($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
             * @param path Path to the target resource to load.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string):UnityEngine.Object;
            /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
             * @param path Path to the target resource to load.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string, $systemTypeInstance: System.Type):UnityEngine.Object;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAsync($path: string):UnityEngine.ResourceRequest;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAsync($path: string, $type: System.Type):UnityEngine.ResourceRequest;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAll($path: string, $systemTypeInstance: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAll($path: string):System.Array$1<UnityEngine.Object>;
            
            public static GetBuiltinResource($type: System.Type, $path: string):UnityEngine.Object;
            /** Unloads assetToUnload from memory. */
            public static UnloadAsset($assetToUnload: UnityEngine.Object):void;
            
            public static UnloadUnusedAssets():UnityEngine.AsyncOperation;
            /** Translates an instance ID to an object reference.
             * @param instanceID Instance ID of an Object.
             * @returns Resolved reference or null if the instance ID didn't match anything. 
             */
            public static InstanceIDToObject($instanceID: number):UnityEngine.Object;
            
            public static InstanceIDToObjectList($instanceIDs: Unity.Collections.NativeArray$1<number>, $objects: System.Collections.Generic.List$1<UnityEngine.Object>):void;
            
        }
        /** Asynchronous load request from the Resources bundle. */
        class ResourceRequest extends UnityEngine.AsyncOperation {
            
        }
        /** AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle. */
        class AssetBundle extends UnityEngine.Object {
            /** Return true if the AssetBundle is a streamed Scene AssetBundle. */
            public get isStreamedSceneAssetBundle(): boolean;
            /** Unloads all currently loaded AssetBundles. * @param unloadAllObjects Determines whether the current instances of objects loaded from AssetBundles will also be unloaded.
             */
            public static UnloadAllAssetBundles($unloadAllObjects: boolean):void;
            
            public static GetAllLoadedAssetBundles():System.Collections.Generic.IEnumerable$1<UnityEngine.AssetBundle>;
            
            public static LoadFromFileAsync($path: string):UnityEngine.AssetBundleCreateRequest;
            
            public static LoadFromFileAsync($path: string, $crc: number):UnityEngine.AssetBundleCreateRequest;
            /** Asynchronously loads an AssetBundle from a file on disk.
             * @param path Path of the file on disk.
             * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
             * @param offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
             * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
             */
            public static LoadFromFileAsync($path: string, $crc: number, $offset: bigint):UnityEngine.AssetBundleCreateRequest;
            
            public static LoadFromFile($path: string):UnityEngine.AssetBundle;
            
            public static LoadFromFile($path: string, $crc: number):UnityEngine.AssetBundle;
            /** Synchronously loads an AssetBundle from a file on disk.
             * @param path Path of the file on disk.
             * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
             * @param offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
             * @returns Loaded AssetBundle object or null if failed. 
             */
            public static LoadFromFile($path: string, $crc: number, $offset: bigint):UnityEngine.AssetBundle;
            
            public static LoadFromMemoryAsync($binary: System.Array$1<number>):UnityEngine.AssetBundleCreateRequest;
            /** Asynchronously create an AssetBundle from a memory region.
             * @param binary Array of bytes with the AssetBundle data.
             * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
             * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
             */
            public static LoadFromMemoryAsync($binary: System.Array$1<number>, $crc: number):UnityEngine.AssetBundleCreateRequest;
            
            public static LoadFromMemory($binary: System.Array$1<number>):UnityEngine.AssetBundle;
            /** Synchronously create an AssetBundle from a memory region.
             * @param binary Array of bytes with the AssetBundle data.
             * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
             * @returns Loaded AssetBundle object or null if failed. 
             */
            public static LoadFromMemory($binary: System.Array$1<number>, $crc: number):UnityEngine.AssetBundle;
            /** Asynchronously loads an AssetBundle from a managed Stream.
             * @param stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
             * @param crc An optional CRC-32 checksum of the uncompressed content.
             * @param managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
             * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
             */
            public static LoadFromStreamAsync($stream: System.IO.Stream, $crc: number, $managedReadBufferSize: number):UnityEngine.AssetBundleCreateRequest;
            
            public static LoadFromStreamAsync($stream: System.IO.Stream, $crc: number):UnityEngine.AssetBundleCreateRequest;
            
            public static LoadFromStreamAsync($stream: System.IO.Stream):UnityEngine.AssetBundleCreateRequest;
            /** Synchronously loads an AssetBundle from a managed Stream.
             * @param stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
             * @param crc An optional CRC-32 checksum of the uncompressed content.
             * @param managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
             * @returns The loaded AssetBundle object or null when the object fails to load. 
             */
            public static LoadFromStream($stream: System.IO.Stream, $crc: number, $managedReadBufferSize: number):UnityEngine.AssetBundle;
            
            public static LoadFromStream($stream: System.IO.Stream, $crc: number):UnityEngine.AssetBundle;
            
            public static LoadFromStream($stream: System.IO.Stream):UnityEngine.AssetBundle;
            /** Check if an AssetBundle contains a specific object. */
            public Contains($name: string):boolean;
            /** Loads asset with name of type T from the bundle. */
            public LoadAsset($name: string):UnityEngine.Object;
            /** Loads asset with name of a given type from the bundle. */
            public LoadAsset($name: string, $type: System.Type):UnityEngine.Object;
            /** Asynchronously loads asset with name of a given T from the bundle. */
            public LoadAssetAsync($name: string):UnityEngine.AssetBundleRequest;
            /** Asynchronously loads asset with name of a given type from the bundle. */
            public LoadAssetAsync($name: string, $type: System.Type):UnityEngine.AssetBundleRequest;
            /** Loads asset and sub assets with name of type T from the bundle. */
            public LoadAssetWithSubAssets($name: string):System.Array$1<UnityEngine.Object>;
            /** Loads asset and sub assets with name of a given type from the bundle. */
            public LoadAssetWithSubAssets($name: string, $type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads asset with sub assets with name of type T from the bundle asynchronously. */
            public LoadAssetWithSubAssetsAsync($name: string):UnityEngine.AssetBundleRequest;
            /** Loads asset with sub assets with name of a given type from the bundle asynchronously. */
            public LoadAssetWithSubAssetsAsync($name: string, $type: System.Type):UnityEngine.AssetBundleRequest;
            
            public LoadAllAssets():System.Array$1<UnityEngine.Object>;
            /** Loads all assets contained in the asset bundle that inherit from type. */
            public LoadAllAssets($type: System.Type):System.Array$1<UnityEngine.Object>;
            
            public LoadAllAssetsAsync():UnityEngine.AssetBundleRequest;
            /** Loads all assets contained in the asset bundle that inherit from type asynchronously. */
            public LoadAllAssetsAsync($type: System.Type):UnityEngine.AssetBundleRequest;
            /** Unloads an AssetBundle freeing its data. * @param unloadAllLoadedObjects Determines whether the current instances of objects loaded from the AssetBundle will also be unloaded.
             */
            public Unload($unloadAllLoadedObjects: boolean):void;
            
            public GetAllAssetNames():System.Array$1<string>;
            
            public GetAllScenePaths():System.Array$1<string>;
            /** Asynchronously recompress a downloaded/stored AssetBundle from one BuildCompression to another. * @param inputPath Path to the AssetBundle to recompress.
             * @param outputPath Path to the recompressed AssetBundle to be generated. Can be the same as inputPath.
             * @param method The compression method, level and blocksize to use during recompression. Only some BuildCompression types are supported (see note).
             * @param expectedCRC CRC of the AssetBundle to test against. Testing this requires additional file reading and computation. Pass in 0 to skip this check. Unity does not compute a CRC when the source and destination BuildCompression are the same, so no CRC verification takes place (see note).
             * @param priority The priority at which the recompression operation should run. This sets thread priority during the operation and does not effect the order in which operations are performed. Recompression operations run on a background worker thread.
             */
            public static RecompressAssetBundleAsync($inputPath: string, $outputPath: string, $method: UnityEngine.BuildCompression, $expectedCRC?: number, $priority?: UnityEngine.ThreadPriority):UnityEngine.AssetBundleRecompressOperation;
            
        }
        /** Asynchronous create request for an AssetBundle. */
        class AssetBundleCreateRequest extends UnityEngine.AsyncOperation {
            
        }
        /** Asynchronous load request from an AssetBundle. */
        class AssetBundleRequest extends UnityEngine.ResourceRequest {
            
        }
        /** Asynchronous AssetBundle recompression from one compression method and level to another. */
        class AssetBundleRecompressOperation extends UnityEngine.AsyncOperation {
            
        }
        /** Contains information about compression methods, compression levels and block sizes that are supported by Asset Bundle compression at build time and recompression at runtime. */
        class BuildCompression extends System.ValueType {
            
        }
        /** Text file assets. */
        class TextAsset extends UnityEngine.Object {
            /** The raw bytes of the text asset. (Read Only) */
            public get bytes(): System.Array$1<number>;
            /** The text contents of the .txt file as a string. (Read Only) */
            public get text(): string;
            
            public constructor();
            
            public constructor($text: string);
            
        }
        /** Represents a string as an int for efficient lookup and comparison. Use this for common PropertyNames.
        Internally stores just an int to represent the string. A PropertyName can be created from a string but can not be converted back to a string. The same string always results in the same int representing that string. Thus this is a very efficient string representation in both memory and speed when all you need is comparison.
        PropertyName is serializable.
        ToString() is only implemented for debugging purposes in the editor it returns "theName:3737" in the player it returns "Unknown:3737". */
        class PropertyName extends System.ValueType {
            
        }
        /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. */
        enum KeyCode { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        /** Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported. */
        class TouchScreenKeyboard extends System.Object {
            
        }
        /** Enumeration of the different types of supported touchscreen keyboards. */
        enum TouchScreenKeyboardType { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10, DecimalPad = 11, OneTimeCode = 12 }
        /** A UnityGUI event. */
        class Event extends System.Object {
            
        }
        /** Class that can be used to generate text for rendering. */
        class TextGenerator extends System.Object {
            
        }
        /** Script interface for. */
        class Font extends UnityEngine.Object {
            
        }
        /** Where the anchor of the text is placed. */
        enum TextAnchor { UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
        /** Wrapping modes for text that reaches the horizontal boundary. */
        enum HorizontalWrapMode { Wrap = 0, Overflow = 1 }
        /** Wrapping modes for text that reaches the vertical boundary. */
        enum VerticalWrapMode { Truncate = 0, Overflow = 1 }
        /** Font Style applied to GUI Texts, Text Meshes or GUIStyles. */
        enum FontStyle { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
        /** A struct that stores the settings for TextGeneration. */
        class TextGenerationSettings extends System.ValueType {
            
        }
        /** Interface into the Input system. */
        class Input extends System.Object {
            /** Enables/Disables mouse simulation with touches. By default this option is enabled. */
            public static get simulateMouseWithTouches(): boolean;
            public static set simulateMouseWithTouches(value: boolean);
            /** Is any key or mouse button currently held down? (Read Only) */
            public static get anyKey(): boolean;
            /** Returns true the first frame the user hits any key or mouse button. (Read Only) */
            public static get anyKeyDown(): boolean;
            /** Returns the keyboard input entered this frame. (Read Only) */
            public static get inputString(): string;
            /** The current mouse position in pixel coordinates. (Read Only). */
            public static get mousePosition(): UnityEngine.Vector3;
            /** The current mouse scroll delta. (Read Only) */
            public static get mouseScrollDelta(): UnityEngine.Vector2;
            /** Controls enabling and disabling of IME input composition. */
            public static get imeCompositionMode(): UnityEngine.IMECompositionMode;
            public static set imeCompositionMode(value: UnityEngine.IMECompositionMode);
            /** The current IME composition string being typed by the user. */
            public static get compositionString(): string;
            /** Does the user have an IME keyboard input source selected? */
            public static get imeIsSelected(): boolean;
            /** The current text input position used by IMEs to open windows. */
            public static get compositionCursorPos(): UnityEngine.Vector2;
            public static set compositionCursorPos(value: UnityEngine.Vector2);
            /** Indicates if a mouse device is detected. */
            public static get mousePresent(): boolean;
            /** Number of touches. Guaranteed not to change throughout the frame. (Read Only) */
            public static get touchCount(): number;
            /** Bool value which let's users check if touch pressure is supported. */
            public static get touchPressureSupported(): boolean;
            /** Returns true when Stylus Touch is supported by a device or platform. */
            public static get stylusTouchSupported(): boolean;
            /** Returns whether the device on which application is currently running supports touch input. */
            public static get touchSupported(): boolean;
            /** Property indicating whether the system handles multiple touches. */
            public static get multiTouchEnabled(): boolean;
            public static set multiTouchEnabled(value: boolean);
            /** Device physical orientation as reported by OS. (Read Only) */
            public static get deviceOrientation(): UnityEngine.DeviceOrientation;
            /** Last measured linear acceleration of a device in three-dimensional space. (Read Only) */
            public static get acceleration(): UnityEngine.Vector3;
            /** This property controls if input sensors should be compensated for screen orientation. */
            public static get compensateSensors(): boolean;
            public static set compensateSensors(value: boolean);
            /** Number of acceleration measurements which occurred during last frame. */
            public static get accelerationEventCount(): number;
            /** Should  Back button quit the application?
            Only usable on Android, Windows Phone or Windows Tablets. */
            public static get backButtonLeavesApp(): boolean;
            public static set backButtonLeavesApp(value: boolean);
            /** Property for accessing device location (handheld devices only). (Read Only) */
            public static get location(): UnityEngine.LocationService;
            /** Property for accessing compass (handheld devices only). (Read Only) */
            public static get compass(): UnityEngine.Compass;
            /** Returns default gyroscope. */
            public static get gyro(): UnityEngine.Gyroscope;
            /** Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables). */
            public static get touches(): System.Array$1<UnityEngine.Touch>;
            /** Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables). */
            public static get accelerationEvents(): System.Array$1<UnityEngine.AccelerationEvent>;
            
            public constructor();
            /** Returns the value of the virtual axis identified by axisName. */
            public static GetAxis($axisName: string):number;
            /** Returns the value of the virtual axis identified by axisName with no smoothing filtering applied. */
            public static GetAxisRaw($axisName: string):number;
            /** Returns true while the virtual button identified by buttonName is held down.
             * @param buttonName The name of the button such as Jump.
             * @returns True when an axis has been pressed and not released. 
             */
            public static GetButton($buttonName: string):boolean;
            /** Returns true during the frame the user pressed down the virtual button identified by buttonName. */
            public static GetButtonDown($buttonName: string):boolean;
            /** Returns true the first frame the user releases the virtual button identified by buttonName. */
            public static GetButtonUp($buttonName: string):boolean;
            /** Returns whether the given mouse button is held down. */
            public static GetMouseButton($button: number):boolean;
            /** Returns true during the frame the user pressed the given mouse button. */
            public static GetMouseButtonDown($button: number):boolean;
            /** Returns true during the frame the user releases the given mouse button. */
            public static GetMouseButtonUp($button: number):boolean;
            
            public static ResetInputAxes():void;
            
            public static GetJoystickNames():System.Array$1<string>;
            /** Call Input.GetTouch to obtain a Touch struct.
             * @param index The touch input on the device screen.
             * @returns Touch details in the struct. 
             */
            public static GetTouch($index: number):UnityEngine.Touch;
            /** Returns specific acceleration measurement which occurred during last frame. (Does not allocate temporary variables). */
            public static GetAccelerationEvent($index: number):UnityEngine.AccelerationEvent;
            /** Returns true while the user holds down the key identified by the key KeyCode enum parameter. */
            public static GetKey($key: UnityEngine.KeyCode):boolean;
            /** Returns true while the user holds down the key identified by name. */
            public static GetKey($name: string):boolean;
            /** Returns true during the frame the user releases the key identified by the key KeyCode enum parameter. */
            public static GetKeyUp($key: UnityEngine.KeyCode):boolean;
            /** Returns true during the frame the user releases the key identified by name. */
            public static GetKeyUp($name: string):boolean;
            /** Returns true during the frame the user starts pressing down the key identified by the key KeyCode enum parameter. */
            public static GetKeyDown($key: UnityEngine.KeyCode):boolean;
            /** Returns true during the frame the user starts pressing down the key identified by name. */
            public static GetKeyDown($name: string):boolean;
            
        }
        /** Structure describing the status of a finger touching the screen. */
        class Touch extends System.ValueType {
            
        }
        /** Structure describing acceleration status of the device. */
        class AccelerationEvent extends System.ValueType {
            
        }
        /** Controls IME input. */
        enum IMECompositionMode { Auto = 0, On = 1, Off = 2 }
        /** Describes physical orientation of the device as determined by the OS. */
        enum DeviceOrientation { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, FaceUp = 5, FaceDown = 6 }
        /** Interface into location functionality. */
        class LocationService extends System.Object {
            
        }
        /** Interface into compass functionality. */
        class Compass extends System.Object {
            
        }
        /** Interface into the Gyroscope. */
        class Gyroscope extends System.Object {
            
        }
        /** Determines how the audio clip is loaded in. */
        enum AudioClipLoadType { DecompressOnLoad = 0, CompressedInMemory = 1, Streaming = 2 }
        /** Value describing the current load state of the audio data associated with an AudioClip. */
        enum AudioDataLoadState { Unloaded = 0, Loading = 1, Loaded = 2, Failed = 3 }
        /** Position, size, anchor and pivot information for a rectangle. */
        class RectTransform extends UnityEngine.Transform {
            
        }
        /** Represents a Sprite object for use in 2D gameplay. */
        class Sprite extends UnityEngine.Object {
            
        }
        
    }
    namespace System.Reflection {
        
        class MemberInfo extends System.Object {
            
        }
        
        class MethodInfo extends System.Reflection.MethodBase {
            
        }
        
        class MethodBase extends System.Reflection.MemberInfo {
            
        }
        
        type MemberFilter = (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        
        enum MemberTypes { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        
        class AssemblyName extends System.Object {
            
        }
        
        class Assembly extends System.Object {
            
        }
        
        class Binder extends System.Object {
            
        }
        
        enum BindingFlags { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        
        class ParameterModifier extends System.ValueType {
            
        }
        
        class Module extends System.Object {
            
        }
        
        class ConstructorInfo extends System.Reflection.MethodBase {
            
        }
        
        enum CallingConventions { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        
        class FieldInfo extends System.Reflection.MemberInfo {
            
        }
        
        type TypeFilter = (m: System.Type, filterCriteria: any) => boolean;
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        
        class EventInfo extends System.Reflection.MemberInfo {
            
        }
        
        class PropertyInfo extends System.Reflection.MemberInfo {
            
        }
        
        enum TypeAttributes { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        
        enum GenericParameterAttributes { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        
        class InterfaceMapping extends System.ValueType {
            
        }
        
    }
    namespace UnityEditor.AssetImporter {
        
        class SourceAssetIdentifier extends System.ValueType {
            
        }
        
    }
    namespace UnityEditor.Build.Reporting {
        /** The BuildReport API gives you information about the Unity build process. */
        class BuildReport extends UnityEngine.Object {
            
        }
        
    }
    
        
        class PackConfig extends UnityEngine.ScriptableObject {
            
            public entrance: UnityEditor.SceneAsset;
            
            public exclude: System.Array$1<UnityEditor.SceneAsset>;
            
            public constructor();
            
        }
        
        class BRPSceneManager extends System.Object {
            
            public constructor();
            
            public static GetSceneLoader($name: string):IScenesLoader;
            
        }
        
        interface IScenesLoader {
            
            LoadScene($name: string):void;
            
        }
        
        class LevelRunner extends UnityEngine.MonoBehaviour {
            
            public AutoInitEnv: boolean;
            
            public PackName: string;
            
            public LevelModName: string;
            
            public CorePackName: string;
            
            public LevelLoaderName: string;
            
            public JsStart: System.Action;
            
            public JsUpdate: System.Action;
            
            public JsFixedUpdate: System.Action;
            
            public JsOnDestroy: System.Action;
            
            public constructor();
            
        }
        
        class FileHelper extends System.Object {
            
            public constructor();
            
            public static ReadStreamTextFile($filepath: string):string;
            
        }
        
        class GameObjectHelper extends System.Object {
            
            public constructor();
            
            public static GetTransformByName($name: string):UnityEngine.Transform;
            
        }
        
        class GameObjectPool extends UnityEngine.MonoBehaviour {
            
            public static Instance: GameObjectPool;
            
            public gameObjectPool: System.Collections.Generic.List$1<UnityEngine.Transform>;
            
            public constructor();
            
            public Find($n: string):UnityEngine.Transform;
            
        }
        
        class CommonJsCall extends UnityEngine.MonoBehaviour {
            
            public static Instance: CommonJsCall;
            
            public constructor();
            
            public static QuitGame():void;
            
            public static RegGameObject($go: UnityEngine.GameObject, $newname: string):void;
            
            public static IsGameObjectInPool($go: UnityEngine.GameObject):boolean;
            
            public static WaitForFrames($count: number, $CallBack: System.Action):void;
            
            public static WaitForSecondsRealtime($count: number, $CallBack: System.Action):void;
            
            public static WaitForSeconds($count: number, $CallBack: System.Action):void;
            
            public static DoAction($action: System.Action, $callBack: System.Action):void;
            
            public static SetActive($trans: UnityEngine.Transform, $state: boolean):void;
            
            public static SetActive($name: string, $state: boolean):void;
            
            public static PlayAnim($trans: UnityEngine.Transform, $animName: string, $cb: System.Action):void;
            
            public static PlayAnim($name: string, $animName: string, $cb: System.Action):void;
            
        }
        
        class TimelineHelper extends System.Object {
            
            public static GetTimeline($name: string):UnityEngine.Playables.PlayableDirector;
            
            public static ApproxEquals($a: number, $b: number):boolean;
            
            public static ApproxEquals($a: number, $b: number):boolean;
            
            public static ReverseTimeline($PD: UnityEngine.Playables.PlayableDirector, $cb: System.Action):void;
            
            public static _ReverseTimeline($PD: UnityEngine.Playables.PlayableDirector, $cb: System.Action):System.Collections.IEnumerator;
            
        }
        
        class CharacterManager extends UnityEngine.MonoBehaviour {
            
            public CharacterController: ICharacterController;
            
            public constructor();
            
            public static GetCharacterManager($n: string):CharacterManager;
            
            public EnableCharacterMovement():void;
            
            public DisableCharacterMovement():void;
            
        }
        
        interface ICharacterController {
            
        }
        
        interface ITrigger {
            
            EnterAct: System.Collections.Generic.Dictionary$2<string, System.Action>;
            
            LeaveAct: System.Collections.Generic.Dictionary$2<string, System.Action>;
            
            isUseful: boolean;
            
            GameType: GameType;
            
            MakeUseful():void;
            
            MakeUseless():void;
            
        }
        
        enum GameType { FPS = 0, TPS = 1, AVG = 2 }
        
        interface IActionTrigger {
            
            code: UnityEngine.KeyCode;
            
            interAction: System.Action;
            
            PlayerTag: string;
            
            interActable: boolean;
            
            EnterAct: System.Collections.Generic.Dictionary$2<string, System.Action>;
            
            LeaveAct: System.Collections.Generic.Dictionary$2<string, System.Action>;
            
            isUseful: boolean;
            
            GameType: GameType;
            
            MakeUseful():void;
            
            MakeUseless():void;
            
            MakeInterActable():void;
            
            MakeDisInterActable():void;
            
        }
        
        class TriggerHelper extends System.Object {
            
            public constructor();
            
            public static GetTrigger($name: string):ITrigger;
            
            public static GetActionTrigger($name: string):IActionTrigger;
            
        }
        
        interface ICameraDetector {
            
            detectRange: number;
            
            ISDetecting: boolean;
            
            StartDetecting():void;
            
            StopDetecting():void;
            
        }
        
        class CameraManager extends UnityEngine.MonoBehaviour {
            
            public constructor();
            
            public static GetCameraDetector($name: string):ICameraDetector;
            
        }
        
        class UIHelper extends System.Object {
            
            public constructor();
            
            public static GetCanvas($name: string):UnityEngine.Canvas;
            
            public static GetButton($name: string):UnityEngine.UI.Button;
            
            public static GetText($name: string):UnityEngine.UI.Text;
            
            public static GetInputField($name: string):UnityEngine.UI.InputField;
            
        }
        
        class SoundLib extends UnityEngine.MonoBehaviour {
            
            public config: SoundConfig;
            
            public static Instance: SoundLib;
            
            public constructor();
            
            public static GetSoundLib():SoundLib;
            
            public GetSound($tag: string):UnityEngine.AudioClip;
            
            public GetMusic($tag: string):UnityEngine.AudioClip;
            
        }
        
        class SoundConfig extends UnityEngine.ScriptableObject {
            
            public SoundLib: System.Collections.Generic.List$1<TagSound>;
            
            public MusicLib: System.Collections.Generic.List$1<TagSound>;
            
            public tag: string;
            
            public clip: UnityEngine.AudioClip;
            
            public constructor();
            
            public AddToMusic():void;
            
            public AddToSound():void;
            
            public ClearMusic():void;
            
            public ClearSound():void;
            
        }
        
        class TagSound extends System.Object {
            
            public tag: string;
            
            public clip: UnityEngine.AudioClip;
            
            public constructor();
            
            public constructor($t: string, $c: UnityEngine.AudioClip);
            
        }
        
        class Tweens extends UnityEngine.MonoBehaviour {
            
            public constructor();
            
            public static Fade($name: string, $start: number, $end: number, $time: number, $callback: System.Action):void;
            
            public static Fade($trans: UnityEngine.Transform, $start: number, $end: number, $time: number, $callback: System.Action):void;
            
            public static FadeSprite($name: string, $start: number, $end: number, $time: number, $callback: System.Action):void;
            
            public static FadeUIGroup($name: string, $start: number, $end: number, $time: number, $callback: System.Action):void;
            
            public static FadeColorFromTo($trans: UnityEngine.Transform, $from: string, $to: string, $time: number, $act?: System.Action):void;
            
            public static FadeColorFromTo($name: string, $from: string, $to: string, $time: number, $act?: System.Action):void;
            
            public static MoveFrom($name: string, $from: UnityEngine.Vector3, $time: number, $callback: System.Action):void;
            
            public static MoveTo($name: string, $to: UnityEngine.Vector3, $time: number, $callback: System.Action):void;
            
            public static ScaleFromTo($name: string, $from: number, $to: number, $time: number, $callback: System.Action):void;
            
        }
        
        class AssetHelper extends UnityEngine.MonoBehaviour {
            
            public loadType: AssetHelper.LoadType;
            
            public static Instance: AssetHelper;
            
            public Scenes: System.Collections.Generic.Dictionary$2<string, string>;
            
            public constructor();
            
            public static GetAssetHelper():AssetHelper;
            
            public GetAllScenes():System.Array$1<string>;
            
        }
        
        enum LeanTweenType { notUsed = 0, linear = 1, easeOutQuad = 2, easeInQuad = 3, easeInOutQuad = 4, easeInCubic = 5, easeOutCubic = 6, easeInOutCubic = 7, easeInQuart = 8, easeOutQuart = 9, easeInOutQuart = 10, easeInQuint = 11, easeOutQuint = 12, easeInOutQuint = 13, easeInSine = 14, easeOutSine = 15, easeInOutSine = 16, easeInExpo = 17, easeOutExpo = 18, easeInOutExpo = 19, easeInCirc = 20, easeOutCirc = 21, easeInOutCirc = 22, easeInBounce = 23, easeOutBounce = 24, easeInOutBounce = 25, easeInBack = 26, easeOutBack = 27, easeInOutBack = 28, easeInElastic = 29, easeOutElastic = 30, easeInOutElastic = 31, easeSpring = 32, easeShake = 33, punch = 34, once = 35, clamp = 36, pingPong = 37, animationCurve = 38 }
        
        class DialogHelper extends UnityEngine.MonoBehaviour {
            
            public constructor();
            
            public static GetCharacter($name: string):Fungus.Character;
            
            public static GetStage($name: string):Fungus.Stage;
            
            public static GetStage():Fungus.Stage;
            
        }
        
    
    namespace System.Runtime.Serialization {
        
        class SerializationInfo extends System.Object {
            
        }
        
        class StreamingContext extends System.ValueType {
            
        }
        
    }
    namespace System.Threading.Tasks {
        
        class Task extends System.Object {
            
        }
        
    }
    namespace UnityEngine.Application {
        
        type AdvertisingIdentifierCallback = (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
        var AdvertisingIdentifierCallback: {new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback;}
        
        type LowMemoryCallback = () => void;
        var LowMemoryCallback: {new (func: () => void): LowMemoryCallback;}
        
        type LogCallback = (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
        var LogCallback: {new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback;}
        
    }
    namespace UnityEngine.Events {
        /** Zero argument delegate used by UnityEvents. */
        type UnityAction = () => void;
        var UnityAction: {new (func: () => void): UnityAction;}
        
        type UnityAction$2<T0,T1> = (arg0: T0, arg1: T1) => void;
        
        type UnityAction$1<T0> = (arg0: T0) => void;
        /** A zero argument persistent callback that can be saved with the Scene. */
        class UnityEvent extends UnityEngine.Events.UnityEventBase {
            
            public constructor();
            /** Add a non persistent listener to the UnityEvent. * @param call Callback function.
             */
            public AddListener($call: UnityEngine.Events.UnityAction):void;
            /** Remove a non persistent listener from the UnityEvent. * @param call Callback function.
             */
            public RemoveListener($call: UnityEngine.Events.UnityAction):void;
            
            public Invoke():void;
            
        }
        /** Abstract base class for UnityEvents. */
        class UnityEventBase extends System.Object {
            
        }
        
        class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase {
            
            public constructor();
            
            public AddListener($call: UnityEngine.Events.UnityAction$1<T0>):void;
            
            public RemoveListener($call: UnityEngine.Events.UnityAction$1<T0>):void;
            
            public Invoke($arg0: T0):void;
            
        }
        
    }
    namespace System.Collections.ObjectModel {
        
        class ReadOnlyCollection$1<T> extends System.Object {
            
        }
        
    }
    namespace System.Collections.Generic.List$1 {
        
        class Enumerator<T> extends System.ValueType {
            
        }
        
    }
    namespace System.Collections.Generic.Dictionary$2 {
        
        class KeyCollection<TKey,TValue> extends System.Object {
            
        }
        
        class ValueCollection<TKey,TValue> extends System.Object {
            
        }
        
        class Enumerator<TKey,TValue> extends System.ValueType {
            
        }
        
    }
    namespace System.Collections {
        
        interface IEnumerator {
            
        }
        
        interface IComparer {
            
        }
        
    }
    namespace UnityEngine.Audio {
        /** Object representing a group in the mixer. */
        class AudioMixerGroup extends UnityEngine.Object {
            
        }
        
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType {
            
        }
        /** Scene management at run-time. */
        class SceneManager extends System.Object {
            /** The total number of currently loaded Scenes. */
            public static get sceneCount(): number;
            /** Number of Scenes in Build Settings. */
            public static get sceneCountInBuildSettings(): number;
            
            public constructor();
            
            public static GetActiveScene():UnityEngine.SceneManagement.Scene;
            /** Set the Scene to be active.
             * @param scene The Scene to be set.
             * @returns Returns false if the Scene is not loaded yet. 
             */
            public static SetActiveScene($scene: UnityEngine.SceneManagement.Scene):boolean;
            /** Searches all Scenes loaded for a Scene that has the given asset path.
             * @param scenePath Path of the Scene. Should be relative to the project folder. Like: "AssetsMyScenesMyScene.unity".
             * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
             */
            public static GetSceneByPath($scenePath: string):UnityEngine.SceneManagement.Scene;
            /** Searches through the Scenes loaded for a Scene with the given name.
             * @param name Name of Scene to find.
             * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
             */
            public static GetSceneByName($name: string):UnityEngine.SceneManagement.Scene;
            /** Get a Scene struct from a build index.
             * @param buildIndex Build index as shown in the Build Settings window.
             * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
             */
            public static GetSceneByBuildIndex($buildIndex: number):UnityEngine.SceneManagement.Scene;
            /** Get the Scene at index in the SceneManager's list of loaded Scenes.
             * @param index Index of the Scene to get. Index must be greater than or equal to 0 and less than SceneManager.sceneCount.
             * @returns A reference to the Scene at the index specified. 
             */
            public static GetSceneAt($index: number):UnityEngine.SceneManagement.Scene;
            /** Create an empty new Scene at runtime with the given name.
             * @param sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
             * @param parameters Various parameters used to create the Scene.
             * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
             */
            public static CreateScene($sceneName: string, $parameters: UnityEngine.SceneManagement.CreateSceneParameters):UnityEngine.SceneManagement.Scene;
            /** This will merge the source Scene into the destinationScene. * @param sourceScene The Scene that will be merged into the destination Scene.
             * @param destinationScene Existing Scene to merge the source Scene into.
             */
            public static MergeScenes($sourceScene: UnityEngine.SceneManagement.Scene, $destinationScene: UnityEngine.SceneManagement.Scene):void;
            /** Move a GameObject from its current Scene to a new Scene. * @param go GameObject to move.
             * @param scene Scene to move into.
             */
            public static MoveGameObjectToScene($go: UnityEngine.GameObject, $scene: UnityEngine.SceneManagement.Scene):void;
            
            public static add_sceneLoaded($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>):void;
            
            public static remove_sceneLoaded($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>):void;
            
            public static add_sceneUnloaded($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>):void;
            
            public static remove_sceneUnloaded($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>):void;
            
            public static add_activeSceneChanged($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>):void;
            
            public static remove_activeSceneChanged($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>):void;
            /** Create an empty new Scene at runtime with the given name.
             * @param sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
             * @param parameters Various parameters used to create the Scene.
             * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
             */
            public static CreateScene($sceneName: string):UnityEngine.SceneManagement.Scene;
            /** Loads the Scene by its name or index in Build Settings. * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
             */
            public static LoadScene($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode):void;
            
            public static LoadScene($sceneName: string):void;
            /** Loads the Scene by its name or index in Build Settings.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param parameters Various parameters used to load the Scene.
             * @returns A handle to the Scene being loaded. 
             */
            public static LoadScene($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.SceneManagement.Scene;
            /** Loads the Scene by its name or index in Build Settings. * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
             */
            public static LoadScene($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode):void;
            
            public static LoadScene($sceneBuildIndex: number):void;
            /** Loads the Scene by its name or index in Build Settings.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param parameters Various parameters used to load the Scene.
             * @returns A handle to the Scene being loaded. 
             */
            public static LoadScene($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.SceneManagement.Scene;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode):UnityEngine.AsyncOperation;
            
            public static LoadSceneAsync($sceneBuildIndex: number):UnityEngine.AsyncOperation;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.AsyncOperation;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode):UnityEngine.AsyncOperation;
            
            public static LoadSceneAsync($sceneName: string):UnityEngine.AsyncOperation;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneBuildIndex: number):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneName: string):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($scene: UnityEngine.SceneManagement.Scene):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneBuildIndex: number, $options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneName: string, $options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($scene: UnityEngine.SceneManagement.Scene, $options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            
        }
        /** This struct collects all the CreateScene parameters in to a single place. */
        class CreateSceneParameters extends System.ValueType {
            
        }
        /** Used when loading a Scene in a player. */
        enum LoadSceneMode { Single = 0, Additive = 1 }
        /** This struct collects all the LoadScene parameters in to a single place. */
        class LoadSceneParameters extends System.ValueType {
            
        }
        /** Scene unloading options passed to SceneManager.UnloadScene. */
        enum UnloadSceneOptions { None = 0, UnloadAllEmbeddedSceneObjects = 1 }
        
    }
    namespace System.Runtime.InteropServices {
        
        class StructLayoutAttribute extends System.Attribute {
            
        }
        
    }
    namespace System.Globalization {
        
        class CultureInfo extends System.Object {
            
        }
        
    }
    namespace UnityEngine.ParticleSystem {
        
        class Particle extends System.ValueType {
            
        }
        
        class PlaybackState extends System.ValueType {
            
        }
        
        class Trails extends System.ValueType {
            
        }
        
        class EmitParams extends System.ValueType {
            
        }
        
        class MainModule extends System.ValueType {
            
        }
        
        class EmissionModule extends System.ValueType {
            
        }
        
        class ShapeModule extends System.ValueType {
            
        }
        
        class VelocityOverLifetimeModule extends System.ValueType {
            
        }
        
        class LimitVelocityOverLifetimeModule extends System.ValueType {
            
        }
        
        class InheritVelocityModule extends System.ValueType {
            
        }
        
        class LifetimeByEmitterSpeedModule extends System.ValueType {
            
        }
        
        class ForceOverLifetimeModule extends System.ValueType {
            
        }
        
        class ColorOverLifetimeModule extends System.ValueType {
            
        }
        
        class ColorBySpeedModule extends System.ValueType {
            
        }
        
        class SizeOverLifetimeModule extends System.ValueType {
            
        }
        
        class SizeBySpeedModule extends System.ValueType {
            
        }
        
        class RotationOverLifetimeModule extends System.ValueType {
            
        }
        
        class RotationBySpeedModule extends System.ValueType {
            
        }
        
        class ExternalForcesModule extends System.ValueType {
            
        }
        
        class NoiseModule extends System.ValueType {
            
        }
        
        class CollisionModule extends System.ValueType {
            
        }
        
        class TriggerModule extends System.ValueType {
            
        }
        
        class SubEmittersModule extends System.ValueType {
            
        }
        
        class TextureSheetAnimationModule extends System.ValueType {
            
        }
        
        class LightsModule extends System.ValueType {
            
        }
        
        class TrailModule extends System.ValueType {
            
        }
        
        class CustomDataModule extends System.ValueType {
            
        }
        
    }
    namespace Unity.Collections {
        
        class NativeArray$1<T> extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.Canvas {
        
        type WillRenderCanvases = () => void;
        var WillRenderCanvases: {new (func: () => void): WillRenderCanvases;}
        
    }
    namespace UnityEngine.Playables {
        /** Instantiates a PlayableAsset and controls playback of Playable objects. */
        class PlayableDirector extends UnityEngine.Behaviour {
            /** The current playing state of the component. (Read Only) */
            public get state(): UnityEngine.Playables.PlayState;
            /** Controls how the time is incremented when it goes beyond the duration of the playable. */
            public get extrapolationMode(): UnityEngine.Playables.DirectorWrapMode;
            public set extrapolationMode(value: UnityEngine.Playables.DirectorWrapMode);
            /** The PlayableAsset that is used to instantiate a playable for playback. */
            public get playableAsset(): UnityEngine.Playables.PlayableAsset;
            public set playableAsset(value: UnityEngine.Playables.PlayableAsset);
            /** The PlayableGraph created by the PlayableDirector. */
            public get playableGraph(): UnityEngine.Playables.PlayableGraph;
            /** Whether the playable asset will start playing back as soon as the component awakes. */
            public get playOnAwake(): boolean;
            public set playOnAwake(value: boolean);
            /** Controls how time is incremented when playing back. */
            public get timeUpdateMode(): UnityEngine.Playables.DirectorUpdateMode;
            public set timeUpdateMode(value: UnityEngine.Playables.DirectorUpdateMode);
            /** The component's current time. This value is incremented according to the PlayableDirector.timeUpdateMode when it is playing. You can also change this value manually. */
            public get time(): number;
            public set time(value: number);
            /** The time at which the Playable should start when first played. */
            public get initialTime(): number;
            public set initialTime(value: number);
            /** The duration of the Playable in seconds. */
            public get duration(): number;
            
            public constructor();
            
            public DeferredEvaluate():void;
            /** Instatiates a Playable using the provided PlayableAsset and starts playback. * @param asset An asset to instantiate a playable from.
             * @param mode What to do when the time passes the duration of the playable.
             */
            public Play($asset: UnityEngine.Playables.PlayableAsset):void;
            /** Instatiates a Playable using the provided PlayableAsset and starts playback. * @param asset An asset to instantiate a playable from.
             * @param mode What to do when the time passes the duration of the playable.
             */
            public Play($asset: UnityEngine.Playables.PlayableAsset, $mode: UnityEngine.Playables.DirectorWrapMode):void;
            /** Sets the binding of a reference object from a PlayableBinding. * @param key The source object in the PlayableBinding.
             * @param value The object to bind to the key.
             */
            public SetGenericBinding($key: UnityEngine.Object, $value: UnityEngine.Object):void;
            
            public Evaluate():void;
            
            public Play():void;
            
            public Stop():void;
            
            public Pause():void;
            
            public Resume():void;
            
            public RebuildGraph():void;
            /** Clears an exposed reference value. * @param id Identifier of the ExposedReference.
             */
            public ClearReferenceValue($id: UnityEngine.PropertyName):void;
            /** Sets an ExposedReference value. * @param id Identifier of the ExposedReference.
             * @param value The object to bind to set the reference value to.
             */
            public SetReferenceValue($id: UnityEngine.PropertyName, $value: UnityEngine.Object):void;
            /** Retreives an ExposedReference binding. * @param id Identifier of the ExposedReference.
             * @param idValid Whether the reference was found.
             */
            public GetReferenceValue($id: UnityEngine.PropertyName, $idValid: $Ref<boolean>):UnityEngine.Object;
            /** Returns a binding to a reference object. * @param key The object that acts as a key.
             */
            public GetGenericBinding($key: UnityEngine.Object):UnityEngine.Object;
            /** Clears the binding of a reference object. * @param key The source object in the PlayableBinding.
             */
            public ClearGenericBinding($key: UnityEngine.Object):void;
            
            public RebindPlayableGraphOutputs():void;
            
            public add_played($value: System.Action$1<UnityEngine.Playables.PlayableDirector>):void;
            
            public remove_played($value: System.Action$1<UnityEngine.Playables.PlayableDirector>):void;
            
            public add_paused($value: System.Action$1<UnityEngine.Playables.PlayableDirector>):void;
            
            public remove_paused($value: System.Action$1<UnityEngine.Playables.PlayableDirector>):void;
            
            public add_stopped($value: System.Action$1<UnityEngine.Playables.PlayableDirector>):void;
            
            public remove_stopped($value: System.Action$1<UnityEngine.Playables.PlayableDirector>):void;
            
        }
        /** Status of a Playable. */
        enum PlayState { Paused = 0, Playing = 1, Delayed = 2 }
        /** Wrap mode for Playables. */
        enum DirectorWrapMode { Hold = 0, Loop = 1, None = 2 }
        /** A base class for assets that can be used to instantiate a Playable at runtime. */
        class PlayableAsset extends UnityEngine.ScriptableObject {
            
        }
        /** Use the PlayableGraph to manage Playable creations and destructions. */
        class PlayableGraph extends System.ValueType {
            
        }
        /** Defines what time source is used to update a Director graph. */
        enum DirectorUpdateMode { DSPClock = 0, GameTime = 1, UnscaledGameTime = 2, Manual = 3 }
        
    }
    namespace Black_Rabbit {
        
        class SimpleOutline extends UnityEngine.MonoBehaviour {
            
            public get OutlineMode(): Black_Rabbit.SimpleOutline.Mode;
            public set OutlineMode(value: Black_Rabbit.SimpleOutline.Mode);
            
            public get OutlineColor(): UnityEngine.Color;
            public set OutlineColor(value: UnityEngine.Color);
            
            public get OutlineWidth(): number;
            public set OutlineWidth(value: number);
            
            public constructor();
            
            public static GetOutLineObj($name: string):Black_Rabbit.SimpleOutline;
            
            public ShowOutLine():void;
            
            public HideOutLine():void;
            
        }
        
    }
    namespace Black_Rabbit.SimpleOutline {
        
        enum Mode { OutlineAll = 0, OutlineVisible = 1, OutlineHidden = 2, OutlineAndSilhouette = 3, SilhouetteOnly = 4 }
        
    }
    namespace UnityEngine.UI {
        
        class Button extends UnityEngine.UI.Selectable {
            
            public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
            public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
            
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        
        class Selectable extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
        class Text extends UnityEngine.UI.MaskableGraphic {
            
            public get cachedTextGenerator(): UnityEngine.TextGenerator;
            
            public get cachedTextGeneratorForLayout(): UnityEngine.TextGenerator;
            
            public get mainTexture(): UnityEngine.Texture;
            
            public get font(): UnityEngine.Font;
            public set font(value: UnityEngine.Font);
            
            public get text(): string;
            public set text(value: string);
            
            public get supportRichText(): boolean;
            public set supportRichText(value: boolean);
            
            public get resizeTextForBestFit(): boolean;
            public set resizeTextForBestFit(value: boolean);
            
            public get resizeTextMinSize(): number;
            public set resizeTextMinSize(value: number);
            
            public get resizeTextMaxSize(): number;
            public set resizeTextMaxSize(value: number);
            
            public get alignment(): UnityEngine.TextAnchor;
            public set alignment(value: UnityEngine.TextAnchor);
            
            public get alignByGeometry(): boolean;
            public set alignByGeometry(value: boolean);
            
            public get fontSize(): number;
            public set fontSize(value: number);
            
            public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
            public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
            
            public get verticalOverflow(): UnityEngine.VerticalWrapMode;
            public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
            
            public get lineSpacing(): number;
            public set lineSpacing(value: number);
            
            public get fontStyle(): UnityEngine.FontStyle;
            public set fontStyle(value: UnityEngine.FontStyle);
            
            public get pixelsPerUnit(): number;
            
            public get minWidth(): number;
            
            public get preferredWidth(): number;
            
            public get flexibleWidth(): number;
            
            public get minHeight(): number;
            
            public get preferredHeight(): number;
            
            public get flexibleHeight(): number;
            
            public get layoutPriority(): number;
            
            public FontTextureChanged():void;
            
            public GetGenerationSettings($extents: UnityEngine.Vector2):UnityEngine.TextGenerationSettings;
            
            public static GetTextAnchorPivot($anchor: UnityEngine.TextAnchor):UnityEngine.Vector2;
            
            public CalculateLayoutInputHorizontal():void;
            
            public CalculateLayoutInputVertical():void;
            
        }
        
        class MaskableGraphic extends UnityEngine.UI.Graphic {
            
        }
        
        class Graphic extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
        class InputField extends UnityEngine.UI.Selectable {
            
            public get shouldHideMobileInput(): boolean;
            public set shouldHideMobileInput(value: boolean);
            
            public get shouldActivateOnSelect(): boolean;
            public set shouldActivateOnSelect(value: boolean);
            
            public get text(): string;
            public set text(value: string);
            
            public get isFocused(): boolean;
            
            public get caretBlinkRate(): number;
            public set caretBlinkRate(value: number);
            
            public get caretWidth(): number;
            public set caretWidth(value: number);
            
            public get textComponent(): UnityEngine.UI.Text;
            public set textComponent(value: UnityEngine.UI.Text);
            
            public get placeholder(): UnityEngine.UI.Graphic;
            public set placeholder(value: UnityEngine.UI.Graphic);
            
            public get caretColor(): UnityEngine.Color;
            public set caretColor(value: UnityEngine.Color);
            
            public get customCaretColor(): boolean;
            public set customCaretColor(value: boolean);
            
            public get selectionColor(): UnityEngine.Color;
            public set selectionColor(value: UnityEngine.Color);
            
            public get onEndEdit(): UnityEngine.UI.InputField.SubmitEvent;
            public set onEndEdit(value: UnityEngine.UI.InputField.SubmitEvent);
            
            public get onValueChanged(): UnityEngine.UI.InputField.OnChangeEvent;
            public set onValueChanged(value: UnityEngine.UI.InputField.OnChangeEvent);
            
            public get onValidateInput(): UnityEngine.UI.InputField.OnValidateInput;
            public set onValidateInput(value: UnityEngine.UI.InputField.OnValidateInput);
            
            public get characterLimit(): number;
            public set characterLimit(value: number);
            
            public get contentType(): UnityEngine.UI.InputField.ContentType;
            public set contentType(value: UnityEngine.UI.InputField.ContentType);
            
            public get lineType(): UnityEngine.UI.InputField.LineType;
            public set lineType(value: UnityEngine.UI.InputField.LineType);
            
            public get inputType(): UnityEngine.UI.InputField.InputType;
            public set inputType(value: UnityEngine.UI.InputField.InputType);
            
            public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
            
            public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
            public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
            
            public get characterValidation(): UnityEngine.UI.InputField.CharacterValidation;
            public set characterValidation(value: UnityEngine.UI.InputField.CharacterValidation);
            
            public get readOnly(): boolean;
            public set readOnly(value: boolean);
            
            public get multiLine(): boolean;
            
            public get asteriskChar(): number;
            public set asteriskChar(value: number);
            
            public get wasCanceled(): boolean;
            
            public get caretPosition(): number;
            public set caretPosition(value: number);
            
            public get selectionAnchorPosition(): number;
            public set selectionAnchorPosition(value: number);
            
            public get selectionFocusPosition(): number;
            public set selectionFocusPosition(value: number);
            
            public get minWidth(): number;
            
            public get preferredWidth(): number;
            
            public get flexibleWidth(): number;
            
            public get minHeight(): number;
            
            public get preferredHeight(): number;
            
            public get flexibleHeight(): number;
            
            public get layoutPriority(): number;
            
            public SetTextWithoutNotify($input: string):void;
            
            public MoveTextEnd($shift: boolean):void;
            
            public MoveTextStart($shift: boolean):void;
            
            public OnBeginDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnEndDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnPointerDown($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public ProcessEvent($e: UnityEngine.Event):void;
            
            public OnUpdateSelected($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public ForceLabelUpdate():void;
            
            public Rebuild($update: UnityEngine.UI.CanvasUpdate):void;
            
            public LayoutComplete():void;
            
            public GraphicUpdateComplete():void;
            
            public ActivateInputField():void;
            
            public OnSelect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public DeactivateInputField():void;
            
            public OnDeselect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public CalculateLayoutInputHorizontal():void;
            
            public CalculateLayoutInputVertical():void;
            
        }
        
        enum CanvasUpdate { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        
        class Image extends UnityEngine.UI.MaskableGraphic {
            
        }
        
        class Slider extends UnityEngine.UI.Selectable {
            
        }
        
    }
    namespace UnityEngine.EventSystems {
        
        class UIBehaviour extends UnityEngine.MonoBehaviour {
            
        }
        
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData {
            
        }
        
        class AbstractEventData extends System.Object {
            
        }
        
    }
    namespace UnityEngine.UI.Button {
        
        class ButtonClickedEvent extends UnityEngine.Events.UnityEvent {
            
        }
        
    }
    namespace UnityEngine.UI.InputField {
        
        class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        
        class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        
        type OnValidateInput = (text: string, charIndex: number, addedChar: number) => number;
        var OnValidateInput: {new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput;}
        
        enum ContentType { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
        
        enum LineType { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
        
        enum InputType { Standard = 0, AutoCorrect = 1, Password = 2 }
        
        enum CharacterValidation { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
        
    }
    namespace UnityEngine.AudioClip {
        
        type PCMReaderCallback = (data: System.Array$1<number>) => void;
        var PCMReaderCallback: {new (func: (data: System.Array$1<number>) => void): PCMReaderCallback;}
        
        type PCMSetPositionCallback = (position: number) => void;
        var PCMSetPositionCallback: {new (func: (position: number) => void): PCMSetPositionCallback;}
        
    }
    namespace AssetHelper {
        
        enum LoadType { Assets = 0, Bundles = 1 }
        
    }
    namespace Fungus {
        
        class SayDialog extends UnityEngine.MonoBehaviour {
            
            public get NameText(): string;
            public set NameText(value: string);
            
            public get StoryText(): string;
            public set StoryText(value: string);
            
            public get StoryTextRectTrans(): UnityEngine.RectTransform;
            
            public get CharacterImage(): UnityEngine.UI.Image;
            
            public get SpeakingCharacter(): Fungus.Character;
            
            public static get ActiveSayDialog(): Fungus.SayDialog;
            public static set ActiveSayDialog(value: Fungus.SayDialog);
            
            public get FadeWhenDone(): boolean;
            public set FadeWhenDone(value: boolean);
            
            public constructor();
            
            public static GetSayDialog():Fungus.SayDialog;
            
            public static GetSayDialog($name: string):Fungus.SayDialog;
            
            public static StopPortraitTweens():void;
            
            public SetActive($state: boolean):void;
            
            public SetCharacter($character: Fungus.Character):void;
            
            public SetCharacterImage($image: UnityEngine.Sprite):void;
            
            public SetCharacterName($name: string, $color: UnityEngine.Color):void;
            
            public Say($text: string, $clearPrevious: boolean, $waitForInput: boolean, $fadeWhenDone: boolean, $stopVoiceover: boolean, $waitForVO: boolean, $voiceOverClip: UnityEngine.AudioClip, $onComplete: System.Action):void;
            
            public DoSay($text: string, $clearPrevious: boolean, $waitForInput: boolean, $fadeWhenDone: boolean, $stopVoiceover: boolean, $waitForVO: boolean, $voiceOverClip: UnityEngine.AudioClip, $onComplete: System.Action):System.Collections.IEnumerator;
            
            public Stop():void;
            
            public Clear():void;
            
        }
        
        class Character extends UnityEngine.MonoBehaviour {
            
            public static get ActiveCharacters(): System.Collections.Generic.List$1<Fungus.Character>;
            
            public get NameText(): string;
            
            public get NameColor(): UnityEngine.Color;
            
            public get SoundEffect(): UnityEngine.AudioClip;
            
            public get Portraits(): System.Collections.Generic.List$1<UnityEngine.Sprite>;
            
            public get PortraitsFace(): Fungus.FacingDirection;
            
            public get ProfileSprite(): UnityEngine.Sprite;
            public set ProfileSprite(value: UnityEngine.Sprite);
            
            public get State(): Fungus.PortraitState;
            
            public get SetSayDialog(): Fungus.SayDialog;
            
            public constructor();
            
            public GetObjectName():string;
            
            public NameStartsWith($matchString: string):boolean;
            
            public NameMatch($matchString: string):boolean;
            
            public Compare($x: Fungus.Character, $y: Fungus.Character):number;
            
            public GetPortrait($portraitString: string):UnityEngine.Sprite;
            
            public GetStandardText():string;
            
            public SetStandardText($standardText: string):void;
            
            public GetDescription():string;
            
            public GetStringId():string;
            
        }
        
        enum FacingDirection { None = 0, Left = 1, Right = 2 }
        
        class PortraitState extends System.Object {
            
        }
        
        class MenuDialog extends UnityEngine.MonoBehaviour {
            
            public static get ActiveMenuDialog(): Fungus.MenuDialog;
            public static set ActiveMenuDialog(value: Fungus.MenuDialog);
            
            public get CachedButtons(): System.Array$1<UnityEngine.UI.Button>;
            
            public get CachedSlider(): UnityEngine.UI.Slider;
            
            public get DisplayedOptionsCount(): number;
            
            public constructor();
            
            public SetActive($state: boolean):void;
            
            public static GetMenuDialog():Fungus.MenuDialog;
            
            public static GetMenuDialog($_name: string):Fungus.MenuDialog;
            
            public Clear():void;
            
            public HideSayDialog():void;
            
            public AddOption($text: string, $interactable: boolean, $hideOption: boolean, $targetBlock: Fungus.Block):boolean;
            
            public AddOptionTs($text: string, $interactable: boolean, $hideOption: boolean, $action: System.Action):boolean;
            
            public ShowTimer($duration: number, $targetBlock: Fungus.Block):void;
            
            public IsActive():boolean;
            
            public Shuffle($r: System.Random):void;
            
        }
        
        class Block extends Fungus.Node {
            
        }
        
        class Node extends UnityEngine.MonoBehaviour {
            
        }
        
        class Stage extends Fungus.PortraitController {
            
            public static get ActiveStages(): System.Collections.Generic.List$1<Fungus.Stage>;
            
            public get PortraitCanvas(): UnityEngine.Canvas;
            
            public get DimPortraits(): boolean;
            public set DimPortraits(value: boolean);
            
            public get DimColor(): UnityEngine.Color;
            public set DimColor(value: UnityEngine.Color);
            
            public get FadeDuration(): number;
            public set FadeDuration(value: number);
            
            public get MoveDuration(): number;
            public set MoveDuration(value: number);
            
            public get FadeEaseType(): LeanTweenType;
            
            public get ShiftOffset(): UnityEngine.Vector2;
            
            public get DefaultPosition(): UnityEngine.UI.Image;
            
            public get Positions(): System.Collections.Generic.List$1<UnityEngine.RectTransform>;
            
            public get CharactersOnStage(): System.Collections.Generic.List$1<Fungus.Character>;
            
            public constructor();
            
            public static GetActiveStage():Fungus.Stage;
            
            public GetPosition($positionString: string):UnityEngine.RectTransform;
            
        }
        
        class PortraitController extends UnityEngine.MonoBehaviour {
            
            public constructor();
            
            public static SetRectTransform($target: UnityEngine.RectTransform, $from: UnityEngine.RectTransform):void;
            
            public RunPortraitCommand($options: Fungus.PortraitOptions, $onComplete: System.Action):void;
            
            public MoveToFront($options: Fungus.PortraitOptions):void;
            
            public Show($options: Fungus.PortraitOptions):void;
            
            public Hide($options: Fungus.PortraitOptions):void;
            
            public SetDimmed($character: Fungus.Character, $dimmedState: boolean):void;
            
            public Show($character: Fungus.Character, $position: string):void;
            
            public Show($character: Fungus.Character, $portrait: string, $fromPosition: string, $toPosition: string):void;
            
            public ShowPortrait($character: Fungus.Character, $portrait: string):void;
            
            public Hide($character: Fungus.Character):void;
            
            public Hide($character: Fungus.Character, $toPosition: string):void;
            
            public MoveToFront($character: Fungus.Character):void;
            
        }
        
        class PortraitOptions extends System.Object {
            
            public character: Fungus.Character;
            
            public replacedCharacter: Fungus.Character;
            
            public portrait: UnityEngine.Sprite;
            
            public display: Fungus.DisplayType;
            
            public offset: Fungus.PositionOffset;
            
            public fromPosition: UnityEngine.RectTransform;
            
            public toPosition: UnityEngine.RectTransform;
            
            public facing: Fungus.FacingDirection;
            
            public useDefaultSettings: boolean;
            
            public fadeDuration: number;
            
            public moveDuration: number;
            
            public shiftOffset: UnityEngine.Vector2;
            
            public move: boolean;
            
            public shiftIntoPlace: boolean;
            
            public waitUntilFinished: boolean;
            
            public onComplete: System.Action;
            
            public constructor($useDefaultSettings?: boolean);
            
            public constructor();
            
        }
        
        enum DisplayType { None = 0, Show = 1, Hide = 2, Replace = 3, MoveToFront = 4 }
        
        enum PositionOffset { None = 0, OffsetLeft = 1, OffsetRight = 2 }
        
        class Flowchart extends UnityEngine.MonoBehaviour {
            
            public static SubstituteVariableRegexString: string;
            
            public static get CachedFlowcharts(): System.Collections.Generic.List$1<Fungus.Flowchart>;
            
            public get ScrollPos(): UnityEngine.Vector2;
            public set ScrollPos(value: UnityEngine.Vector2);
            
            public get VariablesScrollPos(): UnityEngine.Vector2;
            public set VariablesScrollPos(value: UnityEngine.Vector2);
            
            public get VariablesExpanded(): boolean;
            public set VariablesExpanded(value: boolean);
            
            public get BlockViewHeight(): number;
            public set BlockViewHeight(value: number);
            
            public get Zoom(): number;
            public set Zoom(value: number);
            
            public get ScrollViewRect(): UnityEngine.Rect;
            public set ScrollViewRect(value: UnityEngine.Rect);
            
            public get SelectedBlock(): Fungus.Block;
            public set SelectedBlock(value: Fungus.Block);
            
            public get SelectedBlocks(): System.Collections.Generic.List$1<Fungus.Block>;
            public set SelectedBlocks(value: System.Collections.Generic.List$1<Fungus.Block>);
            
            public get SelectedCommands(): System.Collections.Generic.List$1<Fungus.Command>;
            
            public get Variables(): System.Collections.Generic.List$1<Fungus.Variable>;
            
            public get VariableCount(): number;
            
            public get Description(): string;
            
            public get StepPause(): number;
            
            public get ColorCommands(): boolean;
            
            public get SaveSelection(): boolean;
            
            public get LocalizationId(): string;
            
            public get ShowLineNumbers(): boolean;
            
            public get LuaBindingName(): string;
            
            public get CenterPosition(): UnityEngine.Vector2;
            public set CenterPosition(value: UnityEngine.Vector2);
            
            public set Version(value: number);
            
            public constructor();
            
            public static BroadcastFungusMessage($messageName: string):void;
            
            public IsActive():boolean;
            
            public GetName():string;
            
            public NextItemId():number;
            
            public CreateBlock($position: UnityEngine.Vector2):Fungus.Block;
            
            public FindBlock($blockName: string):Fungus.Block;
            
            public HasBlock($blockName: string):boolean;
            
            public ExecuteIfHasBlock($blockName: string):boolean;
            
            public ExecuteBlock($blockName: string):void;
            
            public StopBlock($blockName: string):void;
            
            public ExecuteBlock($block: Fungus.Block, $commandIndex?: number, $onComplete?: System.Action):boolean;
            
            public StopAllBlocks():void;
            
            public SendFungusMessage($messageName: string):void;
            
            public GetUniqueVariableKey($originalKey: string, $ignoreVariable?: Fungus.Variable):string;
            
            public GetUniqueBlockKey($originalKey: string, $ignoreBlock?: Fungus.Block):string;
            
            public GetUniqueLabelKey($originalKey: string, $ignoreLabel: Fungus.Label):string;
            
            public GetVariable($key: string):Fungus.Variable;
            
            public SetVariable($key: string, $newvariable: Fungus.Variable):void;
            
            public HasVariable($key: string):boolean;
            
            public GetVariableNames():System.Array$1<string>;
            
            public GetPublicVariables():System.Collections.Generic.List$1<Fungus.Variable>;
            
            public GetBooleanVariable($key: string):boolean;
            
            public SetBooleanVariable($key: string, $value: boolean):void;
            
            public GetIntegerVariable($key: string):number;
            
            public SetIntegerVariable($key: string, $value: number):void;
            
            public GetFloatVariable($key: string):number;
            
            public SetFloatVariable($key: string, $value: number):void;
            
            public GetStringVariable($key: string):string;
            
            public SetStringVariable($key: string, $value: string):void;
            
            public GetGameObjectVariable($key: string):UnityEngine.GameObject;
            
            public SetGameObjectVariable($key: string, $value: UnityEngine.GameObject):void;
            
            public GetTransformVariable($key: string):UnityEngine.Transform;
            
            public SetTransformVariable($key: string, $value: UnityEngine.Transform):void;
            
            public UpdateHideFlags():void;
            
            public ClearSelectedCommands():void;
            
            public AddSelectedCommand($command: Fungus.Command):void;
            
            public ClearSelectedBlocks():void;
            
            public AddSelectedBlock($block: Fungus.Block):void;
            
            public DeselectBlock($block: Fungus.Block):boolean;
            
            public DeselectBlockNoCheck($b: Fungus.Block):void;
            
            public UpdateSelectedCache():void;
            
            public ReverseUpdateSelectedCache():void;
            
            public Reset($resetCommands: boolean, $resetVariables: boolean):void;
            
            public IsCommandSupported($commandInfo: Fungus.CommandInfoAttribute):boolean;
            
            public HasExecutingBlocks():boolean;
            
            public GetExecutingBlocks():System.Collections.Generic.List$1<Fungus.Block>;
            
            public SubstituteVariables($input: string):string;
            
            public DetermineSubstituteVariables($str: string, $vars: System.Collections.Generic.List$1<Fungus.Variable>):void;
            
            public SubstituteStrings($input: System.Text.StringBuilder):boolean;
            
        }
        
        class Command extends UnityEngine.MonoBehaviour {
            
        }
        
        class Variable extends UnityEngine.MonoBehaviour {
            
        }
        
        class Label extends Fungus.Command {
            
        }
        
        class CommandInfoAttribute extends System.Attribute {
            
        }
        
    }
    
}