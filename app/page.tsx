import Header from "../components/Header"
import VideoCard from "../components/VideoCard"



export interface videoType {
    id:number,
    imgSrc : string,
    title:string,
    channel : string,
    views : string
}

const arrayRes:videoType[] = [
    {   id:1,
        imgSrc:"/p1.jpeg",
        title:"Deadpool, but he gets increasingly comedic",
        channel:"Marvel Nig",
        views:"2.3M views. 1 year ago"
    },
    {   id:2,
        imgSrc:"/p2.jpeg",
        title:"Javascript survival guide, 101",
        channel:"Programmer bro",
        views:"50K views. 1 month ago"
    },
    {   id:3,
        imgSrc:"/p3.jpg",
        title:"Here is why reasons why BMW doesn't need a supercar",
        channel:"Formula 2",
        views:"431k views. 3 years ago"
    },
    {   id:4,
        imgSrc:"/p4.jpg",
        title:"How to buy a maybach in your twenties",
        channel:"79 with sharan",
        views:"4M views. 9 months ago"
    },
    {   id:5,
        imgSrc:"/p5.jpg",
        title:"Here are 10 times when anderson silva opponents claimed their insurance.",
        channel:"UFC",
        views:"23M views. 6 years ago"
    },
    {   id:6,
        imgSrc:"/p6.webp",
        title:"It is just an Anime...",
        channel:"AyanoModi",
        views:"2M views. 1 year ago"
    },
    {   id:7,
        imgSrc:"/p7.webp",
        title:"patience kaise gatayein.",
        channel:"Sandeep Maheshwari",
        views:"204K views. 1 year ago"
    },
    {   id:8,
        imgSrc:"/p8.jpg",
        title:"what happened to may after shadow fight 2 ?",
        channel:"OTC",
        views:"20M views. 5 years ago"
    },
    {   id:9,
        imgSrc:"/p9.jpg",
        title:"Mr beast bought Ishowspeed for 3$",
        channel:"The Seasons",
        views:"998K views. 5 days ago"
    },
    {   id:10,
        imgSrc:"/p10.png",
        title:"How to reverse a car, Leetcode 3209",
        channel:"Algo Reps",
        views:"198K views. 1 month ago"
    },

]








const Page = () => {
  return (
    <div className="font-general-sans flex flex-col">
    

      <div className="w-full min-h-screen py-5 mt-16 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
        {
          arrayRes.map(obj=>
          <VideoCard          
            id={obj.id}
            key={obj.id}
            imgSrc={obj.imgSrc}
            title={obj.title}
            channel={obj.channel}
            views={obj.views}
             />)
        }

      </div>
    </div>
  )
}

export default Page
