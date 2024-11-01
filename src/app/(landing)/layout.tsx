import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="relative min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
