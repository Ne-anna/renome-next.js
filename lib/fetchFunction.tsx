export async function getSortedPostsData() {
  const requestURL =
    "https://raw.githubusercontent.com/Ne-anna/renome-typescript/main/src/db.json";
  const request = await fetch(requestURL);

  return await request.json();
}
