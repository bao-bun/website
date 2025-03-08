"use client";

import { Button,Link } from "@heroui/react";
import { BiBook, } from "react-icons/bi";
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
        <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-2 font-bold leading-tight lg:leading-[1.1] tracking-tighter text-4xl md:text-5xl lg:text-6xl">
          <h1>The Discord bot for</h1>
          <div className="flex flex-row text-center">
            <p className="bg-gradient-to-r from-[#f97ebb] to-[#ff3888] bg-clip-text text-transparent">giveaways</p>
            <p>.</p>
          </div>
        </div>

        <p className="mt-2 sm:mt-4 mx-12 text-center text-base sm:text-lg text-neutral-400 md:max-w-[520px]">
          Bao Bun is a very customizable giveaways bot for your Discord server
          designed with ease-of-use in mind.
        </p>
      </div>

      <div className="mt-8 sm:mt-12 gap-4 flex flex-row items-center justify-center">
        {/* <ButtonGroup variant="solid"> */}
        <Button
          as={Link}
          variant="solid"
          target="_blank"
          href="https://discordapp.com/oauth2/authorize?client_id=1340917960621162557&scope=bot+applications.commands&permissions=8"
          startContent={<SiDiscord className="text-lg" />}
        >
          Add to Discord
        </Button>

          {/* <Button isIconOnly onPress={onOpen}>
            <BiChevronDown/>
          </Button>
        </ButtonGroup> */}

        <a target="_blank" href="https://docs.baobun.dev">
          <Button variant="faded" startContent={<BiBook className="text-lg" />}>
            Documentation
          </Button>
        </a>
      </div>
    </div>
  );
}
