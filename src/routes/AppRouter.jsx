import React, { memo } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { SelfAssigned } from "../views/SelfAssigned";
import { Unassigned } from "../views/Unassigned";
/* import { NavBar } from "../components/NavBar"; */
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = memo(({ isLoggedIn }) => {
    return (
        <>
            <Router>
                <div className="row g-0">
                    {/* {isLoggedIn && <NavBar />} */}
                    <div className={isLoggedIn ? 'col-10' : 'col-12'}>
                        <Routes basename="/">
                            <Route path="/login" element={<PublicRoute isLoggedIn={isLoggedIn} />} />
                            <Route path='/' element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
                                <Route path='/' element={<Unassigned />} />
                                <Route path='/self_assigned' element={<SelfAssigned />} />

                            </Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
})