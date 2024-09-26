using EnemKonsulta.app;

namespace EnemKonsulta
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Enem Konsulta";
            Console.Clear();
            Ui.ShowTitle("Enem Konsulta");

            List<List<string>> schools = Fmngr.GetListByFile();

            while(true)
            {
                int option = Ui.GetNumber("Digite a operacao: ");
                int.Parse("");
                
                switch (option){
                    case 1:
                        Ui.ShowTitle("Top N Brasil geral");
                        int rankNumberBr = Ui.GetNumber("Digite ate que numero listar: ");
                        schools = Ui.QuickSort(schools, 7);
                        Ui.ShowRankedList(schools, rankNumberBr, 7);
                        break;
                    case 2:
                        Ui.ShowTitle("Top N Brasil por area");
                        
                        int rankNumberArea = Ui.GetNumber("Digite ate que numero listar: ");
                        int areaIndex = Ui.GetNumber("Digite a area de conhecimento: ");

                        schools = Ui.QuickSort(schools, areaIndex);
                        Ui.ShowRankedList(schools, rankNumberArea, areaIndex);
                        break;
                    case 3:
                        Ui.ShowTitle("Top N por estado");

                        int rankNumberUf = Ui.GetNumber("Digite quantas escolas mostrar: ");
                        string uf = Ui.GetString("Digite a sigla do estado: ").ToUpper();
                        
                        List<List<string>> ufSchools = Ui.FilterList(schools, (x)=>{return x[3].Equals(uf);});
                        Ui.ShowRankedList(ufSchools, rankNumberUf, 7);
                        break;
                    case 4:
                        Ui.ShowTitle("Top N por estado e rede");

                        int rankNumberUfType = Ui.GetNumber("Digite quantas escolas mostrar");
                        string ufSchool = Ui.GetString("Digite a sigla do estado: ");
                        int ufTypeSchool = Ui.GetNumber("Digite 1 para rede privada e 2 para rede publica");

                        List<List<string>> ufTypeSchoolsUf = Ui.FilterList(schools, (x)=>{return x[3].Equals(ufSchool);});
                        // List<List<string>> ufTypeSchoolsType = Ui.FilterList(ufTypeSchoolsUf, (x)=>{return x[].Equals(uf);});
                        break;
                    case 5:
                        Ui.ShowTitle("Media Nacional por Area");
                        int averageArea = Ui.GetNumber("Digite o numero da area: ");
                        
                        float nationalAverage = Ui.ReduceList(schools, averageArea, (x,y)=>{return (x+y)/2;}, 0f);
                        Console.WriteLine($"Media: {nationalAverage}");
                        break;
                    case 6:
                        Ui.ShowTitle("Melhor escola por Area");
                        break;
                    case 8:
                        Ui.ShowTitle("Buscar Escola");

                        string schoolName = Ui.GetString("Digite uma parte do nome da escola: ").ToUpper();

                        List<List<string>> selectedSchools = Ui.FilterList(schools, (x)=>{return x[1].Contains(schoolName);});

                        Ui.ShowRankedList(selectedSchools, selectedSchools.Count, 7);
                        break;
                    case 9:
                        Ui.ShowTitle("Ranking ENEM por estado");

                        string ufRankUf = Ui.GetString("Digite a sigla do estado: ").ToUpper();
                        
                        List<List<string>> ufList = Ui.FilterList(schools, (x)=>{return x[3].Equals(ufRankUf);});
                        List<List<string>> ufRankedList = Ui.QuickSort(ufList, 7);
                        Ui.ShowRankedList(ufRankedList, ufRankedList.Count, 7);
                        break;
                }

                Ui.AwaitEnter();
            }

        }
    }
}