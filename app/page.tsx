import Header from "../components/Header"
import VideoCard from "../components/VideoCard"

const Page = () => {
  return (
    <div className="font-general-sans flex flex-col">
      <Header />

      <div className="w-screen h-screen py-5 px-5 grid grid-cols-3">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      </div>
    </div>
  )
}

export default Page
