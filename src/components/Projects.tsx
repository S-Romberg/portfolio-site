import React from 'react';
import {
  Carousel,
  CarouselContent,
} from '@/components/ui/carousel';
import CarouselCard from '@/components/CarouselCard';

export default function Projects() {
  return (
    <div className="flex flex-col py-8 items-center justify-center lg:border-r lg:border-slate-300 lg:border-solid lg:pr-16">
      <h2 className="text-3xl text-slate-600 font-semibold text-center mb-8 pb-2 w-3/4">Projects</h2>
      <Carousel className="max-w-3xl">
        <CarouselContent className="flex items-center">
          <CarouselCard
            link="https://github.com/brewerdigital-llc/VivoCare"
            additionalText="An award-winning open-source mobile application. This  React Native app was developed by myself and one other developer in under 3 months."
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
      </Carousel>
    </div>
  );
}
