import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { WalletStorage } from "module/wallet/WalletStorage";
import walletState from "module/wallet/state/WalletState";
import { SettingsStorage } from "module/settings/SettingsStorage";
import settingsState from "module/settings/state/SettingsState";

export function useLoad(): boolean {
    const [loading, setLoading] = useState(true);
    const setWalletState = useSetRecoilState(walletState);
    const setSettingsState = useSetRecoilState(settingsState);

    useEffect(() => {
        WalletStorage.getName().then((name) => {
            if (name) {
                setWalletState((state) => ({ ...state, hasWallet: true, name }));
                SettingsStorage.getAllSettings().then((settings) => {
                    setSettingsState((state) => ({...state, settings}))
                })
            }
            setLoading(false);
        });


    }, [setWalletState]);

    return loading;
}
