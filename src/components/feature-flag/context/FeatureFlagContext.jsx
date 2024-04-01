import React, { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../../../services/featureFlagData";

export const FeatureFlagsContext = createContext(null);

function FeatureFlagGlobalStateContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      // original service call
      const response = await featureFlagDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      throw new Error(err);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ enabledFlags, loading }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

export default FeatureFlagGlobalStateContext;
