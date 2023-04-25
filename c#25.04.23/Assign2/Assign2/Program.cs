using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign2
{
    delegate double Calculate(double x, double y);

    class Calc
    {
        public static double Addition(double x, double y)
        {
            return x + y;
        }

        public static double Subtraction(double x, double y)
        {
            return x - y;
        }

        public static double Multiplication(double x, double y)
        {
            return x * y;
        }

        public static double Division(double x, double y)
        {
            if (y == 0)
            {
                throw new DivideByZeroException();
            }

            return x / y;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Calculate add = new Calculate(Calc.Addition);
            Calculate subtract = new Calculate(Calc.Subtraction);
            Calculate multiply = new Calculate(Calc.Multiplication);
            Calculate divide = new Calculate(Calc.Division);

            Console.WriteLine("Enter the 1st number:");
            double x = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter the 2nd number:");
            double y = Convert.ToDouble(Console.ReadLine());


            Console.WriteLine($"{x} + {y} = {add(x, y)}");
            Console.WriteLine($"{x} - {y} = {subtract(x, y)}");
            Console.WriteLine($"{x} * {y} = {multiply(x, y)}");
            Console.WriteLine($"{x} / {y} = {divide(x, y)}");
        }
    }

}

