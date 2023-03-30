import { throttle } from "lodash-es";
import { useEffect, useState } from "react";

type TDirectionX = "initial" | "left" | "right";
type TDirectionY = "initial" | "top" | "bottom";
type TCoords = {
  x: number;
  y: number;
  directionX: TDirectionX;
  directionY: TDirectionY;
};

export const useScroll = () => {
  const [coords, setCoords] = useState<TCoords>({
    x: 0,
    y: 0,
    directionX: "initial",
    directionY: "initial",
  });

  useEffect(() => {
    const listener = throttle(() => {
      setCoords((prev) => {
        const x = window.scrollX;
        const y = window.scrollY;
        const directionX =
          x < prev.x ? "left" : x > prev.x ? "right" : prev.directionX;
        const directionY =
          y < prev.y ? "top" : y > prev.y ? "bottom" : prev.directionY;
        // console.log(directionY);
        return { x, y, directionX, directionY };
      });
    }, 50);

    window.addEventListener("scroll", listener, { passive: true });

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return coords;
};
