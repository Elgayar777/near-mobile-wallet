import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export function DAODepositIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "DAODepositIcon" }}
        >
            <G clipPath="url(#clip0_149_7)">
                <Path d="M23.7241 16.0363C23.6117 15.8554 23.4739 15.6907 23.3146 15.547C23.0264 15.2961 22.6722 15.1284 22.2916 15.0627C21.9111 14.997 21.5192 15.0359 21.1601 15.1751C21.0697 15.2108 20.9818 15.2525 20.8972 15.3C20.5053 15.5221 20.1987 15.8631 20.0244 16.2709C19.8991 16.5662 19.8467 16.886 19.8713 17.2046C19.8825 17.3418 19.9082 17.4776 19.9479 17.6097L15.1493 20.3059C14.9081 20.1523 14.637 20.0487 14.3529 20.0015L14.0908 16.5152C14.7533 16.4079 15.3903 16.1846 15.9711 15.8562C16.2347 15.7097 16.485 15.5416 16.7193 15.3538C16.7552 15.3247 16.7821 15.2864 16.7969 15.2432C16.8116 15.2 16.8136 15.1537 16.8027 15.1094C16.7918 15.0652 16.7684 15.0248 16.7351 14.9929C16.7018 14.9609 16.66 14.9387 16.6144 14.9287C16.5223 14.9089 16.4307 14.8875 16.3395 14.8645C16.2404 14.8372 16.1366 14.8303 16.0346 14.8443C15.9326 14.8583 15.8347 14.8929 15.7472 14.9459C15.6707 14.9952 15.5926 15.0412 15.5127 15.084C14.7666 15.5079 13.9135 15.7202 13.05 15.6968C12.2907 15.6802 11.5467 15.4858 10.8807 15.13C10.2148 14.7742 9.64665 14.2675 9.2242 13.6527C9.16965 13.5713 9.1151 13.4857 9.06409 13.4015C8.62336 12.6575 8.40542 11.8081 8.43495 10.9496C8.44625 10.6315 8.49257 10.3155 8.5731 10.007C8.72215 9.40767 8.99477 8.84418 9.3744 8.35074C9.43368 8.27533 9.47598 8.18862 9.49857 8.09623C9.52115 8.00385 9.5235 7.90787 9.50547 7.81454C9.49485 7.76071 9.48422 7.70619 9.4743 7.65236C9.46476 7.59387 9.43846 7.53919 9.39843 7.49461C9.35841 7.45002 9.30627 7.41735 9.24803 7.40034C9.18979 7.38332 9.1278 7.38267 9.06919 7.39844C9.01058 7.41421 8.95773 7.44578 8.91672 7.4895C8.30154 8.17562 7.8711 8.99992 7.66412 9.88826L4.04091 9.39899C3.99319 9.25347 3.92978 9.11329 3.85175 8.98079C3.80393 8.89955 3.75043 8.82162 3.69163 8.74754L7.1037 3.87894C7.46229 4.01851 7.85388 4.05731 8.23398 3.99095C8.61408 3.92459 8.96746 3.75572 9.25396 3.50353C9.42163 3.35542 9.56289 3.18122 9.67197 2.98804C9.77917 2.79735 9.85428 2.59116 9.89443 2.37731C9.98402 1.90624 9.90023 1.41949 9.6578 1.00264C9.3739 0.559652 8.92447 0.241363 8.40429 0.114897C7.88412 -0.0115681 7.33385 0.0636752 6.86952 0.32476C6.4052 0.585844 6.06312 1.01236 5.91542 1.51437C5.76772 2.01638 5.82594 2.55464 6.07781 3.01564C6.10048 3.0529 6.12599 3.09155 6.15291 3.13089C6.20044 3.19913 6.25176 3.26478 6.30665 3.32756L2.92363 8.1582C2.61538 8.02099 2.27719 7.95979 1.93891 7.97998C1.60063 8.00017 1.27265 8.10114 0.983909 8.27399C0.695164 8.44683 0.454527 8.68623 0.283225 8.97107C0.111924 9.25592 0.0152242 9.57744 0.00165594 9.90729C-0.0119124 10.2371 0.058068 10.5652 0.205424 10.8625C0.352779 11.1597 0.572981 11.4171 0.846604 11.6119C1.12023 11.8067 1.43886 11.9329 1.7744 11.9794C2.10993 12.0259 2.45206 11.9912 2.77059 11.8785L4.19607 16.3779C4.01867 16.4244 3.84852 16.4941 3.69021 16.5849C3.21548 16.8518 2.86901 17.2914 2.72705 17.807C2.58508 18.3227 2.65923 18.8722 2.93319 19.3346C3.20715 19.797 3.65848 20.1345 4.18789 20.2727C4.7173 20.411 5.28142 20.3388 5.75616 20.0719C6.11057 19.8737 6.39566 19.5763 6.57446 19.2183L12.0638 21.3162C11.9484 21.6323 11.9159 21.9716 11.9694 22.3031C12.0229 22.6346 12.1607 22.9478 12.3702 23.2142C12.5797 23.4806 12.8542 23.6917 13.1689 23.8284C13.4835 23.9651 13.8282 24.0229 14.1717 23.9967C14.5151 23.9705 14.8464 23.861 15.1354 23.6783C15.4243 23.4956 15.6617 23.2453 15.8261 22.9504C15.9904 22.6555 16.0764 22.3252 16.0762 21.9896C16.0761 21.6541 15.9898 21.3239 15.8252 21.0291L20.4374 18.4357C20.7871 18.7909 21.2581 19.0091 21.7617 19.0492C22.2652 19.0893 22.7663 18.9485 23.1706 18.6533C23.5748 18.3582 23.8541 17.9291 23.9559 17.4471C24.0576 16.9651 23.9746 16.4635 23.7227 16.037L23.7241 16.0363ZM5.86881 16.6539C5.66911 16.5262 5.44911 16.4315 5.21771 16.3737L3.61299 11.3174C3.85769 11.0474 4.02336 10.7182 4.09263 10.3644L7.53021 10.8289C7.47361 11.8841 7.73278 12.9327 8.27625 13.8473C8.35941 13.99 8.45047 14.1283 8.54902 14.2614L5.86881 16.6539ZM12.9764 20.2424C12.8467 20.318 12.7249 20.4058 12.6129 20.5046L6.78913 18.2763C6.77949 17.9547 6.69107 17.64 6.53124 17.3585L9.17957 14.9922C10.2258 16.0065 11.6391 16.5802 13.1152 16.5897L13.3774 20.0692C13.2391 20.116 13.1052 20.1742 12.9771 20.2431" />
                <Path d="M22.3222 3.17781L17.3146 8.05744L19.0483 9.7461C19.1371 9.83231 19.201 9.93979 19.2335 10.0577C19.2661 10.1756 19.2662 10.2998 19.2338 10.4178C19.2014 10.5358 19.1376 10.6433 19.049 10.7297C18.9603 10.816 18.8499 10.8781 18.7288 10.9096L12.2496 12.6003C12.1286 12.6323 12.001 12.6325 11.8798 12.601C11.7586 12.5696 11.648 12.5075 11.5593 12.4211C11.4706 12.3347 11.4069 12.2271 11.3746 12.109C11.3423 11.9909 11.3426 11.8667 11.3754 11.7487L13.1112 5.43786C13.1434 5.31988 13.207 5.21228 13.2956 5.1259C13.3842 5.03952 13.4946 4.97741 13.6156 4.94585C13.7367 4.91428 13.8642 4.91437 13.9852 4.94611C14.1062 4.97785 14.2165 5.04012 14.305 5.12662L16.0386 6.81528L21.0483 1.93564C21.1319 1.85368 21.2312 1.78864 21.3406 1.74425C21.4501 1.69986 21.5674 1.677 21.686 1.677C21.8045 1.677 21.9219 1.69986 22.0313 1.74425C22.1408 1.78864 22.2401 1.85368 22.3236 1.93564C22.4076 2.01707 22.4742 2.11386 22.5197 2.22044C22.5652 2.32703 22.5886 2.44131 22.5886 2.55672C22.5886 2.67214 22.5652 2.78642 22.5197 2.893C22.4742 2.99959 22.4076 3.09637 22.3236 3.17781" />
            </G>
            <Defs>
                <ClipPath id="clip0_149_7">
                    <Rect width="24" height="24" />
                </ClipPath>
            </Defs>
        </SvgIcon>
    );
}
