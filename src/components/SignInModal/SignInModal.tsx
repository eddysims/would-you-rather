import { useSession, signIn } from "next-auth/client";
import { Modal } from "@/components/Modal";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";

import { useEffect } from "react";
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
  const [session] = useSession();

  useEffect(() => {
    if (session) {
      onClose();
    }
  }, [session]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.content}>
        {session && open && "FOOOBO"}
        <Heading>Sign in to submit a question</Heading>
        <div className={styles.providers}>
          <Button title="Sign in with Github" onClick={handleGithubSignIn} />
          {/* <Button title="Sign in with Google" onClick={handleGoogleSignIn} /> */}
        </div>
      </div>
    </Modal>
  );

  function handleGithubSignIn() {
    signIn("github");
  }

  // function handleGoogleSignIn() {
  //   alert("Google sign in coming soon");
  // }
}
