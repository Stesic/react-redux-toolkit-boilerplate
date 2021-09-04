import React, { memo, useEffect, useState } from "react";

const AppLayout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};



export default memo(AppLayout);
