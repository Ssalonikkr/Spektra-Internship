using System;

public interface BankAccount
{
    void Deposit();
    void Withdraw();
    
}

public class CurrentAccount : BankAccount
{


    double balance;

    
    public void Deposit()
    {
        Console.WriteLine("Enter the amount to be deposit from current account:");
        double amount= Convert.ToDouble(Console.ReadLine());
        balance += amount;
    }

    public void Withdraw()
    {
        Console.WriteLine("Enter the amount to be withdraw from current account:");
        double amount = Convert.ToDouble(Console.ReadLine());
        if (balance - amount < 0)
        {
            
            Console.WriteLine("Insufficient Balance!");
            return;
        }

        balance -= amount;
    }

    public double GetBalance()
    {
        return balance;
    }
}

public class SavingsAccount : BankAccount
{

    double balance;
    


    public void Deposit()
    {
        Console.WriteLine("Enter the amount to be deposit from saving account:");
        double amount = Convert.ToDouble(Console.ReadLine());
        balance += amount;
    }

    public void Withdraw()
    {
        Console.WriteLine("Enter the amount to be deposit from saving account:");
        double amount = Convert.ToDouble(Console.ReadLine());
        if (balance - amount < 0)
        {
            Console.WriteLine("Total Balance is" + balance);
            Console.WriteLine("Insufficient Balance!");
            return;
        }

        balance -= amount;
    }

    public double GetBalance()
    {
        return balance;
    }
}

class Program
{
    static void Main(string[] args)
    {

        
        CurrentAccount currentAccount = new CurrentAccount();
        currentAccount.Deposit();
        currentAccount.Withdraw();

        SavingsAccount savingsAccount = new SavingsAccount();
        savingsAccount.Deposit();
        savingsAccount.Withdraw();

        Console.WriteLine("Total Deposit from Current Account"+currentAccount.GetBalance());
        Console.WriteLine("Total Deposit from Saving Account"+savingsAccount.GetBalance());
        double totalDeposit = currentAccount.GetBalance() + savingsAccount.GetBalance();
        Console.WriteLine("Total deposit: " + totalDeposit);
    }
}
