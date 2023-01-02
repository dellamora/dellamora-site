/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { ArticlesDevTo } from "../../../domain/interfaces";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {
  article: Pick<
    ArticlesDevTo,
    "title" | "description" | "url" | "cover_image" | "published_at"
  >;
  inView: boolean;
};
const ArticleCard = ({ article, inView }: Props): JSX.Element => {
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "view" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        view: {
          opacity: 1,
          transition: { delay: 1.4 },
        },
      }}
      className="bg-white border  border-grayLight dark:border-none rounded-lg max-w-sm overflow-hidden  dark:bg-secondaryDark "
    >
      <div className="relative aspect-video w-auto ">
        <Image
          className="object-cover"
          alt="article image"
          fill
          src={article.cover_image}
        />
      </div>
      <div className="p-5">
        <a href={article.url}>
          <h1 className="hover:underline tracking-tight mb-2 md:text-xl ">
            {article.title}
          </h1>
        </a>
        <span className="font-Inter font-medium mb-3 ">
          {article.description}
        </span>
        <a
          href={article.url}
          className="text-grayMedium dark:text-grayLight hover:underline font-medium  text-sm px-3 py-2 text-center flex justify-center"
        >
          Continue Reading
        </a>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
