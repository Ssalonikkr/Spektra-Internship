using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[,] nums = { { 1,2,3,4,5 },
                            { 6,7,8,9,0} };
            Console.WriteLine("Index[0,0]: " + nums[0, 0]);
            Console.WriteLine("Index[0,1]: " + nums[0, 1]);
            Console.WriteLine("Index[0,2]: " + nums[0, 2]);
            Console.WriteLine("Index[0,3]: " + nums[0, 3]);
            Console.WriteLine("Index[0,4]: " + nums[0, 4]);
            Console.WriteLine("Index[1,0]: " + nums[1, 0]);
            Console.WriteLine("Index[0,0]: " + nums[1, 1]);
            Console.WriteLine("Index[1,1]: " + nums[1, 2]);
            Console.WriteLine("Index[1,2]: " + nums[1, 3]);
            Console.WriteLine("Index[1,3]: " + nums[1, 4]);
           


        }
    }

}
