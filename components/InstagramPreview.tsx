"use client";

import { useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface dataPropsType {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

export default function InstagramPreview({
  data,
  loading = false
}: {
  data: dataPropsType[];
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="images" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <TabsContent value="images" asChild>
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PostGrid type="IMAGE" data={data} />
            </motion.div>
          </TabsContent>
          <TabsContent value="videos" asChild>
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PostGrid type="VIDEO" data={data} />
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

function PostGrid({
  type,
  data,
}: {
  type: "IMAGE" | "VIDEO";
  data: dataPropsType[];
}) {
  const filteredData = data.filter((item) => {
    if (type === "IMAGE") {
      return (
        item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM"
      );
    }
    return item.media_type === "VIDEO" || item.media_type === "REELS";
  });

  return (
    <motion.div
      className="grid grid-cols-3 gap-1 md:gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredData.map((item: dataPropsType, index: number) => (
        <motion.div
          key={item.id}
          className={`
          ${index % 5 === 0 ? "col-span-2 row-span-2" : ""}
          ${index % 7 === 0 ? "row-span-2" : ""}
        `}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            zIndex: 10,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          <PostCard type={type} item={item} />
        </motion.div>
      ))}
    </motion.div>
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
    <Card className="h-full overflow-hidden w-full shadow-sm hover:shadow-lg transition-shadow duration-300">
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
      <CardFooter className="w-full flex flex-col gap-1 items-start py-3 bg-white/90 backdrop-blur-sm">
        <div className="text-[1.5rem]" role="">
          Id : {item.id ? item.id : "No Id"}
        </div>
        <div className="text-[1.5rem] line-clamp-2">
          Caption : {item.caption ? item.caption : "No Caption"}
        </div>
        <div className="text-[1.5rem]">
          Date : {item.timestamp ? new Date(item.timestamp).toLocaleDateString() : "No Date"}
        </div>
        <Link href={item.permalink} className="border-b-2 hover:border-blue-500 hover:text-blue-500 transition-colors">
          Instagram Link
        </Link>
      </CardFooter>
    </Card>
  );
}
