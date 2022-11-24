/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Section from "../../common/components/section";
import ArticleCard from "./components/articleCard";
import { ArticlesDevTo } from "../../domain/interfaces";
import { useQuery } from "@tanstack/react-query";

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
      className="flex flex-col gap-10"
    >
      <div className="w-full grid grid-cols-cards gap-5">
        {data.map(article => {
          return <ArticleCard article={article} key={article.id} />;
        })}
      </div>
    </Section>
  );
};

export default Articles;
