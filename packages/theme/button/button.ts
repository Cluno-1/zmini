import {
  gradient,
  color,
  textColor,
  activeGradient,
  activeColor,
} from "../color";

export const _ButtonTypeMap = new Map([
  [
    "default",
    {
      bgColor: gradient[0],
      textColor: textColor[1],
      activeColor: activeGradient[0],
    },
  ],
  [
    "warning",
    {
      bgColor: gradient[1],
      textColor: textColor[1],
      activeColor: activeGradient[1],
    },
  ],
  [
    "info",
    {
      bgColor: gradient[2],
      textColor: textColor[1],
      activeColor: activeGradient[2],
    },
  ],
  [
    "plain",
    {
      bgColor: gradient[3],
      textColor: textColor[1],
      activeColor: activeGradient[3],
    },
  ],
  [
    "purple",
    { bgColor: color[0], textColor: textColor[1], activeColor: activeColor[0] },
  ],
  [
    "blue",
    { bgColor: color[1], textColor: textColor[1], activeColor: activeColor[1] },
  ],
  [
    "green",
    { bgColor: color[2], textColor: textColor[1], activeColor: activeColor[2] },
  ],
  [
    "orange",
    { bgColor: color[3], textColor: textColor[1], activeColor: activeColor[3] },
  ],
  [
    "pink",
    { bgColor: color[4], textColor: textColor[1], activeColor: activeColor[4] },
  ],
  [
    "red",
    { bgColor: color[5], textColor: textColor[1], activeColor: activeColor[5] },
  ],
  [
    "light-green",
    { bgColor: color[6], textColor: textColor[1], activeColor: activeColor[6] },
  ],
  [
    "white",
    { bgColor: color[7], textColor: textColor[1], activeColor: activeColor[7] },
  ],
  [
    "black",
    { bgColor: color[8], textColor: textColor[0], activeColor: activeColor[8] },
  ],
]);
