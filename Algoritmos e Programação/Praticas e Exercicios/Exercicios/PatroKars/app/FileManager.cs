using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace PatroKars.App
{
    public static class Fmanager
    {
        public static Dictionary<string, List<Dictionary<string,object>>> GetDB(string filePath = "DB\\ProgramDB.JSON")
        {
            string jsonString = File.ReadAllText(filePath);
            JObject jsonObject = JObject.Parse(jsonString);

            //Create a list with Automakers
            JArray automakersArray = (JArray)jsonObject["Automakers"];
            List<Dictionary<string,object>> automakersList = new();
            foreach (var dict in automakersArray)
            {
                Dictionary<string,object> automaker = dict.ToObject<Dictionary<string,object>>();
                automakersList.Add(automaker);
            }

            //Create a list with models
            JArray modelsArray = (JArray)jsonObject["Models"];
            List<Dictionary<string,object>> modelsList = new();
            foreach (var dict in modelsArray)
            {
                Dictionary<string,object> model = dict.ToObject<Dictionary<string,object>>();
                modelsList.Add(model);
            }

            //Create a list with vehicles
            JArray vehiclesArray = (JArray)jsonObject["Vehicles"];
            List<Dictionary<string,object>> vehiclesList = new();
            foreach (var dict in vehiclesArray)
            {
                Dictionary<string,object> vehicle = dict.ToObject<Dictionary<string,object>>();
                vehiclesList.Add(vehicle);
            }

            Dictionary<string, List<Dictionary<string,object>>> DBList = new();
            DBList.Add("Automakers", automakersList);
            DBList.Add("Models", modelsList);
            DBList.Add("Vehicles", vehiclesList);
            return DBList;
        }

        public static void SaveList(Dictionary<string, List<Dictionary<string,object>>> DBtoSave, string filePath = "DB\\ProgramDB.JSON")
        {
            var jsonObject = new
            {
                Automakers = DBtoSave["Automakers"],
                Models = DBtoSave["Models"],
                Vehicles = DBtoSave["Vehicles"]
            };
            string jsonString = JsonConvert.SerializeObject(jsonObject, Formatting.Indented);

            File.WriteAllText(filePath, jsonString);
        }
    }
}