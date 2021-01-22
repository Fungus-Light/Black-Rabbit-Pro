
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
    
    namespace UnityEngine {
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
            /** Contains the path to a persistent data directory (Read Only). */
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
            
        }
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
            /** Returns a list of all active loaded objects of Type type.
             * @param type The type of object to find.
             * @param includeInactive If true, components attached to inactive GameObjects are also included.
             * @returns The array of objects found matching the type specified. 
             */
            public static FindObjectsOfType($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
             */
            public static DontDestroyOnLoad($target: UnityEngine.Object):void;
            /** Returns the first active loaded object of Type type.
             * @param type The type of object to find.
             * @returns This returns the  Object that matches the specified type. It returns null if no Object matches the type. 
             */
            public static FindObjectOfType($type: System.Type):UnityEngine.Object;
            
            public static op_Equality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public static op_Inequality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
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
        enum RuntimePlatform { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35 }
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
            /** Linearly interpolates between two points. */
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
            /** Returns a nicely formatted string for this vector. */
            public ToString($format: string):string;
            
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
            /** Returns a nicely formatted string for this vector. */
            public ToString($format: string):string;
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
        /** The interface to get time information from Unity. */
        class Time extends System.Object {
            /** The time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get time(): number;
            /** The time this frame has started (Read Only). This is the time in seconds since the last level has been loaded. */
            public static get timeSinceLevelLoad(): number;
            /** The completion time in seconds since the last frame (Read Only). */
            public static get deltaTime(): number;
            /** The time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTime(): number;
            /** The timeScale-independant time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTime(): number;
            /** The TimeScale-independant time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTime(): number;
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
            public static get unscaledDeltaTime(): number;
            /** The timeScale-independent interval in seconds from the last fixed frame to the current one (Read Only). */
            public static get fixedUnscaledDeltaTime(): number;
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum time a frame can take. Physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) will be performed only for this duration of time per frame. */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only). */
            public static get smoothDeltaTime(): number;
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes. This can be used for slow motion effects. */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames that have passed (Read Only). */
            public static get frameCount(): number;
            
            public static get renderedFrameCount(): number;
            /** The real time in seconds since the game started (Read Only). */
            public static get realtimeSinceStartup(): number;
            /** Slows game playback time to allow screenshots to be saved between frames. */
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
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply.
             * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
             */
            public Rotate($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            
            public Rotate($eulers: UnityEngine.Vector3):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space):void;
            
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
             * @param axis The axis to apply rotation to.
             * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space):void;
            
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
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of the component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. */
            public GetComponent($type: string):UnityEngine.Component;
            
            public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its children. * @param t The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless.
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
            /** Returns the component of Type type in the GameObject or any of its parents. * @param type Type of component to find.
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
            /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas]. */
            public get worldCamera(): UnityEngine.Camera;
            public set worldCamera(value: UnityEngine.Camera);
            /** The normalized grid size that the canvas will split the renderable area into. */
            public get normalizedSortingGridSize(): number;
            public set normalizedSortingGridSize(value: number);
            
            public constructor();
            
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
            /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor). */
            public get runInEditMode(): boolean;
            public set runInEditMode(value: boolean);
            
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
        /** Position, size, anchor and pivot information for a rectangle. */
        class RectTransform extends UnityEngine.Transform {
            
        }
        /** Represents a Sprite object for use in 2D gameplay. */
        class Sprite extends UnityEngine.Object {
            
        }
        
    }
    namespace System {
        
        class Object {
            
            public constructor();
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public GetHashCode():number;
            
            public GetType():System.Type;
            
            public ToString():string;
            
            public static ReferenceEquals($objA: any, $objB: any):boolean;
            
        }
        
        class Void extends System.ValueType {
            
        }
        
        class ValueType extends System.Object {
            
        }
        
        class Int32 extends System.ValueType {
            
        }
        
        class Boolean extends System.ValueType {
            
        }
        
        class Single extends System.ValueType {
            
        }
        
        class String extends System.Object {
            
        }
        
        class Enum extends System.ValueType {
            
        }
        
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
        
        type Action$1<T> = (obj: T) => void;
        
        type Func$1<TResult> = () => TResult;
        
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        
        class Exception extends System.Object {
            
        }
        
        type Converter$2<TInput,TOutput> = (input: TInput) => TOutput;
        
        type Predicate$1<T> = (obj: T) => boolean;
        
        type Comparison$1<T> = (x: T, y: T) => number;
        
        class UInt64 extends System.ValueType {
            
        }
        
        class Double extends System.ValueType {
            
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
        
        class Array extends System.Object {
            
        }
        
        class Char extends System.ValueType {
            
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
        
        class UInt32 extends System.ValueType {
            
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
        
    }
    namespace System.Collections.Generic {
        
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
        
        interface IEnumerable$1<T> {
            
        }
        
        interface IComparer$1<T> {
            
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
        
        interface IEqualityComparer$1<T> {
            
        }
        
        interface IDictionary$2<TKey,TValue> {
            
        }
        
        class KeyValuePair$2<TKey,TValue> extends System.ValueType {
            
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
    namespace System.Runtime.Serialization {
        
        class SerializationInfo extends System.Object {
            
        }
        
        class StreamingContext extends System.ValueType {
            
        }
        
    }
    namespace System.Collections {
        
        interface IEnumerator {
            
        }
        
    }
    namespace UnityEngine.Audio {
        /** Object representing a group in the mixer. */
        class AudioMixerGroup extends UnityEngine.Object {
            
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
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType {
            
        }
        
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
    namespace System.IO {
        
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
    
        
        class JsBehaviour extends UnityEngine.MonoBehaviour {
            
            public ModuleName: string;
            
            public JsStart: System.Action;
            
            public JsUpdate: System.Action;
            
            public JsOnDestroy: System.Action;
            
            public constructor();
            
        }
        
        class LevelRunner extends UnityEngine.MonoBehaviour {
            
            public PackName: string;
            
            public LevelModName: string;
            
            public LevelLoaderName: string;
            
            public JsStart: System.Action;
            
            public JsUpdate: System.Action;
            
            public JsOnDestroy: System.Action;
            
            public constructor();
            
        }
        
        class FileHelper extends System.Object {
            
            public constructor();
            
            public static ReadTextFile($path: string):string;
            
        }
        
        class GameObjectHelper extends System.Object {
            
            public constructor();
            
            public static GetTransformByName($name: string):UnityEngine.Transform;
            
        }
        
        class CommonJsCall extends UnityEngine.MonoBehaviour {
            
            public DDOL: boolean;
            
            public static Instance: CommonJsCall;
            
            public constructor();
            
            public static QuitGame():void;
            
            public static WaitForFrames($count: number, $CallBack: System.Action):void;
            
            public static WaitForSecondsRealtime($count: number, $CallBack: System.Action):void;
            
            public static WaitForSeconds($count: number, $CallBack: System.Action):void;
            
            public static DoAction($action: System.Action, $callBack: System.Action):void;
            
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
        
    }
    namespace UnityEngine.UI {
        
        class Image extends UnityEngine.UI.MaskableGraphic {
            
        }
        
        class MaskableGraphic extends UnityEngine.UI.Graphic {
            
        }
        
        class Graphic extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
    }
    namespace UnityEngine.EventSystems {
        
        class UIBehaviour extends UnityEngine.MonoBehaviour {
            
        }
        
    }
    
}