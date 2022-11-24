/* eslint-disable @typescript-eslint/no-unused-vars */

import Section from "../../common/components/section";
import ArticleCard from "./components/articleCard";
import { ArticlesDevTo } from "../../domain/interfaces";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Articles = (): JSX.Element => {
  const { isLoading, error, data } = useQuery<ArticlesDevTo[]>({
    queryKey: ["devToData"],
    queryFn: () =>
      fetch("https://dev.to/api/articles?username=dellamora").then(res =>
        res.json(),
      ),
  });
  if (isLoading) return <div>Loading</div>;

  if (error) return <div>An error has occurred: </div>;
  return (
    <Section
      id="articles"
      title="Personal Blog"
      subTitle="My articles"
      className="flex flex-col gap-10 justify-center"
    >
      <div className="w-full ">
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 2,
            },
          }}
          loopFillGroupWithBlank={true}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data.map(article => {
            return (
              <SwiperSlide key={article.id}>
                <ArticleCard article={article} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
};

export default Articles;
