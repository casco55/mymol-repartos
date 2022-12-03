import { BiDetail } from "react-icons/bi";

export const UnassignedRow = ({
    request,
    handleDisplayRequestModalDetail
}) => {
    const { id, nombre_restaurante, direccion_reparto } = request;
    return (
        <>
            <tr>
                <td>{nombre_restaurante}</td>
                <td>{direccion_reparto}</td>
                <td className="text-center">
                    <BiDetail
                        size={24}
                        onClick={() => handleDisplayRequestModalDetail(id)}
                    />
                </td>
            </tr>
        </>
    )
}