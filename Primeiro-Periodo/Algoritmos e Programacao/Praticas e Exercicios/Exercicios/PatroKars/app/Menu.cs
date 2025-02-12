namespace PatroKars.App
{
    public static class Ui
    {
        public static void ShowOptions(List<string> options, string lastItem = "Voltar")
        {
            for(int index = 0; index < options.Count; index++)
            {
                if(!options[index].Equals(""))
                {
                    string extraZero = index < 9 ? "0" : "";

                    string option = options[index];
                    Console.WriteLine($"[{extraZero}{index+1}] - {option}");
                }
                else
                {
                    Console.WriteLine();
                }
            }
            if(lastItem != "")
            {
                Console.WriteLine($"\n[00] - {lastItem}");
            }
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