﻿using System;
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

            int n1 = 5, n2 = 10, n3 = 15, max;
            max = (n1 > n2 && n1 > n2) ? n1 : (n2 > n3) ? n2 : n3;
            Console.WriteLine("Largest number : " + max);



        }
    }
}
