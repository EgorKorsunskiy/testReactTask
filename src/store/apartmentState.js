import { makeAutoObservable } from "mobx";
import { Apartment } from "./apartment";

export class ApartmentState{
    _getAllUrl = "http://localhost:3000/mockedData.json"
    _getOneUrl = "http://localhost:3000/mockedData.json"
    _apartments = []

    constructor(){

        makeAutoObservable(this)
    }

    fetchApartments(){
        fetch(this._getAllUrl)
        .then(response => response.json())
        .then(data => {
            this._apartments = []

            data.forEach(el => {
                console.log(el)
                this._apartments.push(new Apartment({
                    uuid: el.uuid,
                    name: el.name,
                    price: el.price,
                    imageUrl: el.image,
                    city: el.location.city,
                    street: el.location.street,
                    house: el.location.house,
                    availableFrom: el.availableFrom 
                }))
            })
        })
        .catch(err => alert("Something went wrong!"))
    }

    async findApartmentById(id){
        const response = await fetch(this._getOneUrl)
        const data = await response.json()
 
        const apartment = data.filter(el => el.uuid === id)[0]

        return new Apartment({
                    uuid: apartment.uuid,
                    name: apartment.name,
                    price: apartment.price,
                    imageUrl: apartment.image,
                    city: apartment.location.city,
                    street: apartment.location.street,
                    house: apartment.location.house,
                    availableFrom: apartment.availableFrom 
        })
    }

    get apartments(){
        return this._apartments
    }
}