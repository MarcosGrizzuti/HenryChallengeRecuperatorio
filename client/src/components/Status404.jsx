import React from "react";

import "./Status404.scss";

export const Status404 = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>Oops!</h1>
            <h2>404 Pagina No Encontrada</h2>
            <hr/>
            <div class="error-details">
              Lo sentimos, se ha producido un error, no se ha encontrado la
              página solicitada.
            </div>
            <div class="error-actions">
              <button onClick={() => window.history.back()} class="btn btn-primary btn-lg">
                <span class="glyphicon glyphicon-home"></span>
                Volver{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
