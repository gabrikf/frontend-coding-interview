import { SignOutIcon } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { useGetInfinityPhotos } from "../../hooks/query/useGetInfinityPhotos";
import { useAuth } from "../../hooks/use-auth";
import { Card } from "./card";

export function Photos() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetInfinityPhotos();
  const { logout } = useAuth();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <img src="/logo.svg" alt="Logo" className="w-[75px] h-[75px] " />
        <span title="Logout">
          <SignOutIcon className="cursor-pointer" size={24} onClick={logout} />
        </span>
      </div>
      <h1 className="text-2xl font-bold mb-4">All photos</h1>
      <p className="text-gray-700">This is the photos page.</p>
      <div className="grid grid-cols-1 gap-4">
        {data?.pages.map((page) =>
          page.photos.map((photo) => <Card key={photo.id} photos={photo} />)
        )}
      </div>

      <div ref={observerRef} className="h-6" />

      {isFetchingNextPage && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Loading more...
        </p>
      )}
    </div>
  );
}
