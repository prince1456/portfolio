import type { IArticle } from "@/types/article";

export function getPosts() {
    // fetch latest post from wordpress website for specific user id from howtocrackit.com
    return fetch("https://howtocrackit.com/wp-json/wp/v2/posts?author=1&_embed&per_page=5")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  }
  
  export const getAllPosts = async (): Promise<IArticle[]> => {
    const res = await fetch(
      "https://howtocrackit.com/wp-json/wp/v2/posts?author=1&_embed&per_page=25"
    );
    const posts = await res.json();
  
    return posts;
  };
  
  export async function getPostBySlug(slug: string): Promise<IArticle> {
    const apiUrl = `https://howtocrackit.com/wp-json/wp/v2/posts?&_embed&slug=${slug}`;
    const response = await fetch(apiUrl);
    const posts = await response.json();
    if (posts.length > 0) {
      return posts[0];
    } else {
      throw new Error(`Post not found: ${slug}`);
    }
  }