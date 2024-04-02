import React from "react";
import FeatureFlag from "../components/feature-flag/FeatureFlag";
import FeatureFlagContext from "../components/feature-flag/context/FeatureFlagContext";

function FeatureFlags() {
  return (
    <FeatureFlagContext>
      <FeatureFlag />
    </FeatureFlagContext>
  );
}

export default FeatureFlags;
