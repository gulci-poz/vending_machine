/// <reference path="coin.ts" />


class VendingMachine {
    private paid = 0;

    /*
    // this odnosi się do obiektu, który wywołuje funkcję,
    // przy przypisaniu do zmiennej będzie to machine (bootstrapper.ts),
    // gdyż tworzymy nowy obiekt używając new,
    // ale samo wywołanie sprawi, że this będzie wskazywała na window
    acceptCoin (coin: Quarter): void {
        this.paid += coin.Value;
    }
    */

    // arrow function (lambda)

    // this powstaje przy tworzeniu funkcji,
    // wskazuje na obiekt, w którym znajduje się funkcja,
    // tutaj jest to obiekt typu VendingMachine)

    // bez {} musimy coś zwrócić
    acceptCoin = (coin: Quarter): void => {
        this.paid += coin.Value;
    }
}