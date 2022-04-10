import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { convertDate } from "../utils";
import styles from "./index.module.css"

function DetailPage({apartmentState}) {

    const [apartment, setApartment] = useState({})
    const params = useParams()

    useEffect(() => {

        apartmentState.findApartmentById(parseInt(params.id, 10))
        .then(apartment => setApartment(apartment))

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img 
                    className={styles.img}
                    src={apartment.imageUrl}
                />
            </div>
            <div className={styles.wrapper}>
                <Typography className={styles.text}>Name: {apartment.name}</Typography>
                <Typography className={styles.text}>location: {`${apartment.city}, ${apartment.street}, ${apartment.house}`}</Typography>
                <Typography className={styles.text}>Price: {apartment.price}</Typography>
                <Typography className={styles.text}>AvailableFrom: {convertDate(apartment.availableFrom)}</Typography>
                <div className={styles.buttonContainer}>
                    <Button variant="contained" onClick={() => alert("Booked!")}>Book</Button>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Button>Back</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default DetailPage;
  