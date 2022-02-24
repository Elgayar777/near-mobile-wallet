import styled from "@peersyst/react-native-styled";
import { AppearanceProps } from "module/common/types";
import { ReactNode } from "react";
import { Dimensions, Platform, StatusBar, View } from "react-native";

export interface HeaderRootProps extends AppearanceProps {
    children: ReactNode;
}

export const HeaderRoot = styled(View)<HeaderRootProps>(({ theme }) => {
    return {
        width: Dimensions.get("window").width,
        height: 108,
        justifyContent: "flex-end",
        marginBottom: 10,
    }
});

export const HeaderShadowRoot = styled(View)(({ theme }) => ({
    overflow: 'hidden',
    height: 20,
    marginTop: 5,
    width: Dimensions.get("window").width,
    position: "relative",
}));

export const HeaderShadow = styled(View)(({ theme }) => ({
    top: -5,
    height: 20,
    width: Dimensions.get("window").width * 2,
    left: -10,
    position: "absolute",
    borderBottomWidth: 0.5,
    borderBottomColor: "transparent",
    ...theme.shadows[3],
}))
