import { Col, IconButton, Typography } from "@peersyst/react-native-components";
import useTranslate from "module/common/hook/useTranslate";
import { useRecoilValue, useSetRecoilState } from "recoil";
import backupWalletState, { BackUp } from "module/wallet/state/BackUpWalletState";
import Button from "module/common/component/input/Button/Button";
import { ConfirmPinModalWrapper } from "module/settings/components/core/ConfirmPinModal/ConfirmPinModalWrapper";
import Advise from "module/common/component/display/Advise/Advise";
import { BaseUseModalStateReturn } from "module/common/hook/useModalState";
import { usePostHog } from "posthog-react-native";
import settingsState from "module/settings/state/SettingsState";
import Alert from "module/common/component/feedback/Alert/Alert";
import WalletsBackupAdviseAlertContent from "../WalletsBackupAdviseAlertContent/WalletsBackupAdviseAlertContent";
import { SaveIcon } from "icons";
import { WalletsBackupAdviseIcon } from "./WalletsBackupAdvise.styles";

export interface WalletsBackupAdviseProps {
    onSubmit: () => void;
}

export interface HandlePressParams {
    showModal: BaseUseModalStateReturn["showModal"];
    method: BackUp;
}

const WalletsBackupAdvise = ({ onSubmit }: WalletsBackupAdviseProps): JSX.Element => {
    const translate = useTranslate();
    const setState = useSetRecoilState(backupWalletState);
    const posthog = usePostHog();
    const { network } = useRecoilValue(settingsState);

    const handlePress = ({ method, showModal }: HandlePressParams) => {
        setState({ method });
        try {
            posthog?.capture("backup", {
                action_type: method,
                chain: network,
            });
        } catch (error) {}

        showModal();
    };

    return (
        <ConfirmPinModalWrapper onConfirmedExited={onSubmit}>
            {({ showModal }) => (
                <Col gap="10%" flex={1}>
                    <Col flex={1} gap="3%">
                        <WalletsBackupAdviseIcon>
                            <SaveIcon />
                        </WalletsBackupAdviseIcon>
                        <Col gap="3%">
                            <Typography variant="body3Regular" textAlign="center" style={{ lineHeight: 25 }}>
                                {translate("backup_wallet_advise_text") + " "}
                            </Typography>
                            <Alert color="orange" type="success" content={<WalletsBackupAdviseAlertContent />}></Alert>
                        </Col>
                    </Col>
                    <Col gap="4%">
                        <Button
                            fullWidth
                            onPress={() =>
                                handlePress({
                                    method: "mnemonic",
                                    showModal,
                                })
                            }
                        >
                            {translate("export_mnemonic")}
                        </Button>
                        <Button
                            fullWidth
                            onPress={() =>
                                handlePress({
                                    method: "privateKey",
                                    showModal,
                                })
                            }
                        >
                            {translate("export_private_key")}
                        </Button>
                    </Col>
                </Col>
            )}
        </ConfirmPinModalWrapper>
    );
};

export default WalletsBackupAdvise;
