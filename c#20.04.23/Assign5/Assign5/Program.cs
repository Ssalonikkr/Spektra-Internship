using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign5
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
            Console.WriteLine("\n After Adding first Name:");
            list.AddFirst("Aashvi");

            foreach (string str in list)
            {
                Console.WriteLine(str);
            }
        }
    }
}
