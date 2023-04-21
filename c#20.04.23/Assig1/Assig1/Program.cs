using System;
using System.Security.Policy;

namespace PolymorphismApp
{
    abstract class Areas
    {
        public abstract double area();
    }

    class Circle : Areas
    {
        private double radius;

        public Circle(double r)
        {
            radius = r;

        }

        public override double area()
        {
            Console.WriteLine(" Area of the circle :");
            return (3.14159265359 * radius * radius);
        }
    }

    class Square : Areas
    {
        private double side;

        public Square(double s)
        {
            side = s;

        }

        public override double area()
        {
            Console.WriteLine("Area of the Square :");
            return (side * side);
        }
    }
    class Rectangle : Areas
    {
        private double length;
        private double width;

        public Rectangle(int a = 0, int b = 0)
        {
            length = a;
            width = b;
        }

        public override double area()
        {
            Console.WriteLine("Rectangle class area :");
            return (width * length);
        }
    }

    class Area
    {

        static void Main(string[] args)
        {
            Circle c = new Circle(7);
            double c1 = c.area();
            Console.WriteLine("Area: {0}", c1);



            Square s = new Square(9);
            double s1 = s.area();
            Console.WriteLine("Area: {0}", s1);



            Rectangle r = new Rectangle(10, 7);
            double a = r.area();
            Console.WriteLine("Area: {0}", a);


            Console.ReadKey();


        }
    }
}
