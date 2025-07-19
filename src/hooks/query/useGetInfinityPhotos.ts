import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import type { PhotosResponse } from "../../interfaces/photos";

async function fetchItems({
  pageParam = 1,
  perPage = 10,
}: {
  pageParam?: number;
  perPage?: number;
}): Promise<PhotosResponse> {
  const response = await axios.get("https://api.pexels.com/v1/search", {
    params: { page: pageParam, per_page: perPage, query: "nature" },
    headers: {
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  });
  return response.data;
}

export const useGetInfinityPhotos = (perPage = 10) =>
  useInfiniteQuery({
    queryKey: ["items"],
    queryFn: ({ pageParam = 1 }) => fetchItems({ pageParam, perPage }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalItems = lastPage.total_results;
      const currentPage = allPages.length - 1;
      const loadedItems = allPages.length * perPage;

      return loadedItems < totalItems ? currentPage + 1 : undefined;
    },
  });
