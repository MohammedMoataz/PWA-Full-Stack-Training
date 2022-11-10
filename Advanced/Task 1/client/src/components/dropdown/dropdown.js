import { MenuItems } from "../menuItems/menuItems"

export const Dropdown = ({ key, submenus, dropdown, depthLevel }) => {
    depthLevel++
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems key={key} submenu={submenu} depthLevel={depthLevel} />
            ))}
        </ul>
    )
}
