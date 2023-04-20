using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            LinkedList<String> list = new LinkedList<String>();

            list.AddLast("Soni");
            list.AddLast("Saloni");
            list.AddLast("Priya");
            list.AddLast("Nilesh");
            list.AddLast("Neha");
            list.AddLast("Jyoti");

            
            Console.WriteLine("Name:");

            foreach (string str in list)
            {
                Console.WriteLine(str);
            }

            Console.WriteLine("\n After removing first Name:");
            list.Remove(list.First);

            foreach (string str in list)
            {
                Console.WriteLine(str);
            }
            Console.WriteLine("\n After removing Saloni:");
            list.Remove("Saloni");

            foreach (string str in list)
            {
                Console.WriteLine(str);
            }

            Console.WriteLine("\n After removing last Name:");
            list.Remove(list.Last);

            foreach (string str in list)
            {
                Console.WriteLine(str);
            }


        }
    }
}
