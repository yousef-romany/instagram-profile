"use client";
import InstagramPreview from "@/components/InstagramPreview";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch(
        `https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id,media_type,media_url,caption,permalink,thumbnail_url,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
      )
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          setData(resData.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="">
      <InstagramPreview data={data} />
    </div>
  );
}
