

export const GetAllPosts = async () => {
  return fetch(`http://${process.env.NEXT_PUBLIC_DIRECTUS_HOST}/items/Blog_Post`);
};
