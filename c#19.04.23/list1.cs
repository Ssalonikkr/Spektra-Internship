using System;
using System.Collections;
using System.Collections.Generic;

namespace GenericCollection
{
public class List{

          public static void Main(string[] args){
             
           SortedSet<string> fruits = new SortedSet<string>();
            fruits.Add("Mango");
            fruits.Add("Apple");
            fruits.Add("Papaya");
            fruits.Add("Grapes");
            fruits.Add("Kiwi");
            fruits.Add("Melon");
            fruits.Add("Apple");
            fruits.Add("Papaya");
            fruits.Add("Grapes");
            fruits.Add("Kiwi");

            foreach (var fruit in fruits)
            {
                Console.WriteLine(fruit);
            }
         }
   }
}