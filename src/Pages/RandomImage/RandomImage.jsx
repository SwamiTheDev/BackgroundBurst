import { useState } from 'react';
import './RandomImage.css';
export default function RandomImage() {

    const urlInit = "https://source.unsplash.com/random/1920x1080";
    const [url, changeUrl] = useState(urlInit);

    return (
        <>
            <div className="container ">
                <h3 className="mt-4 mb-2">Random Image</h3>
                <p className="mb-3 ps-2 pe-2">BackgroundBurst is an innovative background generator that generates backgrounds that will make your pictures stand out from the competition</p>
                {true ? (
                    <img
                        src={url}
                        alt="your wallpaper"
                        className="mainImage"
                    />
                ) : (
                    "Loading Your Image :)"
                )
                }
                <br />
                <button
                    className="btn41-43 btn-42 mt-3"
                    onClick={() => {
                        changeUrl(`${urlInit}?random=${Math.random()}`);
                    }}
                >
                    New Wallpaper
                </button>
            </div>
        </>
    )
}