export interface Blog {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    createdAt: string;
    body: string;
    author: {
      email: string;
      thumbnail: string;
    };
  }