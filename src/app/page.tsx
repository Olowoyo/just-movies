import PopularMovies from "@/components/PopularMovies";
import SearchForm from "@/components/SearchForm";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="my-20">
      <h1 className="md:text-4xl text-3xl font-semibold mb-4">PopularMovies</h1>
      <p className="text-main-primary-100 text-base font-normal max-w-[600px] mb-6">
        List of popular movies I,{" "}
        <span className="text-main-primary-300">Olowoyo</span> have watched till
        date. Explore what I have watched and also feel free to add your
        favorite. 😉
      </p>

      <SearchForm />

      <div className="flex justify-between items-center mt-20 mb-10 ">
        <h2 className="bg-main-primary-800 py-3 px-5 rounded-lg text-main-primary-100 lg:text-3xl text-2xl font-semibold">
          All
        </h2>

        <Link
          className="bg-main-primary-800 py-4 px-5 rounded-lg hover:text-main-primary-400 transition-colors duration-300"
          href="/favorites"
        >
          😊 View my movies
        </Link>
      </div>

      <Suspense fallback={<Spinner />}>
        <PopularMovies />
      </Suspense>
    </section>
  );
}
