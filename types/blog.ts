export interface Blog {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    created_at: string;
    body: string;
    author: {
      email: string;
      thumbnail: string;
    };
  }