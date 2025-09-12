import React, { ReactNode } from "react";

import Header from "organisms/header";
import FooterForm from "organisms/footer-form";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <FooterForm />
    </div>
  );
};

export default DefaultLayout;
