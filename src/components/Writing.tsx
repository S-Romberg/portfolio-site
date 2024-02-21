import React from 'react';
import {
  Carousel,
  CarouselContent,
} from '@/components/ui/carousel';
import CarouselCard from '@/components/CarouselCard';

export default function Writing() {
  return (
    <div className="flex flex-col py-8 items-center justify-center lg:pl-16">
      <h2 className="text-3xl text-slate-600 font-semibold text-center mb-8 pb-2 w-3/4">Blogs and Articles</h2>
      <Carousel className="w-fit max-w-3xl">
        <CarouselContent className="flex items-center">
          <CarouselCard
            link="https://medium.com/@spencer.romberg/implementing-svg-color-change-on-press-using-react-native-reanimated-85c0ab01bb58"
            additionalText="This blog post focuses on leveraging React Native Reanimated to change the color of an SVG when the onPress event is fired."
            image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sVUOhxHkj_v_jD7DenAd4Q.png"
            title="Implementing SVG Color Change on Press using React Native Reanimated"
          />
          <CarouselCard
            link="https://brewerdigital.com/engineering/healthtech-perspective/"
            additionalText="A review of a presentation I gave on the differences between traditional startups and HealthTech startups"
            image="https://brewerdigital.com/wp-content/uploads/2024/01/enric-moreu-rIymmvOq3P8-unsplash-1900x640.jpg"
            title="The HealthTech Perspective"
          />
          <CarouselCard
            link="https://brewerdigital.com/engineering/i-have-a-problem-will-a-code-change-fix-it/"
            additionalText="Targeted for startup owners, this blog goes over whether a code change should be made"
            image="https://brewerdigital.com/wp-content/uploads/2022/07/tyler-franta-iusJ25iYu1c-unsplash-1900x640.jpg"
            title="I have a problem, will a code change fix it?"
          />
        </CarouselContent>
      </Carousel>
    </div>
  );
}
