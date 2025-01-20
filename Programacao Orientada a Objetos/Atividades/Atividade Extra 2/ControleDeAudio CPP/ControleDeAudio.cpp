

class ControleDeAudio
{
private:
    float volume;

public:
    ControleDeAudio()
    {
        volume = 2;
    }

    void AumentarVolume()
    {
        if (this->volume < 10) {
            this->volume++;
        }
    }

    void DiminuirVolume()
    {
        if (this->volume > 0)
        {
            this->volume--;
        }
    }

    float LerVolume(){
        return this->volume;
    }
};