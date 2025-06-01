import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import backyard from './assets/backyard.webp'
import table from './assets/table.webp'
import bed from './assets/bed.webp'
import chimene from './assets/chimene.webp'
import outside from './assets/outside.webp'
import kitchen from './assets/kitchen.webp'
import 'swiper/css';

const images = [
    backyard,
    table,
    kitchen,
    bed,
    chimene,
    outside,
];

export function Carousel() {
    return (
        <div className='mx-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px] w-full'>
            <div className='swiperContainer rounded-xl overflow-hidden'>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 2000
                    }}
                    pagination={{
                        el: '.pagination',
                        clickable: true
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    loop
                    autoHeight={true}
                    centeredSlides={true}
                >
                    {
                        images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <Image className='aspect-[6/4] rounded-xl w-full object-cover' src={src} alt={`Slide ${index}`}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className="flex justify-center items-center gap-3 md:gap-6 mt-6">
                <button className="cursor-pointer swiper-button-prev p-1 grid place-items-center text-navyBlue bg-white rounded-full transition-colors hover:bg-gray-200">
                    <ChevronLeft />
                </button>

                <div className="pagination flex justify-center mx-4"></div>

                <button className="cursor-pointer swiper-button-next p-1 grid place-items-center text-navyBlue bg-white rounded-full transition-colors hover:bg-gray-200">
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}