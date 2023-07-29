import {CodeIcon} from "@heroicons/react/solid";
import React from "react";
import {projects} from "../data";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar/>

            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hi, I'm Lewis.&nbsp;
                            <br className="hidden lg:inline-block" />I love to build amazing
                            apps.
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            I am a Software Engineer with a passion for building exciting, innovative products.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Work With Me
                            </a>
                            <a
                                href="#projects"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                See My Past Work
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="./creator.svg"
                        />
                    </div>
                </div>
            </section>

            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            Projects I've Built
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Below is a list of some of the projects I've built. These projects are available on my site.
                            To see other projects, please visit my <a href="https://github.com/lewismunday" className="text-green-500">GitHub</a>.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {projects.map((project) => (
                            <a
                                href={project.link}
                                target={project.source.startsWith("/") ? "_self" : "_blank"}
                                rel="noreferrer"
                                key={project.image}
                                className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={project.image}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">{project.description}</p>
                                        <p className="leading-relaxed underline text-blue-50"><a href={project.source}>Source</a></p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>


        </main>
    )
    ;
}