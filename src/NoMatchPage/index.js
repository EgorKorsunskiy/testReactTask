import { Typography } from "@mui/material"
import styles from "./index.module.css"

function NoMatchPage(){
    return(
        <div className={styles.container}>
            <Typography variant="h1">
                Page does not exist :(
            </Typography>
        </div>
    )
}

export default NoMatchPage