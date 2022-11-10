import { useState } from "react"

import { Dropdown } from "../dropdown/dropdown"

export const MenuItems = ({ items, key, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false)

    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{" "}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown key={key} submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                </>
            ) : (
                <></>
            )}
        </li>
    )
}

export const menuItems = [{
    title: 'web development',
    url: 'web-dev',
    submenu: [
        {
            title: 'Frontend',
            url: 'frontend',
        },
        {
            title: 'Backend',
            submenu: [
                {
                    title: 'NodeJS',
                    url: 'node',
                },
                {
                    title: 'PHP',
                    url: 'php',
                },
            ],
        },
    ],
}]