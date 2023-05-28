import React, { ReactNode } from "react";

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight:['400','500'],
  style:'italic',
  subsets: ['latin']
})

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={poppins.className}>
      Layout working yah!
      {children}
    </div>
  );
};

export default layout;
