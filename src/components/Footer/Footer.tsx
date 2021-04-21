import { LegacyRef, useEffect, useState } from "react";
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
  const [questions, setQuestions] = useState<number>();
  const [votes, setVotes] = useState<number>();

  if (enterCount === 1 && inViewport) {
    if (!called) {
      getStats();
    }
  }

  useEffect(() => {
    setQuestions(data?.question_aggregate?.aggregate?.count - 1);
    setVotes(
      data?.question_aggregate?.aggregate?.sum?.prefixVoteCount +
        data?.question_aggregate?.aggregate?.sum?.suffixVoteCount -
        1
    );
  }, [data]);

  return (
    <div className={styles.stats} ref={forwardedRef}>
      <div className={styles.stat}>
        Over <span>{questions ? <NumCounter number={questions} /> : 0}</span>
        questions asked
      </div>
      <div className={styles.stat}>
        Over <span>{votes ? <NumCounter number={votes} /> : 0}</span>
        votes casted
      </div>
    </div>
  );
}
