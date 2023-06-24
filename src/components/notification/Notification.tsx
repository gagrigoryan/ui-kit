import React from "react";
import { Notification as BaseNotification } from "baseui/notification";
import { getNotificationOverrides } from "./overrides";
import { NOTIFICATION_KIND, NotificationProps } from "./types";
import NotificationContent from "./ui/NotificationContent";
import { CancelIcon, CompleteIcon, IconProps, InfoIcon, WarningIcon } from "../icons";
import { Button, BUTTON_KIND, BUTTON_SIZE } from "../button";
import { PRIMITIVE_COLORS } from "../../shared";

const semanticIcon = {
  [NOTIFICATION_KIND.info]: ({ ...props }: IconProps) => <InfoIcon {...props} />,
  [NOTIFICATION_KIND.warning]: ({ ...props }: IconProps) => <WarningIcon {...props} />,
  [NOTIFICATION_KIND.positive]: ({ ...props }: IconProps) => <CompleteIcon {...props} />,
  [NOTIFICATION_KIND.negative]: ({ ...props }: IconProps) => <CancelIcon {...props} />,
};

const actionColors = {
  [NOTIFICATION_KIND.info]: undefined,
  [NOTIFICATION_KIND.warning]: {
    backgroundColor: PRIMITIVE_COLORS.warning600,
    color: PRIMITIVE_COLORS.white,
  },
  [NOTIFICATION_KIND.negative]: {
    backgroundColor: PRIMITIVE_COLORS.error600,
    color: PRIMITIVE_COLORS.white,
  },
  [NOTIFICATION_KIND.positive]: {
    backgroundColor: PRIMITIVE_COLORS.positive600,
    color: PRIMITIVE_COLORS.white,
  },
};

const Notification: React.FC<NotificationProps> = ({
  kind = NOTIFICATION_KIND.info,
  hideIcon,
  children,
  icon,
  isAction,
  actionLabel = "Close",
  ...props
}) => {
  const overrides = getNotificationOverrides();

  const Icon = semanticIcon[kind];

  return (
    <BaseNotification {...props} kind={kind} overrides={overrides}>
      {({ dismiss }) => (
        <NotificationContent
          icon={icon ?? (!hideIcon && <Icon />)}
          action={
            <>
              {isAction && (
                <Button
                  onClick={dismiss}
                  kind={BUTTON_KIND.secondary}
                  size={BUTTON_SIZE.compact}
                  colors={actionColors[kind]}
                >
                  {actionLabel}
                </Button>
              )}
            </>
          }
        >
          {children}
        </NotificationContent>
      )}
    </BaseNotification>
  );
};

export default Notification;
