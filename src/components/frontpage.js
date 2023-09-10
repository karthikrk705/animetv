import styles from './fpstyle.css';
import image from './atvlogo.png'

function Firstpage(){
    return (<>
    <div id='mpholder'>
        <img id='logo1' src={image} alt='nopic'/>
        <button id='button' >OPEN THE WORLD OF ANIME</button>
    </div>
    </>
)
}

export default Firstpage;