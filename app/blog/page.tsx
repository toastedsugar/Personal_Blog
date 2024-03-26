"use client";
import { GetAllPosts } from "@/utils/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(data);

  useEffect(() => {
    GetAllPosts()
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  const ShowLoading = () => <div>Loading</div>;

  const ShowCards = () =>
    data.map((card: any) => (
      <Link
        key={card.id}
        href={`${process.env.NEXT_PUBLIC_HOST}/blog/${card.id}`}
        className="pb-2"
      >
        <BlogCard
          id={card.id}
          title={card.Title}
          headerImage={card.Header_Image}
          preview={card.Preview}
        />
      </Link>
    ));

  return (
    <div className="mx-4">
      <p className="py-4 text-3xl font-light">Blog</p>
      {loading ? ShowLoading() : ShowCards()}
    </div>
  );
}
