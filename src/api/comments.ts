export const getComments = async (id: string) => {
  const res = await fetch(`https://www.reddit.com/r/wallpapers/comments/${id}.json?limit=3`);
  return res.json();
};
