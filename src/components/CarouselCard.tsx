import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CarouselItem } from '@/components/ui/carousel';

export default function CarouselCard({ link, image, title, additionalText }: { link: string, image: string, title: string, additionalText: string }) {
  return (
    <CarouselItem className="flex justify-center">
      <a
        // @ts-ignore
        style={{ '--image-url': `url(${image})` }}
        href={link}
        target="_blank"
        className="w-3/4 md:w-auto relative bg-blend-multiply bg-slate-700 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat flex h-80 flex-col gap-4 items-center justify-center p-6 rounded max-w-screen"
        rel="noreferrer"
      >
        <p className="text-xl font-semibold text-white text-center lg:w-[18em] line-clamp-3">{title}</p>
        <span className="text-md text-slate-50 max-w-xl text-center">
          {additionalText}
        </span>
        <FontAwesomeIcon className="absolute right-4 top-4 text-slate-400" icon={faExternalLink} />
      </a>
    </CarouselItem>
  );
}
