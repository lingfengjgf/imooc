import { mapValues, without } from "lodash-es";

export interface CommonComponentProps {
  // actions
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: number;
  // postiton and x y
  position: string;
  left: string;
  top: string;
  right: string;
}

export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: "",
  url: "",
  // size
  height: "",
  width: "240px",
  paddingLeft: "0",
  paddingRight: "0",
  paddingTop: "0",
  paddingBottom: "0",
  // border type
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0",
  borderRadius: "0",
  // shadow and opacity
  boxShadow: "0 0 0 #000",
  opacity: 1,
  // postiton and x y
  position: "absolute",
  left: "0",
  top: "0",
  right: "0",
};

export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: number;
  color: string;
  background: string;
  textAlign: string;
}

export const textDefaultProps: TextComponentProps = {
  // basic props - font styles
  text: "正文内容",
  fontSize: "14px",
  fontFamily: "",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: 1,
  color: "#000",
  background: "",
  textAlign: "left",
  ...commonDefaultProps,
};

export const transformToComponentProps = (props: TextComponentProps) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor as StringConstructor | NumberConstructor,
      default: item,
    };
  });
};

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  "actionType",
  "url",
  "text"
);
