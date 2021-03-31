import { Heading } from "@/components/Heading";
import { Avatar } from "@/components/Avatar";
import { ProfileHeaderDataFragment } from "@/types/graphql";

import styles from "./ProfileHeader.module.css";

interface ProfileHeaderProps {
  readonly data: ProfileHeaderDataFragment;
}

export function ProfileHeader({ data }: ProfileHeaderProps) {
  return (
    <div className={styles.profile}>
      <Avatar name={data?.name} imageUrl={data?.avatarUrl} />
      <Heading as="h1">Dashboard</Heading>
    </div>
  );
}
