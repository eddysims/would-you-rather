import classnames from "classnames";
import { Icon } from "@/components/Icon";
import styles from "./Avatar.module.css";

interface AvatarProps {
  /**
   * The name of the user that is being displayed. This name will also be used
   * to generate the iniials that show for the Avatar
   */
  readonly name?: string;
  /**
   * The url to the image that will be displayed
   */
  readonly imageUrl?: string;
  /**
   * The size the avatar will display at.
   */
  readonly size?: "base" | "small";
}

export function Avatar({ name, imageUrl, size = "base" }: AvatarProps) {
  const initials = getInitials();
  const style = {
    backgroundImage: imageUrl && `url(${imageUrl})`,
  };

  const avatarClasses = classnames(styles.avatar, {
    [styles.small]: size === "small",
  });

  return (
    <div
      className={avatarClasses}
      style={style}
      aria-label={name ? `Avatar for user ${name}` : "Current users avatar"}
    >
      {!imageUrl &&
        (name ? (
          initials
        ) : (
          <Icon icon="User" size={size === "base" ? "base" : "tiny"} />
        ))}
    </div>
  );

  function getInitials() {
    if (!name) {
      return undefined;
    }

    const initialsArr = name
      .split(" ")
      .map((item) => (item.length > 0 ? item[0] : false))
      .filter((item) => item !== false);

    if (initialsArr.length > 1) {
      return `${initialsArr[0]}${initialsArr.pop()}`;
    }

    return initialsArr[0];
  }
}
