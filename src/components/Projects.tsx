import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function Projects() {
  return (
    <div className="flex w-screen flex-col py-8 items-center justify-center">
      <h2 className="text-3xl text-slate-600 text-center pb-4">Projects</h2>
      <Carousel className="w-fit max-w-5xl">
        <CarouselContent className="flex items-center">
          <CarouselItem>
            <div className="p-1">
              <Card onClick={() => window.open('https://github.com/brewerdigital-llc/VivoCare')}>
                <FontAwesomeIcon className="absolute right-4 top-4 text-slate-400" icon={faExternalLink} />
                <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
                  <Image
                    width={550}
                    height={520}
                    src="/vivocare.png"
                    alt="Photo of phones with the VivoCare app open"
                  />
                  <span className="text-xl font-semibold text-slate-800">VivoCare</span>
                  <span className="text-md text-slate-600 max-w-xl">
                    An award-winning open-source mobile application.
                    A React Native app developed by myself and one other developer in under 3 months.
                  </span>
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
                  <span className="text-xl font-semibold text-slate-800">Predicting Coral Bleaching</span>
                  <span className="text-md text-slate-600">A linear regression model trained using temperature readings to predict coral bleaching.</span>
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
