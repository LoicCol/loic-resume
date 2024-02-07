import { ReactNode } from "react";
import { animated, useSpring } from "react-spring";

export const DarkThemeWrapper = ({
  children,
  isDark,
}: {
  children: ReactNode;
  isDark: boolean;
}) => {
  const props = useSpring({
    clipPath: isDark ? `circle(150% at 100% 0%)` : "circle(0% at 100% 0%)",
  });

  return (
    <div
      className={`${
        isDark && "dark"
      } flex h-screen justify-center overflow-auto border-black bg-stone-200 p-10 font-mono transition-colors duration-200`}
    >
      {children}
      <animated.div
        style={props}
        className="pointer-events-none fixed left-0 top-0 h-screen w-screen bg-white opacity-100 mix-blend-difference"
      ></animated.div>
    </div>
  );
};
