using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Assign2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            SortedList<int, string> idNames = new SortedList<int, string>()
             {
                {3, "Soni"},
                {5, "Priya"},
                {1, "Saloni"},
                {2, "Aashvi" },
                {4, "Santhosh"},
                {6, "Jyoti"},
                {8, "Shobha"},
                {9, "Pallavi"},
                {7, "Likitha"},
                {10, "Priyanka"}
             };
           Console.WriteLine("ID:Student Name");
           foreach (KeyValuePair<int, string> kvp in idNames)
           Console.WriteLine("key: {0}, value: {1}", kvp.Key, kvp.Value);
        }
    }
}

