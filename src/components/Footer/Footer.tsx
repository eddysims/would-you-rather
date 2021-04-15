import { LegacyRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Link } from "@/components/Link";
import { NumCounter } from "@/components/NumCounter";
import handleViewport from "react-in-viewport";

import { FOOTER_DATA_QUERY } from "./Footer.gql";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Logo variation="full" />
        <FooterStats />
      </footer>
      <Container>
        <div className={styles.subfooter}>
          <div>
            A project by{" "}
            <Link to="https://eddysims.com" external>
              Eddy Sims
            </Link>
            .
          </div>
          <ul>
            <li>
              <Link to="/terms-of-service">Terms Of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

const FooterStats = handleViewport(FooterStatsInternal);

interface FooterStatsProps {
  readonly inViewport: boolean;
  readonly enterCount: number;
  readonly forwardedRef: LegacyRef<HTMLDivElement>;
}

function FooterStatsInternal({
  inViewport,
  enterCount,
  forwardedRef,
}: FooterStatsProps) {
  const [getStats, { called, data }] = useLazyQuery(FOOTER_DATA_QUERY);
  const questions = data?.question_aggregate?.aggregate?.count || 1;
  const votes =
    data?.question_aggregate?.aggregate?.sum?.voteOne +
      data?.question_aggregate?.aggregate?.sum?.voteTwo || 1;

  if (enterCount === 1 && inViewport) {
    if (!called) {
      getStats();
    }
  }

  return (
    <div className={styles.stats} ref={forwardedRef}>
      <div className={styles.stat}>
        Over{" "}
        <span>
          <NumCounter number={questions - 1} />
        </span>
        questions asked
      </div>
      <div className={styles.stat}>
        Over{" "}
        <span>
          <NumCounter number={votes - 1} />
        </span>
        votes casted
      </div>
    </div>
  );
}
