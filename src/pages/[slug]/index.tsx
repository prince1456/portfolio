//  a next js post deatials page ISR enabled with fallback
import type { IArticle } from "@/types/article";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getAllPosts, getPostBySlug } from "@/services/articles";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import Layout from "@/components/layout";
import Container from "@/common/container";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { ArticleJsonLd } from "next-seo";

interface IPostDetails {
  dehydratedState: any;
  slug: string;
}
const PostDetails = ({ slug }: IPostDetails) => {
  const { data: post } = useQuery(["post"], () => getPostBySlug(slug));
  console.log("&^#$%@#$@##$@=++++>", post?.title?.rendered);
  const { scrollYProgress } = useScroll();
  const content = post?.content.rendered.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );

  const blogPost = post as IArticle;
  console.log("##########$$$$$$$$", blogPost._embedded)
  return (
    <Layout>
      <article className="flex justify-center prose lg:prose-2xl max-w-none dark:prose-invert">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-2 bg-red-500 transform origin-[0%]"
        />
        <ArticleJsonLd
          type="BlogPosting"
          url={`${process.env.webUrl} + ${post?.slug}`}
          title={blogPost.title.rendered}
          images={
            blogPost._embedded &&
            blogPost?._embedded["wp:featuredmedia"].map(
              (img: any) => img?.source_url
            )
          }
          datePublished={blogPost.date}
          dateModified={blogPost.modified}
          authorName={blogPost.yoast_head_json.author}
          description={blogPost.yoast_head_json.description}
        />
        <Container className="w-full px-4 py-4 mx-auto md:py-20 md:px-10 rounded-2xl lg:rounded-3xl lg:w-4/6 xl:w-3/6">
          <h2>{post?.title.rendered}</h2>
          <p>
            <span className="text-black bg-white">
              {new Date(post?.modified ?? "").toLocaleDateString()}
            </span>{" "}
            <span className="text-red-500">{post?.yoast_head_json.author}</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false }}
            className="h-auto overflow-hidden aspect-auto"
          >
            {blogPost._embedded && (
              <Image
                src={
                  blogPost?._embedded
                    ? blogPost?._embedded["wp:featuredmedia"][0]?.media_details
                        ?.sizes?.full?.source_url
                    : "/images/class.jpeg"
                }
                width={210}
                height={180}
                alt={blogPost?.title.rendered || " "}
                className="object-cover min-h-[180px] w-full duration-500 ease-in-out rounded-md group-hover:rotate-6 group-hover:scale-125"
              />
            )}
          </motion.div>
          <div dangerouslySetInnerHTML={{ __html: content ?? " " }} />
        </Container>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  IPostDetails,
  { slug: string }
> = async (context: GetStaticPropsContext<{ slug: string }>) => {
  const { slug } = context.params!;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["post"], () => getPostBySlug(slug));

  return {
    props: {
      slug,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post: IArticle) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default PostDetails;
