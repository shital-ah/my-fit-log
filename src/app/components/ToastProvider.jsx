"use client";

import Toast from "./Toast";
import { useFitLog } from "../../context/FitLogContext";

export default function ToastProvider() {
  const { toast } = useFitLog();

  return <Toast message={toast} />;
}