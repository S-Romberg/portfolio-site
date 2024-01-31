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
          <CarouselItem>
            <div className="p-1">
              <Card onClick={() => window.open('https://github.com/brewerdigital-llc/VivoCare')}>
                <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
                  <Image
                    width={550}
                    height={520}
                    src="/vivocare.png"
                    alt="Photo of phones with the VivoCare app open"
                  />
                  <span className="text-xl font-semibold">VivoCare</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card onClick={() => window.open('https://github.com/S-Romberg/ocean_temp_prediction/blob/main/Linear%20Regression%20-%20Predicting%20Coral%20Bleaching/linear_regression.ipynb')}>
                <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
                  <Image
                    width={550}
                    height={520}
                    src="/ocean-chart.png"
                    alt="Photo a global map plotting points with temperature readings"
                  />
                  <span className="text-xl font-semibold">Ocean Temperature Prediction</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
