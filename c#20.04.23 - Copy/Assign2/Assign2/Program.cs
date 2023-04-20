using System;
using System.IO;

namespace FileSystemExample
{
    class FileExample
    {
        public static void Main()
        {
            string s;

            Console.WriteLine("Content Before Replace:\n");
            Console.WriteLine("Content of File(fa.txt):");
            s = File.ReadAllText("fa.txt");
            Console.WriteLine(s);

            Console.WriteLine("Content of File(fb.txt):");
            s = File.ReadAllText("fb.txt");
            Console.WriteLine(s);

            File.Replace("fa.txt", "fb.txt", "fc.txt");

            Console.WriteLine("\n Content After Replace:\n");
            Console.WriteLine("Content of File(fb.txt):");
            s = File.ReadAllText("fb.txt");
            Console.WriteLine(s);

            Console.WriteLine("\n Content of File(fc.txt):");
            s = File.ReadAllText("fb.txt");
            Console.WriteLine(s);

        }
    }
}
