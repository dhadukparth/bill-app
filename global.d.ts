declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
    import { ImageSourcePropType } from "react-native";
    const content: ImageSourcePropType;
    export default content;
}


declare module "*.ttf" {
    const value: string;
    export default value;
}