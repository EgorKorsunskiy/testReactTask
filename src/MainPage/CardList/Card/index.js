import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { convertDate } from "../../../utils"


function CustomCard({el, index}){

    return (
        <Card key={index} sx={{
            width: "30vw",
            minWidth: "350px",
            height: "450px",
            margin: "7px"
        }}>
            <CardMedia 
                component="img"
                image={el.imageUrl}
                alt="apartment photo"
                sx={{
                    height: "65%"
                }}
            />
            <CardContent>
                <Typography>
                    Name: {el.name}
                </Typography>
                <Typography>
                    Price: {el.price}
                </Typography>
                <Typography>
                    availableFrom: {convertDate(el.availableFrom)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/detail/${el.uuid}`} style={{textDecoration: "none"}}>
                    <Button>See more</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CustomCard