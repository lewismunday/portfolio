import Navbar from "./Navbar";
import Footer from "./Footer";
import {Icon} from "@iconify/react/dist/iconify";
import {Button} from "@material-tailwind/react";

export default function TextAnalysis() {
    const demoText = "Today in class, we discussed the concept of algorithms and their role in solving problems in computer science. An algorithm is a step-by-step procedure for solving a problem or achieving a desired outcome. We also talked about the characteristics of good algorithms, including correctness, completeness, clarity, and efficiency. To be correct, an algorithm must produce the correct output for any valid input. To be complete, an algorithm must be able to solve all possible instances of a problem. To be clear, an algorithm must be easy to understand and follow. And to be efficient, an algorithm must use resources (e.g. time, space) in a reasonable way. We also discussed the role of data structures in algorithms. A data structure is a way of organizing data in a computer so that it can be accessed and modified efficiently. Common data structures include arrays, linked lists, stacks, queues, and trees. In the next class, we will continue our discussion of algorithms and data structures by looking at some specific examples and discussing their properties and uses.";

    const handleInsertDemoText = () => {
        document.getElementById("text").value = demoText;
    }
    // API: http://44w4ar.deta.dev/api/text-analysis

    const handleClick = () => {
        let button = document.getElementById("btn");
        const text = document.getElementById("text").value;
        let numSentences = document.getElementById("num-sentences").value;
        // Create an API post request to "https://api.mun.day/analyse" with the text as the body.
        fetch("http://localhost:8000/api/text-analysis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                num_sentences: numSentences
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let sentiment = document.getElementById("sentiment");
            let summary = document.getElementById("summary");
            let polarity = data.polarity;
            let subjectivity = ""

            if (polarity > 0.2) {
                subjectivity =  "Positive";
            } else if (polarity < 0) {
                subjectivity = "Negative";
            } else {
                subjectivity = "Neutral";
            }

            sentiment.innerHTML = "Sentiment: " + subjectivity;
            let summaryTitle = document.getElementById("summary-title");
            summaryTitle.innerHTML = "Summary (" + data.summary.length + " sentences):";

        //     For each item in the summary array, create a new <li> element and append it to the summary <ul>.
            for (let i = 0; i < data.summary.length; i++) {
                let li = document.createElement("li");
                li.innerHTML = "- " + data.summary[i];
                summary.appendChild(li);
            }

        }
        )
        button.classList.remove("bg-blue-500");
        button.classList.add("bg-green-500");
        button.innerHTML = "<Icon icon='ant-design:check-circle-outlined' className='w-5 h-5' /> Analyse";
        button.disabled = true;
        // Make the input background color white.
        document.getElementById("text").style.backgroundColor = "white";

    }
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar/>
            <div className="flex flex-col justify-center">
                <section id="main">
                    <div className="flex flex-row justify-center items-center p-5">
                        <h1 className="text-center text-3xl font-bold text-white-800">
                            Text Analysis
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center items-center p-1">
                        <h2 className="text-center text-xl font-bold text-white-800">
                            Enter the text you want to analyse below.
                        </h2>
                    </div>
                    <div className="flex flex-row justify-center items-center p-1">
                        <h2 className="text-center text-xl font-bold text-white-800">
                            The text will be analysed and the results will be displayed below.
                        </h2>
                    </div>
                    <div className="flex flex-row justify-center items-center p-1">
                        <h2 className="text-center text-xl font-bold text-white-800">
                            The results will include the sentiment and summary of the text.
                        </h2>
                    </div>
                    <div className="flex flex-row justify-center items-center p-5">
                        <textarea id="text" className="w-1/2 h-64 p-2 border-2 border-gray-800 rounded-lg" placeholder="Enter text here..."></textarea>
                    </div>
                    {/*Add a number box for the number of sentences*/}
                    <div className="flex flex-row justify-center items-center p-5">
                        <text className={"text-white-800"}>Number of sentences in summary:</text>
                        <input id="num-sentences" className="w-1/12 h-10 p-2 border-2 border-gray-800 rounded-lg" type="number" min="1" max="10" defaultValue="3"/>
                    </div>
                    <div className="flex flex-row justify-center items-center p-5">
                    <div className="flex flex-row justify-center items-center p-5">
                        <Button id="btn" color="blue" buttonType="filled" size="regular" rounded={true} block={false} iconOnly={false} ripple="light" onClick={handleClick}>
                            <Icon icon="ant-design:check-circle-outlined" className="w-5 h-5" /> Analyse
                        </Button>
                    </div>
                    <div className="flex flex-row justify-center items-center p-5">
                        <Button color="blue" buttonType="filled" size="regular" rounded={true} block={false} iconOnly={false} ripple="light" onClick={handleInsertDemoText}>
                            <Icon icon="check-circle-outlined" className="w-5 h-5" /> Insert Demo Text
                        </Button>
                    </div>
                    </div>
                    <div className="flex flex-row justify-center items-center p-5">
                        <h1 className="text-center text-3xl font-bold text-white-800">
                            Analysis
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center items-center p-5">
                        <h2 className="text-center text-xl font-bold text-white-800" id="sentiment">
                            Sentiment: None
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center items-center p-5">
                        <h2 className="text-center text-xl font-bold text-white-800" id="summary-title">
                            Summary:
                        </h2>
                        <div className="flex flex-col justify-center items-center p-5">
                            <ul id="summary">
                            </ul>
                        </div>
                    {/*  link to the api docs for own use  */}
                        <div className="flex flex-row justify-center items-center p-5">
                            <p className="text-center text-xl font-bold text-white-800">Use this for your own projects using the
                                 <a rel="noreferrer" href="http://localhost:8000/docs" target="_blank" className="underline"> API Documentation</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </main>
    )
}