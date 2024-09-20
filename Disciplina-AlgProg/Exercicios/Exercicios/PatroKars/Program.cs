using PatroKars.Application;

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
                "Criar nova Montadora", "Listar montadoras", "Atualizar Montadora",
                "Remover Montadora","Carregar de Arquivo","Salvar em Arquivo"
            };
            List<Dictionary<string,object>> automakerList = new List<Dictionary<string,object>>();

            while(true)
            {
                Ui.ShowTitle("PatroKars");
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
                        option = 7;
                    }
                }
                
                if(option <= options.Count && option > 0){
                    Ui.ShowTitle(options[option-1]);
                }

                if(option == 1)//Create Automaker
                { 
                    Dictionary<string,object> automaker = Functions.CreateAutomaker();
                    automakerList.Add(automaker);
                }
                else if(option == 2)//List all Automakers
                {
                    Functions.ListAutomakers(automakerList);
                }
                else if(option == 3)//Update a automaker info
                {
                    Functions.UpdateAutomaker(automakerList);
                }
                else if(option == 4)//Remove a automaker
                {
                    Functions.RemoveAutomaker(automakerList);
                }
                else if(option == 5)//Load saved automakers
                {
                    automakerList = Functions.LoadFromFile(automakerList);

                }else if (option == 6)//Save automakers in file
                {
                    Functions.SaveUpdates(automakerList);
                }

                Io.AwaitEnter();

            }

        }
    }
}

