import TopNavbar from "@/components/topNavbar";
import { motion} from 'framer-motion'
import Container from "@/common/container";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
type ILayout = {
  children: React.ReactNode;
};
const Layout = ({ children }: ILayout) => {
  return (
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      duration: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 20,

    }}
    >
      <TopNavbar />
      <main>{children}</main>
      <footer>
        <Container>
          <div className="flex flex-wrap justify-between w-full px-4 py-20 mx-auto border-t-2 md:px-10 lg:w-4/6 ">
            <div>
              <h2>Copyright © 2021. All Right Reserved</h2>
            </div>
            <ul className="flex gap-2">
              <li className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded">
                <a href="">
                  <AiOutlineInstagram className="w-8 h-8 text-black" />
                </a>
              </li>
              <li className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded">
                <a href="">
                  <AiFillLinkedin className="w-8 h-8 text-black" />
                </a>
              </li>
              <li className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded">
                <a href="">
                  <AiOutlineGithub className="w-8 h-8 text-black" />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </motion.div>
  );
};

export default Layout;
