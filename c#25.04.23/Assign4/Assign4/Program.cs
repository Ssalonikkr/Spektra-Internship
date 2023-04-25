using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign4
{
    class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public string getData()
        {
            return "ID:"+Id+"\n Name:"+Name+"\n Address:"+Address+"\n City:"+City+"\n Country:"+Country;
        }
    }

    class Program
    {
        public static bool ask(string s)
        {
            if(s.Equals("yes"))
                return true;
            return false;
        }
        static void Main()
        {
            List<Customer> customers = new List<Customer> {
                            new Customer { Id = 1, Name = "Saloni", Address = "Yelanka", City = "Bangalore", Country = "India" },
                            new Customer { Id = 2, Name = "Soni", Address = "BTM", City = "Bangalore", Country = "India" },
                            new Customer { Id = 3, Name = "Aashvi", Address = "Yashwantpur", City = "Bangalore", Country = "India" },
                        };

            Predicate<string> printDetails = ask;

            Console.WriteLine("For Displaying enter yes");
            string s=Console.ReadLine();

            if (printDetails(s))
            {
                foreach (var customer in customers)
                {
                    Console.WriteLine(customer.getData());
                }
            }
            else { Console.WriteLine("Data is not there"); }
            
            
        }
    }
}
