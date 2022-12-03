import { useState } from "react";

export const useRequestModalDetail = () => {
    const [displayRequestModalDetail, setDisplayRequestModalDetail] = useState(false);
    const [idRequestModalDetail, setIdRequestModalDetail] = useState(0);
    const handleDisplayRequestModalDetail = (id) => {
        setIdRequestModalDetail(id);
        setDisplayRequestModalDetail(true);
    }
    const handleCloseRequestModalDetail = () => {
        setDisplayRequestModalDetail(false);
        setIdRequestModalDetail(0);
    }

    return {
        displayRequestModalDetail,
        idRequestModalDetail,
        handleDisplayRequestModalDetail,
        handleCloseRequestModalDetail
    }
}