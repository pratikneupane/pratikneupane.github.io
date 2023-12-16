type IconContainerProps = {
  isDarkMode: boolean;
  icon: any;
  darkColor: string;
  lightColor: string;
};

const IconContainer = (props: IconContainerProps) => {
  const { isDarkMode, icon, darkColor, lightColor } = props;
  const iconColor = isDarkMode ? darkColor : lightColor;

  return (
    <li
      className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4 rounded-full shadow-lg text-3xl"
      style={{ color: iconColor }}
    >
      {icon}
    </li>
  );
};

export default IconContainer;
