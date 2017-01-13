import { vars } from "polythene-theme";

const iconSizesPx = (size = vars.unit_icon_size) => ({
  width:  size + "px",
  height: size + "px"
});

export default (selector, componentVars) => [{
  [selector]: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundRepeat: "no-repeat",
    position: "relative",
    fontSize: 0,
    lineHeight: 0,

    "&.pe-icon--avatar img": {
      border: "none",
      borderRadius: "50%",
      width: "100%",
      height: "100%"
    },

    " img": {
      height: "100%"
    },

    " svg": {
      width: "100%",
      height: "100%"
    },

    "&.pe-icon--small":   iconSizesPx(componentVars.size_small),
    "&.pe-icon--regular": iconSizesPx(componentVars.size_regular),
    "&.pe-icon--medium":  iconSizesPx(componentVars.size_medium),
    "&.pe-icon--large":   iconSizesPx(componentVars.size_large)
  }
}];