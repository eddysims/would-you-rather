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
  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.content}>
        <Heading>Sign in to submit a question</Heading>
        <div className={styles.providers}>
          <Button title="Sign in with Github" onClick={handleGithubSignIn} />
          {/* <Button title="Sign in with Google" onClick={handleGoogleSignIn} /> */}
        </div>
      </div>
    </Modal>
  );

  async function handleGithubSignIn() {
    await signIn("github", {
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
    });
  }

  // function handleGoogleSignIn() {
  //   alert("Google sign in coming soon");
  // }
}
