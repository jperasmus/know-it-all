export const PORT = 8080;
export const DEV_PORT = 8081;
export const WEBPACK_BUNDLE = `webpack-bundle.js`;

export const COLORS = {
  GREY_LIGHT: `#f5f5f5`,
  GREY_MID: `#e0e0e0`,
  GREY_DARK: `#455a64`,
  GREEN: `#4caf50`,
  ORANGE: `#ff9800`,
  RED: `#f44336`,
  PRIMARY: `#3f51b5`,
  WHITE: `#fafafa`,
};

export const TAGS = {
  C: { key: `C`, value: `Concept` },
  JP: { key: `JP`, value: `JS Primitive` },
  JF: { key: `JF`, value: `JS Function` },
  JM: { key: `JM`, value: `JS Primitive/Element Method` },
  DE: { key: `DE`, value: `DOM Element` },
  EA: { key: `EA`, value: `Element Attribute` },
  CP: { key: `CP`, value: `CSS Property` },
  CV: { key: `CV`, value: `CSS Value` },
  DT: { key: `DT`, value: `Data type` },
  ROOT: { key: `ROOT`, value: `ROOT` },
  MODULE: { key: `MODULE`, value: `MODULE` },
  METHOD: { key: `METHOD`, value: `METHOD` },
  INFO: { key: `INFO`, value: `INFO` },
  CONSTRUCTOR: { key: `CONSTRUCTOR`, value: `CONSTRUCTOR` },
  OLD: { key: `OLD`, value: `OLD` },
  NEW: { key: `NEW`, value: `NEW` },
  EVENT: { key: `EVENT`, value: `EVENT` },
  ATTR: { key: `ATTR`, value: `ATTR` },
  STATIC: { key: `STATIC`, value: `STATIC` },
  VALUE: { key: `VALUE`, value: `VALUE` },
  PARAM: { key: `PARAM`, value: `PARAM` },
  PROP: { key: `PROP`, value: `PROP` },
  RETURN_VALUE: { key: `RETURN_VALUE`, value: `RETURN_VALUE` },
  OBJECT: { key: `OBJECT`, value: `OBJECT` },
  CLASS: { key: `CLASS`, value: `CLASS` },
  GROUPING: { key: `GROUPING`, value: `GROUPING` },
  CONSTANT: { key: `CONSTANT`, value: `CONSTANT` },
  CLI: { key: `CLI`, value: `CLI` },
  EXTENSION: { key: `EXTENSION`, value: `EXTENSION` },
  INTERFACE: { key: `INTERFACE`, value: `INTERFACE` },
  VARIABLE: { key: `VARIABLE`, value: `VARIABLE` },
  ELEMENT: { key: `ELEMENT`, value: `ELEMENT` },
  STATEMENT: { key: `STATEMENT`, value: `STATEMENT` },
  FUNCTION: { key: `FUNCTION`, value: `FUNCTION` },
  EXPRESSION: { key: `EXPRESSION`, value: `EXPRESSION` },
  KEYWORD: { key: `KEYWORD`, value: `KEYWORD` },
  DECLARATION: { key: `DECLARATION`, value: `DECLARATION` },
  OPERATOR: { key: `OPERATOR`, value: `OPERATOR` },
  ECMA_402: { key: `ECMA_402`, value: `ECMA_402` },
  TYPE: { key: `TYPE`, value: `TYPE` },
  PRIMITIVE: { key: `PRIMITIVE`, value: `PRIMITIVE` },
  ECMA_262: { key: `ECMA_262`, value: `ECMA_262` },
  SYMBOL: { key: `SYMBOL`, value: `SYMBOL` },
  WEBVTT1: { key: `WEBVTT1`, value: `WEBVTT1` },
  SELECTOR: { key: `SELECTOR`, value: `SELECTOR` },
  AT_RULE: { key: `AT_RULE`, value: `AT_RULE` },
  DATA_TYPE: { key: `DATA_TYPE`, value: `DATA_TYPE` },
  REMOTE_PLAYBACK: { key: `REMOTE_PLAYBACK`, value: `REMOTE_PLAYBACK` },
  MEDIA_SOURCE: { key: `MEDIA_SOURCE`, value: `MEDIA_SOURCE` },
  UNIT: { key: `UNIT`, value: `UNIT` },
  FAKE: { key: `FAKE`, value: `FAKE` },
  MEDIA_PLAYBACK_QUALITY: { key: `MEDIA_PLAYBACK_QUALITY`, value: `MEDIA_PLAYBACK_QUALITY` },
  PUSH_API: { key: `PUSH_API`, value: `PUSH_API` },
  WEBRTC: { key: `WEBRTC`, value: `WEBRTC` },
  VENDOR_PREFIXED: { key: `VENDOR_PREFIXED`, value: `VENDOR_PREFIXED` },
  WEB_ANIMATIONS_1: { key: `WEB_ANIMATIONS_1`, value: `WEB_ANIMATIONS_1` },
  WEBRTC_STATS: { key: `WEBRTC_STATS`, value: `WEBRTC_STATS` },
};

export const SCORES = {
  LEVEL_0: {
    key: 0,
    color: COLORS.GREY_LIGHT,
    icon: `--`,
    shortTitle: `Unrated`,
    value: `Unrated`,
  },
  LEVEL_1: {
    key: 1,
    color: COLORS.RED,
    icon: `¯\\_(ツ)_/¯`,
    shortTitle: `Don't know it`,
    value: `I've never heard of it`,
  },
  LEVEL_2: {
    key: 2,
    color: COLORS.ORANGE,
    icon: `ʘ‿ʘ`,
    shortTitle: `Know of it`,
    value: `I've heard of it, but I could know it better`,
  },
  LEVEL_3: {
    key: 3,
    color: COLORS.GREEN,
    icon: `(⌐■_■)`,
    shortTitle: `Know it`,
    value: `I know it completely`,
  },
};

export const KEYS = {
  DOWN: 40,
  ENTER: 13,
  ESC: 27,
  SPACE: 32,
  UP: 38,
  LEFT: 37,
  RIGHT: 39,
  TOP_0: 48,
  TOP_1: 49,
  TOP_2: 50,
  TOP_3: 51,
  NUM_0: 96,
  NUM_1: 97,
  NUM_2: 98,
  NUM_3: 99,
};