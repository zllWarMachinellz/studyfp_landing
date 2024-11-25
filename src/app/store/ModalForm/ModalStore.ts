import { create } from "zustand";

interface ModalFormStatus {
  ModalStatus: boolean;
  setModalStatus: (status: boolean) => void;
}

export const useModalFormStatus = create<ModalFormStatus>((set) => ({
  ModalStatus: false,
  setModalStatus: (status) => set({ ModalStatus: status }),
}));