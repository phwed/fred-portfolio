import React from "react";

export const About = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id}
      className="bg-gold flex h-screen flex-col"
    >
      About
    </section>
  );
});
