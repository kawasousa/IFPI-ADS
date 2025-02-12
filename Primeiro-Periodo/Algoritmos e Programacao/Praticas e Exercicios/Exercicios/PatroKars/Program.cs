using System.Data.Common;
using PatroKars.App;

namespace PatroKars
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "PatroKars";
            Console.ForegroundColor = ConsoleColor.White;
            List<string> options = new()
            {
                "Adicionar Montadora", "Listar Montadoras", "Atualizar Montadora", "Remover Montadora",
                "Adicionar Modelo", "Listar Modelos", "Atualizar Modelo", "Remover Modelos",
                "Adicionar Veiculos", "Listar Veiculos", "Atualizar Veiculo", "Remover Veiculos",
                "", "Carregar de Arquivo","Salvar em Arquivo"
            };
            Dictionary<string, string> dataNames = new()
            {
                { "automaker", "Montadoras" },
                { "model", "Modelos" },
                { "vehicle", "Veiculos" },
            };

            Dictionary<string, List<Dictionary<string,object>>> DBList = new();
            List<Dictionary<string,object>> automakerList = new();
            List<Dictionary<string,object>> modelList = new();
            List<Dictionary<string,object>> vehicleList = new();

            while(true)
            {
                Ui.ShowTitle("Bem Vindo a PatroKars!");
                Ui.ShowOptions(options, "Sair");
                Ui.DivideLines();

                int option = Io.GetNumber("Digite a opção: ");
                if(option == 0)
                {
                    Ui.ShowTitle("Salvar e Sair");
                    Ui.ShowOptions(new List<string>() {"Salvar antes de Sair"}, "Sair sem Salvar");
                    Ui.DivideLines();
                    bool confirmQuit = Io.GetNumber("Digite a opcao: ") == 0;
                    if(confirmQuit)
                    {
                        break;
                    }
                    else
                    {
                        Ui.ShowTitle("Salvar e Sair");
                        
                        Dictionary<string, List<Dictionary<string,object>>> DBtoSave = new();
                        DBtoSave.Add("Automakers", automakerList);
                        DBtoSave.Add("Models", modelList);
                        DBtoSave.Add("Vehicles", vehicleList);
                        Functions.SaveUpdates(DBtoSave);
                        break;
                    }
                }
                
                if(option <= options.Count && option > 0){
                    Ui.ShowTitle(options[option-1]);
                }

                if(option == 1)//Create Automaker
                { 
                    Functions.CreateList(dataNames["automaker"], automakerList);
                }
                else if(option == 2)//List all Automakers
                {
                    Functions.ShowList(automakerList, dataNames["automaker"]);
                }
                else if(option == 3)//Update a automaker info
                {
                    Functions.UpdateList(automakerList, dataNames["automaker"]);
                }
                else if(option == 4)//Remove a automaker
                {
                    Functions.RemoveList(automakerList, dataNames["automaker"], vehicleList, modelList);
                }
                else if (option == 5)//Create Model
                {
                    Functions.CreateList(dataNames["model"], modelList, automakerList);
                }
                else if(option == 6)//Show registered models
                {
                    Functions.ShowList(modelList, dataNames["model"], automakerList);
                }
                else if(option == 7)
                {
                    Functions.UpdateList(modelList, dataNames["model"]);
                }
                else if(option == 8)//Remove a model
                {
                    Functions.RemoveList(modelList, dataNames["model"], vehicleList);
                }
                else if(option == 9)//Create vehicles
                {
                    Functions.CreateList(dataNames["vehicle"], vehicleList, automakerList, modelList);
                }
                else if(option == 10)//List registered vehicles
                {
                    Functions.ShowList(vehicleList, dataNames["vehicle"], automakerList, modelList);
                }
                else if(option == 11)//Update a vehicle
                {
                    Functions.UpdateList(vehicleList, dataNames["vehicle"]);
                }
                else if(option == 12)//Rempve a vehicle
                {
                    Functions.RemoveList(vehicleList, dataNames["vehicle"]);
                }
                else if(option == 14)//Load saved automakers
                {
                    DBList = Functions.LoadFromFile(DBList);

                    automakerList = DBList["Automakers"];
                    modelList = DBList["Models"];
                    vehicleList = DBList["Vehicles"];

                }else if (option == 15)//Save automakers in file
                {
                    Dictionary<string, List<Dictionary<string,object>>> DBtoSave = new();
                    DBtoSave.Add("Automakers", automakerList);
                    DBtoSave.Add("Models", modelList);
                    DBtoSave.Add("Vehicles", vehicleList);
                    Functions.SaveUpdates(DBtoSave);
                }

                Io.AwaitEnter();

            }

        }
    }
}

