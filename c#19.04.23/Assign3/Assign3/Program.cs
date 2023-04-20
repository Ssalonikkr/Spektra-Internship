using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign3
{
    internal class Program
    {
        public static void Main()
        {
            SortedList<int, string> kv = new SortedList<int, string>()
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
            Console.WriteLine("Enter the index value:");
            string val;
            val = Console.ReadLine();

            int i;
            i=Convert.ToInt32(val);
            {
                Console.WriteLine("key: {0}, value: {1}", kv.Keys[i], kv.Values[i]);
            }

        }
    }
}

