//
// 汎用
//

// 必須
export const isRequired = (s: string): boolean => {
    return (s != null) && (s.length > 0);
}

// 範囲
export const isValidRange = (n: number, min: number, max: number): boolean => {
    return (n >= min) && (n <= max);
}

// 数字
export const isNumeric = (s: string): boolean => {
    return (s.match(/^[0-9]+$/g) != null);
}

// 郵便番号
export const isPostalCode = (s: string): boolean => {
    return (s.match(/^\d{3}-?\d{4}$/g) != null);
}

// 郵便番号(ハイフンなし)
export const isPostalCodeWithoutHyphen = (s: string): boolean => {
    return (s.match(/^\d{7}$/g) != null);
}

// メールアドレス
export const isMailAddress = (s: string): boolean => {
    return (s.match(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/g) != null);
}

// YYYY/MM/DD形式日付
export const isSlashSeparatedDateYYYYMMDD = (s: string): boolean => {
    return (s.match(/^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/g) != null);
}
