import React from "react";

function Header({ title }: { title: string }) {
  return <div className="text-4xl font-bold">{title}</div>;
}

export default Header;
