import { Link } from 'react-router-dom'


function Header (){
    return(
        <>
        <h1>MY TOUR APP</h1>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        </>
    )
}


export default Header;