import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const listItemContentStyles = {
  ...expandProperty("padding", "12px 0 16px"),
  ...expandProperty("borderBottom", "none"),
  marginLeft: "0",
  boxSizing: "border-box",
  backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.primary600} 36%, rgba(255,255,255,0) 0%)`,
  backgroundPosition: `bottom`,
  backgroundSize: `10px 4px`,
  backgroundRepeat: `repeat-x`,
  color: PRIMITIVE_COLORS.primary500,

  ":hover": {
    backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.primary600} 100%, rgba(255,255,255,0) 0%)`,
    color: PRIMITIVE_COLORS.primary300,
  },
};

export const listItemContentActiveStyles = {
  backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.white} 100%, rgba(255,255,255,0) 0%)`,
  color: PRIMITIVE_COLORS.white,

  ":hover": {
    backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.white} 100%, rgba(255,255,255,0) 0%)`,
    color: PRIMITIVE_COLORS.white,
  },
};

export const listItemContentDisabledStyles = {
  backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.primary600} 36%, rgba(255,255,255,0) 0%)`,
  color: PRIMITIVE_COLORS.primary600,
  cursor: "not-allowed",

  ":hover": {
    backgroundImage: `linear-gradient(to right, ${PRIMITIVE_COLORS.primary600} 36%, rgba(255,255,255,0) 0%)`,
    color: PRIMITIVE_COLORS.primary600,
  },
};

export const listHeadingContentStyles = {
  ...expandProperty("padding", "8px 0"),
  position: "relative",
  marginLeft: "0",
  color: PRIMITIVE_COLORS.white,
};

export const listHeadingContainerStyles = {
  marginTop: "4px",
};

export const listHeadingEnhancerStyles = {
  position: "absolute",
  bottom: "8px",
  right: "0",
  textAlign: "right",
};
