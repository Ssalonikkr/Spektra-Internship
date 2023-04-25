using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
           List<string> items = new List<string> { "Apple","Pen","Mango","Saloni","Paper","21st","Pencil" };

           Action<List<string>> printList = (list) =>
           {
              foreach (string item in list)
                {
                        Console.WriteLine(item);
                }
           };
          printList(items);
          Console.ReadLine();     
            
        }
    }
}


