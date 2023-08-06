import {Link, Outlet} from "react-router-dom"

function Layout() {

    return (
        <div>
            <nav>
                <Link to="/"> Ana sayfa </Link>
                <Link to="/blogs">Blog Yazıları</Link>
                <Link to="/contact">İletişim</Link>
            </nav>
            
            <Outlet />
            Şablon componenti
        </div>
    )
}

export default Layout