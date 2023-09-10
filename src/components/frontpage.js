import styles from './fpstyle.module.css';
import image from './atvlogo.png'
import { Link } from 'react-router-dom';

function Firstpage(){
    return (
        <body className={styles.background}>
            <div className={styles.holder}>
            <div className={styles.mpholder}>
            <img className={styles.logo1} src={image} alt='nopic'/>
            <Link to='/main' className='linkstyle'>
            <button className={styles.button} >OPEN THE WORLD OF ANIME</button>
            </Link>
            
            </div>
            </div>
        </body>
)
}

export default Firstpage;