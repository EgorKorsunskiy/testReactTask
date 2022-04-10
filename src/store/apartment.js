import { makeAutoObservable } from "mobx";

export class Apartment{
    uuid = 0
    name = ""
    city = ""
    street = ""
    house = ""
    imageUrl = ""
    price = ""
    availableFrom = ""

    constructor(apartment){
        Object.assign(this, apartment)

        makeAutoObservable(this);
    }
}