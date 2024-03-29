import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    listColor: string;
    btnBgColor: string;
    btnOpColor: string;
    btnTextColor: string;
    btnbtnTextOpColor: string;
  }
}