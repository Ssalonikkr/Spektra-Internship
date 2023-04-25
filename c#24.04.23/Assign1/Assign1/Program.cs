using System;
using System.Collections.Generic;

namespace Assign1
{
    class Program
    {
        static void Main(string[] args)
        {  
            List<Student> students = new List<Student>();
            students.Add(new Student("Saloni", "7878909876", "sk@email.com"));
            students.Add(new Student("Soni  ", "9876543210", "ss@email.com"));
            Console.WriteLine("List of students:\n");
            foreach (Student student in students)
            {
                Console.WriteLine(student);
            }
            Course course = new Course("MCA");
            Console.WriteLine("\nAdd new student details in MCA:");
            Console.Write("\nName: ");
            string name = Console.ReadLine();
            Console.Write("\nContact No.: ");
            string mob = Console.ReadLine();
            Console.Write("\nEmail: ");
            string email = Console.ReadLine();
            students.Add(new Student(name, mob, email));
            course.AddStudent(students[students.Count-1]);
            Console.WriteLine("\nUpdated list of students:\n\n");
            foreach (Student student in students)
            {
                Console.WriteLine(student);
            }
            Console.WriteLine("\nNewly joined student in MCA course:");
            foreach (Student student in course.Students)
            {
                Console.WriteLine(student);
            }
        }
    }
    class Student
    {
        public string Name { get; set; }
        public string Mob { get; set; }
        public string Email { get; set; }
        public Student(string name, string mob, string email)
        {
            Name = name;
            Mob = mob;
            Email = email;
        }
        public override string ToString()
        {
            return $"Name:{Name} \n Contact No.: {Mob} \n Email: {Email}";
        }

    }
    class Course
    {
        public string Name { get; set; }
        public List<Student> Students { get; set; }

        public Course(string name)
        {
            Name = name;
            Students = new List<Student>();
        }
        public void AddStudent(Student student)
        {
            Students.Add(student);
        }
    }
}
