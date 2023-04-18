using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign7
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[][] ja = { new int[] { 1, 2, 3 },
                           new int[] { 4, 5, 6 },
                           new int[] { 7, 8, 9 },
                           new int[] { 10, 11, 12 }};

            Console.WriteLine("ja[0,1]:" +ja[0][0]);
            Console.WriteLine("ja[0,2]:" +ja[0][1]);
            Console.WriteLine("ja[0,3]:" +ja[0][2]);
            

            Console.WriteLine("ja[1,0]:" +ja[1][0]);
            Console.WriteLine("ja[1,1]:" +ja[1][1]);
            Console.WriteLine("ja[1,2]:" +ja[1][2]);
            

            Console.WriteLine("ja[2,0]:" +ja[2][0]);
            Console.WriteLine("ja[2,1]:" +ja[2][1]);
            Console.WriteLine("ja[2,1]:" +ja[2][2]);

            Console.WriteLine("ja[2,0]:" + ja[3][0]);
            Console.WriteLine("ja[2,1]:" + ja[3][1]);
            Console.WriteLine("ja[2,1]:" + ja[3][2]);



        }
    }
}
