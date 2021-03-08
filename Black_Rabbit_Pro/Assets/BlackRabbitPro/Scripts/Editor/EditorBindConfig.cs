using System;
using System.Collections.Generic;
using Puerts;
using System.IO;
using UnityEditor;
using UnityEngine;

[Configure]
public class EditorBindConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(DirectoryInfo),
                typeof(File),
                typeof(AssetDatabase),
                typeof(PackConfig),
                typeof(ScriptableObject),
                typeof(FileInfo),
                typeof(FileSystemInfo),
                typeof(AssetImporter),
                typeof(StreamWriter),
                typeof(AssetBundleBuild),
                typeof(BuildPipeline),
                typeof(BuildAssetBundleOptions),
                typeof(EditorUserBuildSettings)

            };
        }
    }
}
