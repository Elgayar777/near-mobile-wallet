import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function RefreshIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "RefreshIcon" }}
        >
            <Path d="M4.86669 7.28723L6.75474 6.70921C6.90352 6.66371 7.05981 6.64796 7.21467 6.66287C7.36954 6.67777 7.51996 6.72303 7.65733 6.79606C7.79471 6.86909 7.91636 6.96847 8.01533 7.08851C8.1143 7.20856 8.18865 7.34692 8.23415 7.4957C8.27965 7.64448 8.2954 7.80077 8.28049 7.95564C8.26559 8.1105 8.22033 8.26092 8.1473 8.39829C8.07427 8.53567 7.97489 8.65732 7.85485 8.75629C7.7348 8.85526 7.59644 8.92961 7.44766 8.97511L2.91704 10.3609C2.76818 10.4065 2.61181 10.4222 2.45688 10.4072C2.30194 10.3923 2.15147 10.3469 2.01407 10.2737C1.87667 10.2006 1.75504 10.1011 1.65613 9.98088C1.55722 9.86069 1.48297 9.72218 1.43763 9.57327L0.0517904 5.04265C0.0062927 4.89387 -0.00945482 4.73758 0.00544695 4.58272C0.0203487 4.42785 0.0656079 4.27743 0.13864 4.14006C0.211673 4.00268 0.311049 3.88104 0.431093 3.78207C0.551138 3.6831 0.689501 3.60874 0.838282 3.56324C1.13876 3.47135 1.46343 3.5026 1.74088 3.65009C2.01832 3.79759 2.22581 4.04926 2.31769 4.34973L2.83886 6.05656C5.69108 1.66334 11.3493 -0.225898 16.3727 1.83272C17.875 2.44848 19.224 3.38598 20.325 4.57923C21.426 5.77249 22.2521 7.19252 22.7452 8.7394C22.7957 8.88841 22.8161 9.046 22.805 9.20297C22.794 9.35993 22.7518 9.51313 22.6809 9.6536C22.61 9.79408 22.5118 9.91902 22.3921 10.0211C22.2724 10.1232 22.1335 10.2005 21.9836 10.2483C21.8337 10.2962 21.6758 10.3136 21.519 10.2998C21.3623 10.2859 21.2099 10.2409 21.0707 10.1675C20.9316 10.0941 20.8084 9.99365 20.7085 9.8721C20.6086 9.75055 20.5339 9.61031 20.4887 9.45956C19.9883 7.8882 19.0537 6.49042 17.7927 5.42761C16.5318 4.36479 14.9959 3.68029 13.3625 3.45314C11.7291 3.22599 10.0648 3.46546 8.56171 4.14389C7.05861 4.82231 5.77804 5.91204 4.86787 7.28723H4.86669ZM19.4677 16.994L17.3653 17.5187C17.213 17.5605 17.054 17.5714 16.8975 17.5508C16.741 17.5302 16.5902 17.4785 16.4539 17.3988C16.3177 17.3191 16.1987 17.213 16.1041 17.0866C16.0094 16.9603 15.941 16.8163 15.9028 16.6632C15.8646 16.51 15.8574 16.3507 15.8816 16.1948C15.9058 16.0388 15.9609 15.8892 16.0438 15.7548C16.1266 15.6205 16.2355 15.504 16.364 15.4123C16.4925 15.3206 16.638 15.2555 16.792 15.2209L21.107 14.1442C21.3319 14.0372 21.5848 14.004 21.8296 14.0494C22.0654 14.0804 22.2865 14.1818 22.464 14.3402C22.6414 14.4987 22.7671 14.7069 22.8245 14.9378L23.9711 19.5335C24.039 19.8354 23.9861 20.1518 23.8238 20.4152C23.6614 20.6785 23.4024 20.8679 23.1022 20.9428C22.802 21.0177 22.4845 20.9722 22.2174 20.8159C21.9504 20.6597 21.755 20.4052 21.6732 20.1068L21.2823 18.5409C20.1419 20.1821 18.5799 21.4853 16.761 22.3133C14.942 23.1412 12.9334 23.4633 10.9468 23.2455C8.96018 23.0278 7.06906 22.2782 5.47267 21.0759C3.87628 19.8735 2.63372 18.2629 1.87588 16.4136L1.56792 15.6627C1.50897 15.5187 1.47895 15.3645 1.47957 15.209C1.4802 15.0534 1.51146 14.8995 1.57157 14.756C1.63168 14.6125 1.71946 14.4823 1.8299 14.3728C1.94034 14.2632 2.07128 14.1765 2.21524 14.1175C2.50597 13.9985 2.8321 13.9998 3.12187 14.1212C3.26535 14.1813 3.39559 14.2691 3.50515 14.3795C3.6147 14.4899 3.70143 14.6209 3.76038 14.7648L4.06835 15.5146C4.67213 16.9879 5.66679 18.2683 6.94498 19.2177C8.22317 20.1671 9.73636 20.7494 11.3213 20.9018C12.9061 21.0541 14.5026 20.7708 15.9382 20.0824C17.3739 19.3939 18.5943 18.3264 19.4677 16.9952V16.994Z" />
        </SvgIcon>
    );
}
