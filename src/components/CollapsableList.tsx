import { useState, ReactNode, useRef, useEffect } from "react";
import { ChevronRight } from "react-feather";
import { useSpring, animated } from "react-spring";

type CollapsibleListProps = {
  title: ReactNode;
  children: ReactNode;
  isDefaultCollapsed?: boolean;
};

const CollapsibleList = ({
  title,
  children,
  isDefaultCollapsed = true,
}: CollapsibleListProps) => {
  const [isCollapsed, setIsCollapsed] = useState(isDefaultCollapsed);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const { height, transform } = useSpring({
    height: isCollapsed ? 0 : contentHeight,
    transform: isCollapsed ? "rotate(0deg)" : "rotate(90deg)",
  });

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center"
        onClick={toggleCollapse}
      >
        <animated.button className="mr-6" style={{ transform }}>
          <ChevronRight className=" text-blue-700" />
        </animated.button>
        {title}
      </div>

      <animated.div style={{ overflow: "hidden", height }}>
        <div ref={contentRef}>{children}</div>
      </animated.div>
    </div>
  );
};

export default CollapsibleList;
