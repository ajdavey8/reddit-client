export const getPosts = async (id: string) => {
  const res = await fetch(`https://www.reddit.com/r/wallpapers/top.json?t=all&after=t3_${id}&limit=25`);
  return res.json();
};
