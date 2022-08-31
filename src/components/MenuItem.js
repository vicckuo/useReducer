import { MenuStyleItem } from "./MenuItemStyle"

export default function MenuItem(props) {
    return (
        <MenuStyleItem color={"blue"}>{props.children}</MenuStyleItem>
    )
}
