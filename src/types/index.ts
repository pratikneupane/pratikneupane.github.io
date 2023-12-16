export type Icon = {
  name: string;
  icon: JSX.Element;
  darkColor: string;
  lightColor: string;
};

export type HeroProps = {
  isDarkMode: boolean;
};

export type HeaderProps = {
  isDarkMode: boolean;
  handleDarkMode: () => void;
};

export type IconContainerProps = {
  isDarkMode: boolean;
  icon: any;
  darkColor: string;
  lightColor: string;
};