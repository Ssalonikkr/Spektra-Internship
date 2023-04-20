using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign1
{
    internal class Program
    {
        static void Main(string[] args)
        {

            string d = @"E:\Spektra-Internship\c#20.04.23";
            Directory.CreateDirectory(d);


            string file1 = @"File1.txt";
            string file2 = @"File2.txt";

            string fp1 = Path.Combine(d, file1);
            string fp2 = Path.Combine(d, file2);

            File.WriteAllText(file1, "Welcome");
            File.WriteAllText(file2, "Hello World");

            Console.WriteLine("File1.txt");
            Console.WriteLine("File2.txt");

            string s;
            Console.WriteLine("Content of File(File1.txt):");
            s = File.ReadAllText("E:\\Spektra-Internship\\c#20.04.23\\File1.txt");
            Console.WriteLine(s);

            Console.WriteLine("Content of File(File2.txt):");
            s = File.ReadAllText("E:\\Spektra-Internship\\c#20.04.23\\File2.txt");
            Console.WriteLine(s);

        }
    }
}
