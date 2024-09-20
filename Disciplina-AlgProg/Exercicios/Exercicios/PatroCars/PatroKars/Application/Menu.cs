namespace PatroKars.Application
{
    public static class Ui
    {
        public static void ShowOptions(List<string> options, string lastItem = "Voltar")
        {
            for(int index = 0; index < options.Count; index++)
            {
                string option = options[index];
                Console.WriteLine($"[{index+1}] - {option}");
            }
            Console.WriteLine($"\n[0] - {lastItem}");
        }

        public static void ShowTitle(string title)
        {
            ClearScreen();
            Console.WriteLine("+" + new string(char.Parse("-"), title.Length+2) + "+");
            Console.WriteLine("| " + title + " |");
            Console.WriteLine("+" + new string(char.Parse("-"), title.Length+2) + "+");
        }

        public static void DivideLines()
        {
            Console.WriteLine("----------");
        }

        public static void ClearScreen()
        {
            Console.Clear();
        }
    }
}