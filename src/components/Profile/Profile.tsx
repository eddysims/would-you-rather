import { useRef, useState, MutableRefObject } from "react";
import { Heading } from "@/components/Heading";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Toast, ToastRef } from "@/components/Toast";
import { useFormState } from "@/hooks/useFormState";
import {
  ProfileDataFragment,
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables,
} from "@/types/graphql";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_PROFILE } from "./Profile.gql";

import styles from "./Profile.module.css";

interface ProfileProps {
  readonly user: ProfileDataFragment;
}

export function Profile({ user }: ProfileProps) {
  const [name, setName] = useState(user.name);
  const [nickname, setNickname] = useState(user.nickname);
  const [{ isDirty, isValid }, setFormState] = useFormState();
  const [updateProfile, { loading }] = useMutation<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >(UPDATE_USER_PROFILE);
  const toastRef = useRef() as MutableRefObject<ToastRef>;

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.title}>
          <Heading>Your Profile</Heading>
          <Avatar size="small" name={user.name} imageUrl={user.avatarUrl} />
          <Icon icon={getProfileIcon()} />
        </div>
        <Form onSubmit={handleSubmit} onStateChange={setFormState}>
          <div className={styles.form}>
            <InputText
              label="Display name"
              onChange={handleNameChange}
              initialValue={name}
              validations={{ required: "Display name is required" }}
            />
            <InputText
              label="Nickname"
              initialValue={nickname}
              onChange={handleNickNameChange}
            />
            <div className={styles.button}>
              <Button
                title="Update Your Profile"
                isSubmit
                loading={loading}
                disabled={!isDirty || !isValid}
              />
            </div>
          </div>
        </Form>
      </div>
      <Toast ref={toastRef} />
    </>
  );

  function getProfileIcon() {
    if (user.provider === "github") {
      return "Octocat";
    }

    return "Google";
  }

  function handleNameChange(val: string) {
    setName(val);
  }

  function handleNickNameChange(val: string) {
    setNickname(val);
  }

  async function handleSubmit() {
    try {
      const result = await updateProfile({
        variables: {
          id: user.id,
          name,
          nickname,
        },
      });

      if (result.data.update_users.returning.length < 1) {
        toastRef.current.notify({
          status: "error",
          message: "Something went wrong.",
        });
        return;
      }

      toastRef.current.notify({
        status: "success",
        message: "Profile successfully updated.",
      });
    } catch (error) {
      toastRef.current.notify({
        status: "error",
        message: "Something went wrong, please try again.",
      });
    }
  }
}
