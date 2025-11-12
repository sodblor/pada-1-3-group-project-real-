export const AIMAG_ID_TO_NAME = {
  MN073: "Архангай",
  MN071: "Баян-Өлгий",
  MN069: "Баянхонгор",
  MN067: "Булган",
  MN037: "Дархан-Уул",
  MN061: "Дорнод",
  MN063: "Дорноговь",
  MN059: "Дундговь",
  MN057: "Завхан",
  MN065: "Говь-Алтай",
  MN064: "Говьсүмбэр",
  MN039: "Хэнтий",
  MN043: "Ховд",
  MN041: "Хөвсгөл",
  MN035: "Орхон",
  MN049: "Сэлэнгэ",
  MN051: "Сүхбаатар",
  MN047: "Төв",
  MN046: "Увс",
  MN1: "Улаанбаатар",
  MN053: "Өмнөговь",
  MN055: "Өвөрхангай",
};

export const AIMAG_IDS = Object.keys(AIMAG_ID_TO_NAME);

export const AIMAG_ID_TO_SLUG = {
  MN073: "arkhangai",
  MN071: "bayan-ulgii",
  MN069: "bayankhongor",
  MN067: "bulgan",
  MN037: "darkhan-uul",
  MN061: "dornod",
  MN063: "dornogovi",
  MN059: "dundgovi",
  MN057: "zavkhan",
  MN065: "govi-altai",
  MN064: "govisumber",
  MN039: "khentii",
  MN043: "khovd",
  MN041: "khuvsgul",
  MN035: "orkhon",
  MN049: "selenge",
  MN051: "sukhbaatar",
  MN047: "tuv",
  MN046: "uvs",
  MN1: "ulaanbaatar",
  MN053: "umnugovi",
  MN055: "uvurhangai",
};

export const SLUG_TO_AIMAG_ID = Object.fromEntries(
  Object.entries(AIMAG_ID_TO_SLUG).map(([id, slug]) => [slug, id])
);

export const GET_KEYS = () => {
  return Object.keys();
};
