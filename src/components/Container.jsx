const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[70%] lg:max-w-7xl px-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
