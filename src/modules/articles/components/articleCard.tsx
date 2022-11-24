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
};
const ArticleCard = ({ article }: Props): JSX.Element => {
  return (
    <div className="bg-white border border-[#ceccceaa]  rounded-lg max-w-sm overflow-hidden dark:bg-[#131313] ">
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
          <h5 className="hover:underline  text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white">
            {article.title}
          </h5>
        </a>
        <p className="font-Inter font-medium text-[#232E35] mb-3 dark:text-gray-400">
          {article.description}
        </p>
        <a
          href={article.url}
          className="text-[#232E35] dark:text-[#c2bfbf] hover:underline  font-medium  text-sm px-3 py-2 text-center flex justify-center"
        >
          Continue Reading
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
