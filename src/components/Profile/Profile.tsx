import { Heading } from "@/components/Heading";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/Button";

import styles from "./Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <Heading>Your Profile</Heading>
        <Avatar size="small" />
        <Icon icon="Google" />
      </div>
      <div className={styles.form}>
        <InputText label="Display name" />
        <InputText label="Nickname" />
        <div className={styles.button}>
          <Button
            title="Update Your Profile"
            onClick={() => alert("Do update")}
          />
        </div>
      </div>
    </div>
  );
}
