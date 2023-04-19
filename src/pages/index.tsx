import Container from "@/common/container";
import ParallaxText from '@/components/ParallaxText';
import Avatar from "@/components/avatar";
import Layout from "@/components/layout";
import { getPosts } from "@/services/articles";
import type { IArticle } from "@/types/article";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { stripHtml } from "string-strip-html";

export default function Home() {
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  return (
    <Layout>
      <header className="flex justify-center w-full h-screen lg:h-[60vh] max-h-screen">
        <div className="relative flex flex-col items-center justify-center w-full md:w-3/6">
          <Avatar type={1} />
          <h1 className="mt-6 text-6xl text-center underline font-space group">
            Hello,{" "}
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden text-red-500 whitespace-nowrap text-brand-accent font-monoton">
                I am Ali <span className="text-3xl md:text-5xl">🖐🏼</span>
              </span>
              <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gradient  w-full animate-type will-change`}"></span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="w-5/6 mt-10 text-xl text-center font-dmSans medium"
          >
            Welcome to my world of coding adventures! As a software developer
            with a knack for AI, I love crafting innovative and user-friendly
            solutions that make life a little more fun. Come along and explore
            my playful, AI-driven projects and experiences. Let&rsquo;s make
            some digital magic together! 🚀🌟
          </motion.p>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center w-full h-full my-24">
        <Container>
        <ParallaxText baseVelocity={-5}>
         Are you looking for freelancer or hiring?
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          contact me  akbar.alizadeh5@gmail.com
        </ParallaxText>
        </Container>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
           className="text-4xl text-center font-space">
            Ali&rsquo;s Exciting Activities 🚀
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
            className="m-auto mt-4 text-lg text-center lg:w-4/6">
            Life&rsquo;s never dull when you&rsquo;re juggling a variety of
            thrilling activities! 🎭 As a proud organizer of the{" "}
            <a
              href="https://www.meetup.com/react-dojo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Dojo meetup group
            </a>
            , I bring together enthusiastic developers and tech aficionados to
            share their knowledge, collaborate, and level up their React skills.
            🤖 But that&rsquo;s not all! I&rsquo;m also involved in writing
            captivating articles for different websites, exploring various
            topics, and sharing my unique perspectives with the world. Check
            back often to see what new adventures I&rsquo;m up to! 🌟😊
          </motion.p>
          <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.5 }}
           viewport={{ once: false }}
           className="flex flex-col items-center justify-center w-full h-full mt-10">
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-white lg:w-4/6 h-96 rounded-2xl">
              <Image
                src="/images/class.jpeg"
                width={1200}
                height={300}
                alt="react dojo"
                className="absolute top-0 left-0 object-cover h-96"
              />
              {/* <h3 className="text-2xl font-space">Project 1</h3>
              <p className="w-4/6 mt-10 font-dmSans medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel tincidunt lacinia, nunc nisl aliquam mauris,
                vitae ultricies nisl nunc eget nisl.{" "}
              </p> */}
            </div>
          </motion.div>

          <motion.p 
           initial={{ opacity: 0, y: 20 }}
           transition={{ delay: 0.5, duration: 0.6 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
          className="w-5/6 mx-auto mt-10 text-lg text-center md:w-4/6 font-dmSans medium">
            I&rsquo;ve got a passion for sharing my knowledge and ideas with
            others, and what better way to do that than by writing articles for
            some awesome online platforms? 📝✨ You can find my
            thought-provoking pieces on websites like{" "}
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>{" "}
            and{" "}
            <a
              href="https://howtocrackit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HowToCrackIt
            </a>
            . My articles span a range of topics, from technology and
            programming to personal growth and more. So grab a cup of your
            favorite beverage, get comfy, and let&rsquo;s explore these
            fascinating subjects together! ☕️🤗
          </motion.p>
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center w-full h-full mt-10">
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-white lg:w-4/6 h-96 rounded-2xl">
              <Image
                src="/images/react-dojo.png"
                width={1200}
                height={300}
                alt="react dojo"
                className="absolute top-0 left-0 object-cover h-96"
              />
              {/* <h3 className="text-2xl font-space">Project 1</h3>
              <p className="w-4/6 mt-10 font-dmSans medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel tincidunt lacinia, nunc nisl aliquam mauris,
                vitae ultricies nisl nunc eget nisl.{" "}
              </p> */}
            </div>
          </motion.div>
        </Container>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full mt-32 mb-52">
        <Container>
          <div className="w-full px-4 py-20 mx-auto md:px-10 rounded-2xl lg:rounded-3xl lg:w-4/6 bg-primary">
            <h2 className="text-4xl text-center font-space">
              Ali&rsquo;s latest Articles 🚀
            </h2>
            <p className="w-full m-auto mt-10 text-lg text-center font-dmSans">
              Passionate about sharing knowledge, find my articles on{" "}
              <a
                href="https://medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>{" "}
              &amp;{" "}
              <a
                href="https://howtocrackit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HowToCrackIt
              </a>
              —covering tech, programming &amp; personal growth! 🌟
            </p>
            <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}
             className="grid gap-6 mt-10 grid-col-1">
              {posts.map((article: IArticle, i: number) => {
                return (
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: false }}
                    key={article.id}
                    className="grid grid-cols-1 gap-y-8 lg:gap-y-0 md:gap-x-8 md:grid-cols-3"
                  >
                    <div className="relative flex justify-center overflow-hidden text-center rounded-md cursor-pointer group">
                      <Image
                        src={
                          article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url
                        }
                        width={210}
                        height={180}
                        alt={article.title.rendered}
                        className="object-cover min-h-[180px] w-full duration-500 ease-in-out rounded-md group-hover:rotate-6 group-hover:scale-125"
                      />
                      <div className="absolute w-full h-full transition-opacity duration-500 bg-black opacity-30 group-hover:opacity-80" />
                    </div>
                    <div className="col-span-2">
                      <p>{new Date(article.modified).toLocaleDateString()}</p>
                      <h3 className="my-2 text-lg font-space line-clamp-2">
                        {article.title.rendered}
                      </h3>
                      <p className="mb-4 text-base text-white opacity-50 font-dmSans line-clamp-2">
                        {stripHtml(article.excerpt.rendered).result}
                      </p>
                      <Link
                        className="mt-2 rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        href={article.slug}
                      >
                        {" "}
                        READ MORE
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>
      <section className="bg-[#D8D8D8] h-[400px] mb-32 flex justify-center">
        <Container>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false }}
           className="w-full px-4 py-20 mx-auto -translate-y-24 bg-white md:px-10 rounded-2xl lg:rounded-3xl lg:w-4/6 ">
            <h2 className="w-5/6 text-4xl text-black font-space">
              Subscribe to my newsletter to keep you updated.
            </h2>
            <div className="grid grid-flow-col">
              <p className="w-4/6 mt-10 text-black font-poppins">
                I&rsquo;m always open to discussing new projects, creative ideas
                or opportunities to be part of your visions. If you&rsquo;d like
                to say hi, or have a question or two, please feel free to get in
                touch.
              </p>
              <div>
                <button className="px-10 py-4 font-bold text-white bg-[#2985B9] rounded-lg hover:bg-[#134663]">
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
     
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(["posts"], getPosts);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
