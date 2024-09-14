import {create} from "zustand";

export type ModalType =
    | "editTitle"
    | "editTitleMain"
    | "editDescription"
interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    onOpen: (type: ModalType) => void;
    onClose: () => void;
}
export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type }),
    onClose: () => set({ isOpen: false, type: null }),
}));
