import React from "react";
import { Month_Type } from "./utils/data";
import { LOCALE_TYPE } from "./utils/locale";
import { Style } from "./index";
interface Props {
    item: Month_Type;
    locale: LOCALE_TYPE;
    handlePress: (date: string) => void;
    startDate: string | null;
    endDate: string | null;
    style?: Style;
}
declare function Month({ item, locale, handlePress, startDate, endDate, style, }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Month>;
export default _default;
//# sourceMappingURL=Month.d.ts.map