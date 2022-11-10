import React, { useState } from "react"

import { NavBar } from "../shared/nav-bar/nav-bar"
import { Footer } from "../shared/footer/footer"
import { getReels } from "../../apis/index"

export const Reels = () => {
    const [reels, setReels] = useState([])

    const reload = async () => {
        await getReels()
            .then(res => {
                console.log(res.data.reels)
                setReels(res.data.reels)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <NavBar />
            <header>
                <button className='bg-warning border-0' onClick={reload}>Reload</button>
                <h2>Reels</h2>
            </header>
            <section>
                {reels.map(reel => {
                    return <ul>
                        <li key={reel.id}>
                            <div>
                                <img src={reel.photo} alt="..." />
                                <p>Caption: {reel.caption}</p>
                                <p>Date: {reel.date}</p>
                                <p>Location: {reel.location}</p>
                            </div>
                        </li>
                        <hr />
                    </ul>
                })}
            </section>
            <Footer />
        </>
    )
}