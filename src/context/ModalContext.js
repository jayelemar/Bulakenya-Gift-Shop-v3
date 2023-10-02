import { useState } from "react";
import { createContext } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false) 

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;