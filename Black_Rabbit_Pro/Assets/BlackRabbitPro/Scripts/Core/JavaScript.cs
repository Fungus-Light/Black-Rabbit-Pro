using System.IO;
using System;
using UnityEngine;

namespace tiny {

	public class JavaScriptLauncher : MonoBehaviour {
		public delegate void JavaScriptMain(JavaScriptLauncher instance);
		public bool WaitForDebugger = false;
		public int DebuggerPort = 5556;
		public string DebuggerRoot = System.IO.Path.Combine(Application.streamingAssetsPath, "scripts");
		public Puerts.JsEnv env;
		public Action<float> JS_update;
		public Action<float> JS_fixedUpdate;
		public Action<float> JS_lateUpdate;
		public Action JS_finalize;
		public JavaScriptLoader loader { get; private set; }

		public static JavaScriptLauncher inst { get; private set; }
		static JavaScriptLauncher() {}

		protected virtual void StartJavaScript() {
			DontDestroyOnLoad(gameObject);
			if (inst) {
				throw new Exception("无法启动 JavaScript 虚拟机");
			}
			inst = this;
			// 创建JS虚拟机
			loader = new JavaScriptLoader( DebuggerRoot );
			env = new Puerts.JsEnv(loader, DebuggerPort);
			this.RegisterClasses(env);
			if (WaitForDebugger) {
				env.WaitDebugger();
			}
			// 加载启动JS脚本, 执行脚本 main 函数
			var javascript_main = env.Eval<JavaScriptMain>("require('bootstrap.js');", loader.GetScriptDebugPath("anonymous.js"));
			javascript_main(this);
		}

		protected virtual void RegisterClasses(Puerts.JsEnv env) {
			env.UsingAction<int>();
			env.UsingAction<float>();
			env.UsingAction<string>();
			env.UsingAction<string, string>();
		}

		protected void FixedUpdate() {
			if (JS_fixedUpdate != null) JS_fixedUpdate(Time.fixedUnscaledDeltaTime);
		}

		protected void Update() {
			if (env != null) env.Tick();
			if (JS_update != null) JS_update(Time.unscaledDeltaTime);
		}

		protected void LateUpdate() {
			if (JS_lateUpdate != null) JS_lateUpdate(Time.unscaledDeltaTime);
		}

		protected void OnDestroy() {
			if (JS_finalize != null) JS_finalize();
			if (loader != null) {
				loader.Close();
			}
		}
	}
}