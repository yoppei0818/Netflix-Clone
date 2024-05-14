import { Request } from "../../request";
import { useProps } from "./useProps";
import { Layout } from "./Layout";

export const Row = ({ title, fetchUrl, isLargeRow }: Request) => {
  const movies = useProps(fetchUrl);

  return <Layout title={title} movies={movies} isLargeRow={isLargeRow} />;
};
