using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            LinkedList<String> list = new LinkedList<String>();

           
            list.AddLast("Saloni");
            list.AddLast("Soni");
            list.AddLast("Rashmi");
            list.AddLast("Rohan");
            list.AddLast("Priya");
            list.AddLast("Ram");

           
            Console.WriteLine("Names:");


            foreach (string str in list)
            {
                Console.WriteLine(str);
            }

        }
    }
}
