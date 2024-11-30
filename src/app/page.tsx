"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FadeText } from "@/components/ui/fade-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { getAdjectives, getNouns, getNumbers } from "@/lib/generator";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";

const text = {
  adj: getAdjectives(),
  nouns: getNouns(),
  nums: getNumbers(),
};

export default function Home() {
  const [hasRolled, setRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [adjIndex, setAdjIndex] = useState(0);
  const [nounIndex, setNounIndex] = useState(0);
  const [numIndex, setNumIndex] = useState(0);

  let tada: HTMLAudioElement;

  function roll() {
    if (isRolling) return;
    setIsRolling(true);
    setRolled(true);

    const rollDuration = 2000;
    const rollSpeed = 100;

    const rollInterval = setInterval(() => {
      setAdjIndex(Math.floor(Math.random() * text.adj.length));
      setNounIndex(Math.floor(Math.random() * text.nouns.length));
      setNumIndex(Math.floor(Math.random() * text.nums.length));
    }, rollSpeed);

    setTimeout(() => {
      clearInterval(rollInterval);
      tada.play();
      setIsRolling(false);
    }, rollDuration);
  }

  useEffect(() => {
    tada = new Audio("tada.mp3");
  }, []);

  return (
    <div className="bg-[#121212] flex items-center justify-center h-screen flex-col space-y-4">
      {/* Card */}
      <div className="text-white font-bold">
        <div className="flex flex-row align-baseline space-x-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/80155611?s=400&u=89a895d7c9ff83ec4b6f3c574a1784c57701f40a&v=4.png" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>{" "}
          <h1 className="pt-2">CDX</h1>
        </div>
      </div>

      <div className="space-x-2 flex font-bold text-4xl">
        {/* Adjective */}
        <FadeText
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
          text={
            hasRolled
              ? text.adj[adjIndex].charAt(0).toUpperCase() +
                text.adj[adjIndex].substring(1).toLowerCase()
              : "Amazing"
          }
        />

        {/* Noun */}
        <FadeText
          className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
          text={
            hasRolled
              ? text.nouns[nounIndex].charAt(0).toUpperCase() +
                text.nouns[nounIndex].substring(1).toLowerCase()
              : "Gamertag"
          }
        />

        {/* Number */}
        <FadeText
          className="bg-gradient-to-r from-green-500 via-teal-500 to-fuchsia-500 text-transparent bg-clip-text"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
          text={hasRolled ? text.nums[numIndex].toString() : "Generator"}
        />
      </div>

      {/* Roll Button */}
      <RainbowButton onClick={roll} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll"}
      </RainbowButton>
    </div>
  );
}
