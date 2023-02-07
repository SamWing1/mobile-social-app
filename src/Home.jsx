import { useLocation } from "react-router-dom";
import { useState } from 'react';
import './Home.css'

const otherPage = ['/Notifications', '/Messages', '/Profile']

export default function Home() {
const {pathname} = useLocation();

if (otherPage.some((item) => pathname.includes(item))) return null;

    return(
        <>
            <h1>Home</h1>
            <div class='createpost'>
            <label>img
                <input type="string" name="content" value='' placeholder="What's happening?"></input>
            </label>
            <button>tweet</button>
            </div>
        </>
    )
}