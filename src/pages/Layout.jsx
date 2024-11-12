import NavBar from "./NavBar"
import Footer from "./Footer"
import {Outlet }from "react-router-dom"

export default function Layout(){
    return(
        <div className="Container mx-auto">
          <header>
          <NavBar/>
          

          </header>
          
          <main>
            <Outlet/>
          </main>
          <div>
            <Footer/>
          </div>
        </div>
    )
}