const Section = ({ children, className = "" }) => {
  return (
    <section className={`w-full relative ${className}`}>{children}</section>
  );
};

export default Section;
