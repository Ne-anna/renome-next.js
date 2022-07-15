export async function getSortedPostsData() {
  const requestURL =
    "https://raw.githubusercontent.com/Ne-anna/Renome-react/main/src/db.json";
  const request = await fetch(requestURL);

  return await request.json();
}
