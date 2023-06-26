import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const LinkedinIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);

  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7V26.2C4 27.1 4.8 27.9 5.8 27.9H26.2C27.2 27.9 28 27.1 28 26.2V5.7C28 4.8 27.2 4 26.2 4ZM11.1 24.4H7.6V13H11.1V24.4ZM9.4 11.4C8.3 11.4 7.3 10.5 7.3 9.3C7.3 8.1 8.2 7.2 9.4 7.2C10.5 7.2 11.5 8.1 11.5 9.3C11.5 10.5 10.5 11.4 9.4 11.4ZM24.5 24.3H21V18.7C21 17.4 21 15.6 19.1 15.6C17.2 15.6 17 17.1 17 18.5V24.2H13.5V13H16.8V14.5H16.9C17.4 13.6 18.6 12.6 20.3 12.6C23.9 12.6 24.6 15 24.6 18.1V24.3H24.5Z" />
    </Svg>
  );
};

export default memo(LinkedinIcon);
