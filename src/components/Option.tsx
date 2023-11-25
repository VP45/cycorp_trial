
import { StaticImageData } from 'next/image';

type MarkerProps = {
    lng: number,
    lat: number,
    area: string,
    client: string,
    desc: string,
    img?: StaticImageData,
    company?: string,
    label?: string,
    value?: number,
}

export default function Option({ marker }: { marker: MarkerProps }) {
    return (
        <div
            className='w-[300px]'
        >
            {/* <div
                className='absolute bottom-1 right-2  w-[120px] h-8 flex justify-center items-center text-red-600 text-xl font-bold z-10'
            >
                {
                    marker?.area || 0
                }sq.ft.
            </div> */}
            <img src={marker?.img?.src} className="w-full object-cover" alt="" />
            <p className=' w-full text-black font-bold text-base mt-4'>{
                marker?.client
            }</p>
            <p className=' w-full text-black text-base'>
            {
                marker?.desc
            }
            </p>
            <p className=' w-full text-red-700 text-base'>
            {
                    marker?.area || 0
                }sq.ft.
            </p>
        </div>

    );
};
