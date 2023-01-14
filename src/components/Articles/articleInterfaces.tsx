export interface IArticleProps {
  to?: string;
  id?: number;
  category?: string;
  title?: string;
  text?: string;
  date?: Date;
  image?: string;
  code?: string;
  backgroundColor?: number|string;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: string;
  data?: Array<string>|undefined;
  // style?: any;
  // children?: any;
}
