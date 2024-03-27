const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-48 h-72 p-4 m-4 bg-gray-200  rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
