/* eslint-disable @typescript-eslint/no-unused-vars */

import Section from "../../common/components/section";
import ArticleCard from "./components/articleCard";
import { ArticlesDevTo } from "../../domain/interfaces";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../common/components/sectionTitle";

const Articles = (): JSX.Element => {
  const [inView, setInview] = useState(false);
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
      className="flex flex-col gap-10 justify-center md:items-center bg-primary dark:bg-primaryDark"
      setIsInView={isInView => {
        setInview(current => isInView || current);
      }}
    >
      <SectionTitle
        title="Personal Blog"
        subTitle="My articles"
        triggerAnimation={inView}
      />
      <div 
      className="flex items-center">
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
              <SwiperSlide key={`article-${article.id}`}>
                <ArticleCard article={article} inView={inView} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
};

export default Articles;
