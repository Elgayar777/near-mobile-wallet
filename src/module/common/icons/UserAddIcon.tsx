import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function UserAddIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "UserAddIcon" }}
        >
            <Path d="M11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4ZM5 8C5 4.68629 7.68629 2 11 2C14.3137 2 17 4.68629 17 8C17 11.3137 14.3137 14 11 14C7.68629 14 5 11.3137 5 8ZM20 11C20.5523 11 21 11.4477 21 12V13H22C22.5523 13 23 13.4477 23 14C23 14.5523 22.5523 15 22 15H21V16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16V15H18C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13H19V12C19 11.4477 19.4477 11 20 11ZM7.5 18C6.24054 18 5 19.2135 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 18.3682 4.89347 16 7.5 16H14.5C17.1065 16 19 18.3682 19 21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21C17 19.2135 15.7595 18 14.5 18H7.5Z" />
        </SvgIcon>
    );
}
