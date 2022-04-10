import { useEffect } from "react";
import { observer } from "mobx-react-lite"
import CardList from "./CardList";
import styles from "./index.module.css"

function MainPage({apartmentState}) {

  useEffect(() => {
    apartmentState.fetchApartments()
  }, [])

  return (
    <div className={styles.container}>
        <CardList 
          apartments={apartmentState.apartments}
        />
    </div>
  );
}

export default observer(MainPage);
