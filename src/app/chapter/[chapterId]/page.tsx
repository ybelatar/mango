"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const baseUrl = "https://api.mangadex.org";
const axios = require("axios");

function Viewer({ id }: { id: string }) {
  const [pages, setPages] = useState<string[]>([]);
  const [pageUrl, setPageUrl] = useState<string>("");
  const [hash, setHash] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPages = async (id: string) => {
      const res = await axios({
        method: "GET",
        url: `${baseUrl}/at-home/server/${id}`,
      });

      const pages: string[] = res.data.chapter.data.map((page: string) => page);
      setPageUrl(res.data.baseUrl);
      setHash(res.data.chapter.hash);
      return pages;
    };

    fetchPages(id)
      .then((pages) => {
        setPages(pages);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching chapter pages");
        setLoading(true);
      });
  }, [id]);

  const onImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="min-w-[19em]">
      {pages.map((page) => (
        <>
          <Image
            src={`${pageUrl}/data/${hash}/${page}`}
            alt="panel"
            width={1000}
            height={1000}
            style={{
              objectFit: "contain",
              display: loading ? "none" : "block",
            }}
            onLoad={onImageLoad}
          ></Image>
        </>
      ))}
    </div>
  );
}

export default function Chapter({ params }: { params: { chapterId: string } }) {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center p-24 bg-light">
      <Viewer id={params.chapterId} />
    </main>
  );
}
