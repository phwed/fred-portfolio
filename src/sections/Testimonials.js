import React from "react";

export const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id}
      className="bg-lightGold flex h-screen flex-col"
    >
      <div className="mt-20">
        <h1 className="text-2xl font-medium text-center pt-5">Some Generous Words</h1>
        <p className="text-center font-light">Some of my favorite testimonials from my clients</p>
      </div>
    </section>
  );
});
