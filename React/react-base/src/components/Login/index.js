import React from 'react';
import { useDispatch } from 'react-redux';


import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <>
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper ">
          <div class="content-wrapper d-flex align-items-center auth">
            <div class="row flex-grow">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-center p-5">
                  <div class="brand-logo">
                    <img src={require("./logo1.png")} />
                  </div>
                  <h4>Olá!</h4>
                  <h6 class="font-weight-light">Entre com seus dados para continuar.</h6>

                  <form class="pt-3" method="post" >
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" id="username" name="username" placeholder="Usuário" />
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-lg" id="password1" name="password1" placeholder="Senha" />
                    </div>
                    <div class="mt-3">
                      <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">ENTRAR</button>
                    </div>
                    <div class="my-2 d-flex justify-content-between align-items-center">
                      <a href="#" class="auth-link text-black">Esqueceu a senha?</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <script src="assets/vendors/js/vendor.bundle.base.js"></script>

      <script src="assets/js/off-canvas.js"></script>
      <script src="assets/js/hoverable-collapse.js"></script>
      <script src="assets/js/misc.js"></script>
    </>
  );
}
