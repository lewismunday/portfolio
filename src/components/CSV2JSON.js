import React from "react";
import { useState} from "react";
import {Icon} from "@iconify/react/dist/iconify";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Main() {
    const [message, setMessage] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        console.log(message);
    }

    const handleConvert = (e) => {
        e.preventDefault();
        let text = message.split("\n");
        let json = {};
        for (let i = 0; i < text.length; i++) {
            let line = text[i].split(",");
            if (line.length === 2) {
                json[line[0]] = line[1];
            } else {
                json[line[0]] = line.slice(1);
            }
        }
        // If the JSON object value is an array iterate through the JSON object value array and remove any empty values.
        for (let key in json) {
            if (Array.isArray(json[key])) {
                for (let i = 0; i < json[key].length; i++) {
                    if (json[key][i] === "") {
                        json[key].splice(i, 1);
                    }
                }
            }
        }
        // Remove the last key value pair from the JSON object
        let lastKey = Object.keys(json).pop();
        delete json[lastKey];
        setMessage(JSON.stringify(json));
    }

    // When the reset button is clicked, the page will reload.
    const handleReset = () => {
        window.location.reload();
    }
    // When the copy button is clicked, the text area will be copied to the clipboard.
    const handleCopy = (e) => {
        e.preventDefault();
        let textarea = document.createElement("textarea");
        textarea.value = message;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        // Show the alert message
        let alert = document.getElementById("alert");
        alert.classList.add("opacity-0");
        alert.classList.add("transition-opacity");
        alert.classList.add("duration-500");
        alert.classList.add("ease-in-out");
        alert.classList.add("delay-500");
        alert.classList.add("opacity-100");
        setTimeout(() => {
                alert.classList.remove("opacity-100");
                alert.classList.add("opacity-0");
            }
            , 5000);

    }

    // When the download button is clicked, the text area will be downloaded as a .json file.
    const handleDownload = (e) => {
        e.preventDefault();
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(message));
        element.setAttribute('download', 'data.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }


    return (
        <main className="text-gray-400 bg-gray-900 body-font">

            <Navbar/>

        <div className="flex flex-col justify-center items-center h-screen">
            <section id="main">
                <div className="flex flex-col justify-center items-center p-5">
                    <h1 className="text-center text-3xl font-bold text-white-800">
                        CSV to JSON Converter
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center p-5">
                    <h2 className="text-center text-xl font-bold text-white-800">
                        Paste your CSV data into the text area below and click the Convert button.
                    </h2>
                </div>
                <div id="alert" className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md opacity-0"
                     role="alert">
                    <div className="flex">
                        <div className="py-1">
                            <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold">JSON copied to clipboard</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-5">
                    <textarea className="text-left text-xl font-bold text-white-800" rows="10" cols="50" id="message" name="message" value={message} onChange={handleMessageChange}></textarea>
                </div>
                <div className="flex flex-col justify-center items-center p-5">
                    <button className="text-center text-xl font-bold text-white-800" onClick={handleConvert}>Convert</button>
                    <button className="text-center text-xl font-bold text-white-800" onClick={handleReset}>Reset</button>
                    <button className="text-center text-xl font-bold text-white-800" onClick={handleCopy}>Copy</button>
                    <button className="text-center text-xl font-bold text-white-800" onClick={handleDownload}>Download</button>
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
    );
}