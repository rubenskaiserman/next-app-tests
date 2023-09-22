export async function getGithubPage() {
  const githubData = fetch("https://api.github.com/users/rubskaiserman").then((response) =>
    response.json()
  );

  return githubData;
}

export default async function Hello() {
  const githubContent = await getGithubPage(); // I can just call the function here
  // It is not needed to be inside useEffect
  // Neither to be in getStaticProps since we're working with app router

  return (
    <p>
      {githubContent.name} - {githubContent.bio}
    </p>
  );
}
