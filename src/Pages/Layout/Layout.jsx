import RandomImage from "../RandomImage/RandomImage"
import Footer from "../footer/Footer"

function Layout() {
    return (
        <>
            <div className="container">

                <div style={{ height: '90vh' }}>
                    <RandomImage />
                </div>
            </div>
            <div style={{ height: '10vh' }}>
                <Footer />
            </div>
        </>
    )
}

export default Layout