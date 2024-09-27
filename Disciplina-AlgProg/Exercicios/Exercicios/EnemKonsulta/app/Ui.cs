using System.Data;

namespace EnemKonsulta.app
{
    public static class Ui
    {
        public static int GetNumber(string message)
        {
            string result = GetString(message);
            return result == "" ? 0 : int.Parse(result);
        }

        public static string GetString(string message)
        {
            Console.Write(message);
            string result = Console.ReadLine() ?? "";
            return result;
        }

        public static void AwaitEnter(string message = "Pressione ENTER para prosseguir")
        {
            Console.WriteLine(message);
            Console.CursorVisible = false;
            while (true)
            {
                if(Console.ReadKey(false).Key == ConsoleKey.Enter)
                {
                    Console.CursorVisible = true;
                    break;
                }
            }
        }

        public static void DivideLines()
        {
            Console.WriteLine("---------------");
        }

        public static void ShowTitle(string title)
        {
            Console.Clear();
            Console.WriteLine("+" + new string(char.Parse("-"), title.Length+2) + "+");
            Console.WriteLine($"| {title} |");
            Console.WriteLine("+" + new string(char.Parse("-"), title.Length+2) + "+");
        }

        public static void ShowOptions(List<string> options, string lastOption = "Voltar")
        {
            for(int i = 0; i < options.Count; i++)
            {
                if(options[i].Equals(""))
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine($"[{(i<9?"0":"")}{i+1}] - {options[i]}");
                }
            }

            if(lastOption != "")
            {
                Console.WriteLine($"\n[0] - {lastOption}");
            }
        }

        public static List<Dictionary<string,object>> FilterList(List<Dictionary<string,object>> list, Func<Dictionary<string,object>, bool> criterion)
        {
            List<Dictionary<string,object>> filteredList = new();

            foreach(Dictionary<string,object> item in list)
            {
                if(criterion(item))
                {
                    filteredList.Add(item);
                }
            }

            return filteredList;
        }

        public static float ReduceList(List<Dictionary<string,object>> list, string dataName, Func<float, float, float> work, float cumulator)
        {
            for(int i = 0; i < list.Count; i++)
            {
                object objItem = list[i][dataName];
                float item = (float)objItem;
                cumulator = work(cumulator, item);
            }

            return cumulator;
        }

        public static bool ListHasValue(List<string> list, object value)
        {
            foreach(object item in list)
            {
                if(item.Equals(value))
                {
                    return true;
                }
            }

            return false;
        }
    }
}