import React from "react";

function page({ params }: { params: { slug: string } }) {
  const d = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
  ];
  const id = +params.slug;
  if (!d.find((data) => data.id === id)) return <div>not found</div>;

  return <div>page{params.slug}</div>;
}

export default page;
