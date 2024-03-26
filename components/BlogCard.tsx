"use client";

import Image from "next/image";
import Link from "next/link";

type CardType = {
  id: string;
  title: string;
  headerImage: string;
  preview: string;
};

export default function BlogCard({
  id,
  title,
  headerImage,
  preview,
}: CardType) {
  const imgSize = 125;

  console.log(
    `https://${process.env.NEXT_PUBLIC_DIRECTUS_HOST}/assets/${headerImage}?fit=cover&width=${imgSize}&height=${imgSize}`
  );

  return (
    <section className="pb-2">
      <div className="flex flex-row border border-stone-300 dark:border-stone-500 rounded-lg hover:bg-stone-100 hover:dark:bg-stone-700">
        <img
          src={`http://${process.env.NEXT_PUBLIC_DIRECTUS_HOST}/assets/${headerImage}?fit=cover&width=${imgSize}&height=${imgSize}`}
          className="rounded-l-lg"
          alt="Header image"
          width={imgSize}
          height={imgSize}
        />
        <div className="px-4 py-2">
          <p className="text-xl font-thin ">{title}</p>
          <div className="text-stone-500 dark:text-stone-400 font-light px-2">{preview}</div>
        </div>
      </div>
    </section>
  );
}
