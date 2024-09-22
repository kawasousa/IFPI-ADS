using NUlid;

namespace PatroKars.App
{
    public class Io
    {
        public static int GetNumber(string message = "Digite a opção: ")
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

        public static void ShowListAsOptions(List<Dictionary<string,object>> automakers)
        {
            List<string> automakerOptions = new();
            foreach(Dictionary<string,object> automakerName in automakers)
            {
                automakerOptions.Add(automakerName["name"].ToString());
            }
            Ui.ShowOptions(automakerOptions);
        }

        public static List<Dictionary<string,object>> SumLists(List<Dictionary<string,object>> list1, List<Dictionary<string,object>> list2)
        {   
            List<Dictionary<string,object>> newList = list1;
            newList.AddRange(list2);
            return newList;
        }

        public static List<Dictionary<string,object>> FilterBy(List<Dictionary<string,object>> list, string key, Func<string,bool> criterion)
        {
            List<Dictionary<string,object>> newList = new();
            foreach(Dictionary<string,object> dict in list)
            {
                if(criterion(dict[key].ToString()))
                {
                    newList.Add(dict);
                }
            }

            return newList;
        }

        public static void RemoveBy(List<Dictionary<string,object>> list, string key, string value)
        {
            for(int i = 0; i < list.Count; i++)
            {
                if(list[i][key] == value)
                {
                    list.RemoveAt(i);
                }
            }
        }

        public static bool StringContains(string str1, string str2)
        {
            if(str1.Length>str2.Length){return false;}

            str1 = str1.ToLower();
            str2 = str2.ToLower();

            for(int i = 0; i < str1.Length; i++)
            {
                if(!str1[i].Equals(str2[i]))
                {
                    return false;
                }
            }

            return true;
        }

        //Sort a list based on a criterion function
        public static void BubbleSort(List<Dictionary<string,object>> list, Func<Dictionary<string,object>, Dictionary<string,object>, bool> criterion)
        {
            for(int i = list.Count-1; i > 0; i--)
            {
                int changes = 0;
                for(int j = 0; j < i; j++)
                {
                    if(criterion(list[j], list[j+1]))
                    {
                        Dictionary<string,object> aux = list[j];
                        list[j] = list[j+1];
                        list[j+1] = aux;
                        changes++;
                    }
                }

                if(changes <= 1){break;}
            }
        }

        public static Dictionary<string,string> GetTranslatedKeys(string listName)
        {
            Dictionary<string,string> Montadoras = new()
            {
                {"name", "Nome"},
                {"year", "Ano"},
                {"country", "Pais"}
            };
            
            Dictionary<string,string> Modelos = new()
            {
                {"automaker", "Montadora"},
                {"name", "Nome"},
                {"price", "Valor Referencia"},
                {"Engine", "Motorizacao"},
                {"Turbo", "Turbo"},
                {"Automatic", "Automatico"}
            };

            Dictionary<string,string> Veiculos = new()
            {
                {"automaker", "Montadora"},
                {"model", "Modelo"},
                {"name", "Nome"},
                {"color", "Cor"},
                {"year", "Ano"},
                {"modelYear", "Ano do Modelo"},
                {"price", "Valor"},
                {"plate", "Placa"},
                {"sold", "Vendido"},
            };

            Dictionary<string,Dictionary<string,string>> keys = new()
            {
                {"Montadoras", Montadoras},
                {"Modelos", Modelos},
                {"Veiculos", Veiculos},
            };


            return keys[listName];
        }
    }
}