"use client";

import Image from "next/image";
import { Input } from "../components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-light">
      <div className="flex flex-col items-center pb-[10em]">
        <h1 className="text-[35px] text-slate-700">Mango</h1>
        <p className="text-slate-700">Your super manga reader</p>
      </div>
      <div>
        <Input
          placeholders={[
            "Search for your favorite manga",
            "Maybe One Piece?",
            "Or Naruto?",
            "You might want to read Jujutsu Kaisen",
            "I don't know I'm just saying",
          ]}
        ></Input>
      </div>
    </main>
  );
}
