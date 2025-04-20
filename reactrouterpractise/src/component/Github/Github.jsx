import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center mt-10 mb-5">
      Github Follower:{data.followers}
      <img
        src={data.avatar_url}
        alt="git avatar"
        width={200}
        className="mt-3"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("http://api.github.com/undeadskeleton");
  return response.json();
};
