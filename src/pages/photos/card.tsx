import { StarIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type { Photo } from "../../interfaces/photos";

interface CardProps {
  photos: Photo;
}

export function Card({ photos }: CardProps) {
  return (
    <div className="flex gap-2">
      {photos.liked ? (
        <StarIcon size={18} className="text-yellow-500" weight="fill" />
      ) : (
        <StarIcon size={18} className="text-gray-500" />
      )}
      <img
        src={photos.src.medium}
        alt={photos.alt}
        className="rounded-lg w-[75px] h-[75px] bg-gray-300"
      />
      <div className="flex-1 flex justify-between items-start">
        <div className="space-y-0.5 text-md">
          <p className="text-label font-semibold">{photos.photographer}</p>
          <p className="max-w-[150px] md:max-w-[200px] truncate">
            {photos.alt}
          </p>
          <div className="flex gap-1 items-center">
            <span>{photos.avg_color}</span>
            <div
              className="w-3 h-3"
              style={{ backgroundColor: photos.avg_color }}
            />
          </div>
        </div>
        <Link
          to={photos.photographer_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
        >
          <img src="/links.svg" alt="" className="w-4 h-4" />
          Portfolio
        </Link>
      </div>
    </div>
  );
}
