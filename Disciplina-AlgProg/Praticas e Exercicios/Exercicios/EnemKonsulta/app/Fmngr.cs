namespace EnemKonsulta.app
{
    public static class Fmngr
    {
        public static List<List<string>> GetListByFile(string filePath = "db\\enem2014_nota_por_escola.csv")
        {
            List<List<string>> list = new();

            List<string> schoolList = File.ReadAllLines(filePath).ToList();
            foreach (string school in schoolList)
            {
                list.Add(school.Split(";").ToList());
            }

            return list;
        }
    }
}