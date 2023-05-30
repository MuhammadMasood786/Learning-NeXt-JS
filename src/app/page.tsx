import Image from "next/image";
import Link from "next/link";
import swagPhotos from "../../photos";



const Home = () => {
  const photos = swagPhotos;
  return (
    <>
    <div>This is our home page.</div>
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map(({ id, imageSrc }:any) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
    </>
  )
}

export default Home;