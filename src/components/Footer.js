import React from "react";
import { Icon } from '@iconify/react';
import { Tooltip } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
            Lewis Munday - Copyright © {new Date().getFullYear()}
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
                Past Work
            </a>
            <a href="https://blog.lewismunday.co.uk" className="mr-5 hover:text-white">
                Blog
            </a>
            </nav>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <Icon icon="mdi:spotify" color="#1db954" />
                <Tooltip
                content="See what I am listening live on Spotify"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                    <p>&nbsp;- Not Playing</p>
                </Tooltip>
            </nav>
        </div>
        </footer>
)};