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
            int year = 2;
            double princamt = 4000 ;

            double rate = 7;
            double interest = (princamt * year * rate) / 100; 
            Console.WriteLine("Simple Interest : "+interest);

        }
    }
}
