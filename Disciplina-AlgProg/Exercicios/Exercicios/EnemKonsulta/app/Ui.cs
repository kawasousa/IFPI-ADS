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
            return Console.ReadLine() ?? "";
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

        public static List<List<string>> FilterList(List<List<string>> list, Func<List<string>, bool> criterion)
        {
            List<List<string>> filteredList = new();

            foreach(List<string> item in list)
            {
                if(criterion(item))
                {
                    filteredList.Add(item);
                }
            }

            return filteredList;
        }

        public static float ReduceList(List<List<string>> list, int dataIndex, Func<float, float, float> work, float cumulator)
        {
            for(int i = 0; i < list.Count; i++)
            {
                float item = float.Parse(list[i][dataIndex]);
                cumulator = work(cumulator, item);
            }

            return cumulator;
        }

        public static List<List<string>> QuickSort(List<List<string>> list, int dataIndex, bool reverse = false)
        {
            if(list.Count == 1){return list;}

            float pivot = float.Parse(list[0][dataIndex]);
            List<List<string>> leftList = new();
            List<List<string>> rightList = new();

            for(int i = 1; i < list.Count; i++)
            {
                float item = float.Parse(list[i][dataIndex]);

                if(reverse)
                {
                    if(pivot > item){
                        leftList.Add(list[i]);
                    }
                    else
                    {
                        rightList.Add(list[i]);
                    }
                }
                else
                {
                    if(pivot < item){
                        leftList.Add(list[i]);
                    }
                    else
                    {
                        rightList.Add(list[i]);
                    }
                }
            }

            List<List<string>> pivotList = new() {list[0]};

            if(leftList.Count > 0 && rightList.Count > 0)
            {
                leftList = QuickSort(leftList, dataIndex, reverse);
                rightList = QuickSort(rightList, dataIndex, reverse);
            }

            //SortedList is leftList + pivotList + RightList
            List<List<string>> sortedList = [.. leftList, .. pivotList, .. rightList];

            return sortedList;
        }

        public static void ShowList(List<List<string>> list, string info, int dataIndex, string data = "")
        {
            foreach(List<string> item in list)
            {
                Console.WriteLine($"{info} {data}: {item[dataIndex]}");
            }
        }

        public static void ShowRankedList(List<List<string>> list, int rankNumber, int dataIndex)
        {
            for(int i = 0; i < rankNumber; i++)
            {
                Console.WriteLine($"{i+1} - {list[i][1]}: {list[i][dataIndex]}");
            }
        }
    }
}