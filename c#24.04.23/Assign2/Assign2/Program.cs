using System;

namespace Assign2
{
    class Program
    {

        public int Multiplication(int num1, int num2)
        {
            return num1 * num2;
        }
        public double Multiplication(double num1, double num2)
        {
            return num1 * num2;
        }
        public int Multiplication(int num1, int num2, int num3)
        {
            return num1 * num2 * num3;
        }

        public double Multiplication(double num1, double num2, double num3)
        {
            return num1 * num2 * num3;
        }

        static void Main(string[] args)
        {
            Program mul = new Program();
            Console.WriteLine("\nMethod overloading");
            Console.WriteLine("\n 5 * 10 = " + mul.Multiplication(5, 10));
            Console.WriteLine("\n 1.4 * 5.2 = " + mul.Multiplication(1.4, 5.2));
            Console.WriteLine("\n 5 * 10 * 15 = " + mul.Multiplication(5,10,15));
            Console.WriteLine("\n 1.5 * 2.6 * 3.7 = " + mul.Multiplication(1.5 , 2.6 ,3.7));
        }
    }
}
