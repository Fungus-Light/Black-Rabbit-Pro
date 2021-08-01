using System.IO;
using UnityEngine;

public class FileHelper
{
    //public static string ReadTextFile(string path)
    //{
    //    string realpath = Application.dataPath + "/" + path;
    //    realpath.Replace("\\", "/");
    //    StreamReader reader = new StreamReader(realpath);
    //    if (reader == null)
    //    {
    //        return null;
    //    }
    //    else
    //    {
    //        string content = reader.ReadToEnd();
    //        return content;
    //    }
    //}

    public static string ReadStreamTextFile(string filepath)
    {
#if UNITY_ANDROID
        string text = File.ReadAllText(Path.Combine(Application.persistentDataPath, filepath).Replace("\\", "/"));
#else
        string text = File.ReadAllText(Path.Combine(Application.streamingAssetsPath, filepath).Replace("\\", "/"));
#endif

        return text;
    }
}
