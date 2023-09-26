
import { Link } from 'react-router-dom';

function Mainpage()
{
    return(<div>
        <h1>THIS IS THE MAIN PAGE</h1>
        <Link to='/'>
            <button >OPEN THE WORLD OF ANIME</button>
        </Link>
        </div>
    )
}

export default Mainpage;