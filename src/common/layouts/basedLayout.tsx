import React from "react";
import Header from "../../modules/header"
const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  
  return (
    <div>
        <Header/>      
      {children}
    </div>
  );
};

export default BaseLayout;