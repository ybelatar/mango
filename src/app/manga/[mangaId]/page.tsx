"use client";

import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

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
    <div className="flex flex-row pb-5">
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { push } = useRouter();

  useEffect(() => {
    const fetchChapters = async (id: string) => {
      const res = await axios({
        method: "GET",
        url: `${baseUrl}/manga/${id}/feed`,
        params: {
          offset: 10 * (currentPage - 1),
          limit: 10,
          "order[chapter]": "desc",
          "order[volume]": "desc",
          translatedLanguage: ["en", "fr"],
        },
      });

      const chapters: Chapter[] = res.data.data.map((chapter: any) => {
        return {
          id: chapter.id,
          chapter_number: chapter.attributes.chapter,
          language: chapter.attributes.translatedLanguage,
          title: chapter.attributes.title,
        };
      });
      setLastPage(Math.ceil(res.data.total / 10));

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
  }, [currentPage]);

  const PaginationNumbers = ({
    currentPage,
    lastPage,
  }: {
    currentPage: number;
    lastPage: number;
  }) => {
    const Left = () => {
      if (currentPage > 2) {
        return (
          <PaginationLink
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {currentPage - 1}
          </PaginationLink>
        );
      } else {
        return <></>;
      }
    };

    const Right = () => {
      if (currentPage < lastPage - 1) {
        return (
          <PaginationLink
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </PaginationLink>
        );
      } else {
        return <></>;
      }
    };

    const It = () => {
      if (currentPage > 1 && currentPage < lastPage) {
        return (
          <PaginationLink
            onClick={() => {
              setCurrentPage(currentPage);
            }}
            className="bg-dark"
          >
            {currentPage}
          </PaginationLink>
        );
      } else {
        return <></>;
      }
    };

    return (
      <>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setCurrentPage(1);
            }}
            className={currentPage == 1 ? "bg-dark" : ""}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <Left />
        <It />
        <Right />
        {currentPage < lastPage - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setCurrentPage(lastPage);
            }}
            className={currentPage == lastPage ? "bg-dark" : ""}
          >
            {lastPage}
          </PaginationLink>
        </PaginationItem>
      </>
    );
  };

  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Chapter</TableHead>
            <TableHead>Language</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chapters.map((chapter) => (
            <TableRow
              onClick={() => {
                push(`/chapter/${chapter.id}`);
              }}
              className="cursor-pointer"
            >
              <TableCell className="font-medium">
                {chapter.chapter_number}
              </TableCell>
              <TableCell>
                <img
                  alt={chapter.language}
                  src={
                    chapter.language == "fr"
                      ? "/france.png"
                      : "/united-kingdom.png"
                  }
                  width="20em"
                  height="20em"
                />
              </TableCell>
              <TableCell>{chapter.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            />
          </PaginationItem>
          <PaginationNumbers currentPage={currentPage} lastPage={lastPage} />
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (currentPage < lastPage) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
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
