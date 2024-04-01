import React, { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../../../services/featureFlagData";

export const FeatureFlagDataContext = createContext(null);

function FeatureFlagContext({ children }) {
  const [enabledFlags, setEnabledFlags] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchFeatureFlag() {
    try {
      setLoading(true);
      const response = await featureFlagDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      throw new Error(err);
    }
  }
  console.log("response", enabledFlags);

  useEffect(() => {
    fetchFeatureFlag();
  }, []);

  return (
    <FeatureFlagDataContext.Provider value={{ enabledFlags, loading }}>
      {children}
    </FeatureFlagDataContext.Provider>
  );
}

export default FeatureFlagContext;
