class Circulo {
    public raio: number;

    public CalcularArea(): number {
        const pi: number = 3.14;
        return this.raio**2 * pi;
    }
    
    public CalcularPerimetro(): number {
        const pi: number = 3.14;
        return 2 * pi * this.raio;
    }
}

function main(): void {
    const circulo: Circulo = new Circulo();
    circulo.raio = 10;
    const area: number = circulo.CalcularArea();
    const perimetro: number = circulo.CalcularPerimetro();

    //Saída
    console.log(`Área do círculo: ${area}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}
main();