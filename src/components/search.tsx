import { url } from "inspector";
import { PlaceholdersAndVanishInput } from "./input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://api.mangadex.org";
const axios = require("axios");

interface Manga {
  title: string;
  id: string;
  cover_filename: string;
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs: any[] | null;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      console.log("doing", waitingArgs);
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: any[]) => {
    console.log("main", shouldWait);
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    console.log("second", shouldWait);

    setTimeout(timeoutFunc, delay);
  };
}

const findObjectById = (data: any[], type: string) => {
  return Object.values(data).find((obj) => obj.type === type);
};

export function Input({ placeholders }: { placeholders: string[] }) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<Manga[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    throttle(performSearch)(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted with value: ", inputValue);
    performSearch(inputValue);
  };

  const performSearch = async (query: string) => {
    console.log(query);
    if (!query || query == "" || query.length < 3) {
      setSearchResults([]);
      return;
    }

    const res = await axios({
      method: "GET",
      url: `${baseUrl}/manga`,
      params: {
        title: query,
        "includes[]": "cover_art",
        "order[relevance]": "desc",
        "contentRating[]": ["safe", "suggestive"],
      },
    });

    var results: Manga[] = res.data.data.map((manga: any) => {
      return {
        title: manga.attributes.title.en,
        id: manga.id,
        cover_filename: findObjectById(manga.relationships, "cover_art")
          ?.attributes.fileName,
      };
    });

    setSearchResults(results);
  };

  return (
    <div className="flex flex-col max-w-2xl mx-auto p-4 w-[50em]">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ul className="pt-5 space-y-4">
        {searchResults.map((manga) => (
          <Link
            href={`/manga/${manga.id}`}
            className="flex flex-col md:flex-row p-5 items-center bg-mid shadow-md rounded-lg"
          >
            <Image
              src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.cover_filename}`}
              alt={manga.title}
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
              className=" rounded-md"
            />
            <li className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
              {manga.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
