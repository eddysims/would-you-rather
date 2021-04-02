import * as SVGIcon from "react-feather";

export type IconNames = keyof typeof SVGIcon;

interface IconProps {
  readonly icon: IconNames;
  /**
   * The size of the icon.
   */
  readonly size?: "tiny" | "base";
}
export function Icon({ icon, size = "base" }: IconProps) {
  const Element = SVGIcon[icon as keyof typeof SVGIcon];

  const heights = {
    tiny: 12,
    base: 24,
  };

  return <Element data-testid={`icon-${icon}`} size={heights[size]} />;
}
