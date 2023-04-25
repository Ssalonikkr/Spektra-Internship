using System;
namespace Assign3
{
    class Calculator
    {
        public int num;
        public Calculator() { }
        public Calculator(int n)
        {
            num = n;
        }
        public static Calculator operator *(Calculator Calc1, Calculator Calc2)
        {
            Calculator Calc3 = new Calculator();
            Calc3.num = Calc1.num * Calc2.num;
            return Calc3;
        }
        public void display()
        {
            Console.WriteLine(num);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Calculator num1 = new Calculator(1000);
            Calculator num2 = new Calculator(500);
            Calculator num3 = new Calculator();
            num3 = num1 * num2;
            num1.display(); 
            num2.display(); 
            num3.display(); 

        }
    }
}
