"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { MangaPage } from "../../components/mangapage";

interface MangaDescription {
  id: string;
  title: string;
  description?: string;
  last_chapter?: string;
  cover_filename?: string;
}

interface Chapter {
  id: string;
  chapter_number: string;
  language: string;
  title: string;
}

const baseUrl = "https://api.mangadex.org";
const axios = require("axios");

const findObjectByType = (data: any[], type: string) => {
  return Object.values(data).find((obj) => obj.type === type);
};

function MangaDescription({ id }: { id: string }) {
  const [manga, setManga] = useState<MangaDescription | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchManga = async (id: string) => {
      const res = await axios({
        method: "GET",
        url: `${baseUrl}/manga/${id}`,
        params: {
          "includes[]": "cover_art",
        },
      });

      const data = res.data.data;
      console.log(data);
      return {
        id: data.id,
        title: data.attributes.title.en,
        description: data.attributes.description[0],
        last_chapter: data.attributes.lastChapter,
        cover_filename: findObjectByType(data.relationships, "cover_art")
          ?.attributes.fileName,
      };
    };

    fetchManga(id)
      .then((manga) => {
        setManga(manga);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error fetching manga");
        setLoading(false);
      });
  }, [id]);

  if (!manga) {
    return <div>Error while fetching manga</div>;
  }
  return (
    <div className="flex flex-row">
      <div>
        {manga.cover_filename && (
          <div className="manga-cover">
            <img
              src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.cover_filename}`}
              alt={`${manga.title} cover`}
              width={500}
            />
          </div>
        )}
      </div>
      <div>
        <p>Title : {manga.title}</p>
        {manga.description && (
          <p>
            <strong>Description:</strong> {manga.description}
          </p>
        )}
        {manga.last_chapter && (
          <p>
            <strong>Last Chapter:</strong> {manga.last_chapter}
          </p>
        )}
      </div>
    </div>
  );
}

function Chapters({ id }: { id: string }) {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChapters = async (id: string) => {
      const res = await axios({
        method: "GET",
        url: `${baseUrl}/manga/${id}/feed`,
        params: {
          offset: 100,
        },
      });

      const chapters: Chapter[] = res.data.data.map((chapter) => {
        return {
          id: chapter.id,
          chapter_number: chapter.attributes.chapter,
          language: chapter.attributes.translatedLanguage,
          title: chapter.attributes.title,
        };
      });

      chapters.sort((a: Chapter, b: Chapter) => {
        const n_a = parseFloat(a.chapter_number);
        const n_b = parseFloat(b.chapter_number);
        return n_a - n_b;
      });
      return chapters;
    };

    fetchChapters(id)
      .then((chapters) => {
        console.log(chapters);
        setChapters(chapters);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching chapters");
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="">
      <h2>Chapters</h2>
      <ul className="">
        {chapters.map((chapter) => (
          <Link href={`/chapter/${chapter.id}`}>
            {(chapter.language == "en" || chapter.language == "fr") && (
              <li key={chapter.id} className="p-6 border">
                <p>
                  <strong>Title:</strong> {chapter.title}
                </p>
                <p>
                  <strong>Chapter:</strong> {chapter.chapter_number}
                </p>
                <p>
                  <strong>Language:</strong> {chapter.language}
                </p>
              </li>
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default function Manga({ params }: { params: { mangaId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-light">
      <MangaDescription id={params.mangaId} />
      <Chapters id={params.mangaId} />
    </main>
  );
}
