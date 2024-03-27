import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className=" p-2 m-2 bg-white rounded-2xl shadow-2xl">
      <h1 className="font-bold text-xl ">{title}</h1>
      {isVisible ? (
        <>
          <button
            className="underline cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="underline cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("");
  return (
    <div className=" flex justify-center h-screen">
      <div className="w-10/12 ">
        <h1 className="text-3xl font-bold p-2 m-2"> Instamart</h1>
        <Section
          title={"About InstaMart"}
          description={
            " This Section is About InstaMart. Lorem ipsum um dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem a dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem asperiores suscipit tempora eum provident  Autem asperiores suscipit tempora eum provident."
          }
          isVisible={visibleSection == "about"}
          setIsVisible={(e) => {
            e ? setIsVisibleSection("about") : setIsVisibleSection("");
          }}
        />
        <Section
          title={"Team"}
          description={
            " This Section is About InstaMart. Lorem ipsum um dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem a dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem asperiores suscipit tempora eum provident  Autem asperiores suscipit tempora eum provident."
          }
          isVisible={visibleSection == "team"}
          setIsVisible={(e) => {
            e ? setIsVisibleSection("team") : setIsVisibleSection("");
          }}
        />
        <Section
          title={"Career"}
          description={
            " This Section is About InstaMart. Lorem ipsum um dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem a dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem asperiores suscipit tempora eum provident  Autem asperiores suscipit tempora eum provident."
          }
          isVisible={visibleSection == "career"}
          setIsVisible={(e) => {
            e ? setIsVisibleSection("career") : setIsVisibleSection("");
          }}
        />
        <Section
          title={"Products"}
          description={
            " This Section is About InstaMart. Lorem ipsum um dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem a dolor sit amet consectetur adipisicing elit. Iste temporibus itaque nemo hic quas nisi natus doloribus. Quia ullam possimus dignissimos placeat porro in, fuga voluptatibus debitis delectus suscipit dolore dolorum molestias odio, facilis hic vel corporis obcaecati, culpa cumque laudantium ipsum quod tenetur. Autem asperiores suscipit tempora eum provident  Autem asperiores suscipit tempora eum provident."
          }
          isVisible={visibleSection == "product"}
          setIsVisible={(e) => {
            e ? setIsVisibleSection("product") : setIsVisibleSection("");
          }}
        />
      </div>
    </div>
  );
};

export default Instamart;
