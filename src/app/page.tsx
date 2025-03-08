"use client";

import { Button } from "@heroui/react";
import { BiBook } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";
import { TbArrowRight } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <button className="flex items-center rounded-lg bg-neutral-800 px-3 py-1 text-sm font-medium duration-300 active:scale-[0.98]">
        <span className="mr-3">🎉</span>
        <span className="mr-1">Release on April 30th</span>
        <TbArrowRight height={15} width={15} />
      </button>

      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-4 text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          The Discord bot for giveaways.
        </h1>

        <p className="mt-2 mx-12 text-center text-lg text-neutral-400 md:max-w-[520px]">
          Bao Bun is a very customizable giveaways bot for your Discord server
          designed with ease-of-use in mind.
        </p>
      </div>

      <div className="mt-12 gap-4 flex flex-row items-center justify-center">
        <a href="https://discordapp.com/oauth2/authorize?client_id=1340917960621162557&scope=bot+applications.commands&permissions=8">
          <Button
            variant="solid"
            startContent={<SiDiscord className="text-lg" />}
          >
            Add to Discord
          </Button>
        </a>

        <a href="https://docs.baobun.dev">
          <Button
            variant="faded"
            startContent={<BiBook className="text-lg" />}
          >
            Documentation
          </Button>
        </a>
      </div>
    </div>
  );
}
