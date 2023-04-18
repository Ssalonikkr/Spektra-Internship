using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign1
{
    internal class Program
    {
        public static void Main()
        {
            String s = "My name is Saloni Kumari";
            int count = 0;

            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == ' ')
                {
                    count++;
                }
            }
            count++;
            Console.WriteLine("Total number of words in the given string: " + count);
        }
    }

}
