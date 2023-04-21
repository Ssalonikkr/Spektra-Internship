using System;
using System.Security.Cryptography.X509Certificates;
using System.Xml.Schema;

public class Employee
{

    
    public float amount = 40000;
  
    public void numberofsales1()
    {
        Console.WriteLine("Invalid number of Sale");
    }

    public void numberofsale()
    {

        Console.WriteLine("Total Sale per Month:");
        Console.WriteLine("1st month of sale:10");
        Console.WriteLine("2nd month of sale:20");
        Console.WriteLine("3rd month of sale:30");
    }
}

public class SalesAssociate : Employee
{

    
    double bonus;
    public void salesbonus()
    {
        

        
        string val;
        Console.WriteLine("Enter the number of sales:");
        val = Console.ReadLine();

        int nos;
        nos = Convert.ToInt32(val);


        if (nos == 10)
        {
            Console.WriteLine("Total number of sales :" +nos);
            bonus = (5 * amount) / 100;
            Console.WriteLine("Bonus:"+bonus);
        }
        if (nos == 20)
        {
            Console.WriteLine("Total number of sales :" +nos);
            bonus = (10 * amount) / 100;
            Console.WriteLine("Bonus:" +bonus);

        }
        if (nos == 30)
        {
            Console.WriteLine(" Total number of sales :" + nos);
            bonus = (20 * amount) / 100;
           
            Console.WriteLine("Bonus:"+bonus);

        }
        if(nos !=10 && nos !=20 && nos !=30) 
        {
            numberofsales1();
        }
    }


}
class TestInheritance
{
    public static void Main(string[] args)
    {
        SalesAssociate b = new SalesAssociate();
        b.numberofsale();
        b.salesbonus();
       
       
        


    }
}
