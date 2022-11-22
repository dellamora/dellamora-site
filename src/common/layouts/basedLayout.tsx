import React from "react";

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  
  return (
    <div>      
      {children}
    </div>
  );
};

export default BaseLayout;