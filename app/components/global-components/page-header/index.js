const PageHeader = ({ children }) => {
  return (
    <div
      className="mt-28 relative w-screen px-32 py-28 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-70"
      style={{
        backgroundImage: 'url("/leaves_texture.png")',
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl lg:text-5xl text-white z-20">{children}</h1>
    </div>
  );
};

export default PageHeader;
