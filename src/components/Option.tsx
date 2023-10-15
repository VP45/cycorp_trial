
import { StaticImageData } from 'next/image';

type MarkerProps = {
    lng: number,
    lat: number,
    sites: number,
    name: string,
    img?: StaticImageData,
    company?: string,
    label?: string,
    value?: number,
}

export default function Option({ marker }: { marker: MarkerProps }) {
    return (
        <div
            className='w-[200px]'
        >
            <div
                className='absolute bottom-1 right-1 bg-red-500/70 w-8 h-8 flex justify-center items-center text-white text-xl font-bold z-10 rounded-full'
            >
                {
                    marker?.sites || 0
                }
            </div>
            <img src={marker?.img?.src} className="w-full object-cover" alt="" />
            <p className='line-clamp-2 w-full text-black text-base mt-4'>{
                marker?.name + ` (${marker?.company})`
            }</p>
        </div>

    );
};
