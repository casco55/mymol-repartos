import { Thead } from "../../../components/tableComponents/Thead"
import { SelfAssignedRow } from "./SelfAssignedRow"


export const SelfAssignedTable = ({
    data,
    cols,
    handleDisplayRequestModalDetail
}) => {
    return (
        <>
            <div className="row g-0 col-11 mx-auto">
                <table className="table table-striped">
                    <Thead cols={cols} />
                    <tbody>
                        {data.map((request, key) => (
                            <SelfAssignedRow
                                key={key}
                                request={request}
                                handleDisplayRequestModalDetail={handleDisplayRequestModalDetail}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}