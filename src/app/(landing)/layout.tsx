import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

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
