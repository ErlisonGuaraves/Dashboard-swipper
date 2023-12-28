import Tutorial from "../Tutorial";
import styles from "./styles.module.css"


const Main = ({children}) =>{

    return(
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default Main;