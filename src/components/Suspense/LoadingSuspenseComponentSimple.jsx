/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";

function LoadingSuspenseComponentSimple() {
  const { t, i18n } = useTranslation("translation");

  return <p>Loading...</p>;
}

export default LoadingSuspenseComponentSimple;
