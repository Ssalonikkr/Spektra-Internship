using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign4
{
    class Employee
    {
        int id;
        int salary;
        string name;
        string department;
        public override string ToString()
        {
            return id + " " + name + " " +
            salary + " " + department;
        }

        static void Main(string[] args)
        {   
            List<Employee> emp = new List<Employee>()
            {
		        new Employee{ id = 1, name = "Saloni",salary = 10000, department = "Development" },
                new Employee{ id = 2, name = "Soni",salary = 15000, department = "Development" },
                new Employee{ id = 3, name = "Aashvi",salary = 13000, department = "HR" },
                new Employee{ id = 4, name = "Priya",salary = 12000, department = "Web-Designing" },
                new Employee{ id = 5, name = "Divya",salary = 15000, department = "Development" }
            };
            foreach (var e in emp)
            {
                Console.WriteLine(e);
            }
            string val;
            Console.WriteLine("\nEnter the Employee ID for the details:");
            val = Console.ReadLine();

            int no;
            no = Convert.ToInt32(val);
            if (no != 0)
            {
                IEnumerable<Employee> result = emp.Where(i => i.id == no);
                foreach (Employee e in result)
                {
                    Console.WriteLine("ID Name Salary Department");
                    Console.WriteLine(e);
                }
            }
            if(no>5)
            {
                Console.WriteLine("\n Invalid ID");
            }
        }
    }
}

