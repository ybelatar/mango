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

const findObjectById = (data: any[], type: string) => {
  return Object.values(data).find((obj) => obj.type === type);
};

export function Input({ placeholders }: { placeholders: string[] }) {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<Manga[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    performSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted with value: ", inputValue);
    performSearch(inputValue);
  };

  const performSearch = async (query: string) => {
    const res = await axios({
      method: "GET",
      url: `${baseUrl}/manga`,
      params: {
        title: query,
        "includes[]": "cover_art",
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
    <div className="flex flex-col w-full max-w-2xl mx-auto p-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ul className="pt-5 space-y-4">
        {searchResults.map((manga) => (
          <div
            key={manga.id}
            className="flex flex-col md:flex-row p-5 items-center bg-white shadow-md rounded-lg"
          >
            <img
              src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.cover_filename}`}
              alt={manga.title}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
            />
            <li className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
              <Link href={`/manga/${manga.id}`}>{manga.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
