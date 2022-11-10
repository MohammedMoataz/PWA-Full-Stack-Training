import { Footer } from "./footer/footer"
import { NavBar } from "./nav-bar/nav-bar"
import { AboutUs } from "./about/about-us"
import { ContactUs } from "./contact/contact-us"
import { FloatingButton } from "./utilities/floating-button"

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
                <main className="container p-page">
                    <div className="p-0 p-xl-5 col-12 col-xl-4 bg-secondary bg-opacity-25 p-4">
                        <p className="fs-5 text-white">You have to be burning with an idea, or a proble, or a wrong that you want to
                            right. If you're not passionate enough from the start, you'll never stick it out</p>
                        <p className="fs-5 text-end">-Steve Jobs</p>
                    </div>
                </main>
            </div>
        </section>
    )
}