import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Projects() {
  return (
    <div className="flex w-screen flex-col py-8 items-center justify-center">
      <h2 className="text-3xl text-slate-600 text-center pb-4">Projects</h2>
      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <Image
                      width={100}
                      height={72}
                      src="https://private-user-images.githubusercontent.com/33329110/297524820-361701c3-51b1-4021-a295-5dbe199890e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY2NjQzMDUsIm5iZiI6MTcwNjY2NDAwNSwicGF0aCI6Ii8zMzMyOTExMC8yOTc1MjQ4MjAtMzYxNzAxYzMtNTFiMS00MDIxLWEyOTUtNWRiZTE5OTg5MGU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTMxVDAxMjAwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc4ODExMTBmZjQzZjJlOTJlZjg2YzJlMzYwNzQ2Y2ZkN2RhMTNjYzM4OTA0MjljMDIwMzI3MGI4YzhhZjIzNGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.rWBHrtv2uMltMfI7PjZAIl_JY9Cz9IcEzq-en7ITlww"
                      alt="Photo of phones with the VivoCare app open"
                    />
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
