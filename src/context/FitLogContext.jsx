"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const addToPlan = (workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      if (currentPlan.length >= 5) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (id) => {
    setPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== id)
    );
  };

  const saveWorkout = (workout) => {
    setSaved((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  const removeSaved = (id) => {
    setSaved((currentSaved) =>
      currentSaved.filter((item) => item.id !== id)
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}