import * as SVGIcon from "react-feather";

export type IconNames = keyof typeof SVGIcon;

interface IconProps {
  readonly icon: IconNames;
}
export function Icon({ icon }: IconProps) {
  const Element = SVGIcon[icon as keyof typeof SVGIcon];

  return <Element data-testid={`icon-${icon}`} size={20} />;
}
