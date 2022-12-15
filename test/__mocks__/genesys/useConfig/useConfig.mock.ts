import * as Genesys from "@peersyst/react-native-components";
import { envConfigs } from "config/config";
import BaseMock, { MockFnType } from "mocks/common/base.mock";

export interface UseConfigMock {
    config: Genesys.Config;
    useConfig: MockFnType;
    key: keyof Genesys.Config;
}

export interface UseConfigMockOptions {
    config?: Partial<Genesys.Config>;
    useConfig?: MockFnType;
    key?: keyof Genesys.Config;
}

export class UseConfigMock extends BaseMock implements UseConfigMock {
    config: Genesys.Config;
    useConfig: MockFnType;
    key: keyof Genesys.Config;
    constructor({ config, useConfig, key = "minimumTransactionAmount" }: UseConfigMockOptions = {}) {
        super();
        this.config = { ...envConfigs.test, ...config } as Genesys.Config;
        this.key = key;
        this.useConfig = useConfig || jest.fn().mockReturnValue(this.config[key]);
        jest.spyOn(Genesys, "useConfig").mockReturnValue(this.useConfig);
    }
}
