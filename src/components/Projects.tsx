import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CarouselCard from '@/components/CarouselCard';

export default function Projects() {
  return (
    <div className="flex w-screen flex-col py-8 pb-12 items-center justify-center">
      <h2 className="text-3xl text-slate-600 font-semibold text-center mb-8 pb-2 border-b border-solid border-slate-400 w-3/4">Projects</h2>
      <Carousel className="max-w-3xl">
        <CarouselContent className="flex items-center">
          <CarouselCard
            link="https://github.com/brewerdigital-llc/VivoCare"
            additionalText="An award-winning open-source mobile application.\nA React Native app developed by myself and one other developer in under 3 months."
            image="/vivocare.png"
            title="VivoCare"
          />
          <CarouselCard
            link="https://github.com/S-Romberg/ocean_temp_prediction/blob/main/Linear%20Regression%20-%20Predicting%20Coral%20Bleaching/linear_regression.ipynb"
            additionalText="A linear regression model trained using temperature readings to predict coral bleaching."
            image="/ocean-chart.png"
            title="Predicting Coral Bleaching"
          />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
