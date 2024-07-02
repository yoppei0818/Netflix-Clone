import { useEffect, useState } from "react";
import { instance } from "../../axios";
import { requests } from "../../request.ts";
import { Movie } from "../../type.ts";

export const useProps = () => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    async function fetchData() {
      // オプショナルチェーンを使っているため、undefinedになる可能性があるが、NUll合体演算子を使っているため、空文字になる
      // TODO リクエストが失敗した場合の処理を追加する
      const response = await instance.get(
        requests.find((request) => request.title === "Netflix Originals")
          ?.fetchUrl ?? ""
      );

      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  const truncate = (str: string | undefined, n: number): string => {
    if (!str) {
      return "";
    }
    // ...を追加するためにn-2をしている
    // TODO n-4じゃないのか？
    return str.length > n ? str.substring(0, n - 4) + "..." : str;
  };

  return {
    movie,
    truncate,
  };
};
