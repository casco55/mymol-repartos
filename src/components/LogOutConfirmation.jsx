export const LogOutConfirmation = ({
    handleCloseLogOutConfirmation,
    handleLogOut
}) => {
    return (
        <div className="modal fade show oscuro-rgba" style={{ display: "block" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cerrar sesión</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseLogOutConfirmation}></button>
                    </div>
                    <div className="modal-body">
                        <p>¿Estás seguro de que quieres cerrar sesión?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseLogOutConfirmation}>Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={handleLogOut}>Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    )
}