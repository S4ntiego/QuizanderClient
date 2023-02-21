import { useRouter } from "next/router";

import React from "react";

const Siema = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>Siema</div>;
};

export default Siema;
