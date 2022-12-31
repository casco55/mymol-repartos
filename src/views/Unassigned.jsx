import { RequestModalDetail } from "../features/unassigned/components/RequestDetailModal";
import { UnassignedTable } from "../features/unassigned/components/UnassignedTable";
import { unassignedTableCols } from "../features/unassigned/helpers/UnassignedTableCols";
import { pathNameForDelivery } from "../helpers/endPoints";
import { useData } from "../hooks/useData";
import { useRequestModalDetail } from "../hooks/useRequestModalDetail";

export const Unassigned = () => {
  const { data, idNotification, dataList } = useData(pathNameForDelivery);

  const {
    displayRequestModalDetail,
    idRequestModalDetail,
    handleDisplayRequestModalDetail,
    handleCloseRequestModalDetail,
  } = useRequestModalDetail();

  return (
    <>
      <div className="row g-0 position-relative d-flex flex-column">
        <div className="col-12 d-flex flex-row justify-content-between">
          {!data && <h1>Hubo un error</h1>}
          {data.length === 0 && <h1>No hay productos</h1>}
          {data.length > 0 && (
            <UnassignedTable
              data={data}
              cols={unassignedTableCols}
              handleDisplayRequestModalDetail={handleDisplayRequestModalDetail}
            />
          )}
          {displayRequestModalDetail && (
            <RequestModalDetail
              id={idRequestModalDetail}
              idNotification={idNotification}
              closeRequestModalDetail={handleCloseRequestModalDetail}
              listFn={dataList}
            />
          )}
        </div>
      </div>
    </>
  );
};
