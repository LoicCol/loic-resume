import { ReactNode, useRef, useEffect, useReducer } from "react";
import { ChevronRight } from "react-feather";
import { useSpring, animated } from "react-spring";

type CollapsibleListProps = {
  title: ReactNode;
  children: ReactNode;
  isDefaultCollapsed?: boolean;
};

type CollapsibleListState = {
  isCollapsed: boolean;
  contentHeight: number | string;
  isInit: boolean;
};

type CollapsibleListAction =
  | { type: "TOGGLE_COLLAPSE" }
  | { type: "SET_CONTENT_HEIGHT"; height: number | string }
  | { type: "SET_INIT"; isInit: boolean };

const reducer = (
  state: CollapsibleListState,
  action: CollapsibleListAction,
): CollapsibleListState => {
  switch (action.type) {
    case "TOGGLE_COLLAPSE":
      return {
        ...state,
        isInit: true,
        isCollapsed: !state.isCollapsed,
      };
    case "SET_CONTENT_HEIGHT":
      return {
        ...state,
        contentHeight: action.height,
      };
    default:
      return state;
  }
};

const CollapsibleList = ({
  title,
  children,
  isDefaultCollapsed = true,
}: CollapsibleListProps) => {
  const [state, dispatch] = useReducer(reducer, {
    isCollapsed: isDefaultCollapsed,
    contentHeight: 0,
    isInit: isDefaultCollapsed,
  });
  const { isCollapsed, contentHeight, isInit } = state;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      dispatch({
        type: "SET_CONTENT_HEIGHT",
        height: contentRef.current.scrollHeight,
      });
    }
  }, [children]);

  const { height, transform } = useSpring({
    height: isCollapsed ? 0 : contentHeight,
    transform: isCollapsed ? "rotate(0deg)" : "rotate(90deg)",
  });

  const toggleCollapse = () => {
    dispatch({ type: "TOGGLE_COLLAPSE" });
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center"
        onClick={toggleCollapse}
      >
        <animated.button className="mr-6" style={{ transform }}>
          <ChevronRight className="text-blue-700 dark:text-blue-400" />
        </animated.button>
        {title}
      </div>

      <animated.div
        style={{
          overflow: "hidden",
          height: !isInit ? "100%" : height,
        }}
      >
        <div ref={contentRef}>{children}</div>
      </animated.div>
    </div>
  );
};

export default CollapsibleList;
