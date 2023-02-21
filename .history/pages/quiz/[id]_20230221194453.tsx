import React from "react";

const Siema = () => {
  return <div>Siema</div>;
};

export default Siema;

export const getServerSideProps = async ({ context, req }) => {
  console.log(context);

  return { props: { title: "" } };
};
