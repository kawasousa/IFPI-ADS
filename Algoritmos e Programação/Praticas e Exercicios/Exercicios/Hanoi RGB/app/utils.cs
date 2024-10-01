namespace Hanoi.Application
{
    public static class Io
    {
        public static string GetString(string message)
        {
            Console.Write(message);
            return Console.ReadLine() ?? "";
        }

        public static int GetNumber(string message)
        {
            return int.Parse(GetString(message));
        }

        public static void DivideLines()
        {
            Console.WriteLine("----------");
        }

        public static void ShowItems(Dictionary<string, List<string>> towers)
        {
            DivideLines();
            foreach(KeyValuePair<string, List<string>> tower in towers)
            {
                Console.Write($"{tower.Key} -> ");
                for(int index = 0; index < tower.Value.Count; index++)
                {
                    Console.Write($"{tower.Value[index]} | ");
                }
                Console.WriteLine();
            }
        }

        public static List<int> GetPlayersMoves(int playersAmount)
        {
            List<int> playersMoves = new();
            for(int i = 0; i < playersAmount; i++)
            {
                playersMoves.Add(0);
            }

            return playersMoves;
        }
    }
}