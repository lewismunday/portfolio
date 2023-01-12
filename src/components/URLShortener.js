import Navbar from "./Navbar";
import Footer from "./Footer";
import {Icon} from "@iconify/react/dist/iconify";
import {Button} from "@material-tailwind/react";


export default function URLShortener() {
    const handleClick = () => {
        let button = document.getElementById("btn");
        button.classList.add("animate-pulse");
        button.classList.add("bg-indigo-500");
        button.classList.add("text-white");
        button.classList.add("border-transparent");
        button.classList.add("hover:bg-indigo-600");
        button.classList.add("hover:border-transparent");
        button.innerHTML = "Shortening...";
        const longURL = document.getElementById("url").value;
        // Create an API post request to "https://api.mun.day/shorten" with the longURL as the body.
        fetch("https://www.w2.fyi/api/shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: longURL
            })
        })
        .then(response => response.json())
        .then(data => {
            // Set the value of the shortURL input to the shortURL returned from the API.
            document.getElementById("url").value = "www.w2.fyi/" + data.short_url;
            let button = document.getElementById("btn");
            button.classList.remove("bg-blue-500");
            button.classList.add("bg-green-500");
            button.innerHTML = "<Icon icon='ant-design:check-circle-outlined' className='w-5 h-5' /> Shortened";
            button.disabled = true;
            // Make the input background color white.
            document.getElementById("url").style.backgroundColor = "white";
        }
        )

    }

    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar/>
            <div className="flex flex-col justify-center items-center h-screen">
                <section id="main">
                    <div className="flex flex-row justify-center items-center p-5">
                        <h1 className="text-center text-3xl font-bold text-white-800">
                            Where 2?
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center items-center p-1">
                        <h2 className="text-center text-xl font-bold text-white-800">
                            Paste your long URL into the text area below and click the Shorten button.
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center items-center p-5">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-row items-center border-b border-b-2 border-teal-500 py-2">
                                <input id="url" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Paste your long URL here" aria-label="Full name"/>
                                <Button id="btn" color="lightBlue" buttonType="filled" size="regular" rounded={false} block={false} iconOnly={false} ripple="light" className="flex flex-row justify-center items-center" onClick={handleClick}>
                                    <Icon id="url-icon" icon="ant-design:link-outlined" className="flex flex-row justify-center items-center"/>
                                    <span className="flex flex-row justify-center items-center">Shorten</span>
                                </Button>
                            </div>
                        </form>

                    </div>
                    <div className="flex flex-col justify-center items-center p-5">
                        <h2 className="text-center text-xl font-bold text-white-800">
                            <a target="_blank" href="https://github.com/lewismunday/CSV2JSON" rel="noreferrer"><Icon icon="akar-icons:github-fill" /></a>
                        </h2>
                    </div>

                </section>
            </div>
            <Footer/>
        </main>
    )
}