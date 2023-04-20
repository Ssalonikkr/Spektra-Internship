using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assign4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> list = new List<string>();
            list.Add("Pen");
            list.Add("Ball");
            list.Add("Pencil");
            list.Add("NoteBook");
            list.Add("Bag");

            for(int i=0; i<=4 ; i++)
            {
                Console.WriteLine(list[i]);
            }
            

        }
    }
}
