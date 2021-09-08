import { useState } from 'react';
import "./Dropdown.css"

export default function Dropdown({variant, children}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="dropdown-wrap">
            <button className={`dropdown-btn ${variant}`} onClick={() => setOpen(prev => !prev)}>{children}</button>
            {open && <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
            </ul>}
        </div>
    )
}