/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { loadThemeByName } from "./../theme";
import useSiteSettingsStore from "./../store/useSiteSettingsStore";

function NotFound() {
  const themeName = useSiteSettingsStore((store) => store.theme);

  const { t, i18n } = useTranslation("translation");
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={loadThemeByName(themeName)}>
      <CssBaseline />
      <Grid
        container
        style={{ height: "100vh" }}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Grid item>
          <h1>{t("Not Found")}</h1>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={() => navigate(`${import.meta.env.BASE_URL}`)}
          >
            {t("Go Back")}
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default NotFound;
