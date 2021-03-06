import { useState } from "react";
import { signIn } from "next-auth/client";
import { Modal } from "@/components/Modal";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";

import styles from "./SignInModal.module.css";

interface SignInModalProps {
  /**
   * Determine whether the modal is open or not.
   */
  readonly open: boolean;
  /**
   * Handler when the modals is closed
   */
  onClose(): void;
}

export function SignInModal({ open, onClose }: SignInModalProps) {
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.content}>
        <Heading>Sign in to submit a question</Heading>
        <div className={styles.providers}>
          <Button
            title="Sign in with Google"
            loading={googleLoading}
            onClick={handleGoogleSignIn}
          />
          <Button
            title="Sign in with Github"
            loading={githubLoading}
            onClick={handleGithubSignIn}
          />
        </div>
      </div>
    </Modal>
  );

  function handleGithubSignIn() {
    setGithubLoading(true);
    signIn("github", {
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
    });
  }

  function handleGoogleSignIn() {
    setGoogleLoading(true);
    signIn("google", {
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
    });
  }
}
