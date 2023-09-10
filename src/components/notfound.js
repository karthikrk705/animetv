import { Link } from 'react-router-dom';
function Notfound()
{
    return(
        <>
        <h1>PAGE NOT FOUND</h1>
        <Link to='/'>BACK TO HOME PAGE</Link>
        </>
    )
}

export default Notfound;