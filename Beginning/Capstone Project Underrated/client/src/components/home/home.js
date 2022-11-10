import { Footer } from "../shared/footer/footer"
import { NavBar } from "../shared/nav-bar/nav-bar"
import { AboutUs } from "./sections/about/about-us"
import { ContactUs } from "./sections/contact/contact-us"
import { FloatingButton } from "../shared/util/floating-button/floating-button"

export const Home = () => {
    return (
        // --------------------------------------------- Home Section ---------------------------------------------
        <>
            <NavBar />
            <HomeContent />
            <AboutUs />
            <ContactUs />
            <Footer />
            <FloatingButton />
        </>
    )
}

const HomeContent = () => {
    return (
        <section id="home"  >
            <div className="p-5 bg-dark bg-opacity-75">
                <main className="container p-5">
                    <div className="p-xl-5 col-12 col-xl-4 bg-secondary bg-opacity-25 p-5 m-md-5">
                        <p className="fs-5 text-white">Underrated is a application where tourists
                            put thier openions about resturants, cafes, libraries, etc...</p>
                        <p className="fs-5 text-white">So feel free to join us and start upload your
                            reels to share your openions</p>
                    </div>
                </main>
            </div>
        </section>
    )
}