namespace PatroKars.App
{
    public static class Functions
    {   
        static public void CreateList(string listName, List<Dictionary<string,object>> targetList, List<Dictionary<string,object>> automakersList = null, List<Dictionary<string,object>> modelsList = null)
        {
            automakersList ??= new();
            modelsList ??= new();

            List<string> keys = Io.GetTranslatedKeys(listName).Keys.ToList();
            Dictionary<string,string> names = Io.GetTranslatedKeys(listName);

            Dictionary<string,object> newDict = new()
            {
                {"ID", Io.GetUlid()}
            };

            //Add automaker ID if its a Model list
            if(!listName.Equals("Montadoras"))
            {
                if(listName.Equals("Veiculos") && modelsList.Count == 0 || automakersList.Count == 0)
                {
                    Console.WriteLine($"Adicione {(automakersList.Count == 0 ? "montadoras" : "modelos")} para adicionar {listName}!");
                    return;
                }

                List<string> options = new();
                foreach(Dictionary<string,object> dict in automakersList)
                {
                    options.Add(dict["name"].ToString());
                }

                Console.WriteLine("Montadora");
                Ui.DivideLines();
                Ui.ShowOptions(options);
                Ui.DivideLines();

                int automakerIndex = Io.GetNumber("Digite o numero da montadora: ");
                if(automakerIndex == 0){return;}
                Ui.DivideLines();

                string automakerID = automakersList[automakerIndex-1]["ID"].ToString();

                newDict.Add("automakerID", automakerID);
            }

            if(listName == "Veiculos")
            {
                List<string> options = new();
                foreach(Dictionary<string,object> dict in modelsList)
                {
                    options.Add(dict["name"].ToString());
                }
                Ui.ShowTitle("Adicionar Veiculos");
                Console.WriteLine("Modelo");
                Ui.DivideLines();
                Ui.ShowOptions(options);
                Ui.DivideLines();

                int modelIndex = Io.GetNumber("Digite o numero do modelo: ");
                string modelID = modelsList[modelIndex-1]["ID"].ToString();

                newDict.Add("modelID", modelID);
                newDict.Add("sold", false);
            }

            Ui.ShowTitle($"Adicionar {listName}");
            foreach(string key in keys)
            {
                if(!key.Contains("automaker") && !key.Contains("model") && !key.Contains("sold"))
                {
                    string value = Io.GetString($"{names[key]}: ");
                    newDict.Add(key, value);
                }
            }

            targetList.Add(newDict);
        }

        public static void ShowList(List<Dictionary<string,object>> list, string listName, List<Dictionary<string,object>> modelsList = null, List<Dictionary<string,object>> automakersList = null)
        {
            automakersList ??= new();
            modelsList ??= new();

            //Show a message if program has no registered automakers 
            if (list.Count == 0)
            {
                Console.WriteLine($"Nao ha {listName.ToLower()} cadastradas!");
                return;
            }

            Console.WriteLine($"Existem {list.Count} {listName.ToLower()} cadastradas!");
            Ui.DivideLines();

            //Show registered automakers
            foreach(Dictionary<string,object> dict in list)
            {
                Console.WriteLine($"- {dict["name"]}");
            }
            Ui.DivideLines();

            Ui.ShowOptions(new List<string>() {$"Detalhar {listName}",$"Filtrar {listName}",$"Ordenar {listName}"});
            Ui.DivideLines();
            
            int option = Io.GetNumber();
            if(option == 0){return;}
            Ui.DivideLines();

            if(option == 1)
            {
                Ui.ShowTitle($"Detalhar {listName}");
                foreach(Dictionary<string,object> dict in list)
                {
                    Console.WriteLine($"Nome: {dict["name"]}");
                    foreach(string key in dict.Keys)
                    {
                        Console.WriteLine(key);
                        if(!key.Equals("name"))
                        {
                            string translatedKey = Io.GetTranslatedKeys(listName)[key];
                            if(key.Equals("modelID"))
                            {
                                translatedKey = FilterList(modelsList, );
                                Console.WriteLine($"    {translatedKey}: {dict[key]}");
                            }

                            Console.WriteLine($"    {translatedKey}: {dict[key]}");
                        }
                    }
                    if(dict != list[^1])
                    {
                        Ui.DivideLines();
                    }
                }
            }
            else if(option == 2)
            {
                List<string> filterKey = new();

                List<Dictionary<string,object>> filteredList = FilterList(list, filterKey, Io.GetTranslatedKeys(listName));

                if(filterKey.Count > 0)
                {
                    Ui.ShowTitle($"{listName} com o {filterKey[1]} {filterKey[0]}");
                    ShowList(filteredList, listName);
                }
            }
            else if(option == 3)
            {
                Ui.ShowTitle($"Ordenar {listName}");
                List<string> keysList = Io.GetTranslatedKeys(listName).Keys.ToList();
                List<string> valuesList = Io.GetTranslatedKeys(listName).Values.ToList(); 
                Ui.ShowOptions(valuesList);
                Ui.DivideLines();

                int keyIndex = Io.GetNumber();
                if(keyIndex == 0){return;}

                string key = keysList[keyIndex-1];
                if(list[0][key].GetType() == typeof(Int64))
                {
                    Io.BubbleSort(list, (x,y)=>{return (Int64)x[key] > (Int64)y[key];});
                }
                else
                {
                    Io.BubbleSort(list, (x,y)=>{return x[key].ToString()[0] > y[key].ToString()[0];});
                }
                Ui.ShowTitle($"{listName} ordenadas por {valuesList[keyIndex-1]}");
                ShowList(list, listName);
            }
        }

        public static List<Dictionary<string,object>> FilterList(List<Dictionary<string,object>> list, List<string> filterKey = null, Dictionary<string,string> values)
        {
            filterKey ??= new();

            Ui.ShowTitle("Filtrar por");
            Ui.ShowOptions(values.Values.ToList());
            Ui.DivideLines();

            int infoIndex = Io.GetNumber();
            if(infoIndex == 0){return list;}
            
            string infoValue = values.Keys.ToList()[infoIndex-1].ToLower();
            string infoKey = values.Values.ToList()[infoIndex-1].ToLower();

            filterKey.Add(Io.GetString($"Digite o {infoKey}: "));
            filterKey.Add(infoKey);
            return Io.FilterBy(list, infoValue, x => Io.StringContains(filterKey[0], x));
        }

        public static void UpdateList(List<Dictionary<string,object>> list, string listName)
        {
            if (list.Count == 0)
            {
                Console.WriteLine($"Cadastre {listName} antes de atualiza-las!");
                return;
            }

            //List automakers names as options
            Io.ShowListAsOptions(list);
            Ui.DivideLines();

            //Choose the automaker to be updated
            int listIndex = Io.GetNumber($"Digite numero da {listName}: ");
            if(listIndex == 0){return;}
            Dictionary<string,object> automaker = list[listIndex-1];

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
            string newValue = Io.GetString($"Digite o novo {infoOptions[keyIndex-1].ToLower()}: ");

            //Transform new value based on current value type
            if(automaker[key].GetType() == typeof(System.Int64))
            {
                int intNewValue = int.Parse(newValue);
                list[listIndex-1][key] = intNewValue;
            }
            else
            {
                list[listIndex-1][key] = newValue;
            }

            Ui.DivideLines();
            Console.WriteLine($"O {infoOptions[keyIndex-1].ToLower()} da montadora foi atualizado para {newValue}!");
        }

        public static void RemoveList(List<Dictionary<string,object>> list, string listName, List<Dictionary<string,object>> vehiclesList = null, List<Dictionary<string,object>> modelsList = null)
        {
            vehiclesList ??= new();
            modelsList ??= new();

            if (list.Count == 0)
            {
                Console.WriteLine($"Cadastre {listName.ToLower()} antes de remove-las!");
                return;
            }

            Io.ShowListAsOptions(list);
            Ui.DivideLines();

            int listIndex = Io.GetNumber($"Digite o numero da {listName.ToLower()}: ")-1;
            if(listIndex == -1){return;}

            if(listIndex >= 0 && listIndex < list.Count)
            {
                Ui.ShowTitle($"Tem certeza que deseja remover {list[listIndex]["name"]}?");
                Console.WriteLine($"As informações relacionadas a {list[listIndex]["name"]} serão perdidas!");
                Ui.DivideLines();

                Ui.ShowOptions([$"Remover {list[listIndex]["name"]}"], "Cancelar");
                Ui.DivideLines();
                
                int confirmRemove = Io.GetNumber();
                if (confirmRemove == 0){return;}
                Ui.DivideLines();

                if(confirmRemove == 1)
                {
                    Console.WriteLine($"{list[listIndex]["name"]} foi removida da lista!");

                    if(listName.Equals("Modelos"))
                    {
                        Io.RemoveBy(vehiclesList, "ID", list[listIndex]["modelID"].ToString());
                    }

                    if(listName == "Montadoras")
                    {
                        Io.RemoveBy(modelsList, "ID", list[listIndex]["ID"].ToString());
                        Io.RemoveBy(vehiclesList, "ID", list[listIndex]["modelID"].ToString());
                    }

                    list.RemoveAt(listIndex);
                }
            }
        }

        public static Dictionary<string, List<Dictionary<string,object>>> LoadFromFile(Dictionary<string, List<Dictionary<string,object>>> DBSaved)
        {
            Console.WriteLine("Carregar um arquivo vai descartar as alteracoes feitas!");
            Console.WriteLine("Deseja continuar?");
            Ui.DivideLines();

            Ui.ShowOptions(new List<string>() {"Carregar Montadoras"},"Cancelar");
            Ui.DivideLines();
            int option = Io.GetNumber("Digite a opcao: ");
            if(option == 1){
                Ui.DivideLines();
                Console.WriteLine("Montadoras Carregadas!");
                return Fmanager.GetDB();
            }

            return DBSaved;
        }

        public static void SaveUpdates(Dictionary<string, List<Dictionary<string,object>>> DBchanged)
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
                Fmanager.SaveList(DBchanged);
            }
            else
            {
                Dictionary<string, List<Dictionary<string,object>>> DBsavedInFile = Fmanager.GetDB();
                Dictionary<string, List<Dictionary<string,object>>> DBtoSave = new();

                DBtoSave.Add("Automakers", Io.SumLists(DBchanged["Automakers"], DBsavedInFile["Automakers"]));
                DBtoSave.Add("Models", Io.SumLists(DBchanged["Models"], DBsavedInFile["Models"]));
                DBtoSave.Add("Vehicles", Io.SumLists(DBchanged["Vehicles"], DBsavedInFile["Vehicles"]));

                Fmanager.SaveList(DBtoSave);
            }
        }
    }
}
