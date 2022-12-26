import Image from "next/image"
import Link from "next/link"
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={
              "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e"
            }
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The Blog</h1>
      </div>
      <button>
        <Link href={"/"} className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
          Sign up to the University of Code
        </Link>
      </button>
    </header>
  );
}

export default Header