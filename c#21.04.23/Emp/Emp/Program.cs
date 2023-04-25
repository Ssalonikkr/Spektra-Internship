using System;
public class Employee
{
    public void numberofsales1()
    {
        Console.WriteLine("No Sales");
    }

}
public class SalesAssociate : Employee
{
    public void numberofsales()
    {

        string val;
        Console.WriteLine("Enter the number of sales:");
        val = Console.ReadLine();

        int nos;
        nos = Convert.ToInt32(val);
        if (nos == 10)
        {
            Console.WriteLine("Total number of sales :" +nos);
            
        }
        if (nos == 20)
        {
            Console.WriteLine(" Total number of sales :" + nos);
            
        }
        if (nos == 30)
        {
            Console.WriteLine(" Total number of sales :" + nos);
            
        }
        else
        {
            numberofsales1();
        }

    }
}
public class TestOverriding
{
    public static void Main()
    {
        SalesAssociate b = new SalesAssociate();
        b.numberofsales();
        

    }
}