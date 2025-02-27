import { forwardRef, memo } from "react";
import { useStyletron } from "baseui";
import { PRIMITIVE_COLORS } from "../../../shared";
import { ChevronDownIcon } from "../../icons";

type SelectArrowProps = {
  isRotated?: boolean;
  color?: string;
};

const SelectArrow = forwardRef<HTMLDivElement, SelectArrowProps>(({ color = PRIMITIVE_COLORS.white, isRotated }) => {
  const [css] = useStyletron();

  return (
    <ChevronDownIcon
      size={16}
      color={color}
      className={css({
        transform: isRotated ? "rotate(180deg)" : "unset",
        marginLeft: "16px",
      })}
    />
  );
});
SelectArrow.displayName = "SelectArrow";

export default memo(SelectArrow);
