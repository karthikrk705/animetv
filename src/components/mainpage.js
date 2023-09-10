import styles from './fpstyle.module.css';
import { Link } from 'react-router-dom';

function Mainpage()
{
    return(<div>
        <h1>THIS IS THE MAIN PAGE</h1>
        <Link to='/'>
            <button className={styles.button} >OPEN THE WORLD OF ANIME</button>
        </Link>
        </div>
    )
}

export default Mainpage;