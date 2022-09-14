import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function CopyIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "CopyIcon" }}
        >
            <Path d="M18.8975 1.693H7.51998C6.56093 1.693 5.64115 2.07398 4.963 2.75213C4.28484 3.43029 3.90386 4.35006 3.90386 5.30912V20.6992C3.33267 20.4192 2.85145 19.9847 2.5149 19.4449C2.17835 18.9051 1.99996 18.2818 2 17.6457V5.03134C2.00027 3.69703 2.53044 2.41744 3.47394 1.47394C4.41744 0.530441 5.69703 0.000268771 7.03134 0L15.9525 0C16.5479 0.000105888 17.1328 0.156535 17.6487 0.453642C18.1647 0.750748 18.5935 1.17812 18.8925 1.693" />
            <Path d="M18.8975 2.9541C18.8691 2.9541 18.8407 2.9541 18.8134 2.9541H8.28434C7.48965 2.9541 6.72747 3.26965 6.16535 3.8314C5.60323 4.39314 5.28716 5.1551 5.28662 5.94979V20.5978C5.28671 20.7476 5.29687 20.8973 5.31703 21.0458C5.42561 21.8631 5.82723 22.6131 6.44722 23.1564C7.06722 23.6998 7.86342 23.9995 8.68782 24H18.8123C19.2591 24 19.7014 23.912 20.1142 23.741C20.5269 23.57 20.9019 23.3194 21.2177 23.0034C21.5336 22.6875 21.7841 22.3124 21.9549 21.8997C22.1258 21.4869 22.2137 21.0445 22.2135 20.5978V6.35429C22.2141 5.46664 21.8674 4.61401 21.2475 3.97863C20.6277 3.34325 19.7839 2.97554 18.8965 2.9541H18.8975ZM20.2833 20.4923C20.282 20.9192 20.1118 21.3281 19.81 21.6299C19.5082 21.9317 19.0993 22.1019 18.6724 22.1032H8.82874C8.40226 22.1019 7.99361 21.932 7.69186 21.6306C7.39011 21.3293 7.21972 20.9208 7.21785 20.4944V6.45668C7.21946 6.03003 7.38972 5.62133 7.6915 5.31974C7.99328 5.01815 8.40209 4.84815 8.82874 4.84681H18.6735C19.1003 4.84815 19.5092 5.01829 19.811 5.3201C20.1129 5.62191 20.283 6.03087 20.2843 6.45769L20.2833 20.4923Z" />
        </SvgIcon>
    );
}
