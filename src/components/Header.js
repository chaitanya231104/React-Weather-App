import Place from '../components/Place';
import Search from '../components/Search'
import Settings  from './Settings';
import "../styles/components/Header.scss"
function Header(){
    return <div className="Header">
        <Place />
        <Search />
        <Settings />
    </div>
}

export default Header