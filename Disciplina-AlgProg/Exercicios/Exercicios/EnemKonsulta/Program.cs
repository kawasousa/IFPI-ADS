using EnemKonsulta.app;

namespace EnemKonsulta
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Enem Konsulta";

            List<Dictionary<string,object>> schools = App.GetSchoolsDict(Fmngr.GetListByFile());

            while(true)
            {
                Console.Clear();
                Ui.ShowTitle("Enem Konsulta");
                Ui.ShowOptions([
                    "Top N Brasil (Geral)","Top N Brasil por área","Top N por estado (Geral)","Top N por estado e rede","Media nacional por área",
                    "Melhor escola (Área e escopo)"
                ],
                "Sair");
                Ui.DivideLines();

                int option = Ui.GetNumber("Digite a operacao: ");
                if(option == 0){return;}

                int rankNumber;
                int scopeIndex;
                string uf = "";
                int typeIndex;
                string area = "";
                int areaIndex;
                List<string> economicStatus = new() {"Muito Alto","Alto","Medio Alto","Medio","Medio Baixo", "Baixo", "Sem informação"};
                List<string> areaList = new() {"Linguagens","Matematica","Ciencias da Natureza","Humanas","Redacao"};
                List<string> ufNameList = new() {
                    "AC","AP","AM","PA","RO","RR","TO","AL","BA","CE","MA","PB","PE","PI","RN","SE",
                    "DF","GO","MT","MS","ES","MG","RJ","SP","PR","RS","SC"
                };
                
                switch (option){
                    case 1:
                        Ui.ShowTitle("Top N Brasil geral");

                        rankNumber = Ui.GetNumber("Digite ate que numero listar: ");
                        Ui.DivideLines();

                        schools = App.QuickSort(schools, "media");

                        Ui.ShowTitle($"Top {rankNumber} Brasil geral");
                        App.ShowRankedList(schools, rankNumber, "media");
                        break;
                    case 2:
                        Ui.ShowTitle("Top N Brasil por area");

                        rankNumber = Ui.GetNumber("Digite ate que numero listar: ");
                        Ui.DivideLines();
                        Ui.ShowOptions(areaList, "");
                        Ui.DivideLines();
                        areaIndex = Ui.GetNumber("Digite a area de conhecimento: ");
                        Ui.DivideLines();

                        schools = App.QuickSort(schools, areaList[areaIndex-1].ToLower());

                        Ui.ShowTitle($"{(rankNumber>1?rankNumber:"")} melhor{(rankNumber>1?"es":"")} escola{(rankNumber>1?"s":"")} em {areaList[areaIndex-1].ToLower()}");
                        App.ShowRankedList(schools, rankNumber, areaList[areaIndex-1].ToLower());
                        break;
                    case 3:
                        Ui.ShowTitle("Top N por estado");

                        rankNumber = Ui.GetNumber("Digite quantas escolas mostrar: ");
                        uf = Ui.GetString("Digite a sigla do estado: ").ToUpper();

                        List<Dictionary<string,object>> ufSchools = Ui.FilterList(schools, (x)=>{return x["uf"].Equals(uf);});

                        if(Ui.ListHasValue(ufNameList,uf))
                        {
                            Ui.ShowTitle($"Top {rankNumber} escolas do {uf}");
                        }                        
                        App.ShowRankedList(ufSchools, rankNumber, "media");
                        break;
                    case 4:
                        Ui.ShowTitle("Top N por estado e rede");

                        rankNumber = Ui.GetNumber("Digite quantas escolas mostrar: ");
                        uf = Ui.GetString("Digite a sigla do estado: ").ToUpper();
                        Ui.DivideLines();
                        List<string> typeList = new() {"Privada","Publica"};
                        Ui.ShowOptions(typeList);
                        Ui.DivideLines();
                        typeIndex = Ui.GetNumber("Escolha a rede: ");

                        schools = App.QuickSort(schools, "media");
                        List<Dictionary<string,object>> ufFilteredList = Ui.FilterList(schools, (x)=>{return x["uf"].Equals(uf);});
                        List<Dictionary<string,object>> typeFilteredList = Ui.FilterList(ufFilteredList, (x)=>{
                            return typeIndex.Equals(1) ? x["rede"].Equals("Privada") : !x["rede"].Equals("Privada");
                        });

                        Ui.ShowTitle($"Top {rankNumber} do {uf} na rede {typeList[typeIndex].ToLower()}");
                        App.ShowRankedList(typeFilteredList, rankNumber, "media");
                        break;
                    case 5:
                        Ui.ShowTitle("Media Nacional por Area");
                        Ui.ShowOptions(areaList);
                        areaIndex = Ui.GetNumber("Escolha a area: ");
                        Ui.DivideLines();

                        area = areaList[areaIndex-1].ToLower();
                        float nationalAverage = Ui.ReduceList(schools, area, (x,y)=>{return (x+y)/2;}, 0f);
                        Ui.DivideLines();
                        
                        Console.WriteLine($"Media nacional em {area}: {Math.Round(nationalAverage, 1)}");
                        break;
                    case 6:
                        Ui.ShowTitle("Melhor escola por Area e Escopo");
                        Ui.ShowOptions(areaList);
                        Ui.DivideLines();

                        areaIndex = Ui.GetNumber("Digite a opção: ");
                        if(areaIndex == 0){continue;}
                        
                        area = areaList[areaIndex-1].ToLower();
                        List<Dictionary<string,object>> sortedList = App.QuickSort(schools, area);

                        Ui.ShowTitle($"Melhor escola em {area}");
                        Console.WriteLine("Filtrar por estado?");
                        Ui.DivideLines();
                        Ui.ShowOptions(["Sim","Não"], "");
                        Ui.DivideLines();

                        scopeIndex = Ui.GetNumber("Digite a opção: ");
                        Ui.DivideLines();

                        if(scopeIndex == 1)
                        {
                            uf = Ui.GetString("Digite a sigla do estado: ").ToUpper();
                            Ui.DivideLines();

                            sortedList = Ui.FilterList(sortedList, (x)=>{return x["uf"].Equals(uf);});
                        }

                        Console.WriteLine($"Melhor escola em {area}{(scopeIndex==1? $" no estado do {uf}" : "")}: {sortedList[0]["nome"]} ({sortedList[0][area]})");
                        break;
                    case 7:
                        Ui.ShowTitle("Ranking escola por renda e estado");

                        uf = Ui.GetString("Digite a sigla do estado: ").ToUpper();

                        sortedList = Ui.FilterList(schools, (x)=>{return x["uf"].Equals(uf);});
                        
                        
                        break;
                    case 8:
                        Ui.ShowTitle("Buscar Escola");

                        string schoolName = Ui.GetString("Digite uma parte do nome da escola: ").ToUpper();

                        List<Dictionary<string,object>> selectedSchools = Ui.FilterList(schools, (x)=>{
                            object objX = (string)x["nome"];
                            string strX = (string)objX;
                            return strX.Contains(schoolName);
                            }
                        );

                        App.QuickSort(selectedSchools, "media");
                        App.ShowRankedList(selectedSchools, selectedSchools.Count, "municipio");
                        break;
                    case 9:
                        Ui.ShowTitle("Ranking ENEM por estado");

                        uf = Ui.GetString("Digite a sigla do estado: ").ToUpper();
                        
                        List<Dictionary<string,object>> ufList = Ui.FilterList(schools, (x)=>{return x["uf"].Equals(uf);});
                        ufList = App.QuickSort(ufList, "media");

                        App.ShowRankedList(ufList, ufList.Count, "municipio");
                        break;
                    case 10:
                        Ui.ShowTitle("Ranking ENEM da região");
                        
                        List<string> regionsNames = new() {"N","NE","CO","SE","S"};
                        Ui.ShowOptions(regionsNames);

                        int regionIndex = Ui.GetNumber("Escolha a região: ");

                        List<string> region = App.GetRegionByName(regionsNames[regionIndex-1]);
                        List<Dictionary<string,object>> regionFilteredList = Ui.FilterList(schools, (x)=>{return Ui.ListHasValue(region, x["uf"]);});

                        App.ShowRankedList(regionFilteredList, regionFilteredList.Count, "municipio");
                        Console.WriteLine($"{regionFilteredList.Count} escolas encontradas.");
                        break;
                }

                Ui.DivideLines();
                Ui.AwaitEnter();
            }

        }
    }
}