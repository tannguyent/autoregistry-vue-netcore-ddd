import { BaseModel } from "../domain/entity/index";
export interface IAppSetting {
}

export class BaseAppSetting extends BaseModel<IAppSetting>
    implements IAppSetting {
    ResourceUrl?: string;
    GroupIconFilePath?: string;
    FolderIconFilePath?: string;

    constructor(options?: IAppSetting) {
        super(options);
    }
}

export class DefaultAppSetting extends BaseAppSetting {
    constructor() {
        super({
        });
    }
}

export class AppSettingStored {
    private static appSetting: IAppSetting;
    constructor(options?: IAppSetting) {
        AppSettingStored.appSetting = options;
    }

    static instance(): IAppSetting {
        return AppSettingStored.appSetting || new DefaultAppSetting();
    }
}
