import { Request } from "../../request";
import { useProps } from "./useProps";
import { Layout } from "./Layout";

export const Row = ({ title, fetchUrl, isLargeRow }: Request) => {
  return (
    <Layout title={title} isLargeRow={isLargeRow} {...useProps(fetchUrl)} />
  );
};
