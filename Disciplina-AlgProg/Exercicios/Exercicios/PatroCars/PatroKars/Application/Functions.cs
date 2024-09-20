using System.Runtime.Intrinsics.X86;

namespace PatroKars.Application
{
    public static class Functions
    {
        public static Dictionary<string, object> CreateAutomaker()
        {
            Dictionary<string,object> automaker = new Dictionary<string,object>();

            string ID = Io.GetUlid();
            string name = Io.GetString("Digite o nome da montadora: ");
            string country = Io.GetString("Digite o país de origem: ");
            int year = Io.GetNumber("Digite o ano de fundação: ");

            automaker.Add("ID", ID);
            automaker.Add("name", name);
            automaker.Add("country", country);
            automaker.Add("year", year);
 
            return automaker;
        }
        

        public static void ListAutomakers(List<Dictionary<string,object>> list)
        {
            if (list.Count == 0)
            {
                Console.WriteLine("Cadastre montadoras antes de exibi-las!");
                return;
            }

            Console.WriteLine($"Temos {list.Count} montadoras cadastradas!");
            Ui.DivideLines();

            //Show extra infos about listed automaker if other automaker has any equal info
            foreach(Dictionary<string,object> dict in list){
                string extraInfo = "";
                if(Io.HasEqualItem(list,dict,"name"))
                {
                    if(Io.HasEqualItem(list,dict,"country"))
                    {
                        extraInfo += $" ({dict["year"]})";
                    }
                    if(Io.HasEqualItem(list,dict,"year")){
                        extraInfo += $" ({dict["country"]})";
                    }
                }

                //List automaker name
                Console.WriteLine($"- {dict["name"]}" + extraInfo);
            }

            
        }

        public static void UpdateAutomaker(List<Dictionary<string,object>> automakers)
        {
            if (automakers.Count == 0)
            {
                Console.WriteLine("Cadastre montadoras antes de atualiza-las!");
                return;
            }

            //List automakers names as options
            Io.ListAutomakersAsOptions(automakers);
            Ui.DivideLines();

            //Choose the automaker to be updated
            int automakerIndex = Io.GetNumber("Digite numero da montadora: ");
            if(automakerIndex == 0){return;}
            Dictionary<string,object> automaker = automakers[automakerIndex-1];

            //List automaker infos to be updated
            Ui.ShowTitle("Editar " + automaker["name"].ToString());
            List<string> infoOptions = new() {"Nome","Pais","Ano"}; 
            Ui.ShowOptions(infoOptions, "Cancelar");
            Ui.DivideLines();

            //Choose the automaker info to be updated
            int keyIndex = Io.GetNumber("Digite o numero da informação a ser atualizada: ");
            if(keyIndex == 0){return;}

            //Select key based on received option
            string key = "";
            int i = 0;
            foreach(string dictKey in automaker.Keys)
            {
                key = dictKey;
                if(i == keyIndex){break;}
                i++;
            }

            //Get new info to update automaker
            Ui.ShowTitle($"Editar {infoOptions[keyIndex-1]} de {automaker["name"]}");
            Console.WriteLine($"{infoOptions[keyIndex-1]} atual: {automaker[key]}.");
            Ui.DivideLines();
            string newValue = Io.GetString($"Digite o novo {infoOptions[keyIndex-1]}: ");

            //Transform new value based on current value type
            if(automaker[key].GetType() == typeof(System.Int64))
            {
                int intNewValue = int.Parse(newValue);
                automakers[automakerIndex-1][key] = intNewValue;
            }
            else
            {
                automakers[automakerIndex-1][key] = newValue;
            }

            Ui.DivideLines();
            Console.WriteLine($"O {infoOptions[keyIndex-1].ToLower()} da montadora foi atualizado para {newValue}!");
        }

        public static void RemoveAutomaker(List<Dictionary<string,object>> automakerList)
        {
            if (automakerList.Count == 0)
            {
                Console.WriteLine("Cadastre montadoras antes de exibi-las!");
                return;
            }

            Io.ListAutomakersAsOptions(automakerList);
            Ui.DivideLines();

            int automakerIndex = Io.GetNumber("Digite o numero da montadora: ");
            
            if(automakerIndex > 0 && automakerIndex < automakerList.Count)
            {
                Console.WriteLine($"A montadora {automakerList[automakerIndex-1]["name"]} foi removida da lista!");
                automakerList.RemoveAt(automakerIndex-1);
            }

        }

        public static List<Dictionary<string,object>> LoadFromFile(List<Dictionary<string,object>> automakerList)
        {
            Console.WriteLine("Carregar um arquivo vai descartar as alteracoes feitas!");
            Console.WriteLine("Deseja continuar?");
            Ui.DivideLines();

            Ui.ShowOptions(new List<string>() {"Carregar Montadoras"},"Voltar");
            Ui.DivideLines();
            int option = Io.GetNumber("Digite a opcao: ");
            if(option == 1){
                Ui.DivideLines();
                Console.WriteLine("Montadoras Carregadas!");
                return Fmanager.GetList();
            }


            return automakerList;
        }

        public static void SaveUpdates(List<Dictionary<string,object>> list)
        {
            List<string> options = new() {"Sobrescrever as alteracoes do arquivo","Adicionar alteracoes ao arquivo"};
            Ui.ShowOptions(options);
            Ui.DivideLines();

            int option = Io.GetNumber("Digite o numero da opcao: ");
            if(option == 0){return;}

            while(option <= 0  || option > options.Count)
            {
                option = Io.GetNumber("Digite o numero da opcao: ");
            }

            if(option == 1)
            {
                Fmanager.SaveList(list);
            }
            else
            {
                List<Dictionary<string,object>> savedInFileList = Fmanager.GetList();
                savedInFileList.AddRange(list);
                Fmanager.SaveList(savedInFileList);
            }
        }
    }
}
