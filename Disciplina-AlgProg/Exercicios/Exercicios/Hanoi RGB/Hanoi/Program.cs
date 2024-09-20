using Hanoi.Application;

namespace Hanoi
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();

            List<string> letters = new(){"R","G","B"};
            List<string> Rtower = new();
            List<string> Gtower = new();
            List<string> Btower = new();

            int listSize = 3;
            List<string> randomTower = Ui.FillRandomItems(letters, listSize);
            Rtower = randomTower;

            Dictionary<string, List<string>> towers = new()
            {
                {"R", Rtower},
                {"G", Gtower},
                {"B", Btower},
            };
            int playersAmount = 2;
            List<int> playersMoves = Io.GetPlayersMoves(playersAmount);

            while(true)
            {
                for(int playerIndex = 0; playerIndex < playersAmount; playerIndex++)
                {
                    Console.Clear();
                    Io.ShowItems(towers);
                    if(Ui.MatchWon(towers))
                    {
                        Rtower = randomTower;
                        Gtower.Clear();
                        Btower.Clear();

                        towers["R"] = Rtower;
                        towers["G"] = Gtower;
                        towers["B"] = Btower;
                        continue;
                    }

                    Io.DivideLines();
                    Console.WriteLine($"Movimentos: {playersMoves[playerIndex]}");
                    Io.DivideLines();
                    string option = Io.GetString("Digite a opção: ").ToUpper();

                    if(option.Length == 2)
                    {
                        Ui.MoveItem(towers, option, letters, listSize);
                        playersMoves[playerIndex]++;
                    }
                }
            }

        }
    }
}