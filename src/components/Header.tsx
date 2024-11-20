import Image from "next/image";
import globe from "../../public/globe.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between py-4 container mx-auto px-10">
      <Link href="/">
        <Image width={40} height={40} src={globe} alt="Just home icon" />
      </Link>

      <Link className="md:text-3xl text-2xl font-semibold" href="/">
        Just Movies
      </Link>
    </header>
  );
}
