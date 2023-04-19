export interface IArticle {
    title: {
      rendered: string;
    }
    date: string;
    id: string;
    modified: string;
    link: string;
    excerpt: {
      rendered: string;
    }
    content: {
      rendered: string;
      protected: boolean;
    }
    slug: string
    imageUrl: string;
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url: string;
          media_details: {
            sizes: {
              full: {
                source_url: string;
              }
              thumbnail: {
                source_url: string;
              }
              medium: {
                source_url: string;
              }
            }
          }
        }
      ];
    };
    yoast_head_json: {
      og_image: string;
      author: string;
      og_url: string;
      title: string;
      description:  string;
    }
  }
  
  
  