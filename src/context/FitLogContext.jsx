"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [toast, setToast] = useState("");

    const showToast = (message) => {
        setToast(message);

        setTimeout(() => {
            setToast("");
        }, 2500);
    };

    const addToPlan = (workout) => {
        if (plan.some((item) => item.id === workout.id)) {
            showToast("Workout already added to your plan.");
            return;
        }

        if (plan.length >= 5) {
            showToast("You can add a maximum of 5 workouts.");
            return;
        }

        setPlan((currentPlan) => [...currentPlan, workout]);
        showToast(`${workout.name} added to your plan.`);
    };

    const removeFromPlan = (id) => {
        const workout = plan.find((item) => item.id === id);

        setPlan((currentPlan) =>
            currentPlan.filter((item) => item.id !== id)
        );

        if (workout) {
            showToast(`${workout.name} removed from your plan.`);
        }
    };

    const saveWorkout = (workout) => {
        if (saved.some((item) => item.id === workout.id)) {
            showToast("Workout already saved.");
            return;
        }

        setSaved((currentSaved) => [...currentSaved, workout]);
        showToast(`${workout.name} saved for later.`);
    };

    const removeSaved = (id) => {
        const workout = saved.find((item) => item.id === id);

        setSaved((currentSaved) =>
            currentSaved.filter((item) => item.id !== id)
        );

        if (workout) {
            showToast(`${workout.name} removed from saved.`);
        }
    };

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                toast,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeSaved,
                showToast,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
}

export function useFitLog() {
    return useContext(FitLogContext);
}