using NUlid;

namespace PatroKars.Application
{
    public class Io
    {
        public static int GetNumber(string message)
        {
            string strResult = GetString(message);
            return !IsNumber(strResult) ? 0 : int.Parse(strResult);
        }

        public static string GetString(string message)
        {
            Console.Write(message);
            Console.ForegroundColor = ConsoleColor.Yellow;
            string result = Console.ReadLine() ?? "";
            result = result == "" ? GetString(message) : result;
            Console.ForegroundColor = ConsoleColor.White;
            return result;
        }

        public static string GetUlid()
        {
            Ulid ID = Ulid.NewUlid();
            return ID.ToString();
        }

        public static void AwaitEnter(string message = "")
        {
            Console.CursorVisible = false;
            Ui.DivideLines();
            Console.WriteLine(message == "" ? "Pressione ENTER para continuar": message);
            while(true)
            {
                ConsoleKeyInfo key = Console.ReadKey(false);
                if (key.Key == ConsoleKey.Enter)
                {
                    Console.CursorVisible = true;
                    break;
                }
            }
        }

        public static bool HasEqualItem(List<Dictionary<string,object>> list, Dictionary<string,object> automaker, string key)
        {
            foreach (Dictionary<string,object> dict in list)
            {                
                if(dict[key].Equals(automaker[key]) && !dict["ID"].Equals(automaker["ID"]))
                {
                    return true;
                }
            }

            return false;
        }

        public static bool IsNumber(string str)
        {
            foreach(char c in str)
            {
                if (Convert.ToInt32(c) < 48 || Convert.ToInt32(c) > 57)
                {
                    return false;
                }
            }
            return true;
        }

        public static List<string> GetIDs(List<Dictionary<string,object>> list, string key, object value)
        {
            List<string> IDsList = new List<string>();

            foreach(Dictionary<string,object> dict in list)
            {
                if(dict[key].ToString() == value.ToString())
                {
                    IDsList.Add(dict["ID"].ToString());
                }
            }

            return IDsList;
        }

        public static void ListAutomakersAsOptions(List<Dictionary<string,object>> automakers)
        {
            List<string> automakerOptions = new();
            foreach(Dictionary<string,object> automakerName in automakers)
            {
                automakerOptions.Add(automakerName["name"].ToString());
            }
            Ui.ShowOptions(automakerOptions);
        }
    }
}