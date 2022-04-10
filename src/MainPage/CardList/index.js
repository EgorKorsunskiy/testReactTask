import React from "react"
import CustomCard from "./Card"

function CardList({apartments}){

    const generateCards = () => {
        const Elements = []

        apartments.forEach((el, index) => {
            Elements.push(
                <CustomCard 
                    el={el}
                    index={index}
                />
            )
        })

        return Elements
    }

    return (
        <React.Fragment>
            {generateCards()}
        </React.Fragment>
    )
}

export default CardList