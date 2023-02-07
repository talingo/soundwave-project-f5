import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

type Props = {}

const Layout = (props: Props) => {
    return (
        <>
        <Navigation/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
        </>
    )
}
export default Layout