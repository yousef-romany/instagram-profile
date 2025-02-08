"use client";

import { useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface dataPropsType {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

export default function InstagramPreview({ data }: { data: dataPropsType[] }) {
  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="images" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="images">
          <PostGrid type="IMAGE" data={data} />
        </TabsContent>
        <TabsContent value="videos">
          <PostGrid type="VIDEO" data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PostGrid({
  type,
  data,
}: {
  type: "IMAGE" | "VIDEO";
  data: dataPropsType[];
}) {
  // Generate an array of 12 items to represent posts

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2">
      {data.map((item: dataPropsType, index: number) => (
        <div
          key={item.id}
          className={`
          ${index % 5 === 0 ? "col-span-2 row-span-2" : ""}
          ${index % 7 === 0 ? "row-span-2" : ""}
        `}
        >
          <PostCard type={type} item={item} />
        </div>
      ))}
    </div>
  );
}

function PostCard({
  type,
  item,
}: {
  type: "IMAGE" | "VIDEO";
  item: dataPropsType;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Pause video when component unmounts
    return () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  }, []);
  return (
    <Card className="h-full overflow-hidden w-full">
      <CardContent className="p-0 relative aspect-square bg-gray-200 flex items-center justify-center w-full">
        {type === "IMAGE" ? (
          <img
            src={item.media_url}
            alt={item.caption}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            poster={item.thumbnail_url}
          >
            <source src={item.media_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </CardContent>
      <CardFooter className="w-full flex flex-col gap-1 items-start py-3">
        <div className="">Id : {item.id ? item.id : "No Id"}</div>
        <div className="">
          Caption : {item.caption ? item.caption : "No Caption"}
        </div>
        <div className="">
          Date : {item.timestamp ? item.timestamp : "No Date"}
        </div>
        <Link href={item.permalink} className="border-b-2">
          Instagram Link
        </Link>
      </CardFooter>
    </Card>
  );
}
