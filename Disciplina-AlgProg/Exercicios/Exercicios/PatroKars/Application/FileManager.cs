using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace PatroKars.Application
{
    public static class Fmanager
    {
        public static List<Dictionary<string,object>> GetList(string filePath = "DB\\ProgramDB.JSON")
        {
            string jsonString = File.ReadAllText(filePath);
            JObject jsonObject = JObject.Parse(jsonString);
            JArray automakersArray = (JArray)jsonObject["Automakers"]; // -> "Automakers" as key return Automakers DB, change to Models to get car models DB

            List<Dictionary<string,object>> automakersList = new();
            foreach (var dict in automakersArray)
            {
                Dictionary<string,object> automaker = dict.ToObject<Dictionary<string,object>>();
                automakersList.Add(automaker);
            }

            return automakersList;
        }

        public static void SaveList(List<Dictionary<string,object>> list, string filePath = "DB\\ProgramDB.JSON")
        {
            var jsonObject = new
            {
                Automakers = list
            };
            string jsonString = JsonConvert.SerializeObject(jsonObject, Formatting.Indented);

            File.WriteAllText(filePath, jsonString);
        }
    }
}