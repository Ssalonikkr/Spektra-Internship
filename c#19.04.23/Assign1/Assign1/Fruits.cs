using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign1
{ 
    class Fruits
    {
        static void Main(string[] args)
        {
            SortedSet<string> fruits = new SortedSet<string>();
            fruits.Add("Mango");
            fruits.Add("Apple");
            fruits.Add("Papaya");
            fruits.Add("Grapes");
            fruits.Add("Kiwi");
            fruits.Add("Melon");
            fruits.Add("Apple");
            fruits.Add("Papaya");
            fruits.Add("Grapes");
            fruits.Add("Kiwi");

            foreach (var fruit in fruits)
            {
                Console.WriteLine(fruit);
            }

        }

    }
}
