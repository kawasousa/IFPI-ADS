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
                    options.Add((string)dict["name"]);
                }

                Console.WriteLine("Montadora");
                Ui.DivideLines();
                Ui.ShowOptions(options);
                Ui.DivideLines();

                int automakerIndex = Io.GetNumber("Digite o numero da montadora: ");
                if(automakerIndex == 0){return;}
                Ui.DivideLines();

                string automakerID = (string)automakersList[automakerIndex-1]["ID"];

                newDict.Add("automakerID", automakerID);
            }

            if(listName == "Veiculos")
            {
                List<string> options = new();
                foreach(Dictionary<string,object> dict in modelsList)
                {
                    options.Add((string)dict["name"]);
                }
                Ui.ShowTitle("Adicionar Veiculos");
                Console.WriteLine("Modelo");
                Ui.DivideLines();
                Ui.ShowOptions(options);
                Ui.DivideLines();

                int modelIndex = Io.GetNumber("Digite o numero do modelo: ");
                string modelID = (string)modelsList[modelIndex-1]["ID"];

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

        public static void ShowList(List<Dictionary<string,object>> list, string listName, List<Dictionary<string,object>> automakersList = null, List<Dictionary<string,object>> modelsList = null)
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

            //Show list details
            if(option == 1)
            {
                Ui.ShowTitle($"Detalhar {listName}");
                foreach(Dictionary<string,object> dict in list)
                {
                    Console.WriteLine($"Nome: {dict["name"]}");
                    foreach(string key in dict.Keys)
                    {
                        string translatedKey = "";
                        if(Io.GetTranslatedKeys(listName).ContainsKey(key))
                        {
                            translatedKey = Io.GetTranslatedKeys(listName)[key];
                        }
                        if(!key.Equals("name") && !key.Equals("ID"))
                        {
                            if(key.Equals("modelID"))
                            {
                                Dictionary<string,object> model = Io.FilterBy(modelsList, "ID", (x)=>{return x.Equals(dict["modelID"]);})[0];
                                Console.WriteLine($"    Modelo: {model["name"]}");
                            }
                            else if(key.Equals("automakerID"))
                            {
                                Dictionary<string,object> automaker = Io.FilterBy(automakersList, "ID", (x)=>{return x.Equals(dict["automakerID"]);})[0];
                                Console.WriteLine($"    Montadora: {automaker["name"]}");
                            }
                            else
                            {
                                Console.WriteLine($"    {translatedKey}: {dict[key]}");
                            }
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

        public static List<Dictionary<string,object>> FilterList(List<Dictionary<string,object>> list, List<string> filterKey = null, Dictionary<string,string> values = null)
        {
            filterKey ??= new();
            values ??= new();

            Ui.ShowTitle("Filtrar por");
            Ui.ShowOptions(values.Values.ToList());
            Ui.DivideLines();

            int infoIndex = Io.GetNumber();
            if(infoIndex == 0){return list;}
            
            string infoValue = null;
            if(values.Count > 0)
            {
                infoValue = values.Keys.ToList()[infoIndex-1].ToLower();
                string infoKey = values.Values.ToList()[infoIndex-1].ToLower();
                filterKey.Add(Io.GetString($"Digite o {infoKey}: "));
                filterKey.Add(infoKey);
            }

            if(infoValue == "automaker")
            {
                // Dictionary<string,object> automaker = Io.FilterBy(automakersList, "ID", (x)=>{return x.Equals(dict["automakerID"]);})[0];
                // infoValue = (string)automaker["name"];
            }

            return Io.FilterBy(list, infoValue, x => Io.StringContains(filterKey[0], x));
        }

        public static void UpdateList(List<Dictionary<string,object>> list, string listName)
        {
            if (list.Count == 0)
            {
                Console.WriteLine($"Cadastre {listName.ToLower()} antes de atualiza-las!");
                return;
            }

            //List automakers names as options
            Io.ShowListAsOptions(list);
            Ui.DivideLines();

            //Choose the automaker to be updated
            int listIndex = Io.GetNumber($"Digite numero da {listName}: ");
            if(listIndex == 0){return;}
            Dictionary<string,object> dictToUpdate = list[listIndex-1];

            //List automaker infos to be updated
            Ui.ShowTitle("Editar " + dictToUpdate["name"].ToString());
            List<string> infoOptions = Io.GetTranslatedKeys(listName).Values.ToList(); 

            Ui.ShowOptions(infoOptions, "Cancelar");
            Ui.DivideLines();

            //Choose the automaker info to be updated
            int keyIndex = Io.GetNumber("Digite o numero da informação a ser atualizada: ");
            if(keyIndex == 0){return;}

            //Select key based on received option
            string key = "";
            int i = 0;
            foreach(string dictKey in dictToUpdate.Keys)
            {
                if(!dictKey.Contains("ID"))
                {
                    if(i == keyIndex-1){break;}
                    key = dictKey;
                    i++;
                }
            }

            if(key.Equals(""))
            {
                Console.WriteLine("Funcao em desenvolvimento!");
                return;
            }

            //Get new info to update automaker
            Ui.ShowTitle($"Editar {infoOptions[keyIndex-1]} de {dictToUpdate["name"]}");

            if(!infoOptions[keyIndex-1].Equals("Montadora") && !infoOptions[keyIndex-1].Equals("Modelo"))
            {
                Console.WriteLine($"{infoOptions[keyIndex-1]} atual: {dictToUpdate[key]}.");
                Ui.DivideLines();
                string newValue = Io.GetString($"Digite o novo {infoOptions[keyIndex-1].ToLower()}: ");

                //Transform new value based on current value type
                if(dictToUpdate[key].GetType().Equals(typeof(string)))
                {
                    list[listIndex-1][key] = newValue;
                }
                if(dictToUpdate[key].GetType().Equals(typeof(System.Int64)))
                {
                    int intNewValue = int.Parse(newValue);
                    list[listIndex-1][key] = intNewValue;
                }
                else if(dictToUpdate[key].GetType().Equals(typeof(bool)))
                {
                    
                }
                Ui.DivideLines();
                Console.WriteLine($"O {infoOptions[keyIndex-1].ToLower()} de {dictToUpdate["name"]} foi atualizado para {newValue}!");
            }
            else{
                Console.WriteLine("Funcao em Desenvolvimento!");
                return;
            }


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
                        Io.RemoveBy(vehiclesList, "modelID", (string)list[listIndex]["ID"]);
                    }
                    else if(listName.Equals("Montadoras"))
                    {
                        Io.RemoveBy(modelsList, "automakerID", (string)list[listIndex]["ID"]);
                        Io.RemoveBy(vehiclesList, "automakerID", (string)list[listIndex]["ID"]);
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
