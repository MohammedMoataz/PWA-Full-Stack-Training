import { useNavigate } from "react-router-dom"

import { Footer } from "../shared/footer/footer"
import { NavBar } from "../shared/nav-bar/nav-bar"
import { FloatingButton } from "../shared/util/floating-button/floating-button"

export const Account = () => {
    const navigate = useNavigate()

    const goMakeReel = () => navigate('/createreel')

    const AccountContent = () => {
        let userPhoto = sessionStorage.getItem("photo").replaceAll('\\', '/')
        let userName = sessionStorage.getItem("name")
        let userEmail = sessionStorage.getItem("email")
        let userPassword = sessionStorage.getItem("password")
        let userCountry = sessionStorage.getItem("country")

        console.log('photo: ', userPhoto)
        console.log('name: ', userName)
        console.log('email: ', userEmail)
        console.log('password: ', userPassword)
        console.log('country: ', userCountry)

        return (
            <section>
                <header>
                    <img src={userPhoto} alt="..." />
                    <p>{userName}</p>
                    <p>{userEmail}</p>
                    <p>{userCountry}</p>
                </header>
                <hr />
                <article>
                    <button className='bg-warning border-0' onClick={goMakeReel}>Create Reel</button>
                    <h2>Your reels</h2>
                    <img src="" alt="..." />
                    <p>caption</p>
                    <p>date</p>
                    <p>location</p>
                </article>
            </section>
        )
    }

    return (
        // --------------------------------------------- Home Section ---------------------------------------------
        <>
            <NavBar />
            <AccountContent />
            <Footer />
            <FloatingButton />
        </>
    )
}
