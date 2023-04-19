import Link from "next/link";
import Container from "@/common/container";

const TopNavbar = () => {
  return (
    <nav>
         <Container className="flex justify-between w-full px-4 py-10 mx-auto md:px-10 rounded-2xl lg:rounded-3xl lg:w-4/6 xl:w-3/6">
          <Link href="/" className="text-xl ">Ali Alizada</Link>
          <ul className="flex gap-4">
            <li>
              <Link scroll={false} href="/">Blogs</Link>
            </li>

            {/* <li>
              <Link scroll={false} href="/">Projects</Link>
            </li> */}
          </ul>
      </Container>
    </nav>
  );
};

export default TopNavbar;
