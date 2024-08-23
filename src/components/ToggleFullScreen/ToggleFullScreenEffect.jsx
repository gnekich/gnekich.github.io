import React from "react";

import useFullScreenStore from "./useFullScreenStore";

/* export */ function toggleFullScreen() {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

export const ToggleFullScreenEffect = () => {
  const fullScreenMode = useFullScreenStore((state) => state.fullScreenMode);
  const setFullScreenMode = useFullScreenStore(
    (state) => state.setFullScreenMode
  );
  const checkIfFullScreenModeIsAvailable = useFullScreenStore(
    (state) => state.checkIfFullScreenModeIsAvailable
  );

  React.useEffect(() => {
    toggleFullScreen();
  }, [fullScreenMode]);

  React.useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreen =
        document.fullScreenElement ||
        document.mozFullScreen ||
        document.webkitIsFullScreen;
      // Update your store or state based on the full-screen status
      setFullScreenMode(!!isFullScreen);
    };

    // Check if full-screen mode is available
    checkIfFullScreenModeIsAvailable();

    // Add event listener for full-screen changes
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return;
};

export default ToggleFullScreenEffect;
