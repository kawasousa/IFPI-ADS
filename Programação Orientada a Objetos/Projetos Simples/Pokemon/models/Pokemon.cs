namespace Pokemon.models
{
    public class Pokemon
    {
        private int ID;
        private string name;
        private int level;
        private List<Move> moves;
        private int maxHP;
        private int hp;
        private Pokemon evolution;
    }
}