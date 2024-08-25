/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";

import { Loader } from "@react-three/drei";

function LoadingSuspenseComponentSimple() {
  const { t, i18n } = useTranslation("translation");

  return (
    <>
      <Loader />
    </>
  );
}

export default LoadingSuspenseComponentSimple;
