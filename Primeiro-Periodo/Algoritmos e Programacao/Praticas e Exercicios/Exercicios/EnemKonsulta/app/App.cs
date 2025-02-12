namespace EnemKonsulta.app
{
    public static class App
    {
        //Sort a list based on received info
        public static List<Dictionary<string,object>> QuickSort(List<Dictionary<string,object>> list, string dataName, bool reverse = false)
        {
            if(list.Count <= 1){return list;}
            
            object objPivot = list[0][dataName];
            float pivot = (float)objPivot;

            List<Dictionary<string,object>> leftList = new();
            List<Dictionary<string,object>> rightList = new();

            for(int i = 1; i < list.Count; i++)
            {
                object objItem = list[i][dataName];
                float item = (float)objItem;

                if(reverse)
                {
                    if(pivot > item){
                        leftList.Add(list[i]);
                    }
                    else
                    {
                        rightList.Add(list[i]);
                    }
                }
                else
                {
                    if(pivot < item){
                        leftList.Add(list[i]);
                    }
                    else
                    {
                        rightList.Add(list[i]);
                    }
                }
            }

            List<Dictionary<string,object>> pivotList = new() {list[0]};

            //Sort list if they has itens
            if(leftList.Count > 0 && rightList.Count > 0)
            {
                leftList = QuickSort(leftList, dataName, reverse);
                rightList = QuickSort(rightList, dataName, reverse);
            }

            //SortedList is leftList + pivotList + RightList
            List<Dictionary<string,object>> sortedList = [.. leftList, .. pivotList, .. rightList];

            return sortedList;
        }

        //Show items of a received list with his position
        public static void ShowRankedList(List<Dictionary<string,object>> list, int rankNumber, string dataIndex)
        {
            if(list.Count == 0){return;}
            if(rankNumber > list.Count){rankNumber = list.Count;}

            for(int i = 0; i < rankNumber; i++)
            {
                Console.WriteLine($"{(i<9 ? "0" : "")}{i+1} - {list[i]["nome"]}: {list[i][dataIndex]}");
            }
        }

        //Show itens of a received list
        public static void ShowList(List<Dictionary<string,object>> list, string info, string dataIndex)
        {
            foreach(Dictionary<string,object> item in list)
            {
                Console.WriteLine($"{info}: {item[dataIndex]}");
            }
        }

        public static List<Dictionary<string,object>> GetSchoolsDict(List<List<string>> schoolList)
        {
            List<Dictionary<string,object>> schoolsDict = new();

            foreach(List<string> school in schoolList)
            {
                Dictionary<string,object> schoolInfo = new() {
                    {"nome", school[1]},
                    {"municipio", school[2]},
                    {"uf", school[3]},
                    {"rede", school[4]},
                    {"permanencia", school[5]},
                    {"nivel socio economico", school[6]},
                    {"media", float.Parse(school[7])},
                    {"linguagens", float.Parse(school[8])},
                    {"matematica", float.Parse(school[9])},
                    {"ciencias da natureza", float.Parse(school[10])},
                    {"humanas", float.Parse(school[11])},
                    {"redacao", float.Parse(school[12])},
                };

                schoolsDict.Add(schoolInfo);
            }

            return schoolsDict;
        }

        public static List<string> GetRegionByName(string regionName)
        {
            Dictionary<string,List<string>> regions = new Dictionary<string, List<string>>
            {
                {"N", new() {"AC","AP","AM","PA","RO","RR","TO"}},
                {"NE", new() {"AL","BA","CE","MA","PB","PE","PI","RN","SE"}},
                {"CO", new() {"DF","GO","MT","MS"}},
                {"SE", new() {"ES","MG","RJ","SP"}},
                {"S", new() {"PR","RS","SC"}}
            };

            return regions[regionName];
        }
    }
}