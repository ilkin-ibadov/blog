export interface Blog {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    timestamp: string;
    author: {
      name: string;
      thumbnail: string;
    };
  }
  