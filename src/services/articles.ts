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
      "https://howtocrackit.com/wp-json/wp/v2/posts?author=1&_embed&per_page=4"
    );
    const posts = await res.json();
  
    return posts;
  };
  
  export async function getPostBySlug(slug: string): Promise<IArticle> {
    // because sometime api doenst return embeded data so we need to fetch it again

    const apiUrl = `https://howtocrackit.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
    const response = await fetch(apiUrl);
    const posts = await response.json();
    
    if (posts.length > 0 && !!posts[0]._embedded) {
      return posts[0];
    } else {
      await delay(6000)
      console.log(slug)
      return getPostBySlug(slug)
    }
  }

  const fetchPost = async (slug: string) => {
    const apiUrl = `https://howtocrackit.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
    const response = await fetch(apiUrl);
    const posts = await response.json();
  }
  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }