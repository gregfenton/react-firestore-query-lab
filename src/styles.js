const COLOR_LIGHT_BLUE = "#b3e5fb";
const COLOR_MEDIUM_BLUE = "#4c88df";
const COLOR_BRIGHT_GREEN = "#d2df4c";
const COLOR_DARK_GREEN = "#7b8422";
const COLOR_PINK = "pink";

export const BUTTON_BASE = {
  backgroundColor: COLOR_BRIGHT_GREEN,
  border: `2px solid ${COLOR_DARK_GREEN}`,
  borderRadius: "12px",
  boxShadow: "0 8px 10px 0 rgba(0,0,0,0.4), 0 5px 10px 0 rgba(0,0,0,0.19)",
  padding: "5px",
};

export const BUTTON_LOAD = {
  ...BUTTON_BASE,
  fontSize: "8px",
};

export const BUTTON_RUN_QUERY = {
  ...BUTTON_BASE,
  fontSize: "18px",
  fontWeight: "bold",
  marginLeft: "20px",
  marginRight: "20px",
};

export const EXAMPLE_QUERIES = {
  paddingLeft: "45px",
  textIndent: "-40px",
  fontFamily: "monospace",
};

export const LAB = {
  display: "grid",
  gridTemplateColumns: "auto",
  gridGap: "10px",
  backgroundColor: COLOR_MEDIUM_BLUE,
  padding: "10px",
};

export const QUERY_ZONE = {
  fontFamily: "monospace",
  marginLeft: "20px",
  marginRight: "20px",
};

export const QUERY_ZONE_NUM_ROWS = 5;

export const RESULTS = {
  fontFamily: "monospace",
  whiteSpace: "pre",
  backgroundColor: COLOR_LIGHT_BLUE,
};

export const RESULTS_ERROR = {
  fontFamily: "monospace",
  wordWrap: "break-word",
  wordBreak: "break-all",
  backgroundColor: COLOR_PINK,
};
