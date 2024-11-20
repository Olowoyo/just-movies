import Image from "next/image";
import search from "../../public/search.svg";
import Form from "next/form";

export default function SearchForm() {
  return (
    <Form
      action="/"
      className="relative py-3 px-14 hover:ring-1 hover:ring-main-primary-300 max-w-fit ring-1 ring-main-primary-800 transition duration-300 rounded-xl"
    >
      <input
        name="search"
        className="bg-transparent placeholder:text-sm text-main-primary-100 font-normal py-3 focus:outline-none pl-4"
        type="search"
        placeholder="Search Popular Movies"
      />

      <button className="absolute left-6 top-6">
        <Image src={search} alt="search popular movies" />
      </button>
    </Form>
  );
}
