import styles from "./index.module.css"
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";


function Header(){
    return(
        <div className={styles.container}>
            <Link to="/" style={{textDecoration: "none", color: "rgba(0, 0, 0, 0.87)"}}>
                <Typography variant="h4">
                    Header
                </Typography>
            </Link>
        </div>
    )
}

export default Header