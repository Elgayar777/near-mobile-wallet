import { translate } from "locale";
import BaseSecondaryScreen from "module/common/component/layout/BaseSecondaryScreen/BaseSecondaryScreen";
import { Col } from "react-native-components";
import { BottomTabScreenNavigatonProps } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup.types";
import { MainBottomScreens } from "module/main/component/navigation/MainBottomNavigatorGroup/MainBottomNavigatorGroup";
import SettingsMenu from "module/settings/components/input/SettingsMenu/SettingsMenu";

const SettingsScreen = ({ navigation }: BottomTabScreenNavigatonProps): JSX.Element => {
    return (
        <BaseSecondaryScreen title={translate("settings")} back={false} navigation={navigation}>
            <Col gap={"5%"}>
                <SettingsMenu label={translate("general_settings")} location={MainBottomScreens.GENERAL_SETTINGS} />
                <SettingsMenu label={translate("security_settings")} location={MainBottomScreens.SECURITY_SETTINGS} />
            </Col>
        </BaseSecondaryScreen>
    );
};

export default SettingsScreen;
