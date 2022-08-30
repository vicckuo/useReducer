import { useState } from "react";
import MenuItem from "../components/MenuItem";

export default function MenuPage() {
    const [text, setText] = useState('在children中設定文字')
    return (
        <div>
            <button onClick={() => {
                setText(Math.floor(Math.random() * 10))
            }}
            >
                隨機設定MenuItem的文字
            </button>
            <MenuItem>{text}</MenuItem>
        </div>
    )
}
