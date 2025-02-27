import { StyleObject } from "styletron-react";
import { PROGRESS_BAR_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const containerStyles: StyleObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};
export const getProgressWrapperStyles = (size: PROGRESS_BAR_SIZE): StyleObject => {
  const heightBySize = {
    [PROGRESS_BAR_SIZE.small]: "4px",
    [PROGRESS_BAR_SIZE.medium]: "8px",
    [PROGRESS_BAR_SIZE.large]: "12px",
  };

  return {
    display: "flex",
    alignItems: "central",
    width: "100%",
    height: heightBySize[size],
    border: "none",
    transition: "backgroundImage .2s ease-in",
  };
};

export const dashedBlockStyles: StyleObject = {
  width: "4px",
  height: "100%",
};

export const dashedBlockActiveStyles: StyleObject = {
  backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.white} 50%, transparent 50%)`,
};

export const dashedBlockErrorStyles: StyleObject = {
  backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.error400} 50%, transparent 50%)`,
};

export const dashedBlockNotActiveStyles: StyleObject = {
  backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.primary700} 50%, transparent 50%)`,
};

export const labelStyles: StyleObject = {
  marginTop: "12px",
};
