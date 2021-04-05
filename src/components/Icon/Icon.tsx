import * as SVGIcon from "react-feather";
import { customIcons } from "./customIcons";

export type IconNames = keyof typeof SVGIcon | keyof typeof customIcons;

interface IconProps {
  readonly icon: IconNames;
  /**
   * The size of the icon.
   */
  readonly size?: "tiny" | "base";
}

export function Icon({ icon, size = "base" }: IconProps) {
  const isCustomIcon = Object.keys(customIcons).includes(icon);

  const heights = {
    tiny: 12,
    base: 24,
  };

  if (isCustomIcon) {
    const customIcon = customIcons[icon as keyof typeof customIcons];

    return (
      <svg
        width={heights[size]}
        height={heights[size]}
        viewBox={customIcon.viewbox}
        data-testid={`icon-${icon}`}
      >
        {customIcon.paths.map((path) => (
          <path key={path.d} d={path.d} fill={path.fill} />
        ))}
      </svg>
    );
  }

  const Element = SVGIcon[icon as keyof typeof SVGIcon];

  return <Element data-testid={`icon-${icon}`} size={heights[size]} />;
}
