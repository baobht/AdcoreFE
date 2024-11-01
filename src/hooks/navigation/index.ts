import { usePathname } from "next/navigation";
import { useState } from "react";

export const useSection = () => {
  const pathName = usePathname();
  const [section, setSection] = useState<string>(pathName);
  return { section, setSection };
};
