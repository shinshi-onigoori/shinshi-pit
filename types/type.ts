type pitContentType = {
  id: number;
  name: string;
  description: string;
  link: string;
  type: "component" | "animation" | "Demo" | "App" | "art";
  component?: JSX.Element;
};
