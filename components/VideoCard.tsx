import Image from "next/image"
import { videoType } from "../app/page"



const VideoCard = ({imgSrc, title, channel, views}:videoType) => {
  return (
    <div className="w-full min-h-[300px] border rounded-3xl overflow-hidden hover:bg-accent/70">
        <Image
        className="w-full h-[70%] bg-cover bg-center"
         src={imgSrc} alt=""
         height={400} width={500}
         />
         <div className="flex items-center px-2 py-2 gap-x-3">
            <Image src={"/1.jpg"} alt=""
            className="rounded-full w-14 h-14"
            height={70} width={70}
             />
            <div className="border-white flex-1">
                <h1 className="font-bold text-xs sm:text-sm">{title}</h1>
                <p className="text-muted-foreground text-xs sm:text-sm">{channel}</p>
                <p className="text-muted-foreground text-xs sm:text-sm">{views}</p>
            </div>
         </div>
    </div>
  )
}

export default VideoCard
