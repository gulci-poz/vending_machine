class Quarter {
    // w obu przypadkach możemy pominąć typ zmiennej,
    // i tak będą one miały przypisany typ, bo zadziała type inference
    private value: number = .25;
    get Value() {
        return this.value;
    }
    set Value(newValue: number) {
        this.value = newValue;
    }
    getImageUrl (): string {
        return "img/Quarter.png";
    }
}

// zmienna typu Quarter
//var coin = new Quarter();

// dostęp do właściwości za pomocą gettera/settera
//var value = coin.Value;
//coin.Value = .5;