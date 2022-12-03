import { RequestModalDetail } from "../features/unassigned/components/RequestDetailModal";
import { UnassignedTable } from "../features/unassigned/components/UnassignedTable";
import { unassignedTableCols } from "../features/unassigned/helpers/UnassignedTableCols";
import { pathNameUnassigned } from "../helpers/endPoints"
import { useData } from "../hooks/useData"
import { useRequestModalDetail } from "../hooks/useRequestModalDetail";

export const Unassigned = () => {
    const {
        data,
        dataList
    } = useData(pathNameUnassigned)

    const {
        displayRequestModalDetail,
        idRequestModalDetail,
        handleDisplayRequestModalDetail,
        handleCloseRequestModalDetail
    } = useRequestModalDetail();
    console.log(data);

    return (
        <>
            <div className="row g-0 position-relative d-flex flex-column">
                {!data && <h1>Hubo un error</h1>}
                {data.length === 0 && <h1>No hay productos</h1>}
                {data.length > 0 &&
                    <UnassignedTable
                        data={data}
                        cols={unassignedTableCols}
                        handleDisplayRequestModalDetail={handleDisplayRequestModalDetail}
                    />
                }
                {displayRequestModalDetail &&
                    <RequestModalDetail
                        id={idRequestModalDetail}
                        closeRequestModalDetail={handleCloseRequestModalDetail}
                    />
                }
            </div>
        </>
    )
}