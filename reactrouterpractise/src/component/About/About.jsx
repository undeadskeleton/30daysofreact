import { useLoaderData } from "react-router-dom";

function About() {
  const data = useLoaderData();

  return (
    <div className="flex mt-10 mb-5">
      <div className="flex-1 flex justify-center">
        <img src={data.avatar_url} alt="Git picture" width={200} />
      </div>
      <div className="flex-1">
        <p className="font-bold text-4xl">
          React development is carried out by passionate developers
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          mollitia officiis impedit cupiditate eveniet voluptates, modi animi
          commodi veniam minus quas rerum? Amet asperiores labore repudiandae
          expedita inventore corporis quas at sint?
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis
          temporibus debitis mollitia adipisci architecto iure, laudantium
          laboriosam similique cum corporis tenetur porro.
        </p>
      </div>
    </div>
  );
}

export default About;

export const gitInfoLoader = async () => {
  const response = await fetch("http://api.github.com/users/undeadskeleton");
  return response.json();
};
