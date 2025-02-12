namespace Hanoi.Application
{
    public static class Ui
    {
        public static List<string> FillRandomItems(List<string> letters, int length)
        {
            List<string> newTower = new();
            for(int i = 0; i < length; i++)
            {
                Random random = new();
                int index = random.Next(0, letters.Count);
                newTower.Add(letters[index]);
            }

            return newTower;
        }

        public static void MoveItem(Dictionary<string,List<string>> towers, string option, List<string> letters, int length)
        {
            string source = "";
            string target = "";

            foreach(string letter in letters)
            {
                if(letter == option[0].ToString())
                {
                    source = letter;
                }
                if(letter == option[1].ToString())
                {
                    target = letter;
                }
            }
            if(source == "" || target == ""){return;}

            if(source != target && towers[target].Count < length && towers[source].Count > 0)
            {
                towers[target].Add(towers[source][^1]);
                towers[source].RemoveAt(towers[source].Count-1);
            }
        }

        public static bool MatchWon(Dictionary<string, List<string>> towers)
        {
            foreach(KeyValuePair<string,List<string>> tower in towers)
            {
                foreach(string item in tower.Value)
                {
                    if(item != tower.Key)
                    {
                        return false;
                    }
                }
            }

            return true;
        }
    }
}