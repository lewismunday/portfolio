import React from "react";
import { Icon } from '@iconify/react';
import { Tooltip } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href={"https://www.lewismunday.co.uk"} className="title-font font-medium text-white mb-4 md:mb-0">
                    Lewis Munday - Copyright © {new Date().getFullYear()}
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a rel={"noreferrer"} target={"_blank"} href={'https://www.github.com/lewismunday'}><Icon icon="akar-icons:github-fill" /></a>
                    <p>&nbsp;</p>
                    <a rel={"me noreferrer"} target={"_blank"} href="https://mas.to/@lewis"><Icon icon="akar-icons:mastodon-fill"/></a>
                </nav>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <Icon icon="mdi:spotify" color="#1db954" />
                    <Tooltip
                        content="See what I am listening to live on Spotify"
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