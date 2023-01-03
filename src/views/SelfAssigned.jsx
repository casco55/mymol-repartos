import { pathNameSelfAssigned } from "../helpers/endPoints";
import { useData } from "../hooks/useData";
import { SelfAssignedTable } from "../features/selfAssigment/components/SelfAssignedTable";
import { selfAssignedTableCols } from "../features/selfAssigment/helpers/selfAsignedTableCols";
import { useRequestModalDetail } from "../hooks/useRequestModalDetail";
import { RequestModalDetailSelfAssigned } from "../features/selfAssigment/components/RequestModalDetailSelfAssigned";

export const SelfAssigned = () => {
  const { data, dataList } = useData(pathNameSelfAssigned);
  const {
    displayRequestModalDetail,
    idRequestModalDetail,
    handleDisplayRequestModalDetail,
    handleCloseRequestModalDetail,
  } = useRequestModalDetail();
  return (
    <>
      <div className="row g-0 position-relative d-flex flex-column col-12 bg_white border rounded-4">
        <div className="row g-0 position-relative d-flex flex-column">
          {!data && <h1>Hubo un error</h1>}
          {data.length === 0 && <h1>No hay productos</h1>}
          {data.length > 0 && (
            <SelfAssignedTable
              data={data}
              cols={selfAssignedTableCols}
              handleDisplayRequestModalDetail={handleDisplayRequestModalDetail}
            />
          )}
          {displayRequestModalDetail && (
            <RequestModalDetailSelfAssigned
              id={idRequestModalDetail}
              closeRequestModalDetail={handleCloseRequestModalDetail}
              listFn={dataList}
            />
          )}
        </div>
      </div>
    </>
  );
};
