import { useEffect } from "react";
import { WalletStorage } from "module/wallet/WalletStorage";
import useCreateWallet from "module/wallet/hook/useCreateWallet";
import { useSetRecoilState } from "recoil";
import walletState from "module/wallet/state/WalletState";
import { SettingsStorage } from "module/settings/SettingsStorage";
import settingsState from "module/settings/state/SettingsState";

const CreateWalletSuccessScreen = (): JSX.Element => {
    const {
        state: { mnemonic, pin, name },
    } = useCreateWallet();
    const setWalletState = useSetRecoilState(walletState);
    const setSettingsState = useSetRecoilState(settingsState);

    useEffect(() => {
        const setStorage = async () => {
            await WalletStorage.set({ name: name!, pin: pin!, mnemonic: mnemonic! }).then(async () => {
                SettingsStorage.set({ fiat: "usd", fee: "average", network: "mainnet" }).then(async () => {
                    await new Promise((resolve) => setTimeout(() => resolve(null), 2000));
                    setSettingsState((state) => ({ ...state, fiat: "usd", fee: "average", network: "mainnet" }));
                    setWalletState((state) => ({ ...state, hasWallet: true, isAuthenticated: true }));
                });
            });
        };
        setStorage();
    }, []);

    return <></>;
};

export default CreateWalletSuccessScreen;
