using System;
namespace Assign5
{
    internal class Program
    {
        public class List<E>
        {
            public void Emp(E[] employee)
            {
                for (int i = 0; i < employee.Length; i++)
                {
                    Console.Write("\n" + employee[i]);
                }
            }
        }
        public class Employee
        {
            private int id;
            private string Name;
            private int Income;
            private string des;

            public int ID
            {
                set { id = value; }
                get { return id; }
            }
            public string FullName
            {
                set { Name = value; }
                get { return Name; }
            }

            public int Salary
            {
                set { Income = value; }
                get { return Income; }
            }
            public string Designation
            {
                set { des = value; }
                get { return des; }
            }

        }
        static void Main(string[] args)
        {
            List<Employee> detail = new List<Employee>();
            Console.Write(" Employee Details: ");
            Console.WriteLine("\n");
            Employee[] emp = new Employee[4];
            emp[0] = new Employee()
            {
                ID = 1,
                FullName = "Saloni Kumari",
                Salary = 100000,
                Designation = "Dev - Intern"
            };
            emp[1] = new Employee()
            {
                ID = 2,
                FullName = "Jyoti Kumari",
                Salary = 50000,
                Designation = "Dev - Intern"
            };
            emp[2] = new Employee()
            {
                ID = 3,
                FullName = "Aashvi Singh",
                Salary = 80000,
                Designation = "Developer2"
            };

            emp[3] = new Employee()
            {
                ID = 4,
                FullName = "Soni Singh",
                Salary = 80000,
                Designation = "Developer 1"
            };
            foreach(Employee e in emp)
            {
                Console.WriteLine("ID: "+e.ID);
                Console.WriteLine("Name: " + e.FullName);
                Console.WriteLine("Salary"+e.Salary);
                Console.WriteLine("Designation"+e.Designation);

                Console.WriteLine("\n");
            }
            
        }

    }
}
