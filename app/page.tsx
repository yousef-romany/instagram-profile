"use client";
import InstagramPreview from "@/components/InstagramPreview";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(
        `https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}/media?fields=id,media_type,media_url,caption,permalink,thumbnail_url,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
      )
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          setData(resData.data || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching Instagram data:", error);
          setLoading(false);
        });
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <header className="sr-only">
        <h1>Zoe Holidays Instagram Gallery</h1>
        <p>
          Explore our travel photography collection featuring stunning
          destinations and adventure moments
        </p>
      </header>
      <InstagramPreview data={data} loading={loading} />
    </main>
  );
}
